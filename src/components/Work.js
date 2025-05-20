import React from 'react';
// import './Work.css'; // Removed
import projectsData from '../data/projects.js'; // Import project data

const ProjectCard = ({ title, description, imageUrl, tags, liveLink, githubLink }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700 flex flex-col transform hover:scale-105 transition-transform duration-300">
    <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h4 className="text-2xl font-semibold text-blue-400 mb-2">{title}</h4>
      <p className="text-gray-300 leading-relaxed mb-4 flex-grow">{description}</p>
      {tags && tags.length > 0 && (
        <div className="mb-4">
          {tags.map(tag => (
            <span key={tag} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-auto pt-4 border-t border-gray-700">
        {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mr-4 font-medium">View Live</a>}
        {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium">View Code</a>}
      </div>
    </div>
  </div>
);

const Work = () => {
  return (
    <section id="work" className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center md:text-left md:flex items-center justify-between mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
                 {/* Placeholder for the work header image */}
                <img 
                    src="https://via.placeholder.com/400x250?text=Work+Showcase+Banner" 
                    alt="My Work Showcase" 
                    className="rounded-lg shadow-md mx-auto md:mx-0"
                />
            </div>
            <div className="md:w-1/2 md:pl-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">My Work</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Committed to architecting robust solutions that streamline and elevate user experiences.
                </p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map(project => (
            <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imageUrl={project.imageUrl}
                tags={project.tags}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work; 