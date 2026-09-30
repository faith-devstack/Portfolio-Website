import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, X, Layers, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Primary Flagship Feature: Blue Cabana (cinematic scroll-driven visual experience)
  const primaryFeatured =
    projectsData.find((p) => p.id === 'blue-cabana') || projectsData[0];

  // Secondary Spotlights: SubTrack, PACE E-Commerce, Family Tree Visualizer
  const secondaryProjects = projectsData.filter((p) => p.id !== primaryFeatured.id);

  return (
    <section id="projects" className="py-24 lg:py-36 border-t border-white/[0.08] relative bg-[#0D0F11]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-3">
            <span>01</span>
            <span className="text-[#6E6960]">/</span>
            <span>Curated Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F6F4EE] tracking-tight">
            Selected <span className="font-serif italic text-[#F6F4EE]">projects</span> & engineering cases.
          </h2>
          <p className="text-sm sm:text-base text-[#A8A398] mt-4 leading-relaxed font-normal">
            A verified collection of production web applications, interaction architectures, and full-stack systems built with structural discipline and clean aesthetics.
          </p>
        </div>

        {/* 1. PRIMARY FLAGSHIP FEATURE — Blue Cabana */}
        <div className="mb-20 lg:mb-28">
          <div className="text-[11px] font-mono tracking-widest uppercase text-[#6E6960] mb-4 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2FA499]" />
              <span className="text-[#2FA499]">FLAGSHIP MOTION FEATURE</span>
            </span>
            <span>CASE_01 · {primaryFeatured.year || '2025'}</span>
          </div>

          <article className="group bg-[#14171A] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left 7 cols: Refined Visual Frame for Blue Cabana */}
            <div
              onClick={() => setSelectedProject(primaryFeatured)}
              className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto w-full bg-[#1B1F24] overflow-hidden cursor-pointer select-none"
            >
              <img
                src={primaryFeatured.image}
                alt={primaryFeatured.title}
                className="w-full h-full object-cover object-center filter saturate-[0.92] contrast-[1.05] group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              />
              {/* Subtle charcoal gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F11]/85 via-[#0D0F11]/15 to-transparent pointer-events-none" />

              {/* Quiet overlay label communicating the cinematic experience */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 text-[11px] font-mono text-[#F6F4EE]/90 bg-[#0D0F11]/85 backdrop-blur-sm px-3 py-1.5 border border-white/[0.08] rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2FA499]" />
                <span>Cinematic Frame-Scrubbed Animation</span>
              </div>
            </div>

            {/* Right 5 cols: Project Narrative & Accessible Controls */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.08]">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#6E6960] mb-3">
                  <span className="uppercase text-[#2FA499]">{primaryFeatured.category}</span>
                  <span>{primaryFeatured.role}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#F6F4EE] tracking-tight mb-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(primaryFeatured)}
                    className="text-left hover:text-[#2FA499] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  >
                    {primaryFeatured.title}
                  </button>
                </h3>

                <p className="text-sm sm:text-base text-[#A8A398] leading-relaxed mb-6 font-normal">
                  {primaryFeatured.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2 mb-8 text-xs text-[#D5D1C7]">
                  {primaryFeatured.highlights?.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#2FA499] mt-0.5 font-mono">―</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Unboxed (Zero-Pill) */}
                <div className="py-4 border-t border-white/[0.08] text-xs font-mono text-[#6E6960] flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-6">
                  {primaryFeatured.techStack.map((tech, idx) => (
                    <span key={tech} className="inline-flex items-center">
                      <span className="text-[#A8A398]">{tech}</span>
                      {idx < primaryFeatured.techStack.length - 1 && (
                        <span className="ml-2.5 text-[#6E6960]">·</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  {primaryFeatured.liveLink && (
                    <a
                      href={primaryFeatured.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0D0F11] bg-[#2FA499] hover:bg-[#3DB8AC] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                      aria-label="Open Blue Cabana live demo in new tab"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {primaryFeatured.githubLink && primaryFeatured.githubLink !== '#' && (
                    <a
                      href={primaryFeatured.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F6F4EE] bg-[#1B1F24] hover:bg-[#23282F] border border-white/[0.1] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(primaryFeatured)}
                    className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F6F4EE] bg-[#1B1F24] hover:bg-[#22272E] border border-white/[0.1] hover:border-[#2FA499]/40 transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                  >
                    <span>Architecture & Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#2FA499]" />
                  </button>
                </div>
              </div>

            </div>
          </article>
        </div>

        {/* 2. VERIFIED DEPLOYED WORKS (SubTrack, PACE E-Commerce, Family Tree Visualizer) */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-8">
            <div className="text-[11px] font-mono tracking-widest uppercase text-[#6E6960] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2FA499]" />
              <span>LIVE APPLICATION CASES ({secondaryProjects.length})</span>
            </div>
            <span className="text-xs font-mono text-[#6E6960]">
              VERIFIED WORKING DEPLOYMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {secondaryProjects.map((project, index) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between bg-[#14171A] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 rounded-sm overflow-hidden"
              >
                {/* Visual Area */}
                <div>
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative aspect-[16/10] w-full bg-[#1B1F24] overflow-hidden cursor-pointer select-none border-b border-white/[0.06]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center filter saturate-[0.92] contrast-[1.05] group-hover:scale-[1.015] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F11]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Corner Tag */}
                    <div className="absolute top-3 left-3 z-10 text-[10px] font-mono text-[#F6F4EE]/90 bg-[#0D0F11]/80 backdrop-blur-sm px-2.5 py-1 border border-white/[0.08] rounded-sm uppercase tracking-wider">
                      {project.category}
                    </div>

                    <div className="absolute bottom-3 right-3 z-10 text-[10px] font-mono text-[#A8A398] bg-[#0D0F11]/80 backdrop-blur-sm px-2.5 py-1 border border-white/[0.08] rounded-sm">
                      CASE_0{index + 2} · {project.year}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between text-xs font-mono text-[#6E6960] mb-2">
                      <span className="text-[#2FA499]">{project.role}</span>
                    </div>

                    <h4 className="text-xl font-light text-[#F6F4EE] tracking-tight mb-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="text-left hover:text-[#2FA499] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                      >
                        {project.title}
                      </button>
                    </h4>

                    <p className="text-xs sm:text-sm text-[#A8A398] leading-relaxed mb-6 font-normal line-clamp-3">
                      {project.description}
                    </p>

                    {/* Highlights Preview */}
                    <div className="space-y-1.5 mb-6 text-xs text-[#D5D1C7]">
                      {project.highlights?.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-[#2FA499] font-mono">―</span>
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions & Tech */}
                <div className="p-6 sm:p-7 pt-0">
                  {/* Tech Stack List */}
                  <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-[#6E6960] flex flex-wrap items-center gap-x-2 gap-y-1 mb-5">
                    {project.techStack.map((tech, idx) => (
                      <span key={tech} className="inline-flex items-center">
                        <span className="text-[#A8A398]">{tech}</span>
                        {idx < project.techStack.length - 1 && (
                          <span className="ml-2 text-[#6E6960]">·</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Touch Action Row */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0D0F11] bg-[#2FA499] hover:bg-[#3DB8AC] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                        aria-label={`Open ${project.title} live demo`}
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubLink && project.githubLink !== '#' && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#F6F4EE] bg-[#1B1F24] hover:bg-[#23282F] border border-white/[0.1] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                        aria-label={`Open ${project.title} source code`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span className="sr-only sm:not-sr-only">Code</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="min-h-[44px] inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#F6F4EE] bg-[#1B1F24] hover:bg-[#22272E] border border-white/[0.1] rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                      aria-label={`View ${project.title} architecture details`}
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#2FA499]" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#0D0F11]/88 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#14171A] border border-white/[0.14] rounded-sm p-6 sm:p-10 shadow-2xl z-10"
            >
              {/* Top Controls */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-7">
                <div className="flex items-center gap-3 text-xs font-mono text-[#6E6960]">
                  <span>CASE STUDY</span>
                  <span>/</span>
                  <span className="text-[#2FA499]">{selectedProject.category}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project modal"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[#A8A398] hover:text-[#F6F4EE] rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Role */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A8A398]">
                  {selectedProject.role} · {selectedProject.year}
                </span>
                <h3 id="modal-title" className="text-3xl sm:text-4xl font-light text-[#F6F4EE] tracking-tight mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Image Preview inside modal */}
              {selectedProject.image && (
                <div className="relative aspect-[16/9] w-full bg-[#1B1F24] border border-white/[0.08] rounded-sm overflow-hidden mb-8">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F11]/60 to-transparent pointer-events-none" />
                </div>
              )}

              {/* Overview */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-wider font-mono text-[#A8A398] mb-2">Scope & Summary</h4>
                <p className="text-sm sm:text-base text-[#D5D1C7] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Architecture Summary */}
              {selectedProject.architectureSummary && (
                <div className="mb-8 p-5 bg-[#1B1F24] border border-white/[0.08] rounded-sm">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#2FA499] mb-2">
                    <Layers className="w-4 h-4" />
                    <span>System Architecture</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A8A398] leading-relaxed">
                    {selectedProject.architectureSummary}
                  </p>
                </div>
              )}

              {/* Highlights */}
              {selectedProject.highlights && (
                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-wider font-mono text-[#A8A398] mb-3">Key Technical Highlights</h4>
                  <ul className="space-y-2.5">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#D5D1C7]">
                        <CheckCircle2 className="w-4 h-4 text-[#2FA499] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-wider font-mono text-[#A8A398] mb-3">Technologies Deployed</h4>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#F6F4EE]">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={tech} className="inline-flex items-center font-mono">
                      <span>{tech}</span>
                      {idx < selectedProject.techStack.length - 1 && (
                        <span className="ml-3 text-[#6E6960]">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0D0F11] bg-[#2FA499] hover:bg-[#3DB8AC] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                    >
                      <span>Launch Live Environment</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {selectedProject.githubLink && selectedProject.githubLink !== '#' && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F6F4EE] bg-[#1B1F24] hover:bg-[#23282F] border border-white/[0.1] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Repository</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="min-h-[44px] text-xs font-mono uppercase tracking-wider text-[#A8A398] hover:text-[#F6F4EE] px-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                >
                  Dismiss
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
