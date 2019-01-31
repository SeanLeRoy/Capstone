import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import FeatureBlock from './FeatureBlock.jsx';

const LandingContainer = () => (
    // TODO Capstone Requirements
    // Clear value proposition for the people the project is targeting
    // Well-written content articulating key features
    // Usable layout, captivating design
    // Social sharing features
    <React.Fragment>
        <Nav/>
        <FeatureBlock/>
        <Footer/>
    </React.Fragment>
);

export default LandingContainer;
