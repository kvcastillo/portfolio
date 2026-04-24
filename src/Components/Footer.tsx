export const Footer = () => (
  <footer className="border-t border-neutral-200 py-7 max-w-5xl mx-auto px-8 flex justify-between items-center w-full">
    <span className="font-syne text-[1rem] font-bold tracking-tight">
      Kenzo Castillo
    </span>
    <div className="flex gap-7">
      {[
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/ken-castillo-64901a373/",
        },
        { label: "GitHub", href: "https://github.com/kvcastillo" },
        { label: "Email", href: "mailto:kenzovcastillo@gmail.com" },
      ].map((l) => (
        <a
          key={l.label}
          href={l.href}
          target={l.label !== "Email" ? "_blank" : undefined}
          rel="noreferrer"
          className="text-[0.68rem] tracking-[0.14em] uppercase text-neutral-400 hover:text-neutral-900 transition-colors no-underline"
        >
          {l.label}
        </a>
      ))}
    </div>
    <span className="text-[0.65rem] tracking-wider text-neutral-300">
      © 2026 Kenzo Castillo
    </span>
  </footer>
);
