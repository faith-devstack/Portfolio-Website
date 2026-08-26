import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-bg py-12 border-t border-cyber-border text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        
        <div className="w-12 h-12 rounded-xl bg-cyber-card border border-cyber-border flex items-center justify-center mb-6">
          <span className="font-bold text-2xl text-white tracking-tighter">FA</span>
        </div>

        <div className="flex items-center gap-6 mb-8">
          <a href="#" className="text-slate-400 hover:text-cyber-cyan transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-cyber-cyan transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-cyber-cyan transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="mailto:abejidefaith110@gmail.com" className="text-slate-400 hover:text-cyber-cyan transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        <p className="text-slate-500 font-mono text-sm">
          &copy; {currentYear} Faith Abejide. Designed & Built with React, Vite & Tailwind.
        </p>
      </div>
    </footer>
  );
}
