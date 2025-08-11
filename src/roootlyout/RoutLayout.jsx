import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/NavBar';
import Footer from '../pages/footer/Footer ';


const RoutLayout = () => {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <Outlet/>
      </div>
      <div>
<Footer/>

      </div>



      
    </div>
  );
};

export default RoutLayout;