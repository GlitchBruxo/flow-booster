
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
              compartilhar resultados dos comandos e tirar dúvidas com outros power users.
            </p>
            <Button 
              className="brutal-button-secondary"
              onClick={() => window.open('https://discord.gg/darkanomaly', '_blank')}
            >
              ENTRAR NO DISCORD
            </Button>
          </div>
          
          {/* Logs Compartilhados */}
          <div className="border border-tech-green bg-tech-black p-8 hover:bg-tech-gray transition-colors">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-tech-green font-mono font-bold text-2xl mb-4">LOGS</h3>
            <p className="text-tech-white mb-6 leading-relaxed">
              Compartilhe seus logs de execução na comunidade para 
              ajudar outros usuários e receber feedback sobre otimizações.
            </p>
            <div className="code-block text-xs">
              <code className="text-tech-green">
                /sdcard/Logs/AndroidOptimizer_LOG.txt
              </code>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-black text-tech-green font-mono">2.8k+</div>
            <div className="text-tech-white text-sm font-mono">EXECUÇÕES</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-tech-blue font-mono">347</div>
            <div className="text-tech-white text-sm font-mono">USUÁRIOS ATIVOS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-tech-yellow font-mono">156</div>
            <div className="text-tech-white text-sm font-mono">DISPOSITIVOS</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-tech-red font-mono">98.4%</div>
            <div className="text-tech-white text-sm font-mono">SUCCESS RATE</div>
          </div>
        </div>
        
        {/* Comandos populares */}
        <div className="mt-12">
          <h3 className="text-xl font-black text-tech-white mb-6 font-mono">
            [COMANDOS MAIS USADOS NA COMUNIDADE]
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-tech-green bg-tech-black p-4">
              <h4 className="text-tech-green font-mono font-bold mb-2">1º LUGAR: --boost</h4>
              <p className="text-tech-white text-sm">Otimização completa mais popular</p>
              <div className="mt-2 bg-tech-green h-2 w-full"></div>
            </div>
            <div className="border border-tech-blue bg-tech-black p-4">
              <h4 className="text-tech-blue font-mono font-bold mb-2">2º LUGAR: --gamer</h4>
              <p className="text-tech-white text-sm">Perfil preferido dos gamers</p>
              <div className="mt-2 bg-tech-blue h-2 w-3/4"></div>
            </div>
            <div className="border border-tech-yellow bg-tech-black p-4">
              <h4 className="text-tech-yellow font-mono font-bold mb-2">3º LUGAR: --desbloat</h4>
              <p className="text-tech-white text-sm">Limpeza focada em apps</p>
              <div className="mt-2 bg-tech-yellow h-2 w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
