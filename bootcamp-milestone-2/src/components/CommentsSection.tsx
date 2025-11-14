"use client";
import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { IComment } from "../database/blogSchema";

type CommentsSectionProps = {
  slug: string;
  comments: IComment[];
};

type CommentFormData = {
  name: string;
  text: string;
};

export default function CommentsSection({
  slug,
  comments: initialComments,
}: CommentsSectionProps) {
  const [comments, setComments] = useState<IComment[]>(initialComments || []);
  const [formData, setFormData] = useState<CommentFormData>({
    name: "",
    text: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, comment: formData }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.blog?.comments) {
          setComments(result.blog.comments);
        }
        setFormData({ name: "", text: "" });
      }
    } catch (error) {
      console.error("Failed to submit comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setComments(initialComments || []);
  }, [initialComments]);

  return (
    <div className="lg:w-1/2">
      <div className="h-96 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 flex-shrink-0">
          <span className="text-gray-500 text-sm">
            {comments.length} comment{comments.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Comments List */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-6 min-h-0 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>

        {/* Comment Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-4 flex-shrink-0 border-t border-gray-200 dark:border-gray-700 pt-4"
        >
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Leave a Comment
          </h4>
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">You</span>
            </div>
            <div className="flex flex-col space-y-3 flex-1">
              <input
                name="name"
                placeholder="Your name..."
                value={formData.name}
                onChange={handleInputChange}
                required
                className="px-4 py-2 bg-black text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none text-sm placeholder-gray-400"
              />
              <div className="flex flex-row space-x-3">
                <textarea
                  name="text"
                  placeholder="Share your thoughts..."
                  rows={2}
                  value={formData.text}
                  onChange={handleInputChange}
                  required
                  className="flex-1 px-4 py-3 bg-black text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none resize-none text-sm placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center space-x-2 self-end"
                >
                  <span>{isSubmitting ? "Sending..." : "Send"}</span>
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
        </form>
      </div>
    </div>
  );
}
