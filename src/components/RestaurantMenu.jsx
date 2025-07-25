/* eslint-disable no-unsafe-optional-chaining */

import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {


  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId)

  

    
  if (resInfo === null) return <Shimmer />;

const info = resInfo?.cards?.[2]?.card?.card?.info|| {};
const { name,cuisines, } = info;

const {itemCards} =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;


return (
  <div>
    <h1>{name }</h1> 
    <p>{cuisines.join(", ")}</p>
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