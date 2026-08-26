import { motion } from 'motion/react';
import { skillsData } from '../data/skillsData';
import { Terminal, Cpu, Database, Cloud, Code2 } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Frontend': <Code2 size={20} />,
  'Backend & APIs': <Terminal size={20} />,
  'Databases': <Database size={20} />,
  'AI Systems': <Cpu size={20} />,
  'DevOps & Tools': <Cloud size={20} />
};

export default function AboutExpertise() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* About Me */}
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="text-cyber-cyan font-mono text-xl">01.</span> About Me
            </h2>
            <div className="w-16 h-1 bg-cyber-cyan mb-8 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
            
            <div className="bg-cyber-card border border-cyber-border rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="prose prose-invert prose-lg text-slate-400">
                <p className="mb-4">
                  I am a passionate <strong>Full-Stack Web Developer</strong> dedicated to building scalable, responsive, and robust web applications.
                </p>
                <p className="mb-4">
                  My journey is driven by a deep interest in software architecture and modern web technologies. I specialize in developing end-to-end solutions, from crafting intuitive user interfaces to designing secure and efficient backend APIs.
                </p>
                <p>
                  Whether it's building an e-commerce platform, a complex backend service, or a sleek landing page, I approach every project with an engineering mindset—prioritizing clean code, performance, and an exceptional user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div className="flex flex-col" id="expertise">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <span className="text-cyber-cyan font-mono text-xl">02.</span> My Expertise
            </h2>
            <div className="w-16 h-1 bg-indigo-500 mb-8 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
            
            <div className="flex flex-col gap-6">
              {skillsData.map((category, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={category.title}
                  className="bg-cyber-bg border border-cyber-border rounded-xl p-5 hover:border-cyber-cyan/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-cyber-cyan">
                      {categoryIcons[category.title]}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm rounded-md bg-cyber-card border border-cyber-border text-slate-300 hover:text-cyber-cyan hover:border-cyber-cyan/50 cursor-default transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
