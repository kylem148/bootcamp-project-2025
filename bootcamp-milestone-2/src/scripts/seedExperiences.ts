import connectDB from "@/database/db";
import Experience from "@/database/experienceSchema";

const experiencesData = [
  {
    title: "2020",
    heading: "Game Development",
    description:
      "Starting from a young age, I was fascinated by video games and aspired to create my own. This passion led me to explore game development using C# and Unity.",
    technologies: ["C#", "Unity"],
    images: [
      "/IMG_5318.jpeg",
      "/IMG_5318.jpeg",
      "/IMG_5318.jpeg",
      "/IMG_5318.jpeg",
    ],
    order: 1,
  },
  {
    title: "2023",
    heading: "Simulations",
    description:
      "In 2023, I delved into simulation development using Java. I created various simulations involving physical shapes and their interactions.",
    technologies: ["Java"],
    images: ["/IMG_5318.jpeg", "/IMG_5318.jpeg"],
    order: 2,
  },
  {
    title: "2025",
    heading: "Website Development",
    description:
      "Currently, I am focused on web development using Next.js and TailwindCSS. I have built several responsive and dynamic websites, honing my skills in front-end development and user experience design.",
    technologies: ["Next.js", "TailwindCSS", "React"],
    images: [
      "/IMG_5318.jpeg",
      "/IMG_5318.jpeg",
      "/IMG_5318.jpeg",
      "/IMG_5318.jpeg",
    ],
    order: 3,
  },
];

async function seedExperiences() {
  try {
    await connectDB();

    // Clear existing experiences
    await Experience.deleteMany({});

    // Insert new experiences
    await Experience.insertMany(experiencesData);

    console.log("✅ Experiences seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding experiences:", error);
  } finally {
    process.exit();
  }
}

seedExperiences();
