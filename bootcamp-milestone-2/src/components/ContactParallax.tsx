"use client";

import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import ParallaxBackground from "./ParallaxBackground";

const ContactParallax = () => {
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
    </section>
  );
};

export default ContactParallax;
