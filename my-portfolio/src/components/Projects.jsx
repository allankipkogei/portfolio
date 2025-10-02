export default function Projects() {
  const projects = [
    {
      title: "Car Dealership Website",
      desc: "Full-stack app built with Django REST API and React frontend. Includes JWT auth, admin dashboard, and car listings.",
      github: "#",
      demo: "#",
    },
    {
      title: "Construction ERP",
      desc: "ERP system for construction companies using Django, PostgreSQL, and React. Modules: Project management, Inventory, HR.",
      github: "#",
      demo: "#",
    },
    {
      title: "Coffee Shop Billing System",
      desc: "POS and billing system built with C and MySQL. Automates orders and receipts.",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.desc}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="text-green-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
