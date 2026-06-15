export default function Education() {
  const educationItems = [
    {
      period: "2025 – 2026",
      degree: "MSc in Software Engineering",
      institution: "Blekinge Institute of Technology (BTH)",
      location: "Karlskrona, Sweden",
      details: "Focusing on Software Architecture, Cloud Computing, Software Quality, and Agentic AI applications. Currently completing the degree project in collaboration with the Neurodiversity Foundation."
    },
    {
      period: "2019 – 2024",
      degree: "BTech in Computer Science Engineering",
      institution: "Jawaharlal Nehru Technological University (JNTU)",
      location: "Hyderabad, India",
      details: "Completed core studies in Algorithms, Database Systems, Computer Networks, and Machine Learning. Conducted independent deep learning research for agricultural applications."
    }
  ];

  return (
    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">
      <h2 className="text-xs font-bold uppercase tracking-widest text-sage mb-8 flex items-center gap-4">
        <span>05. Education</span>
        <span className="h-px bg-zinc-800/60 flex-1" />
      </h2>

      <div className="relative border-l border-zinc-800/80 ml-3 pl-6 space-y-10">
        {educationItems.map((edu, index) => (
          <div key={index} className="relative group">
            {/* Timeline marker */}
            <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-zinc-700 bg-charcoal-dark transition-all duration-300 group-hover:border-sage group-hover:scale-125" />

            <div className="mb-1 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              {edu.period}
            </div>

            <h3 className="font-semibold text-cream text-sm md:text-base leading-snug">
              {edu.degree}
            </h3>
            
            <div className="text-sage text-xs font-mono mt-0.5">
              {edu.institution} • {edu.location}
            </div>

            <p className="mt-2 text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xl">
              {edu.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
