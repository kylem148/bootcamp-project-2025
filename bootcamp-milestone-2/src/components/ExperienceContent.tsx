import React, { useRef } from "react";
import LangButton from "./LangButton";
import Image from "next/image";
import type { Experience } from "../database/experienceSchema";

interface ExperienceContentProps {
  experience: Experience;
}

// Helper function to check if file is a video
const isVideoFile = (filename: string): boolean => {
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
  return videoExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
};

// Component to handle both images and videos
const MediaItem: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  if (isVideoFile(src)) {
    return (
      <video
        ref={videoRef}
        src={src.startsWith("/") ? src : `/videos/${src}`}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
  }

  // For images, add proper path prefix if not already present
  const imageSrc = src.startsWith("/") ? src : `/${src}`;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={500}
      height={500}
      className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    />
  );
};

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
        {experience.images.map((media, index) => (
          <MediaItem
            key={index}
            src={media}
            alt={`${experience.heading} project ${index + 1}`}
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
