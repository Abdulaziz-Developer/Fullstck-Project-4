import React, { useEffect, useState } from "react";
import MoreProducts from "../Details/MostProducts";

const Details = (props) => {
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cardId = props.card;
  const cards = props.data.find((card) => card.name.includes(cardId));

  return (
    <>
      <div className="detailsContent">
        <div className="Small-Pic">
          <img src="/img/item-1.png" style={{ visibility: false }} />
          <img src="/img/item-2.png" style={{ visibility: false }} />
          <img src="/img/item-3.png" style={{ visibility: false }} />
        </div>
        <div className="BigPic">
          <img src={cards.image} style={{ visibility: false }} />
        </div>
        <div className="Details">
          <h1 className="Price">{cards.price}</h1>
          <h2 className="DetailTitle">{cards.name}</h2>
          <p className="Detail-para">{cards.description}</p>
          <div className="ColorS">
            <div className="Color-Section">
              <p className="ColorTag">Color :</p>
              <p>Pink</p>
            </div>
            <div className="Squares">
              <div className="FirstS">
                <div className="Circle"></div>
              </div>
              <div className="SecondS"></div>
              <div className="ThirdS"></div>
            </div>
          </div>
          <div className="AddToCart">
            <input
              type="number"
              className="Cart"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              className="AddButton"
              onClick={() => {
                cards.quantity = quantity;
                props.addToCart(cards);
              }}
            >
              AddToCart
            </button>
          </div>
        </div>
      </div>
      <MoreProducts />
    </>
  );
};

export default Details;
