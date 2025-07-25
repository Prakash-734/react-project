/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
      const fetchMenu = async () =>{
      const data = await fetch(
        "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId=" + resId +"&catalog_qa=undefined&submitAction=ENTER"
      )
      const json = await data.json();
  
      console.log(json)
      setResInfo(json.data)
    }
    fetchMenu();
    },[])

    
  if (resInfo === null) return <Shimmer />;

const info = resInfo?.cards?.[2]?.card?.card?.info|| {};
const { name,cuisines,costForTwoMessage } = info;

const {itemCards} =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;


return (
  <div>
    <h1>{name }</h1> 
    <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
    <h2>Menu</h2>
    <ul>
      {itemCards.map((item)=> <li key={item.card.info.id}>
        {item.card.info.name} - {"₹"}
        {item.card.info.price/100 || item.card.info.defaultPrice/100}
      </li> )}
    </ul>
  </div>
);

}
export default RestaurantMenu