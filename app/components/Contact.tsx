'use client';

import { portfolioData } from '@/app/data/portfolio';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-900/50">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Get In Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded mb-8" />

        <p className="text-slate-400 text-lg mb-12 max-w-2xl">
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Email */}
          <button
            onClick={() => {
              navigator.clipboard.writeText('sriganeshkv1@gmail.com');
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="group bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all hover:scale-[1.02] text-left w-full"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <p className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                  {copied ? 'Copied!' : 'sriganeshkv1@gmail.com'}
                </p>
              </div>
            </div>
          </button>

          {/* Phone */}
          <a href={`tel:${portfolioData.phone.replace(/\s/g, '')}`}
            className="group bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Phone</p>
                <p className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                  {"+91 9944458810"}
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a href={"https://www.linkedin.com/in/r-ganesh-"} target="_blank" rel="noopener noreferrer"
            className="group bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-indigo-500/50 transition-all hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-sm">LinkedIn</p>
                <p className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                  Connect with me
                </p>
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-white font-medium">Trichy, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
