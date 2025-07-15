import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import ScrollToTop from '../components/ui/ScrollToTop';

const RootPageLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            {/* <ScrollToTop/> */}
            <ScrollToTop/>
            
        </div>
    );
};

export default RootPageLayout;