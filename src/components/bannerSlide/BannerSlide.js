import React from 'react';
import BannerSlideProps from './BannerSlideProps';

const BannerSlide = () => {
    return (
        <section className="banner-slide">
            <div
                className="text-center swiper myDigitalSwiper swiper-container-free-mode"
            >
                <div className="swiper-wrapper">
                    <BannerSlideProps/>
                </div>
            </div>
        </section>

    );
};

export default BannerSlide;