// --IGNORE-- for personal notes:
// 1. gets raw json experience data from a MongoDB database
// 2. passes it to experinceContent -> turns it into TimelineItem format (json -> react)
// 3. passes that to Timeline component to render the timeline


"use client";
import { useEffect, useState } from "react";
import Timeline from "@/components/Timeline";
import ExperienceContent from "@/components/ExperienceContent";
import type { Experience } from "@/database/experienceSchema";

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

const TimelineWithData = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch("/api/experiences");
        const experiences: Experience[] = await response.json();

        // Convert MongoDB data to Timeline format
        const timelineItems: TimelineItem[] = experiences.map((exp) => ({
          title: exp.title,
          content: <ExperienceContent experience={exp} />,
        }));

        setTimelineData(timelineItems);
      } catch (error) {
        setError("Error fetching timeline data: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        Loading experiences...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 text-red-500">
        Error: {error}
      </div>
    );
  }

  return <Timeline data={timelineData} />;
};

export default TimelineWithData;
