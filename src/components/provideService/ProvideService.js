import React from 'react';
import { Link } from 'react-router-dom';

const ProvideService = () => {
    return (
        <section className="provide-service section--spacing">
            <div className="digital--container">
                {/* <!-- top section  --> */}
                <div className="top-section">
                <div
                    className="row g-2 g-lg-5 align-items-start justify-content-between"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="300"
                >
                    <div className="col-12 col-lg-6">
                    <h2 className="title">
                        Provide the best service with out of the box ideas
                    </h2>
                    </div>

                    <div className="col-12 col-lg-5">
                    <p className="desc hover-line">
                        We have unparalleled experience applying analytics to tackle some of
                        the most complex cyber problems—for governments and the world’s
                        largest enterprises.
                    </p>
                    </div>
                </div>
                </div>

                {/* <!-- bottom section  --> */}
                <div className="bottom-section section--spacing">
                <div
                    className="row g-5 text-xxl-start"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="300"
                >
                    {/* <!-- left section  --> */}
                    <div className="col-12 col-xl-6 col-xxl-5">
                    <div className="left-section">
                        <div
                        className="left-top d-flex flex-column flex-sm-row justify-content-start justify-content-sm-between align-items-start align-items-sm-center"
                        >
                        <div>
                            <span className="count">80+</span>
                            <br />
                            <span className="count-title">Professional Team</span>
                        </div>

                        <div className="left-thumb">
                            <img
                            src="./images/provide-service/provide-service-1.png"
                            alt=""
                            />
                        </div>
                        </div>

                        <p className="left-bottom hover-line">
                        When an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic.When an unknown
                        printer took. but also the leap into electronic.
                        </p>
                    </div>
                    </div>

                    {/* <!-- right section  --> */}
                    <div
                    className="col-12 col-xl-6 col-xxl-7"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="300"
                    >
                    <div className="right-section">
                        <div className="post-thumbnail">
                        <img
                            src="./images/provide-service/provide-service-3.png"
                            alt="img"
                            className="img-fluid"
                        />

                        <div className="popup-video">
                            <Link
                            to="https://www.youtube.com/watch?v=1iIZeIy7TqM"
                            className="popup-youtube"
                            >
                            <img
                                src="./images/provide-service/provide-service-2.png"
                                alt="play-icons"
                                className="img-fluid play-btn"
                            />
                            </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default ProvideService;