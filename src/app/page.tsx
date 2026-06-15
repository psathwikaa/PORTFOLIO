import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import LiveLog from "@/components/LiveLog";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 z-10">
      
      {/* Muted Background Glow Blobs for elegant color pops */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[5%] -left-[10%] h-[500px] w-[500px] rounded-full bg-sage/12 filter blur-[120px] opacity-70" />
        <div className="absolute top-[40%] right-[-10%] h-[600px] w-[600px] rounded-full bg-accent-pop/8 filter blur-[140px] opacity-60" />
        <div className="absolute bottom-[5%] left-[10%] h-[500px] w-[500px] rounded-full bg-sage/10 filter blur-[120px] opacity-75" />
      </div>

      <div className="relative lg:flex lg:justify-between lg:gap-4 z-10">
        {/* Left Column (Sticky Sidebar on Desktop) */}
        <Sidebar />

        {/* Right Column (Scroll Content) */}
        <main className="pt-12 lg:w-1/2 lg:py-20 space-y-16 lg:space-y-0">
          
          {/* Desktop Avatar Header */}
          <div className="hidden lg:flex items-center gap-3.5 mb-16 select-none">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-charcoal-light border border-sage/30 shadow-[0_0_10px_rgba(141,168,155,0.15)] font-mono text-sm font-bold tracking-wider text-sage">
              SS
            </div>
            <div className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest font-bold">
              Portfolio Index
            </div>
          </div>

          {/* Hero Section (Visible on Mobile Only) */}
          <Hero />

          {/* Sections */}
          <About />
          <Projects />
          <Skills />
          <LiveLog />
          <Education />
          <Contact />
        </main>
      </div>

      {/* Floating Chatbot Widget */}
      <Chatbot />
    </div>
  );
}
