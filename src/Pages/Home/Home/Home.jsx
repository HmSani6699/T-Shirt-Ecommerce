import React from "react";
import Banner from "../Banner/Banner";
import TopCollections from "../TopCollections/TopCollections";
import BestSelling from "../BestSelling/BestSelling";
import BigDeals from "../BigDeals/BigDeals";
import TrendingOutfits from "../TrendingOutfits/TrendingOutfits";
import CustomerSay from "../CustomerSay/CustomerSay";
import ServiceHighlights from "../ServiceHighlights/ServiceHighlights";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopCollections />
      <BestSelling />
      <BigDeals />
      <TrendingOutfits />
      <CustomerSay />
      <ServiceHighlights />
    </div>
  );
};

export default Home;
