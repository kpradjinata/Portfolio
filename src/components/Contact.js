import React from 'react';
import useInView from '../hooks/useInView'; // Import useInView
// import './Contact.css'; // Removed

const Contact = () => {
  const [titleRef, isTitleInView] = useInView({ threshold: 0.3, rootMargin: '0px 0px -50px 0px' });
  const [textRef, isTextInView] = useInView({ threshold: 0.5, rootMargin: '0px 0px -50px 0px' });
  const [buttonContainerRef, isButtonContainerInView] = useInView({ threshold: 0.8, rootMargin: '0px 0px -20px 0px' });

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
          ref={buttonContainerRef} 
          className={`flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 
                      ${isButtonContainerInView ? 'opacity-100' : 'opacity-0'}`}
        >
          <a 
            href="mailto:kepradjinata@gmail.com"
            className={`bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md text-lg 
                        transition-all duration-300 ease-in-out transform 
                        hover:bg-purple-600 hover:text-yellow-200 hover:scale-[1.6] hover:rotate-[-15deg] hover:shadow-2xl
                        focus:outline-none focus:ring-4 focus:ring-purple-400
                        ${isButtonContainerInView ? 'animate-boing animate-wiggle animate-pulse-glow [animation-delay:0.8s]' : 'opacity-0'}`
                      }
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 