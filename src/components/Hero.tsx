"use client";

import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Hero() {
  return (
    <section className="mb-12 lg:mb-24 scroll-mt-24 lg:hidden">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-charcoal-light border border-sage/40 shadow-[0_0_15px_rgba(141,168,155,0.2)] font-mono text-xl font-bold tracking-wider text-sage select-none">
          SS
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-cream">
            Siva Sathwikaa P
          </h1>
          <p className="text-sm font-medium text-sage">
            Agentic AI Engineer
          </p>
        </div>
      </div>
      
      <p className="text-zinc-400 leading-relaxed text-sm">
        I build systems that think. Sharp on code, serious about AI. I'm a software engineering graduate from BTH Sweden who fell hard for AI. Creative, confident, and curious, I specialize in building, breaking, and understanding agentic systems.
      </p>

      <div className="mt-4 flex items-center gap-4">
        <a
          href="https://github.com/psathwikaa"
          target="_blank"
          rel="noreferrer noopener"
          className="text-zinc-400 hover:text-cream transition-colors duration-200"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/siva-sathwikaa5/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-zinc-400 hover:text-cream transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:pssathwikaa5@gmail.com"
          className="text-zinc-400 hover:text-cream transition-colors duration-200"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
