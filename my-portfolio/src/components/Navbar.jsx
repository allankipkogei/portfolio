import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const links = ["about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={() => setActive(link)}
                className={`capitalize hover:text-blue-500 transition ${
                  active === link ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setDark(!dark)}
          className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
