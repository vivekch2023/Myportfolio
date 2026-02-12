import pic from "../../public/pic.jpeg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

// import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import {
  SiMongodb,
  SiExpress,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

// import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbChartBar } from "react-icons/tb";

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          {/* LEFT SECTION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1"
          >
            <span className="text-xl">Welcome In My Feed</span>

            <div className="flex space-x-1 text-2xl md:text-2xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={[
                  "AI/ML Engineer",
                  "Assistant Professor",
                  "MERN Developer",
                ]}
                typeSpeed={60}
                backSpeed={60}
                loop={true}
              />
            </div>

            <p className="text-sm md:text-md text-justify">
              Hello! I am <b>Vivek Chauhan</b>, an MCA postgraduate, AI/ML engineer,
              and Data Scientist, currently working as
              <b> Assistant Professor & HOD in BCA Department</b> at
              <b> Somany Institute of Technology & Management, Rewari</b>. I am
              passionate about teaching, software development, Artificial
              Intelligence and Machine Learning.
            </p>

            {/* SOCIAL + TECH */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 pt-5">
              <div className="space-y-2">
                <h1 className="font-bold text-center text-green-600">
                  Available on
                </h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://facebook.com" target="_blank">
                      <FaSquareFacebook className="text-2xl hover:scale-125 duration-200 text-blue-500" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank">
                      <FaLinkedin className="text-2xl hover:scale-125 duration-200 text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com" target="_blank">
                      <IoLogoYoutube className="text-2xl hover:scale-125 duration-200 text-red-600" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me" target="_blank">
                      <FaTelegram className="text-2xl hover:scale-125 duration-200 text-blue-400" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold text-center text-green-600">
                  Currently working on
                </h1>
                <div className="flex space-x-5">
                  {/* AI / ML Stack */}
                  <SiNumpy className="hover:scale-125 hover:-rotate-12 transition-all duration-300 text-blue-600 text-2xl" />

                  <SiPandas className="hover:scale-125 hover:rotate-12 transition-all duration-300 text-indigo-600 text-2xl" />

                  <SiScikitlearn className="hover:scale-125 hover:-rotate-12 transition-all duration-300 text-orange-500 text-2xl" />

                  <SiTensorflow className="hover:scale-125 hover:rotate-12 transition-all duration-300 text-orange-600 text-2xl" />

                  <SiPytorch className="hover:scale-125 hover:-rotate-12 transition-all duration-300 text-red-500 text-2xl" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 md:ml-48 md:mt-5 mt-8 order-1"
          >
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] shadow-2xl hover:scale-105 duration-300"
              alt="profile"
            />
          </motion.div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            {
              n: "1+",
              t: "YEARS TEACHING EXPERIENCE",
            },
            {
              n: "200+",
              t: "STUDENTS MENTORED",
            },
            {
              n: "10+",
              t: "AI & WEB PROJECTS",
            },
            {
              n: "6+",
              t: "SUBJECTS TAUGHT",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl shadow-lg p-6"
            >
              <h1 className="text-4xl font-bold text-red-700">{item.n}</h1>
              <p className="font-semibold mt-2">{item.t}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* EXPERTISE */}
      <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">
        My Expertise
      </h2>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "AI / Machine Learning",
              desc: "Deep Learning, NLP, Computer Vision, GANs",
            },
            {
              title: "Web Development",
              desc: "React, Node, Express, MongoDB",
            },
            {
              title: "Data Science",
              desc: "Python, Pandas, Visualization",
            },
            {
              title: "Teaching",
              desc: "Mentoring, Curriculum Design",
            },
          ].map((e, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-blue-50 rounded-xl shadow p-6"
            >
              <h3 className="text-xl font-bold text-blue-700">{e.title}</h3>
              <p className="text-sm mt-2">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">
        Education & Role
      </h2>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-50 p-6 rounded-xl shadow"
          >
            <h3 className="text-xl font-bold text-indigo-700">Education</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>🎓 MCA – Master of Computer Application</li>
              <li>🎓 B.Sc – Computer Science</li>
              <li>📘 Specialized in AI / ML</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-50 p-6 rounded-xl shadow"
          >
            <h3 className="text-xl font-bold text-indigo-700">Current Role</h3>
            <ul className="mt-3 text-sm space-y-2">
              <li>👨‍🏫 Assistant Professor & HOD – BCA</li>
              <li>🏫 Somany Institute of Technology</li>
              <li>💻 Mentor for AI Projects</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
