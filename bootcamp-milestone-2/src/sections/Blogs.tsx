"use client";

import Link from "next/link";
import { Blogs } from "../constants/blogData";

function BlogList() {
  return (
    <main
      id="blog"
      className="flex flex-col items-center justify-center min-h-screen scroll-mt-20"
    >
      <h1
        className="
            text-heading mt-7
          "
      >
        Blog
      </h1>
      <div
        id="card-list"
        className="cards flex w-screen flex-wrap justify-center gap-8 p-1 grow-3 m-10 md:m-20 "
      >
        {Blogs.map((blog) => (
          <article
            key={blog.slug}
            className={[
              // base card
              "hidden card relative  md:flex flex-col p-6 rounded-2xl bg-neutral-800",
              "shadow-neutral-950 shadow-lg",
              "transition-transform duration-200 hover:-translate-y-4 border-4 border-neutral-500",
              // sizing
              "flex-1 basis-[400px] h-[300px] md:h-[400px] min-w-[150px] max-w-[250px] md:min-w[100px] md:max-w-[300px]",
              // stacked overlap
              "[&:not(:first-child)]:-ml-[130px]",
            ].join(" ")}
          >
            <header className="flex flex-col gap-1">
              <p className="text-sm/5 text-neutral-300">{blog.date}</p>
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-[0.95rem] text-green-700 hover:text-green-800"
              >
                Click here to view…
              </Link>
              <img
                src={blog.image}
                alt={blog.imageAlt}
                className="mt-2 w-full h-[180px] object-cover rounded-lg"
              />
            </header>
          </article>
        ))}

        {/* Mobile View */}
        {Blogs.map((blog) => (
          <article
            key={blog.slug}
            className="md:hidden card flex flex-col p-6 border-4 border-neutral-500 rounded-2xl bg-neutral-800 shadow-[#333230] shadow-md transition-transform duration-200 hover:-translate-y-4 flex-1 basis-[200px] h-[300px] min-w-[150px] max-w-[250px]"
          >
            <header className="flex flex-col gap-1">
              <p className="text-sm/5 text-neutral-300">{blog.date}</p>
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-[0.95rem] text-green-700 hover:text-green-800"
              >
                Click here to view…
              </Link>
              <img
                src={blog.image}
                alt={blog.imageAlt}
                className="mt-2 w-full h-[150px] md:h-[180px] object-cover rounded-lg"
              />
            </header>
          </article>
        ))}
      </div>
    </main>
  );
}
export default BlogList;
