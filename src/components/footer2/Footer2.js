import React from 'react';
import { Link } from 'react-router-dom';

const Footer2 = () => {
    return (
        <footer class="footer2-container">
            <div class="container--width">
                <div class="row justify-content-center align-items-center">
                    
                    {/* <!-- Footer 2 top section  --> */}
                    <div class="col-12 container rounded-3 footer2-top bg-primary text-center">
                        <h2 class="title">Your data security is our first <br /> priority, explore now!</h2>
                        <p class="sub-title my-5">Graphic design is the art and profession of using compositions <br />to solve problems & illustration focuses on creative <br />interpretation.</p>
                        <Link href="contact.html" class="business-btn btn-fill-dark">Get Started Now</Link>
                    </div>

                    <div class="col-12">
                        <div
                        class="footer2-right row justify-content-between align-items-center"
                        >
                        <div class="col-6 col-md-3">
                            <ul class="">
                            <li class="footer2-right-title my-5">Company</li>
                            <li><Link href="#">About</Link></li>
                            <li><Link href="#">Features</Link></li>
                            <li><Link href="#">Works</Link></li>
                            <li><Link href="#">Career</Link></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-3">
                            <ul class="">
                            <li class="footer2-right-title my-5">Help</li>
                            <li><Link href="#">Customer Support</Link></li>
                            <li><Link href="#">Delivery Details</Link></li>
                            <li><Link href="#">Terms & Conditions</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-3">
                            <ul class="">
                            <li class="footer2-right-title my-5">Resources</li>
                            <li><Link href="#">Free eBooks</Link></li>
                            <li><Link href="#">Development Tutorial</Link></li>
                            <li><Link href="#">How to - Blog</Link></li>
                            <li><Link href="#">Youtube Playlist</Link></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-3">
                            <ul class="">
                            <li class="footer2-right-title my-5">Links</li>
                            <li><Link href="#">Free eBooks</Link></li>
                            <li><Link href="#">Development Tutorial</Link></li>
                            <li><Link href="#">How to - Blog</Link></li>
                            <li><Link href="#">Youtube Playlist</Link></li>
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