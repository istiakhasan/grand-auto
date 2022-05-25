import { MenuAlt2Icon } from "@heroicons/react/solid";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  const menuLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/Portfolio">Portfolio</Link>
      </li>

      {loading ? (
        <li>
          <Loading />{" "}
        </li>
      ) : (
        <>
          {user ? (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button className="btn normal-case" onClick={handleSignOut}>
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </>
      )}
    </>
  );
  return (
    <div className="navbar sticky bg-primary top-0 z-50 ">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex="0" className="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-base-100 rounded-box w-52"
          >
            {menuLinks}
          </ul>
        </div>
        <ul className="menu hidden lg:flex  menu-horizontal text-white p-0  lg:gap-x-10">
          {menuLinks}
        </ul>
      </div>
      <div className="navbar-end text-white">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          GrandAuto
        </Link>
      </div>
      {pathname.includes("dashboard") && (
        <div className="navbar-end lg:hidden text-white">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            {" "}
            <MenuAlt2Icon className="w-8 h-8" />
          </label>
        </div>
      )}
    </div>
  );
};

export default Navbar;
