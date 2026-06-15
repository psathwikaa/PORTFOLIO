import logs from "@/data/live-log.json";

interface LogEntry {
  date: string;
  title: string;
  status: string;
  description: string;
}

export default function LiveLog() {
  return (
    <section id="livelog" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24">
      <h2 className="text-xs font-bold uppercase tracking-widest text-sage mb-8 flex items-center gap-4">
        <span>04. Currently Building</span>
        <span className="h-px bg-zinc-800/60 flex-1" />
      </h2>

      <div className="relative border-l border-zinc-800/80 ml-3 pl-6 space-y-8">
        {(logs as LogEntry[]).map((log, index) => {
          const isInProgress = log.status.toLowerCase().includes("progress");
          return (
            <div key={index} className="relative group">
              {/* Timeline marker */}
              <div className={`absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 bg-charcoal-dark transition-all duration-300 ${
                isInProgress 
                  ? "border-accent-pop shadow-[0_0_8px_rgba(223,203,181,0.4)] group-hover:scale-125" 
                  : "border-sage shadow-[0_0_8px_rgba(141,168,155,0.4)] group-hover:scale-125"
              }`} />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-2">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  {log.date}
                </span>
                <span className={`inline-flex items-center rounded px-2.5 py-0.5 text-xs font-mono font-medium border w-fit ${
                  isInProgress
                    ? "bg-accent-pop/5 text-accent-pop border-accent-pop/20"
                    : "bg-sage/5 text-sage border-sage/20"
                }`}>
                  {log.status}
                </span>
              </div>

              <h3 className="font-semibold text-cream text-sm md:text-base mb-1">
                {log.title}
              </h3>
              
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xl">
                {log.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
