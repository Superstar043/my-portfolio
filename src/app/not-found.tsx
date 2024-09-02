import Image from 'next/image';
import Link from 'next/link';

import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';

const NotFound = () => (
  <main className="flex flex-col w-full justify-center items-center">
    <GlobalHeader />
    <div className="container min-h-screen items-center w-full flex flex-col lg:flex-row justify-center px-8">
      <div className="w-full flex flex-col gap-4">
        <div className="text-4xl font-semibold">Page Not Found</div>
        <Link href="/">
          <button className="px-4 py-2 bg-green-500 rounded-md text-white customButton">
            Go to homepage
          </button>
        </Link>
      </div>
      <Image
        src="/404.jpg"
        alt="404"
        width={500}
        height={500}
        className="w-full object-contain max-w-[500px]"
      />
    </div>
    <GlobalFooter />
  </main>
);

export default NotFound;
