import { motion } from "framer-motion";

const skills = {
  Frontend: [
    { name: 'React', level: 90 },
    { name: 'Daisyui', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Framer motion', level: 80 },
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 70 },
  ],
  Tools: [
    { name: 'Git', level: 85 },
    { name: 'vercel', level: 70 },
    { name: 'Axios', level: 65 },
    { name: 'Figma', level: 75 },
  ],
};

const Skills = () => {
 {
  
 }
 
  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl  mx-auto px-8 md:px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <motion.div key={category} className="bg-gray-900 p-6 rounded-none  shadow-[0px_0px_px_10px_rgba(0,0,0,0.3)] shadow-blue-500"
            whileHover={{ y: -10 }} // Moves the card up by 10px on hover
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-blue-500">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-white">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
