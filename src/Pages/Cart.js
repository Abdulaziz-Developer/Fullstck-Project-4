import React from "react";
import MyCart from "../components/cart/cartitems";

const Cart = (props) => {
  const cartiTEMSS = props.cart.map((item) => {
    return (
      <MyCart
        img={item.image}
        name={item.name}
        quantity={item.quantity}
        price={item.price}
        removeItem={props.removeItem}
      />
    );
  });

  let quantity = 0;
  let total = 0;
  props.cart.forEach((value) => {
    let number = parseFloat(value.price.replace(/[^0-9.-]+/g, ""));
    number *= value.quantity;
    quantity += value.quantity;
    console.log(number);
    total += number;
    console.log(total);
  });

  return (
    <>
      <h1>Your Cart</h1>
      <hr />
      {cartiTEMSS}
      <div className="allitem">
        <p>All items</p>
        <p>{quantity}</p>
        <p>{total}</p>
        <p>CHECK OUT ALL</p>
      </div>
    </>
  );
};

export default Cart;
