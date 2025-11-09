import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export async function GET(
  req: NextRequest,
  context: { params: { slug: string } }
) {
  
  await connectDB();

  const { slug } = context.params;

  try {
    
    const blog = await Blog.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (_err) {
   
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
