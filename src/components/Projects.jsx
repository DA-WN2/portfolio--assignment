const myProjects = [
  {
    name: "Hotel Room Booking",
    tech: "Django & Python",
    desc: "A Website to book hotel rooms.",
    link: "https://github.com/DA-WN2/Hotel_booking-django-project",
  },
  {
    name: "Telegram Joke Bot",
    tech: "Python",
    desc: "A chat bot which generates Jokes based on a given topic.",
    link: "https://github.com/DA-WN2/Telegram-Chat-bot",
  },
];

import useInView from "../hooks/useInView";

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 bg-white dark:bg-slate-950 transition-transform duration-300 will-change-transform ${inView ? "animate-fade-up" : "reveal-hidden"}`}
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Key Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {myProjects.map((p, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all will-change-transform ${inView ? "animate-pop" : "reveal-hidden"}`}
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-color)",
              }}
            >
              <h4
                className="text-xl font-bold mb-2 dark:text-white"
                style={{ color: "var(--text-primary)" }}
              >
                {p.name}
              </h4>
              <span
                className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest"
                style={{ color: "#3b82f6" }}
              >
                {p.tech}
              </span>
              <p
                className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
