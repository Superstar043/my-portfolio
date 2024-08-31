import HeaderItem from './HeaderItem';

import { Satisfy } from 'next/font/google';

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const GlobalHeader = () => (
  <div className="fixed top-0 left-0 w-full">
    <div className="items-center justify-between flex flex-row container mx-auto py-6">
      <div className={`text-[32px] ${satisfy.className}`}>
        Christian Calderon
      </div>
      <div className="flex flex-row gap-6">
        <HeaderItem text="Home" />
        <HeaderItem text="About" />
        <HeaderItem text="Experience" />
        <HeaderItem text="Projects" />
        <HeaderItem text="Resume" />
        <HeaderItem text="Contact" />
      </div>
    </div>
  </div>
);

export default GlobalHeader;
