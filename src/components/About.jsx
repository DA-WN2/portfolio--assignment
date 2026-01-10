export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-slate-900">About Me</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            I am a student at RIT Kottayam, passionate about solving real-world
            problems through code..
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            I enjoy building systems that are both efficient and user-friendly.
          </p>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <ul className="space-y-4">
            <li className="border-l-4 border-blue-500 pl-4">
              <p className="font-bold text-slate-800">
                B.Tech in Computer Science
              </p>
              <p className="text-slate-500 text-sm">2023 - 2027</p>
            </li>
            <li className="border-l-4 border-emerald-500 pl-4">
              <p className="font-bold text-slate-800">Higher Secondary</p>
              <p className="text-slate-500 text-sm">2020-2022</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
