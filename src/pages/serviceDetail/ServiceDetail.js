import React from 'react';
import Navbar2 from '../../components/header/Navbar2';
import ServiceDetails from '../../components/serviceDetails/ServiceDetails';
import Footer2 from '../../components/footer2/Footer2';
import FooterBottom2 from '../../components/footer2/FooterBottom2';

const ServiceDetail = () => {
    return (
        <div>
            <Navbar2/>
            <ServiceDetails/>
            <Footer2/>
            <FooterBottom2/>
        </div>
    );
};

export default ServiceDetail;