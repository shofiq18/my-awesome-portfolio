import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const projectsData = [
    {
    name: 'TestyRide -Food Delivery website',
    image: 'https://i.ibb.co/sdWkpgLf/Screenshot-4.png',
    description: 'A food delivery website where users can order food from their favorite restaurants.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express', 'Firebase', 'moongoose', 'tan stack'],
    liveLink: 'https://tastyride-cd1a3.web.app/',
    githubLink: 'https://github.com/safin33221/TastyRide-Client-Side',
    details: ' This website for food delivery allows users to order food from various restaurants, track their orders, and manage their profiles.',
    challenges: 'Managing large media files and ensuring a smooth user experience across different devices were significant challenges.',
    improvements: 'adding rider chat feature and integrating a shopping list generator.',
  },
    
    {
    name: 'Piece Work - Micro Job Platform',
    image: 'https://i.ibb.co/4g50CwZr/Screenshot-8.png',
    description: 'A micro job platform connecting freelancers with clients for small tasks.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'stripe', 'Express', 'Firebase'],
    liveLink: 'https://piece-work-e8024.web.app/',
    githubLink: 'https://github.com/shofiq18/piece-work-client',
    details: 'This platform connects freelancers with clients for small tasks, allowing users to post jobs, apply for them, and manage their profiles.',
    challenges: 'Ensuring secure transactions and managing user data privacy were significant challenges.',
    improvements: 'Plans to add a review system for freelancers and clients, and enhance the user interface.',
  },
  
    {
    name: 'Food Sharing Website',
    image: 'https://i.ibb.co/Z1d27ZQL/Screenshot-7.png',
    description: 'A food sharing platform where users can donate food, share recipes, and connect with others in the community.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://food-bd-31846.web.app/',
    githubLink: 'https://github.com/programming-hero-web-course2/b10a11-client-side-shofiq18',
    details: 'This website enables users to share recipes, cooking tips, and meal plans, fostering a community of food enthusiasts.',
    challenges: 'Managing large media files and ensuring a smooth user experience across different devices were significant challenges.',
    improvements: 'Plans to add a meal planning feature and integrate a shopping list generator.',
  },
  

  {
    name: 'Movie Portal',
    image: 'https://i.ibb.co/bHTLgBp/movie-portal.jpg',
    description: 'A platform to discover and watch movies and TV shows where users can create watchlists and get recommendations.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://movie-portal-4ef85.web.app/',
    githubLink: 'https://github.com/programming-hero-web-course2/b10-a10-client-side-shofiq18',
    details: 'This platform allows users to stream movies and TV shows, with features like personalized recommendations and watchlists.',
    challenges: 'Integrating multiple streaming APIs and ensuring seamless playback across devices were key challenges.',
    improvements: 'Plans to implement a user rating system and enhance the recommendation algorithm.',
  },
  {
    name: 'Fresh Harvests - Organic Farming',
    image: 'https://i.ibb.co/20gbbJk4/Screenshot-13.png',
    description: 'A platform for organic farmers to connect, share resources, and promote their products. Users can explore organic farming practices and find local produce.',
    stack: ['NextJs', 'Node.js', 'MongoDB', 'Tailwind CSS', 'RTK Query', 'Express',],
    liveLink: 'https://fresh-harvests-sable.vercel.app/',
    githubLink: 'https://github.com/shofiq18/fresh-harvests',
    details: 'Fresh Harvests connects organic farmers with consumers, providing a platform to share resources, promote products, and foster community engagement.',
    challenges: 'Integrating RTK Query for real-time updates and managing user-generated content were significant challenges.',
    improvements: 'Plans to enhance the user interface and add features for tracking organic farming practices.',
  },
  {
    name: 'Adventure Mountain',
    image: 'https://i.ibb.co/1JvmLjY/adventure-mountain.jpg',
    description: 'An online platform for adventure enthusiasts and outdoor lovers where they can find and share information about hiking trails, gear recommendations, and outdoor events.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://adventure-mountain-6182e.web.app/',
    githubLink: 'https://github.com/programming-hero-web-course1/b10-a9-authentication-shofiq18',
    details: 'This project offers a comprehensive guide to mountain adventures, including trail information, gear recommendations, and community forums.',
    challenges: 'Implementing real-time updates for trail conditions and integrating user-generated content posed significant challenges.',
    improvements: 'Plans to enhance mobile responsiveness and add a recommendation system based on user preferences.',
  }, 
   {
    name: 'BPL Dream 11 - Cricket Fantasy League',
    image: 'https://i.ibb.co/HTP6WBzd/Screenshot-6.png',
    description: 'A fantasy cricket league platform for fans to create and manage their teams where they can join leagues and compete with others.',
    stack: ['React', 'Tailwind CSS', 'firebase', ],
    liveLink: 'https://splendid-queen.surge.sh',
    githubLink: 'https://github.com/shofiq18/bpl-dream-11',
    details: 'This website enables users to create their fantasy cricket teams, join leagues, and compete with others.',
    challenges: 'Implementing real-time scoring and ensuring fair play were significant challenges.',
    improvements: 'Plans to add more player statistics and enhance the user interface.',
  },
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
        <h2 className="text-4xl font-bold text-center mb-20">Projects</h2>
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
                    className="w-full h-56 object-cover"
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
