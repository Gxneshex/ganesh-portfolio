'use client';

import { portfolioData } from '@/app/data/portfolio';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-4 bg-slate-900/50">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded mb-8" />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
              A motivated and detail-oriented pre-final year Artificial Intelligence and Machine Learning student, currently building a strong foundation in machine learning and AI. Passionate about exploring innovative technologies and contributing to impactful projects in dynamic environments. I am particularly interested in the intersection of AI and finance, with a long-term goal of developing machine learning solutions for financial forecasting, fraud detection, and investment optimization. Committed to learning from experiences, working with diverse datasets, and developing expertise in cutting-edge AI technologies. Eager to collaborate with forward-thinking individuals and grow continuously, both personally and professionally.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
              <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-3">Quick Facts</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-slate-500 text-sm">Experience</p>
                  <p className="text-white font-medium">Fresher</p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Location</p>
                  <p className="text-white font-medium">Trichy, Tamil Nadu, India </p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Education</p>
                  <p className="text-white font-medium">B.Tech AIML</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
