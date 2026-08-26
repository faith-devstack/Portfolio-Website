import { useState } from 'react';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call for form submission
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-cyber-card/50 border-t border-cyber-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <span className="text-cyber-cyan font-mono text-xl">06.</span> Get In Touch
          </h2>
          <div className="w-16 h-1 bg-cyber-cyan mb-4 rounded-full mx-auto shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Currently open to new opportunities, freelance projects, and exciting collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="p-8 rounded-2xl bg-cyber-bg border border-cyber-border">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="flex flex-col gap-6">
                <a href="mailto:abejidefaith110@gmail.com" className="group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyber-card flex items-center justify-center text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-cyber-bg transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-slate-400 mb-1">Email</p>
                    <p className="text-white group-hover:text-cyber-cyan transition-colors">abejidefaith110@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyber-card flex items-center justify-center text-indigo-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-slate-400 mb-1">Location</p>
                    <p className="text-white">Available Worldwide (Remote)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-cyber-bg border border-cyber-border shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-mono text-slate-400">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-mono text-slate-400">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mb-8">
                <label htmlFor="message" className="text-sm font-mono text-slate-400">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="bg-cyber-card border border-cyber-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-cyber-cyan text-cyber-bg font-bold hover:bg-cyber-cyan-glow transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending Protocol...
                  </>
                ) : status === 'success' ? (
                  'Message Transmitted'
                ) : (
                  <>
                    Initialize Connection
                    <Send size={18} />
                  </>
                )}
              </button>
              
              {status === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-cyber-cyan text-center mt-4 text-sm font-medium"
                >
                  Message successfully sent! I will respond shortly.
                </motion.p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
