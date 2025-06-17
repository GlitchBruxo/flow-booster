
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, FileText, Terminal, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CopyButton } from '@/components/CopyButton';

const Documentation = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: 'installation',
      title: 'Instalação e Requisitos',
      icon: <Terminal className="text-tech-green" size={24} />,
      content: (
        <div className="space-y-4">
          <h4 className="text-tech-green font-bold">Requisitos Mínimos:</h4>
          <ul className="space-y-2 text-tech-white">
            <li>• Android 8.0+ (API 26+)</li>
            <li>• Termux, Brevent ou outro terminal</li>
            <li>• Conexão com internet (para execução via curl)</li>
            <li>• Permissão de acesso ao /sdcard</li>
          </ul>
          
          <h4 className="text-tech-green font-bold mt-6">Instalação:</h4>
          <p className="text-tech-white mb-4">
            Não é necessário instalar nada. Execute diretamente via curl:
          </p>
          
          <div className="code-block">
            <div className="flex items-center justify-between mb-2">
              <span className="text-tech-yellow font-mono text-xs">EXECUÇÃO DIRETA</span>
              <CopyButton text='sh -c "$(curl -fsSL https://dub.sh/flowbooster)" -- --boost' />
            </div>
            <code className="text-tech-green text-sm">
              sh -c "$(curl -fsSL https://dub.sh/flowbooster)" -- --boost
            </code>
          </div>
        </div>
      )
    },
    {
      id: 'commands',
      title: 'Comandos Disponíveis',
      icon: <Zap className="text-tech-yellow" size={24} />,
      content: (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border border-tech-green">
              <thead>
                <tr className="bg-tech-green text-tech-black">
                  <th className="p-3 text-left font-mono">Comando</th>
                  <th className="p-3 text-left font-mono">Descrição</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <tr className="border-b border-tech-gray">
                  <td className="p-3 text-tech-green">--boost</td>
                  <td className="p-3 text-tech-white">Otimização completa (desbloat + tweaks + DNS)</td>
                </tr>
                <tr className="border-b border-tech-gray">
                  <td className="p-3 text-tech-green">--reverse</td>
                  <td className="p-3 text-tech-white">Restaura todas as configurações e apps</td>
                </tr>
                <tr className="border-b border-tech-gray">
                  <td className="p-3 text-tech-green">--gamer</td>
                  <td className="p-3 text-tech-white">Modo gamer (latência e performance)</td>
                </tr>
                <tr className="border-b border-tech-gray">
                  <td className="p-3 text-tech-green">--battery</td>
                  <td className="p-3 text-tech-white">Economia agressiva de bateria</td>
                </tr>
                <tr className="border-b border-tech-gray">
                  <td className="p-3 text-tech-green">--minimal</td>
                  <td className="p-3 text-tech-white">Sistema minimalista e silencioso</td>
                </tr>
                <tr className="border-b border-tech-gray">
                  <td className="p-3 text-tech-green">--desbloat</td>
                  <td className="p-3 text-tech-white">Remove apenas apps desnecessários</td>
                </tr>
                <tr className="border-b border-tech-gray">
                  <td className="p-3 text-tech-green">--dns</td>
                  <td className="p-3 text-tech-white">Ativa DNS privado AdGuard</td>
                </tr>
                <tr className="border-b border-tech-gray">
                  <td className="p-3 text-tech-green">--darkmode</td>
                  <td className="p-3 text-tech-white">Força modo escuro do sistema</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'safety',
      title: 'Segurança e Reversibilidade',
      icon: <Shield className="text-tech-blue" size={24} />,
      content: (
        <div className="space-y-4">
          <h4 className="text-tech-blue font-bold">Recursos de Segurança:</h4>
          <ul className="space-y-2 text-tech-white">
            <li>• <strong>Sem Root:</strong> Funciona apenas com comandos ADB shell</li>
            <li>• <strong>Reversível:</strong> Comando --reverse restaura tudo</li>
            <li>• <strong>Backup Automático:</strong> Configurações salvas antes das mudanças</li>
            <li>• <strong>Logs Detalhados:</strong> Tudo registrado em /sdcard/Logs/</li>
            <li>• <strong>Código Aberto:</strong> Auditável no GitHub</li>
          </ul>
          
          <h4 className="text-tech-blue font-bold mt-6">Como Reverter:</h4>
          <div className="code-block">
            <div className="flex items-center justify-between mb-2">
              <span className="text-tech-yellow font-mono text-xs">RESTAURAÇÃO COMPLETA</span>
              <CopyButton text='sh -c "$(curl -fsSL https://dub.sh/flowbooster)" -- --reverse' />
            </div>
            <code className="text-tech-green text-sm">
              sh -c "$(curl -fsSL https://dub.sh/flowbooster)" -- --reverse
            </code>
          </div>
        </div>
      )
    },
    {
      id: 'logs',
      title: 'Logs e Troubleshooting',
      icon: <FileText className="text-tech-red" size={24} />,
      content: (
        <div className="space-y-4">
          <h4 className="text-tech-red font-bold">Localização dos Logs:</h4>
          <div className="bg-tech-black border border-tech-green p-4">
            <code className="text-tech-green font-mono">
              /sdcard/Logs/AndroidOptimizer_LOG.txt
            </code>
          </div>
          
          <h4 className="text-tech-red font-bold mt-6">Troubleshooting Comum:</h4>
          <div className="space-y-3">
            <div className="bg-tech-dark border border-tech-gray p-4">
              <h5 className="text-tech-yellow font-bold mb-2">Erro de Permissão</h5>
              <p className="text-tech-white text-sm">
                Certifique-se que o terminal tem acesso ao /sdcard
              </p>
            </div>
            
            <div className="bg-tech-dark border border-tech-gray p-4">
              <h5 className="text-tech-yellow font-bold mb-2">Apps não Removidos</h5>
              <p className="text-tech-white text-sm">
                Alguns apps podem estar protegidos pelo sistema. Verifique os logs.
              </p>
            </div>
            
            <div className="bg-tech-dark border border-tech-gray p-4">
              <h5 className="text-tech-yellow font-bold mb-2">Comando não Encontrado</h5>
              <p className="text-tech-white text-sm">
                Verifique sua conexão com internet e tente novamente.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-tech-black text-tech-white">
      {/* Header */}
      <div className="border-b border-tech-green bg-tech-dark/50">
        <div className="container max-w-6xl mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-tech-green hover:text-tech-white mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Início
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-black text-tech-white mb-2">
            DOCUMENTAÇÃO
          </h1>
          <p className="text-tech-green font-mono">
            Guia completo do Flow Booster - Android Brutality Engine
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* Quick Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="outline"
              className="brutal-button-secondary h-auto p-4 flex-col"
              onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {section.icon}
              <span className="mt-2 text-xs">{section.title}</span>
            </Button>
          ))}
        </div>

        {/* Documentation Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-8">
              <div className="flex items-center mb-6">
                {section.icon}
                <h2 className="text-2xl font-bold text-tech-white ml-3 font-mono">
                  {section.title}
                </h2>
              </div>
              
              <div className="bg-tech-dark border border-tech-gray p-6 rounded-none">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* External Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-tech-dark border border-tech-green p-6">
            <h3 className="text-tech-green font-bold mb-4">Código Fonte</h3>
            <p className="text-tech-gray text-sm mb-4">
              Acesse o repositório completo no GitHub
            </p>
            <Button 
              className="brutal-button w-full"
              onClick={() => window.open('https://github.com/GlitchBruxo/flow-booster-brutality-engine/tree/sh', '_blank')}
            >
              Ver no GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="bg-tech-dark border border-tech-blue p-6">
            <h3 className="text-tech-blue font-bold mb-4">Suporte</h3>
            <p className="text-tech-gray text-sm mb-4">
              Precisa de ajuda? Entre na nossa comunidade
            </p>
            <Button 
              variant="outline"
              className="brutal-button-secondary w-full"
              onClick={() => navigate('/report-issue')}
            >
              Reportar Issue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
