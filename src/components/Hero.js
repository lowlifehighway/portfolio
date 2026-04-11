'use client';
import { useEffect, useRef, useState } from 'react';
import { hero } from '@/data/portfolio';

const PHRASES = [
  'hello_world.sh',
  'init portfolio.js',
  'git push origin main',
  'npm run build',
  'python transformer.py',
];

function useTyped() {
  const [text, setText] = useState('');
  const s = useRef({ pi: 0, ci: 0, del: false });

  useEffect(() => {
    let t;
    const tick = () => {
      const { pi, ci, del } = s.current;
      const cur = PHRASES[pi];
      if (!del) {
        const n = ci + 1;
        setText(cur.slice(0, n));
        s.current.ci = n;
        if (n === cur.length) {
          s.current.del = true;
          t = setTimeout(tick, 1800);
          return;
        }
      } else {
        const n = ci - 1;
        setText(cur.slice(0, n));
        s.current.ci = n;
        if (n === 0) {
          s.current.del = false;
          s.current.pi = (pi + 1) % PHRASES.length;
        }
      }
      t = setTimeout(tick, s.current.del ? 45 : 85);
    };
    t = setTimeout(tick, 500);
    return () => clearTimeout(t);
  }, []);

  return text;
}

function StatCard({ num, suffix, label }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const step = num / (1200 / 16);
          let cur = 0;
          const timer = setInterval(() => {
            cur = Math.min(cur + step, num);
            setVal(Math.round(cur));
            if (cur >= num) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [num]);

  return (
    <div className="flex flex-col gap-1" ref={ref}>
      <span className="font-mono text-3xl font-bold text-(--accent)">
        {val}
        {suffix}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-widest text-(--tx2)">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const typed = useTyped();
  const ref = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current
        ?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach((el) => el.classList.add('visible'));
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative z-10 min-h-screen flex flex-col justify-center pt-20"
    >
      <div className="max-w-5xl mx-auto w-full px-8 py-24">
        {/* Typed line */}
        <div className="reveal flex items-center gap-2 font-mono text-sm text-(--accent2) mb-4">
          <span className="text-(--tx3)">$</span>
          <span className="typed-cursor pr-0.5">{typed}</span>
        </div>

        {/* Name */}
        <h1
          className="reveal d1 font-bold leading-none tracking-tighter mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          {hero.name}
          <br />
          <span className="font-light text-(--tx3)">{hero.title}</span>
        </h1>

        {/* Tagline */}
        <p
          className="reveal d2 text-(--tx2) max-w-lg leading-relaxed mb-10
                     border-l-2 border-(--accent) pl-4"
          style={{ fontSize: 'clamp(.95rem, 2vw, 1.1rem)' }}
        >
          {hero.tagline}
        </p>

        {/* CTAs */}
        <div className="reveal d3 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="font-mono text-xs tracking-widest uppercase font-bold px-8 py-3
                       bg-(--accent) text-black hover:brightness-110 hover:-translate-y-0.5
                       transition-all duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="font-mono text-xs tracking-widest uppercase px-8 py-3
                       border border-(--bd2) text-(--tx)
                       hover:border-(--accent) hover:text-(--accent)
                       hover:-translate-y-0.5 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="reveal d4 flex flex-wrap gap-12 mt-16 pt-8 border-t border-(--bd)">
          {hero.stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
