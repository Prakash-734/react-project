import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => { 

  const {resData} = props;

  // eslint-disable-next-line no-unsafe-optional-chaining
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <div className="res-card-cousin">
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
