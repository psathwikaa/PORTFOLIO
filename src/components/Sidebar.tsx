"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills & Tools", id: "skills" },
  { label: "Currently Building", id: "livelog" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for detection threshold

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20">
      <div>
        {/* Glowing Initials circle for desktop sidebar */}
        <div className="hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-charcoal-light border border-sage/40 shadow-[0_0_15px_rgba(141,168,155,0.15)] font-mono text-base font-bold tracking-wider text-sage select-none mb-6">
          SS
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-cream">
          <a href="#">Siva Sathwikaa P</a>
        </h1>
        <h2 className="mt-1.5 text-sm font-semibold tracking-wider text-sage uppercase font-mono">
          Agentic AI Engineer
        </h2>
        <p className="mt-4 max-w-[260px] text-xs leading-relaxed text-zinc-500">
          I build systems that think. Sharp on code, serious about AI. Always building.
        </p>

        {/* Desktop Navigation */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-12 w-max">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="mb-3">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-center py-1 text-left"
                  >
                    <span
                      className={`mr-3 h-px transition-all duration-300 ${
                        isActive
                          ? "w-12 bg-cream"
                          : "w-6 bg-zinc-700 group-hover:w-12 group-hover:bg-zinc-500"
                      }`}
                    />
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest font-mono transition-colors duration-300 ${
                        isActive
                          ? "text-cream"
                          : "text-zinc-650 group-hover:text-zinc-400"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social Links */}
      <ul className="mt-8 flex items-center gap-4 lg:mt-0" aria-label="Social media">
        <li>
          <a
            className="block text-zinc-500 hover:text-cream transition-colors duration-200"
            href="https://github.com/psathwikaa"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            className="block text-zinc-500 hover:text-cream transition-colors duration-200"
            href="https://www.linkedin.com/in/siva-sathwikaa5/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </a>
        </li>
        <li>
          <a
            className="block text-zinc-500 hover:text-cream transition-colors duration-200"
            href="mailto:pssathwikaa5@gmail.com"
            aria-label="Email Siva Sathwikaa P"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-5 w-5" />
          </a>
        </li>
      </ul>
    </header>
  );
}
