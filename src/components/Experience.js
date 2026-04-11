'use client';
import useScrollReveal from './useScrollReveal';
import { experience } from '@/data/portfolio';

const delays = ['d1', 'd2', 'd3'];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" ref={ref} className="relative z-10">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <p className="reveal font-mono text-xs tracking-[3px] uppercase text-(--accent) mb-3">
          {'// Work Experience'}
        </p>
        <h2 className="reveal d1 text-3xl md:text-5xl font-bold mb-10">
          Where I&apos;ve <span className="text-(--accent)">Worked</span>
        </h2>

        <div className="relative pl-8 border-l border-(--bd)">
          {experience.map((job, i) => (
            <div
              key={job.company}
              className={`reveal ${delays[i]} relative mb-12 last:mb-0`}
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-[2.45rem] top-1.5 w-2 h-2 border-2 border-(--bg)"
                style={{ background: 'var(--accent)' }}
              />

              <p className="font-mono text-[11px] tracking-widest text-(--tx3) mb-1">
                {job.date}
              </p>
              <h3 className="font-bold text-lg mb-0.5">{job.role}</h3>
              <p className="font-mono text-xs text-(--accent2) mb-3">
                {job.company}
              </p>

              <ul className="space-y-1.5">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-sm text-(--tx2) leading-relaxed pl-4 relative"
                  >
                    <span className="absolute left-0 top-1 text-(--accent) text-[10px]">
                      ▸
                    </span>
                    {b}
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
