"use client";
import React, { useEffect, useState } from "react";

interface Comment {
  _id: string;
  name: string;
  timeAgo?: string;
  text: string;
}

// Helper function to turn name into initial
const getInitials = (name: string) => {
  const names = name.trim().split(" ");
  if (names.length === 0) return "";
  if (names.length === 1) return names[0].charAt(0).toUpperCase();
  return (
    names[0].charAt(0).toUpperCase() +
    names[names.length - 1].charAt(0).toUpperCase()
  );
};

// Helper function to format date
const formatDate = (comment: Comment) => {
  let dateValue = comment.timeAgo;

  // If no date field exists, try to extract from MongoDB _id
  if (!dateValue && comment._id) {
    const timestamp = parseInt(comment._id.substring(0, 8), 16) * 1000;
    dateValue = new Date(timestamp).toISOString();
  }
  console.log("Date value found:", dateValue, "Type:", typeof dateValue);
  if (!dateValue) {
    return "No date";
  }

  const date = new Date(dateValue);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const CommentsSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [submitData, setSubmitData] = useState({
    name: "",
    text: "",
  });
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSubmitData({
      ...submitData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        const newComment = await response.json();
        setComments((prevComments) => [newComment, ...prevComments]);
        setSubmitData({
          name: "",
          text: "",
        });
      }
    } catch (err) {
      console.log("Failed to submit comment");
      setSending(false);
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("/api/comments");
        const data = await response.json();
        setComments(data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, []);

  return (
    <div className="lg:w-1/2">
      <div className="h-96 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 flex-shrink-0">
          <span className="text-gray-500 text-sm">
            {comments.length} comments
          </span>
        </div>

        {/* Comments List */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-6 min-h-0 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
          {comments.map((comment, index) => (
            <div key={index}>
              {/* Comment */}
              <div className="flex items-start space-x-3 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">
                    {getInitials(comment.name)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                      {comment.name}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {formatDate(comment)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              </div>
            </div>
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
                value={submitData.name}
                onChange={handleChange}
                required
                className="px-4 py-2 bg-black text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none text-sm placeholder-gray-400"
              />
              <div className="flex flex-row space-x-3">
                <textarea
                  name="text"
                  placeholder="Share your thoughts..."
                  rows={2}
                  value={submitData.text}
                  onChange={handleChange}
                  required
                  className="flex-1 px-4 py-3 bg-black text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none resize-none text-sm placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center space-x-2 self-end"
                >
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
        </form>
      </div>
    </div>
  );
};

export default CommentsSection;
