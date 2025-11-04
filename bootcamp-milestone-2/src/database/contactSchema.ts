import mongoose, { Schema } from "mongoose";
type Contact = {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: Date;
  status: "pending" | "read" | "sent";
};

const contactSchema = new Schema<Contact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["pending", "read", "sent"],
    default: "pending",
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model<Contact>("Contact", contactSchema);

export { Contact };
export default contactSchema;
