export const Hero = () => {
  const STATS = [
    { num: "4", label: "Years of Experience" },
    { num: "1", label: "Production Project" },
    { num: "Full", label: "Stack Coverage" },
  ];
  return (
    <section id="home" className="pt-[60px] min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 flex-1 flex flex-col justify-center py-20">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-10 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="w-7 h-px bg-neutral-900" />
          <span className="text-[0.7rem] tracking-[0.2em] uppercase text-neutral-400">
            Full Stack Developer · Quezon City, PH · Open to Remote
          </span>
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[0.7rem] tracking-wider text-neutral-400">
            Available
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-syne text-[clamp(3.5rem,8vw,7.5rem)] font-extrabold leading-[0.95] tracking-tight mb-10 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          Building
          <br />
          <span className="text-neutral-400 font-normal italic">
            thoughtful
          </span>
          <br />
          web apps.
        </h1>

        {/* Sub grid */}
        <div
          className="grid grid-cols-2 gap-10 items-start animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-base leading-[1.85] text-neutral-500 max-w-md">
            Self-taught developer with enterprise IT roots and 4 years of
            professional experience. I specialize in React and Next.js —
            building production-ready applications from auth to deployment.
          </p>

          <div
            className="flex flex-col gap-3 self-end animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <div className="flex gap-3">
              <a
                href="#projects"
                className="flex-1 text-center text-[0.72rem] tracking-widest uppercase bg-neutral-900 text-white py-3.5 font-medium hover:bg-neutral-700 transition-colors no-underline"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="flex-1 text-center text-[0.72rem] tracking-widest uppercase border border-neutral-200 text-neutral-900 py-3.5 font-medium hover:bg-neutral-900 hover:text-white transition-colors no-underline"
              >
                Get in Touch
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/ken-castillo-64901a373/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center text-[0.68rem] tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors border-t border-neutral-200 pt-2.5 no-underline"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/kvcastillo"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center text-[0.68rem] tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors border-t border-neutral-200 pt-2.5 no-underline"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-t border-neutral-200 max-w-5xl mx-auto w-full px-8">
        <div className="grid grid-cols-3">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 ${i < STATS.length - 1 ? "border-r border-neutral-200 pr-8" : ""} ${i > 0 ? "pl-8" : ""}`}
            >
              <div className="font-syne text-[2.8rem] font-extrabold tracking-tight leading-none">
                {s.num}
              </div>
              <div className="text-[0.68rem] tracking-[0.18em] uppercase text-neutral-400 mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
