import { useState } from "react";
import pic from "../../public/pic.jpeg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Skill", path: "/skills" },
    { id: 4, text: "Portfolio", path: "/portfolio" },
    { id: 5, text: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex space-x-2 items-center">
            <img src={pic} className="h-12 w-12 rounded-full" alt="profile" />
            <div>
              <h1 className="font-semibold text-lg leading-tight">
                Vive<span className="text-red-500">k</span> Chauha
                <span className="text-red-500">n</span>
              </h1>
              <p className="text-xs text-gray-500">Assistant Professor</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            {navItems.map(({ id, text, path }) => (
              <li key={id}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 border-b-2 border-red-500 pb-1"
                      : "hover:text-red-500 transition"
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Icon */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <IoCloseSharp size={26} /> : <AiOutlineMenu size={26} />}
          </div>
        </div>

        {/* Mobile Menu (Slide Down Style) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menu ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col bg-gray-50 rounded-lg mt-2 shadow-lg p-4 space-y-3">
            {navItems.map(({ id, text, path }) => (
              <li key={id}>
                <NavLink
                  to={path}
                  onClick={() => setMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-semibold"
                      : "hover:text-red-500 transition"
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
