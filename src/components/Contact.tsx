import { Mail, ArrowRight } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">
      <h2 className="text-xs font-bold uppercase tracking-widest text-sage mb-8 flex items-center gap-4">
        <span>06. Contact</span>
        <span className="h-px bg-zinc-800/60 flex-1" />
      </h2>

      <div className="max-w-xl text-zinc-400 text-sm md:text-base leading-relaxed space-y-6">
        <p>
          I am actively looking for **early-career or graduate roles** in Agentic AI Engineering, machine learning systems, or software engineering. If you are building autonomous systems, working on agent architectures, or just want to chat about AI, let’s connect!
        </p>

        <div className="pt-2">
          <a
            href="mailto:pssathwikaa5@gmail.com"
            className="inline-flex items-center gap-2 rounded bg-sage px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-charcoal-dark hover:bg-cream transition-colors duration-200"
          >
            <span>Send an Email</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-zinc-900 text-xs font-mono">
          <a
            href="mailto:pssathwikaa5@gmail.com"
            className="flex items-center gap-1.5 hover:text-cream transition-colors"
          >
            <Mail className="h-4 w-4 text-sage" />
            <span>pssathwikaa5@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/siva-sathwikaa5/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 hover:text-cream transition-colors"
          >
            <Linkedin className="h-4 w-4 text-sage" />
            <span>linkedin.com/in/siva-sathwikaa5</span>
          </a>
          <a
            href="https://github.com/psathwikaa"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 hover:text-cream transition-colors"
          >
            <Github className="h-4 w-4 text-sage" />
            <span>github.com/psathwikaa</span>
          </a>
        </div>
      </div>
    </section>
  );
}
