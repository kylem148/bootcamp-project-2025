import Image from "next/image";
import { notFound } from "next/navigation";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export const dynamic = "force-static";

type BlogDoc = {
  title: string;
  date: Date;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

export async function generateStaticParams() {
  try {
    await connectDB();
    const docs = await Blog.find({}, { slug: 1, _id: 0 }).lean();
    return docs.map((doc: any) => ({ slug: doc.slug }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    await connectDB();
    const doc = await Blog.findOne({ slug: params.slug }).lean() as BlogDoc | null;

    if (!doc) return notFound();

    const dateStr =
      doc.date instanceof Date
        ? doc.date.toISOString().slice(0, 10)
        : new Date(doc.date).toISOString().slice(0, 10);

    return (
      <main>
        {/* Top section */}
        <section className="relative w-screen h-[50vh] flex flex-col justify-center overflow-hidden p-10 md:p-30">
          {/* Background image */}
          <Image
            src={doc.image}
            alt={doc.imageAlt}
            fill
            sizes="100vw"
            className="object-cover object-center opacity-70"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Foreground text */}
          <div className="relative z-10">
            <h1 className="font-bold text-amber-50 opacity-90 text-5xl md:text-7xl">
              {doc.title}
            </h1>
            <p className="mt-10 font-bold text-amber-50 opacity-90 text-3xl md:text-5xl">
              {dateStr}
            </p>
          </div>
        </section>

        {/* Bottom section */}
        <section className="max-w-4xl p-10">
          <p className="text-lg md:text-xl">{doc.description}</p>
          <a
            href="/#blog"
            className="mt-20 inline-block text-[0.95rem] text-green-500 hover:text-green-400"
          >
            Go back to all blogs...
          </a>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error loading blog:", error);
    return notFound();
  }
}
