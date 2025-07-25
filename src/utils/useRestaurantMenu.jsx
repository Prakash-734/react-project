import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId=" +
          resId +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      setResInfo(json.data);
    };

    if (resId) {
      fetchData();
    }
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
