
import { CopyButton } from './CopyButton';

const Execution = () => {
  return (
    <section id="execution" className="py-20 px-4 bg-tech-dark">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-tech-white mb-12 font-mono glitch-text">
          [COMO EXECUTAR]
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Via Termux */}
          <div className="border border-tech-green bg-tech-black p-6">
            <h3 className="text-tech-green font-mono font-bold text-xl mb-4 flex items-center">
              <span className="mr-2">📱</span> VIA TERMUX
            </h3>
            
            <div className="space-y-4">
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">1. DOWNLOAD</span>
                  <CopyButton text="wget https://raw.githubusercontent.com/user/flow-booster/main/flow_booster.sh" />
                </div>
                <code className="text-tech-green text-xs">
                  wget https://raw.githubusercontent.com/user/flow-booster/main/flow_booster.sh
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">2. PERMISSÃO</span>
                  <CopyButton text="chmod +x flow_booster.sh" />
                </div>
                <code className="text-tech-green text-xs">
                  chmod +x flow_booster.sh
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">3. EXECUTAR</span>
                  <CopyButton text="./flow_booster.sh --optimize --debloat" />
                </div>
                <code className="text-tech-green text-xs">
                  ./flow_booster.sh --optimize --debloat
                </code>
              </div>
            </div>
          </div>
          
          {/* Via ADB */}
          <div className="border border-tech-blue bg-tech-black p-6">
            <h3 className="text-tech-blue font-mono font-bold text-xl mb-4 flex items-center">
              <span className="mr-2">💻</span> VIA ADB
            </h3>
            
            <div className="space-y-4">
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">1. UPLOAD PARA DEVICE</span>
                  <CopyButton text="adb push flow_booster.sh /sdcard/" />
                </div>
                <code className="text-tech-green text-xs">
                  adb push flow_booster.sh /sdcard/
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">2. SHELL</span>
                  <CopyButton text="adb shell" />
                </div>
                <code className="text-tech-green text-xs">
                  adb shell
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">3. EXECUTAR</span>
                  <CopyButton text="sh /sdcard/flow_booster.sh --optimize" />
                </div>
                <code className="text-tech-green text-xs">
                  sh /sdcard/flow_booster.sh --optimize
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
                usuario@android:~$ ./flow_booster.sh --backup --optimize --debloat
              </div>
              
              <div className="font-mono text-xs space-y-1 text-tech-green">
                <div>[FLOW BOOSTER] Iniciando otimização brutal...</div>
                <div>[BACKUP] Criando backup em /sdcard/flow_backup/...</div>
                <div>[OPTIMIZE] Aplicando tweaks de performance...</div>
                <div>[DEBLOAT] Removendo bloatware detectado...</div>
                <div>[SUCCESS] Otimização concluída em 23.7s</div>
                <div>[INFO] Logs salvos em /sdcard/flow_logs/</div>
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
              <li>→ Android 6.0+</li>
              <li>→ Shell access (Termux/ADB)</li>
              <li>→ Depuração USB habilitada</li>
              <li>→ Conhecimento básico de shell</li>
            </ul>
          </div>
          
          <div className="border border-tech-red bg-tech-black p-4">
            <h4 className="text-tech-red font-mono font-bold mb-2">ATENÇÃO</h4>
            <ul className="text-tech-white text-sm font-mono space-y-1">
              <li>→ Sempre use --backup primeiro</li>
              <li>→ Não interrompa a execução</li>
              <li>→ Teste em device secundário</li>
              <li>→ Power users only!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Execution;
