import React, { useState, useEffect } from 'react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons'; // Import icons
// import './Navbar.css'; // Removed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const GITHUB_URL = "https://github.com/kpradjinata";
  const LINKEDIN_URL = "https://www.linkedin.com/in/kpradjinata/"; // Updated URL

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    // Call it once on mount to check initial scroll position
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // iconSize: Tailwind class for icon size, e.g., 'w-5 h-5'
  // showText: boolean, whether to show text next to icons
  // containerClassName: Tailwind class for the div wrapping each icon+text
  // linkClassName: Tailwind class for the <a> tag itself (excluding hover effects, which are standard)
  const renderSocialLinks = (iconSize = 'w-5 h-5', showText = false, containerClassName = '', linkClassName = '') => (
    <>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"
         className={`flex items-center transition-colors duration-300 hover:text-blue-300 ${isScrolled || showText ? 'text-white' : 'text-white'} ${linkClassName}`}>
        <GitHubIcon className={iconSize} />
        {showText && <span className="ml-2">GitHub</span>}
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"
         className={`flex items-center transition-colors duration-300 hover:text-blue-300 ${isScrolled || showText ? 'text-white' : 'text-white'} ${linkClassName}`}>
        <LinkedInIcon className={iconSize} />
        {showText && <span className="ml-2">LinkedIn</span>}
      </a>
    </>
  );

  return (
    <nav 
      className={`p-4 fixed w-full top-0 z-50 
                 transition-all duration-300 ease-out transform /* Combined transitions */
                 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} /* Mount animation */
                 ${isScrolled ? 'bg-gray-900 shadow-xl' : 'bg-transparent shadow-md'}`} /* Scroll-based style changes */
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          {/* <img src="/path/to/logo.png" alt="Logo" className="h-8 inline" /> */}
          <a 
            href="#home" 
            className={`transition-all duration-300 ease-out transform hover:scale-110 
                        ${isScrolled ? 'text-white hover:text-blue-300' : 'text-white hover:text-blue-200'}`}>
            Kevin Pradjinata
          </a>
        </div>

        <div className="flex items-center">
          <ul className="hidden md:flex space-x-6">
            <li className="group relative">
              <a href="#home" className={`transition-all duration-200 ease-out inline-block transform hover:-translate-y-0.5 ${isScrolled ? 'text-white hover:text-blue-400' : 'text-white hover:text-blue-300'}`}>
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </a>
            </li>
            <li className="group relative">
              <a href="#highlighted-projects" className={`transition-all duration-200 ease-out inline-block transform hover:-translate-y-0.5 ${isScrolled ? 'text-white hover:text-blue-400' : 'text-white hover:text-blue-300'}`}>
                Spotlight
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </a>
            </li>
            <li className="group relative">
              <a href="#all-projects-section" className={`transition-all duration-200 ease-out inline-block transform hover:-translate-y-0.5 ${isScrolled ? 'text-white hover:text-blue-400' : 'text-white hover:text-blue-300'}`}>
                Projects
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </a>
            </li>
            <li className="group relative">
              <a href="#contact" className={`transition-all duration-200 ease-out inline-block transform hover:-translate-y-0.5 ${isScrolled ? 'text-white hover:text-blue-400' : 'text-white hover:text-blue-300'}`}>
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </a>
            </li>
          </ul>

          <div className="hidden md:flex items-center space-x-4 ml-6">
            {renderSocialLinks('w-5 h-5')}
          </div>

          <div className="md:hidden flex items-center ml-4">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ${isScrolled ? 'text-white' : 'text-white'}`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out 
                    ${isScrolled ? 'bg-gray-900' : 'bg-gray-800/90 backdrop-blur-md'} 
                    ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-blue-300 transition-colors duration-300">Home</a>
          <a href="#highlighted-projects" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-blue-300 transition-colors duration-300">Spotlight</a>
          <a href="#all-projects-section" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-blue-300 transition-colors duration-300">Projects</a>
          <a href="#contact" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-blue-300 transition-colors duration-300">Contact</a>
          <hr className="my-3 border-gray-700" />
          <div className="px-3 py-2 space-y-3">
            {renderSocialLinks('w-6 h-6', true, '', 'block p-2 rounded-md hover:bg-gray-700 hover:text-blue-300')}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 