
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-100 px-5 py-4 font-roboto text-black">
      <div className="flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-zinc-600">
          <span className="text-orange-500">Kolekar's</span> Advice 
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-2xl text-zinc-900 md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="material-icons">{isOpen ? "close" : "menu"}</span>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-20 left-0 w-full bg-zinc-100 md:static md:w-auto md:block `}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 px-5 md:px-0">
            <li>
              <Link
                to="/home"
                className="text-zinc-900 font-bold hover:text-orange-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/knowmore"
                className="text-zinc-900 font-bold hover:text-orange-500 transition duration-300"
              >
                About Us
              </Link>
            </li>
            
            <li>
              <Link
                to="/services"
                className="text-zinc-900 font-bold hover:text-orange-500 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-zinc-900 font-bold hover:text-orange-500 transition duration-300"
              >
                ContactUs
              </Link>
            </li>
          
            
           
          </ul>   

          {/* Icons for Mobile and Desktop */}
          <div className="flex items-center justify-center md:ml-8 mt-4 md:mt-0">
            <a
              href="sign-in.html"
              className="text-gray-800 text-2xl mr-6 hover:text-orange-500 transition duration-300"
            >
              <i className="bi-person"></i>
            </a>
            <a
              href="product-detail.html"
              className="text-gray-800 text-2xl hover:text-orange-500 transition duration-300"
            >
              <i className="bi-bag"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
