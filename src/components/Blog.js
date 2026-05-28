'use client';
import useScrollReveal from './useScrollReveal';
import { blog } from '@/data/portfolio';

const delays = ['d1', 'd2', 'd3'];

export default function Blog() {
  const ref = useScrollReveal();

  return (
    <section id="blog" ref={ref} className="relative z-10">
      <div className="max-w-5xl mx-auto px-8 py-24">
        <p className="reveal font-mono text-xs tracking-[3px] uppercase text-(--accent) mb-3">
          {'// Blog'}
        </p>
        <h2 className="reveal d1 text-3xl md:text-5xl font-bold mb-10">
          Things I&apos;ve <span className="text-(--accent)">Written</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.map((post, i) => (
            <a
              key={post.title}
              href={post.href}
              className={`reveal ${delays[i]} group block p-7 border border-(--bd)
                         hover:border-(--bd2) hover:-translate-y-1
                         hover:shadow-(--glow) transition-all duration-300`}
              style={{ background: 'var(--card)' }}
            >
              <div className="flex items-center flex-wrap gap-3 mb-4 font-mono text-[11px] text-(--tx3)">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] text-(--accent) bg-(--accent)/8"
                  >
                    {tag}
                  </span>
                ))}
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="font-semibold text-base leading-snug mb-3">
                {post.title}
              </h3>
              <p className="text-(--tx2) text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <p className="mt-4 font-mono text-[11px] text-(--accent2)">
                → Read article
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
