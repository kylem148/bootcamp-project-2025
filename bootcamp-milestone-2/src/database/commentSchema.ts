import mongoose, { Schema } from "mongoose";

type IComment = {
  name: string;
  timeAgo: Date;
  text: string;
};

const commentSchema = new Schema<IComment>({
  name: { type: String, required: true },
  timeAgo: { type: Date, default: Date.now },
  text: { type: String, required: true },
});

const Comment =
  mongoose.models.Comment || mongoose.model<IComment>("Comment", commentSchema);

export { Comment };
export type { IComment };
export default Comment;
