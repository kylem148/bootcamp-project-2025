import React from "react";
import LangButton from "@/components/LangButton";
import Image from "next/image";
import type { Experience } from "@/database/experienceSchema";

interface ExperienceContentProps {
  experience: Experience;
}

const ExperienceContent: React.FC<ExperienceContentProps> = ({
  experience,
}) => {
  return (
    <div>
      <p className="mb-4 text-2xl font-bold text-neutral-800 md:text-3xl dark:text-neutral-200">
        {experience.heading}
      </p>
      <p className="mb-8 text-sm flex flex-row font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
        {experience.technologies.map((tech, index) => (
          <LangButton key={index} lang={tech} />
        ))}
      </p>
      <div className="grid grid-cols-2 gap-4">
        {experience.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${experience.heading} project ${index + 1}`}
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        ))}
      </div>
      <p className="pt-5 mb-8 text-md text-neutral-800 md:text-lg dark:text-neutral-200">
        {experience.description}
      </p>
    </div>
  );
};

export default ExperienceContent;
