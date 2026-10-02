import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onContactClick?: () => void;
  onOpenResume?: () => void;
}

export default function Navbar({ onContactClick, onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for nav underline
      const sections = ['projects', 'about', 'expertise', 'process', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Selected Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0F11]/94 backdrop-blur-md border-b border-white/[0.1]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base lg:text-lg font-medium tracking-tight text-[#F6F4EE] hover:text-[#2FA499] transition-colors whitespace-nowrap"
        >
          <span className="font-serif italic text-2xl lg:text-[1.75rem] mr-2 font-normal text-[#F6F4EE]">Faith</span>
          <span className="tracking-widest uppercase text-xs font-semibold text-[#E2DFD7]">Abejide</span>
        </a>

        {/* Zone 2: Clean text navigation links with increased contrast */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-[#C8C4BA]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1.5 transition-colors duration-150 whitespace-nowrap ${
                  isActive ? 'text-[#F6F4EE] font-semibold' : 'hover:text-[#F6F4EE]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2FA499]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions including Resume and Contact */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenResume && (
            <button
              type="button"
              onClick={onOpenResume}
              className="min-h-[40px] inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-[#E2DFD7] hover:text-[#F6F4EE] bg-[#14171A] hover:bg-[#1B1F24] border border-white/[0.12] hover:border-white/[0.25] transition-colors whitespace-nowrap rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
              aria-label="View Curriculum Vitae"
            >
              <FileText className="w-3.5 h-3.5 text-[#2FA499]" />
              <span>Résumé</span>
            </button>
          )}

          <a
            href="#contact"
            onClick={onContactClick}
            className="min-h-[40px] inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#F6F4EE] bg-[#14171A] hover:bg-[#1C2026] border border-white/[0.12] hover:border-[#2FA499] transition-colors whitespace-nowrap rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#2FA499]" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button (44px target) */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center text-[#E2DFD7] hover:text-[#F6F4EE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499] transition-colors"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0D0F11]/98 border-b border-white/[0.12] px-6 py-6 overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="min-h-[44px] flex items-center text-sm font-medium tracking-wide text-[#E2DFD7] hover:text-[#F6F4EE] py-1 transition-colors border-b border-white/[0.04]"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-white/[0.1] space-y-3">
                {onOpenResume && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="flex items-center justify-between w-full min-h-[46px] px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#F6F4EE] bg-[#14171A] border border-white/[0.12] rounded-sm"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#2FA499]" />
                      <span>View Résumé</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#2FA499]" />
                  </button>
                )}

                <a
                  href="/resume.pdf"
                  download="Faith_Abejide_Resume.pdf"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between w-full min-h-[46px] px-4 py-3 text-xs font-mono uppercase tracking-wider text-[#E2DFD7] bg-[#0D0F11] border border-white/[0.1] rounded-sm"
                >
                  <span>Download CV (PDF)</span>
                  <span className="text-[#2FA499]">PDF ↓</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between w-full min-h-[46px] px-4 py-3 text-xs font-medium text-[#0D0F11] bg-[#F6F4EE] hover:bg-[#2FA499] rounded-sm font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Initiate Contact</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
