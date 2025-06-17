
import { CopyButton } from './CopyButton';

const Commands = () => {
  const githubUrl = 'https://dub.sh/flowbooster';
  
  const commands = [
    {
      flag: '--boost',
      description: 'Otimização total: desbloat + tweaks + DNS + RAM Plus + darkmode',
      example: `sh -c "$(curl -fsSL ${githubUrl})" -- --boost`,
      category: 'performance',
      highlight: true
    },
    {
      flag: '--reverse',
      description: 'Restaura configurações e apps removidos',
      example: `sh -c "$(curl -fsSL ${githubUrl})" -- --reverse`,
      category: 'safety'
    },
    {
      flag: '--gamer',
      description: 'Modo gamer: tweaks para latência, desempenho e resposta',
      example: `sh -c "$(curl -fsSL ${githubUrl})" -- --gamer`,
      category: 'performance'
    },
    {
      flag: '--battery',
      description: 'Foco em economia de bateria',
      example: `sh -c "$(curl -fsSL ${githubUrl})" -- --battery`,
      category: 'power'
    },
    {
      flag: '--minimal',
      description: 'Desativa notificações, animações, luzes e efeitos',
      example: `sh -c "$(curl -fsSL ${githubUrl})" -- --minimal`,
      category: 'cleanup'
    },
    {
      flag: '--desbloat',
      description: 'Remove apps desnecessários por marca (Xiaomi, Samsung, Motorola)',
      example: `sh -c "$(curl -fsSL ${githubUrl})" -- --desbloat`,
      category: 'cleanup'
    },
    {
      flag: '--dns',
      description: 'Ativa DNS privado com dns.adguard.com',
      example: `sh -c "$(curl -fsSL ${githubUrl})" -- --dns`,
      category: 'network'
    },
    {
      flag: '--darkmode',
      description: 'Força modo escuro (se compatível)',
      example: `sh -c "$(curl -fsSL ${githubUrl})" -- --darkmode`,
      category: 'system'
    },
    {
      flag: '--download',
      description: 'Baixa o script para uso local em /sdcard/flowbooster.sh',
      example: `curl -fsSL ${githubUrl} -o /sdcard/flowbooster.sh`,
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
        <h2 className="text-3xl md:text-5xl font-black text-tech-white mb-4 font-mono glitch-text">
          [COMANDOS SUPORTADOS]
        </h2>
        
        <p className="text-tech-green font-mono mb-12 text-lg">
          🔥 Execute diretamente via curl - sem instalação necessária
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commands.map((cmd, index) => (
            <div key={index} className={`border ${categoryColors[cmd.category as keyof typeof categoryColors]} bg-tech-dark p-4 hover:bg-tech-gray transition-colors ${cmd.highlight ? 'ring-2 ring-tech-green' : ''}`}>
              <div className="flex items-center justify-between mb-2">
                <code className={`font-mono font-bold ${categoryColors[cmd.category as keyof typeof categoryColors]} ${cmd.highlight ? 'text-xl' : ''}`}>
                  {cmd.flag}
                  {cmd.highlight && <span className="ml-2 text-xs">★ PRINCIPAL</span>}
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
        
        {/* Requirements Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-tech-green bg-tech-dark p-6">
            <h3 className="text-tech-green font-mono font-bold text-xl mb-4">
              🧠 REQUISITOS
            </h3>
            <ul className="text-tech-white text-sm font-mono space-y-2">
              <li>→ Android 8+</li>
              <li>→ Termux ou Brevent (sem root)</li>
              <li>→ Conexão com internet</li>
              <li>→ Autorização de acesso ao /sdcard</li>
            </ul>
          </div>
          
          <div className="border border-tech-blue bg-tech-dark p-6">
            <h3 className="text-tech-blue font-mono font-bold text-xl mb-4">
              🧠 SEGURANÇA
            </h3>
            <ul className="text-tech-white text-sm font-mono space-y-2">
              <li>→ Não exige root</li>
              <li>→ Não coleta dados</li>
              <li>→ Apenas ajustes via settings/pm</li>
              <li>→ Reversível via --reverse</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commands;
