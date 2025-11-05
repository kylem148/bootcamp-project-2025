import Image from "next/image";
import { notFound } from "next/navigation";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

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

// Helper function to format date
const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    await connectDB();
    const doc = (await Blog.findOne({
      slug: params.slug,
    }).lean()) as BlogDoc | null;

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
            unoptimized
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Foreground text */}
          <div className="relative z-10">
            <h1 className="font-bold text-amber-50 opacity-90 text-5xl md:text-7xl">
              {doc.title}
            </h1>
            <p className="mt-10 font-bold text-amber-50 opacity-90 text-3xl md:text-5xl">
              {formatDate(new Date(dateStr))}
            </p>
          </div>
        </section>

        {/* Bottom section */}
        <section className="p-10 flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
          <div className="lg:w-1/2 p-5">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{doc.description}</p>
            <a
              href="/#blog"
              className="mt-10 inline-block text-[0.95rem] text-green-500 hover:text-green-400 transition-colors duration-200 font-medium"
            >
              ← Go back to all blogs
            </a>
          </div>
          
          {/* Fixed Height Comments Section */}
          <div className="lg:w-1/2">
            <div className="h-96 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 flex-shrink-0">

                <span className="text-gray-500 text-sm">3 comments</span>
              </div>
              
              {/* Scrollable Comments List */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-6 min-h-0 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
                {/* Comment 1 */}
                <div className="flex items-start space-x-3 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">N1</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Name1</h4>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Comment 1
                    </p>
                  </div>
                </div>

                {/* Comment 2 */}
                <div className="flex items-start space-x-3 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">N2</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Name2</h4>
                      <span className="text-xs text-gray-500">5 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Wow this is such a cool comment
                    </p>
                  </div>
                </div>

                {/* Comment 3 */}
                <div className="flex items-start space-x-3 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">N3</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Name3</h4>
                      <span className="text-xs text-gray-500">1 day ago</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Fantastic blog! THis is my favoirte blog i have ever read
                    </p>
                  </div>
                </div>
              </div>

              {/* Comment Form - Fixed at bottom */}
              <div className="mt-4 flex-shrink-0 border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Leave a Comment</h4>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">You</span>
                  </div>
                  <div className="flex flex-row space-x-3 flex-1">
                    <textarea
                      placeholder="Share your thoughts..."
                      rows={2}
                      className="flex-1 px-4 py-3 bg-black text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none resize-none text-sm placeholder-gray-400"
                    />
                    <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center space-x-2 self-end">
                      <span>Send</span>
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error loading blog:", error);
    return notFound();
  }
}
