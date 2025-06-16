
import { CopyButton } from './CopyButton';

const Commands = () => {
  const commands = [
    {
      flag: '--optimize',
      description: 'Otimização geral do sistema',
      example: 'sh flow_booster.sh --optimize',
      category: 'performance'
    },
    {
      flag: '--debloat',
      description: 'Remove apps e serviços desnecessários',
      example: 'sh flow_booster.sh --debloat',
      category: 'cleanup'
    },
    {
      flag: '--memory',
      description: 'Otimização agressiva de memória',
      example: 'sh flow_booster.sh --memory',
      category: 'performance'
    },
    {
      flag: '--battery',
      description: 'Tweaks de economia de bateria',
      example: 'sh flow_booster.sh --battery',
      category: 'power'
    },
    {
      flag: '--network',
      description: 'Otimização de conectividade',
      example: 'sh flow_booster.sh --network',
      category: 'network'
    },
    {
      flag: '--kernel',
      description: 'Tweaks avançados de kernel',
      example: 'sh flow_booster.sh --kernel',
      category: 'advanced'
    },
    {
      flag: '--backup',
      description: 'Cria backup antes das alterações',
      example: 'sh flow_booster.sh --backup --optimize',
      category: 'safety'
    },
    {
      flag: '--restore',
      description: 'Restaura configurações do backup',
      example: 'sh flow_booster.sh --restore',
      category: 'safety'
    },
    {
      flag: '--aggressive',
      description: 'Modo brutal - máxima otimização',
      example: 'sh flow_booster.sh --aggressive',
      category: 'extreme'
    },
    {
      flag: '--help',
      description: 'Mostra todos os comandos disponíveis',
      example: 'sh flow_booster.sh --help',
      category: 'info'
    }
  ];

  const categoryColors = {
    performance: 'border-tech-green text-tech-green',
    cleanup: 'border-tech-blue text-tech-blue',
    power: 'border-tech-yellow text-tech-yellow',
    network: 'border-purple-500 text-purple-500',
    advanced: 'border-tech-red text-tech-red',
    safety: 'border-orange-500 text-orange-500',
    extreme: 'border-red-600 text-red-600',
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
        
        {/* Combo commands */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-tech-white mb-6 font-mono">
            [COMANDOS COMBINADOS]
          </h3>
          
          <div className="space-y-4">
            <div className="code-block">
              <div className="flex items-center justify-between mb-2">
                <span className="text-tech-yellow font-mono text-xs">OTIMIZAÇÃO COMPLETA</span>
                <CopyButton text="sh flow_booster.sh --backup --optimize --debloat --memory" />
              </div>
              <code className="text-tech-green">
                sh flow_booster.sh --backup --optimize --debloat --memory
              </code>
            </div>
            
            <div className="code-block">
              <div className="flex items-center justify-between mb-2">
                <span className="text-tech-red font-mono text-xs">MODO EXTREMO</span>
                <CopyButton text="sh flow_booster.sh --backup --aggressive --kernel" />
              </div>
              <code className="text-tech-green">
                sh flow_booster.sh --backup --aggressive --kernel
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commands;
