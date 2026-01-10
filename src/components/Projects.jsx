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

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Key Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {myProjects.map((p, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-all"
            >
              <h4 className="text-xl font-bold mb-2">{p.name}</h4>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                {p.tech}
              </span>
              <p className="mt-4 text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
