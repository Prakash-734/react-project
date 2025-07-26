import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => { 

  const {resData} = props;

  // eslint-disable-next-line no-unsafe-optional-chaining
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] h-[550px] bg-gray-100 rounded-lg hover:bg-gray-300 ">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <div className="res-card-cousin py-4 text-lg">
        <h2 className="font-bold">{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4 className="font-semibold">{avgRating + " stars"}</h4>
        <h4>{"Cost For Two ₹"+costForTwo/100}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
