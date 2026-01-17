import useInView from "../hooks/useInView";

const skillList = [
  "Java",
  "JavaScript",
  "C Language",
  "MySQL",
  "Django",
  "Tailwind CSS",
  "Python",
  "React",
  "node",
];

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 bg-slate-50 dark:bg-slate-900 transition-transform duration-300 will-change-transform ${inView ? "animate-fade-up" : "reveal-hidden"}`}
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Technical Toolkit
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skillList.map((skill, idx) => (
            <span
              key={skill}
              className={`px-6 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm font-medium text-slate-700 dark:text-slate-200 transform-gpu transition will-change-transform ${inView ? `animate-pop delay-0` : `reveal-hidden`}`}
              style={{
                backgroundColor: "var(--bg-primary)",
                borderColor: "var(--border-color)",
                color: "var(--text-secondary)",
                transitionDelay: `${idx * 40}ms`,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
