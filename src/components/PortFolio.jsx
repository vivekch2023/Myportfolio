import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import portfolio from "../../public/portfolio.png";
import urlShort from "../../public/urlShort.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import python from "../../public/python.webp";

function PortFolio() {

  const cardItem = [
    {
      id: 1,
      logo: portfolio,
      name: "Personal Portfolio",
      category: "Web Development",
      info: "Modern animated portfolio built with React, Tailwind & Framer Motion.",
      github: "https://github.com/vivekch2023/My-profile",
      demo: "#",
    },
    {
      id: 2,
      logo: urlShort,
      name: "URL Shortener",
      category: "Backend Project",
      info: "NodeJS & Express based scalable URL shortener with MongoDB.",
      github: "https://github.com/vivekch2023/UrlShortner",
      demo: "#",
    },
    {
      id: 3,
      logo: python,
      name: "AI Chatbot",
      category: "AI / ML",
      info: "NLP based intelligent chatbot using Python, TensorFlow & NLP models.",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      logo: python,
      name: "Stock Price Predictor",
      category: "Data Science",
      info: "LSTM based stock prediction model using Pandas, NumPy & Matplotlib.",
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      logo: reactjs,
      name: "MERN Blog App",
      category: "Full Stack",
      info: "Complete MERN blog platform with authentication & CRUD.",
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      logo: nodejs,
      name: "AI Resume Analyzer",
      category: "AI / ML",
      info: "Machine Learning model that analyzes resumes using NLP & Scikit-learn.",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="relative max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 blur-3xl opacity-40"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">Projects</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Web Development • AI/ML • Data Science • Freelance Work
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {cardItem.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white/60 backdrop-blur-lg border border-white/30 rounded-3xl shadow-xl p-8 overflow-hidden group"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-purple-500 opacity-0 group-hover:opacity-10 transition duration-500 rounded-3xl"></div>

            {/* Logo */}
            <img
              src={item.logo}
              alt={item.name}
              className="w-20 h-20 mx-auto mb-5 rounded-full border-4 border-purple-500 p-2"
            />

            {/* Category */}
            <div className="text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full inline-block mb-3">
              {item.category}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {item.name}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-6">
              {item.info}
            </p>

            {/* Buttons */}
            <div className="flex justify-center space-x-4">
              <a href={item.github} target="_blank" rel="noreferrer">
                <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-black transition">
                  <FaGithub />
                  <span>Code</span>
                </button>
              </a>

              <a href={item.demo} target="_blank" rel="noreferrer">
                <button className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full hover:scale-105 transition">
                  <FaExternalLinkAlt />
                  <span>Live</span>
                </button>
              </a>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default PortFolio;
