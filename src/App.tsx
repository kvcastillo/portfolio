// ─── APP ──────────────────────────────────────────────────────────────────────

import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Projects } from "./Components/Project";
import { Skills } from "./Components/Skills";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
