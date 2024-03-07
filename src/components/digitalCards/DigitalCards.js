import React from 'react';
import { Link } from 'react-router-dom';

const DigitalCards = () => {
    return (
        <section class="digital-cards section--spacing">
        <div class="digital--container">
            <div>
            <div
                class="row g-5 justify-content-between align-items-center card-section"
            >
                <div
                class="col-12 col-md-6 col-xl-4 card-thumb"
                data-sal="slide-up"
                data-sal-duration="800"
                >
                <img
                    src="./images/marketing-seo-2/marketing-seo-2-1.png"
                    alt=""
                />

                <span
                    ><Link href="#">We have unparalleled experience applying analytics</Link>
                </span>
                </div>

                <div
                class="col-12 col-md-6 col-xl-4 card-thumb"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="300"
                >
                <img
                    src="./images/marketing-seo-2/marketing-seo-2-2.png"
                    alt=""
                />

                <span><Link href="#">Create your project with professionals</Link> </span>
                </div>

                <div
                class="col-12 col-md-6 col-xl-4 card-thumb"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="400"
                >
                <img
                    src="./images/marketing-seo-2/marketing-seo-2-3.png"
                    alt=""
                />
                <span
                    ><Link href="#">Digital competitive analysis with out Experts</Link>
                </span>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default DigitalCards;