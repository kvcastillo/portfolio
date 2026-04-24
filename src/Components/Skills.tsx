import { SectionHeader } from "./SectionHeader";

export const Skills = () => {
  const SKILLS = [
    {
      label: "Frontend",
      items: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    },
    {
      label: "Backend",
      items: [
        "Node.js",
        "Prisma ORM",
        "PostgreSQL",
        "REST APIs",
        "NextAuth v5",
        "Java · SQL",
      ],
    },
    {
      label: "Tooling",
      items: ["Git", "Vercel", "Supabase", "CI/CD"],
    },
  ];
  return (
    <section id="skills" className="border-t border-neutral-200 py-24">
      <div className="max-w-5xl mx-auto px-8">
        <SectionHeader index="01 — Skills" title="What I work with" />

        <div className="grid grid-cols-3 border border-neutral-200">
          {SKILLS.map((col, i) => (
            <div
              key={col.label}
              className={`p-10 ${i < SKILLS.length - 1 ? "border-r border-neutral-200" : ""}`}
            >
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-7">
                {col.label}
              </p>
              <div className="flex flex-col">
                {col.items.map((s, j) => (
                  <div
                    key={s}
                    className={`py-3 text-[0.88rem] text-neutral-600 ${j < col.items.length - 1 ? "border-b border-neutral-100" : ""}`}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
