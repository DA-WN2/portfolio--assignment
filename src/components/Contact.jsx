import useInView from "../hooks/useInView";

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 bg-slate-900 dark:bg-slate-950 text-slate-900 dark:text-white transition-transform duration-300 will-change-transform ${inView ? "animate-fade-up" : "reveal-hidden"}`}
      style={{ backgroundColor: "#1e293b", color: "var(--text-primary)" }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold mb-4 dark:text-white"
          style={{ color: "#ffffff" }}
        >
          Get In Touch
        </h2>
        <p
          className="text-slate-600 dark:text-slate-400 mb-12 max-w-xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Whether you have a job opportunity, a project idea, or just want to
          say hi, my inbox is always open.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Email Card */}
          <div
            className={`p-6 bg-slate-800 dark:bg-slate-800 rounded-2xl border border-slate-700 dark:border-slate-600 hover:border-blue-500 transition-all group will-change-transform ${inView ? "animate-pop" : "reveal-hidden"}`}
            style={{
              backgroundColor: "var(--bg-tertiary)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
              📧
            </div>
            <h3
              className="text-xl font-bold mb-2 dark:text-white"
              style={{ color: "var(--text-primary)" }}
            >
              Email
            </h3>
            <p
              className="text-slate-400 dark:text-slate-300 mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              adilshancp8943@gmail.com
            </p>
            <a
              href="mailto:adilshancp8943@gmail.com"
              className="text-blue-400 font-semibold hover:underline"
              style={{ color: "#3b82f6" }}
            >
              Send a Message
            </a>
          </div>

          {/* Social Links Card */}
          <div
            className={`p-6 bg-slate-800 dark:bg-slate-800 rounded-2xl border border-slate-700 dark:border-slate-600 hover:border-emerald-500 transition-all group will-change-transform ${inView ? "animate-pop" : "reveal-hidden"}`}
            style={{
              backgroundColor: "var(--bg-tertiary)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
              🌐
            </div>
            <h3
              className="text-xl font-bold mb-2 dark:text-white"
              style={{ color: "var(--text-primary)" }}
            >
              Socials
            </h3>
            <p
              className="text-slate-400 dark:text-slate-300 mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              •LinkedIn • GitHub{" "}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/adil-shan-c-p-9711a4326/"
                className="text-emerald-400 font-semibold hover:underline"
                style={{ color: "#10b981" }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/DA-WN2"
                className="text-emerald-400 font-semibold hover:underline"
                style={{ color: "#10b981" }}
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
