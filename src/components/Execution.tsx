
import { CopyButton } from './CopyButton';

const Execution = () => {
  const githubUrl = 'https://raw.githubusercontent.com/GlitchBruxo/flow-booster-brutality-engine/refs/heads/main/script/bomba.sh';
  
  return (
    <section id="execution" className="py-20 px-4 bg-tech-dark">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-tech-white mb-12 font-mono glitch-text">
          [EXEMPLOS DE USO]
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Execução Direta */}
          <div className="border border-tech-green bg-tech-black p-6">
            <h3 className="text-tech-green font-mono font-bold text-xl mb-4 flex items-center">
              <span className="mr-2">🚀</span> EXECUÇÃO DIRETA (RECOMENDADO)
            </h3>
            
            <div className="space-y-4">
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">OTIMIZAÇÃO TOTAL</span>
                  <CopyButton text={`sh -c "$(curl -fsSL ${githubUrl})" -- --boost`} />
                </div>
                <code className="text-tech-green text-xs break-all">
                  sh -c "$(curl -fsSL {githubUrl})" -- --boost
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">MODO GAMER</span>
                  <CopyButton text={`sh -c "$(curl -fsSL ${githubUrl})" -- --gamer`} />
                </div>
                <code className="text-tech-green text-xs break-all">
                  sh -c "$(curl -fsSL {githubUrl})" -- --gamer
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">RESTAURAR TUDO</span>
                  <CopyButton text={`sh -c "$(curl -fsSL ${githubUrl})" -- --reverse`} />
                </div>
                <code className="text-tech-green text-xs break-all">
                  sh -c "$(curl -fsSL {githubUrl})" -- --reverse
                </code>
              </div>
            </div>
          </div>
          
          {/* Download Local */}
          <div className="border border-tech-blue bg-tech-black p-6">
            <h3 className="text-tech-blue font-mono font-bold text-xl mb-4 flex items-center">
              <span className="mr-2">💾</span> DOWNLOAD PARA USO LOCAL
            </h3>
            
            <div className="space-y-4">
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">BAIXAR SCRIPT</span>
                  <CopyButton text={`curl -fsSL ${githubUrl} -o /sdcard/flowbooster.sh`} />
                </div>
                <code className="text-tech-green text-xs break-all">
                  curl -fsSL {githubUrl} -o /sdcard/flowbooster.sh
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">DAR PERMISSÃO</span>
                  <CopyButton text="chmod +x /sdcard/flowbooster.sh" />
                </div>
                <code className="text-tech-green text-xs">
                  chmod +x /sdcard/flowbooster.sh
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">EXECUTAR LOCAL</span>
                  <CopyButton text="sh /sdcard/flowbooster.sh --boost" />
                </div>
                <code className="text-tech-green text-xs">
                  sh /sdcard/flowbooster.sh --boost
                </code>
              </div>
            </div>
          </div>
        </div>
        
        {/* Exemplo real de execução */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-tech-white mb-6 font-mono">
            [EXEMPLO REAL DE EXECUÇÃO]
          </h3>
          
          <div className="bg-tech-black border border-tech-green p-6">
            <div className="code-block bg-transparent border-0 p-0">
              <div className="text-tech-yellow font-mono text-sm mb-4">
                usuario@android:~$ sh -c "$(curl -fsSL {githubUrl})" -- --boost
              </div>
              
              <div className="font-mono text-xs space-y-1 text-tech-green">
                <div>[BOMBA.SH] Iniciando Android Brutality Engine...</div>
                <div>[DESBLOAT] Removendo apps desnecessários da marca...</div>
                <div>[ANIMATIONS] Desativando animações do sistema...</div>
                <div>[DNS] Configurando dns.adguard.com...</div>
                <div>[DARKMODE] Forçando modo escuro...</div>
                <div>[RAM PLUS] Ativando expansão de memória...</div>
                <div>[SUCCESS] ✓ Otimização brutal finalizada</div>
                <div>[LOGS] Salvos em /sdcard/Logs/AndroidOptimizer_LOG.txt</div>
                <div className="text-tech-yellow">usuario@android:~$ <span className="terminal-cursor"></span></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabela de comandos */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-tech-white mb-6 font-mono">
            [TABELA DE COMANDOS]
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-tech-green bg-tech-black">
              <thead>
                <tr className="bg-tech-dark">
                  <th className="border border-tech-green p-3 text-tech-green font-mono text-left">Comando</th>
                  <th className="border border-tech-green p-3 text-tech-green font-mono text-left">Descrição</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <tr>
                  <td className="border border-tech-green p-3 text-tech-white">--boost</td>
                  <td className="border border-tech-green p-3 text-tech-white">Otimização total (desbloat + tweaks + DNS + RAM Plus + darkmode)</td>
                </tr>
                <tr className="bg-tech-dark/30">
                  <td className="border border-tech-green p-3 text-tech-white">--reverse</td>
                  <td className="border border-tech-green p-3 text-tech-white">Restaura configurações e apps removidos</td>
                </tr>
                <tr>
                  <td className="border border-tech-green p-3 text-tech-white">--gamer</td>
                  <td className="border border-tech-green p-3 text-tech-white">Modo gamer (tweaks para latência, desempenho e resposta)</td>
                </tr>
                <tr className="bg-tech-dark/30">
                  <td className="border border-tech-green p-3 text-tech-white">--battery</td>
                  <td className="border border-tech-green p-3 text-tech-white">Foco em economia de bateria</td>
                </tr>
                <tr>
                  <td className="border border-tech-green p-3 text-tech-white">--minimal</td>
                  <td className="border border-tech-green p-3 text-tech-white">Desativa notificações, animações, luzes e efeitos</td>
                </tr>
                <tr className="bg-tech-dark/30">
                  <td className="border border-tech-green p-3 text-tech-white">--desbloat</td>
                  <td className="border border-tech-green p-3 text-tech-white">Remove apps desnecessários por marca</td>
                </tr>
                <tr>
                  <td className="border border-tech-green p-3 text-tech-white">--dns</td>
                  <td className="border border-tech-green p-3 text-tech-white">Ativa DNS privado com dns.adguard.com</td>
                </tr>
                <tr className="bg-tech-dark/30">
                  <td className="border border-tech-green p-3 text-tech-white">--darkmode</td>
                  <td className="border border-tech-green p-3 text-tech-white">Força modo escuro (se compatível)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Execution;
