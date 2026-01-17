import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white p-4 z-50 shadow-md dark:shadow-slate-800 animate-pop will-change-transform border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">PORTFOLIO</h1>
        <div className="flex items-center gap-6">
          <div className="space-x-6 text-sm font-medium uppercase">
            <a
              href="#about"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              Projects
            </a>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
}
