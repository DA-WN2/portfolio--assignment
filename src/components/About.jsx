import useInView from "../hooks/useInView";

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 bg-white dark:bg-slate-950 transition-transform duration-300 will-change-transform ${inView ? "animate-fade-up" : "reveal-hidden"}`}
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            About Me
          </h2>
          <p
            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            I am a student at RIT Kottayam, passionate about solving real-world
            problems through code..
          </p>
          <p
            className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            I enjoy building systems that are both efficient and user-friendly.
          </p>
        </div>

        <div
          className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm"
          style={{
            backgroundColor: "var(--bg-secondary)",
            borderColor: "var(--border-color)",
          }}
        >
          <h3
            className="text-xl font-bold mb-4 dark:text-white"
            style={{ color: "var(--text-primary)" }}
          >
            Education
          </h3>
          <ul className="space-y-4">
            <li className="border-l-4 border-blue-500 pl-4">
              <p
                className="font-bold text-slate-800 dark:text-slate-100"
                style={{ color: "var(--text-primary)" }}
              >
                B.Tech in Computer Science
              </p>
              <p
                className="text-slate-500 dark:text-slate-400 text-sm"
                style={{ color: "var(--text-tertiary)" }}
              >
                2023 - 2027
              </p>
            </li>
            <li className="border-l-4 border-emerald-500 pl-4">
              <p
                className="font-bold text-slate-800 dark:text-slate-100"
                style={{ color: "var(--text-primary)" }}
              >
                Higher Secondary
              </p>
              <p
                className="text-slate-500 dark:text-slate-400 text-sm"
                style={{ color: "var(--text-tertiary)" }}
              >
                2020-2022
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
