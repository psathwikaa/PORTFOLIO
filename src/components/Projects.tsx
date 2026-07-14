import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";

export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">
      <h2 className="text-xs font-bold uppercase tracking-widest text-sage mb-8 flex items-center gap-4">
        <span>02. Projects</span>
        <span className="h-px bg-zinc-800/60 flex-1" />
      </h2>

      <div className="space-y-10">
        {/* Featured Thesis Project Card */}
        <div className="group relative grid pb-1 pl-4 lg:pl-6 border-l-2 border-sage/40 hover:border-sage transition-all sm:grid-cols-8 sm:gap-6 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          {/* Background card highlight on hover */}
          <div className="absolute -inset-y-4 z-0 hidden rounded transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-charcoal-light/25 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] lg:group-hover:drop-shadow-lg -left-4 right-0" />
          
          <header className="z-10 mb-2 mt-1 text-xs font-mono text-zinc-550 sm:col-span-2">
            June 2026
          </header>

          <div className="z-10 sm:col-span-6">
            <h3 className="font-semibold leading-snug text-cream">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm md:text-base">Gesture Detection Quality Framework — 2Tango Signs</span>
                <span className="inline-flex items-center rounded bg-sage/10 px-2 py-0.5 text-[10px] font-mono font-medium text-sage border border-sage/20">
                  Thesis Project · June 2026
                </span>
              </div>
              <div className="text-zinc-550 text-xs font-mono mt-1">
                Master's Thesis · ISO/IEC 25010:2023 · AAC Systems · Blekinge Institute of Technology
              </div>
            </h3>

            <p className="mt-3 text-xs md:text-sm text-zinc-400 leading-relaxed">
              I built a domain-specific quality evaluation framework for gesture-based AAC systems — the kind of software that neurodiverse users depend on to communicate. Generic quality standards weren't designed for systems where a failed detection isn't a bug, it's a missed message. So I adapted three characteristics of ISO/IEC 25010:2023 into 8 measurable metrics, ran 115 controlled trials on a real prototype called 2Tango Signs, and produced a verified quality profile. Every threshold was locked before data collection. Every number was independently verified.
            </p>

            {/* Metric Tags */}
            <div className="mt-4 flex flex-wrap gap-2" aria-label="Key results">
              <div className="rounded bg-sage/5 px-2 py-0.5 text-xs font-mono font-medium text-sage border border-sage/10">
                90% Detection Success Rate → Acceptable
              </div>
              <div className="rounded bg-sage/5 px-2 py-0.5 text-xs font-mono font-medium text-sage border border-sage/10">
                56.5ms Average Latency → Acceptable
              </div>
              <div className="rounded bg-sage/5 px-2 py-0.5 text-xs font-mono font-medium text-sage border border-sage/10">
                96.67% Hand Count Correctness → Acceptable
              </div>
              <div className="rounded bg-red-950/10 px-2 py-0.5 text-xs font-mono font-medium text-red-400 border border-red-900/20">
                20% False Positive Rate → Not Acceptable (critical finding)
              </div>
              <div className="rounded bg-charcoal border border-zinc-800/80 px-2 py-0.5 text-xs font-mono font-medium text-zinc-500">
                115 trials · 8 metrics · 3 characteristics
              </div>
            </div>

            {/* Links */}
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-zinc-500 text-xs font-mono">
              <a
                href="https://2tango-quality-report.vercel.app"
                target="_blank"
                rel="noreferrer noopener"
                className="relative z-30 inline-flex items-center gap-1 hover:text-cream transition-colors duration-150"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
                <span>View Quality Report</span>
              </a>
              <a
                href="https://2tango-framework.tiiny.host"
                target="_blank"
                rel="noreferrer noopener"
                className="relative z-30 inline-flex items-center gap-1 hover:text-cream transition-colors duration-150"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
                <span>View Framework Guide</span>
              </a>
              <a
                href="https://github.com/psathwikaa"
                target="_blank"
                rel="noreferrer noopener"
                className="relative z-30 inline-flex items-center gap-1 hover:text-cream transition-colors duration-150"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Skill Tags */}
            <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
              {["Python", "ISO/IEC 25010:2023", "Design Science Research", "JavaScript", "Chart.js", "Next.js", "Vercel", "Claude API", "Google Gemini API", "HTML/CSS"].map((tech, techIndex) => (
                <li key={techIndex} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded bg-sage/5 px-2.5 py-0.5 text-xs font-mono font-medium leading-5 text-sage border border-sage/10">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-6 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            {/* Background card highlight on hover */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-charcoal-light/25 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] lg:group-hover:drop-shadow-lg" />
            
            {/* Project Period / Date */}
            <header className="z-10 mb-2 mt-1 text-xs font-mono text-zinc-500 sm:col-span-2">
              {project.period}
            </header>

            {/* Project Details */}
            <div className="z-10 sm:col-span-6">
              <h3 className="font-semibold leading-snug text-cream">
                <div>
                  {project.github ? (
                    <a
                      className="inline-flex items-baseline font-semibold leading-tight text-cream hover:text-sage focus-visible:text-sage group/link text-sm md:text-base transition-colors"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-4 z-20 hidden rounded md:-inset-x-6 lg:block" />
                      <span>
                        {project.title}
                        <span className="inline-block">
                          <ArrowUpRight className="ml-1 inline-block h-3.5 w-3.5 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none" />
                        </span>
                      </span>
                    </a>
                  ) : (
                    <span className="text-sm md:text-base">{project.title}</span>
                  )}
                </div>
                {project.association && (
                  <div className="text-zinc-500 text-xs font-mono mt-1">
                    {project.association}
                  </div>
                )}
              </h3>

              <p className="mt-2 text-xs md:text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>

              {/* GitHub Link */}
              {project.github && (
                <div className="mt-3 flex gap-3 text-zinc-500 text-xs font-mono">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="relative z-30 inline-flex items-center gap-1.5 hover:text-cream transition-colors duration-150"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Repository / Pull Request</span>
                  </a>
                </div>
              )}

              {/* Skill Tags */}
              <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded bg-sage/5 px-2.5 py-0.5 text-xs font-mono font-medium leading-5 text-sage border border-sage/10">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
