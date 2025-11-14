import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/db";
import Blog from "../../../../database/blogSchema";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params;

  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
