"use client";

import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#project", label: "Project" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 p-4 pt-6 transition-all ${
        isOpen
          ? "bg-transparent"
          : "bg-transparent lg:bg-opacity-30 lg:backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="/" className="text-white text-2xl font-bold">
            FH
            <span className="border-2 shadow-custom-white mx-1 px-2 py-1 rounded-lg text-slate-800 bg-white border-white">
              DEV
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="block lg:hidden">
          <IconButton
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:bg-gray-700"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mx-4"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 text-center bg-black bg-opacity-70 backdrop-blur-lg p-4 rounded-lg">
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="block mt-2 text-white hover:text-gray-300"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
