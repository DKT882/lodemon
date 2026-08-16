import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg border-b border-purple-500/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink
            to="/"
            className="group flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUOimif_3jg6MlTufxU0RCbGflwelk_I8mkIRoc0OUcg&s=10"
              className="w-12 h-12 rounded-full border-2 border-purple-400 shadow-lg group-hover:border-purple-300 transition-colors"
              alt="Logo"
            />
            <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </NavLink>

          {/* Navigation Links */}
          <ul className="flex gap-8 font-semibold text-sm sm:text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative px-3 py-2 transition-all duration-300 ${
                    isActive
                      ? "text-purple-300 font-bold"
                      : "text-gray-300 hover:text-purple-300"
                  } group`
                }
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Products"
                className={({ isActive }) =>
                  `relative px-3 py-2 transition-all duration-300 ${
                    isActive
                      ? "text-purple-300 font-bold"
                      : "text-gray-300 hover:text-purple-300"
                  } group`
                }
              >
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blogs"
                className={({ isActive }) =>
                  `relative px-3 py-2 transition-all duration-300 ${
                    isActive
                      ? "text-purple-300 font-bold"
                      : "text-gray-300 hover:text-purple-300"
                  } group`
                }
              >
                Blogs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
