
import { CopyButton } from './CopyButton';

const Commands = () => {
  const commands = [
    {
      flag: '--boost',
      description: 'Otimização completa: remove apps inúteis, desativa animações, ativa DNS privado AdGuard, força modo escuro, liga RAM Plus',
      example: 'sh /sdcard/bomba.sh --boost',
      category: 'performance'
    },
    {
      flag: '--reverse',
      description: 'Restaura todas as alterações: configurações salvas, apps ocultos ou removidos',
      example: 'sh /sdcard/bomba.sh --reverse',
      category: 'safety'
    },
    {
      flag: '--gamer',
      description: 'Perfil gamer: dados em segundo plano off, redução de efeitos, brilho e latência otimizados',
      example: 'sh /sdcard/bomba.sh --gamer',
      category: 'performance'
    },
    {
      flag: '--battery',
      description: 'Economia de energia: GPS e dados de fundo off, power saver ativado',
      example: 'sh /sdcard/bomba.sh --battery',
      category: 'power'
    },
    {
      flag: '--minimal',
      description: 'Desliga efeitos e recursos inúteis. Ideal para devs ou quem quer o celular "cru"',
      example: 'sh /sdcard/bomba.sh --minimal',
      category: 'cleanup'
    },
    {
      flag: '--desbloat',
      description: 'Remove apps desnecessários da marca (Xiaomi, Samsung, Motorola)',
      example: 'sh /sdcard/bomba.sh --desbloat',
      category: 'cleanup'
    },
    {
      flag: '--dns',
      description: 'Ativa DNS privado com AdGuard (bloqueia rastreio e anúncios)',
      example: 'sh /sdcard/bomba.sh --dns',
      category: 'network'
    },
    {
      flag: '--darkmode',
      description: 'Força o modo escuro no sistema (se suportado)',
      example: 'sh /sdcard/bomba.sh --darkmode',
      category: 'system'
    }
  ];

  const categoryColors = {
    performance: 'border-tech-green text-tech-green',
    cleanup: 'border-tech-blue text-tech-blue',
    power: 'border-tech-yellow text-tech-yellow',
    network: 'border-purple-500 text-purple-500',
    system: 'border-orange-500 text-orange-500',
    safety: 'border-tech-red text-tech-red',
    info: 'border-tech-white text-tech-white'
  };

  return (
    <section id="commands" className="py-20 px-4 bg-tech-black">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-tech-white mb-12 font-mono glitch-text">
          [COMANDOS DISPONÍVEIS]
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commands.map((cmd, index) => (
            <div key={index} className={`border ${categoryColors[cmd.category as keyof typeof categoryColors]} bg-tech-dark p-4 hover:bg-tech-gray transition-colors`}>
              <div className="flex items-center justify-between mb-2">
                <code className={`font-mono font-bold ${categoryColors[cmd.category as keyof typeof categoryColors]}`}>
                  {cmd.flag}
                </code>
                <span className={`text-xs px-2 py-1 border ${categoryColors[cmd.category as keyof typeof categoryColors]} uppercase font-mono`}>
                  {cmd.category}
                </span>
              </div>
              
              <p className="text-tech-white text-sm mb-4 leading-relaxed">
                {cmd.description}
              </p>
              
              <div className="code-block text-xs">
                <div className="flex items-center justify-between">
                  <code className="text-tech-green flex-1 break-all">
                    {cmd.example}
                  </code>
                  <CopyButton text={cmd.example} className="ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Download Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-tech-white mb-6 font-mono">
            [DOWNLOAD E INSTALAÇÃO]
          </h3>
          
          <div className="bg-tech-dark border border-tech-green p-6">
            <p className="text-tech-white mb-4">
              Baixe o script <span className="text-tech-green font-mono">bomba.sh</span> e execute via terminal:
            </p>
            
            <div className="space-y-4">
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">1. BAIXAR SCRIPT</span>
                  <CopyButton text="curl -fsSL https://seusite.com/script/bomba.sh -o /sdcard/bomba.sh" />
                </div>
                <code className="text-tech-green">
                  curl -fsSL https://seusite.com/script/bomba.sh -o /sdcard/bomba.sh
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">2. DAR PERMISSÃO</span>
                  <CopyButton text="chmod +x /sdcard/bomba.sh" />
                </div>
                <code className="text-tech-green">
                  chmod +x /sdcard/bomba.sh
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">3. EXECUTAR</span>
                  <CopyButton text="sh /sdcard/bomba.sh --boost" />
                </div>
                <code className="text-tech-green">
                  sh /sdcard/bomba.sh --boost
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commands;
