import useInView from "../hooks/useInView";

export default function Hero() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      id="home"
      className={`pt-32 pb-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 transition-transform duration-300 will-change-transform ${
        inView ? "animate-fade-up" : "reveal-hidden"
      }`}
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Left */}
        <div
          className={`flex justify-center ${inView ? "animate-fade-up" : "reveal-hidden"}`}
          style={{ animationDelay: "100ms" }}
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg will-change-transform hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer">
            <img
              src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,q_auto,w_720/67344c876c473c001d68c123.png"
              alt="Adil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Right */}
        <div
          className={`${inView ? "animate-fade-up" : "reveal-hidden"}`}
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Hi, I'm Adil
          </h2>
          <p
            className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            An aspiring Full Stack Developer from India, currently exploring the
            worlds of React, Django, and Systems Programming.
          </p>
          <div className="flex justify-start gap-4">
            <a
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition transform-gpu hover:-translate-y-0.5"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 btn-contact px-6 py-3 rounded-full font-semibold transition transform-gpu hover:-translate-y-0.5"
              href="#contact"
              style={{ color: "var(--text-primary)" }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
