import { notFound } from "next/navigation";
import blogs from "@/static/blogData";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

export default function BlogPost({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) notFound();

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="blog-date text-gray-600 mb-6">{blog.date}</p>

      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          width={400}
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

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}