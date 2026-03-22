/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import SplashScreen from './components/SplashScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import resumeData from './data/resume.json';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-emerald-500/30 font-sans">
      <AnimatedBackground />
      <AnimatePresence mode="wait">
        {loading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!loading && (
        <div className="relative z-10">
          <Navbar />
          <main className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
            <Hero data={resumeData.basics} />
            <Achievements data={resumeData.achievements} />
            <Experience education={resumeData.education} experience={resumeData.experience} certifications={resumeData.certifications} />
            <Projects data={resumeData.projects} />
            <Skills data={resumeData.skills} />
          </main>
          <footer className="py-8 text-center text-zinc-500 text-sm border-t border-white/5 mt-24">
            <p>© {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.</p>
          </footer>
        </div>
      )}
    </div>
  );
}
