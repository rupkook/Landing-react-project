import { Link } from "react-router-dom";

const Footer1 = () => {
  return (
    <footer className="digital-footer">
      <div className="digital--container">
        <div className="row justify-content-between align-items-start">
          {/* <!-- Footer Left Section   --> */}
          <div className="col-12 col-lg-5 col-xxl-5">
            <div className="d-flex flex-column justify-content-start align-items-center align-items-lg-start left-section">
              <div class="footer-logo">
                <Link to="#">
                  <ul class="list-unstyled">
                    <li>
                      <img
                        class=""
                        src="./images/header/nav-logo.png"
                        alt="logo"
                      />
                    </li>
                    <li class="footer-title">
                      Landing <span class="fw-bold">Concept</span>
                    </li>
                  </ul>
                </Link>
              </div>
              <h2 className="footer-left-desc">
                Subscribe to our newsletter to stay in touch with the latest.
              </h2>

              <span className="footer-input-wrapper">
                <input
                  type="email"
                  className="form-control shadow-none"
                  placeholder="Enter your email"
                  aria-label="Enter Your Email"
                />
                <button type="button" className="btn">
                  Subscribe
                </button>
              </span>
            </div>
          </div>

          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="right-section">
              <div className="row g-5 justify-content-start justify-content-md-center align-items-center align-items-sm-start">
                <div className="col-6 col-sm-4 footer-right">
                  <ul className="list-unstyled">
                    <li className="footer-right-title">Resources</li>
                    <li>
                      <Link to="#">Free eBooks</Link>
                    </li>
                    <li>
                      <Link to="#">Development Tutorial</Link>
                    </li>
                    <li>
                      <Link to="#">How to - Blog</Link>
                    </li>
                    <li>
                      <Link to="#">Youtube Playlist</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-4 footer-right">
                  <ul className="list-unstyled">
                    <li className="footer-right-title">About Us</li>
                    <li>
                      <Link to="#">How to - Blog</Link>
                    </li>
                    <li>
                      <Link to="#">Free eBooks</Link>
                    </li>

                    <li>
                      <Link to="#">Youtube Playlist</Link>
                    </li>
                    <li>
                      <Link to="#">Development Tutorial</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-4 footer-right">
                  <ul className="list-unstyled">
                    <li className="footer-right-title">Links</li>
                    <li>
                      <Link to="#">Development Tutorial</Link>
                    </li>
                    <li>
                      <Link to="#">Free eBooks</Link>
                    </li>
                    <li>
                      <Link to="#">Youtube Playlist</Link>
                    </li>
                    <li>
                      <Link to="#">How to - Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
