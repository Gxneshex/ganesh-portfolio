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
    <section id="experience" className="py-24 px-4">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded mb-12" />

        <div className="space-y-8">
          {portfolioData.experience.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-red-900 hover:border-red-500 transition-colors">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-red-950 border-2 border-red-500" />

              <div className="bg-red-950/30 rounded-xl p-6 border border-red-900 hover:border-red-800 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-red-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-red-500/10 text-red-400 text-sm rounded-full border border-red-500/20">
                    {exp.period}
                  </span>
                </div>

                <p className="text-red-200/60 mb-4">{exp.location}</p>
                <p className="text-red-100/80 mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="text-red-200/60 text-sm uppercase tracking-wider mb-2">Key Highlights</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, j) => (
                      <li key={j} className="flex items-start gap-2 text-red-100/80">
                        <span className="text-orange-400 mt-1.5">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, k) => (
                    <span key={k} className="px-2.5 py-1 bg-red-900/50 text-red-200 text-xs rounded-md">
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
