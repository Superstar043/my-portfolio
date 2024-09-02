import { Caveat } from 'next/font/google';

const handFont = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

const Hero = () => (
  <div className="hero w-full relative min-h-screen items-center flex">
    <div className="flex flex-col gap-4 px-8 container mx-auto">
      <div className="text-6xl">
        Hi! I am <span className={handFont.className}>Christian Calderon</span>
      </div>
      <div className="text-3xl font-semibold">Welcome to my Portfolio.</div>
      <div className="max-w-[600px]">
        I am an experienced full-stack developer with 8 years of experience. I
        love building scalable and efficient solutions. My problem-solving
        skills help me tackle tough challenges, and I enjoy working with diverse
        teams. I thrive in dynamic environments and am committed to delivering
        top-notch work.
      </div>
    </div>
  </div>
);

export default Hero;
