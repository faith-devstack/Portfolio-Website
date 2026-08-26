/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutExpertise from './components/AboutExpertise';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cyber-bg font-sans selection:bg-cyber-cyan/30 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <AboutExpertise />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
