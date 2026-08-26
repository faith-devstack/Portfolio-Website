import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="hero">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-card border border-cyber-border mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
                <span className="text-xs font-mono text-cyber-cyan tracking-wide uppercase">System Online</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
                Building Scalable <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-indigo-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  Web Applications
                </span> <br/>
                & Digital Products
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
                Hi, I'm <strong className="text-white">Faith Abejide</strong>. A full-stack web developer crafting high-performance, responsive, and user-friendly digital experiences.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#projects" 
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-cyber-cyan text-cyber-bg font-bold hover:bg-cyber-cyan-glow transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-xl bg-cyber-card border border-cyber-border text-white hover:border-cyber-cyan/50 hover:bg-cyber-card/80 transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <SocialLink href="#" icon={<Github />} label="GitHub" />
              <SocialLink href="#" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="#" icon={<Twitter />} label="Twitter" />
              <SocialLink href="mailto:abejidefaith110@gmail.com" icon={<Mail />} label="Email" />
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] w-full flex items-center justify-center mt-12 lg:mt-0"
          >
            {/* Glowing Holographic Backdrop */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[1px] border-cyber-cyan/30 bg-cyber-cyan/5 shadow-[0_0_100px_rgba(6,182,212,0.2)] animate-[spin_10s_linear_infinite] border-dashed" />
              <div className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full border border-indigo-500/30 bg-indigo-500/5 shadow-[0_0_80px_rgba(99,102,241,0.2)] animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            {/* Out-of-frame Image Container */}
            <div className="relative w-full max-w-lg z-10 flex justify-center items-end h-full">
              {/* Using a profile image with a fade mask at the bottom */}
              <img 
                src="/profile.png" 
                alt="Faith Abejide Portrait" 
                className="relative w-full h-auto max-h-[600px] object-contain drop-shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-700 z-10"
                style={{ 
                  WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
                }}
                onError={(e) => {
                  // Fallback if /profile.png is missing. Replace this URL when you upload your image.
                  e.currentTarget.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800";
                  e.currentTarget.style.WebkitMaskImage = 'linear-gradient(to bottom, black 80%, transparent 100%)';
                  e.currentTarget.className = "relative w-full max-w-sm h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 rounded-3xl z-10";
                }}
              />
              
              {/* Floating Stat Badges - Repositioned for the frameless look */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 lg:-left-12 top-1/4 p-4 rounded-xl bg-cyber-bg/80 backdrop-blur-md border border-cyber-border shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center gap-4 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-cyber-cyan/20 flex items-center justify-center border border-cyber-cyan/30">
                  <span className="font-bold text-cyber-cyan">3+</span>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">Years Exp.</p>
                  <p className="text-sm font-semibold text-white">Full-Stack Dev</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute right-0 lg:-right-8 bottom-1/4 p-4 rounded-xl bg-cyber-bg/80 backdrop-blur-md border border-cyber-border shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center gap-4 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                  <span className="font-bold text-indigo-400">10+</span>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono uppercase tracking-wider">Projects</p>
                  <p className="text-sm font-semibold text-white">Web Apps</p>
                </div>
              </motion.div>
              
              {/* New Floating Code Badge */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute right-4 md:right-10 top-10 p-3 rounded-xl bg-cyber-card/60 backdrop-blur-md border border-cyber-cyan/30 shadow-[0_8px_32px_rgba(6,182,212,0.15)] flex flex-col items-center gap-1 z-20"
              >
                <div className="text-cyber-cyan font-mono text-xs flex items-center gap-2">
                  <span className="text-lg font-bold">{'</>'}</span> Clean Code
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href}
      aria-label={label}
      className="p-3 rounded-full bg-cyber-card border border-cyber-border text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}
