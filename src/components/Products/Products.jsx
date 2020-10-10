import React from "react";
import { NavLink } from "react-router-dom";
import Items from "./Items";

const Products = () => {
  
  return (
    <div className="TheProducts">
      <Items />
      <div className="MProducts">
        <NavLink to="/#" className="More-Products">
          MORE PRODUCTS
        </NavLink>
      </div>
    </div>
  );
};

export default Products;
