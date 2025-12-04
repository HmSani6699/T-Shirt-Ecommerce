import React from "react";
import Banner from "../Banner/Banner";
import TopCollections from "../TopCollections/TopCollections";
import BestSelling from "../BestSelling/BestSelling";
import BigDeals from "../BigDeals/BigDeals";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopCollections />
      <BestSelling />
      <BigDeals />
    </div>
  );
};

export default Home;
