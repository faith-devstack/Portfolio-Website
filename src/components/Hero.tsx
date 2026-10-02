import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Twitter, Eye, Download, FileText } from 'lucide-react';

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Subtle restrained animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.5,
        delay: shouldReduceMotion ? 0 : custom * 0.08,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-14 lg:pt-36 lg:pb-16 bg-[#0D0F11]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Editorial Introduction & Action Hierarchy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Status & Identity Eyebrow */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase text-[#B8B4AA] mb-6 sm:mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-[#2FA499] animate-pulse" />
              <span className="text-[#F6F4EE] font-medium">Faith Abejide</span>
              <span className="text-[#8E8A80]">·</span>
              <span className="text-[#2FA499]">Full-Stack Web Developer</span>
            </motion.div>

            {/* Editorial Headline with Breathing Room */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-4xl sm:text-5xl lg:text-[3.65rem] font-light text-[#F6F4EE] leading-[1.12] tracking-tight mb-7 sm:mb-8 text-balance"
            >
              Building{' '}
              <span className="font-serif italic font-normal text-[#F6F4EE] underline decoration-[#2FA499]/40 decoration-1 underline-offset-8">
                thoughtful, resilient
              </span>{' '}
              digital products and scalable full-stack web applications.
            </motion.h1>

            {/* Clear, High-Contrast Introduction */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-base sm:text-lg text-[#C8C4BA] leading-relaxed max-w-xl mb-9 sm:mb-10 font-normal"
            >
              Engineering performant client interfaces in React and Next.js, robust backend REST APIs, and structured data systems with clean architectural discipline.
            </motion.p>

            {/* Primary Calls to Action — Clearly separated and easy to locate */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="space-y-4 mb-10 sm:mb-12"
            >
              {/* Row 1: Primary Work & Contact Actions */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#projects"
                  className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0D0F11] bg-[#F6F4EE] hover:bg-[#2FA499] hover:text-[#0D0F11] transition-all rounded-sm shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                >
                  <span>View Selected Work</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F6F4EE] bg-[#14171A] hover:bg-[#1C2026] border border-white/[0.16] hover:border-[#2FA499] transition-all rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-4 h-4 text-[#2FA499]" />
                </a>
              </div>

              {/* Row 2: Secondary Résumé & Curriculum Vitae Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9E988D] mr-1 hidden sm:inline">
                  Credentials:
                </span>

                {onOpenResume && (
                  <button
                    type="button"
                    onClick={onOpenResume}
                    className="min-h-[38px] inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#E2DFD7] hover:text-[#F6F4EE] bg-[#14171A]/80 hover:bg-[#1B1F24] border border-white/[0.1] hover:border-white/[0.22] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                    aria-label="View Curriculum Vitae in interactive viewer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#2FA499]" />
                    <span>View Résumé</span>
                  </button>
                )}

                <a
                  href="/resume.pdf"
                  download="Faith_Abejide_Resume.pdf"
                  className="min-h-[38px] inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#B8B4AA] hover:text-[#F6F4EE] bg-[#0D0F11] hover:bg-[#14171A] border border-white/[0.1] hover:border-white/[0.22] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  aria-label="Download Faith Abejide Resume PDF"
                >
                  <Download className="w-3.5 h-3.5 text-[#2FA499]" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </motion.div>

            {/* Social Footprint (Unboxed with verified handles) */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="flex flex-wrap items-center gap-5 sm:gap-6 pt-6 border-t border-white/[0.1] text-xs font-medium uppercase tracking-wider text-[#B8B4AA]"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F6F4EE] transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                aria-label="Faith Abejide on GitHub"
              >
                <Github className="w-3.5 h-3.5 text-[#2FA499]" />
                <span>GitHub</span>
              </a>
              <span className="text-white/[0.14]">·</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F6F4EE] transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                aria-label="Faith Abejide on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#2FA499]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-white/[0.14]">·</span>
              <a
                href="https://x.com/faithbuilds001"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F6F4EE] transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                aria-label="Faith Abejide on X (@faithbuilds001)"
              >
                <Twitter className="w-3.5 h-3.5 text-[#2FA499]" />
                <span>@faithbuilds001</span>
              </a>
              <span className="text-white/[0.14]">·</span>
              <a
                href="mailto:abejidefaith110@gmail.com"
                className="hover:text-[#F6F4EE] transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                aria-label="Send email to abejidefaith110@gmail.com"
              >
                <Mail className="w-3.5 h-3.5 text-[#2FA499]" />
                <span>Email</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Responsive Visual Area (5 cols) — Aligned with text on desktop, naturally stacked on mobile */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="w-full max-w-sm sm:max-w-md"
            >
              {/* Media Container: 4:5 aspect ratio, clean hairline border, blends into canvas */}
              <div
                role="region"
                aria-label="Visual Portrait & Media Area"
                className="relative aspect-[4/5] w-full bg-[#14171A] border border-white/[0.14] rounded-sm overflow-hidden flex flex-col justify-between group shadow-xl"
              >
                {/* Architectural Framing Accents */}
                <div className="absolute top-2.5 left-2.5 text-[10px] font-mono text-[#9E988D] pointer-events-none z-20 bg-[#0D0F11]/80 px-2 py-0.5 rounded-xs border border-white/[0.08]">
                  REF.01 // FAITH ABEJIDE
                </div>
                <div className="absolute top-2.5 right-2.5 text-[10px] font-mono text-[#9E988D] pointer-events-none z-20 bg-[#0D0F11]/80 px-2 py-0.5 rounded-xs border border-white/[0.08]">
                  CANVAS 4:5
                </div>

                {/* Portrait Slot */}
                {!imageError ? (
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/profile.png"
                      alt="Faith Abejide — Full-Stack Developer"
                      className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03] transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                      onError={() => setImageError(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F11]/85 via-[#0D0F11]/15 to-transparent pointer-events-none" />
                  </div>
                ) : (
                  /* Reserved Visual Canvas Fallback */
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#14171A]">
                    <div className="w-20 h-20 rounded-full border border-white/[0.1] bg-[#1B1F24] flex items-center justify-center mb-6">
                      <span className="font-serif italic text-3xl text-[#F6F4EE]">FA</span>
                    </div>
                    <h3 className="font-serif text-xl text-[#F6F4EE] mb-2">Visual Media Area</h3>
                    <p className="text-xs text-[#B8B4AA] max-w-xs leading-relaxed font-normal">
                      Configured for portrait photography or scroll-controlled video playback.
                    </p>
                    <div className="mt-5 text-[10px] font-mono tracking-wider uppercase text-[#2FA499]">
                      Media Container Ready
                    </div>
                  </div>
                )}

                {/* Bottom Spec Strip */}
                <div className="relative z-20 p-3.5 sm:p-4 border-t border-white/[0.1] bg-[#0D0F11]/92 backdrop-blur-sm flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2FA499]" />
                    <span className="text-[#F6F4EE] font-medium">Faith Abejide</span>
                  </div>
                  <span className="text-[#9E988D]">Full-Stack Web</span>
                </div>
              </div>

              {/* Sub-label with increased contrast */}
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#9E988D] px-1">
                <span>PORTRAIT &amp; MEDIA CANVAS</span>
                <span className="text-[#2FA499]">AVAILABLE WORLDWIDE</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Refined Scroll Cue */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-8 sm:pt-10">
        <a
          href="#projects"
          className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#9E988D] hover:text-[#F6F4EE] transition-colors"
          aria-label="Scroll down to Selected Work section"
        >
          <span className="w-4 h-7 rounded-full border border-white/[0.18] group-hover:border-[#2FA499] flex items-start justify-center p-1 transition-colors">
            {!shouldReduceMotion ? (
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="w-1 h-1 rounded-full bg-[#2FA499]"
              />
            ) : (
              <span className="w-1 h-1 rounded-full bg-[#2FA499]" />
            )}
          </span>
          <span className="tracking-widest">Scroll to explore</span>
        </a>
      </div>
    </section>
  );
}
