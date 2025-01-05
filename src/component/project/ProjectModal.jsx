import React from "react";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-950 text-white p-6 rounded-lg w-72 sm:w-96 md:w-[450px] lg:w-[500px] max-h-[80vh] sm:max-h-[600px] md:max-h-[600px] lg:max-h-[700px] relative border border-gray-800 shadow-[0px_0px_10px_10px_rgba(0,0,0,0.3)] shadow-blue-500 overflow-y-auto sm:overflow-y-auto md:overflow-y-hidden lg:overflow-y-hidden">
        <h4 className="text-xl sm:text-2xl font-semibold">{project.name}</h4>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-20 sm:h-48 object-cover mt-4 rounded-lg"
        />
        <p className="mt-2 text-xs sm:text-sm">{project.details}</p>
        <p className="mt-2 text-xs sm:text-sm font-semibold">Main Tech Stack:</p>
        <ul className="list-disc pl-5 text-xs sm:text-sm">
          {project.stack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <p className="mt-2 text-xs sm:text-sm font-semibold">Challenges Faced:</p>
        <p className="text-xs sm:text-sm">{project.challenges}</p>
        <p className="mt-2 text-xs sm:text-sm font-semibold">Future Improvements:</p>
        <p className="text-xs sm:text-sm">{project.improvements}</p>
        <div className="mt-4 flex justify-between">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-xs sm:text-sm"
          >
            Live Site
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-xs sm:text-sm"
          >
            GitHub
          </a>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-full text-xs sm:text-sm hover:opacity-90"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
