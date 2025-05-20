import React from 'react';
import useInView from '../hooks/useInView'; // Import useInView
// import './Footer.css'; // Removed

const Footer = () => {
  const [textRef, isTextInView] = useInView({ threshold: 0.9, rootMargin: '0px 0px 0px 0px' }); // Trigger when 90% visible

  return (
    <footer className="bg-gray-950 text-gray-400 py-8 text-center">
      <div className="container mx-auto px-4">
        <p 
          ref={textRef}
          className={`text-sm transition-opacity duration-1000 ease-in 
                      ${isTextInView ? 'opacity-100' : 'opacity-0'}`}
        >
          &copy; {new Date().getFullYear()} Kevin Pradjinata. All rights reserved.
        </p>
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