import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Selected Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#090B0D] border-t border-white/[0.08] py-10 lg:py-12 text-xs text-[#A8A398]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row: Brand, Quick Navigation, and Connect Channels */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Brand & Moniker */}
          <div className="space-y-1.5">
            <a
              href="#"
              className="inline-block text-base sm:text-lg font-medium text-[#F6F4EE] hover:text-[#2FA499] transition-colors"
            >
              <span className="font-serif italic text-xl sm:text-2xl mr-1 font-normal">Faith</span>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#A8A398]">Abejide</span>
            </a>
            <p className="text-xs text-[#6E6960] font-mono">
              Full-Stack Web Developer · Lagos, Nigeria
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#A8A398] hover:text-[#F6F4EE] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect & Social Channels */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Faith Abejide on GitHub"
              className="text-[#A8A398] hover:text-[#F6F4EE] transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
            >
              <Github className="w-3.5 h-3.5 text-[#2FA499]" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <span className="text-[#6E6960]">/</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Faith Abejide on LinkedIn"
              className="text-[#A8A398] hover:text-[#F6F4EE] transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#2FA499]" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <span className="text-[#6E6960]">/</span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Faith Abejide on Twitter"
              className="text-[#A8A398] hover:text-[#F6F4EE] transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
            >
              <Twitter className="w-3.5 h-3.5 text-[#2FA499]" />
              <span className="hidden sm:inline">Twitter</span>
            </a>
            <span className="text-[#6E6960]">/</span>
            <a
              href="mailto:abejidefaith110@gmail.com"
              aria-label="Email Faith Abejide"
              className="text-[#A8A398] hover:text-[#F6F4EE] transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
            >
              <Mail className="w-3.5 h-3.5 text-[#2FA499]" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>

        </div>

        {/* Bottom Strip: Legal & Back-to-Top */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#6E6960]">
          <div>
            &copy; {currentYear} Faith Abejide. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="text-[#A8A398] hover:text-[#F6F4EE] transition-colors flex items-center gap-1 font-mono uppercase tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3 text-[#2FA499]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
