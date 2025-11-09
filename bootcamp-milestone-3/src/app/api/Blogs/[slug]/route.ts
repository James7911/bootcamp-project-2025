// src/app/api/Blogs/[slug]/route.ts
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import { Blog } from "@/database/blogSchema";

export async function GET(req: NextRequest) {
  await connectDB();

  
  const url = new URL(req.url);
  const slug = url.pathname.split("/").pop(); 

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }
}
