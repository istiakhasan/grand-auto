import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user]=useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth)
  }
    const menuLinks=<>
    
             <li><Link to="/">Home</Link></li>
             <li><Link to="/rr">About</Link></li>
             <li><Link to="/blog">Blog</Link></li>
             {user &&  <li><Link to="dashboard">Dashboard</Link></li>}
             {user && <li><button className='btn normal-case' onClick={handleSignOut}>Log Out</button></li>}
             {!user && <li><Link to="/login">Login</Link></li>}
    </>
    return (
    
            <div className="navbar sticky bg-primary top-0 z-50 ">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex="0" className="btn btn-ghost text-white lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-base-100 rounded-box w-52">
            {
              menuLinks
            }
            </ul>
          </div>
          <ul className="menu hidden lg:flex  menu-horizontal text-white p-0  lg:gap-x-10">
           {
             menuLinks
           }
          </ul>
        </div>
        <div className="navbar-end  text-white">
          <Link to="/" className="btn btn-ghost normal-case text-xl">GrandAuto </Link>
       
        </div>
        
      </div>

    );
};

export default Navbar;