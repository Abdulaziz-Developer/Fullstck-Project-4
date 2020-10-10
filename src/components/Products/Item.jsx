import React from "react";
import { NavLink } from "react-router-dom";

const Item = (props) => {
  return (
    <li className="Item">
      <NavLink className="Navlink" to={`/details/${props.cards.name}`}>
        <img src={props.img} alt={props.cards.name} />
        <div className="title-price">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-price">{props.price}</p>
        </div>
      </NavLink>
    </li>
  );
};
export default Item;
