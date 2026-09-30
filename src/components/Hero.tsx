import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Subtle restrained animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.55,
        delay: shouldReduceMotion ? 0 : custom * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 lg:pt-40 lg:pb-16 bg-[#0D0F11]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Editorial Introduction (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Short Eyebrow */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase text-[#A8A398] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2FA499]" />
              <span>Faith Abejide · Full-Stack Developer</span>
            </motion.div>

            {/* Refined Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F6F4EE] leading-[1.1] tracking-tight mb-7 text-balance"
            >
              Building{' '}
              <span className="font-serif italic font-normal text-[#F6F4EE] underline decoration-[#2FA499]/35 decoration-1 underline-offset-8">
                thoughtful, reliable
              </span>{' '}
              digital products and scalable web systems.
            </motion.h1>

            {/* Concise Introduction */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-base sm:text-lg text-[#A8A398] leading-relaxed max-w-xl mb-10 font-normal"
            >
              I am a web developer focused on full-stack architecture—crafting performant client interfaces in React and Next.js, robust backend REST APIs, and structured data layers that endure.
            </motion.p>

            {/* Two Clear Actions */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0D0F11] bg-[#F6F4EE] hover:bg-[#2FA499] hover:text-[#0D0F11] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F6F4EE] bg-[#14171A] hover:bg-[#1B1F24] border border-white/[0.12] hover:border-[#2FA499]/60 transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#2FA499]" />
              </a>
            </motion.div>

            {/* Social Footprint (Unboxed) */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="flex items-center gap-6 pt-6 border-t border-white/[0.08] text-xs font-medium uppercase tracking-wider text-[#A8A398]"
            >
              <a
                href="#"
                className="hover:text-[#F6F4EE] transition-colors flex items-center gap-1.5"
                aria-label="Faith Abejide on GitHub"
              >
                <Github className="w-3.5 h-3.5 text-[#2FA499]" />
                <span>GitHub</span>
              </a>
              <span className="text-white/[0.1]">·</span>
              <a
                href="#"
                className="hover:text-[#F6F4EE] transition-colors flex items-center gap-1.5"
                aria-label="Faith Abejide on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#2FA499]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-white/[0.1]">·</span>
              <a
                href="#"
                className="hover:text-[#F6F4EE] transition-colors flex items-center gap-1.5"
                aria-label="Faith Abejide on Twitter / X"
              >
                <Twitter className="w-3.5 h-3.5 text-[#2FA499]" />
                <span>Twitter</span>
              </a>
              <span className="text-white/[0.1]">·</span>
              <a
                href="mailto:abejidefaith110@gmail.com"
                className="hover:text-[#F6F4EE] transition-colors flex items-center gap-1.5"
                aria-label="Send email to abejidefaith110@gmail.com"
              >
                <Mail className="w-3.5 h-3.5 text-[#2FA499]" />
                <span>Email</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Responsive Visual Area (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="w-full max-w-md"
            >
              {/* Media Container: 4:5 aspect ratio, clean hairline border, blends into canvas */}
              <div
                role="region"
                aria-label="Visual Portrait & Media Area"
                className="relative aspect-[4/5] w-full bg-[#14171A] border border-white/[0.12] rounded-sm overflow-hidden flex flex-col justify-between group"
              >
                {/* Architectural Framing Accents */}
                <div className="absolute top-2 left-2 text-[9px] font-mono text-[#6E6960] pointer-events-none z-20">
                  REF.01 // FAITH ABEJIDE
                </div>
                <div className="absolute top-2 right-2 text-[9px] font-mono text-[#6E6960] pointer-events-none z-20">
                  VISUAL CANVAS 4:5
                </div>

                {/* Portrait Slot */}
                {!imageError ? (
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/profile.png"
                      alt="Faith Abejide — Full-Stack Developer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                      onError={() => setImageError(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F11]/75 via-transparent to-transparent pointer-events-none" />
                  </div>
                ) : (
                  /* Reserved Visual Canvas Fallback */
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#14171A]">
                    <div className="w-20 h-20 rounded-full border border-white/[0.1] bg-[#1B1F24] flex items-center justify-center mb-6">
                      <span className="font-serif italic text-3xl text-[#F6F4EE]">FA</span>
                    </div>
                    <h3 className="font-serif text-xl text-[#F6F4EE] mb-2">Visual Media Area</h3>
                    <p className="text-xs text-[#A8A398] max-w-xs leading-relaxed font-normal">
                      Configured for portrait photography or scroll-controlled video playback.
                    </p>
                    <div className="mt-5 text-[10px] font-mono tracking-wider uppercase text-[#2FA499]">
                      Media Container Ready
                    </div>
                  </div>
                )}

                {/* Bottom Spec Strip */}
                <div className="relative z-20 p-3.5 border-t border-white/[0.08] bg-[#0D0F11]/90 backdrop-blur-sm flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2FA499]" />
                    <span className="text-[#F6F4EE]">Faith Abejide</span>
                  </div>
                  <span className="text-[#6E6960]">Full-Stack Web</span>
                </div>
              </div>

              {/* Sub-label */}
              <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-[#6E6960] px-1">
                <span>PORTRAIT & VIDEO CANVAS</span>
                <span>AVAILABLE WORLDWIDE</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Small Refined Scroll Cue */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-8">
        <a
          href="#projects"
          className="group inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[#6E6960] hover:text-[#F6F4EE] transition-colors"
          aria-label="Scroll down to Selected Work section"
        >
          <span className="w-4 h-7 rounded-full border border-white/[0.15] group-hover:border-[#2FA499] flex items-start justify-center p-1 transition-colors">
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
