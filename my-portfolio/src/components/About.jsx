export default function About() {
  return (
    <section
      id="about"
      className="pt-28 pb-20 bg-gray-50 dark:bg-gray-900 text-center"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          Hello! I’m <span className="font-semibold">Allan</span>, a
          <span className="text-blue-500"> Full-Stack Developer</span> with a
          focus on building scalable, user-friendly, and secure applications.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
          I specialize in <span className="font-medium">React</span>,{" "}
          <span className="font-medium">Django</span>,{" "}
          <span className="font-medium">PostgreSQL</span>, and love transforming
          ideas into real-world projects 🚀.
        </p>
      </div>
    </section>
  );
}
