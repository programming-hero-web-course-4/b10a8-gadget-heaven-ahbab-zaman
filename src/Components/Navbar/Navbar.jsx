import { IoMenu } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
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
              <BsCart4 className="text-xl text-black"></BsCart4></div>
            <div className="flex items-center border justify-center rounded-full bg-white p-2 relative">
              <GrFavorite className="text-xl text-black"></GrFavorite></div>
          </div>
        
      </div>
    </div>
  );
};

export default Navbar;
