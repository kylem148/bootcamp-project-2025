import mongoose, { Schema } from "mongoose";

// Comment type for nested comments
type IComment = {
  name: string;
  timeAgo: Date;
  text: string;
};

// typescript type (can also be an interface)
type Blog = {
  title: string;
  date: Date;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  comments: IComment[];
};

// Comment schema for nesting
const commentSchema = new Schema<IComment>({
  name: { type: String, required: true },
  timeAgo: { type: Date, default: Date.now },
  text: { type: String, required: true },
});

// mongoose schema
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  comments: [commentSchema], // Array of nested comments
});

// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
export type { Blog as IBlog, IComment };
