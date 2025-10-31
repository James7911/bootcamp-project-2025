export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="page-title text-4xl font-bold text-center mb-8">Contact</h1>

      <form id="contact-form" className="max-w-lg mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
            rows={5}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>

      <p className="text-center mt-8">
        You can also reach me at: <strong>email</strong>
      </p>
    </main>
  );
}