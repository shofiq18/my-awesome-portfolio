import { FaGithub, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Download } from "lucide-react";
import image from "../assets/WhatsApp Image 2025-01-02 at 00.17.01_66d29ab0.jpg";
import Reveal from "../animation/Reveal";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gray-950 text-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* Add spacing to avoid overlap with the sticky navbar */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-48 items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
        <Reveal>
          <div className="text-start md:space-y-6 px-4">
            <h1 className="md:text-6xl text-4xl font-bold mb-4">
              Hi, I'm <p className="text-blue-400">Md. Shofiqul Islam</p>
            </h1>
            <p className="md:text-2xl text-lg mb-3">Full Stack Developer</p>
            <p className="lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300">
              Passionate about creating beautiful and functional web applications
              that solve real-world problems. Specializing in modern web technologies
              and user-centric design.
            </p>
            <button className="px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600">
              <Download className="w-5 h-5" /> Download CV
            </button>

            <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
              <a href="https://github.com/shofiq18" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-primary" />
              </a>
              <a href="https://www.facebook.com/mdshafiqulislam.shafiq.9659" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-primary" />
              </a>
              <a href="mailto:shafiqulislam25021998@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="text-2xl hover:text-primary" />
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-primary" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Image Section */}
        <div className="relative md:pr-8 group">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={image}
            alt=""
            className="rounded-full border border-blue-600 md:w-[400px] w-[250px] shadow-[0px_0px_10px_10px_rgba(0,0,0,0.3)] shadow-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;