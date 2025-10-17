import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to
    // change all the "class" to "className"
    <header className="bg-neutral-600 md:px-13 px-10 py-3 flex justify-between items-center sticky top-0 z-40">
      <div className="md:text-[30px] text-[20px] font-bold">
        <h1> Kyle Morgan </h1>
      </div>
      <nav className="flex gap-5 text-green-200 md:text-[22px] text-[17px]">
        <Link
          href="/"
          className="transition-transform duration-300 ease-in-out hover:-translate-y-1"
        >
          Home
        </Link>
        <Link
          href="/blogs"
          className="transition-transform duration-300 ease-in-out hover:-translate-y-1"
        >
          Blogs
        </Link>
        <Link
          href="/resume"
          className="transition-transform duration-300 ease-in-out hover:-translate-y-1"
        >
          Resume
        </Link>
        <Link
          href="/about"
          className="transition-transform duration-300 ease-in-out hover:-translate-y-1"
        >
          Contact Me
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;