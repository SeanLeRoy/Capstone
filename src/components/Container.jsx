import React from 'react';
import '../css/index.css';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import CentralBlock from './CentralBlock.jsx';
import FeatureBlock from './FeatureBlock.jsx';
import Profiles from './Profiles.jsx';

const Container = () => (
    <React.Fragment>
        <Nav/>
        <CentralBlock/>
        <FeatureBlock/>
        <Profiles />
        <Footer/>
    </React.Fragment>
);

export default Container;
