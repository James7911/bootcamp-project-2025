import blogs from "@/static/blogData";
import BlogPreview from "@/components/BlogPreview";

export default function BlogsPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="page-title text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </main>
  );
}