import FooterItem from './FooterItem';

import { Satisfy } from 'next/font/google';

import { FaPaperPlane } from 'react-icons/fa';

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
});

const GlobalFooter = () => (
  <div className="w-full bg-gradient-to-b from-white to-green-700 py-12">
    <div className="container mx-auto flex flex-col lg:flex-row">
      <div className="w-full flex flex-row">
        <div className={`w-full text-3xl font-bold ${satisfy.className}`}>
          Christian Calderon
        </div>
        <div className="flex w-full flex-col gap-3 items-start justify-center">
          <FooterItem text="Home" />
          <FooterItem text="About" />
          <FooterItem text="Projects" />
          <FooterItem text="Contact" />
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center px-6 py-5 gap-4 contactBox">
        <div className="absolute top-0 left-0 size-full bg-white/50 z-[-2]"></div>
        <div className="text-2xl">
          Ready to create an incredible project together?
        </div>
        <div className="bg-green-500 py-2 px-4 text-white contactButton flex flex-row gap-2 items-center">
          Contact Me
          <FaPaperPlane />
        </div>
      </div>
    </div>
  </div>
);

export default GlobalFooter;
