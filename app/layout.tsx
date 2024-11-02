import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { ModeToggle } from '@/components/ModeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ItsUi',
  description: 'A minimalist react component library',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} pt-10 flex flex-col items-center w-full h-screen`}
      >
        <main className="max-w-[800px] w-full">
          {' '}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <nav className="fixed border-b border-slate-400 flex justify-between top-0 left-0 w-full bg-white bg-opacity-10 backdrop-blur-md z-[50] p-2.5">
              <Link href="/" className="text-2xl font-bold">ItsUi</Link> <ModeToggle />
            </nav>
            <p className="fixed top-0 left-0">📘🥶💜💜</p>
            <p className="fixed top-5 left-0">🦞🤬💜</p>
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
