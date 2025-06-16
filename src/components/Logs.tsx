
const Logs = () => {
  return (
    <section id="logs" className="py-20 px-4 bg-tech-black">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-tech-white mb-12 font-mono glitch-text">
          [LOGS & BACKUP]
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Estrutura de logs */}
          <div className="border border-tech-green bg-tech-dark p-6">
            <h3 className="text-tech-green font-mono font-bold text-xl mb-4">
              LOCALIZAÇÃO DOS LOGS
            </h3>
            
            <div className="code-block bg-tech-black text-xs">
              <div className="font-mono text-tech-green">
                <div>/sdcard/</div>
                <div>└── Logs/</div>
                <div>    └── AndroidOptimizer_LOG.txt</div>
              </div>
            </div>
            
            <div className="mt-4 text-tech-white text-sm">
              <p className="mb-2">Todos os logs ficam no arquivo:</p>
              <div className="code-block bg-tech-black">
                <code className="text-tech-green">/sdcard/Logs/AndroidOptimizer_LOG.txt</code>
              </div>
            </div>
          </div>
          
          {/* Sistema de backup */}
          <div className="border border-tech-blue bg-tech-dark p-6">
            <h3 className="text-tech-blue font-mono font-bold text-xl mb-4">
              SISTEMA DE BACKUP AUTOMÁTICO
            </h3>
            
            <div className="space-y-4 text-tech-white text-sm">
              <div>
                <h4 className="text-tech-yellow font-mono font-bold">LOGS EM TEMPO REAL</h4>
                <p>Cada comando executado é logado com timestamp e resultado.</p>
              </div>
              
              <div>
                <h4 className="text-tech-yellow font-mono font-bold">BACKUP AUTOMÁTICO</h4>
                <p>Configurações salvas antes de qualquer alteração.</p>
              </div>
              
              <div>
                <h4 className="text-tech-yellow font-mono font-bold">COMANDO --reverse</h4>
                <p>Sistema de restauração para reverter todas as alterações.</p>
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
              <div className="text-tech-yellow">[2024-06-16 14:23:15] FLOW BOOSTER v3.0 - INICIANDO --boost</div>
              <div className="text-tech-blue">[2024-06-16 14:23:16] [BACKUP] Salvando configurações atuais...</div>
              <div className="text-tech-green">[2024-06-16 14:23:18] [DESBLOAT] ✓ Detectada marca: Samsung</div>
              <div className="text-tech-green">[2024-06-16 14:23:19] [DESBLOAT] ✓ Removidos 23 apps Samsung desnecessários</div>
              <div className="text-tech-blue">[2024-06-16 14:23:20] [ANIMATIONS] Desativando animações do sistema...</div>
              <div className="text-tech-green">[2024-06-16 14:23:21] [ANIMATIONS] ✓ Animações desativadas</div>
              <div className="text-tech-blue">[2024-06-16 14:23:22] [DNS] Configurando AdGuard DNS...</div>
              <div className="text-tech-green">[2024-06-16 14:23:23] [DNS] ✓ DNS privado ativado</div>
              <div className="text-tech-blue">[2024-06-16 14:23:24] [DARKMODE] Forçando modo escuro...</div>
              <div className="text-tech-green">[2024-06-16 14:23:25] [DARKMODE] ✓ Modo escuro ativado</div>
              <div className="text-tech-blue">[2024-06-16 14:23:26] [RAM PLUS] Verificando suporte...</div>
              <div className="text-tech-green">[2024-06-16 14:23:27] [RAM PLUS] ✓ RAM Plus ativado (4GB extra)</div>
              <div className="text-tech-yellow">[2024-06-16 14:23:28] [SUCCESS] Otimização --boost concluída em 13.2s</div>
              <div className="text-tech-white">[2024-06-16 14:23:28] [INFO] Log salvo em /sdcard/Logs/AndroidOptimizer_LOG.txt</div>
            </div>
          </div>
        </div>
        
        {/* Comandos de log */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-tech-yellow bg-tech-dark p-4">
            <h4 className="text-tech-yellow font-mono font-bold mb-3">VISUALIZAR LOGS</h4>
            <div className="code-block text-xs bg-tech-black">
              <code className="text-tech-green">
                # Ver log completo<br/>
                cat /sdcard/Logs/AndroidOptimizer_LOG.txt<br/><br/>
                # Ver últimas 20 linhas<br/>
                tail -20 /sdcard/Logs/AndroidOptimizer_LOG.txt
              </code>
            </div>
          </div>
          
          <div className="border border-tech-green bg-tech-dark p-4">
            <h4 className="text-tech-green font-mono font-bold mb-3">RESTAURAR ALTERAÇÕES</h4>
            <div className="code-block text-xs bg-tech-black">
              <code className="text-tech-green">
                # Reverter tudo<br/>
                sh -c "$(curl -fsSL https://seusite.com/flowbooster.sh)" -- --reverse<br/><br/>
                # Ou se baixou offline<br/>
                sh /sdcard/flowbooster.sh --reverse
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logs;
