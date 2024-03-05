import React from 'react';
import { Link } from 'react-router-dom';



const Banner1 = () => {
    
    return (
        <section className='banner7'>
            <div className='digital--container'>
                <div className='row g-5 justify-content-between align-items-center align-items-lg-start'>
                
                    {/* <!-- left section --> */}
                    <div className='col-12 col-lg-6 order-2 order-lg-1' data-sal="slide-up"data-sal-duration="800">
                        <div className='left-section'>
                            <h1 className='title hover-line'>
                                TechAI Leverages A<br></br>Spectrum Of Cutting-Edge<br></br>Technologies
                            </h1>
                        </div>
                        <p className='desc hover-line'>
                            These agencies can be at the federal, state, or local level and
                            handle a wide range<br></br>of issues, from healthcare and transportation to
                            national security and environmental<br></br>protection.
                        </p>

                        {/* <!-- Button  --> */}

                        <ul className='list-unstyled banner7-buttons'>
                            <li>
                                <Link className='digital-btn btn-fill-dark'>
                                    <span>Get Started</span>
                                    <span className="">
                                        <img src="./images/digital-icons/arrow-1.svg" alt="img"/>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link className='case-btn'> View Case Study 
                                </Link>
                            </li>
                        </ul>
                        {/* <!-- brands section --> */}
                        <div className='brands'>
                            <div className='brands-desc'>
                                <span>Trusted by the world’s biggest brands</span>
                            </div>

                            <ul className='list-unstyled'>
                            <li>
                                <Link to="#"></Link>
                                <img src="./images/banner7/banner7-5.png" alt="" />
                            </li>
                            <li>
                                <Link to="#"></Link>
                                <img src="./images/banner7/banner7-6.png" alt="" />
                            </li>
                            <li>
                                <Link to="#"></Link>
                                <img src="./images/banner7/banner7-7.png" alt="" />
                            </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* <!-- right section  --> */}
                    <div className="col-12 col-lg-5 order-1 order-lg-2">
                        <div className="right-section">
                        <div
                            className="top-thumb row"
                            data-sal="slide-right"
                            data-sal-duration="800"
                        >
                            {/* <!-- thumb top left  --> */}
                            <div className="col-12 col-sm-6">
                            <div className="thumb-top-left">
                                <ul className="list-unstyled d-flex flex-column">
                                <li className="total-count">40+</li>

                                <li className="project-done">Project Done</li>
                                <li className="desc">
                                    Cut the Code is a leading no-code agency & Webflow Partner
                                    based
                                </li>
                                </ul>
                            </div>
                            </div>

                            {/* <!-- thumb top right  --> */}
                            <div
                            className="col-6 top-right"
                            data-sal="slide-up"
                            data-sal-duration="800"
                            >
                            <img
                                src="./images/banner7/banner7-1.png"
                                alt=""
                                className="img-fluid"
                            />
                            </div>
                        </div>

                        {/* <!-- thumb bottom  --> */}
                        <div className="thumb-bottom" data-sal="slide-up" data-sal-duration="800">
                            <div className="">
                            <ul className="list-unstyled left">
                                <li className="title">Stay ahead of the curve</li>
                                <li className="ring-logo">
                                <img src="./images/banner7/banner7-3.png" alt="img" />
                                </li>
                            </ul>
                            </div>

                            <div className="right">
                            <img
                                src="./images/banner7/banner7-2.png"
                                alt="img"
                                className="img-fluid"
                            />
                            </div>
                        </div>

                        {/* <!-- particle --> */}
                        <div
                            className="banner-particle"
                            data-sal="slide-up"
                            data-sal-duration="800"
                        >
                            <img src="./images/banner7/banner7-8.png" alt="img" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner1;