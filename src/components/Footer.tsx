
const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-tech-dark border-t border-tech-green">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div>
            <h3 className="text-tech-green font-mono font-bold text-xl mb-4">
              FLOW BOOSTER
            </h3>
            <p className="text-tech-white text-sm leading-relaxed">
              Script de otimização brutal para Android. 
              Desenvolvido por power users, para power users.
            </p>
            <div className="mt-4">
              <span className="text-tech-yellow font-mono text-xs">
                v2.1.0 - BRUTAL EDITION
              </span>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-tech-white font-mono font-bold mb-4">LINKS</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a href="#about" className="text-tech-green hover:text-tech-white transition-colors">
                  → Sobre o Script
                </a>
              </li>
              <li>
                <a href="#commands" className="text-tech-green hover:text-tech-white transition-colors">
                  → Comandos
                </a>
              </li>
              <li>
                <a href="#execution" className="text-tech-green hover:text-tech-white transition-colors">
                  → Como Executar
                </a>
              </li>
              <li>
                <a href="#logs" className="text-tech-green hover:text-tech-white transition-colors">
                  → Logs & Backup
                </a>
              </li>
              <li>
                <a href="#community" className="text-tech-green hover:text-tech-white transition-colors">
                  → Comunidade
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-tech-white font-mono font-bold mb-4">CONTATO</h4>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a href="#" className="text-tech-blue hover:text-tech-white transition-colors">
                  → Discord Server
                </a>
              </li>
              <li>
                <a href="#" className="text-tech-green hover:text-tech-white transition-colors">
                  → GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" className="text-tech-yellow hover:text-tech-white transition-colors">
                  → Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-tech-red hover:text-tech-white transition-colors">
                  → Report Issues
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-tech-gray text-center">
          <p className="text-tech-white font-mono text-sm">
            © 2024 Flow Booster Project. 
            <span className="text-tech-green"> Executado com brutalidade, foco e eficiência.</span>
          </p>
          <p className="text-tech-gray font-mono text-xs mt-2">
            Open source project - MIT License
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
