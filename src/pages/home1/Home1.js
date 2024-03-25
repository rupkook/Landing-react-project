import React from "react";
import Banner1 from "../../components/banner/Banner1";
import BannerSlide from "../../components/bannerSlide/BannerSlide";
import BestServices from "../../components/bestServices/BestServices";
import DigitalCards from "../../components/digitalCards/DigitalCards";
import DigitalTestimonial from "../../components/digitalTestimonial/DigitalTestimonial";
import DiscussProject from "../../components/discussProject/DiscussProject";
import Footer1 from "../../components/footer1/Footer1";
import Footerbottom1 from "../../components/footer1/Footerbottom1";
import Navbar from "../../components/header/Navbar";
import MarketingSeo from "../../components/marketingSeo/MarketingSeo";
import MarketingSeo2 from "../../components/marketingSeo2/MarketingSeo2";
import ProvideService from "../../components/provideService/ProvideService";

const Home1 = () => {
  return (
    <div>
      <Navbar />
      <Banner1 />
      <BannerSlide />
      <ProvideService />
      <BestServices />
      <MarketingSeo />
      <DigitalTestimonial />
      <MarketingSeo2 />
      <DigitalCards />
      <DiscussProject />
      <Footer1 />
      <Footerbottom1 />
    </div>
  );
};

export default Home1;
