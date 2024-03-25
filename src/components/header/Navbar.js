/* eslint-disable no-script-url */

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header class="header lc-header-7 header-style-1">
      <div id="lc-sticky-placeholder"></div>
      <div class="lc-mainmenu">
        <div class="digital--container">
          <div class="header-navbar">
            <div class="header-logo">
              <Link to="#">
                <ul class="list-unstyled">
                  <li>
                    <img
                      class=""
                      src="./images/header/nav-logo.png"
                      alt="logo"
                    />
                  </li>
                  <li class="nav-title">
                    Landing <span class="fw-bold">Concept</span>
                  </li>
                </ul>
              </Link>
            </div>
            <div class="header-main-nav">
              {/* <!-- Start Mainmanu Nav --> */}
              <nav class="mainmenu-nav" id="mobilemenu-popup">
                <div class="d-block d-lg-none">
                  <div class="mobile-nav-header">
                    <div class="mobile-nav-logo">
                      <Link to="#" class="text-dark">
                        <p>
                          Landing <span class="fw-bold">Concept</span>
                        </p>
                      </Link>
                    </div>
                    <button
                      class="mobile-menu-close"
                      data-bs-dismiss="offcanvas"
                    >
                      <img src="./images/icon/xmark-solid.svg" alt="" />
                    </button>
                  </div>
                </div>

                {/* <!-- Main Menu  --> */}
                <ul class="mainmenu-7">
                  <li class="menu-item-has-children">
                    <Link to="javascript:void(0);">
                      Service
                      <img
                        src="./images/saas-icons/nav-down-arrow.svg"
                        alt="icon"
                        class="image-fluid"
                      />
                    </Link>
                    <ul class="lc-submenu">
                      <li>
                        <Link to="">Digital Agency</Link>
                      </li>
                      <li>
                        <Link to="">Tech AI</Link>
                      </li>
                      <li>
                        <Link to="">Start Up</Link>
                      </li>
                      <li>
                        <Link to="">SAAS Concept</Link>
                      </li>
                      <li>
                        <Link to="">E Learning </Link>
                      </li>
                      <li>
                        <Link to="">Business </Link>
                      </li>
                    </ul>
                  </li>

                  <li class="menu-item-has-children">
                    <Link to="javascript:void(0);">
                      Agency
                      <img
                        src="./images/saas-icons/nav-down-arrow.svg"
                        alt="icon"
                        class="image-fluid"
                      />
                    </Link>
                    <ul class="lc-submenu">
                      <li>
                        <Link to="">Blog Details</Link>
                      </li>
                      <li>
                        <Link to="">Teams Details</Link>
                      </li>
                      <li>
                        <Link to="">Portfolio Page</Link>
                      </li>
                      <li>
                        <Link to="/ServiceDetail">Services Details</Link>
                      </li>
                      <li>
                        <Link to="">Typography</Link>
                      </li>
                      <li>
                        <Link to="">Not Found</Link>
                      </li>
                    </ul>
                  </li>

                  {/* <!-- <li class="menu-item-has-children">
                <a to="javascript:void(0);"
                  >Case Study
                  <img
                    src="./images/saas-icons/nav-down-arrow.svg"
                    alt="icon"
                    class="image-fluid"
                /></a>
                <ul class="lc-submenu">
                  <li><a to="#">Case Study 1</a></li>
                  <li><a to="#">Case Study 2</a></li>
                  <li><a to="#">Case Study 3</a></li>
                </ul>
              </li>

              <li class="menu-item-has-children">
                <a to="javascript:void(0);">Resources</a>
              </li> --> */}

                  <li class="menu-item-has-children">
                    <Link to="contact-us.html">Contact</Link>
                  </li>

                  <li class="menu-item-has-children">
                    <Link to="about-us.html">About</Link>
                  </li>

                  <li class="menu-item-has-children">
                    <Link to="blog-detail.html">Blog</Link>
                  </li>
                </ul>
              </nav>
              {/* <!-- End Mainmanu Nav --> */}
            </div>

            {/* <!-- Button  --> */}
            <Link
              to="register.html"
              class="digital-btn btn-fill-white d-none d-lg-block"
            >
              Join Now
            </Link>

            <div class="header-action">
              <ul class="list-unstyled">
                <li class="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                  <button
                    class="btn-wrap"
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
