import React, { useEffect } from "react";
import Item from "../Products/Item";
import data from "../../data/store-items.json";

const MoreProducts = () => {
  const Mostliked = data.map((item) => {
    return (
      <Item
        key={item.image}
        name={item.name}
        img={item.image}
        price={item.price}
        cards={item}
      />
    );
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Mostliked]);
  return (
    <div className="MoreProducts">
      <h1>Most liked</h1>
      <div className="img-container">{Mostliked.slice(0, 3)}</div>
    </div>
  );
};

export default MoreProducts;
