import { useState } from "react";

const Header = () => {
  
  const [btnNameReact,setBtnNameReact] = useState("Login");



  return (
    <div className="header">
      <div className="">
        <img
          src="https://img.freepik.com/premium-vector/fast-food-delivery-vector-logo_1012247-128.jpg?w=2000"
          height={100}
          width={100}
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact ("Logout"): setBtnNameReact ("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
