import React from 'react';
import { projects } from '../data/projectData';
import ProjectCard from './ProjectCard';

const ProjectsList = () => {
  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-500">No projects to display.</p>;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Projects</h2>
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