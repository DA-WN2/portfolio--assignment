const skillList = [
  "Java",
  "JavaScript",
  "C Language",
  "MySQL",
  "Django",
  "Tailwind CSS",
  "Python",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">
          Technical Toolkit
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skillList.map((skill) => (
            <span
              key={skill}
              className="px-6 py-2 bg-white border border-slate-200 rounded-lg shadow-sm font-medium text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
