import React from "react";
import Item from "./Item";
import data from "../../data/store-items.json";

const Items = () => {
  const ItemList = data.map((item) => {
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
  return <ul className="Flex-Items">{ItemList}</ul>;
};
export default Items;
