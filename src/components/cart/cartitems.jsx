import React from "react";

const MyCart = (props) => {
  return (
    <>
      <div className="cartitems">
        <img src={props.img} alt={props.name} className="imgcart" />
        <p>{props.name}</p>
        <p>{props.quantity}</p>
        <p>{props.price}</p>
        <p className="checkOut">CHECK OUT</p>
      </div>
      <hr />
    </>
  );
};

export default MyCart;
