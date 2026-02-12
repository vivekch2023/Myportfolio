import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaEnvelope,
  FaLaptopCode,
  FaBrain,
  FaDatabase,
  FaChalkboardTeacher,
  FaGlobe,
} from "react-icons/fa";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/apjmrzqa", data);
      toast.success("Thank you! I will connect with you soon.");
      reset();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-gray-100 flex flex-col lg:flex-row mt-20">

      {/* ================= LEFT PANEL ================= */}
      <div className="lg:w-1/3 bg-white shadow-2xl p-10 lg:sticky lg:top-0 h-fit lg:h-screen flex flex-col justify-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaUserTie className="text-5xl text-indigo-600 mb-6" />

          <h1 className="text-3xl font-bold mb-2">
            Vivek Chauhan
          </h1>

          <p className="text-indigo-600 font-semibold mb-4">
            Assistant Professor & HOD (BCA)
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
            I am actively involved in teaching, mentoring, and academic leadership.
            Alongside my academic career, I also work as an independent
            freelance professional in multiple technical domains.
          </p>

          {/* MULTI FIELD EXPERTISE */}
          <div className="space-y-3 text-gray-700 text-sm">

            <div className="flex items-center gap-3">
              <FaChalkboardTeacher className="text-indigo-600" />
              Academic Mentor & Research Guide
            </div>

            <div className="flex items-center gap-3">
              <FaLaptopCode className="text-indigo-600" />
              Web Developer (Frontend & Backend)
            </div>

            <div className="flex items-center gap-3">
              <FaBrain className="text-indigo-600" />
              AI / Machine Learning Solutions
            </div>

            <div className="flex items-center gap-3">
              <FaDatabase className="text-indigo-600" />
              Data Science & Analytics Projects
            </div>

            <div className="flex items-center gap-3">
              <FaGlobe className="text-indigo-600" />
              Freelance Technical Consultant
            </div>

          </div>
        </motion.div>
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="lg:w-2/3 px-6 md:px-16 py-16 space-y-20">

        {/* TEACHER + FREELANCER MESSAGE */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Academic & Professional Services
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            As an Assistant Professor & Head of Department, my primary focus
            is on quality education, research orientation, and student
            development.  
            <br /><br />
            However, beyond academics, I also collaborate on professional
            projects in Web Development, Artificial Intelligence, Machine
            Learning, and Data Science.
            <br /><br />
            If you are a student, startup, organization, or business looking
            for:
          </p>

          <ul className="mt-6 space-y-3 text-gray-700 list-disc pl-6">
            <li>Website or Web Application Development</li>
            <li>AI / ML based Project Implementation</li>
            <li>Data Analysis or Predictive Modeling</li>
            <li>Major / Minor Academic Projects</li>
            <li>Technical Consultation or Freelance Collaboration</li>
          </ul>

          <p className="mt-6 text-gray-700 font-medium">
            You are welcome to connect with me for professional discussion and collaboration.
          </p>
        </motion.section>

        {/* CONTACT FORM */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FaEnvelope className="text-indigo-600" />
            Contact for Collaboration
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 shadow-2xl rounded-2xl space-y-6"
          >
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Full Name"
              className="w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none py-3 transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter valid email",
                },
              })}
              placeholder="Email Address"
              className="w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none py-3 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <textarea
              {...register("message", { required: "Message is required" })}
              rows="4"
              placeholder="Describe your project / requirement"
              className="w-full border-b-2 border-gray-300 focus:border-indigo-600 outline-none py-3 transition resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Send Inquiry
            </motion.button>
          </form>
        </motion.section>

      </div>
    </div>
  );
}

export default Contact;
