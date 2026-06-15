export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">
      <h2 className="text-xs font-bold uppercase tracking-widest text-sage mb-8 flex items-center gap-4">
        <span>01. About</span>
        <span className="h-px bg-zinc-800/60 flex-1" />
      </h2>
      <div className="text-zinc-400 space-y-4 text-sm md:text-base leading-relaxed">
        <p>
          My obsession with AI started simply: I was using models like GPT and Copilot daily during my BTech in India and MSc in Sweden. But curiosity took over. I wanted to understand how these systems actually learn, reason, and adapt. Inspired by Geoffrey Hinton's work and the rise of autonomous agents, I realized this was my calling.
        </p>
        <p>
          While my Computer Science BTech and Software Engineering MSc from BTH Sweden form my core fundamentals, my learning style is active. I don’t just read theory—I build. I learn the underlying math and architecture while writing the code. It takes patience, but building, breaking, and rebuilding gives me the deep, permanent muscle memory that you can’t get from a textbook.
        </p>
        <p>
          I am driven by the thrill of designing systems that make logical decisions independently. My goal is to work at the forefront of Agentic AI, creating robust, production-grade autonomous workflows that bridge software engineering and intelligence.
        </p>
      </div>
    </section>
  );
}
