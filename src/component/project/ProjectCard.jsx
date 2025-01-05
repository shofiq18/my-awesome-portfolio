import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="group relative w-full max-w-sm mx-auto">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleModalToggle}
            className="text-white text-lg font-semibold"
          >
            View More / Details
          </button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
      {isModalOpen && (
        <ProjectModal project={project} onClose={handleModalToggle} />
      )}
    </div>
  );
};

export default ProjectCard;
