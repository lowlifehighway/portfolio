'use client';
import useScrollReveal from './useScrollReveal';
import { projects } from '@/data/portfolio';

const delays = ['d1', 'd2', 'd3'];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" ref={ref} className="relative z-10">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <p className="reveal font-mono text-xs tracking-[3px] uppercase text-(--accent) mb-3">
          {'// Projects'}
        </p>
        <h2 className="reveal d1 text-3xl md:text-5xl font-bold mb-10">
          Things I&apos;ve <span className="text-(--accent)">Built</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.num}
              className={`reveal ${delays[i]} relative group overflow-hidden p-7 border
                         ${
                           p.featured
                             ? 'border-(--accent)/30 bg-(--accent)/1.5'
                             : 'border-(--bd)'
                         }
                         hover:border-(--bd2) hover:-translate-y-1.5
                         hover:shadow-(--glow) transition-all duration-300`}
              style={{ background: p.featured ? undefined : 'var(--card)' }}
            >
              {/* top sweep line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100
                           origin-left transition-transform duration-300"
                style={{
                  background:
                    'linear-gradient(90deg, var(--accent), var(--accent2))',
                }}
              />

              <p className="font-mono text-[11px] text-(--tx3) mb-3">
                {p.num}
                {p.featured ? ' — Featured' : ''}
              </p>
              <h3 className="font-bold text-xl mb-3">{p.title}</h3>
              <p className="text-(--tx2) text-sm leading-relaxed mb-4">
                {p.desc}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] px-2.5 py-1 text-(--accent2)
                               border border-(--accent2)/20 bg-(--accent2)/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {p.github && (
                  <a
                    href={p.github}
                    className="font-mono text-[11px] text-(--tx2) hover:text-(--accent) transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    className="font-mono text-[11px] text-(--tx2) hover:text-(--accent) transition-colors"
                  >
                    Live Demo ↗
                  </a>
                )}
                {p.docs && (
                  <a
                    href={p.docs}
                    className="font-mono text-[11px] text-(--tx2) hover:text-(--accent) transition-colors"
                  >
                    Docs ↗
                  </a>
                )}
                {p.npm && (
                  <a
                    href={p.npm}
                    className="font-mono text-[11px] text-(--tx2) hover:text-(--accent) transition-colors"
                  >
                    NPM ↗
                  </a>
                )}
                {p.prod && (
                  <a
                    href={p.prod}
                    className="font-mono text-[11px] text-(--tx2) hover:text-(--accent) transition-colors"
                  >
                    Production ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
