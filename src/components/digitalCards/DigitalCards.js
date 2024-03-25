import React from 'react';
import { Link } from 'react-router-dom';

const DigitalCards = () => {
    return (
        <section className="digital-cards section--spacing">
        <div className="digital--container">
            <div>
            <div
                className="row g-5 justify-content-between align-items-center card-section"
            >
                <div
                className="col-12 col-md-6 col-xl-4 card-thumb"
                data-sal="slide-up"
                data-sal-duration="800"
                >
                <img
                    src="./images/marketing-seo-2/marketing-seo-2-1.png"
                    alt=""
                />

                <span
                    ><Link >We have unparalleled experience applying analytics</Link>
                </span>
                </div>

                <div
                className="col-12 col-md-6 col-xl-4 card-thumb"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="300"
                >
                <img
                    src="./images/marketing-seo-2/marketing-seo-2-2.png"
                    alt=""
                />

                <span><Link >Create your project with professionals</Link> </span>
                </div>

                <div
                className="col-12 col-md-6 col-xl-4 card-thumb"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="400"
                >
                <img
                    src="./images/marketing-seo-2/marketing-seo-2-3.png"
                    alt=""
                />
                <span
                    ><Link >Digital competitive analysis with out Experts</Link>
                </span>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default DigitalCards;