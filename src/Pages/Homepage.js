import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import Products from "../components/Products/Products";

class Homepage extends React.Component {
  render() {
    return (
      <div className="container">
        <Hero />
        <Products />
      </div>
    );
  }
}

export default Homepage;
