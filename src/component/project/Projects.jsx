import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    name: 'Adventure Mountain',
    image: 'https://i.ibb.co/1JvmLjY/adventure-mountain.jpg',
    description: 'An online platform for adventure enthusiasts.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://adventure-mountain-6182e.web.app/',
    githubLink: 'https://github.com/programming-hero-web-course1/b10-a9-authentication-shofiq18',
    details: 'This project offers a comprehensive guide to mountain adventures, including trail information, gear recommendations, and community forums.',
    challenges: 'Implementing real-time updates for trail conditions and integrating user-generated content posed significant challenges.',
    improvements: 'Plans to enhance mobile responsiveness and add a recommendation system based on user preferences.',
  },
  {
    name: 'Movie Portal',
    image: 'https://i.ibb.co/bHTLgBp/movie-portal.jpg',
    description: 'A platform to discover and watch movies and TV shows.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://movie-portal-4ef85.web.app/',
    githubLink: 'https://github.com/programming-hero-web-course2/b10-a10-client-side-shofiq18',
    details: 'This platform allows users to stream movies and TV shows, with features like personalized recommendations and watchlists.',
    challenges: 'Integrating multiple streaming APIs and ensuring seamless playback across devices were key challenges.',
    improvements: 'Plans to implement a user rating system and enhance the recommendation algorithm.',
  },
  {
    name: 'Food Sharing Website',
    image: 'https://i.ibb.co/H7tBgkf/foodbridge.jpg',
    description: 'A community-driven site for sharing recipes and cooking tips.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://food-bd-31846.web.app/login',
    githubLink: 'https://github.com/programming-hero-web-course2/b10a11-client-side-shofiq18',
    details: 'This website enables users to share recipes, cooking tips, and meal plans, fostering a community of food enthusiasts.',
    challenges: 'Managing large media files and ensuring a smooth user experience across different devices were significant challenges.',
    improvements: 'Plans to add a meal planning feature and integrate a shopping list generator.',
  }
  // Add more projects here
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-8 md:px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => handleCardClick(project)}
            >
              <div className="card  bg-gray-950  border-gray-800 shadow-[0px_0px_px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
                <figure>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-xl font-bold">{project.name}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-white">
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          key={selectedProject.name}
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}

    </div>
  );
};

export default Projects;
