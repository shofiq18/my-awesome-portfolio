import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      exam: "Bachelor of Social Science (BSS)",
      major: "Political Science",
      institute: "Govt Rajendra College, Faridpur",
      result: "CGPA: 2.68 out of 4",
      year: "2022",
      duration: "4 years",
      achievement: "National University",
    },
    {
      exam: "HSC",
      major: "Humanities",
      institute: "S M A Ahad College",
      result: "CGPA: 3.42 out of 5",
      year: "2015",
      duration: "2 years",
      achievement: "S M A Ahad College",
    },
    {
      exam: "SSC",
      major: "Humanities",
      institute: "Zhama High School",
      result: "CGPA: 4.81 out of 5",
      year: "2013",
      duration: "2 years",
      achievement: "Zhama Secondary School",
    },
  ];

  return (
    <div id="education" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-8 md:px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-200">
          Educational Qualification
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="card bg-gray-950 text-white rounded-none p-6 border border-gray-800 shadow-[0px_0px_px_10px_rgba(0,0,0,0.3)] shadow-blue-500"
              whileHover={{ y: -10 }} // Moves the card up by 10px on hover
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-xl text-blue-500 font-semibold mb-2">
                {edu.exam}
              </h3>
              <p className="mb-1">
                <strong>Major:</strong> {edu.major}
              </p>
              <p className="mb-1">
                <strong>Institute:</strong> {edu.institute}
              </p>
              <p className="mb-1">
                <strong>Result:</strong> {edu.result}
              </p>
              <p className="mb-1">
                <strong>Year:</strong> {edu.year}
              </p>
              <p className="mb-1">
                <strong>Duration:</strong> {edu.duration}
              </p>
              <p>
                <strong>Achievement:</strong> {edu.achievement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
