import React from 'react';
import Navbar from '../../components/header/Navbar';
import Banner1 from '../../components/banner/Banner1';
import Footer1 from '../../components/footer1/Footer1';
import Footerbottom1 from '../../components/footer1/Footerbottom1';
import BannerSlide from '../../components/bannerSlide/BannerSlide';
import ProvideService from '../../components/provideService/ProvideService';
import BestServices from '../../components/bestServices/BestServices';
import MarketingSeo from '../../components/marketingSeo/MarketingSeo';
import MarketingSeo2 from '../../components/marketingSeo2/MarketingSeo2';
import DigitalTestimonial from '../../components/digitalTestimonial/DigitalTestimonial';




const Home1 = () => {
    return (
        <div>
            <Navbar/>
            <Banner1/>
            <BannerSlide/>
            <ProvideService/>
            <BestServices/>
            <MarketingSeo/>
            <DigitalTestimonial/>
            <MarketingSeo2/>
            <Footer1/>
            <Footerbottom1/>
        </div>
    );
};

export default Home1;