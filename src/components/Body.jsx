import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {


  return (
    <div className="body">
      <div className="btn"><button>
        Filter</button></div>
      <div className="res-container">
        
        {
          resList.map((restaurant ) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
        }
        
      </div>
    </div>
  );
};
export default Body;
