import React from "react";
import logo from "../Assets/images/logo.png";
import shopping from "../Assets/images/126083.png";
import { Link } from "react-router-dom";
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
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-52"
        />
        <span className="mx-5 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/" className="mx-2 navbar-btn">
              Home
            </Link>
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
            <Link to="/login" className="mx-2 navbar-btn">
              Login
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="navbar-end"> */}
      <a href="#">
        <img className="h-10 ml-5 lg:block hidden" src={shopping} alt="" />
      </a>
    </div>
    // </div>
  );
};

export default Navbar;
