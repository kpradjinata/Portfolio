import React from 'react';
import useInView from '../hooks/useInView';
// import './Home.css'; // Removed

// You can place your actual image in src/assets/images/your-image.jpg
// import profileImage from '../assets/images/your-profile-image.jpg';

const Home = () => {
  // useInView hook with options. Threshold 0.1 means animation triggers when 10% of the element is visible.
  const [homeRef, isHomeInView] = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={homeRef}
      id="home" 
      // Removed overall section animation, it now just triggers children animations
      className={`min-h-screen flex items-center justify-center bg-black text-white overflow-x-hidden`} // Added overflow-x-hidden to prevent scrollbars during slide
    >
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-around text-center md:text-left space-y-12 md:space-y-0 md:space-x-8">
          
          {/* Designer Section */}
          <div className={`md:w-1/3 space-y-4 transition-all duration-700 ease-out transform 
                          ${isHomeInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400">Designer</h1>
            <p className="text-lg text-gray-300">
              Blending creativity and usability to craft stunning and user-friendly interfaces.
            </p>
            <img 
              src="https://via.placeholder.com/300x200?text=Paint+Splash+Effect" 
              alt="Abstract colorful paint splash representing creativity in design" 
              className={`mx-auto md:mx-0 mt-4 h-32 object-contain transition-opacity duration-500 ease-out delay-700 
                          ${isHomeInView ? 'opacity-100' : 'opacity-0'}`} 
            />
          </div>

          {/* Profile Image Section */}
          <div className={`md:w-1/3 flex justify-center transition-all duration-700 ease-out delay-200 transform 
                          ${isHomeInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <img 
              // src={profileImage} // Use your imported image
              src="https://via.placeholder.com/300x300?text=Kevin+Pradjinata" 
              alt="Kevin Pradjinata headshot" 
              className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover border-4 border-gray-700 shadow-xl"
            />
          </div>

          {/* Developer Section */}
          <div className={`md:w-1/3 space-y-4 transition-all duration-700 ease-out transform 
                          ${isHomeInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400">Developer</h1>
            <p className="text-lg text-gray-300">
              Committed to creating robust solutions with a focus on efficiency and adaptability to emerging technologies.
            </p>
            <img 
              src="https://via.placeholder.com/300x150?text=Code+Snippet" 
              alt="Stylized representation of a code snippet on a dark background" 
              className={`mx-auto md:mx-0 mt-4 h-24 object-contain transition-opacity duration-500 ease-out delay-700 
                          ${isHomeInView ? 'opacity-75' : 'opacity-0'}`} // Target opacity-75 as per original
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home; 