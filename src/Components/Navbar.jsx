import React, { use } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import profileIcon from "../assets/profile.png";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const haldleLogOut = () => {
    logOut()
      .then(() => {
        alert("Loged Out success");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };
  return (
    <nav className="bg-white shadow-sm px-4 py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors"
        >
          SkillHive 🐝
        </Link>

        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="text-gray-600 text-2xl cursor-pointer md:hidden block"
        >
          <FaBars />
        </label>

        <div className="w-full md:w-auto hidden peer-checked:block md:block mt-3 md:mt-0">
          <ul className="flex flex-col md:flex-row gap-3 md:gap-6 text-gray-700 font-medium">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              {user ? (
                <NavLink to="/browseskills" className="nav-link">
                  Browse Skills
                </NavLink>
              ) : (
                ""
              )}
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
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div>
            <img
              className="w-12 h-12 rounded-full"
              src={`${user ? user.photoURL || profileIcon : profileIcon}`}
              alt=""
            />
          </div>
          <div>
            {user ? (
              <button onClick={haldleLogOut} className="btn btn-primary">
                LogOut
              </button>
            ) : (
              <Link to="/dasboard/login" className="btn btn-primary">
                Login/Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
