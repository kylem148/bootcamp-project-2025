import Techicon from "./TechIcon.jsx";
import { iconsList } from "../constants";

function Skills() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <h1 className="mt-4 mb-10 font-bold text-5xl">Skills</h1>
      </div>
      <div className="items-center justify-center flex flex-col overflow-hidden">
        <div className="marquee h-25">
          <div className="marquee-box md:gap-12 gap-5">
            {iconsList.map((icon, index) => (
              <Techicon key={index} icon={icon} />
            ))}
            {iconsList.map((icon, index) => (
              <Techicon key={index} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
