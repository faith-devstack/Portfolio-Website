import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, ExternalLink, FileText, CheckCircle2, Mail, MapPin, Phone, MessageSquare, GraduationCap, Briefcase, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [viewTab, setViewTab] = useState<'document' | 'structured'>('document');

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0D0F11]/92 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#14171A] border border-white/[0.16] rounded-sm shadow-2xl z-10 overflow-hidden"
          >
            {/* Header Controls Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:px-8 border-b border-white/[0.1] bg-[#161A20]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-1 font-medium">
                  <span>CURRICULUM VITAE</span>
                  <span className="text-[#8E8A80]">/</span>
                  <span>FAITH ABEJIDE TIJESUNIMI</span>
                </div>
                <h3 id="resume-title" className="text-xl sm:text-2xl font-light text-[#F6F4EE] tracking-tight">
                  Full-Stack Engineering Résumé
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                {/* View Mode Toggle */}
                <div className="flex items-center p-1 bg-[#0D0F11] border border-white/[0.1] rounded-sm text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setViewTab('document')}
                    aria-pressed={viewTab === 'document'}
                    className={`min-h-[32px] px-3 py-1 rounded-xs transition-colors font-medium ${
                      viewTab === 'document'
                        ? 'bg-[#1B1F24] text-[#F6F4EE]'
                        : 'text-[#9E988D] hover:text-[#F6F4EE]'
                    }`}
                  >
                    PDF Embed
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewTab('structured')}
                    aria-pressed={viewTab === 'structured'}
                    className={`min-h-[32px] px-3 py-1 rounded-xs transition-colors font-medium ${
                      viewTab === 'structured'
                        ? 'bg-[#1B1F24] text-[#F6F4EE]'
                        : 'text-[#9E988D] hover:text-[#F6F4EE]'
                    }`}
                  >
                    Overview
                  </button>
                </div>

                {/* Direct Download Button */}
                <a
                  href="/resume.pdf"
                  download="Faith_Abejide_Resume.pdf"
                  className="min-h-[38px] inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0D0F11] bg-[#2FA499] hover:bg-[#3DB8AC] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>

                {/* DOCX Download Link */}
                <a
                  href="/Faith%20Abejide.docx"
                  download="Faith_Abejide.docx"
                  className="min-h-[38px] inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-[#E2DFD7] bg-[#1B1F24] hover:bg-[#23282F] border border-white/[0.12] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  title="Download Original Word Document"
                >
                  <FileText className="w-3.5 h-3.5 text-[#2FA499]" />
                  <span className="hidden sm:inline">DOCX</span>
                </a>

                {/* Open in New Window Link */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[38px] inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-[#E2DFD7] bg-[#1B1F24] hover:bg-[#23282F] border border-white/[0.12] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  title="Open PDF in full browser tab"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#2FA499]" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close résumé modal"
                  className="min-h-[38px] min-w-[38px] flex items-center justify-center text-[#B8B4AA] hover:text-[#F6F4EE] bg-[#1B1F24] border border-white/[0.1] hover:border-white/[0.2] rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body Area */}
            <div className="flex-1 overflow-y-auto min-h-[500px] max-h-[76vh] bg-[#0E1014] p-4 sm:p-8">
              {viewTab === 'document' ? (
                <div className="w-full h-full min-h-[620px] flex flex-col items-center justify-center bg-[#14171A] border border-white/[0.1] rounded-sm overflow-hidden relative">
                  <iframe
                    src="/resume.pdf#view=FitH"
                    title="Faith Abejide Curriculum Vitae"
                    className="w-full h-full min-h-[620px] border-0"
                  />
                  {/* Mobile browser fallback notice */}
                  <div className="sm:hidden p-4 bg-[#14171A] border-t border-white/[0.1] w-full text-center">
                    <p className="text-xs text-[#C8C4BA] mb-3">
                      On mobile devices, you can view the structured overview or download the official PDF directly.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => setViewTab('structured')}
                        className="text-xs font-mono text-[#2FA499] underline underline-offset-4"
                      >
                        Switch to Structured View
                      </button>
                      <span className="text-[#6E6960]">·</span>
                      <a
                        href="/resume.pdf"
                        download="Faith_Abejide_Resume.pdf"
                        className="text-xs font-mono text-[#F6F4EE] underline underline-offset-4"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                /* Structured Clean CV View */
                <div className="max-w-3xl mx-auto bg-[#14171A] border border-white/[0.1] p-6 sm:p-10 rounded-sm space-y-8 text-sm shadow-xl">
                  {/* Top Profile Header */}
                  <div className="pb-6 border-b border-white/[0.1] flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-light text-[#F6F4EE] tracking-tight">
                        Faith Abejide Tijesunimi
                      </h4>
                      <p className="text-xs font-mono text-[#2FA499] uppercase tracking-wider mt-1 font-medium">
                        Full-Stack Web Developer &amp; Mechatronics Engineering Student
                      </p>
                    </div>
                    <div className="text-xs font-mono text-[#C8C4BA] space-y-1.5 sm:text-right">
                      <div className="flex sm:justify-end items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#2FA499]" />
                        <a href="mailto:abejidefaith110@gmail.com" className="hover:text-[#F6F4EE] transition-colors">
                          abejidefaith110@gmail.com
                        </a>
                      </div>
                      <div className="flex sm:justify-end items-center gap-2">
                        <MessageSquare className="w-3.5 h-3.5 text-[#2FA499]" />
                        <span>WhatsApp: +234 707 929 9531</span>
                      </div>
                      <div className="flex sm:justify-end items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#2FA499]" />
                        <span>Calls: +234 701 157 5214</span>
                      </div>
                      <div className="flex sm:justify-end items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#2FA499]" />
                        <span>Lagos &amp; Minna, Nigeria · Remote Global</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-2 font-medium">
                      Professional Profile
                    </h5>
                    <p className="text-sm sm:text-base text-[#E2DFD7] leading-relaxed">
                      Full-stack developer with nearly two years of experience, including client project work, and a 200-level Mechatronics Engineering student at the Federal University of Technology, Minna. Builds web applications with the MERN stack and works with TypeScript, Firebase, Drizzle ORM, Supabase and PostgreSQL. Driven by creating useful digital products and exploring practical AI integration.
                    </p>
                  </div>

                  {/* Core Technical Expertise */}
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-3 font-medium">
                      Technical Skills
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                      <div className="p-3.5 bg-[#1B1F24] border border-white/[0.08] rounded-xs">
                        <span className="text-[#F6F4EE] font-medium block mb-1">Languages &amp; Frameworks</span>
                        <span className="text-[#C8C4BA]">JavaScript, TypeScript, React, Node.js, Express.js</span>
                      </div>
                      <div className="p-3.5 bg-[#1B1F24] border border-white/[0.08] rounded-xs">
                        <span className="text-[#F6F4EE] font-medium block mb-1">Web &amp; Motion</span>
                        <span className="text-[#C8C4BA]">Vite, Tailwind CSS, GSAP, Framer Motion, Lucide React</span>
                      </div>
                      <div className="p-3.5 bg-[#1B1F24] border border-white/[0.08] rounded-xs">
                        <span className="text-[#F6F4EE] font-medium block mb-1">Data &amp; Cloud Services</span>
                        <span className="text-[#C8C4BA]">MongoDB, Firebase, Supabase, PostgreSQL, Drizzle ORM</span>
                      </div>
                    </div>
                  </div>

                  {/* Featured Projects Highlight */}
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-3 font-medium">
                      Selected Projects
                    </h5>
                    <div className="space-y-4">
                      {/* Project 1: Blue Cabana */}
                      <div className="p-4 bg-[#1B1F24] border border-white/[0.08] rounded-xs">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-[#F6F4EE]">BLUCABANA</span>
                          <span className="text-xs font-mono text-[#2FA499]">Motion &amp; Interaction</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#C8C4BA] mb-2.5 leading-relaxed">
                          Premium coffee and restaurant website concept focused on immersive visual storytelling and a refined hospitality experience. Created an atmospheric, responsive visual direction with elegant typography and smooth animated content sections. Built a cinematic, scroll-scrubbed frame-based hero reveal.
                        </p>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#9E988D]">
                          <span>React · TypeScript · Tailwind CSS · GSAP · Framer Motion</span>
                          <a
                            href="https://blucabana-website-3lsyfw1jv-faith-devstacks-projects.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#2FA499] hover:underline"
                          >
                            Live Demo ↗
                          </a>
                        </div>
                      </div>

                      {/* Project 2: SubTrack */}
                      <div className="p-4 bg-[#1B1F24] border border-white/[0.08] rounded-xs">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-[#F6F4EE]">SubTrack</span>
                          <span className="text-xs font-mono text-[#2FA499]">Full-Stack App</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#C8C4BA] mb-2.5 leading-relaxed">
                          Subscription management application for organizing recurring expenses and monitoring upcoming renewals from a centralized dashboard. Implemented subscription creation, expense categorization, spending summaries and analytics; deployed and actively maintained during ongoing development.
                        </p>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#9E988D]">
                          <span>React · TypeScript · Vite · Tailwind CSS · Firebase</span>
                          <a
                            href="https://sub-track-alpha.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#2FA499] hover:underline"
                          >
                            Live Demo ↗
                          </a>
                        </div>
                      </div>

                      {/* Project 3: PACE */}
                      <div className="p-4 bg-[#1B1F24] border border-white/[0.08] rounded-xs">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-[#F6F4EE]">PACE</span>
                          <span className="text-xs font-mono text-[#2FA499]">MERN Platform</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#C8C4BA] mb-2.5 leading-relaxed">
                          Full-stack e-commerce platform for product browsing, persistent cart management and checkout. Engineered client-to-database shopping cart persistence and user checkout pipeline. Structured modular REST endpoints for product catalog queries and status tracking.
                        </p>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#9E988D]">
                          <span>React · Node.js · Express · MongoDB</span>
                          <a
                            href="https://dr-tee-frontend.onrender.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#2FA499] hover:underline"
                          >
                            Live Demo ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Education & Academic Credentials */}
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-3 font-medium">
                      Education
                    </h5>
                    <div className="p-4 bg-[#1B1F24] border border-white/[0.08] rounded-xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className="text-sm font-medium text-[#F6F4EE]">Federal University of Technology, Minna (FUT Minna)</span>
                        <span className="text-xs font-mono text-[#2FA499]">Expected: 2029</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#C8C4BA]">
                        B.Eng. Mechatronics Engineering · 200 Level
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action strip */}
                  <div className="pt-4 border-t border-white/[0.1] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#C8C4BA]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2FA499]" />
                      <span>X / Twitter: @faithbuilds001</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="/Faith%20Abejide.docx"
                        download="Faith_Abejide.docx"
                        className="text-[#B8B4AA] hover:text-[#F6F4EE] inline-flex items-center gap-1 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#2FA499]" />
                        <span>Download DOCX</span>
                      </a>
                      <span className="text-[#6E6960]">·</span>
                      <a
                        href="/resume.pdf"
                        download="Faith_Abejide_Resume.pdf"
                        className="text-[#2FA499] hover:text-[#3DB8AC] inline-flex items-center gap-1 transition-colors font-medium"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Official PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Modal Bar */}
            <div className="p-3.5 sm:px-8 border-t border-white/[0.1] bg-[#161A20] flex items-center justify-between text-xs font-mono text-[#9E988D]">
              <span className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#2FA499]" />
                <span>Format: PDF &amp; DOCX Available · Verified Information</span>
              </span>
              <button
                type="button"
                onClick={onClose}
                className="text-[#E2DFD7] hover:text-[#F6F4EE] transition-colors"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
