import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-950 text-white shadow-lg">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="navbar flex justify-between items-center">
          {/* Brand Name */}
          <div className="navbar-start">
            <a href="#" className="text-2xl bg-gradient-to-r from-blue-950 to-blue-400 font-bold">
              SI
            </a>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex navbar-center">
            <ul className="menu menu-horizontal px-1 space-x-4">
              <li>
                <a href="#hero" className="hover:text-primary">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary">Skills</a>
              </li>
              <li>
                <a href="#education" className="hover:text-primary">Education</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary">Projects</a>
              </li>
              <li>
                <button className="bg-blue-500 px-3 py-2 text-white rounded-md hover:bg-blue-600">
                  <a href="#contact" className="hover:text-primary">Let's talk</a>
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className="navbar-end md:hidden">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2  shadow-lg bg-gray-800 rounded-box w-52 text-white overflow-x-auto"
              >
                <li>
                  <a href="#hero" className="hover:text-primary">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary">About</a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-primary">Skills</a>
                </li>
                <li>
                  <a href="#education" className="hover:text-primary">Education</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-primary">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
