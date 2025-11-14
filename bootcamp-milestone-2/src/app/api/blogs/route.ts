import { NextResponse } from "next/server";
import connectDB from "../../../database/db";
import Blog from "../../../database/blogSchema";

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ date: -1 });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const { slug, comment } = await request.json();

    if (!slug || !comment?.name || !comment?.text) {
      return NextResponse.json(
        { error: "Blog slug and comment data (name, text) are required" },
        { status: 400 }
      );
    }

    const blog = await Blog.findOneAndUpdate(
      { slug },
      {
        $push: {
          comments: {
            name: comment.name,
            timeAgo: new Date(),
            text: comment.text,
          },
        },
      },
      { new: true }
    );

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Comment added successfully",
      blog,
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      { error: "Failed to add comment" },
      { status: 500 }
    );
  }
}
