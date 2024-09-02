import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import Hero from '@/components/Hero';

const Home = () => {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <GlobalHeader />
      <Hero />
      <GlobalFooter />
    </main>
  );
};

export default Home;
