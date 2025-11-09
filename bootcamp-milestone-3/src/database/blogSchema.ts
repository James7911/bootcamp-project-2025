// src/database/blogSchema.ts
import mongoose, { Schema } from "mongoose";

type IComment = {
  name: string;
  text: string;
  date: Date;
};

export type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  image_alt: string;
  comments: IComment[];
};

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, default: new Date() },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  comments: { type: Array, default: [] },
});

export const Blog = mongoose.models.Blog || mongoose.model<Blog>("Blog", blogSchema);
