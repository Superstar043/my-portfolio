import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <GlobalHeader />
      <div className="pt-24 container mx-auto">
        <Hero />
      </div>
      <GlobalFooter />
    </main>
  );
};

export default Home;
