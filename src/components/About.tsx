
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-tech-dark">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-tech-white mb-12 font-mono glitch-text">
          [SOBRE O SCRIPT]
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border border-tech-green p-6 bg-tech-black">
              <h3 className="text-tech-green font-mono font-bold text-xl mb-4">O QUE É</h3>
              <p className="text-tech-white leading-relaxed">
                Flow Booster é um script shell (.sh) de otimização brutal para Android. 
                Desenvolvido para power users e desenvolvedores que precisam de performance 
                máxima sem comprometer a estabilidade do sistema.
              </p>
            </div>
            
            <div className="border border-tech-green p-6 bg-tech-black">
              <h3 className="text-tech-green font-mono font-bold text-xl mb-4">PARA QUE SERVE</h3>
              <ul className="text-tech-white space-y-2 font-mono text-sm">
                <li>→ Debloat agressivo de apps desnecessários</li>
                <li>→ Otimização de memória e CPU</li>
                <li>→ Limpeza de cache e dados temporários</li>
                <li>→ Tweaks de performance de kernel</li>
                <li>→ Configurações avançadas de sistema</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="border border-tech-yellow p-6 bg-tech-black">
              <h3 className="text-tech-yellow font-mono font-bold text-xl mb-4">SEM ROOT NECESSÁRIO</h3>
              <p className="text-tech-white leading-relaxed mb-4">
                O script funciona completamente via shell, utilizando comandos ADB e 
                permissões de sistema disponíveis sem root.
              </p>
              <div className="code-block text-xs">
                <code className="text-tech-green">
                  # Executável via:<br/>
                  → Termux<br/>
                  → Brevent<br/>
                  → ADB Shell<br/>
                  → Qualquer terminal Android
                </code>
              </div>
            </div>
            
            <div className="border border-tech-red p-6 bg-tech-black">
              <h3 className="text-tech-red font-mono font-bold text-xl mb-4">AVISO IMPORTANTE</h3>
              <p className="text-tech-white leading-relaxed text-sm">
                Este script realiza modificações profundas no sistema. 
                Mesmo sem root, algumas alterações podem ser irreversíveis. 
                Use apenas se souber exatamente o que está fazendo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
