import React from 'react';
import useInView from '../hooks/useInView';
import { FaReact, FaNodeJs, FaPython, FaApple } from 'react-icons/fa';

// Placeholder for potential icons (e.g., from react-icons)
// import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

const ExpertiseItem = ({ title, description, icon }) => {
  const [itemRef, isItemInView] = useInView({ threshold: 0.25, rootMargin: '0px 0px -20px 0px' });

  return (
    <div 
      ref={itemRef}
      className={`bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 
                 transform hover:scale-105 transition-all duration-500 ease-in-out
                 flex flex-col items-center text-center
                 ${isItemInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
    >
      {icon && <div className="text-blue-400 text-5xl mb-4">{icon}</div>}
      <h3 className="text-2xl font-semibold text-blue-400 mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

const Expertise = () => {
  const [titleRef, isTitleInView] = useInView({ threshold: 0.5, rootMargin: '0px 0px -50px 0px' });
  const [footerTextRef, isFooterTextInView] = useInView({ threshold: 0.8, rootMargin: '0px 0px -20px 0px' });

  // Suggestion: Populate this with your actual areas of expertise, skills, or technologies
  const expertiseAreas = [
    {
      title: 'Frontend Development',
      description: 'Building responsive UIs with React, TypeScript, & Tailwind CSS.',
      icon: <FaReact /> 
    },
    {
      title: 'Backend Development',
      description: 'Crafting robust APIs with Node.js, Python, & various databases.',
      icon: <FaNodeJs />
    },
    {
      title: 'iOS Development',
      description: 'Creating engaging iOS apps using Swift.',
      icon: <FaApple />
    },
    {
      title: 'Machine Learning',
      description: 'Applying ML for data insights.',
      icon: <FaPython />
    }
  ];

  return (
    <section id="expertise" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className={`text-4xl font-bold text-center mb-12 uppercase tracking-wider transition-all duration-700 ease-out 
                      ${isTitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((item, index) => (
            <ExpertiseItem 
              key={item.title} 
              title={item.title} 
              description={item.description} 
              icon={item.icon}
            />
          ))}
        </div>
        <p 
          ref={footerTextRef}
          className={`text-center mt-12 text-gray-400 transition-all duration-700 ease-out delay-300 
                      ${isFooterTextInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Continuously learning and expanding my technical skillset.
        </p>
      </div>
    </section>
  );
};

export default Expertise; 