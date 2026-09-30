import { processData } from '../data/processData';

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 lg:mb-20">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-3">
            <span>04</span>
            <span className="text-[#6E6960]">/</span>
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F6F4EE] tracking-tight">
            How I approach each <span className="font-serif italic text-[#F6F4EE]">engagement</span>.
          </h2>
          <p className="text-sm sm:text-base text-[#A8A398] mt-4 leading-relaxed font-normal">
            A clear, dependable progression from early scoping through to deployment, designed to keep code clean and delivery on schedule.
          </p>
        </div>

        {/* Linear Step Sequence: Simple, Calm, Zero Gimmicks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {processData.map((step, idx) => (
            <div
              key={step.id}
              className="bg-[#14171A] border border-white/[0.08] hover:border-white/[0.16] p-7 rounded-sm flex flex-col justify-between transition-colors duration-200 group"
            >
              <div>
                {/* Step Marker: Clean number + small teal accent */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2FA499]" />
                    <span className="font-mono text-xs text-[#2FA499] tracking-widest uppercase">
                      Stage 0{step.id}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#6E6960]">
                    0{step.id} / 0{processData.length}
                  </span>
                </div>

                {/* Stage Title */}
                <h3 className="text-xl font-light text-[#F6F4EE] tracking-tight mb-2.5 group-hover:text-[#2FA499] transition-colors">
                  {step.title}
                </h3>

                {/* Concise Description */}
                <p className="text-sm text-[#A8A398] leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Focus Milestone / Key Output */}
              {step.detail && (
                <div className="pt-4 border-t border-white/[0.06] text-xs">
                  <p className="text-[10px] font-mono tracking-widest uppercase text-[#6E6960] mb-1">
                    Primary Output
                  </p>
                  <p className="text-[#D5D1C7] leading-relaxed font-normal">
                    {step.detail}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quiet Footnote */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#6E6960]">
          <span>STRUCTURED DEVELOPMENT LIFECYCLE</span>
          <span>SYSTEMATIC EXECUTION · MEASURED DELIVERY</span>
        </div>

      </div>
    </section>
  );
}
