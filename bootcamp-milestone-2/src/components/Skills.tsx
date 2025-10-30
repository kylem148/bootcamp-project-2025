import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/scroll-based-velocity"; 
import { iconsList } from '@/constants/index.js';


const Skills = () => {
  return (
    <div>
      <ScrollVelocityContainer className="text-amber-50 text-4xl font-bold md:text-7xl">
        <ScrollVelocityRow baseVelocity={10} direction={1}>
          {iconsList.map((icon, index) => (
            <span key={index} className="mx-4 inline-block">
              <img src={icon.image} alt={icon.name} className="h-15 w-15" />
            </span>
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
};

export default Skills;
