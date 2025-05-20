import React from 'react';
import useInView from '../hooks/useInView'; // Import useInView
import { GitHubIcon, LinkedInIcon } from './SocialIcons'; // Import icons
// import './Footer.css'; // Removed

const Footer = () => {
  const [textRef, isTextInView] = useInView({ threshold: 0.9, rootMargin: '0px 0px 0px 0px' }); // Trigger when 90% visible
  const GITHUB_URL = "https://github.com/kpradjinata";
  const LINKEDIN_URL = "https://www.linkedin.com/in/kpradjinata/"; // Updated URL

  return (
    <footer className="bg-gray-950 text-gray-400 py-8 text-center">
      <div className="container mx-auto px-4">
        <div 
          ref={textRef} 
          className={`transition-opacity duration-1000 ease-in ${isTextInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex justify-center space-x-6 mb-4">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300">
              <GitHubIcon className="w-7 h-7" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-300">
              <LinkedInIcon className="w-7 h-7" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Kevin Pradjinata. All rights reserved.</p>
        </div>
        {/* You can add social media links or other info here using Tailwind classes */}
        {/* Example:
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
          <a href="#" className="hover:text-blue-400">GitHub</a>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer; 