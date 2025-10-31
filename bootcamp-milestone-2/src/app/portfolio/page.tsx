import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="page-title text-4xl font-bold text-center mb-8">Portfolio</h1>

      <div className="project grid md:grid-cols-2 gap-6 items-center">
        <Link href="/">
          <Image
            src="/images/screenshot.jpg"
            alt="Screenshot of website"
            width={300}
            height={200}
            className="rounded-lg shadow-md hover:shadow-xl transition-shadow"
          />
        </Link>
        <div className="project-details">
          <p className="project-name text-xl font-semibold">Personal Website</p>
          <p className="project-description text-gray-700">
            This is my personal portfolio website showcasing my projects and resume.
          </p>
          <Link href="/" className="text-blue-600 underline">
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
}