"use client";

import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import ParallaxBackground from "./ParallaxBackground";

const Contact = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const contactRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={contactRef}
      className="relative min-h-screen overflow-hidden c-space
                 flex items-start justify-center md:items-start md:justify-start"
    >
      {/* Parallax is positioned absolutely inside this section */}
      <ParallaxBackground targetRef={contactRef} />

      {/* Put your actual contact content here, above the parallax */}
      <div className="relative z-10 p-8 text-white">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p>…content…</p>
      </div>
    </section>
  );
};

export default Contact;
