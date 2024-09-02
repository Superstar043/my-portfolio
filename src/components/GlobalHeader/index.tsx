'use client';
import HeaderItem from './HeaderItem';

import { Satisfy } from 'next/font/google';
import Link from 'next/link';

import { GiHamburgerMenu } from 'react-icons/gi';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const GlobalHeader = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowHamburger(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="fixed top-0 left-0 w-full shadow-lg bg-white border-b-4 border-green-700 z-[100]">
      <div className="px-8 items-center justify-between flex flex-row container mx-auto py-6">
        <div className={`text-[32px] ${satisfy.className}`}>
          Christian Calderon
        </div>
        <div className="hidden lg:flex-row lg:flex flex-row gap-6">
          <HeaderItem text="Home" href="/" />
          <HeaderItem text="About" href="/about" />
          <HeaderItem text="Experience" href="/experience" />
          <HeaderItem text="Projects" href="/projects" />
          <HeaderItem text="Contact" href="/contact" />
        </div>
        <div className="flex lg:hidden cursor-pointer relative">
          <GiHamburgerMenu onClick={() => setShowHamburger(true)} />
          {showHamburger && (
            <motion.div
              className="absolute flex flex-col top-0 right-0 border-green-700 border bg-white shadow-md overflow-hidden"
              ref={menuRef}
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <Link className="px-4 py-2 hover:bg-black/10" href="/">
                Home
              </Link>
              <Link className="px-4 py-2 hover:bg-black/10" href="/about">
                About
              </Link>
              <Link className="px-4 py-2 hover:bg-black/10" href="/experience">
                Experience
              </Link>
              <Link className="px-4 py-2 hover:bg-black/10" href="/projects">
                Projects
              </Link>
              <Link className="px-4 py-2 hover:bg-black/10" href="/contact">
                Contact
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalHeader;
