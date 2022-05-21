import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    
            <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabindex="0" className="btn btn-ghost text-white lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/ro">About</Link></li>
            <li><Link to="/ro">About</Link></li>
            </ul>
          </div>
          <ul className="menu hidden lg:flex  menu-horizontal text-white p-0 gap-x-16">
            <li><Link to="/rr">Home</Link></li>
            <li><Link to="/rr">About</Link></li>
            <li><Link to="/rr">About</Link></li>
            <li><Link to="/rr">About</Link></li>
            <li><Link to="/rr">About</Link></li>
          </ul>
        </div>
        <div className="navbar-end  text-white">
          <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
       
        </div>
        
      </div>

    );
};

export default Navbar;