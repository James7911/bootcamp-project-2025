// src/app/api/Blogs/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import { Blog } from "@/database/blogSchema";

export async function GET(req: NextRequest, context: any) {
  // Connect to MongoDB
  await connectDB();

  const slug = context?.params?.slug;
  if (!slug) {
    return NextResponse.json({ error: "Missing slug parameter" }, { status: 400 });
  }

  try {
    // Find the blog by slug
    const blog = await Blog.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch {
    // Return 404 if blog not found
    return NextResponse.json({ error: "Blog not found." }, { status: 404 });
  }
}
