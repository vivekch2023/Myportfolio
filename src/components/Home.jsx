import React from "react";

//import pic from "../../public/photo.avif";
import pic from "../../public/pic.jpeg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={80}
                backSpeed={80}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            Hello! I am Vivek Chauhan, a 2nd year student pursuing 
            MCA(Master Of Computer Application) at BBDU 
            (Babu Banarsi Das University Lucknow ). I am passionate
             about Development, and I believe in hard work to acheive the goals
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center text-green-600">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100012280126446" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer text-blue-500" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/vivek-chauhan-6a84111b2/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer text-blue-500" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCJcdYwjaeC7ITnTbriy54Ug" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer text-red-500" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/mcaToDevelopment" target="_blank" >
                      <FaTelegram className="text-2xl cursor-pointer text-blue-500 " />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center text-green-600">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer text-green-500" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer text-blue-500" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer text-blue-500" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer text-green-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-5 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
