'use client';
import { useEffect, useState } from 'react';

const links = [
  ['#about', 'about'],
  ['#skills', 'skills'],
  ['#projects', 'projects'],
  ['#experience', 'experience'],
  ['#blog', 'blog'],
  ['#contact', 'contact'],
];

export default function Navbar() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const active = document.documentElement.getAttribute('data-theme');
    if (active === 'light' || active === 'dark') setTheme(active);
  }, []);

  const toggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-15 flex items-center justify-between px-8
                 border-b border-(--bd) backdrop-blur-xl transition-colors duration-300"
      style={{
        background:
          theme === 'dark' ? 'rgba(10,10,15,.82)' : 'rgba(244,244,240,.88)',
      }}
    >
      {/* Logo */}
      <span className="font-mono text-sm tracking-widest uppercase text-(--accent)">
        &lt;<span className="text-(--tx2)">Victor</span> /&gt;
      </span>

      {/* Links + toggle */}
      <div className="flex items-center gap-8">
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-[11px] tracking-widest uppercase text-(--tx2)
                           hover:text-(--accent) transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          aria-pressed={theme === 'light'}
          className="relative h-8 w-18 rounded-full border border-(--bd2) px-1 transition-all duration-300
                     hover:border-(--accent) hover:shadow-[0_0_16px_rgba(0,255,136,0.2)]"
          style={{
            background:
              theme === 'dark'
                ? 'linear-gradient(120deg, rgba(0,255,136,0.11), rgba(0,255,136,0.03))'
                : 'linear-gradient(120deg, rgba(0,122,66,0.2), rgba(0,122,66,0.05))',
          }}
        >
          <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 font-mono text-[10px] tracking-widest uppercase text-(--tx2)">
            <span>dk</span>
            <span>lt</span>
          </span>
          <span
            className="pointer-events-none absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-(--accent)
                       bg-(--card) text-[12px] leading-6 text-(--accent) shadow-[0_0_14px_rgba(0,255,136,0.35)] transition-all duration-300"
            style={{
              left: theme === 'dark' ? '4px' : 'calc(100% - 28px)',
            }}
          >
            {theme === 'dark' ? '☽' : '☀'}
          </span>
        </button>
      </div>
    </nav>
  );
}
