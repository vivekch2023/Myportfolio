import React from "react";
import { motion } from "framer-motion";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCertificate,
  FaRunning,
  FaBullseye,
  FaBook,
  FaInfoCircle,
  FaBriefcase,
  FaLayerGroup
} from "react-icons/fa";

function About() {

  const left = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 }
  };

  const right = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 }
  };

  // ===== DATA SECTION WISE =====

  const experience = [
    {
      year: "Oct-2025 – Present",
      title: "Assistant Professor & HOD – BCA",
      place: "Somany College",
      desc: "Teaching Programming, Web Development, mentoring students, curriculum planning and academic coordination.",
      side: "left",
      icon: <FaChalkboardTeacher />
    },
    {
      year: "Mar-2025 – Oct-2025",
      title: "Computer Tranier",
      place: "Shri Syam Infotech",
      desc: "Teaching Programming, Web Development, mentoring students,",
      side: "Right",
      icon: <FaChalkboardTeacher />
    },
  ];

  const education = [
    {
      year: "2023 - 2025",
      title: "Post Graduation – MCA",
      place: "Babu Banarasi Das University, Lucknow (226028)",
      desc: "Master of Computer Application.",
      side: "right",
      icon: <FaUserGraduate />
    },
    {
      year: "2019 - 2022",
      title: "Graduation – B.Sc",
      place: "MMM PG College, Deoria (274702)",
      desc: "Bachelor of Science.",
      side: "left",
      icon: <FaUserGraduate />
    },
    {
      year: "2017 - 2019",
      title: "Intermediate",
      place: "MMM Inter College, Deoria",
      desc: "Higher secondary education.",
      side: "right",
      icon: <FaBook />
    },
    {
      year: "2016 - 2017",
      title: "High School",
      place: "Tulshi Balika Inter College, Deoria",
      desc: "Secondary education.",
      side: "left",
      icon: <FaBook />
    },
  ];

  const courses = [
    {
      year: "2023",
      title: "ADCA – Advance Diploma in Computer Application",
      place: "Computer Education",
      desc: "MS Office, Internet, programming basics.",
      side: "right",
      icon: <FaCertificate />
    },
    {
      year: "2023",
      title: "ITI – Industrial Training Institute",
      place: "Technical Training",
      desc: "Industrial and practical skills.",
      side: "left",
      icon: <FaCertificate />
    },
    {
      year: "2019",
      title: "CCC – Course on Computer Concepts",
      place: "NIELIT",
      desc: "Fundamental IT literacy.",
      side: "right",
      icon: <FaCertificate />
    },
  ];

  const activities = [
    {
      year: "NSS",
      title: "National Service Scheme",
      place: "Extracurricular",
      desc: "Social service and leadership activities.",
      side: "left",
      icon: <FaRunning />
    },
  ];

  const mission = [
    {
      year: "Goal",
      title: "Mission Statement",
      place: "Teaching & Development",
      desc: "Empower students with technical skills and connect academics with industry.",
      side: "right",
      icon: <FaBullseye />
    },
  ];

  // ===== TIMELINE COMPONENT =====

  const Timeline = ({ data }) => (
    <div className="relative mb-16">

      <div className="absolute left-1/2 w-1 bg-green-500 h-full transform -translate-x-1/2 hidden md:block"></div>

      {data.map((item, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={item.side === "left" ? left : right}
          className={`mb-8 flex flex-col md:flex-row items-center w-full ${
            item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >

          <div className="w-full md:w-1/2 p-4">
            <div className="bg-gray-50 shadow-lg rounded p-4 hover:scale-105 duration-300">

              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">
                  {item.icon}
                </span>

                <h3 className="font-bold text-green-700">
                  {item.year}
                </h3>
              </div>

              <h2 className="font-semibold text-lg">
                {item.title}
              </h2>

              <p className="text-sm text-gray-600">
                {item.place}
              </p>

              <p className="mt-1">
                {item.desc}
              </p>

            </div>
          </div>

          <div className="w-10 h-10 rounded-full bg-green-500 border-4 border-white z-10 flex items-center justify-center text-white text-lg">
            {item.icon}
          </div>

          <div className="w-full md:w-1/2"></div>

        </motion.div>
      ))}
    </div>
  );

  // ===== RETURN =====

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 pt-16">

      {/* ========== ABOUT ME ========== */}

      <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        <FaInfoCircle className="text-green-600" /> About Me
      </h1>

    <p className="text-center mb-10 leading-relaxed">
  Hello! I am <b>Vivek Chauhan</b>, an MCA graduate, AI/ML Engineer,
              and Data Scientist, currently working as{" "}
              <b>Assistant Professor & HOD in BCA Department</b> at{" "}
              <b>Somany Institute of Technology & Management, Rewari</b>. I am
              passionate about teaching, software development, and emerging
              technologies like Artificial Intelligence, Machine Learning. I
              believe in practical learning, innovation, and continuous skill
              enhancement to achieve professional excellence. My goal is to
              guide students toward industry-ready skills, problem-solving
              ability, and strong technical foundations while contributing to
              research and modern technological development.
</p>

        

      {/* ========== SECTIONS ========== */}

      <h2 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <FaBriefcase className="text-green-600"/> Professional Experience
      </h2>
      <Timeline data={experience} />

      <h2 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <FaUserGraduate className="text-green-600"/> Education
      </h2>
      <Timeline data={education} />

      <h2 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <FaCertificate className="text-green-600"/> Additional Courses
      </h2>
      <Timeline data={courses} />

      <h2 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <FaLayerGroup className="text-green-600"/> Extracurricular Activities
      </h2>
      <Timeline data={activities} />

      <h2 className="text-2xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <FaBullseye className="text-green-600"/> Mission
      </h2>
      <Timeline data={mission} />

    </div>
  );
}

export default About;

