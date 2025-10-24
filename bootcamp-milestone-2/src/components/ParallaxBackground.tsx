"use client";

import { RefObject } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

type Props = {
  targetRef: RefObject<HTMLElement | null>;
};

const ParallaxBackground = ({ targetRef }: Props) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 10%", "end 40%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {});

  const eased = useSpring(scrollYProgress, { damping: 30, stiffness: 120 });

  const mountain3Y = useTransform(eased, [0, 1], ["0%", "70%"]);
  const planetsX = useTransform(eased, [0, 1], ["0%", "-20%"]);
  const mountain2Y = useTransform(eased, [0, 1], ["0%", "30%"]);
  const mountain1Y = useTransform(eased, [0, 1], ["0%", "0%"]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative h-full flex items-center justify-center">
        <div className="inset-0 -z-50 text-6xl md:text-8xl font-bold opacity-90">
          CONTACT ME
        </div>

        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />

        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30 md:-mb-60 overflow-visible"
          style={{
            backgroundImage: "url(/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />

        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />

        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxBackground;
