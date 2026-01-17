import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <main className="font-sans scroll-smooth transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <footer className="py-10 text-center border-t text-sm">
          © 2026 | Built with React & Tailwind
        </footer>
      </main>
    </ThemeProvider>
  );
}

export default App;
