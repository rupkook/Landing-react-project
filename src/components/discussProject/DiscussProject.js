import React from 'react';
import { Link } from 'react-router-dom';

const DiscussProject = () => {
    return (
        <section className="discuss-project section--spacing">
            <div className=" digital--container">
                <div className="section-items">
                <h2 className="title">
                    Ready to discuss <br />
                    your project with us?
                </h2>

                <Link  className="digital-btn btn-fill-dark">
                    Get Started
                    <img src="./images/digital-icons/arrow-1.svg" alt="img" />
                </Link>
                </div>
            </div>
        </section>
    );
};

export default DiscussProject;