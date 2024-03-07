import React from 'react';
import { Link } from 'react-router-dom';

const DiscussProject = () => {
    return (
        <section class="discuss-project section--spacing">
            <div class=" digital--container">
                <div class="section-items">
                <h2 class="title">
                    Ready to discuss <br />
                    your project with us?
                </h2>

                <Link href="#" class="digital-btn btn-fill-dark">
                    Get Started
                    <img src="./images/digital-icons/arrow-1.svg" alt="img" />
                </Link>
                </div>
            </div>
        </section>

    );
};

export default DiscussProject;