import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <section class="Err-page">
            <div class="container container--width text-center">
                <div>
                    <img src={process.env.PUBLIC_URL +'./images/page404/page404.png'} alt='404'/>
                </div>
                <Link to={`/`} className='business-btn btn-fill-primary mt-5'>
                    Back To Home
                </Link>
            </div>
        </section>
    );
};

export default Page404;

