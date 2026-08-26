import { processData } from '../data/processData';
import { Search, Network, PenTool, Code, TestTube, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

const iconsMap: Record<string, React.ReactNode> = {
  'Search': <Search className="w-6 h-6" />,
  'Network': <Network className="w-6 h-6" />,
  'PenTool': <PenTool className="w-6 h-6" />,
  'Code': <Code className="w-6 h-6" />,
  'TestTube': <TestTube className="w-6 h-6" />,
  'Rocket': <Rocket className="w-6 h-6" />
};

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent -z-10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <span className="text-cyber-cyan font-mono text-xl">04.</span> My Work Process
          </h2>
          <div className="w-16 h-1 bg-indigo-500 mb-4 rounded-full mx-auto shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            A systematic engineering approach to building resilient digital products, from initial concept to final deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
          
          {processData.map((step, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={step.id}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Connector Line (Desktop) */}
              {idx < processData.length - 1 && (
                <div className="hidden xl:block absolute top-10 left-[60%] w-full h-[2px] bg-cyber-border group-hover:bg-cyber-cyan/50 transition-colors z-0" />
              )}
              
              {/* Icon Container */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-cyber-card border border-cyber-border flex items-center justify-center mb-6 group-hover:border-cyber-cyan group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                <div className="text-slate-400 group-hover:text-cyber-cyan transition-colors">
                  {iconsMap[step.icon]}
                </div>
                
                {/* Step Number Indicator */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-cyber-bg border border-cyber-border flex items-center justify-center text-xs font-mono text-cyber-cyan font-bold shadow-lg">
                  0{step.id}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
