import React from 'react';
import { projects } from '../data/projectData';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';
import projectHighlightImage from '../assets/images/project-highlight.jpg';

const HighlightedProjects = () => {
  const highlighted = Array.isArray(projects) ? projects.slice(0, 3) : [];

  const [headerRef, isHeaderInView] = useInView({ threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
  const [imageRef, isImageInView] = useInView({ threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
  const [buttonRef, isButtonInView] = useInView({ threshold: 0.8, rootMargin: '0px 0px -20px 0px' });

  return (
    <section id="highlighted-projects" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left md:flex items-center justify-between mb-16">
            <div ref={headerRef} className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 
                  className={`text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6 uppercase tracking-wider transition-all duration-700 ease-out 
                              ${isHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                >
                  Spotlight
                </h2>
                <p 
                  className={`text-xl text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-700 ease-out delay-200 
                              ${isHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                >
                    Discover a curated selection of my work, highlighting key achievements across various projects.
                </p>
            </div>
            <div ref={imageRef} className={`md:w-1/2 flex justify-center md:justify-end transition-all duration-700 ease-out delay-300 transform 
                                ${isImageInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                {/* Image "project-highlight.jpg" sourced from Vecteezy.com under Free License. 
                    Visible attribution on the website (e.g., in footer) is typically required by Vecteezy's Free License. */}
                <img 
                    src={projectHighlightImage}
                    alt="Project Highlights Banner"
                    className="rounded-lg max-w-md w-full"
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
          <p className="text-center text-gray-500 dark:text-gray-400 mb-16">No highlighted projects to display at the moment.</p>
        )}
        
        {Array.isArray(projects) && projects.length > highlighted.length && (
          <div ref={buttonRef} className="text-center">
            <Link 
              to="/#all-projects-section" 
              className={`inline-block bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-lg transition-all duration-500 ease-in-out text-lg shadow-md hover:shadow-lg transform hover:scale-105
                          ${isButtonInView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-2'}`}
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