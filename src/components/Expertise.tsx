const skillGroups = [
  {
    index: '01',
    title: 'Frontend & Interfaces',
    summary: 'Responsive client architectures, component design systems, and accessible interactions.',
    technologies: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Vite', 'Lucide React'],
  },
  {
    index: '02',
    title: 'Backend & Data Layers',
    summary: 'Structured REST APIs, database schema design, server middleware, and authentication flows.',
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase (Auth & Firestore)',
      'PostgreSQL',
      'Supabase',
      'Drizzle ORM',
      'REST APIs',
    ],
  },
  {
    index: '03',
    title: 'Engineering & Delivery',
    summary: 'Version control, client-to-cloud deployment pipelines, testing, and AI tool integration.',
    technologies: [
      'Git & GitHub',
      'Vercel',
      'Render',
      'Gemini API',
      'Mechatronics Automation',
      'Linux Environments',
      'Responsive UX Design',
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
            <span className="text-[#8E8A80]">/</span>
            <span>Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F6F4EE] tracking-tight">
            Disciplined <span className="font-serif italic text-[#F6F4EE]">technical</span> foundations.
          </h2>
          <p className="text-base text-[#C8C4BA] mt-4 leading-relaxed font-normal">
            A concentrated toolkit organized across client interfaces, backend data systems, and automated deployment pipelines.
          </p>
        </div>

        {/* 3 Meaningful Groups Grid: Generous Whitespace, Zero-Pill */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {skillGroups.map((group) => (
            <div
              key={group.index}
              className="bg-[#14171A] border border-white/[0.1] hover:border-white/[0.2] p-8 rounded-sm flex flex-col justify-between transition-colors group shadow-lg"
            >
              <div>
                {/* Index & Teal Accent Marker */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                  <span className="font-mono text-xs text-[#2FA499] tracking-widest font-medium">
                    GROUP {group.index}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2FA499]" />
                </div>

                {/* Group Title */}
                <h3 className="font-serif italic text-2xl text-[#F6F4EE] mb-2.5 group-hover:text-[#2FA499] transition-colors">
                  {group.title}
                </h3>

                {/* Concise Summary with High Contrast */}
                <p className="text-sm text-[#C8C4BA] leading-relaxed mb-6 font-normal">
                  {group.summary}
                </p>
              </div>

              {/* Technologies: Clean, Unboxed List with Subtle Separators */}
              <div className="pt-6 border-t border-white/[0.08]">
                <p className="text-xs font-mono tracking-widest uppercase text-[#9E988D] mb-3 font-medium">
                  Technologies Deployed
                </p>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-xs sm:text-sm">
                  {group.technologies.map((tech, idx) => (
                    <span key={tech} className="inline-flex items-center font-mono">
                      <span className="text-[#E2DFD7] group-hover:text-[#F6F4EE] transition-colors">
                        {tech}
                      </span>
                      {idx < group.technologies.length - 1 && (
                        <span className="ml-2.5 text-[#6E6960]" aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Footnote */}
        <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#9E988D]">
          <span>VERIFIED FULL-STACK CAPABILITIES</span>
          <span className="text-[#2FA499]">ACCESSIBLE · MAINTAINABLE · PRODUCTION-READY</span>
        </div>

      </div>
    </section>
  );
}
