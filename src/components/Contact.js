import React from 'react';
import useInView from '../hooks/useInView'; // Import useInView
// import './Contact.css'; // Removed

const Contact = () => {
  const [titleRef, isTitleInView] = useInView({ threshold: 0.3, rootMargin: '0px 0px -50px 0px' });
  const [textRef, isTextInView] = useInView({ threshold: 0.5, rootMargin: '0px 0px -50px 0px' });
  const [buttonRef, isButtonInView] = useInView({ threshold: 0.8, rootMargin: '0px 0px -20px 0px' });

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-950 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 
          ref={titleRef}
          className={`text-4xl font-bold mb-6 uppercase tracking-wider transition-all duration-700 ease-out 
                      ${isTitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Contact Me
        </h2>
        <p 
          ref={textRef}
          className={`text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out delay-200 
                      ${isTextInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Feel free to reach out! Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div 
          ref={buttonRef}
          className={`flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 
                      ${isButtonInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <a 
            href="mailto:youremail@example.com" 
            className={`bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md text-lg 
                        transition-all duration-300 ease-in-out transform  /* Base transitions */
                        hover:bg-pink-500 hover:text-yellow-300 hover:scale-150 hover:rotate-12 hover:shadow-2xl /* Obnoxious hover */
                        focus:outline-none focus:ring-4 focus:ring-pink-300 /* Focus style */
                        ${isButtonInView ? 'animate-boing animate-wiggle [animation-delay:0.8s]' : 'opacity-0'}` // Entrance and continuous animation
                      } // Added animation-delay so wiggle starts after boing
          >
            Email Me
          </a>
          {/* Add more links like LinkedIn, GitHub as buttons or icons */}
          {/* Example for a LinkedIn button (you might want to use an icon instead) */}
          {/* 
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 text-lg transform hover:scale-105"
          >
            LinkedIn
          </a> 
          */}
        </div>
      </div>
    </section>
  );
};

export default Contact; 