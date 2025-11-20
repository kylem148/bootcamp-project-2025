"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Blog {
  title: string;
  slug: string;
  date: Date;
  image: string;
  imageAlt: string;
}

function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();

        // Check if the response is successful and data is an array
        if (response.ok && Array.isArray(data)) {
          setBlogs(data);
          setError(null);
        } else {
          // Handle API error responses
          const errorMessage = data.error || "Failed to fetch blogs";
          setError(errorMessage);
          setBlogs([]); // Ensure blogs is always an array
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Network error - unable to fetch blogs");
        setBlogs([]); // Ensure blogs is always an array
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Helper function to format date
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useGSAP(() => {
    // Only run animations after blogs are loaded
    if (loading || blogs.length === 0) return;

    gsap.fromTo(
      "#blog-title",
      {
        y: -50,
        opacity: 0,
        immediateRender: false,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#blog-title",
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Animate desktop cards
    gsap.fromTo(
      ".desktop-card",
      {
        y: 100,
        opacity: 0,
        immediateRender: false,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        clearProps: "transform",
        scrollTrigger: {
          trigger: "#card-list",
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Animate mobile cards
    gsap.fromTo(
      ".mobile-card",
      {
        y: 500,
        opacity: 0,
        immediateRender: false,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        clearProps: "transform",
        scrollTrigger: {
          trigger: "#card-list",
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, [blogs, loading]);

  if (loading) {
    return (
      <main
        id="blog"
        className="flex flex-col items-center justify-center min-h-screen scroll-mt-20"
      >
        <h1 className="text-heading mt-7">Blog</h1>
        <p className="text-neutral-400 mt-4">Loading blogs...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main
        id="blog"
        className="flex flex-col items-center justify-center min-h-screen scroll-mt-20"
      >
        <h1 className="text-heading mt-7">Blog</h1>
        <div className="flex flex-col items-center mt-4">
          <p className="text-red-500 mb-4">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main
      id="blog"
      className="flex flex-col items-center justify-center min-h-screen scroll-mt-20 "
    >
      <h1
        id="blog-title"
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
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className={[
              // base card
              "desktop-card hidden card relative  md:flex flex-col p-6 rounded-2xl bg-neutral-800",
              "shadow-neutral-950 shadow-lg",
              "transition-transform duration-200 hover:-translate-y-4 border-4 border-neutral-500",
              // sizing
              "flex-1 basis-[400px] h-[300px] md:h-[400px] min-w-[150px] max-w-[250px] md:min-w[100px] md:max-w-[300px]",
              // stacked overlap
              "[&:not(:first-child)]:-ml-[130px]",
            ].join(" ")}
          >
            <header className="flex flex-col gap-1">
              <p className="text-sm/5 text-neutral-300">
                {formatDate(blog.date)}
              </p>
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
        {blogs.map((blog) => (
          <article
            key={`mobile-${blog.slug}`}
            className="mobile-card md:hidden card flex flex-col p-6 border-4 border-neutral-500 rounded-2xl bg-neutral-800 shadow-[#333230] shadow-md transition-transform duration-200 hover:-translate-y-4 flex-1 basis-[200px] h-[300px] min-w-[150px] max-w-[250px]"
          >
            <header className="flex flex-col gap-1">
              <p className="text-sm/5 text-neutral-300">
                {formatDate(blog.date)}
              </p>
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
