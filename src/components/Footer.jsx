import React from "react";
import { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";





function Footer() {



  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4 ">
            <a href="https://www.facebook.com/profile.php?id=100012280126446"> <FaFacebook className="text-blue-500"  size={24} /></a> 
          <a href="">    <FaTwitter className="text-blue-400"  size={24} /></a> 
          <a href="https://www.instagram.com/vivekchoffical/">   <FaInstagram className="text-pink-600" size={24} /></a> 
           <a href="https://www.linkedin.com/in/vivek-chauhan-6a84111b2/">  <FaLinkedinIn className="text-blue-400" size={24} /></a> 
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Vivek Chauhan</p>
            </div>
          </div>
        </div>
        
      </footer>
    </>
  );
}

export default Footer;
