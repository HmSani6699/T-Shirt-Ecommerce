import React from "react";
import Banner from "../Banner/Banner";
import TopCollections from "../TopCollections/TopCollections";
import BestSelling from "../BestSelling/BestSelling";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopCollections />
      <BestSelling />
    </div>
  );
};

export default Home;
