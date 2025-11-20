import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import CommentsSection from "../../../components/CommentsSection";
import connectDB from "../../../database/db";
import Blog from "../../../database/blogSchema";

type BlogDoc = {
  title: string;
  date: string; 
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  comments?: Array<{
    name: string;
    timeAgo: string; 
    text: string;
  }>;
};

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string) {
  try {
    await connectDB();
    const blog = await Blog.findOne({ slug }).lean();

    if (!blog) {
      return null;
    }

    const blogDoc = blog as any;

    // Convert MongoDB document to plain object
    return {
      title: blogDoc.title,
      date: blogDoc.date.toISOString(),
      description: blogDoc.description,
      image: blogDoc.image,
      imageAlt: blogDoc.imageAlt,
      slug: blogDoc.slug,
      comments:
        blogDoc.comments?.map((comment: any) => ({
          name: comment.name,
          timeAgo: comment.timeAgo.toISOString(),
          text: comment.text,
        })) || [],
    };
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog: BlogDoc | null = await getBlog(slug);

  if (!blog) return notFound();

  return (
    <main>
      <section className="relative w-screen h-[50vh] flex flex-col justify-center overflow-hidden p-10 md:p-30">
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center opacity-70"
          priority
          unoptimized
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">
          <h1 className="font-bold text-amber-50 opacity-90 text-5xl md:text-7xl">
            {blog.title}
          </h1>
          <p className="mt-10 font-bold text-amber-50 opacity-90 text-3xl md:text-5xl">
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      <section className="p-10 flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
        <div className="lg:w-1/2 p-5">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {blog.description}
          </p>
          <a
            href="/#blog"
            className="mt-10 inline-block text-[0.95rem] text-green-500 hover:text-green-400 transition-colors duration-200 font-medium"
          >
            ...Go back to all blogs
          </a>
        </div>
        <CommentsSection
          slug={slug}
          comments={
            blog.comments?.map((comment) => ({
              ...comment,
              timeAgo: new Date(comment.timeAgo),
            })) || []
          }
        />
      </section>
    </main>
  );
}
