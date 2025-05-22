import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white 
                 text-gray-300 hover:text-white transition-colors duration-200"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5 sm:w-6 sm:h-6" />
      ) : (
        <FiSun className="w-5 h-5 sm:w-6 sm:h-6" />
      )}
    </button>
  );
};

export default ThemeToggle; 