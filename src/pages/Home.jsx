import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import PrinterTypes from '../components/home/PrinterTypes';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Printers from '../components/Printers';

const Home = () => {
    return (
        <div className="home-page">

            <Hero />
            <PrinterTypes />
            <Printers isFeatured={true} hideDisclaimer={true} />
            <WhyChooseUs />
        </div>
    );
};

export default Home;
