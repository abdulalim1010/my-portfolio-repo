import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/NavBar';
import Footer from '../pages/footer/Footer';


const RoutLayout = () => {
  return (
    <div className=" min-h-screen flex flex-col"> 
      {/* Navbar */}
      <NavBar />

      {/* Page Content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default RoutLayout;
