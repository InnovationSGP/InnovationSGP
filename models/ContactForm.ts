import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    email: { type: String, required: true, nullable: false, trim: true },
    first: { type: String, required: true, nullable: false, trim: true },
    last: { type: String, trim: true },
    message: { type: String, required: true, nullable: false, trim: true },
    phone: { type: String, trim: true },
  },
  { timestamps: true }
);

export const MessageForm =
  mongoose.models.message || mongoose.model("message", MessageSchema);