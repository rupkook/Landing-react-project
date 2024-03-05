import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <Link to='/'>
                <img src={process.env.PUBLIC_URL + './images/logo.png'} alt='Logo'/>
            </Link>
        </div>
    );
};

export default Logo;