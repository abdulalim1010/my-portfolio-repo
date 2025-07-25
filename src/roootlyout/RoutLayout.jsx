import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/NavBar';

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

      </div>



      
    </div>
  );
};

export default RoutLayout;