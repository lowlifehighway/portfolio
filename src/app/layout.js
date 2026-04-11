import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Victor Ayoola',
  description:
    'I am a data analyst and software engineer specializing in building scalable backend systems and delightful user experiences. Welcome to my personal portfolio website!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var saved = localStorage.getItem('theme');
              var theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
