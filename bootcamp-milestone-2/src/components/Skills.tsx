import Techicon from "./TechIcon";
import { iconsList } from "../constants";

function Skills() {
  return (
    <div className="hidden h-60 md:flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <h1
          className="text-heading"
        >
          Skills
        </h1>
      </div>
      <div className="w-9/10 items-center justify-center flex flex-col overflow-hidden">
        <div className="marquee h-32">
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
