/* eslint-disable no-script-url */
import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <header className="header lc-header-2 header-style-1">
      <div id="lc-sticky-placeholder"></div>
      <div className="lc-mainmenu">
        <div className="container--width">
          <div className="header-navbar">
            <div className="header-logo">
              <Link to="tech.html">
                <ul className="list-unstyled">
                  <li>
                    <img
                      className=""
                      src="./assets/media/header/nav-logo.png"
                      alt="logo"
                    />
                  </li>
                  <li className="nav-title">
                    Landing <span className="fw-bold">Concept</span>
                  </li>
                </ul>
              </Link>
            </div>

            <div className="header-main-nav">
              {/* <!-- Start Mainmanu Nav --> */}
              <nav className="mainmenu-nav" id="mobilemenu-popup">
                <div className="d-block d-lg-none">
                  <div className="mobile-nav-header">
                    <div className="mobile-nav-logo">
                      <Link to="#" className="text-dark">
                        <p>
                          Landing <span className="fw-bold">Concept</span>
                        </p>
                      </Link>
                    </div>
                    <button
                      className="mobile-menu-close"
                      data-bs-dismiss="offcanvas"
                    >
                      <img src="./assets/media/icon/xmark-solid.svg" alt="" />
                    </button>
                  </div>
                </div>

                {/* <!-- Main Menu  --> */}
                <ul className="mainmenu">
                  <li className="menu-item-has-children">
                    <Link to="javascript:void(0);">Home</Link>
                    <ul className="lc-submenu">
                      <li>
                        <Link to="/">Digital Agency</Link>
                      </li>
                      <li>
                        <Link to="tech.html">Tech AI</Link>
                      </li>
                      <li>
                        <Link to="start-up.html">Start Up</Link>
                      </li>

                      <li>
                        <Link to="saas.html">SAAS Concept</Link>
                      </li>
                      <li>
                        <Link to="e-learning-index.html">E Learning </Link>
                      </li>
                      <li>
                        <Link to="business-index.html">Business </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <Link to="price-details.html">Pricing</Link>
                  </li>

                  <li className="menu-item-has-children">
                    <Link to="javascript:void(0);">Projects</Link>
                    <ul className="lc-submenu">
                      <li className="menu-item-has-children">
                        <Link to="about-us.html">About</Link>
                      </li>

                      <li className="menu-item-has-children">
                        <Link to="contact-us.html">Contact</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <Link to="javascript:void(0);">Services</Link>
                    <ul className="lc-submenu">
                      <li>
                        <Link to="teams.html">Teams</Link>
                      </li>
                      <li>
                        <Link to="team-detail.html">Teams Details</Link>
                      </li>
                      <li>
                        <Link to="portfolio.html">Portfolio Page</Link>
                      </li>
                      <li>
                        <Link to="portfolio-2.html">Portfolio II Page</Link>
                      </li>
                      <li>
                        <Link to="service-detail.html">Services Details</Link>
                      </li>
                      <li>
                        <Link to="typography.html">Typography</Link>
                      </li>
                      <li>
                        <Link to="not-found.html">Not Found</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <Link to="javascript:void(0);">Blog</Link>
                    <ul className="lc-submenu">
                      <li>
                        <Link to="blog.html">Blog</Link>
                      </li>
                      <li>
                        <Link to="blog-detail.html">Blog Detail</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children"></li>
                </ul>
              </nav>
              {/* <!-- End Mainmanu Nav --> */}
            </div>

            {/* <!-- Nav Login Section  --> */}
            <div className="d-none d-lg-block">
              <ul className="nav-right-btn">
                <li>
                  <Link to="register.html" className="btn-login">
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    to="contact.html"
                    className="business-btn btn-fill-primary mt-1"
                  >
                    Join Now
                  </Link>
                </li>
              </ul>
            </div>

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

export default Navbar2;
