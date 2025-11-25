import mongoose, { Schema } from "mongoose";

// typescript type for experience
type Experience = {
  title: string;
  heading: string;
  description: string;
  technologies: string[];
  images: string[]; // Now supports both image and video file paths
  order: number;
};

// mongoose schema
const experienceSchema = new Schema<Experience>({
  title: { type: String, required: true },
  heading: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: String, required: true }],
  images: [{ type: String, required: true }], // Will contain both images and videos
  order: { type: Number, required: true },
});

// defining the collection and model
const Experience =
  mongoose.models["experiences"] ||
  mongoose.model("experiences", experienceSchema);

export default Experience;
export type { Experience };
