import image from '../assets/istockphoto-1301038922-612x612.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-900 z-50 text-gray-300">
      <div className="max-w-7xl mx-auto px-8 md:px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-12">
          {/* Image Section */}
          <div className="flex-shrink-0 relative">
            <div
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-lg"
              style={{
                boxShadow: '0 0 15px 5px rgba(30, 144, 255, 0.8), 0 0 50px rgba(30, 144, 255, 0.6)',
              }}
            >
              <img
                src={image}
                alt="Profile picture of Md. Shofiqul Islam"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <motion.div
            className="p-5 md:p-10 text-lg text-justify max-w-2xl bg-gray-950 rounded-md shadow-[0px_0px_10px_10px_rgba(0,0,0,0.3)] shadow-blue-500"
            whileHover={{ y: -10 }} // Moves the card up by 10px on hover
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            aria-label="About Me Content"
          >
            <p>
              Hello, my name is{' '}
              <span className="text-primary font-semibold">
                Md. Shofiqul Islam
              </span>
              . I am a passionate and dedicated frontend developer with a strong
              focus on building dynamic and user-friendly web applications.
            </p>
            <p className="mt-4">
              My journey in programming started with a curiosity for solving
              problems and creating impactful digital solutions. Over time, I have
              honed my skills in modern frontend frameworks like React and backend
              technologies such as Node.js, Express.js, and MongoDB.
            </p>
            <p className="mt-4">
              Outside of coding, I love exploring new technologies, staying updated
              on web development trends, and sharing my knowledge with the community.
              In my free time, I enjoy photography, playing football, and traveling to
              discover new cultures.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
