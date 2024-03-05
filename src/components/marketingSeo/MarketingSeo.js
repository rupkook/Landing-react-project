import React from 'react';

const MarketingSeo = () => {
    return (
        <section className="marketing-seo section--spacing">
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
                        <h2 className="title">Digital Marketing & SEO Services that Grow</h2>
                    </div>
            
                    <div className="col-12 col-lg-6 col-xxl-5">
                        <div className="right-section">
                        <p className="desc">
                            Including personal information, job history, training records, and
                            contact details in a centralized database. Many HR software
                            solutions include tools for posting job listings, managing
                            applicants, scheduling interviews
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            
                {/* <!-- bottom section  --> */}
                <div className="bottom-section" data-sal="slide-up" data-sal-duration="800">
                    {/* <!-- base thumb --> */}
                    <div className="base-thumb">
                    <img
                        src="./images/marketing-seo/marketing-seo-2.png"
                        alt="img"
                        className="image-fluid"
                    />
                    </div>
            
                    {/* <!-- icon --> */}
            
                    <div className="icon">
                    <img
                        src="./images/marketing-seo/marketing-seo-1.png"
                        alt="img"
                        className="image-fluid"
                    />
                    </div>
                </div>
            </div>
        </section>
       
    );
};

export default MarketingSeo;