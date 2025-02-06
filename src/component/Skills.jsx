
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", image: "https://cdn.simpleicons.org/html5/white", gradient: "from-red-500 to-orange-500", direction: "up" },
  { name: "CSS", image: "https://cdn.simpleicons.org/css3/white", gradient: "from-blue-500 to-indigo-500", direction: "down" },
  { name: "JavaScript", image: "https://cdn.simpleicons.org/javascript/black", gradient: "from-yellow-400 to-yellow-600", direction: "up" },
  { name: "Tailwind CSS", image: "https://cdn.simpleicons.org/tailwindcss/white", gradient: "from-cyan-400 to-blue-500", direction: "down" },
  { name: "React", image: "https://cdn.simpleicons.org/react/white", gradient: "from-blue-400 to-blue-600", direction: "up" },
  { name: "Node.js", image: "https://cdn.simpleicons.org/nodedotjs/white", gradient: "from-green-400 to-green-600", direction: "down" },
  { name: "Express.js", image: "https://cdn.simpleicons.org/express/white", gradient: "from-gray-700 to-black", direction: "up" },
  { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb/white", gradient: "from-green-500 to-green-700", direction: "down" },
  { name: "Figma", image: "https://cdn.simpleicons.org/figma/white", gradient: "from-purple-500 to-pink-500", direction: "up" },
  { name: "VS Code", image: "https://i.ibb.co.com/hRcPg90C/png-transparent-microsoft-visual-studio-code-alt-macos-bigsur-icon-thumbnail.png", gradient: "from-blue-600 to-blue-800", direction: "down" }, // Fixed VS Code logo
  { name: "Firebase", image: "https://cdn.simpleicons.org/firebase/white", gradient: "from-yellow-500 to-orange-500", direction: "up" },
];

const Skills = () => {
  return (
    <div id="skills" className="relative w-full overflow-hidden py-20 bg-gray-950">
      <h2 className="text-4xl font-bold text-white text-center mt-16 mb-20">Skills</h2>
      <motion.div
        className="flex space-x-28 w-max" // Increased space between logos
        animate={{ x: ["-10%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }} // Slower animation
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`w-44 h-40 flex flex-col items-center justify-center rounded-bl-3xl rounded-tr-3xl bg-gradient-to-br ${skill.gradient} shadow-md shadow-gray-800`}
            whileHover={{ scale: 1.1 }}
            animate={{ y: skill.direction === "up" ? [0, -15, 0] : [0, 15, 0] }} // Zigzag Up-Down motion
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} // Slower bounce
          >
            <img src={skill.image} alt={skill.name} className="w-20 h-20" />
            <p className="text-white font-semibold mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
