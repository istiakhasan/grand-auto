import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
         {/* page content here */}
         <h2 className='text-primary text-4xl text-center font-semibold mt-3'>Welcome to your dashboard</h2>
         <Outlet />


         {/* page content here */}
      

         
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-black text-white ">
            <li><Link to="order">My Orders</Link></li>
            <li><Link to="myreview">Add A Review</Link></li>
            <li><Link to="myprofile">My Profile</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;