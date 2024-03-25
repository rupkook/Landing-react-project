import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BannerSlideData from "../../data/bannerSlide/BannerSlideData.json";

const bannerData = BannerSlideData;
const BannerSlideProps = () => {
  var bannerSlideSettings = {
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <Slider {...bannerSlideSettings} className="swiper-slide">
        {bannerData.map((data, index) => (
          <Link
            to="#"
            className="item--center d-flex align-items-center justify-content-center swiper-wrap2"
            key={index}
          >
            <div>
              <p className="title">{data.title}</p>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + data.img} alt="img" />
            </div>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default BannerSlideProps;
