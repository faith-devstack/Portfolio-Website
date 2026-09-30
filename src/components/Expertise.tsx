const skillGroups = [
  {
    index: '01',
    title: 'Frontend & Interfaces',
    summary: 'Fluid client architectures, design systems, and accessible interactions.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vue.js'],
  },
  {
    index: '02',
    title: 'Backend & Data Layers',
    summary: 'Secure REST/GraphQL APIs, relational schema design, and caching topologies.',
    technologies: [
      'Node.js',
      'Express',
      'Python',
      'FastAPI',
      'REST APIs',
      'GraphQL',
      'Go',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Supabase',
      'Prisma',
    ],
  },
  {
    index: '03',
    title: 'AI Systems & DevOps',
    summary: 'Model integration, context pipelines, containerized hosting, and edge delivery.',
    technologies: [
      'Gemini API',
      'OpenAI API',
      'LangChain',
      'Vector Databases',
      'RAG Architecture',
      'Git',
      'Docker',
      'AWS',
      'Vercel',
      'Linux',
      'CI/CD',
    ],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 lg:py-32 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 lg:mb-20">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#2FA499] mb-3">
            <span>03</span>
            <span className="text-[#6E6960]">/</span>
            <span>Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F6F4EE] tracking-tight">
            Disciplined <span className="font-serif italic text-[#F6F4EE]">technical</span> foundations.
          </h2>
          <p className="text-sm sm:text-base text-[#A8A398] mt-4 leading-relaxed font-normal">
            A concentrated toolkit organized across client interfaces, backend data systems, and automated deployment pipelines.
          </p>
        </div>

        {/* 3 Meaningful Groups Grid: Generous Whitespace, Zero-Pill */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {skillGroups.map((group) => (
            <div
              key={group.index}
              className="bg-[#14171A] border border-white/[0.08] hover:border-white/[0.16] p-8 rounded-sm flex flex-col justify-between transition-colors group"
            >
              <div>
                {/* Index & Teal Accent Marker */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                  <span className="font-mono text-xs text-[#2FA499] tracking-widest">
                    GROUP {group.index}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2FA499]/70" />
                </div>

                {/* Group Title */}
                <h3 className="font-serif italic text-2xl text-[#F6F4EE] mb-2 group-hover:text-[#2FA499] transition-colors">
                  {group.title}
                </h3>

                {/* Concise Summary */}
                <p className="text-xs text-[#A8A398] leading-relaxed mb-6 font-normal">
                  {group.summary}
                </p>
              </div>

              {/* Technologies: Clean, Unboxed List with Subtle Separators */}
              <div className="pt-6 border-t border-white/[0.06]">
                <p className="text-[10px] font-mono tracking-widest uppercase text-[#6E6960] mb-3">
                  Technologies Deployed
                </p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs">
                  {group.technologies.map((tech, idx) => (
                    <span key={tech} className="inline-flex items-center font-mono">
                      <span className="text-[#D5D1C7] group-hover:text-[#F6F4EE] transition-colors">
                        {tech}
                      </span>
                      {idx < group.technologies.length - 1 && (
                        <span className="ml-2 text-[#6E6960]" aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Footnote */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#6E6960]">
          <span>VERIFIED PRODUCTION CAPABILITIES</span>
          <span>FULL-STACK · ACCESSIBLE · MAINTAINABLE</span>
        </div>

      </div>
    </section>
  );
}
