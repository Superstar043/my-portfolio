import Image from 'next/image';

const Hero = () => (
  <div className="flex flex-col lg:flex-row p-8 gap-4">
    <div className="w-full flex justify-center items-center">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={200}
        height={200}
        className="rounded-full"
      />
    </div>
    <div className="flex w-full">
      <div>I am a fullstack developer</div>
    </div>
  </div>
);

export default Hero;
