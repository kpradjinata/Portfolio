import React from 'react';
import useInView from '../hooks/useInView';
import profileImage from '../assets/images/profile.png';
import designerGraphic from '../assets/images/designer-graphic.jpg';
import developerGraphic from '../assets/images/developer-graphic.png';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useTheme();
  const [homeRef, isHomeInView] = useInView({ threshold: 0.1 });
  const [arrowRef, isArrowInView] = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <section 
      ref={homeRef}
      id="home" 
      className={`min-h-[85vh] flex items-start justify-center relative
                 bg-white text-gray-800 dark:bg-black dark:text-white 
                 overflow-x-hidden`}
    >
      <div className="container mx-auto px-4 pt-16 pb-16 md:pt-20">
        <div className="flex flex-col md:flex-row items-stretch justify-around text-center md:text-left space-y-12 md:space-y-0 md:space-x-8">
          
          {/* Designer Section - Image with opacity */}
          <div 
            className={`md:w-1/3 
                        transition-all duration-700 ease-out transform 
                        relative min-h-[450px] md:min-h-[500px] rounded-lg overflow-hidden 
                        ${isHomeInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
          >
            <img 
              src={designerGraphic} 
              alt="Abstract design graphic" 
              className="absolute inset-0 w-full h-full object-contain opacity-40" 
            />
            <div className="relative z-10 p-8 space-y-4 flex flex-col justify-center items-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white text-shadow">
                Designer
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-200 text-shadow-sm text-center md:text-center">
                Blending creativity and usability to craft stunning and user-friendly interfaces.
              </p>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className={`md:w-1/3 flex justify-center items-center transition-all duration-700 ease-out delay-200 transform 
                          ${isHomeInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <img 
              src={profileImage} 
              alt="Kevin Pradjinata headshot" 
              className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover border-4 border-gray-300 dark:border-gray-700 shadow-xl"
            />
          </div>

          {/* Developer Section - Image with opacity and scale */}
          <div 
            className={`md:w-1/3 
                        transition-all duration-700 ease-out transform 
                        relative min-h-[450px] md:min-h-[500px] rounded-lg overflow-hidden 
                        ${isHomeInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
          >
            <img 
              src={developerGraphic} 
              alt="Abstract code graphic" 
              className="absolute inset-0 w-full h-full object-contain opacity-55 origin-left scale-137.5"
            />
            <div className="relative z-10 p-8 space-y-4 flex flex-col justify-center items-center h-full">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white text-shadow">
                Developer
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-200 text-shadow-sm text-center md:text-center">
                Committed to creating robust solutions with a focus on efficiency and adaptability to emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      {isHomeInView && (
        <div 
          ref={arrowRef} 
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${isArrowInView ? 'opacity-100' : 'opacity-0'}`}>
          <svg 
            className="w-8 h-8 text-gray-600 dark:text-gray-400 animate-bounceArrow"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      )}
    </section>
  );
};

export default Home;