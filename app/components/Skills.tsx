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
    "Frontend": { from: 'from-stone-100', to: 'to-stone-50 border-stone-300' },
    "Backend": { from: 'from-amber-50', to: 'to-amber-100 border-amber-300' },
    "Database": { from: 'from-emerald-50', to: 'to-emerald-100 border-emerald-300' },
    "Tools & Cloud": { from: 'from-stone-100', to: 'to-stone-50 border-stone-300' },
  };

  return (
    <section id="skills" className="py-24 px-4 bg-stone-50">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-stone-700 to-stone-800 bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-stone-600 to-stone-700 rounded mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(portfolioData.skills).map(([category, skills], i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${skillColors[category]?.from || 'from-stone-100'} ${skillColors[category]?.to || 'to-stone-50'} rounded-xl p-6 border ${skillColors[category]?.to?.split(' ')[1] || 'border-stone-200'}`}
            >
              <h3 className="text-lg font-semibold text-stone-700 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-current" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 bg-white text-stone-600 text-sm rounded-lg border border-stone-200 hover:border-stone-400 transition-all hover:scale-105 shadow-sm"
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
