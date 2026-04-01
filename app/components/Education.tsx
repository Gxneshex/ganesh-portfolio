'use client';

import { portfolioData } from '@/app/data/portfolio';
import { useEffect, useRef, useState } from 'react';

export default function Education() {
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

  return (
    <section id="education" className="py-24 px-4 bg-red-950/30">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Education</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded mb-12" />

        <div className="space-y-6">
          {portfolioData.education.map((edu, i) => (
            <div key={i} className="bg-red-950/30 rounded-xl p-6 border border-red-900 hover:border-red-500/50 transition-all">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                  <p className="text-red-400 font-medium">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-red-500/10 text-red-400 text-sm rounded-full border border-red-500/20">
                    {edu.period}
                  </span>
                  <p className="text-red-200/60 text-sm mt-1">{edu.location}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20">
                  Grade: {edu.grade}
                </span>
              </div>

              <ul className="space-y-2">
                {edu.highlights.map((highlight, j) => (
                  <li key={j} className="flex items-start gap-2 text-red-100/80">
                    <span className="text-orange-400 mt-1">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
