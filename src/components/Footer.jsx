import React from "react";
import { motion } from "framer-motion";

// Corrected Imports
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-12 pb-6"
      >
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          {/* ===== MAIN GRID ===== */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* ABOUT */}
            <div>
              <h2 className="text-xl font-semibold mb-3">About Me</h2>
              <p className="text-sm text-gray-300">
                AI/ML Engineer & Assistant Professor passionate about teaching,
                research and modern web technologies.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a
                    href="https://github.com/vivekch2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white duration-200"
                  >
                    GitHub
                  </a>
                </li>

                <li>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="hover:text-white duration-200"
                  >
                    Resume
                  </a>
                </li>

                <li>
                  <a
                    href="https://scholar.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white duration-200"
                  >
                    Research Paper
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center gap-2">
                  <FaEnvelope /> vkwebservices@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone /> +91 9721176040
                </p>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt /> India
                </p>
              </div>
            </div>
          </div>

          {/* ===== SOCIAL ICONS ===== */}
          <div className="flex justify-center space-x-6 mt-10">
            <motion.a
              whileHover={{ scale: 1.3, rotate: 10 }}
              href="https://www.facebook.com/profile.php?id=100012280126446"
              target="_blank"
            >
              <FaFacebook className="text-blue-500" size={24} />
            </motion.a>

            <motion.a whileHover={{ scale: 1.3 }} href="#">
              <FaTwitter className="text-blue-400" size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.3 }}
              href="https://www.instagram.com/vivekchoffical/"
              target="_blank"
            >
              <FaInstagram className="text-pink-600" size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.3 }}
              href="https://www.linkedin.com/in/vivek-chauhan-6a84111b2/"
              target="_blank"
            >
              <FaLinkedinIn className="text-blue-400" size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.3 }}
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
            >
              <FaWhatsapp className="text-green-500" size={24} />
            </motion.a>
          </div>

          {/* ===== BOTTOM BAR ===== */}
          <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col items-center">
            <p className="text-sm text-gray-400">
              © {year} Vivek Chauhan. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Built with ❤️ using React & Tailwind
            </p>
          </div>
        </div>
      </motion.footer>

      {/* FLOATING WHATSAPP */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/919721176040"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg"
      >
        <FaWhatsapp size={22} />
      </motion.a>
    </>
  );
}

export default Footer;
