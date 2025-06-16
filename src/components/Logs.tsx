
import { CopyButton } from './CopyButton';

const Logs = () => {
  return (
    <section id="logs" className="py-20 px-4 bg-tech-black">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-tech-white mb-12 font-mono glitch-text">
          [LOGS E BACKUP]
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Logs */}
          <div className="border border-tech-green bg-tech-dark p-6">
            <h3 className="text-tech-green font-mono font-bold text-xl mb-4 flex items-center">
              <span className="mr-2">📄</span> LOGS DETALHADOS
            </h3>
            
            <p className="text-tech-white mb-4 text-sm">
              Todos os logs são salvos automaticamente para análise e compartilhamento:
            </p>
            
            <div className="code-block mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-tech-yellow font-mono text-xs">LOCALIZAÇÃO DOS LOGS</span>
                <CopyButton text="/sdcard/Logs/AndroidOptimizer_LOG.txt" />
              </div>
              <code className="text-tech-green">
                /sdcard/Logs/AndroidOptimizer_LOG.txt
              </code>
            </div>
            
            <div className="bg-tech-black border border-tech-green/30 p-4 text-xs font-mono">
              <div className="text-tech-yellow mb-2">[EXEMPLO DE LOG]</div>
              <div className="text-tech-green space-y-1">
                <div>[+] Dispositivo: Galaxy S21 (samsung - API 31)</div>
                <div>[+] 🧹 Desinstalando apps desnecessários...</div>
                <div>[+] 🗑️ com.samsung.android.bixby.agent removido</div>
                <div>[+] ⚡ Animações desativadas</div>
                <div>[+] 🛡️ DNS privado ativado: dns.adguard.com</div>
                <div>[+] ✔️ Otimização concluída</div>
              </div>
            </div>
          </div>
          
          {/* Backup */}
          <div className="border border-tech-blue bg-tech-dark p-6">
            <h3 className="text-tech-blue font-mono font-bold text-xl mb-4 flex items-center">
              <span className="mr-2">🔐</span> SISTEMA DE BACKUP
            </h3>
            
            <p className="text-tech-white mb-4 text-sm">
              Configurações são salvas automaticamente antes de qualquer alteração:
            </p>
            
            <div className="space-y-4">
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">BACKUP GLOBAL</span>
                  <CopyButton text="/sdcard/Logs/Backup_Optimizer/global.txt" />
                </div>
                <code className="text-tech-green text-xs">
                  /sdcard/Logs/Backup_Optimizer/global.txt
                </code>
              </div>
              
              <div className="code-block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-tech-yellow font-mono text-xs">BACKUP APPS</span>
                  <CopyButton text="/sdcard/Logs/Backup_Optimizer/apps.list" />
                </div>
                <code className="text-tech-green text-xs">
                  /sdcard/Logs/Backup_Optimizer/apps.list
                </code>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-tech-black border border-tech-blue/30">
              <p className="text-tech-blue text-xs font-mono">
                💡 Use --reverse para restaurar todas as configurações originais automaticamente
              </p>
            </div>
          </div>
        </div>
        
        {/* Exemplo de uso dos logs */}
        <div className="mt-12 border border-tech-yellow bg-tech-dark p-6">
          <h3 className="text-tech-yellow font-mono font-bold text-xl mb-4">
            📊 ANALISANDO OS RESULTADOS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-tech-black p-4 border border-tech-green">
              <h4 className="text-tech-green font-mono text-sm font-bold mb-2">ANTES</h4>
              <ul className="text-tech-white text-xs space-y-1">
                <li>→ 47 apps instalados</li>
                <li>→ Animações ativas</li>
                <li>→ DNS operadora</li>
                <li>→ Modo claro</li>
              </ul>
            </div>
            
            <div className="bg-tech-black p-4 border border-tech-blue">
              <h4 className="text-tech-blue font-mono text-sm font-bold mb-2">EXECUTANDO</h4>
              <ul className="text-tech-white text-xs space-y-1">
                <li>→ Backup criado</li>
                <li>→ 12 apps removidos</li>
                <li>→ Tweaks aplicados</li>
                <li>→ Log salvo</li>
              </ul>
            </div>
            
            <div className="bg-tech-black p-4 border border-tech-green">
              <h4 className="text-tech-green font-mono text-sm font-bold mb-2">DEPOIS</h4>
              <ul className="text-tech-white text-xs space-y-1">
                <li>→ 35 apps restantes</li>
                <li>→ Sistema mais fluido</li>
                <li>→ DNS com bloqueio</li>
                <li>→ Modo escuro ativo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logs;
