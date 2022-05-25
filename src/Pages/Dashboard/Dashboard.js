import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading'
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  const [user]=useAuthState(auth);
  const {admin,loadingAdmin} =useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
           <Helmet><title>Dashboard</title></Helmet>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content lg:pl-10 mx-5 lg:mx-0 pt-10">   
     
         <Outlet />
          
        
        </div> 
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-black text-white ">
            {
              loadingAdmin ?<div className='flex justify-center items-center'>
                <Loading />
              </div>  :<>
              
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
              </>
            }
           
          
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;