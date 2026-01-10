import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; // 1. Import About
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // 2. Import Contact

function App() {
  return (
    <main className="font-sans text-slate-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About /> 
      <Skills />
      <Projects />
      <Contact /> 
      <footer className="py-10 text-center bg-slate-900 border-t border-slate-800 text-slate-500 text-sm">
        © 2026 | Built with React & Tailwind
      </footer>
    </main>
  );
}

export default App;
