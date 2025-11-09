export default function Resume() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="page-title text-4xl font-bold text-center mb-6">Resume</h1>
      <a href="/Resume.pdf" download className="block text-center text-blue-600 underline mb-8">
        Download Resume
      </a>

      <div className="resume space-y-8">
        <section className="section">
          <h2 className="section-title text-2xl font-semibold mb-3">Education</h2>
          <div className="entry space-y-3">
            <div>
              <h3 className="entry-title font-medium">Associate of Science in Computer Science</h3>
              <p className="entry-info text-gray-600">Cuesta College, 2021 – 2024</p>
            </div>
            <div>
              <h3 className="entry-title font-medium">Associate of Mathematics</h3>
              <p className="entry-info text-gray-600">Cuesta College, 2021 – 2024</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title text-2xl font-semibold mb-3">Coursework</h2>
          <ul className="course-list list-disc list-inside space-y-1">
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Web Development</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title text-2xl font-semibold mb-3">Skills</h2>
          <ul className="skill-list list-disc list-inside space-y-1">
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title text-2xl font-semibold mb-3">Projects</h2>
          <div className="entry">
            <h3 className="entry-title font-medium">Personal Website</h3>
            <p className="entry-info text-gray-600">Created a responsive portfolio website using HTML, CSS, and JavaScript.</p>
            <p className="entry-description">Designed and implemented multiple pages including resume, portfolio, and contact form.</p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title text-2xl font-semibold mb-3">Experience</h2>
          <div className="entry">
            <p className="entry-description">Developed web applications</p>
          </div>
        </section>
      </div>
    </main>
  );
}