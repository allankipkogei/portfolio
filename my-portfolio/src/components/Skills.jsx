export default function Skills() {
  const skills = [
    "React.js",
    "Django",
    "PostgreSQL",
    "Tailwind CSS",
    "REST APIs",
    "Python",
    "JavaScript (ES6+)",
    "Git & GitHub",
    "Docker",
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
