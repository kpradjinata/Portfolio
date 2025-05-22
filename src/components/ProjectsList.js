import React from 'react';
import { projects } from '../data/projectData';
import ProjectCard from './ProjectCard';
import useInView from '../hooks/useInView';

const ProjectsList = () => {
  const [titleRef, isTitleInView] = useInView({ threshold: 0.5, rootMargin: '0px 0px -50px 0px' });

  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-600 dark:text-gray-400">No projects to display.</p>;
  }

  return (
    <section id="all-projects-section" className="py-12 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef}
          className={`text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white transition-all duration-700 ease-out 
                      ${isTitleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          All Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList; 