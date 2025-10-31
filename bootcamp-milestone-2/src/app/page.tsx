import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="page-title">Hello World!</h1>

      <div className="about grid md:grid-cols-2 gap-8 items-center">
        <div className="about-image">
          <Image
            src="/images/sky.jpg"
            alt="Sky picture"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="about-text">
          <p className="text-lg">
            This website covers all relevant information for <strong>James Oden</strong>
          </p>
          <p className="text-lg">
            This is my personal website. <strong>Enjoy!</strong>
          </p>
        </div>
      </div>
    </main>
  );
}