// src/database/projectSchema.ts
import mongoose, { Schema } from "mongoose";

export type Project = {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  link?: string;
  date: Date;
  slug: string;
};

const ProjectSchema = new Schema<Project>(
  {
    title: { type: String, required: true },
    description: String,
    image: String,
    imageAlt: String,
    link: String,
    date: { type: Date, default: Date.now },
    slug: { type: String, required: true, unique: true },
  },
  { collection: "portfolios" } 
);

export const Project =
  mongoose.models.Project || mongoose.model<Project>("Project", ProjectSchema);
