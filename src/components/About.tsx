import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-3">
            <span>02</span>
            <span className="text-[#6E6960]">/</span>
            <span>About</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F6F4EE] tracking-tight">
            An engineering approach to <span className="font-serif italic text-[#F6F4EE]">modern</span> web craft.
          </h2>
        </div>

        {/* 2-Column Editorial Grid: Balanced & Air-Filled */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Personal Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl font-light text-[#F6F4EE] leading-relaxed font-serif italic">
              "I build web applications with an engineer’s demand for stability and a designer’s respect for simplicity."
            </p>

            <div className="space-y-4 text-base text-[#A8A398] leading-relaxed font-normal">
              <p>
                I am <strong className="text-[#F6F4EE] font-medium">Faith Abejide</strong>, a full-stack developer based in Lagos, Nigeria, working with teams and clients worldwide. Over the past three years, my focus has been on building practical, production-ready web applications—from scalable backend APIs to polished client interfaces.
              </p>
              <p>
                Rather than chasing ephemeral trends, I concentrate on foundational engineering: writing clean TypeScript, structuring normalized databases in PostgreSQL and MongoDB, and delivering fast, accessible user experiences with React and Next.js.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs font-mono text-[#6E6960]">
              <span>LAGOS, NIGERIA</span>
              <span>·</span>
              <span>REMOTE / GLOBAL</span>
              <span>·</span>
              <a
                href="#contact"
                className="text-[#2FA499] hover:text-[#3DB8AC] inline-flex items-center gap-1 transition-colors"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Core Working Principles (5 cols) */}
          <div className="lg:col-span-5 bg-[#14171A] border border-white/[0.08] p-7 sm:p-8 rounded-sm space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#2FA499]">
              Core Principles
            </h3>

            <div className="space-y-5 text-sm">
              <div className="pb-5 border-b border-white/[0.06]">
                <h4 className="font-medium text-[#F6F4EE] mb-1 text-sm">
                  01. End-to-End Ownership
                </h4>
                <p className="text-xs text-[#A8A398] leading-relaxed">
                  Bridging UI design directly with API architecture and database models to prevent translation loss.
                </p>
              </div>

              <div className="pb-5 border-b border-white/[0.06]">
                <h4 className="font-medium text-[#F6F4EE] mb-1 text-sm">
                  02. Readable, Maintainable Code
                </h4>
                <p className="text-xs text-[#A8A398] leading-relaxed">
                  Strict TypeScript types, defensive error handling, and clean modular boundaries that scale over time.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-[#F6F4EE] mb-1 text-sm">
                  03. Tactile Performance
                </h4>
                <p className="text-xs text-[#A8A398] leading-relaxed">
                  Sub-second interactions, zero layout shifts, and mobile-friendly touch targets that feel effortless.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
