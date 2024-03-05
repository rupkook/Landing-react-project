import React from 'react';
import { Link } from 'react-router-dom';

const MarketingSeo2 = () => {
    return (
        <section className="marketing-seo-2 section--spacing">
            <div className="digital--container">
                {/* <!-- top section  --> */}
                <div className="top-section">
                    <div
                        className="row align-items-start justify-content-between"
                        data-sal="slide-up"
                        data-sal-duration="800"
                        data-sal-delay="300"
                    >
                        <div className="col-12 col-lg-6 col-xxl-5">
                        <h2 className="title">
                            Digital Marketing & SEO Services that Grow Traffic and Increase
                            Revenue
                        </h2>
                        </div>

                        <div className="col-12 col-lg-6 col-xxl-5">
                        <div className="right-section">
                            <span className="desc">
                            Including personal information, job history, training records, and
                            contact details in a centralized database. Many HR software
                            solutions.
                            </span>

                            {/* <!-- Button  --> */}

                            <Link to="#" className="digital-btn btn-fill-white">See More</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default MarketingSeo2;