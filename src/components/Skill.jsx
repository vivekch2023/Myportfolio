import React from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaRobot,
  FaChartLine,
  FaProjectDiagram,
  FaTools,
  FaLayerGroup,
  FaCloud,
  FaCogs
} from "react-icons/fa";

// Local assets
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import Nodejs from "../../public/Nodejs.png";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import tailwind from "../../public/telwind.png";
import mongodb from "../../public/mongodb.jpg";

function Skill() {

  const left = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 }
  };

  const right = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  /**************** SKILL DATA ****************/

  const coreStack = [
    {
      year: "Frontend",
      title: "Web Core Technologies",
      place: "UI Development & Design Thinking",
      desc: "Expertise in HTML5 semantic structure, CSS3 animations, modern JavaScript ES6+, Tailwind utility design and React component architecture. Focus on performance, accessibility, responsive layouts and user experience engineering.",
      side: "left",
      icon: <FaCode />,
      logos: [html, css, javascript, tailwind, reactjs]
    },
    {
      year: "Backend",
      title: "Server Side Engineering",
      place: "API, Security & Scalability",
      desc: "Building secure NodeJS services, Express middleware, MongoDB schema design, authentication, role based access, error handling and scalable REST architecture following industry patterns.",
      side: "right",
      icon: <FaDatabase />,
      logos: [Nodejs, express, mongodb, java]
    }
  ];

  const aiStack = [
    {
      year: "AI / ML",
      title: "Machine Learning Engineering",
      place: "Data to Intelligence",
      desc: "End-to-end ML pipeline creation including data preprocessing, feature engineering, model selection, cross validation, experiment tracking and performance optimization for real world problems.",
      side: "left",
      icon: <FaBrain />,
      logos: [
        "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        "https://cdn-icons-png.flaticon.com/512/2103/2103832.png"
      ]
    },
    {
      year: "Deep Tech",
      title: "Deep Learning & NLP",
      place: "Neural Systems & Vision",
      desc: "Working with TensorFlow, PyTorch, transformers, computer vision pipelines, text processing, embeddings, generative models and research paper implementation for intelligent applications.",
      side: "right",
      icon: <FaRobot />,
      logos: [
        "https://cdn-icons-png.flaticon.com/512/873/873120.png",
        "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
        "https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
      ]
    }
  ];

  const workflow = [
    {
      year: "Step 1",
      title: "Data Collection & Analysis",
      place: "Dataset Engineering",
      desc: "Gathering structured/unstructured data, scraping, cleaning, handling missing values, exploratory data analysis and visualization to understand patterns before modeling.",
      side: "left",
      icon: <FaChartLine />
    },
    {
      year: "Step 2",
      title: "Model Building & Research",
      place: "Training Phase",
      desc: "Algorithm design, neural network creation, hyper parameter tuning, ablation study, metrics evaluation and converting research ideas into code.",
      side: "right",
      icon: <FaProjectDiagram />
    },
    {
      year: "Step 3",
      title: "Deployment & MLOps",
      place: "Production",
      desc: "Creating APIs, Dockerization, cloud hosting, CI/CD pipelines, monitoring model drift and maintaining production grade AI systems.",
      side: "left",
      icon: <FaTools />
    },
    {
      year: "Step 4",
      title: "Cloud Integration",
      place: "Scalable Systems",
      desc: "Integrating AI services with cloud platforms, storage, serverless functions and distributed computing for high availability.",
      side: "right",
      icon: <FaCloud />
    }
  ];

  const extras = [
    {
      year: "Tools",
      title: "Libraries & Utilities",
      place: "Ecosystem",
      desc: "NumPy, Pandas, Matplotlib, Seaborn, OpenCV, HuggingFace, FastAPI, Git, Docker and testing frameworks for complete development lifecycle.",
      side: "left",
      icon: <FaCogs />
    }
  ];

  /**************** TIMELINE COMPONENT ****************/

  const Timeline = ({ data }) => (
    <div className="relative mb-16">

      <div className="absolute left-1/2 w-1 bg-blue-500 h-full transform -translate-x-1/2 hidden md:block"></div>

      {data.map((item, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={item.side === "left" ? left : right}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`mb-10 flex flex-col md:flex-row items-center w-full ${
            item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >

          <motion.div
            variants={fadeUp}
            className="w-full md:w-1/2 p-4"
          >
            <div className="bg-gray-50 shadow-lg rounded-xl p-6 hover:scale-105 duration-300">

              <div className="flex items-center gap-2">
                <span className="text-blue-600 text-xl">
                  {item.icon}
                </span>

                <h3 className="font-bold text-blue-700">
                  {item.year}
                </h3>
              </div>

              <h2 className="font-semibold text-lg mt-1">
                {item.title}
              </h2>

              <p className="text-sm text-gray-600">
                {item.place}
              </p>

              <p className="mt-2 leading-relaxed">
                {item.desc}
              </p>

              {item.logos && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="flex flex-wrap gap-3 mt-4"
                >
                  {item.logos.map((l, i) => (
                    <motion.img
                      whileHover={{ rotate: 6, scale: 1.1 }}
                      key={i}
                      src={l}
                      className="w-10 h-10 object-contain"
                    />
                  ))}
                </motion.div>
              )}

            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-10 h-10 rounded-full bg-blue-500 border-4 border-white z-10 flex items-center justify-center text-white text-lg"
          >
            {item.icon}
          </motion.div>

          <div className="w-full md:w-1/2"></div>

        </motion.div>
      ))}
    </div>
  );

  /**************** RETURN ****************/

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 pt-16">

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2"
      >
        <FaLayerGroup className="text-blue-600" /> Skills & AI Stack
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-10 leading-relaxed"
      >
        Detailed representation of my professional capabilities as an AI/ML Engineer,
        Full Stack Developer and Data Science enthusiast. This stack reflects practical
        industry exposure, research mindset and production oriented development approach.
      </motion.p>

      <h2 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <FaCode className="text-blue-600" /> Core Development
      </h2>
      <Timeline data={coreStack} />

      <h2 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <FaBrain className="text-blue-600" /> AI & Machine Learning
      </h2>
      <Timeline data={aiStack} />

      <h2 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <FaProjectDiagram className="text-blue-600" /> AI Workflow
      </h2>
      <Timeline data={workflow} />

      <h2 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <FaCogs className="text-blue-600" /> Tools & Ecosystem
      </h2>
      <Timeline data={extras} />

    </div>
  );
}

export default Skill;
