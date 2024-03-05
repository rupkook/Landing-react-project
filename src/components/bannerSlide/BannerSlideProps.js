import React from 'react';
import BannerSlideData from '../../data/bannerSlide/BannerSlideData.json'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


const bannerData = BannerSlideData
const BannerSlideProps = () => {
    
    var bannerSlideSettings = {
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    return (
        <>
            <Slider {...bannerSlideSettings}>
                {bannerData.map((data, index) => (
                    <div className="swiper-slide" key={index}>
                        <Link
                        to="#"
                        className="item--center d-flex align-items-center justify-content-center"
                        >
                            <div>
                                <p className="title">{data.title}</p>
                            </div>
                            <div>
                                <img src={process.env.PUBLIC_URL + data.img} alt="img" />
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default BannerSlideProps;