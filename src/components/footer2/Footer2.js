import React from "react";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <footer className="footer2-container">
      <div className="container--width">
        <div className="row justify-content-center align-items-center">
          {/* <!-- Footer 2 top section  --> */}
          <div className="col-12 container rounded-3 footer2-top bg-primary text-center">
            <h2 className="title">
              Your data security is our first <br /> priority, explore now!
            </h2>
            <p className="sub-title my-5">
              Graphic design is the art and profession of using compositions{" "}
              <br />
              to solve problems & illustration focuses on creative <br />
              interpretation.
            </p>
            <Link to="" className="business-btn btn-fill-dark">
              Get Started Now
            </Link>
          </div>

          <div className="col-12">
            <div className="footer2-right row justify-content-between align-items-center">
              <div className="col-6 col-md-3">
                <ul className="">
                  <li className="footer2-right-title my-5">Company</li>
                  <li>
                    <Link>About</Link>
                  </li>
                  <li>
                    <Link>Features</Link>
                  </li>
                  <li>
                    <Link>Works</Link>
                  </li>
                  <li>
                    <Link>Career</Link>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-3">
                <ul className="">
                  <li className="footer2-right-title my-5">Help</li>
                  <li>
                    <Link>Customer Support</Link>
                  </li>
                  <li>
                    <Link>Delivery Details</Link>
                  </li>
                  <li>
                    <Link>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-3">
                <ul className="">
                  <li className="footer2-right-title my-5">Resources</li>
                  <li>
                    <Link>Free eBooks</Link>
                  </li>
                  <li>
                    <Link>Development Tutorial</Link>
                  </li>
                  <li>
                    <Link>How to - Blog</Link>
                  </li>
                  <li>
                    <Link>Youtube Playlist</Link>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-md-3">
                <ul className="">
                  <li className="footer2-right-title my-5">Links</li>
                  <li>
                    <Link>Free eBooks</Link>
                  </li>
                  <li>
                    <Link>Development Tutorial</Link>
                  </li>
                  <li>
                    <Link>How to - Blog</Link>
                  </li>
                  <li>
                    <Link>Youtube Playlist</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
