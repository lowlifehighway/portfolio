export const hero = {
  name: 'Ayoola Victor',
  title: 'Engineer || Analyst',
  tagline:
    'I build fast, scalable systems and clean interfaces.I am passionate about developer tooling, open source projects, bringing ideas to life, and writing code that other humans can actually read.',
  stats: [
    { num: 5, suffix: '+', label: 'Years exp' },
    { num: 24, suffix: '+', label: 'Projects' },
    // { num: 12, suffix: 'k', label: 'GitHub Stars' },
    // { num: 3, suffix: '', label: 'Open Source' },
  ],
};

export const about = {
  headline: ['I turn ', 'complex problems', ' into elegant code.'],
  paragraphs: [
    "I'm a software engineer with a focus on backend systems and developer experience. I care deeply about code quality, system design, and building things that last.",
    "When I'm not shipping features, you'll find me reading on what's new, writing about my experiences, or experimenting with new tools and languages.",
    'Based in Lagos, Nigeria — working globally.',
  ],
  json: {
    name: 'Ayoola Victor',
    role: 'Engineer || Analyst',
    location: 'Lagos, NG',
    languages: [
      'TypeScript',
      'Python',
      'JavaScript',
      'Node.js',
      'React',
      'Next.js',
    ],
    available: true,
  },
};

