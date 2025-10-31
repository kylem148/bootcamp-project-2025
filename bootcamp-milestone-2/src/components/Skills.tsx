import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/scroll-based-velocity";
import { iconsList } from "@/constants/index.js";

const Skills = () => {
  return (
    <div>
      <ScrollVelocityContainer className="text-amber-50 text-4xl font-bold md:text-7xl">
        <ScrollVelocityRow baseVelocity={10} direction={1}>
          {iconsList.map((icon, index) => (
            <span key={index} className="mx-4 inline-block pt-10">
              <img
                src={icon.image}
                alt={icon.name}
                className="h-10 w-10 md:h-15 md:w-15 hover:-translate-y-3 md:hover:-translate-y-5 transition-transform duration-300 ease-in-out"
              />
            </span>
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
};

export default Skills;
