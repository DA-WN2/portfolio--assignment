export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-slate-400 mb-12 max-w-xl mx-auto">
          Whether you have a job opportunity, a project idea, or just want to
          say hi, my inbox is always open.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Email Card */}
          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
              📧
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-slate-400 mb-4">adilshancp8943@gmail.com</p>
            <a
              href="mailto:adilshancp8943@gmail.com"
              className="text-blue-400 font-semibold hover:underline"
            >
              Send a Message
            </a>
          </div>

          {/* Social Links Card */}
          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all group">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
              🌐
            </div>
            <h3 className="text-xl font-bold mb-2">Socials</h3>
            <p className="text-slate-400 mb-4">•LinkedIn • GitHub </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/adil-shan-c-p-9711a4326/"
                className="text-emerald-400 font-semibold hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/DA-WN2"
                className="text-emerald-400 font-semibold hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
