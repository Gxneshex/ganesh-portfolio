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
    <section id="education" className="py-24 px-4 bg-white">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-stone-700 to-stone-800 bg-clip-text text-transparent">Education</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-stone-600 to-stone-700 rounded mb-12" />

        <div className="space-y-6">
          {portfolioData.education.map((edu, i) => (
            <div key={i} className="bg-stone-50 rounded-xl p-6 border border-stone-200 hover:border-stone-300 transition-all">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-1">{edu.degree}</h3>
                  <p className="text-stone-500 font-medium">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-stone-100 text-stone-600 text-sm rounded-full border border-stone-200">
                    {edu.period}
                  </span>
                  <p className="text-stone-400 text-sm mt-1">{edu.location}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-sm rounded-full border border-emerald-200">
                  Grade: {edu.grade}
                </span>
              </div>

              <ul className="space-y-2">
                {edu.highlights.map((highlight, j) => (
                  <li key={j} className="flex items-start gap-2 text-stone-600">
                    <span className="text-stone-400 mt-1">▹</span>
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
