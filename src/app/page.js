import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Blog from '@/components/Blog';
import BackToTop from '@/components/BackToTop';
import { contact } from '@/data/portfolio';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* soft radial accents behind content with pulsating animation */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 h-screen w-screen rounded-full blur-3xl pulse-glow-1"
          style={{ background: 'rgba(0, 255, 136, 0.12)' }}
        />
        <div
          className="absolute top-1/2 -right-80 h-screen w-screen rounded-full blur-3xl pulse-glow-2"
          style={{ background: 'rgba(0, 204, 255, 0.1)' }}
        />
        <div
          className="absolute bottom-0 left-1/2 h-screen w-screen rounded-full blur-3xl pulse-glow-1"
          style={{ background: 'rgba(0, 255, 136, 0.08)', animationDelay: '2s' }}
        />
      </div>

      <Navbar />
      <ScrollProgress />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />

        <section id="contact" className="relative z-10">
          <div className="max-w-5xl mx-auto px-8 py-24 border-t border-(--bd)">
            <p className="font-mono text-xs tracking-[3px] uppercase text-(--accent) mb-3">
              {'// Contact'}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let&apos;s <span className="text-(--accent)">build</span>
            </h2>
            <p className="text-(--tx2) max-w-xl leading-relaxed mb-8">
              Open to impactful product work, systems challenges, and developer
              platform roles.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="font-mono text-xs tracking-widest uppercase px-6 py-3 bg-(--accent)
                           text-black hover:brightness-110 transition-all duration-200"
              >
                Email Me
              </a>
              <a
                href={`https://${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-(--bd2)
                           text-(--tx) hover:border-(--accent) hover:text-(--accent)
                           transition-all duration-200"
              >
                GitHub
              </a>
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-(--bd2)
                           text-(--tx) hover:border-(--accent) hover:text-(--accent)
                           transition-all duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-(--bd)">
        <div className="max-w-5xl mx-auto px-8 py-6 font-mono text-[11px] text-(--tx3) tracking-[1px] uppercase">
          © {new Date().getFullYear()} Your Name. Built with Next.js.
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
