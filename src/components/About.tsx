import { ArrowUpRight, Eye, Download } from 'lucide-react';

interface AboutProps {
  onOpenResume?: () => void;
}

export default function About({ onOpenResume }: AboutProps) {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-3">
            <span>02</span>
            <span className="text-[#8E8A80]">/</span>
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

            <div className="space-y-4 text-base sm:text-lg text-[#C8C4BA] leading-relaxed font-normal">
              <p>
                I am <strong className="text-[#F6F4EE] font-medium">Faith Abejide Tijesunimi</strong>, a full-stack developer and Mechatronics Engineering student at the Federal University of Technology, Minna. Over the past two years of client project delivery, I have focused on engineering robust digital solutions that solve real problems.
              </p>
              <p>
                My toolkit centers on the MERN stack alongside TypeScript, Firebase, PostgreSQL, Supabase, and Drizzle ORM. Rather than chasing ephemeral hype, I prioritize maintainable architectures, strict type safety, responsive performance, and thoughtful user interactions.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-5 sm:gap-6 text-xs font-mono text-[#9E988D]">
              <span className="text-[#E2DFD7]">LAGOS &amp; MINNA, NIGERIA</span>
              <span>·</span>
              <span className="text-[#2FA499]">REMOTE WORLDWIDE</span>
              <span>·</span>
              <a
                href="#contact"
                className="text-[#2FA499] hover:text-[#3DB8AC] inline-flex items-center gap-1 transition-colors"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Curriculum Vitae Actions */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
              {onOpenResume && (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="min-h-[42px] inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#0D0F11] bg-[#F6F4EE] hover:bg-[#2FA499] hover:text-[#0D0F11] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Résumé</span>
                </button>
              )}

              <a
                href="/resume.pdf"
                download="Faith_Abejide_Resume.pdf"
                className="min-h-[42px] inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#F6F4EE] bg-[#14171A] hover:bg-[#1B1F24] border border-white/[0.12] hover:border-[#2FA499]/60 transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
              >
                <Download className="w-3.5 h-3.5 text-[#2FA499]" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3 Core Working Principles (5 cols) */}
          <div className="lg:col-span-5 bg-[#14171A] border border-white/[0.1] p-7 sm:p-8 rounded-sm space-y-6 shadow-lg">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#2FA499] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2FA499]" />
              <span>Core Engineering Principles</span>
            </h3>

            <div className="space-y-5">
              <div className="pb-5 border-b border-white/[0.06]">
                <h4 className="font-medium text-[#F6F4EE] mb-1.5 text-base">
                  01. End-to-End Ownership
                </h4>
                <p className="text-sm text-[#C8C4BA] leading-relaxed">
                  Connecting visual components directly to backend APIs and schema designs, ensuring zero communication breakdown between layers.
                </p>
              </div>

              <div className="pb-5 border-b border-white/[0.06]">
                <h4 className="font-medium text-[#F6F4EE] mb-1.5 text-base">
                  02. Readable, Maintainable Code
                </h4>
                <p className="text-sm text-[#C8C4BA] leading-relaxed">
                  Strict TypeScript types, defensive error boundaries, and self-documenting modular architecture that remains easy to maintain as systems scale.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-[#F6F4EE] mb-1.5 text-base">
                  03. Tactile Performance &amp; Usability
                </h4>
                <p className="text-sm text-[#C8C4BA] leading-relaxed">
                  Fast page rendering, accessible touch targets, and resilient state synchronization on both desktop and mobile networks.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
