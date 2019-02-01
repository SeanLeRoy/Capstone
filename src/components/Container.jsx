import React from 'react';
import '../css/container.css';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import CentralBlock from './CentralBlock.jsx';
import FeatureBlock from './FeatureBlock.jsx';

const Container = () => (
    // TODO Capstone Requirements
    // Clear value proposition for the people the project is targeting
    // Well-written content articulating key features
    // Usable layout, captivating design
    // Social sharing features
    <React.Fragment>
        <Nav/>
        <CentralBlock/>
        <FeatureBlock/>
        <Footer/>
    </React.Fragment>
);

export default Container;
