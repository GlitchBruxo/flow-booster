
const Logs = () => {
  return (
    <section id="logs" className="py-20 px-4 bg-tech-black">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-tech-white mb-12 font-mono glitch-text">
          [LOGS & BACKUP]
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Estrutura de pastas */}
          <div className="border border-tech-green bg-tech-dark p-6">
            <h3 className="text-tech-green font-mono font-bold text-xl mb-4">
              ESTRUTURA DE ARQUIVOS CRIADA
            </h3>
            
            <div className="code-block bg-tech-black text-xs">
              <div className="font-mono text-tech-green">
                <div>/sdcard/</div>
                <div>├── flow_backup/</div>
                <div>│   ├── system_apps_backup.txt</div>
                <div>│   ├── build_prop_backup.txt</div>
                <div>│   ├── settings_backup.db</div>
                <div>│   └── kernel_params_backup.txt</div>
                <div>├── flow_logs/</div>
                <div>│   ├── execution_YYYYMMDD_HHMMSS.log</div>
                <div>│   ├── debloat_removed_apps.log</div>
                <div>│   ├── performance_changes.log</div>
                <div>│   └── errors.log</div>
                <div>└── flow_booster.sh</div>
              </div>
            </div>
          </div>
          
          {/* Sistema de logs */}
          <div className="border border-tech-blue bg-tech-dark p-6">
            <h3 className="text-tech-blue font-mono font-bold text-xl mb-4">
              SISTEMA DE LOGS AVANÇADO
            </h3>
            
            <div className="space-y-4 text-tech-white text-sm">
              <div>
                <h4 className="text-tech-yellow font-mono font-bold">LOGS EM TEMPO REAL</h4>
                <p>Cada comando executado é logado com timestamp e resultado.</p>
              </div>
              
              <div>
                <h4 className="text-tech-yellow font-mono font-bold">BACKUP AUTOMÁTICO</h4>
                <p>Backup completo das configurações antes de qualquer alteração.</p>
              </div>
              
              <div>
                <h4 className="text-tech-yellow font-mono font-bold">RECOVERY SYSTEM</h4>
                <p>Sistema de restauração para reverter alterações problemáticas.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Exemplo de log */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-tech-white mb-6 font-mono">
            [EXEMPLO DE LOG DE EXECUÇÃO]
          </h3>
          
          <div className="code-block">
            <div className="font-mono text-xs space-y-1">
              <div className="text-tech-yellow">[2024-06-16 14:23:15] FLOW BOOSTER v2.1 - INICIANDO EXECUÇÃO</div>
              <div className="text-tech-blue">[2024-06-16 14:23:16] [BACKUP] Criando backup do sistema...</div>
              <div className="text-tech-green">[2024-06-16 14:23:18] [BACKUP] ✓ system_apps_backup.txt (1247 apps)</div>
              <div className="text-tech-green">[2024-06-16 14:23:19] [BACKUP] ✓ build_prop_backup.txt (342 props)</div>
              <div className="text-tech-blue">[2024-06-16 14:23:20] [OPTIMIZE] Aplicando tweaks de performance...</div>
              <div className="text-tech-green">[2024-06-16 14:23:21] [OPTIMIZE] ✓ Kernel scheduler: CFQ → BFQ</div>
              <div className="text-tech-green">[2024-06-16 14:23:22] [OPTIMIZE] ✓ Memory management optimized</div>
              <div className="text-tech-blue">[2024-06-16 14:23:23] [DEBLOAT] Analisando bloatware...</div>
              <div className="text-tech-green">[2024-06-16 14:23:25] [DEBLOAT] ✓ Removidos 43 apps desnecessários</div>
              <div className="text-tech-red">[2024-06-16 14:23:26] [WARNING] App 'com.example.app' não encontrado</div>
              <div className="text-tech-yellow">[2024-06-16 14:23:27] [SUCCESS] Otimização concluída em 12.4s</div>
              <div className="text-tech-white">[2024-06-16 14:23:27] [INFO] Logs salvos em /sdcard/flow_logs/</div>
            </div>
          </div>
        </div>
        
        {/* Comandos de log */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-tech-yellow bg-tech-dark p-4">
            <h4 className="text-tech-yellow font-mono font-bold mb-3">VISUALIZAR LOGS</h4>
            <div className="code-block text-xs bg-tech-black">
              <code className="text-tech-green">
                # Ver último log<br/>
                cat /sdcard/flow_logs/execution_latest.log<br/><br/>
                # Ver apenas erros<br/>
                cat /sdcard/flow_logs/errors.log
              </code>
            </div>
          </div>
          
          <div className="border border-tech-green bg-tech-dark p-4">
            <h4 className="text-tech-green font-mono font-bold mb-3">RESTAURAR BACKUP</h4>
            <div className="code-block text-xs bg-tech-black">
              <code className="text-tech-green">
                # Restaurar configurações<br/>
                sh flow_booster.sh --restore<br/><br/>
                # Restaurar apps específicos<br/>
                sh flow_booster.sh --restore-apps
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logs;
