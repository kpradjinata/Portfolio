import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder Icon Component
const PlaceholderIcon = () => (
  <svg 
    className="w-16 h-16 text-gray-400 mb-4" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    strokeWidth="2" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

const ProjectCard = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <Link 
      to={`/project/${project.id}`} 
      className="block border rounded-lg p-6 shadow-lg bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        {/* You can replace PlaceholderIcon with an actual image or specific icon later */}
        {/* e.g., <img src={project.iconUrl} alt={project.title} className="w-16 h-16 mb-4 rounded-full" /> */}
        <PlaceholderIcon />
        <h3 className="text-xl font-semibold mb-1 text-gray-800">{project.title}</h3>
        <p className="text-sm text-gray-500">{project.date}</p>
        {project.hackathonWin && (
          <p className="text-xs text-green-600 font-medium mt-1">{project.hackathonWin}</p>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard; 