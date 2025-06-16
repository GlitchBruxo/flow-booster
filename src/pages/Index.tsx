
import Hero from '@/components/Hero';
import About from '@/components/About';
import Commands from '@/components/Commands';
import Execution from '@/components/Execution';
import Logs from '@/components/Logs';
import Community from '@/components/Community';
import LegalWarning from '@/components/LegalWarning';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-black text-tech-white">
      <Hero />
      <About />
      <Commands />
      <Execution />
      <Logs />
      <Community />
      <LegalWarning />
      <Footer />
    </div>
  );
};

export default Index;
