/* eslint-disable no-script-url */
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className=" lc-header-7 header-style-1">
            <div id="lc-sticky-placeholder"></div>
            <div className="lc-mainmenu">
                <div className="digital--container">
                <div className="header-navbar">
                    <Logo/>
                    <div className="header-main-nav">
                    {/* <!-- Start Mainmanu Nav --> */}
                    <nav className="mainmenu-nav" id="mobilemenu-popup">
                        <div className="d-block d-lg-none">
                        <div className="mobile-nav-header">
                            <div className="mobile-nav-logo">
                            <Link to="#" className="text-dark">
                                <p>Landing <span className="fw-bold">Concept</span></p>
                            </Link>
                            </div>
                            <button className="mobile-menu-close" data-bs-dismiss="offcanvas">
                            <img src="./images/icon/xmark-solid.svg" alt="" />
                            </button>
                        </div>
                        </div>

                        {/* <!-- Main Menu  --> */}
                        <ul className="mainmenu-7">
                        <li className="menu-item-has-children">
                            <Link to="javascript:void(0);">Service</Link>
                            <ul className="lc-submenu">
                            <li><Link to='/'>Digital Agency</Link></li>
                            <li><Link to="tech.html">Tech AI</Link></li>
                            <li><Link to="start-up.html">Start Up</Link></li>
                            <li><Link to="saas.html">SAAS Concept</Link></li>
                            <li><Link to="e-learning-index.html">E Learning </Link></li>
                            <li><Link to="business-index.html">Business </Link></li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="javascript:void(0);"
                            >Agency
                            <img
                                src="./images/saas-icons/nav-down-arrow.svg"
                                alt="icon"
                                className="image-fluid"
                            /></Link>
                            <ul className="lc-submenu">
                            <li><Link to="blog-detail.html">Blog Details</Link></li>
                            <li><Link to="team-detail.html">Teams Details</Link></li>
                            <li><Link to="portfolio.html">Portfolio Page</Link></li>
                            <li><Link to='/ServiceDetail'>Services Details</Link></li>
                            <li><Link to="typography.html">Typography</Link></li>
                            <li><Link to="not-found.html">Not Found</Link></li>
                            </ul>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="contact-us.html">Contact</Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="about-us.html">About</Link>
                        </li>

                        <li className="menu-item-has-children">
                            <Link to="blog-detail.html">Blog</Link>
                        </li>
                        </ul>
                    </nav>
                    {/* <!-- End Mainmanu Nav --> */}
                    </div>

                    {/* <!-- Button  --> */}
                    <Link
                    to="register.html"
                    className="digital-btn btn-fill-white d-none d-lg-block"
                    >
                    Join Now
                    </Link>

                    <div className="header-action">
                    <ul className="list-unstyled">
                        <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                        <button
                            className="btn-wrap"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#mobilemenu-popup"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;