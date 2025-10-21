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
  targetRef: RefObject<HTMLElement>;
};

const ParallaxBackground = ({ targetRef }: Props) => {
  // progress maps while the Contact section moves through the viewport
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // start when the section's top reaches 80% viewport height,
    // end when the section's bottom reaches 20% viewport height
    offset: ["start 0%", "end 20%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {});

  const eased = useSpring(scrollYProgress, { damping: 40, stiffness: 120 });

  const mountain3Y = useTransform(eased, [0, 1], ["0%", "70%"]);
  const planetsX = useTransform(eased, [0, 1], ["0%", "-20%"]);
  const mountain2Y = useTransform(eased, [0, 1], ["0%", "30%"]);
  const mountain1Y = useTransform(eased, [0, 1], ["0%", "0%"]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="relative h-full">
        {/* Background Sky (static)
        <div
          className="absolute inset-0 -z-50"
          style={{
            backgroundImage: "url(/sky.jpg)", // public/sky.jpg -> /sky.jpg
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        /> */}
        

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
          className="absolute inset-0 -z-30"
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
