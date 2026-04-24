export const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
    <div className="max-w-5xl mx-auto px-8 h-[60px] flex items-center justify-between">
      <span className="font-syne text-[1.1rem] font-bold tracking-tight">
        Kenzo Castillo
      </span>
      <div className="flex gap-8 items-center">
        {["Skills", "Projects", "Contact"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-[0.72rem] tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors no-underline"
          >
            {l}
          </a>
        ))}
        <a
          href="#contact"
          className="text-[0.72rem] tracking-widest uppercase bg-neutral-900 text-white px-5 py-2.5 font-medium hover:bg-neutral-700 transition-colors no-underline"
        >
          Hire Me
        </a>
      </div>
    </div>
  </nav>
);
