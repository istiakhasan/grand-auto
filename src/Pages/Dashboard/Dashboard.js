import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user]=useAuthState(auth);
  const {admin} =useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:pl-10 mx-5 lg:mx-0 pt-10">   
     
         <Outlet />
          
        
        </div> 
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-black text-white ">
            {
              !admin && <>
               <li><Link to="myorder">My Orders</Link></li>
               <li><Link to="myreview">Add A Review</Link></li>
               </>
            }
           {admin && <>
            <li><Link to="makeadmin">Make Admin</Link></li>
            <li><Link to="addproduct">Add Product</Link></li>
            <li><Link to="manageorders">Manage Orders</Link></li>
            <li><Link to="manageproducts">Manage Products</Link></li>
          
            </> 
            }
            <li><Link to="myprofile">My Profile</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;