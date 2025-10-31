import Skills from "../components/Skills";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import scrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

function AboutMe() {
  useGSAP(() => {
    // Calculate start position based on screen height ratio
    const startPosition  = window.innerHeight * 0.5;

    gsap.fromTo(
      "#about h1",
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about h1",
          start: `+=${startPosition}`,
          toggleActions: "play none none none",
          once: true,
          //markers: true,
        },
      }
    );
  }, []);

  useGSAP(() => {
    const startPosition  = window.innerHeight * 0.01;
    ["t6", "t5", "t4", "t3", "t2", "t1"].forEach((id) => {
      gsap.fromTo(
        `#${id}`,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.05 * (6 - parseInt(id.substring(1))), // Stagger based on id
          ease: "power2.out",
          scrollTrigger: {
            trigger: `#t6`,
            start: `+=${startPosition}`,
            toggleActions: "play none none none",
            once: true,
            //markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div
      id="about"
      className="bg-neutral-950 md:flex flex-col h-screen w-screen overflow-hidden p-5 md:p-20 py-30 scroll-mt-20"
    >
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="flex flex-col flex-shrink basis-2/3 justify-center items-center md:items-left flex-wrap">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-green-400 text-transparent bg-clip-text pl-5 mb-5">
            About me
          </h1>
          <p className="text-[15px] md:text-[20px] p-5 text-left">
            <div id="t1">Hello! I'm Kyle Morgan, a passionate computer science student with a </div>
            <div id="t2">strong interest in software development and technology. I love </div>
            <div id="t3">exploring new programming languages and frameworks, and I'm always </div>
            <div id="t4">eager to take on new challenges that allow me to grow my skills. My </div>
            <div id="t5">goal is to leverage technology to create innovative solutions that </div>
            <div id="t6">make a positive impact on people's lives. </div>
          </p>
        </div>
        <div className="flex items-center justify-center md:pt-6">
          <img
            className="max-h-[300px] md:max-h-[450px]  rounded-2xl object-contain "
            src="/IMG_5318.jpeg"
            alt="picture of person on chair"
          ></img>
        </div>
      </div>

      <div className="mt-10 pb-2">
        <Skills />
      </div>
    </div>
  );
}
export default AboutMe;
