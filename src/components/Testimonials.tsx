import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Product Owner',
    content: 'Faith is an exceptional web developer. He delivered our e-commerce platform ahead of schedule with incredibly clean code. His understanding of full-stack architecture is top-notch.',
    initials: 'SJ'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Founder, CloudSync',
    content: 'An absolute powerhouse when it comes to building full-stack applications. The backend REST API Faith built for us is lightning fast, scalable, and beautifully structured.',
    initials: 'DC'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Product Manager',
    content: 'Working with Faith was a seamless experience. He brings a unique blend of engineering rigor and design sensibility to frontend interfaces. Our web application\'s performance improved tenfold.',
    initials: 'ER'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative bg-cyber-bg border-t border-cyber-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <span className="text-cyber-cyan font-mono text-xl">05.</span> What Clients Say
          </h2>
          <div className="w-16 h-1 bg-cyber-cyan mb-4 rounded-full mx-auto shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={testimonial.id}
              className="bg-cyber-card border border-cyber-border rounded-2xl p-8 relative hover:border-cyber-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-cyber-cyan/10" />
              
              <p className="text-slate-300 mb-8 relative z-10 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-cyber-bg border border-cyber-border flex items-center justify-center text-cyber-cyan font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-slate-500 text-xs font-mono">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
