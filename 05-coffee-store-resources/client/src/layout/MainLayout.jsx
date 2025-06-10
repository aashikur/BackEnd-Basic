import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;