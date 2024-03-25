import React from "react";
import DigitalTestimonialProps from "./DigitalTestimonialProps";

const DigitalTestimonial = () => {
  return (
    <section className="digital-testimonial section--spacing">
      <div className=" digital--container">
        <div className="digital-testimonial-wrapper">
          <div className="row g-5">
            {/* <!-- Bg icon  --> */}
            <div className="bg-icon">
              <img
                src="./images/digital-testimonial/digital-testimonial-1.png"
                alt="img"
              />
            </div>
            <div className="col-12 slick-slider">
              {/* <!-- slide --> */}
              <DigitalTestimonialProps />
            </div>
          </div>
        </div>
      </div>
    </section>
    // padding-left: 1400px
  );
};

export default DigitalTestimonial;
