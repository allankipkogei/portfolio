export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
          Contact Me
        </h2>

        <p className="text-center text-gray-700 dark:text-gray-300 mb-8 text-lg">
          Have a project in mind or just want to say hello?  
          Fill out the form below or reach me directly at{" "}
          <a
            href="mailto:allan@example.com"
            className="text-blue-500 font-medium hover:underline"
          >
            allan@example.com
          </a>
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mayvlbqq" // Replace with your Formspree or backend endpoint
          method="POST"
          className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Allan Korir. Built with 💙 using React &
          Tailwind CSS.
        </footer>
      </div>
    </section>
  );
}
