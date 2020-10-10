import React from "react";
import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";

const Hero = () => {
  return (
    <div className="Hero">
      <img src="/img/iconfinder_glasses_71479.png" className="glasses" />
      <HeroLeft />
      <HeroRight />
    </div>
  );
};
export default Hero;
