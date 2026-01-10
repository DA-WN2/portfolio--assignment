export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-slate-900 text-white text-center px-4"
    >
      <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
        Hi, I'm Adil
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-8">
        An aspiring Full Stack Developer from India, currently exploring the
        worlds of React, Django, and Systems Programming.
      </p>
      <div className="flex justify-center gap-4">
        <a
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition"
          href="#projects"
        >
          View Projects
        </a>
        <button className="border border-slate-700 hover:bg-slate-800 px-6 py-3 rounded-full font-semibold transition">
          Contact Me
        </button>
      </div>
    </section>
  );
}
