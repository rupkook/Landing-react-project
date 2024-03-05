import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../header/Logo';

const Footer1 = () => {
    return (
        <footer class="digital-footer">
            <div class="digital--container">
                <div class="row justify-content-between align-items-start">
                {/* <!-- Footer Left Section   --> */}
                <div class="col-12 col-lg-5 col-xxl-5">
                    <div
                    class="d-flex flex-column justify-content-start align-items-center align-items-lg-start left-section"
                    >
                    <Link to="#" class="d-flex align-items-center">
                        <Logo/>
                    </Link>

                    <h2 class="footer-left-desc">
                        Subscribe to our newsletter to stay in touch with the latest.
                    </h2>

                    <span class="footer-input-wrapper">
                        <input
                        type="email"
                        class="form-control shadow-none"
                        placeholder="Enter your email"
                        aria-label="Enter Your Email"
                        />
                        <button type="button" class="btn">Subscribe</button>
                    </span>
                    </div>
                </div>

                <div class="col-12 col-lg-6 col-xxl-5">
                    <div class="right-section">
                    <div
                        class="row g-5 justify-content-start justify-content-md-center align-items-center align-items-sm-start"
                    >
                        <div class="col-6 col-sm-4 footer-right">
                        <ul class="list-unstyled">
                            <li class="footer-right-title">Resources</li>
                            <li><Link to="#">Free eBooks</Link></li>
                            <li><Link to="#">Development Tutorial</Link></li>
                            <li><Link to="#">How to - Blog</Link></li>
                            <li><Link to="#">Youtube Playlist</Link></li>
                        </ul>
                        </div>
                        <div class="col-6 col-sm-4 footer-right">
                        <ul class="list-unstyled">
                            <li class="footer-right-title">About Us</li>
                            <li><Link to="#">How to - Blog</Link></li>
                            <li><Link to="#">Free eBooks</Link></li>

                            <li><Link to="#">Youtube Playlist</Link></li>
                            <li><Link to="#">Development Tutorial</Link></li>
                        </ul>
                        </div>
                        <div class="col-6 col-sm-4 footer-right">
                        <ul class="list-unstyled">
                            <li class="footer-right-title">Links</li>
                            <li><Link to="#">Development Tutorial</Link></li>
                            <li><Link to="#">Free eBooks</Link></li>
                            <li><Link to="#">Youtube Playlist</Link></li>
                            <li><Link to="#">How to - Blog</Link></li>
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