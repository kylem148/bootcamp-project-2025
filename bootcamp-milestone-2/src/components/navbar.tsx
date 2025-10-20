import React from "react";
import Link from "next/link";
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
    <header className="z-90 flex justify-between items-center py-4 px-4 lg:px-20 fixed right-0 left-0 top-0">
      <h1 className="text-3xl md:text-4xl lg:text-5xl m-0">Kyle Morgan</h1>
      <nav className="hidden md:flex items-center gap-12">
        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Home
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Blog
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Resume
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="#"
        >
          Contact
        </a>
      </nav>

      <button onClick={toggleMenu} className="md:hidden text-3xl p-2 z-50">
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg0black bg-opacity-70 backdrop-blur- md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            Home
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            Blog
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            Resume
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="#"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
