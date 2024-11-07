import { IoMenu } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AddFavorite, AddNumber } from "../Root/Root";

const Navbar = () => {
  const [number, addNumber] = useContext(AddNumber)
  const [favorite, setFavorite]= useContext(AddFavorite)
  const location = useLocation();
  const homePage = location.pathname === "/";
  return (
    <div>
      <div
        className={`navbar ${
          homePage ? "bg-[#9538E2] text-white" : "bg-white text-black"
        } px-6`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMenu></IoMenu>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img className="w-12" src="./assets/mobile.png" alt="" />
          <h4 className="text-lg font-semibold">Gadget Heaven</h4>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6 px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
        
          <div className="navbar-end space-x-4">
            <div className="flex items-center border justify-center rounded-full bg-white p-2 relative">
              <BsCart4 className="text-xl text-black"></BsCart4>
              <span className="absolute w-6 h-6 flex items-center justify-center -top-2 -right-4 bg-slate-300 rounded-full p-1">
                {number}
              </span>
            </div>
            <div className="flex items-center border justify-center rounded-full bg-white p-2 relative">
              <GrFavorite className="text-xl text-black"></GrFavorite>
              <span className="absolute w-6 h-6 flex items-center justify-center -top-2 -right-4 bg-slate-300 rounded-full p-1">
                {favorite}
              </span>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Navbar;
