import React, { useState, useEffect } from 'react';

// Placeholder for potential icons (e.g., from react-icons)
// import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

const ExpertiseItem = ({ title, description, delay }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 
                 transform hover:scale-105 transition-all duration-500 ease-in-out
                 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{ transitionDelay: `${isMounted ? 0 : delay}ms`}}
    >
      {/* {icon && <div className="text-blue-400 text-4xl mb-4">{icon}</div>} */}
      <h3 className="text-2xl font-semibold text-blue-400 mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

const Expertise = () => {
  // Suggestion: Populate this with your actual areas of expertise, skills, or technologies
  const expertiseAreas = [
    {
      title: 'Frontend Development',
      description: 'Building responsive UIs with React, TypeScript, & Tailwind CSS.',
      // icon: <FaReact /> 
    },
    {
      title: 'Backend Development',
      description: 'Crafting robust APIs with Node.js, Python, & various databases.',
      // icon: <FaNodeJs />
    },
    {
      title: 'iOS Development',
      description: 'Creating engaging iOS apps using Swift & ARKit.',
      // icon: <FaApple /> // Or a more specific iOS icon
    },
    {
      title: 'Machine Learning',
      description: 'Applying ML (CoreML, PyBKT, NLP) for data insights.',
      // icon: <FaPython /> // Or a more generic ML icon
    }
  ];

  return (
    <section id="expertise" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wider">Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjusted grid for potentially more items */}
          {expertiseAreas.map((item, index) => (
            <ExpertiseItem 
              key={item.title} 
              title={item.title} 
              description={item.description} 
              delay={index * 150}
            />
          ))}
        </div>
        <p className="text-center mt-12 text-gray-400">
          Continuously learning and expanding my technical skillset.
        </p>
      </div>
    </section>
  );
};

export default Expertise; 