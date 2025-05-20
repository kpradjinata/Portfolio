import React from 'react';
import { projects } from '../data/projectData';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

const HighlightedProjects = () => {
  const highlighted = Array.isArray(projects) ? projects.slice(0, 3) : [];

  return (
    <section id="highlighted-projects" className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left md:flex items-center justify-between mb-16">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6 uppercase tracking-wider">Spotlight</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                    Discover a curated selection of my work, highlighting key achievements and innovative solutions developed across various projects.
                </p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
                <img 
                    src="https://via.placeholder.com/450x300?text=Project+Highlights+Banner" 
                    alt="Project Highlights" 
                    className="rounded-lg shadow-2xl max-w-md w-full"
                />
            </div>
        </div>

        {highlighted.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {highlighted.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 mb-16">No highlighted projects to display at the moment.</p>
        )}
        
        {Array.isArray(projects) && projects.length > highlighted.length && (
          <div className="text-center">
            <Link 
              to="/#all-projects-section" 
              className="inline-block bg-blue-500 text-white font-semibold px-10 py-4 rounded-lg hover:bg-blue-600 transition duration-150 ease-in-out text-lg shadow-md hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('all-projects-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HighlightedProjects; 