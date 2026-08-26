import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Github, Folder } from 'lucide-react';

const categories = ['All', 'Frontend', 'Backend & APIs', 'AI Systems', 'Full-Stack'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projectsData.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative bg-cyber-card/30 border-y border-cyber-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="text-cyber-cyan font-mono text-xl">03.</span> Selected Work
            </h2>
            <div className="w-16 h-1 bg-cyber-cyan mb-4 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
            <p className="text-slate-400 max-w-xl">
              A collection of digital products, SaaS platforms, and AI systems I've architected and built.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-cyber-cyan text-cyber-bg shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
                    : 'bg-cyber-card border border-cyber-border text-slate-400 hover:text-white hover:border-slate-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative flex flex-col h-full bg-cyber-card border border-cyber-border rounded-2xl overflow-hidden hover:border-cyber-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500"
              >
                {/* Image Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-cyan/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyber-bg/80 backdrop-blur text-cyber-cyan border border-cyber-cyan/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="text-cyber-cyan h-8 w-8" />
                    <div className="flex gap-3">
                      {project.githubLink && (
                        <a href={project.githubLink} aria-label="GitHub Repository" className="text-slate-400 hover:text-cyber-cyan transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} aria-label="Live Project" className="text-slate-400 hover:text-cyber-cyan transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <ul className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-cyber-border/50">
                    {project.techStack.map(tech => (
                      <li key={tech} className="text-xs font-mono text-slate-500">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
