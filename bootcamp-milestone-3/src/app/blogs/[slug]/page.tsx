import { notFound } from "next/navigation";
import Image from "next/image";
import connectDB from "@/database/db";
import { Blog } from "@/database/blogSchema";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  await connectDB();

  const { slug } = params;
  if (!slug) return notFound();

  const blog = await Blog.findOne({ slug }).lean<Blog>();
  if (!blog) return notFound();

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-600 mb-6">{new Date(blog.date).toDateString()}</p>

      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.image_alt}
          width={800}
          height={400}
          className="rounded-lg mb-8 mx-auto"
        />
      )}

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
}
