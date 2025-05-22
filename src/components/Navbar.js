import React, { useState, useEffect } from 'react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons'; // Import icons
import ThemeToggle from './ThemeToggle'; // Import ThemeToggle
import { useTheme } from '../context/ThemeContext'; // Import useTheme
// import './Navbar.css'; // Removed

const ACCENT_COLORS = [
  { name: 'Blue', value: 'blue-500', class: 'bg-blue-500' },
  { name: 'Purple', value: 'purple-500', class: 'bg-purple-500' },
  { name: 'Green', value: 'green-500', class: 'bg-green-500' },
  { name: 'Orange', value: 'orange-500', class: 'bg-orange-500' },
  { name: 'Pink', value: 'pink-500', class: 'bg-pink-500' },
];

const Navbar = () => {
  const { theme, accentColor, setAccentColor } = useTheme(); // Get current theme and accent color
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
  const renderSocialLinks = (iconSize = 'w-5 h-5', showText = false, linkClassName = '') => {
    let iconColor;
    let hoverIconColor;

    if (theme === 'dark') {
      iconColor = 'text-white';
      hoverIconColor = 'hover:text-blue-300';
    } else { // theme === 'light'
      iconColor = 'text-gray-700'; // Consistent dark color for icons in light mode
      hoverIconColor = 'hover:text-blue-600';
    }
    
    // Mobile specific hover for links that show text (like in the hamburger menu)
    const mobileLinkBgHover = theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200';
    const mobileLinkTextHover = theme === 'dark' ? 'hover:text-blue-300' : 'hover:text-blue-500';

    return (
      <>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"
           className={`flex items-center transition-colors duration-300 ${iconColor} ${hoverIconColor} ${linkClassName} ${showText ? `${mobileLinkBgHover} ${mobileLinkTextHover}` : ''}`}>
          <GitHubIcon className={iconSize} />
          {showText && <span className="ml-2">GitHub</span>}
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"
           className={`flex items-center transition-colors duration-300 ${iconColor} ${hoverIconColor} ${linkClassName} ${showText ? `${mobileLinkBgHover} ${mobileLinkTextHover}` : ''}`}>
          <LinkedInIcon className={iconSize} />
          {showText && <span className="ml-2">LinkedIn</span>}
        </a>
      </>
    );
  };

  // Determine text colors based on scroll and theme
  const scrolledNavTextColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const initialNavTextColor = theme === 'dark' ? 'text-white' : 'text-gray-700'; // Slightly darker for better contrast on potentially light hero
  const navTextColor = isScrolled ? scrolledNavTextColor : initialNavTextColor;

  const scrolledNavTextHoverColor = theme === 'dark' ? 'hover:text-blue-300' : 'hover:text-blue-600';
  const initialNavTextHoverColor = theme === 'dark' ? 'hover:text-blue-200' : 'hover:text-blue-500';
  const navTextHoverColor = isScrolled ? scrolledNavTextHoverColor : initialNavTextHoverColor;

  const mobileMenuBg = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const mobileMenuText = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const mobileLinkHoverBg = theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200';
  const mobileLinkHoverText = theme === 'dark' ? 'hover:text-blue-300' : 'hover:text-blue-500';

  return (
    <nav 
      className={`p-4 fixed w-full top-0 z-50 
                 transition-all duration-300 ease-out transform /* Combined transitions */
                 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} /* Mount animation */
                 ${isScrolled 
                    ? (theme === 'dark' ? 'bg-gray-900' : 'bg-white shadow-lg') 
                    : 'bg-transparent'} 
                 shadow-md dark:shadow-none ${isScrolled && theme==='light' ? 'shadow-lg' : 'shadow-md'}`} /* Scroll-based style changes */
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className={`text-xl font-bold ${navTextColor} transition-colors duration-300`}>
          {/* <img src="/path/to/logo.png" alt="Logo" className="h-8 inline" /> */}
          <a 
            href="#home" 
            className={`transition-all duration-300 ease-out transform hover:scale-110 ${navTextHoverColor}`}>
            Kevin Pradjinata
          </a>
        </div>

        <div className="flex items-center">
          <ul className="hidden md:flex space-x-6 items-center">
            <li><a href="#home" className={`transition-all duration-200 ease-out inline-block transform hover:-translate-y-0.5 ${navTextColor} ${navTextHoverColor}`}>Home<span className={`absolute bottom-0 left-0 w-full h-0.5 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left`}></span></a></li>
            <li><a href="#highlighted-projects" className={`transition-all duration-200 ease-out inline-block transform hover:-translate-y-0.5 ${navTextColor} ${navTextHoverColor}`}>Spotlight<span className={`absolute bottom-0 left-0 w-full h-0.5 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left`}></span></a></li>
            <li><a href="#all-projects-section" className={`transition-all duration-200 ease-out inline-block transform hover:-translate-y-0.5 ${navTextColor} ${navTextHoverColor}`}>Projects<span className={`absolute bottom-0 left-0 w-full h-0.5 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left`}></span></a></li>
            <li><a href="#contact" className={`transition-all duration-200 ease-out inline-block transform hover:-translate-y-0.5 ${navTextColor} ${navTextHoverColor}`}>Contact<span className={`absolute bottom-0 left-0 w-full h-0.5 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left`}></span></a></li>
          </ul>

          <div className="hidden md:flex items-center space-x-4 ml-6">
            {renderSocialLinks('w-5 h-5')}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center ml-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className={`ml-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${theme === 'dark' ? 'focus:ring-blue-500 text-white' : 'focus:ring-blue-700 text-gray-700'}`}>
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
                    ${isScrolled ? (theme === 'dark' ? 'bg-gray-900' : 'bg-white shadow-lg') : (theme === 'dark' ? 'bg-gray-800/90 backdrop-blur-md' : 'bg-gray-50/90 backdrop-blur-md')} 
                    ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`pt-2 pb-3 space-y-1 sm:px-3 ${mobileMenuText}`}>
          <a href="#home" onClick={toggleMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkHoverBg} ${mobileLinkHoverText} transition-colors duration-300`}>Home</a>
          <a href="#highlighted-projects" onClick={toggleMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkHoverBg} ${mobileLinkHoverText} transition-colors duration-300`}>Spotlight</a>
          <a href="#all-projects-section" onClick={toggleMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkHoverBg} ${mobileLinkHoverText} transition-colors duration-300`}>Projects</a>
          <a href="#contact" onClick={toggleMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkHoverBg} ${mobileLinkHoverText} transition-colors duration-300`}>Contact</a>
          <hr className={`my-3 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`} />
          <div className="px-3 py-2 space-y-3">
            {renderSocialLinks('w-6 h-6', true, 'block p-2 rounded-md')}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 