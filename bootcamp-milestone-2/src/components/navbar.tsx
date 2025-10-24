import React from "react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "boxicons/css/boxicons.min.css";

function Navbar() {
  //toggle visiblity of menu
  const toggleMenu = () => {
    const MobileMenu = document.getElementById("mobileMenu");
    if (MobileMenu?.classList.contains("hidden")) {
      MobileMenu.classList.remove("hidden");
    } else {
      MobileMenu?.classList.add("hidden");
    }
  };

  return (
    // Navbar component for desktop
    <header
      id="desktopMenu"
      className="z-90 flex justify-between items-center py-4 px-4 lg:px-20 fixed right-0 left-0 top-0 bg-nuetral-900 bg-opacity-70 backdrop-blur-md shadow-md"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold m-0">
        KYLE MORGAN
      </h1>
      <nav className="hidden md:flex items-center gap-12">
        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#about"
        >
          HOME
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#resume"
        >
          RESUME
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#blog"
        >
          BLOG
        </a>
      </nav>

      <a
        className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50"
        href="#contact"
      >
        CONTACT
      </a>

      {/* Mobile Button */}
      <button
        onClick={() => {
          toggleMenu();
        }}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#about"
          >
            HOME
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#resume"
          >
            RESUME
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#blog"
          >
            BLOG
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#contact"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
