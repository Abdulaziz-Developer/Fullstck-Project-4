import React from "react";
import Details from "./Details";
import data from "../../data/store-items.json";

const Detailspage = ({ addToCart, card }) => {
  return (
    <>
      <div className="DetailsPage">
        <Details card={card} data={data} addToCart={addToCart} />
      </div>
    </>
  );
};

export default Detailspage;
