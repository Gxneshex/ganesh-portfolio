'use client';

import { portfolioData } from '@/app/data/portfolio';
import { useEffect, useRef, useState } from 'react';

export default function Experience() {
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
    <section id="experience" className="py-24 px-4 bg-stone-50">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-stone-700 to-stone-800 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-stone-600 to-stone-700 rounded mb-12" />

        <div className="space-y-8">
          {portfolioData.experience.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-stone-200 hover:border-stone-400 transition-colors">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-white border-2 border-stone-400" />

              <div className="bg-white rounded-xl p-6 border border-stone-200 hover:border-stone-300 transition-all shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800">{exp.role}</h3>
                    <p className="text-stone-500 font-medium">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-stone-100 text-stone-600 text-sm rounded-full border border-stone-200">
                    {exp.period}
                  </span>
                </div>

                <p className="text-stone-500 mb-4">{exp.location}</p>
                <p className="text-stone-600 mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="text-stone-400 text-sm uppercase tracking-wider mb-2">Key Highlights</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, j) => (
                      <li key={j} className="flex items-start gap-2 text-stone-600">
                        <span className="text-stone-400 mt-1.5">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, k) => (
                    <span key={k} className="px-2.5 py-1 bg-stone-100 text-stone-500 text-xs rounded-md border border-stone-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
