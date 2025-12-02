import React, { use } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import profileIcon from "../assets/profile.png";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/browseskills" className="nav-link">
          Browse Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </li>
      <li>
        {user ? (
          <NavLink to="/profile" className="nav-link">
            My Profile
          </NavLink>
        ) : null}
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown space-x-3">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-amber-100 lg:hidden"
            >
              <FaBars className="text-black" />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            title="SkillHive"
            to="/"
            className="text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            SkillHive 🐝
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-5">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          {user && (
            <div>
              <img
                className="w-12 h-12 rounded-full"
                src={user?.photoURL || profileIcon}
                alt={user?.displayName || "User profile"}
                title={user?.displayName || "Guest"}
              />
            </div>
          )}
          <div>
            {user ? (
              <button onClick={handleLogOut} className="btn btn-primary">
                LogOut
              </button>
            ) : (
              <Link to="/dashboard/login" className="btn btn-primary">
                Login/Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
