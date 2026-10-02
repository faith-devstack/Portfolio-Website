import { useState, useRef, type KeyboardEvent } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, LayoutGrid, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Owner',
    organization: 'Retail Logistics Co.',
    content:
      'Faith is an exceptional web developer. He delivered our e-commerce platform ahead of schedule with incredibly clean code. His understanding of full-stack architecture is top-notch.',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Founder',
    organization: 'CloudSync Services',
    content:
      'An absolute powerhouse when it comes to building full-stack applications. The backend REST API Faith built for us is lightning fast, scalable, and beautifully structured.',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Product Manager',
    organization: 'Digital Studio',
    content:
      "Working with Faith was a seamless experience. He brings a unique blend of engineering rigor and design sensibility to frontend interfaces. Our web application's performance improved tenfold.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'featured' | 'all'>('featured');
  const shouldReduceMotion = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeQuote = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (viewMode !== 'featured') return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  const handleTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % testimonials.length;
      setActiveIndex(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + testimonials.length) % testimonials.length;
      setActiveIndex(prevIndex);
      tabRefs.current[prevIndex]?.focus();
    }
  };

  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials and Endorsements"
      className="py-24 lg:py-36 border-t border-white/[0.08] relative bg-[#0D0F11]"
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header with Editorial Metadata & View Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-4">
              <span>05</span>
              <span className="text-[#8E8A80]">/</span>
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F6F4EE] tracking-tight">
              Client &amp; collaborator{' '}
              <span className="font-serif italic font-normal text-[#F6F4EE]">quotes</span>.
            </h2>
            <p className="text-base text-[#C8C4BA] mt-3 max-w-xl font-normal leading-relaxed">
              Verbatim reflections from founders, product managers, and engineering leads on technical delivery and collaboration.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#14171A] border border-white/[0.1] rounded-sm self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('featured')}
              aria-pressed={viewMode === 'featured'}
              className={`min-h-[38px] px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors rounded-xs flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499] ${
                viewMode === 'featured'
                  ? 'bg-[#1B1F24] text-[#F6F4EE] border border-white/[0.1] shadow-xs'
                  : 'text-[#B8B4AA] hover:text-[#F6F4EE]'
              }`}
            >
              <Quote className="w-3.5 h-3.5 text-[#2FA499]" />
              <span>Focused View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('all')}
              aria-pressed={viewMode === 'all'}
              className={`min-h-[38px] px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors rounded-xs flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499] ${
                viewMode === 'all'
                  ? 'bg-[#1B1F24] text-[#F6F4EE] border border-white/[0.1] shadow-xs'
                  : 'text-[#B8B4AA] hover:text-[#F6F4EE]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#2FA499]" />
              <span>All Quotes</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: Focused View (Expansive typography, generous whitespace, manual keyboard navigation) */}
        {viewMode === 'featured' ? (
          <div className="relative">
            {/* Direct Person Selector Tabs */}
            <div
              role="tablist"
              aria-label="Select a client quote"
              className="flex flex-wrap items-center gap-2 sm:gap-4 mb-10 pb-6 border-b border-white/[0.08]"
            >
              {testimonials.map((item, index) => {
                const isSelected = activeIndex === index;
                return (
                  <button
                    key={item.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    role="tab"
                    id={`testimonial-tab-${index}`}
                    aria-selected={isSelected}
                    aria-controls={`testimonial-panel-${index}`}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(e) => handleTabKeyDown(e, index)}
                    className={`min-h-[42px] group text-left px-4 py-2 transition-all rounded-xs border text-xs sm:text-sm font-mono tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499] ${
                      isSelected
                        ? 'border-[#2FA499] bg-[#1B1F24] text-[#F6F4EE]'
                        : 'border-white/[0.1] bg-[#14171A] text-[#B8B4AA] hover:text-[#F6F4EE] hover:border-white/[0.2]'
                    }`}
                  >
                    <span className="text-[#2FA499] mr-2 font-medium">0{index + 1}</span>
                    <span className="font-medium">{item.name}</span>
                    <span className="hidden sm:inline text-[#9E988D] ml-2">/ {item.organization}</span>
                  </button>
                );
              })}
            </div>

            {/* Quote Stage with Generous Breathing Room */}
            <div
              id={`testimonial-panel-${activeIndex}`}
              role="tabpanel"
              aria-labelledby={`testimonial-tab-${activeIndex}`}
              className="relative min-h-[260px] sm:min-h-[240px] flex flex-col justify-between"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuote.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                  transition={{ duration: shouldReduceMotion ? 0.01 : 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8"
                >
                  {/* Decorative Opening Quotation Mark */}
                  <div className="font-serif text-5xl sm:text-6xl text-[#2FA499]/40 leading-none select-none -mb-4">
                    “
                  </div>

                  {/* Editorial Pull Quote */}
                  <blockquote className="max-w-4xl">
                    <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#F6F4EE] leading-[1.38] tracking-tight">
                      {activeQuote.content}
                    </p>
                  </blockquote>

                  {/* Attribution Details */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
                    <div>
                      <div className="text-base sm:text-lg font-medium text-[#F6F4EE]">
                        {activeQuote.name}
                      </div>
                      <div className="text-xs sm:text-sm font-mono text-[#2FA499] mt-0.5">
                        {activeQuote.role} · <span className="text-[#B8B4AA]">{activeQuote.organization}</span>
                      </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous quote"
                        className="min-h-[42px] min-w-[42px] flex items-center justify-center text-[#B8B4AA] hover:text-[#F6F4EE] bg-[#14171A] hover:bg-[#1B1F24] border border-white/[0.1] hover:border-white/[0.2] rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next quote"
                        className="min-h-[42px] min-w-[42px] flex items-center justify-center text-[#B8B4AA] hover:text-[#F6F4EE] bg-[#14171A] hover:bg-[#1B1F24] border border-white/[0.1] hover:border-white/[0.2] rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* VIEW 2: All Quotes Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className="bg-[#14171A] border border-white/[0.1] p-8 rounded-sm flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08] mb-5">
                    <span className="font-mono text-xs text-[#2FA499] font-medium">0{index + 1}</span>
                    <Quote className="w-4 h-4 text-[#2FA499]/60" />
                  </div>
                  <blockquote className="mb-6">
                    <p className="font-serif italic text-lg sm:text-xl text-[#F6F4EE] leading-relaxed">
                      "{item.content}"
                    </p>
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="text-sm font-medium text-[#F6F4EE]">{item.name}</div>
                  <div className="text-xs font-mono text-[#2FA499] mt-0.5">
                    {item.role} · <span className="text-[#9E988D]">{item.organization}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
