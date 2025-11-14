import { IComment } from "../database/blogSchema";

type CommentProps = {
  comment: IComment;
};

const parseCommentTime = (time: Date) => {
  return new Date(time).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getInitials = (name: string) => {
  const names = name.trim().split(" ");
  if (names.length === 0) return "";
  if (names.length === 1) return names[0].charAt(0).toUpperCase();
  return (
    names[0].charAt(0).toUpperCase() +
    names[names.length - 1].charAt(0).toUpperCase()
  );
};

export default function Comment({ comment }: CommentProps) {
  return (
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
            {parseCommentTime(comment.timeAgo)}
          </span>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {comment.text}
        </p>
      </div>
    </div>
  );
}
