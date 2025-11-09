import Image from "next/image";
import Link from "next/link";
import { Project } from "../../database/projectSchema";
import connectDB from "../../database/db";

export default async function Portfolio() {
  // connect to the database
  await connectDB();

  // fetch all projects and convert to plain JS objects
  const projects: Project[] = await Project.find({}).sort({ date: -1 }).lean();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="page-title text-4xl font-bold text-center mb-8">Portfolio</h1>

      <div className="project grid md:grid-cols-2 gap-6 items-center">
        {projects.map((project) => (
          <div key={project._id} className="project-item">
            <Link href={project.link || "#"}>
              <Image
                src={project.image || "/images/default.png"} 
                alt={project.imageAlt || project.title}
                width={300}
                height={200}
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            </Link>
            <div className="project-details">
              <p className="project-name text-xl font-semibold">{project.title}</p>
              <p className="project-description text-gray-700">{project.description || "No description available."}</p>
              {project.link && (
                <Link href={project.link} className="text-blue-600 underline">
                  Learn More
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
