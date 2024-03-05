import React from 'react';

const BestServices = () => {
    return (
        <section className="best-services section--spacing">
            <div className="digital--container">
                <div className="service-container">
                <div className="section-items" data-sal="slide-up" data-sal-duration="800">
                    {/* <!-- title & button  --> */}
                    <div className="title-btn">
                    <h2 className="title">
                        Provide the best service with out of the box ideas
                    </h2>

                    <div className="filters filter-button-group-digital">
                        <ul className="list-unstyled">
                        <li className="digital-btn btn-fill-primary" data-filter=".allwork">
                            All Work
                        </li>

                        <li
                            className="active digital-btn btn-fill-primary"
                            data-filter=".uiux"
                        >
                            UI/UX Design
                        </li>

                        <li className="digital-btn btn-fill-primary" data-filter=".marketing">
                            Digital Marketing
                        </li>

                        <li
                            className="digital-btn btn-fill-primary"
                            data-filter=".development"
                        >
                            Web Development
                        </li>
                        </ul>
                    </div>

                    {/* <!-- Image Gallery  --> */}
                    <div className="row content isotopeWrapper-digital image-gallery g-5">
                        {/* <!-- Development  --> */}
                        <div
                        className="col-12 col-xl-6 col-xxl-4 allwork uiux isotope-item-digital single-content"
                        >
                        <span className="thumb">
                            <img
                            src="./images/best-services/best-services-1.png"
                            alt="img"
                            className="img-fluid"
                        /></span>
                        </div>

                        <div
                        className="col-12 col-xl-6 col-xxl-4 allwork uiux isotope-item-digital single-content"
                        data-sal-duration="800"
                        >
                        <span className="thumb">
                            <img
                            src="./images/best-services/best-services-2.png"
                            alt="img"
                            className="img-fluid"
                        /></span>
                        </div>

                        <div
                        className="col-12 col-xl-6 col-xxl-4 allwork uiux isotope-item-digital single-content"
                        >
                        <span className="thumb">
                            <img
                            src="./images/best-services/best-services-3.png"
                            alt="img"
                            className="img-fluid"
                        /></span>
                        </div>

                        {/* <!-- UI/ UX --> */}
                        <div
                        className="col-12 col-xl-6 col-xxl-4 marketing isotope-item-digital single-content"
                        >
                        <span className="thumb">
                            <img
                            src="./images/best-services/best-services-4.png"
                            alt="img"
                            className="img-fluid"
                        /></span>
                        </div>

                        <div
                        className="col-12 col-xl-6 col-xxl-4 marketing development isotope-item-digital single-content"
                        >
                        <span className="thumb">
                            <img
                            src="./images/best-services/best-services-5.png"
                            alt="img"
                            className="img-fluid"
                        /></span>
                        </div>

                        <div
                        className="col-12 col-xl-6 col-xxl-4 allwork marketing isotope-item-digital single-content"
                        >
                        <span className="thumb">
                            <img
                            src="./images/best-services/best-services-6.png"
                            alt="img"
                            className="img-fluid"
                        /></span>
                        </div>

                        <div
                        className="col-12 col-xl-6 col-xxl-4 allwork development isotope-item-digital single-content"
                        >
                        <span className="thumb">
                            <img
                            src="./images/best-services/best-services-7.png"
                            alt="img"
                            className="img-fluid"
                        /></span>
                        </div>

                        <div
                        className="col-12 col-xl-6 col-xxl-4 allwork development isotope-item-digital single-content"
                        >
                        <span className="thumb">
                            <img
                            src="./images/best-services/best-services-8.png"
                            alt="img"
                            className="img-fluid"
                        /></span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    );
};

export default BestServices;