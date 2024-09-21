import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favourite food here</h2>
        <p>
          Choose a dive menu featuring a delectable array of dishes crafted wiht
          the finest ingredients and culinary expertise. Our mission is to
          satisfy your carvings and elevate your dining experience, one
          delicious at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
