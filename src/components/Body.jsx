import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); 
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await fetch(
          "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=13.0843007&lng=80.2704622&str=Restaurants%20with%20online%20food%20delivery%20in%20Chennai&trackingId=df9d7183-1ea9-d94e-7099eeaba43f&submitAction=ENTER&queryUniqueId=15df3c93-f5a4-4b32-0f49-4aa97b6da777"
        );
        const json = await data.json();
        const fetchedRestaurants =
          json?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.map(
            (card) => card.card.card
          ) || [];

        setAllRestaurants(fetchedRestaurants);
        setFilteredRestaurants(fetchedRestaurants);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (isLoading) return <Shimmer />;

  

  if(onlineStatus === false) 
    return (
    <h1>
      Looks like You're Offline...
      </h1>
    );

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black rounded-2xl"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-4 py-2 rounded-lg cursor-pointer bg-green-200 m-4"
            onClick={() => {
              const filtered = allRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center ">
          <button
          className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer"
          onClick={() => {
            const filtered = allRestaurants.filter(
              (restaurant) => restaurant?.info?.avgRating >= 4.5
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center ">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurants/"+ restaurant?.info?.id}>
          <RestaurantCard
            
            resData={restaurant}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
