import React from "react";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t shadow-lg border-gray-800 relative">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-primary">My Awesome Portfolio</h2>
            <p className="text-sm my-2">Crafting digital experiences with passion & precision.</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-center lg:text-left">
            <a href="#hero" className="hover:text-primary">Home</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#skills" className="hover:text-primary">Skills</a>
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 justify-center">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Back to Top Arrow */}
        <div className="absolute right-4 bottom-4">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-gray-950 p-3 rounded-full hover:from-blue-600 hover:to-blue-800 focus:outline-none shadow-md"
          >
            <FaArrowUp className="text-xl" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;