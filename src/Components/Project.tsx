import { SectionHeader } from "./SectionHeader";

export const Projects = () => {
  const PROJECTS = [
    {
      name: "Kingsman Clothing Co.",
      tag: "Full Stack",
      year: "2026",
      src: "/kingsman_homepage.png",
      vercel: "https://kingsmanclothing.vercel.app/",
      github: "https://github.com/kvcastillo/kingsmanclothing/",
      desc: "Production-grade e-commerce with Google OAuth, Prisma ORM, Supabase PostgreSQL, and CI/CD on Vercel.",
      tech: ["Next.js 14", "TypeScript", "Prisma", "Supabase"],
    },
  ];
  return (
    <section id="projects" className="border-t border-neutral-200 py-24">
      <div className="max-w-5xl mx-auto px-8">
        <SectionHeader index="02 — Work" title="Selected projects" />

        <div>
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className="grid grid-cols-[48px_1fr_280px_80px] gap-8 items-start py-12 border-t border-b border-neutral-200 hover:border-neutral-400 transition-colors"
            >
              {/* Index */}
              <span className="text-[0.65rem] tracking-wider text-neutral-300 pt-1">
                0{i + 1}
              </span>

              {/* Info */}
              <div>
                <div className="flex gap-4 mb-3.5">
                  <span className="text-[0.65rem] tracking-[0.18em] uppercase text-neutral-500 bg-neutral-100 px-2.5 py-1">
                    {p.tag}
                  </span>
                  <span className="text-[0.65rem] tracking-[0.18em] text-neutral-300">
                    {p.year}
                  </span>
                </div>
                <h3 className="font-syne text-[1.8rem] font-bold tracking-tight mb-3">
                  {p.name}
                </h3>
                <p className="text-[0.85rem] leading-[1.85] text-neutral-500 mb-5 max-w-md">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[0.62rem] tracking-[0.1em] uppercase text-neutral-500 border border-neutral-200 px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div className="bg-neutral-100 border border-neutral-200 h-40 flex items-center justify-center overflow-hidden">
                {p.src ? (
                  <img
                    src={p.src}
                    alt={p.name}
                    className="w-full h-full object-cover object-top opacity-80"
                  />
                ) : (
                  <span className="text-[0.65rem] tracking-wider uppercase text-neutral-300">
                    Preview
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3 pt-1">
                <a
                  href={p.vercel}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.65rem] tracking-[0.14em] uppercase text-neutral-900 no-underline hover:text-neutral-500 transition-colors"
                >
                  Live ↗
                </a>
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.65rem] tracking-[0.14em] uppercase text-neutral-900 no-underline hover:text-neutral-500 transition-colors"
                  >
                    Code ↗
                  </a>
                ) : (
                  <span className="text-[0.65rem] tracking-[0.14em] uppercase text-neutral-300">
                    Private
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
