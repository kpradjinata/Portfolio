import React from 'react';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';

// Placeholder Icon Component
const PlaceholderIcon = () => (
  <svg 
    className="w-16 h-16 text-gray-500 dark:text-gray-400 mb-4"
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
  const [cardRef, isCardInView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  const [hovered, setHovered] = React.useState(false);

  if (!project) {
    return null;
  }

  return (
    <Link 
      ref={cardRef}
      to={`/project/${project.id}`} 
      className={`group block border rounded-lg p-6 shadow-lg 
                 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 
                 border-gray-200 dark:border-gray-700 
                 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-opacity-50 
                 transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105
                 ${isCardInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col items-center text-center">
        {/* You can replace PlaceholderIcon with an actual image or specific icon later */}
        {/* e.g., <img src={project.iconUrl} alt={project.title} className="w-16 h-16 mb-4 rounded-full" loading="lazy" /> */}
        <PlaceholderIcon />
        <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{project.date}</p>
        {project.hackathonWin && (
          <p className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">{project.hackathonWin}</p>
        )}
        {/* Reveal summary or tech stack on hover */}
        <div className={`transition-all duration-500 ease-in-out mt-4 w-full ${hovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          {project.summary && <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{project.summary}</p>}
          {project.techStack && Array.isArray(project.techStack) && (
            <div className="flex flex-wrap justify-center gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-semibold">{tech}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard; 