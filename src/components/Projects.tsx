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
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-3">
            <span>01</span>
            <span className="text-[#8E8A80]">/</span>
            <span>Curated Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F6F4EE] tracking-tight">
            Selected <span className="font-serif italic text-[#F6F4EE]">projects</span> &amp; engineering cases.
          </h2>
          <p className="text-base text-[#C8C4BA] mt-4 leading-relaxed font-normal">
            A verified collection of production web applications, interaction architectures, and full-stack systems built with structural discipline and clean aesthetics.
          </p>
        </div>

        {/* 1. PRIMARY FLAGSHIP FEATURE — Blue Cabana */}
        <div className="mb-20 lg:mb-28">
          <div className="text-xs font-mono tracking-widest uppercase text-[#9E988D] mb-4 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2FA499]" />
              <span className="text-[#2FA499] font-medium">FLAGSHIP MOTION FEATURE</span>
            </span>
            <span className="text-[#B8B4AA]">CASE_01 · {primaryFeatured.year || '2025'}</span>
          </div>

          <article className="group bg-[#14171A] border border-white/[0.12] hover:border-white/[0.22] transition-all duration-300 rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch shadow-xl">
            
            {/* Left 7 cols: Refined Visual Frame for Blue Cabana */}
            <div
              onClick={() => setSelectedProject(primaryFeatured)}
              className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto w-full min-h-[280px] sm:min-h-[380px] bg-[#1B1F24] overflow-hidden cursor-pointer select-none"
            >
              <img
                src={primaryFeatured.image}
                alt={primaryFeatured.title}
                className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.05] group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              />
              {/* Subtle charcoal gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F11]/85 via-[#0D0F11]/20 to-transparent pointer-events-none" />

              {/* Quiet overlay label communicating the cinematic experience */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 text-xs font-mono text-[#F6F4EE] bg-[#0D0F11]/90 backdrop-blur-sm px-3.5 py-1.5 border border-white/[0.1] rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2FA499]" />
                <span>Cinematic Frame-Scrubbed Animation</span>
              </div>
            </div>

            {/* Right 5 cols: Project Narrative & Accessible Controls */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.1] bg-[#14171A]">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3.5">
                  <span className="uppercase text-[#2FA499] font-medium">{primaryFeatured.category}</span>
                  <span className="text-[#9E988D]">{primaryFeatured.role}</span>
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

                <p className="text-sm sm:text-base text-[#C8C4BA] leading-relaxed mb-6 font-normal">
                  {primaryFeatured.description}
                </p>

                {/* Key Technical Highlights */}
                <div className="space-y-2.5 mb-8 text-xs sm:text-sm text-[#E2DFD7]">
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
                <div className="py-4 border-t border-white/[0.08] text-xs font-mono text-[#9E988D] flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-6">
                  {primaryFeatured.techStack.map((tech, idx) => (
                    <span key={tech} className="inline-flex items-center">
                      <span className="text-[#E2DFD7]">{tech}</span>
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
                    <span>Architecture Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#2FA499]" />
                  </button>
                </div>
              </div>

            </div>
          </article>
        </div>

        {/* 2. VERIFIED DEPLOYED WORKS (SubTrack, PACE E-Commerce, Family Tree Visualizer) */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-8 sm:mb-10">
            <div className="text-xs font-mono tracking-widest uppercase text-[#9E988D] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2FA499]" />
              <span className="text-[#F6F4EE]">APPLICATION CASES ({secondaryProjects.length})</span>
            </div>
            <span className="text-xs font-mono text-[#2FA499]">
              VERIFIED WORKING DEPLOYMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryProjects.map((project, index) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between bg-[#14171A] border border-white/[0.1] hover:border-white/[0.22] transition-all duration-300 rounded-sm overflow-hidden shadow-lg"
              >
                {/* Visual Area */}
                <div>
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative aspect-[16/10] w-full bg-[#1B1F24] overflow-hidden cursor-pointer select-none border-b border-white/[0.08]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F11]/85 via-transparent to-transparent pointer-events-none" />

                    {/* Corner Tag */}
                    <div className="absolute top-3 left-3 z-10 text-[11px] font-mono text-[#F6F4EE] bg-[#0D0F11]/85 backdrop-blur-sm px-2.5 py-1 border border-white/[0.1] rounded-sm uppercase tracking-wider">
                      {project.category}
                    </div>

                    <div className="absolute bottom-3 right-3 z-10 text-[11px] font-mono text-[#C8C4BA] bg-[#0D0F11]/85 backdrop-blur-sm px-2.5 py-1 border border-white/[0.1] rounded-sm">
                      CASE_0{index + 2} · {project.year}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-[#2FA499] font-medium">{project.role}</span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-light text-[#F6F4EE] tracking-tight mb-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="text-left hover:text-[#2FA499] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                      >
                        {project.title}
                      </button>
                    </h4>

                    <p className="text-sm text-[#C8C4BA] leading-relaxed mb-6 font-normal line-clamp-3">
                      {project.description}
                    </p>

                    {/* Highlights Preview */}
                    <div className="space-y-2 mb-6 text-xs sm:text-sm text-[#E2DFD7]">
                      {project.highlights?.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-[#2FA499] font-mono">―</span>
                          <span className="line-clamp-1 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions & Tech */}
                <div className="p-6 sm:p-7 pt-0">
                  {/* Tech Stack List */}
                  <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-[#9E988D] flex flex-wrap items-center gap-x-2 gap-y-1 mb-5">
                    {project.techStack.map((tech, idx) => (
                      <span key={tech} className="inline-flex items-center">
                        <span className="text-[#E2DFD7]">{tech}</span>
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
              className="absolute inset-0 bg-[#0D0F11]/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#14171A] border border-white/[0.16] rounded-sm p-6 sm:p-10 shadow-2xl z-10"
            >
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-1">
                    <span>{selectedProject.category}</span>
                    <span className="text-[#8E8A80]">/</span>
                    <span>{selectedProject.role}</span>
                  </div>
                  <h3 id="modal-title" className="text-2xl sm:text-3xl font-light text-[#F6F4EE] tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="min-h-[40px] min-w-[40px] flex items-center justify-center text-[#B8B4AA] hover:text-[#F6F4EE] bg-[#1B1F24] border border-white/[0.08] rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Visual Area */}
              <div className="relative aspect-[16/10] w-full bg-[#1B1F24] border border-white/[0.08] rounded-sm overflow-hidden mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Narrative & Architecture Details */}
              <div className="space-y-6 text-sm text-[#C8C4BA] leading-relaxed">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-2">
                    Executive Overview
                  </h4>
                  <p className="text-sm sm:text-base text-[#E2DFD7] font-normal leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.architectureSummary && (
                  <div className="p-4 bg-[#1B1F24] border border-white/[0.08] rounded-sm">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-2 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architecture &amp; System Flow</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#E2DFD7] font-normal leading-relaxed">
                      {selectedProject.architectureSummary}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-3">
                    Technical Highlights
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.highlights?.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2DFD7]">
                        <CheckCircle2 className="w-4 h-4 text-[#2FA499] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-3">
                    Applied Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#1B1F24] border border-white/[0.1] text-[#F6F4EE] rounded-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0D0F11] bg-[#2FA499] hover:bg-[#3DB8AC] transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2FA499]"
                    >
                      <span>Launch Live Site</span>
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
