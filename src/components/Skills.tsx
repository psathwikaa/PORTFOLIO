import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">
      <h2 className="text-xs font-bold uppercase tracking-widest text-sage mb-8 flex items-center gap-4">
        <span>03. Skills & Tools</span>
        <span className="h-px bg-zinc-800/60 flex-1" />
      </h2>

      <div className="space-y-6">
        {skillGroups.map((group, index) => {
          const isLearning = group.category.includes("Learning");
          return (
            <div key={index} className="text-sm">
              <h3 className={`font-mono text-xs tracking-wider uppercase mb-2 ${
                isLearning ? "text-accent-pop" : "text-zinc-500"
              }`}>
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <span className={`inline-block rounded px-3 py-1 text-xs font-mono border ${
                      isLearning
                        ? "bg-accent-pop/5 text-accent-pop border-accent-pop/20 shadow-[0_0_10px_rgba(223,203,181,0.05)]"
                        : "bg-charcoal border-zinc-800 text-zinc-300"
                    }`}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
