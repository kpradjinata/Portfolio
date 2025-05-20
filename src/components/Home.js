import React, { useState, useEffect } from 'react';
// import './Home.css'; // Removed

// You can place your actual image in src/assets/images/your-image.jpg
// import profileImage from '../assets/images/your-profile-image.jpg';

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100); // Slight delay for effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center bg-black text-white 
                 transition-all duration-1000 ease-out 
                 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-around text-center md:text-left space-y-12 md:space-y-0 md:space-x-8">
          
          {/* Designer Section */}
          <div className="md:w-1/3 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400">Designer</h1>
            <p className="text-lg text-gray-300">
              Blending creativity and usability to craft stunning and user-friendly interfaces.
            </p>
             {/* Placeholder for the paint splash image - REPLACE with actual image and alt text */}
            <img 
              src="https://via.placeholder.com/300x200?text=Paint+Splash+Effect" 
              alt="Abstract colorful paint splash representing creativity in design" 
              className="mx-auto md:mx-0 mt-4 h-32 object-contain" 
            />
          </div>

          {/* Profile Image Section - REPLACE with actual image and alt text */}
          <div className="md:w-1/3 flex justify-center">
            <img 
              // src={profileImage} // Use your imported image
              src="https://via.placeholder.com/300x300?text=Kevin+Pradjinata" 
              alt="Kevin Pradjinata headshot" 
              className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover border-4 border-gray-700 shadow-xl"
            />
          </div>

          {/* Developer Section */}
          <div className="md:w-1/3 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400">Developer</h1>
            <p className="text-lg text-gray-300">
              Committed to creating robust solutions with a focus on efficiency and adaptability to emerging technologies.
            </p>
            {/* Placeholder for the code snippet image - REPLACE with actual image and alt text */}
            <img 
              src="https://via.placeholder.com/300x150?text=Code+Snippet" 
              alt="Stylized representation of a code snippet on a dark background" 
              className="mx-auto md:mx-0 mt-4 h-24 object-contain opacity-75" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home; 