import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectData'; // We'll use this to fetch project details

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div className="container mx-auto px-4 py-12 text-center text-red-500">Project not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">{project.title}</h1>
        {project.hackathonWin && (
          <p className="text-lg text-green-600 font-semibold mb-2">{project.hackathonWin}</p>
        )}
        <p className="text-md text-gray-500 mb-6">{project.date}</p>
        
        <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p>{project.description}</p>
        </div>

        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.technologiesUsed && project.technologiesUsed.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Technologies Used</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {project.technologiesUsed.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}

        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Achievements</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {project.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        {project.impact && project.impact !== 'N/A' && (
           <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Impact</h2>
              <p className="text-gray-600">{project.impact}</p>
          </div>
        )}

        {project.skills && project.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.githubUrl && (
            <div className="mb-8">
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-150 ease-in-out"
                >
                    View on GitHub &rarr;
                </a>
            </div>
        )}

        <div className="mt-12">
          <Link to="/" className="text-blue-600 hover:text-blue-800 hover:underline">
            &larr; Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage; 