import React, { useState, useEffect } from 'react';
// import './Navbar.css'; // Removed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-md 
                 transition-all duration-700 ease-out transform 
                 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          {/* <img src="/path/to/logo.png" alt="Logo" className="h-8 inline" /> */}
          <a href="#home" className="hover:text-blue-400">Kevin Pradjinata</a>
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            aria-label="Toggle menu" 
            aria-expanded={isOpen}
            className="text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-2 rounded-md"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li className="group relative">
            <a href="#home" className="hover:text-blue-400 transition-transform duration-200 ease-out inline-block transform hover:-translate-y-0.5">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </a>
          </li>
          <li className="group relative">
            <a href="#highlighted-projects" className="hover:text-blue-400 transition-transform duration-200 ease-out inline-block transform hover:-translate-y-0.5">
              Spotlight
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </a>
          </li>
          <li className="group relative">
            <a href="#all-projects-section" className="hover:text-blue-400 transition-transform duration-200 ease-out inline-block transform hover:-translate-y-0.5">
              Projects
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </a>
          </li>
          <li className="group relative">
            <a href="#contact" className="hover:text-blue-400 transition-transform duration-200 ease-out inline-block transform hover:-translate-y-0.5">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-blue-300 transition-colors duration-300">Home</a>
          <a href="#highlighted-projects" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-blue-300 transition-colors duration-300">Spotlight</a>
          <a href="#all-projects-section" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-blue-300 transition-colors duration-300">Projects</a>
          <a href="#contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-blue-300 transition-colors duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 