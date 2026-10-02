/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Expertise from './components/Expertise';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  return (
    <div className="min-h-screen bg-[#0D0F11] text-[#A8A398] selection:bg-[#2FA499]/25 selection:text-[#F6F4EE] flex flex-col font-sans">
      <Navbar onOpenResume={handleOpenResume} />
      <main className="flex-grow">
        <Hero onOpenResume={handleOpenResume} />
        <Projects />
        <About onOpenResume={handleOpenResume} />
        <Expertise />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer onOpenResume={handleOpenResume} />

      {/* Global Interactive Résumé Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
