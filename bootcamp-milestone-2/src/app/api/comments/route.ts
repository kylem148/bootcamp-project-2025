import { NextResponse } from "next/server";
import connectDB from "@/database/db";
import Comment from "@/database/commentSchema";

// Fetch comments
export async function GET() {
  try {
    await connectDB;
    const comments = await Comment.find().sort({ date: -1 });
    return NextResponse.json(comments);
  } catch (err) {
    console.log("Error fetching comment data: " + err);
    return NextResponse.json("Error fetching comment", { status: 500 });
  }
}

// Send a comment into the database
export async function POST(request: Request) {
  try {
    const data = request.json();

    await connectDB;
    const body = new Comment(data);
    body.save();

    return NextResponse.json("Succesfully saved comment");
  } catch (err) {
    console.log("Error saving comment: " + err);
    return NextResponse.json("Error saving comment", { status: 501 });
  }
}
