'use client';
import useScrollReveal from './useScrollReveal';
import { skills } from '@/data/portfolio';

const delays = ['d1', 'd2', 'd3', 'd4', 'd5', 'd6'];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="relative z-10">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <p className="reveal font-mono text-xs tracking-[3px] uppercase text-(--accent) mb-3">
          {'// Skills'}
        </p>
        <h2 className="reveal d1 text-3xl md:text-5xl font-bold mb-10">
          My <span className="text-(--accent)">Tech Stack</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group, i) => (
            <div
              key={group.title}
              className={`reveal ${delays[i]} p-6 border border-(--bd)
                         hover:border-(--accent) hover:shadow-(--glow)
                         transition-all duration-200`}
              style={{ background: 'var(--card)' }}
            >
              <p className="font-mono text-[11px] tracking-[2px] uppercase text-(--accent) mb-4">
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-3 py-1.5 text-(--tx)
                               border border-(--accent)/20 bg-(--accent)/5
                               hover:bg-(--accent)/15 hover:border-(--accent)
                               hover:text-(--accent) transition-all duration-200 cursor-default"
                  >
                    {tag}
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
