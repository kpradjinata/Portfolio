import React from 'react';
// import './Contact.css'; // Removed

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-950 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 uppercase tracking-wider">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Feel free to reach out! Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="mailto:youremail@example.com" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 text-lg transform hover:scale-105"
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