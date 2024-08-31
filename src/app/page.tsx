import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';

const Home = () => {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <GlobalHeader />
      <div className="pt-24 container mx-auto">This is main part</div>
      <GlobalFooter />
    </main>
  );
};

export default Home;
