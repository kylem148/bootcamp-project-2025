import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // NOTE: we use "class" in HTML but React is quirky so we have to
    // change all the "class" to "className"
    <header className="bg-neutral-600 md:px-20 px-10 md:py-5 py-3 flex justify-between items-center">
      <h1> Kyle Morgan </h1>
      <nav className="flex gap-5 ">
        <Link href="/">Home</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/about">Contact Me</Link>
      </nav>
    </header>
  );
}
