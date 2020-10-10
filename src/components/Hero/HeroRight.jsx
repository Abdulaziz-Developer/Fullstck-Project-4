import React from "react";
import { NavLink } from "react-router-dom";

const HeroRight = () => {
  return (
    <div className="HeroRight">
      <div className="HeroFlex">
        <h2 className="Hero-Header">Lorem ipsum dolor sit amet</h2>
        <p className="Hero-Para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          totam provident deleniti ea dignissimos necessitatibus itaque maxime
          quam, sapiente error eum molestias quaerat aperiam sed! Consequuntur
          similique unde voluptates nesciunt.
        </p>
        <NavLink to="/" className="Products">
          OUR PRODUCTS
        </NavLink>
      </div>
    </div>
  );
};
export default HeroRight;
