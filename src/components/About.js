'use client';
import useScrollReveal from './useScrollReveal';
import { about } from '@/data/portfolio';

export default function About() {
  const ref = useScrollReveal();
  const j = about.json;

  return (
    <section id="about" ref={ref} className="relative z-10">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <p className="reveal section-label font-mono text-xs tracking-[3px] uppercase text-(--accent) mb-3">
          {'// About Me'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="reveal-left">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {about.headline[0]}
              <span className="text-(--accent)">{about.headline[1]}</span>
              {about.headline[2]}
            </h2>
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-(--tx2) leading-relaxed mb-4 text-base"
              >
                {p}
              </p>
            ))}
          </div>

          {/* JSON card */}
          <div
            className="reveal-right font-mono text-xs leading-loose p-6 border border-(--bd)"
            style={{ background: 'var(--card)' }}
          >
            <span className="text-(--tx3)">{'// who_am_i.json'}</span>
            <br />
            <span className="text-(--tx)">{'{'}</span>
            <br />
            {[
              ['name', `"${j.name}"`],
              ['role', `"${j.role}"`],
              ['location', `"${j.location}"`],
            ].map(([k, v]) => (
              <div key={k} className="ml-4">
                <span className="text-(--accent2)">&quot;{k}&quot;</span>
                <span className="text-(--tx2)">: </span>
                <span className="text-[#e09050]">{v}</span>
                <span className="text-(--tx2)">,</span>
              </div>
            ))}
            <div className="ml-4">
              <span className="text-(--accent2)">&quot;languages&quot;</span>
              <span className="text-(--tx2)">: </span>
              <span className="text-(--tx)">[</span>
              <div className="ml-4">
                {j.languages.map((l, i) => (
                  <span key={l}>
                    <span className="text-[#e09050]">&quot;{l}&quot;</span>
                    {i < j.languages.length - 1 && (
                      <span className="text-(--tx2)">, </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="text-(--tx)">]</span>
              <span className="text-(--tx2)">,</span>
            </div>
            <div className="ml-4">
              <span className="text-(--accent2)">&quot;available&quot;</span>
              <span className="text-(--tx2)">: </span>
              <span className="text-(--accent)">{String(j.available)}</span>
              <span className="text-(--tx2)">,</span>
            </div>
            <div className="ml-4">
              <span className="text-(--accent2)">&quot;coffee&quot;</span>
              <span className="text-(--tx2)">: </span>
              <span className="text-[#e09050]">&quot;{j.coffee}&quot;</span>
            </div>
            <span className="text-(--tx)">{'}'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
