import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Education from '@/app/components/Education';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Certifications from '@/app/components/Certifications';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import { portfolioData } from '@/app/data/portfolio';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

export async function generateMetadata() {
  return {
    title: `${portfolioData.name} | ${portfolioData.title}`,
    description: portfolioData.seo.description,
    keywords: portfolioData.seo.keywords,
    openGraph: {
      title: `${portfolioData.name} | ${portfolioData.title}`,
      description: portfolioData.seo.description,
      type: 'website',
    },
  };
}
