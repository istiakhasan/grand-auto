import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pl-10 pt-10">     
         <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-black text-white ">
            <li><Link to="/dashboard">My Orders</Link></li>
            <li><Link to="myreview">Add A Review</Link></li>
            <li><Link to="myprofile">My Profile</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;