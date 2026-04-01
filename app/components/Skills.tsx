'use client';

import { portfolioData } from '@/app/data/portfolio';
import { useEffect, useRef, useState } from 'react';

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const skillColors: Record<string, { from: string; to: string }> = {
    "Frontend": { from: 'from-blue-500/20', to: 'to-blue-600/20 border-blue-500/30' },
    "Backend": { from: 'from-green-500/20', to: 'to-green-600/20 border-green-500/30' },
    "Database": { from: 'from-yellow-500/20', to: 'to-yellow-600/20 border-yellow-500/30' },
    "Tools & Cloud": { from: 'from-purple-500/20', to: 'to-purple-600/20 border-purple-500/30' },
  };

  return (
    <section id="skills" className="py-24 px-4">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(portfolioData.skills).map(([category, skills], i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${skillColors[category]?.from || 'from-slate-700/50'} ${skillColors[category]?.to || 'to-slate-800/50'} rounded-xl p-6 border ${skillColors[category]?.to?.split(' ')[1] || 'border-slate-700'}`}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-current" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 bg-slate-800/50 text-slate-200 text-sm rounded-lg border border-slate-700/50 hover:border-slate-600 transition-all hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
