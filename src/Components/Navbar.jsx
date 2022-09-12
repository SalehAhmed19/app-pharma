import React from "react";
import logo from "../Assets/images/logo.png";
import shopping from "../Assets/images/126083.png";
const Navbar = () => {
  return (
    <div className="navbar py-8 bg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img className="w-36" src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a className="mx-2 navbar-btn" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="mx-2 navbar-btn" href="#">
              Shop
            </a>
          </li>
          <li>
            <a className="mx-2 navbar-btn" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="mx-2 navbar-btn" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end"> */}
      <a href="#">
        <img className="h-10" src={shopping} alt="" />
      </a>
    </div>
    // </div>
  );
};

export default Navbar;
