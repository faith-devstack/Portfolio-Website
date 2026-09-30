import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onContactClick?: () => void;
}

const navLinks = [
  { name: 'Selected Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ['projects', 'about', 'expertise', 'process', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-[#0D0F11]/92 backdrop-blur-md border-b border-white/[0.08]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base lg:text-lg font-medium tracking-tight text-[#F6F4EE] hover:text-[#2FA499] transition-colors whitespace-nowrap"
        >
          <span className="font-serif italic text-xl lg:text-2xl mr-1.5 font-normal text-[#F6F4EE]">Faith</span>
          <span className="tracking-widest uppercase text-xs font-semibold text-[#A8A398]">Abejide</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-[#A8A398]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors duration-150 whitespace-nowrap ${
                  isActive ? 'text-[#F6F4EE]' : 'hover:text-[#F6F4EE]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#2FA499]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={onContactClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#F6F4EE] bg-[#14171A] hover:bg-[#1B1F24] border border-white/[0.1] hover:border-[#2FA499]/50 transition-colors whitespace-nowrap rounded-sm"
          >
            <span>Initiate Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#2FA499]" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#A8A398] hover:text-[#F6F4EE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499] transition-colors"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="md:hidden bg-[#0D0F11]/98 border-b border-white/[0.08] px-6 py-6 overflow-hidden"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-wide text-[#A8A398] hover:text-[#F6F4EE] py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between w-full px-4 py-3 text-xs font-medium text-[#F6F4EE] bg-[#14171A] border border-white/[0.1] rounded-sm"
                >
                  <span>Initiate Contact</span>
                  <ArrowUpRight className="w-4 h-4 text-[#2FA499]" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
