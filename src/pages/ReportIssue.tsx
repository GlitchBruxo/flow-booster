
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReportIssue = () => {
  const navigate = useNavigate();
  const [issueType, setIssueType] = useState('');

  const issueTemplates = [
    {
      type: 'bug',
      title: 'Bug Report',
      description: 'Reportar um erro ou problema no script',
      template: `**Descrição do Bug**
Descreva o que aconteceu...

**Como Reproduzir**
1. Execute o comando...
2. ...
3. ...

**Comportamento Esperado**
O que deveria acontecer...

**Informações do Sistema**
- Marca do dispositivo: 
- Versão do Android: 
- Comando usado: 
- Logs relevantes: 

**Informações Adicionais**
Adicione qualquer outra informação relevante...`
    },
    {
      type: 'feature',
      title: 'Feature Request',
      description: 'Sugerir uma nova funcionalidade',
      template: `**Descrição da Feature**
Descreva a funcionalidade que você gostaria de ver...

**Problema que Resolve**
Que problema essa feature resolveria?

**Solução Proposta**
Como você imagina que isso funcionaria?

**Alternativas Consideradas**
Você pensou em outras formas de resolver isso?

**Informações Adicionais**
Qualquer outro contexto ou screenshots...`
    },
    {
      type: 'compatibility',
      title: 'Problema de Compatibilidade',
      description: 'Reportar problemas específicos de marca/modelo',
      template: `**Informações do Dispositivo**
- Marca: 
- Modelo: 
- Versão do Android: 
- UI customizada (MIUI, One UI, etc): 

**Problema Encontrado**
Descreva o que não funciona...

**Comando Usado**
Qual comando foi executado?

**Logs/Output**
Cole aqui o log do terminal...

**Funciona Parcialmente?**
Alguma parte do script funciona?`
    }
  ];

  const handleCreateIssue = (template: string, title: string) => {
    const githubUrl = `https://github.com/GlitchBruxo/flow-booster-brutality-engine/issues/new?title=${encodeURIComponent(`[${title}] `)}&body=${encodeURIComponent(template)}`;
    window.open(githubUrl, '_blank');
  };

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
            REPORT ISSUES
          </h1>
          <p className="text-tech-green font-mono">
            Encontrou um bug? Tem uma sugestão? Relate aqui!
          </p>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-tech-dark border border-tech-green p-6">
            <Github className="text-tech-green mb-4" size={32} />
            <h3 className="text-tech-white font-bold mb-2">GitHub Issues</h3>
            <p className="text-tech-gray text-sm mb-4">
              Reporte bugs e solicite features diretamente no repositório
            </p>
            <Button 
              className="brutal-button w-full"
              onClick={() => window.open('https://github.com/GlitchBruxo/flow-booster-brutality-engine/issues', '_blank')}
            >
              Ver Issues Existentes
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="bg-tech-dark border border-tech-blue p-6">
            <MessageSquare className="text-tech-blue mb-4" size={32} />
            <h3 className="text-tech-white font-bold mb-2">Discord Community</h3>
            <p className="text-tech-gray text-sm mb-4">
              Converse com outros usuários e tire dúvidas
            </p>
            <Button 
              variant="outline"
              className="brutal-button-secondary w-full"
              onClick={() => window.open('https://discord.gg/darkanomaly', '_blank')}
            >
              Entrar no Discord
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Issue Templates */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-tech-white mb-6 font-mono">
            TEMPLATES DE ISSUE
          </h2>
          
          <div className="space-y-6">
            {issueTemplates.map((template) => (
              <div key={template.type} className="bg-tech-dark border border-tech-gray p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-tech-green font-bold text-lg mb-2">
                      {template.title}
                    </h3>
                    <p className="text-tech-gray text-sm">
                      {template.description}
                    </p>
                  </div>
                  <Button
                    className="brutal-button"
                    onClick={() => handleCreateIssue(template.template, template.title)}
                  >
                    Criar Issue
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <details className="mt-4">
                  <summary className="text-tech-yellow cursor-pointer font-mono text-sm">
                    Ver Template
                  </summary>
                  <pre className="mt-4 bg-tech-black border border-tech-green p-4 text-xs overflow-x-auto text-tech-white">
                    {template.template}
                  </pre>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines */}
        <div className="bg-tech-dark border border-tech-yellow p-6">
          <h3 className="text-tech-yellow font-bold mb-4 font-mono">
            DIRETRIZES PARA REPORTS
          </h3>
          <ul className="space-y-2 text-tech-white text-sm">
            <li>• <strong>Seja específico:</strong> Inclua informações detalhadas sobre seu dispositivo</li>
            <li>• <strong>Inclua logs:</strong> Cole o output do script sempre que possível</li>
            <li>• <strong>Reproduza o erro:</strong> Teste novamente antes de reportar</li>
            <li>• <strong>Verifique issues existentes:</strong> Evite duplicatas</li>
            <li>• <strong>Use português ou inglês:</strong> Para facilitar o suporte</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;
