
const LegalWarning = () => {
  return (
    <section id="warning" className="py-20 px-4 bg-tech-black border-t-2 border-tech-red">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-tech-red mb-12 font-mono glitch-text text-center">
          ⚠ [AVISO LEGAL] ⚠
        </h2>
        
        <div className="space-y-8">
          {/* Warning principal */}
          <div className="border-2 border-tech-red bg-tech-dark p-8 text-center">
            <h3 className="text-tech-red font-mono font-bold text-2xl mb-4">
              ATENÇÃO: FERRAMENTA PARA POWER USERS
            </h3>
            <p className="text-tech-white text-lg leading-relaxed">
              O Flow Booster realiza modificações profundas no sistema Android. 
              Mesmo sem necessidade de root, algumas alterações podem ser 
              <span className="text-tech-red font-bold"> IRREVERSÍVEIS</span>.
            </p>
          </div>
          
          {/* Grid de avisos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-tech-yellow bg-tech-dark p-6">
              <h4 className="text-tech-yellow font-mono font-bold text-xl mb-4">
                🛡️ RESPONSABILIDADE
              </h4>
              <ul className="text-tech-white space-y-2 text-sm font-mono">
                <li>→ Use por sua própria conta e risco</li>
                <li>→ Sempre faça backup completo antes</li>
                <li>→ Teste em device secundário primeiro</li>
                <li>→ Não interrompa o processo de execução</li>
              </ul>
            </div>
            
            <div className="border border-tech-blue bg-tech-dark p-6">
              <h4 className="text-tech-blue font-mono font-bold text-xl mb-4">
                🎯 PÚBLICO-ALVO
              </h4>
              <ul className="text-tech-white space-y-2 text-sm font-mono">
                <li>→ Desenvolvedores Android experientes</li>
                <li>→ Power users com conhecimento shell</li>
                <li>→ Usuários que sabem fazer recovery</li>
                <li>→ Pessoas que entendem os riscos</li>
              </ul>
            </div>
            
            <div className="border border-tech-green bg-tech-dark p-6">
              <h4 className="text-tech-green font-mono font-bold text-xl mb-4">
                ✅ BENEFÍCIOS
              </h4>
              <ul className="text-tech-white space-y-2 text-sm font-mono">
                <li>→ Performance significativamente melhor</li>
                <li>→ Maior duração da bateria</li>
                <li>→ Sistema mais limpo e responsivo</li>
                <li>→ Controle total sobre otimizações</li>
              </ul>
            </div>
            
            <div className="border border-tech-red bg-tech-dark p-6">
              <h4 className="text-tech-red font-mono font-bold text-xl mb-4">
                ⚠️ RISCOS
              </h4>
              <ul className="text-tech-white space-y-2 text-sm font-mono">
                <li>→ Possibilidade de instabilidade</li>
                <li>→ Apps podem parar de funcionar</li>
                <li>→ Alterações podem ser permanentes</li>
                <li>→ Necessidade de conhecimento técnico</li>
              </ul>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="border border-tech-white bg-tech-black p-6">
            <h4 className="text-tech-white font-mono font-bold text-lg mb-4">
              DISCLAIMER LEGAL
            </h4>
            <p className="text-tech-white text-sm leading-relaxed font-mono">
              O Flow Booster é fornecido "como está", sem garantias de qualquer tipo. 
              Os desenvolvedores não se responsabilizam por danos ao dispositivo, 
              perda de dados, ou qualquer outro problema resultante do uso desta ferramenta. 
              O usuário assume total responsabilidade pelos resultados da execução do script.
            </p>
          </div>
          
          {/* Final warning */}
          <div className="text-center">
            <div className="inline-block border-2 border-tech-red bg-tech-red/10 p-6">
              <p className="text-tech-red font-mono font-bold text-lg">
                SE VOCÊ NÃO SABE O QUE ESTÁ FAZENDO,<br/>
                <span className="text-2xl">NÃO USE ESTA FERRAMENTA!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalWarning;
