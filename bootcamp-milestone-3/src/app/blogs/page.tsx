// src/app/blogs/page.tsx
import connectDB from "@/database/db";
import { Blog } from "@/database/blogSchema"; // use named import
import BlogPreview from "@/components/BlogPreview";

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await Blog.find().sort({ date: -1 }).lean(); 
    return blogs;
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  if (!blogs || blogs.length === 0) {
    return <p className="text-center mt-6">No blogs found.</p>;
  }

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="page-title text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogPreview
            key={blog._id.toString()}
            title={blog.title}
            slug={blog.slug}
            date={new Date(blog.date).toDateString()} // convert to string
            description={blog.description}
            image={blog.image}
            imageAlt={blog.image_alt} // matches schema
          />
        ))}
      </div>
    </main>
  );
}
