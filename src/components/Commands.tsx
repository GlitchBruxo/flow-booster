
import { CopyButton } from './CopyButton';

const Commands = () => {
  const commands = [
    {
      flag: '--boost',
      description: 'Otimização completa: remove apps inúteis, desativa animações, ativa DNS privado AdGuard, força modo escuro, liga RAM Plus',
      example: 'sh -c "$(curl -fsSL https://seusite.com/flowbooster.sh)" -- --boost',
      category: 'performance'
    },
    {
      flag: '--reverse',
      description: 'Restaura todas as alterações: configurações salvas, apps ocultos ou removidos',
      example: 'sh -c "$(curl -fsSL https://seusite.com/flowbooster.sh)" -- --reverse',
      category: 'safety'
    },
    {
      flag: '--gamer',
      description: 'Perfil gamer: dados em segundo plano off, redução de efeitos, brilho e latência otimizados',
      example: 'sh -c "$(curl -fsSL https://seusite.com/flowbooster.sh)" -- --gamer',
      category: 'performance'
    },
    {
      flag: '--battery',
      description: 'Economia de energia: GPS e dados de fundo off, power saver ativado',
      example: 'sh -c "$(curl -fsSL https://seusite.com/flowbooster.sh)" -- --battery',
      category: 'power'
    },
    {
      flag: '--minimal',
      description: 'Desliga efeitos e recursos inúteis. Ideal para devs ou quem quer o celular "cru"',
      example: 'sh -c "$(curl -fsSL https://seusite.com/flowbooster.sh)" -- --minimal',
      category: 'cleanup'
    },
    {
      flag: '--desbloat',
      description: 'Remove apps desnecessários da marca (Xiaomi, Samsung, Motorola)',
      example: 'sh -c "$(curl -fsSL https://seusite.com/flowbooster.sh)" -- --desbloat',
      category: 'cleanup'
    },
    {
      flag: '--dns',
      description: 'Ativa DNS privado com AdGuard (bloqueia rastreio e anúncios)',
      example: 'sh -c "$(curl -fsSL https://seusite.com/flowbooster.sh)" -- --dns',
      category: 'network'
    },
    {
      flag: '--darkmode',
      description: 'Força o modo escuro no sistema (se suportado)',
      example: 'sh -c "$(curl -fsSL https://seusite.com/flowbooster.sh)" -- --darkmode',
      category: 'system'
    },
    {
      flag: '--download',
      description: 'Baixa o script para execução offline',
      example: 'curl -fsSL https://seusite.com/flowbooster.sh -o /sdcard/flowbooster.sh',
      category: 'info'
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
        
        {/* Execução Direta */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-tech-white mb-6 font-mono">
            [EXECUÇÃO DIRETA - SEM DOWNLOAD]
          </h3>
          
          <div className="bg-tech-dark border border-tech-green p-6">
            <p className="text-tech-white mb-4">
              Execute diretamente via <span className="text-tech-green font-mono">curl</span> sem precisar baixar o arquivo:
            </p>
            
            <div className="code-block">
              <div className="flex items-center justify-between mb-2">
                <span className="text-tech-yellow font-mono text-xs">EXEMPLO: OTIMIZAÇÃO COMPLETA</span>
                <CopyButton text='sh -c "$(curl -fsSL https://seusite.com/flowbooster.sh)" -- --boost' />
              </div>
              <code className="text-tech-green">
                sh -c "$(curl -fsSL https://seusite.com/flowbooster.sh)" -- --boost
              </code>
            </div>
            
            <p className="text-tech-white text-sm mt-4 font-mono">
              💡 Basta trocar o <span className="text-tech-green">--boost</span> pelo comando que deseja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commands;
