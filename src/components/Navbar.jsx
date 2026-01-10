export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md text-white p-4 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">PORTFOLIO</h1>
        <div className="space-x-6 text-sm font-medium uppercase">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}
