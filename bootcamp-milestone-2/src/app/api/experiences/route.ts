import { NextResponse } from "next/server";
import connectDB from "../../../database/db";
import Experience from "../../../database/experienceSchema";

export async function GET() {
  try {
    await connectDB();
    const experiences = await Experience.find().sort({ order: 1 });
    return NextResponse.json(experiences);
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return NextResponse.json(
      { error: "Failed to fetch experiences" },
      { status: 500 }
    );
  }
}
