'use client';
import './ui/globals.css';
import type { Metadata } from 'next';
import { Brygada_1918 } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const brygada = Brygada_1918({ subsets: ['latin'] });
const isActive = 'border-b-4 rounded-b border-[#917702] px-2';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
      className="fixed bottom-6 right-6 "
    >
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/ios/50/circled-chevron-up.png"
        alt="circled-chevron-up"
      />
    </button>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${brygada.className} text-black min-h-screen bg-gradient-to-b from-[#490077] from-18% via-white via-50% to-[#907600] to-90% px-4 pt-2`}
      >
        <nav className="flex items-center justify-between border-b-4 border-[#907600] pb-1.5">
          <div>
            <Image
              src="/companylogo.png"
              width={80}
              height={80}
              alt="Company Logo"
              style={{ borderRadius: '50%' }}
              unoptimized
            />
          </div>
          <div>
            <ul className="flex space-x-3.5 items-center text-white font-bold hover:">
              <li>
                <Link className={`${isActive}`} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <button className="bg-[#917702] px-6 rounded">
                  <Link href="/contact">Contact</Link>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
