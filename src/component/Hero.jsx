import { FaGithub, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Download } from "lucide-react";
import image from "../assets/WhatsApp Image 2025-01-02 at 00.17.01_66d29ab0.jpg";
import Reveal from "../animation/Reveal";
import { motion } from "framer-motion";
import resume from "../assets/Resume Of Md Shofiqul Islam.pdf";

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
            <p className="md:text-2xl text-lg mb-3">Frontend Developer</p>
            <p className="lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300">
              Passionate about creating beautiful and functional web applications
              that solve real-world problems. Specializing in modern web technologies
              and user-centric design.
            </p>
            <button className="bg-blue-500 px-6 py-3 text-white rounded-md hover:bg-blue-600 flex items-center gap-2">
              <Download className="text-white" />
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Download CV
              </a>
            </button>

            {/* Social Icons */}
            <div className="flex gap-6 text-2xl transition-all mt-5 md:mt-0">
              {/* GitHub */}
              <a
                href="https://github.com/shofiq18"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <FaGithub className="text-2xl text-[#746d6d]" />
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/mdshafiqulislam.shafiq.9659"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <FaFacebook className="text-2xl text-[#1877F2]" />
              </a>
              {/* Email */}
              <a
                href="mailto:shafiqulislam25021998@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <FaEnvelope className="text-2xl text-gray-300" />
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <FaTwitter className="text-2xl text-[#1DA1F2]" />
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
