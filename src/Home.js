import React from "react";
import FeatureProduct from "./Components/FeatureProduct";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Trusted from "./Components/Trusted";

const Home = () => {
  const data = {
    name: "vineet store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
