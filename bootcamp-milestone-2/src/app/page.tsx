"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "../components/Title";
import AboutMe from "../sections/AboutMe";
import Blogs from "../sections/Blogs";
import Resume from "../sections/Resume";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      // Move the hero up and off screen
      tl.to(heroRef.current, {
        yPercent: -100,
        ease: "power2.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full">
      <div ref={sectionRef} className="relative h-screen overflow-y-hidden">
        <div
          ref={heroRef}
          className="absolute top-0 left-0 w-full h-screen z-40"
        >
          <Title />
        </div>
        <div className="absolute top-0 left-0 w-full bg-[#121212] text-white z-0 flex items-center justify-center text-4xl">
          <AboutMe />
        </div>
      </div>
      <main className=" text-white">
        <div>
          <AboutMe />
          <Blogs />
          <Resume />
        </div>
      </main>
    </div>
  );
}
