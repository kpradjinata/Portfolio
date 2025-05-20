import React from 'react';
// import './Showcase.css'; // Removed

// Consider importing actual icons from a library like react-icons
// import { FaCode, FaDesktop, FaApple } from 'react-icons/fa';

const ShowcaseItem = ({ title, description, icon }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transform hover:scale-105 transition-transform duration-300">
    {icon && <div className="text-blue-400 text-4xl mb-4">{icon}</div>}
    <h3 className="text-2xl font-semibold text-blue-400 mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

const Showcase = () => {
  const items = [
    {
      title: 'Software',
      description: 'Dedicated to software development with a focus on creating efficient, scalable, and innovative software solutions.',
      // icon: <FaCode /> // Example if using react-icons
      icon: 'S' // Placeholder text icon
    },
    {
      title: 'Frontend',
      description: 'Enthusiastic about UI/UX, with thousands of hours of development experience in HTML, CSS, JavaScript, and React frameworks.',
      // icon: <FaDesktop />
      icon: 'F' // Placeholder text icon
    },
    {
      title: 'iOS',
      description: 'Expert in iOS development, adept at creating intuitive and sophisticated applications that fully leverage the capabilities of Apple\'s platform.',
      // icon: <FaApple />
      icon: 'i' // Placeholder text icon
    }
  ];

  return (
    <section id="showcase" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wider">Showcase</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map(item => (
            <ShowcaseItem key={item.title} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase; 