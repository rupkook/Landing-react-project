import React from 'react';
import { Link } from 'react-router-dom';


const ServiceDetails = () => {
    return (
        <section className="service-details">
            
            {/* <!-- hero image  --> */}
            <div className="hero-img">
                <div className="hero-text">
                <h1 className="tracking-in-expand">Service Details</h1>
                <h5>Home - Services Details</h5>
                </div>
            </div>
            {/* <!-- top section  --> */}
            <div className="container--width top-section">
                <div className="row g-5 justify-content-between">
                <div className="col-12 col-lg-8">
                    <img
                    src="./images/service-detail/service-detail-2.png"
                    alt="img"
                    className="img-fluid"
                    />
                </div>

                <div className="col-12 col-lg-4">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="title">
                            <Link > Digital Marketing</Link>
                        </div>

                        <div className="icon">
                            <Link >
                                <img
                                    src="./images/service-detail/service-detail-3.png"
                                    alt="img"
                                    className="img-fluid"
                                />
                            </Link>
                        </div>
                    </div>
                    <hr />

                    <div className="d-flex align-items-center justify-content-between">
                    <div className="title">
                        <Link >UX/UI Design</Link>
                    </div>

                    <div className="icon">
                        <Link >
                        <img
                            src="./images/service-detail/service-detail-3.png"
                            alt="img"
                            className="img-fluid"
                        /></Link>
                    </div>
                    </div>
                    <hr />

                    <div className="d-flex align-items-center justify-content-between">
                    <div className="title">
                        <Link > Web Design</Link>
                    </div>

                    <div className="icon">
                        <Link >
                        <img
                            src="./images/service-detail/service-detail-3.png"
                            alt="img"
                            className="img-fluid"
                        /></Link>
                    </div>
                    </div>
                    <hr />

                    <div className="d-flex align-items-center justify-content-between">
                    <div className="title">
                        <Link > Digital Analysis</Link>
                    </div>

                    <div className="icon">
                        <Link >
                        <img
                            src="./images/service-detail/service-detail-3.png"
                            alt="img"
                            className="img-fluid"
                        /></Link>
                    </div>
                    </div>
                    <hr />

                    <div className="d-flex align-items-center justify-content-between">
                    <div className="title">
                        <Link > Social Media Marketing</Link>
                    </div>

                    <div className="icon">
                        <Link >
                        <img
                        src="./images/service-detail/service-detail-3.png"
                        alt="img"
                        className="img-fluid"
                        /></Link>
                    </div>
                    </div>
                    <hr />

                    <div className="d-flex align-items-center justify-content-between">
                    <div className="title">
                        <Link > Content Writing</Link>
                    </div>

                    <div className="icon">
                        <Link >
                        <img
                        src="./images/service-detail/service-detail-3.png"
                        alt="img"
                        className="img-fluid"
                        /></Link>
                    </div>
                    </div>
                </div>
                </div>
                {/* <!-- analysis section  --> */}
                <div className="container--width analysis">
                    <h5 className="title">Digital competitive analysis</h5>
                    <p className="desc">
                    Brand awareness is cited as the top priority for marketers, and social
                    media channels are a one-to-many solution for getting the word out about
                    your products and services.
                    </p>
                    <p className="desc">
                    Digital agencies typically offer a range of services, including web design
                    and development, search engine optimization (SEO), social media marketing,
                    email marketing, content marketing, digital advertising, mobile app
                    development, and e-commerce solutions. They work with clients to create
                    customized digital strategies and campaigns that help them achieve their
                    business goals and objectives. Digital agencies typically offer a range of
                    services, including web design and development, search engine optimization
                    (SEO), social media marketing, email marketing, content marketing.
                    </p>
                </div>
                {/* <!-- analysis card section  --> */}
                <div className="container--width">
                    <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="analysis-card">
                        <ul className="list-unstyled">
                            <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none">
                                <path
                                d="M21.4983 6.95862C21.3151 6.87319 21.1055 6.86404 20.9155 6.93317C20.7256 7.00231 20.5709 7.14407 20.4855 7.32727C20.4 7.51047 20.3909 7.7201 20.46 7.91005C20.5291 8.1 20.6709 8.2547 20.8541 8.34013C22.1638 8.95174 23.1771 10.0582 23.6714 11.4165C24.1658 12.7747 24.1008 14.2737 23.4907 15.5841C23.4037 15.7689 23.3937 15.9807 23.4629 16.1729C23.5321 16.3651 23.6748 16.522 23.8597 16.609C24.0445 16.6959 24.2563 16.7059 24.4485 16.6367C24.6407 16.5675 24.7976 16.4248 24.8846 16.24C25.2719 15.4098 25.4919 14.5115 25.5319 13.5963C25.572 12.6811 25.4313 11.767 25.118 10.9062C24.8047 10.0454 24.3249 9.25471 23.7059 8.57938C23.087 7.90405 22.341 7.35729 21.5107 6.97033L21.4983 6.95862Z"
                                fill="#1C1C1D"
                                />
                                <path
                                d="M20.2743 9.57978C20.1836 9.53748 20.0854 9.51346 19.9854 9.5091C19.8854 9.50473 19.7855 9.5201 19.6915 9.55434C19.5974 9.58857 19.511 9.64099 19.4373 9.70861C19.3635 9.77623 19.3037 9.85772 19.2614 9.94843C19.2191 10.0391 19.1951 10.1373 19.1907 10.2373C19.1864 10.3373 19.2017 10.4372 19.236 10.5312C19.2702 10.6253 19.3226 10.7117 19.3902 10.7854C19.4579 10.8592 19.5393 10.919 19.6301 10.9613C20.2449 11.2483 20.7206 11.7676 20.9526 12.4052C21.1847 13.0427 21.1541 13.7463 20.8676 14.3614C20.7822 14.5446 20.773 14.7542 20.8421 14.9441C20.9113 15.1341 21.053 15.2888 21.2362 15.3742C21.4194 15.4596 21.6291 15.4688 21.819 15.3997C22.009 15.3305 22.1637 15.1888 22.2491 15.0056C22.7056 14.024 22.7541 12.9015 22.3839 11.8842C22.0136 10.867 21.2549 10.0382 20.2743 9.57978ZM16.355 6.89639C16.224 6.86918 16.0882 6.87695 15.9612 6.91892C15.8341 6.96088 15.7204 7.03556 15.6314 7.13544L10.2865 13.0408L4.01963 15.3217C3.82979 15.3908 3.67517 15.5325 3.58979 15.7156C3.50441 15.8987 3.49526 16.1082 3.56436 16.298L5.12754 20.5929C5.19664 20.7827 5.33832 20.9373 5.52142 21.0227C5.70452 21.1081 5.91403 21.1172 6.10388 21.0481L6.97716 20.7303L10.1603 25.4447C10.2556 25.585 10.395 25.6895 10.5564 25.7416C10.7178 25.7938 10.892 25.7905 11.0513 25.7324L14.2725 24.56C14.3814 24.5204 14.4799 24.4565 14.5604 24.373C14.641 24.2896 14.7014 24.1889 14.737 24.0785C14.7727 23.9682 14.7827 23.8512 14.7664 23.7364C14.75 23.6216 14.7076 23.5121 14.6424 23.4161L11.6728 19.0212L12.3672 18.7685L20.2825 19.8474C20.4129 19.8659 20.5458 19.8502 20.6682 19.8019C20.7907 19.7536 20.8986 19.6744 20.9814 19.5721C21.0641 19.4697 21.1189 19.3476 21.1405 19.2177C21.162 19.0878 21.1495 18.9546 21.1042 18.831L16.9357 7.37813C16.889 7.25433 16.811 7.14479 16.7092 7.06032C16.6074 6.97585 16.4853 6.91935 16.355 6.89639ZM11.0886 24.0976L8.45171 20.1936L10.1983 19.5579L12.8352 23.4619L11.0886 24.0976ZM11.3092 17.5323L6.29862 19.356L5.25649 16.4928L10.2671 14.6691L11.3092 17.5323ZM19.2414 18.1674L12.8451 17.2975L11.5958 13.8653L15.9365 9.08743L19.2414 18.1674Z"
                                fill="#1C1C1D"
                                />
                            </svg>
                            </li>
                            <li className="title">Digital competitive analysis</li>
                        </ul>

                        <p className="desc">
                            Every successful digital marketing campaign must be driven.This
                            provides a clear path to measurably improve your website's
                        </p>

                        <Link  className="more-btn">
                            Discover More
                            <span className="ms-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none">
                                <path
                                d="M11 4.25L16.25 9.5M16.25 9.5L11 14.75M16.25 9.5L2.75 9.5"
                                stroke="#1C1C1D"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                /></svg></span>
                        </Link>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="analysis-card">
                        <ul className="list-unstyled">
                            <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_1743_3393)">
                                <path
                                    d="M26.0023 22.9561L24.2745 21.2311C23.8258 20.7831 23.226 20.5354 22.5872 20.5354C22.191 20.5354 21.8147 20.641 21.4766 20.8197L20.8864 20.2304C22.4384 18.4244 23.3827 16.0831 23.3827 13.5218C23.3827 7.82902 18.7432 3.19727 13.041 3.19727C7.33868 3.19727 2.69922 7.82902 2.69922 13.5218C2.69922 19.2146 7.33868 23.8464 13.041 23.8464C15.6065 23.8464 17.9517 22.9029 19.7607 21.3534L20.351 21.9427C20.1712 22.281 20.0662 22.6559 20.0662 23.0514C20.0662 23.6891 20.3144 24.2879 20.7631 24.7359L22.4909 26.4608C22.9396 26.9088 23.5394 27.1566 24.1782 27.1566C24.817 27.1566 25.4168 26.9088 25.8655 26.4608L26.0023 26.3242C26.451 25.8763 26.6992 25.2775 26.6992 24.6398C26.6992 24.002 26.451 23.404 26.0023 22.9561ZM13.041 22.258C9.89389 22.258 7.13821 20.5854 5.5957 18.0892C5.61241 18.0749 5.6323 18.0702 5.64821 18.0543L9.93366 13.776L12.5636 15.7456C12.8803 15.9846 13.3242 15.9521 13.6034 15.6717L17.8141 11.468V12.7276C17.8141 13.1668 18.1697 13.5218 18.6096 13.5218C19.0495 13.5218 19.4051 13.1668 19.4051 12.7276V9.55083C19.4051 9.44759 19.3844 9.34434 19.3439 9.24745C19.2627 9.05287 19.1084 8.8988 18.9135 8.81779C18.8164 8.77729 18.713 8.75664 18.6096 8.75664H15.4275C14.9884 8.75664 14.632 9.11164 14.632 9.55083C14.632 9.99002 14.9884 10.345 15.4275 10.345H16.6892L12.9662 14.0619L10.3362 12.0923C10.0196 11.854 9.57568 11.8858 9.29645 12.1661L4.85985 16.5954C4.49789 15.6375 4.29026 14.6043 4.29026 13.5218C4.29026 8.70501 8.21614 4.78566 13.041 4.78566C17.8658 4.78566 21.7917 8.70501 21.7917 13.5218C21.7917 18.3386 17.8658 22.258 13.041 22.258ZM24.8775 25.202L24.7407 25.3387C24.4423 25.6349 23.9141 25.6349 23.6158 25.3387L21.8879 23.6137C21.7392 23.4643 21.6572 23.2658 21.6572 23.0522C21.6572 22.8385 21.74 22.6392 21.8879 22.4907L22.0248 22.3541C22.1743 22.2055 22.3732 22.1237 22.5872 22.1237C22.8012 22.1237 23.0009 22.2063 23.1496 22.3541L24.8775 24.0791C25.0262 24.2284 25.1082 24.4269 25.1082 24.6406C25.1082 24.8542 25.0254 25.0535 24.8775 25.202Z"
                                    fill="#1C1C1D"
                                />
                                <path
                                    d="M9.86192 16.6982C9.4228 16.6982 9.06641 17.0533 9.06641 17.4925V19.8752C9.06641 20.3144 9.4228 20.6694 9.86192 20.6694C10.301 20.6694 10.6574 20.3144 10.6574 19.8752V17.4925C10.6574 17.0533 10.301 16.6982 9.86192 16.6982ZM13.044 16.6982C12.6049 16.6982 12.2485 17.0533 12.2485 17.4925V19.8752C12.2485 20.3144 12.6049 20.6694 13.044 20.6694C13.4831 20.6694 13.8395 20.3144 13.8395 19.8752V17.4925C13.8395 17.0533 13.4831 16.6982 13.044 16.6982ZM16.2261 16.6982C15.7861 16.6982 15.4305 17.0533 15.4305 17.4925V19.8752C15.4305 20.3144 15.7861 20.6694 16.2261 20.6694C16.666 20.6694 17.0216 20.3144 17.0216 19.8752V17.4925C17.0216 17.0533 16.666 16.6982 16.2261 16.6982Z"
                                    fill="#1C1C1D"
                                />
                                </g>
                                <defs>
                                <clipPath id="clip0_1743_3393">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                                </defs>
                            </svg>
                            </li>
                            <li className="title">Web Development</li>
                        </ul>

                        <p className="desc">
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour.
                        </p>

                        <Link  className="more-btn">
                            Discover More
                            <span className="ms-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                            >
                                <path
                                d="M11 4.25L16.25 9.5M16.25 9.5L11 14.75M16.25 9.5L2.75 9.5"
                                stroke="#1C1C1D"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                /></svg
                            ></span>
                        </Link>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4">
                        <div className="analysis-card">
                        <ul className="list-unstyled">
                            <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none">
                                <g clip-path="url(#clip0_1743_3393)">
                                <path
                                    d="M26.0023 22.9561L24.2745 21.2311C23.8258 20.7831 23.226 20.5354 22.5872 20.5354C22.191 20.5354 21.8147 20.641 21.4766 20.8197L20.8864 20.2304C22.4384 18.4244 23.3827 16.0831 23.3827 13.5218C23.3827 7.82902 18.7432 3.19727 13.041 3.19727C7.33868 3.19727 2.69922 7.82902 2.69922 13.5218C2.69922 19.2146 7.33868 23.8464 13.041 23.8464C15.6065 23.8464 17.9517 22.9029 19.7607 21.3534L20.351 21.9427C20.1712 22.281 20.0662 22.6559 20.0662 23.0514C20.0662 23.6891 20.3144 24.2879 20.7631 24.7359L22.4909 26.4608C22.9396 26.9088 23.5394 27.1566 24.1782 27.1566C24.817 27.1566 25.4168 26.9088 25.8655 26.4608L26.0023 26.3242C26.451 25.8763 26.6992 25.2775 26.6992 24.6398C26.6992 24.002 26.451 23.404 26.0023 22.9561ZM13.041 22.258C9.89389 22.258 7.13821 20.5854 5.5957 18.0892C5.61241 18.0749 5.6323 18.0702 5.64821 18.0543L9.93366 13.776L12.5636 15.7456C12.8803 15.9846 13.3242 15.9521 13.6034 15.6717L17.8141 11.468V12.7276C17.8141 13.1668 18.1697 13.5218 18.6096 13.5218C19.0495 13.5218 19.4051 13.1668 19.4051 12.7276V9.55083C19.4051 9.44759 19.3844 9.34434 19.3439 9.24745C19.2627 9.05287 19.1084 8.8988 18.9135 8.81779C18.8164 8.77729 18.713 8.75664 18.6096 8.75664H15.4275C14.9884 8.75664 14.632 9.11164 14.632 9.55083C14.632 9.99002 14.9884 10.345 15.4275 10.345H16.6892L12.9662 14.0619L10.3362 12.0923C10.0196 11.854 9.57568 11.8858 9.29645 12.1661L4.85985 16.5954C4.49789 15.6375 4.29026 14.6043 4.29026 13.5218C4.29026 8.70501 8.21614 4.78566 13.041 4.78566C17.8658 4.78566 21.7917 8.70501 21.7917 13.5218C21.7917 18.3386 17.8658 22.258 13.041 22.258ZM24.8775 25.202L24.7407 25.3387C24.4423 25.6349 23.9141 25.6349 23.6158 25.3387L21.8879 23.6137C21.7392 23.4643 21.6572 23.2658 21.6572 23.0522C21.6572 22.8385 21.74 22.6392 21.8879 22.4907L22.0248 22.3541C22.1743 22.2055 22.3732 22.1237 22.5872 22.1237C22.8012 22.1237 23.0009 22.2063 23.1496 22.3541L24.8775 24.0791C25.0262 24.2284 25.1082 24.4269 25.1082 24.6406C25.1082 24.8542 25.0254 25.0535 24.8775 25.202Z"
                                    fill="#1C1C1D"
                                />
                                <path
                                    d="M9.86192 16.6982C9.4228 16.6982 9.06641 17.0533 9.06641 17.4925V19.8752C9.06641 20.3144 9.4228 20.6694 9.86192 20.6694C10.301 20.6694 10.6574 20.3144 10.6574 19.8752V17.4925C10.6574 17.0533 10.301 16.6982 9.86192 16.6982ZM13.044 16.6982C12.6049 16.6982 12.2485 17.0533 12.2485 17.4925V19.8752C12.2485 20.3144 12.6049 20.6694 13.044 20.6694C13.4831 20.6694 13.8395 20.3144 13.8395 19.8752V17.4925C13.8395 17.0533 13.4831 16.6982 13.044 16.6982ZM16.2261 16.6982C15.7861 16.6982 15.4305 17.0533 15.4305 17.4925V19.8752C15.4305 20.3144 15.7861 20.6694 16.2261 20.6694C16.666 20.6694 17.0216 20.3144 17.0216 19.8752V17.4925C17.0216 17.0533 16.666 16.6982 16.2261 16.6982Z"
                                    fill="#1C1C1D"
                                />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1743_3393">
                                        <rect width="30" height="30" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            </li>
                            <li className="title">Mobile Application</li>
                        </ul>

                        <p className="desc">
                            Lightly season pork with salt and black pepper. Arrange about 6 sage
                            leaves over tenderloin. Wrap prosciutto around tenderloin and sage,
                        </p>

                        <Link  className="more-btn">
                            Discover More
                            <span className="ms-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none">
                                    <path
                                    d="M11 4.25L16.25 9.5M16.25 9.5L11 14.75M16.25 9.5L2.75 9.5"
                                    stroke="#1C1C1D"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    />
                                </svg>
                            </span>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
            {/* <!-- Benefits  --> */}
            <div class="container--width benifits">
                <div class="row g-5">
                <div class="col-12 col-lg-5">
                    <div class="left-section">
                    <h5 class="title">Our Service Benefits</h5>

                    <p class="desc">
                        Brand awareness is cited as the top priority for marketers, and
                        social media channels are a one-to-many solution for getting.
                        Digital agencies typically offer a range of services, including web
                        design and development, search engine optimization (SEO), social
                        media marketing, email marketing, content marketing, digital
                        advertising.
                    </p>

                    <div class="benefit-list d-flex flex-column">
                        <ul class="list-unstyled d-flex">
                        <li>
                            <img
                            src="./images/service-detail/service-detail-5.png"
                            alt="img"
                            />
                        </li>

                        <li class="ms-3">
                            Digital agencies can be full-service, providing a comprehensive
                        </li>
                        </ul>

                        <ul class="list-unstyled d-flex">
                        <li>
                            <img
                            src="./images/service-detail/service-detail-5.png"
                            alt="img"
                            />
                        </li>

                        <li class="ms-3">
                            They may also work with a variety of clients across different
                        </li>
                        </ul>

                        <ul class="list-unstyled d-flex">
                        <li>
                            <img
                            src="./images/service-detail/service-detail-5.png"
                            alt="img"
                            />
                        </li>

                        <li class="ms-3">With lots of work</li>
                        </ul>
                    </div>
                    </div>
                </div>

                {/* <!-- right section  --> */}
                <div class="col-12 col-lg-7">
                    <img
                    src="./images/service-detail/service-detail-4.png"
                    alt="img"
                    />
                </div>
                </div>
            </div>
            {/* <!-- competitive analysis  --> */}
            <div class="container--width competitive-analysis">
                <h5 class="title">Digital competitive analysis</h5>
                <p class="desc">
                Brand awareness is cited as the top priority for marketers, and social
                media channels are a one-to-many solution for getting the word out about
                your products and services.
                </p>
                <p class="desc">
                Digital agencies typically offer a range of services, including web design
                and development, search engine optimization (SEO), social media marketing,
                email marketing, content marketing, digital advertising, mobile app
                development, and e-commerce solutions. They work with clients to create
                customized digital strategies and campaigns that help them achieve their
                business goals and objectives.
                </p>
            </div>
        </section>
    );
};

export default ServiceDetails;