export const skills = [
  { title: 'Languages', tags: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
  {
    title: 'Frontend',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'WebGL', 'React Native'],
  },
  { title: 'Backend', tags: ['Node.js', 'FastAPI', 'REST APIs', 'Redis'] },
  { title: 'Databases', tags: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'] },
  {
    title: 'Data Analysis',
    tags: ['Python (Pandas, NumPy)', 'Matplotlib', 'Google Sheets'],
  },
  { title: 'Tools & Other', tags: ['Git'] },
];

export const projects = [
  {
    num: '01',
    featured: true,
    title: 'UniRide',
    desc: 'A ride hailing app built as a solution to reduce wait time and modernize and digitize the movement around my school.',
    tech: ['React Native', 'Redis', 'Firebase Auth', 'FireStore', 'MapBox'],
    github: 'https://github.com/lowlifehighway/Uniride',
    demo: '',
  },
  {
    num: '02',
    title: 'fetchroids',
    desc: 'An npm package built around the native fetch function in nodejs to fix issues such as retries, timeouts and more.',
    tech: ['Node.js'],
    github: 'https://github.com/lowlifehighway/fetchroids',
    docs: 'https://github.com/lowlifehighway/fetchroids#readme',
    npm: 'https://www.npmjs.com/package/fetchroids',
  },
  {
    num: '03',
    title: 'Chrema',
    desc: 'An e-commerce platform for business owners to create their own websites, showcase their products and sell directly to customers.',
    tech: [
      'React',
      'Next.js',
      'PostgreSQL',
      'Node.js',
      'Fastify',
      'Paystack API',
      'Groq AI',
    ],
    github: 'https://github.com/lowlifehighway/Chrema',
    prod: 'https://chrema.store',
  },
  {
    num: '05',
    title: 'Wordle',
    desc: 'A simple wordle game.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/lowlifehighway/wordleapp',
    docs: 'https://github.com/lowlifehighway/wordleapp#readme',
    demo: 'https://wordle-app-seven.vercel.app/',
  },
  {
    num: '04',
    title: 'Url Shortener',
    desc: 'A simple url shortener that allows you password protect your shortened urls which expire in 30days, generates a QR code and filters out urls containing malicious related words.',
    tech: ['React', 'Node.js', 'Tailwind'],
    github: 'https://github.com/lowlifehighway/url-shortener',
    docs: 'https://github.com/lowlifehighway/url-shortener#readme',
    prod: 'https://url-shortener-nu-lemon.vercel.app',
  },
  {
    num: '06',
    title: 'Budget Buddy',
    desc: 'A webapp that allows you to create and manage your personal budget.',
    tech: ['React', 'Node.js', 'Tailwind'],
    github: 'https://github.com/lowlifehighway/budgetbuddy',
    docs: 'https://github.com/lowlifehighway/budgetbuddy#readme',
    demo: 'https://budget-buddy-phi-kohl.vercel.app/',
  },
  {
    num: '07',
    title: 'Calculator App',
    desc: 'A simple calculator app built with vanilla html and js.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/lowlifehighway/Frontend-Mentor-Calculator-app',
    demo: 'https://frontend-mentor-calculator-app-zeta.vercel.app/',
  },
  {
    num: '08',
    title: 'CinemaNest',
    desc: 'A movie database website that allows you to view trending movies, look up details, and discover new releases.',
    tech: ['React', 'CSS', 'Node.js', 'Express', 'The Movie Database API'],
    github: 'https://github.com/lowlifehighway/CinemaNest',
    demo: 'https://cinemanest.vercel.app/',
  },
  {
    num: '09',
    title: 'Space Tourism Website',
    desc: 'A space tourism website that allows you to explore different planets and view technology and steps involved in space travel.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/lowlifehighway/spacetourismwebsite',
    demo: 'https://lowlifehighway.github.io/spacetourismwebsite/',
  },
  {
    num: '10',
    title: 'Climate Explorer',
    desc: 'A Python data analysis project that fetches real NASA GISS global surface temperature data, analyzes trends since 1880, and generates clean visualizations.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
    github: 'https://github.com/lowlifehighway/climate-explorer',
    docs: 'https://github.com/lowlifehighway/climate-explorer#readme',
  },
  {
    num: '11',
    title: 'Culver Messaging App',
    desc: 'A simple messaging app that allows for secure end to end messaging.',
    tech: [
      'React TypeScript',
      'Node.js',
      'Yarn',
      'Firebase Auth',
      'Redis',
      'PostgreSQL',
    ],
    github: 'https://github.com/iota-org/Culver-backend',
    docs: 'https://docs.google.com/document/d/1ZvM9SbK-Yd0_k6jmXV6Ve_bKabbqaTkEM8e20alKLBA/edit',
  },
];

export const experience = [
  {
    date: '2022 — Present',
    role: 'Backend Engineer',
    company: 'Rise Academy Fellowship',
    bullets: [],
  },
  {
    date: '2021 — Present',
    role: 'Software Engineer',
    company: 'Freelance',
    bullets: ['Built scalable web apps for clients'],
  },
  {
    date: '2025',
    role: 'Data and Business Intelligence Analyst',
    company: 'SunFi',
    bullets: [
      'Built and maintained real-time data pipelines processing events',
      'Tested and validated data to ensure accuracy and reliability of analytics and reporting',
      'Collects, cleans, and interprets data from multiple sources to provide actionable insights that drive business decisions and strategy',
      'Focuses on optimizing operations, tracking performance, and documenting systems.',
    ],
  },
  {
    date: '2024',
    role: 'Junior Frontend Developer',
    company: 'Vibraniuum Technologies.',
    bullets: [
      'I Built responsive web interfaces using NextJs, React and TypeScript',
      'Collaborated with design and product teams in agile sprints',
    ],
  },
];

export const blog = [
  {
    tag: 'System Design',
    date: 'Apr 2026',
    readTime: '8 min read',
    title: 'Staying Open for Business on the Busiest Internet Shopping Day',
    excerpt:
      "How Node.js's cluster module and graceful shutdown logic keep your e-commerce server alive—and serving—during a Black Friday spike that would kill a naive single-process app.",
    href: 'https://dev.to/lowlifehighway/staying-open-for-business-on-the-busiest-internet-shopping-day-2gdd',
  },
  {
    tag: ['System Design', 'Security', 'Backend', 'Frontend'],
    date: 'May 2026',
    readTime: '8 min read',
    title:
      'How My Team from Risevest Academy and I Built an End-to-End Encrypted Messaging App in 3 Weeks',
    excerpt:
      'My experience building a secure, realtime end-to-end encrypted messaging platform. Complete with push notifications, websocket messaging, media sharing, etc.',
    href: 'https://dev.to/lowlifehighway/how-my-team-from-risevest-academy-and-i-built-an-end-to-end-encrypted-messaging-app-in-3-weeks-2ib5',
  },
];

export const contact = {
  email: 'ayoolavictorayodamola@gmail.com',
  github: 'github.com/lowlifehighway',
  linkedin: 'linkedin.com/in/ayoolavictor/',
};
