
import { Button } from '@/components/ui/button';

const Community = () => {
  return (
    <section id="community" className="py-20 px-4 bg-tech-dark">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-tech-white mb-12 font-mono glitch-text">
          [COMUNIDADE]
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Discord */}
          <div className="border border-tech-blue bg-tech-black p-8 hover:bg-tech-gray transition-colors">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-tech-blue font-mono font-bold text-2xl mb-4">DISCORD</h3>
            <p className="text-tech-white mb-6 leading-relaxed">
              Junte-se ao servidor Discord para discutir otimizações, 
              compartilhar tweaks e tirar dúvidas com outros power users.
            </p>
            <Button 
              className="brutal-button-secondary"
              onClick={() => window.open('#', '_blank')}
            >
              ENTRAR NO DISCORD
            </Button>
          </div>
          
          {/* GitHub */}
          <div className="border border-tech-green bg-tech-black p-8 hover:bg-tech-gray transition-colors">
            <div className="text-6xl mb-4">🐙</div>
            <h3 className="text-tech-green font-mono font-bold text-2xl mb-4">GITHUB</h3>
            <p className="text-tech-white mb-6 leading-relaxed">
              Contribua com o projeto, reporte bugs, sugira melhorias 
              e acesse o código fonte completo do Flow Booster.
            </p>
            <Button 
              className="brutal-button-secondary"
              onClick={() => window.open('#', '_blank')}
            >
              VIEW REPOSITORY
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-black text-tech-green font-mono">1.2k+</div>
            <div className="text-tech-white text-sm font-mono">DOWNLOADS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-tech-blue font-mono">247</div>
            <div className="text-tech-white text-sm font-mono">CONTRIBUIDORES</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-tech-yellow font-mono">89</div>
            <div className="text-tech-white text-sm font-mono">DISPOSITIVOS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-tech-red font-mono">99.7%</div>
            <div className="text-tech-white text-sm font-mono">SUCCESS RATE</div>
          </div>
        </div>
        
        {/* Contribution guidelines */}
        <div className="mt-12 text-left">
          <h3 className="text-xl font-black text-tech-white mb-6 font-mono">
            [COMO CONTRIBUIR]
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-tech-green bg-tech-black p-4">
              <h4 className="text-tech-green font-mono font-bold mb-2">1. FORK & CLONE</h4>
              <p className="text-tech-white text-sm">Faça fork do repositório e clone para sua máquina.</p>
            </div>
            <div className="border border-tech-blue bg-tech-black p-4">
              <h4 className="text-tech-blue font-mono font-bold mb-2">2. DEVELOP & TEST</h4>
              <p className="text-tech-white text-sm">Desenvolva suas melhorias e teste em múltiplos devices.</p>
            </div>
            <div className="border border-tech-yellow bg-tech-black p-4">
              <h4 className="text-tech-yellow font-mono font-bold mb-2">3. PULL REQUEST</h4>
              <p className="text-tech-white text-sm">Submeta um PR com descrição detalhada das mudanças.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
