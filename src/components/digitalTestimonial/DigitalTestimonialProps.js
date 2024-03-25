import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../assets/scss/template/_slick-custom.scss";
import TestimonialData from "../../data/testimonial/TestimonialData.json";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/digital-icons/digital-testimonial-left.png)`,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/digital-icons/digital-testimonial-right.png)`,
      }}
      onClick={onClick}
    />
  );
}

const allData = TestimonialData;
// console.log(allData);
const DigitalTestimonialProps = () => {
  const sliderStyle = {
    width: "100%",
  };
  var slideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...slideSettings} style={sliderStyle}>
        {allData.map((data, index) => (
          <div className="slick-slide" key={index}>
            <div className="row gx-5 align-items-start justify-content-around">
              {/* <!-- left section  --> */}
              <div className="col-12 col-lg-5">
                <div className="slide-1">
                  <img
                    src={process.env.PUBLIC_URL + data.img}
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* <!-- right section  --> */}
              <div className="col-12 col-lg-7">
                <div className="right-section">
                  {/* <!-- clients info  --> */}
                  <div className="clients-info text-start">
                    <span className="name">{data.title}</span> <br />
                    <span className="position">{data.profession}</span>
                    {/* <!-- stars  --> */}
                    <div className="top-star">
                      {[...Array(5)].map((_, starIndex) => (
                        <div key={starIndex}>
                          <img
                            src={process.env.PUBLIC_URL + data.star_pic}
                            alt="img"
                            className="image-fluid"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="desc">{data.para}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default DigitalTestimonialProps;
