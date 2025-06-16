
import { CopyButton } from './CopyButton';

const Execution = () => {
  return (
    <section id="execution" className="py-20 px-4 bg-tech-dark">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-tech-white mb-12 font-mono glitch-text">
          [COMO EXECUTAR]
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Download Method */}
          <div className="border border-tech-green bg-tech-black p-6">
            <h3 className="text-tech-green font-mono font-bold text-xl mb-4 flex items-center">
              <span className="mr-2">💾</span> MÉTODO DOWNLOAD (RECOMENDADO)
            </h3>
            
            <div className="space-y-4">
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">BAIXAR BOMBA.SH</span>
                  <CopyButton text="curl -fsSL https://seusite.com/script/bomba.sh -o /sdcard/bomba.sh" />
                </div>
                <code className="text-tech-green text-xs">
                  curl -fsSL https://seusite.com/script/bomba.sh -o /sdcard/bomba.sh
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">DAR PERMISSÃO</span>
                  <CopyButton text="chmod +x /sdcard/bomba.sh" />
                </div>
                <code className="text-tech-green text-xs">
                  chmod +x /sdcard/bomba.sh
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">EXECUTAR</span>
                  <CopyButton text="sh /sdcard/bomba.sh --boost" />
                </div>
                <code className="text-tech-green text-xs">
                  sh /sdcard/bomba.sh --boost
                </code>
              </div>
            </div>
          </div>
          
          {/* Direct Execution Options */}
          <div className="border border-tech-blue bg-tech-black p-6">
            <h3 className="text-tech-blue font-mono font-bold text-xl mb-4 flex items-center">
              <span className="mr-2">🚀</span> COMANDOS PRINCIPAIS
            </h3>
            
            <div className="space-y-4">
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">OTIMIZAÇÃO COMPLETA</span>
                  <CopyButton text="sh /sdcard/bomba.sh --boost" />
                </div>
                <code className="text-tech-green text-xs">
                  sh /sdcard/bomba.sh --boost
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">PERFIL GAMER</span>
                  <CopyButton text="sh /sdcard/bomba.sh --gamer" />
                </div>
                <code className="text-tech-green text-xs">
                  sh /sdcard/bomba.sh --gamer
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">REVERTER MUDANÇAS</span>
                  <CopyButton text="sh /sdcard/bomba.sh --reverse" />
                </div>
                <code className="text-tech-green text-xs">
                  sh /sdcard/bomba.sh --reverse
                </code>
              </div>
            </div>
          </div>
        </div>
        
        {/* Exemplo real de uso */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-tech-white mb-6 font-mono">
            [EXEMPLO REAL DE EXECUÇÃO]
          </h3>
          
          <div className="bg-tech-black border border-tech-green p-6">
            <div className="code-block bg-transparent border-0 p-0">
              <div className="text-tech-yellow font-mono text-sm mb-4">
                usuario@android:~$ sh /sdcard/bomba.sh --boost
              </div>
              
              <div className="font-mono text-xs space-y-1 text-tech-green">
                <div>[BOMBA.SH] Iniciando otimização brutal...</div>
                <div>[DESBLOAT] Removendo apps desnecessários da marca...</div>
                <div>[ANIMATIONS] Desativando animações do sistema...</div>
                <div>[DNS] Configurando AdGuard DNS privado...</div>
                <div>[DARKMODE] Forçando modo escuro...</div>
                <div>[RAM PLUS] Ativando expansão de memória...</div>
                <div>[SUCCESS] ✓ Otimização completa finalizada</div>
                <div>[LOGS] Salvos em /sdcard/Logs/AndroidOptimizer_LOG.txt</div>
                <div className="text-tech-yellow">usuario@android:~$ <span className="terminal-cursor"></span></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Requirements */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-tech-yellow bg-tech-black p-4">
            <h4 className="text-tech-yellow font-mono font-bold mb-2">REQUISITOS</h4>
            <ul className="text-tech-white text-sm font-mono space-y-1">
              <li>→ Android 7.0+</li>
              <li>→ Shell access (Termux/Brevent)</li>
              <li>→ Conexão com internet (curl)</li>
              <li>→ Conhecimento básico de terminal</li>
            </ul>
          </div>
          
          <div className="border border-tech-red bg-tech-black p-4">
            <h4 className="text-tech-red font-mono font-bold mb-2">ATENÇÃO</h4>
            <ul className="text-tech-white text-sm font-mono space-y-1">
              <li>→ Use --reverse para desfazer</li>
              <li>→ Não interrompa a execução</li>
              <li>→ Teste primeiro com --minimal</li>
              <li>→ Power users only!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Execution;
