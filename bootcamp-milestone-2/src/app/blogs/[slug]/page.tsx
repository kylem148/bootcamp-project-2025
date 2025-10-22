import Link from "next/link";
import { Blogs } from "@/constants/blogData";

// finds what slugs to generate
export async function generateStaticParams() {
  return Blogs.map((b) => ({ slug: b.slug }));
}

// gets the data depending on the slug
function getCardDetail(slug: string) {
  return Blogs.find((b) => b.slug === slug) || null;
}

const BlogPageDetails = ({ params }: { params: { slug: string } }) => {
  const blogCard = getCardDetail(params.slug);
  if (!blogCard) return null;

  return (
    <main>
      {/* The top half */}
      <section className="relative w-screen h-[50vh] flex flex-col justify-center  overflow-hidden p-10 md:p-30">
        
        {/* Background image */}
        <img
          src={blogCard.image}
          alt={blogCard.imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
        />

        {/* dark overlay*/}
        <div className="absolute inset-0 bg-black/40" />

        {/* Foreground text */}
        <div className="relative z-10 ">
          <h1 className="font-bold text-amber-50 opacity-90 text-5xl md:text-7xl">
            {blogCard.title}
          </h1>
          <p className="mt-10 font-bold text-amber-50 opacity-90 text-3xl md:text-5xl">
            {blogCard.date}
          </p>
        </div>
      </section>
      
      {/* The bottom half */}
      <section className="max-w-4xl p-10 flex flex-col h-[50vh]">
        <p className="text-lg md:text-xl ">{blogCard.description}</p>
        <Link
          href="/#blog"
          className="mt-20 text-[0.95rem] text-green-500 hover:text-green-400"
        >
          Go back to all blogs...
        </Link>
      </section>
    </main>
  );
};

export default BlogPageDetails;
