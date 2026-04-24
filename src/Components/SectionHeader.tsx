export const SectionHeader = ({ index, title }) => (
  <div className="grid grid-cols-[200px_1fr] gap-12 items-baseline pb-12 border-b border-neutral-200 mb-16">
    <span className="text-[0.68rem] tracking-[0.2em] uppercase text-neutral-300">
      {index}
    </span>
    <h2
      className="font-syne text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight leading-tight"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  </div>
);
