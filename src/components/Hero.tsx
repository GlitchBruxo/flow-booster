
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CopyButton } from './CopyButton';

const Hero = () => {
  const asciiArtFlow = `
███████╗██╗      ██████╗ ██╗    ██║
██╔════╝██║     ██╔═══██╗██║    ██║
█████╗  ██║     ██║   ██║██║ █╗ ██║
██╔══╝  ██║     ██║   ██║██║███╗██║
██║     ███████╗╚██████╔╝╚███╔███╔╝
╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝
`;

  const asciiArtBooster = `
██████╗  ██████╗  ██████╗ ███████╗████████╗███████╗██████╗ 
██╔══██╗██╔═══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗
██████╔╝██║   ██║██║   ██║███████╗   ██║   █████╗  ██████╔╝
██╔══██╗██║   ██║██║   ██║╚════██║   ██║   ██╔══╝  ██╔══██╗
██████╔╝╚██████╔╝╚██████╔╝███████║   ██║   ███████╗██║  ██║
╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
`;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        {/* ASCII Art - FLOW */}
        <div className="mb-4 overflow-x-auto">
          <pre className="ascii-art text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl inline-block">
            {asciiArtFlow}
          </pre>
        </div>

        {/* ASCII Art - BOOSTER */}
        <div className="mb-8 overflow-x-auto">
          <pre className="ascii-art text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl inline-block">
            {asciiArtBooster}
          </pre>
        </div>

        {/* Main title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-tech-white mb-4 glitch-text">
          FLOW BOOSTER
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-tech-green mb-2 font-mono">
          ANDROID BRUTALITY ENGINE
        </h2>

        {/* Taglines */}
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-tech-green mb-2 font-mono">
          "EXECUTADO COM BRUTALIDADE, FOCO E EFICIÊNCIA"
        </p>
        
        <p className="text-sm sm:text-base md:text-lg text-tech-white mb-8 font-mono">
          🔥 PERFORMANCE MÁXIMA. ZERO ENROLAÇÃO.
        </p>

        {/* Command preview */}
        <div className="code-block max-w-4xl mx-auto mb-8 text-left">
          <div className="flex items-center justify-between mb-2">
            <span className="text-tech-yellow font-mono text-xs">$ EXECUÇÃO DIRETA VIA CURL - SEM DOWNLOAD</span>
            <CopyButton text='sh -c "$(curl -fsSL https://dub.sh/flowbooster)" -- --boost' />
          </div>
          <code className="text-tech-green text-xs">
            sh -c "$(curl -fsSL https://dub.sh/flowbooster)" -- --boost<span className="terminal-cursor"></span>
          </code>
        </div>

        {/* GitHub Button */}
        <div className="mb-8">
          <Button 
            className="brutal-button text-base px-8 py-4 mr-4"
            onClick={() => {
              window.open('https://github.com/GlitchBruxo/flow-booster-brutality-engine', '_blank');
            }}
          >
            GITHUB REPO
          </Button>
          
          <Button 
            variant="outline"
            className="brutal-button-secondary text-base px-8 py-4"
            onClick={() => {
              const link = document.createElement('a');
              link.href = 'https://dub.sh/flowbooster';
              link.download = 'bomba.sh';
              link.click();
            }}
          >
            DOWNLOAD SCRIPT
          </Button>
        </div>

        {/* Key features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
          <div className="bg-tech-dark border border-tech-green p-4">
            <h3 className="font-mono font-bold text-tech-green mb-2">SEM ROOT</h3>
            <p className="text-sm text-tech-white">Funciona via shell em qualquer Android 8+</p>
          </div>
          <div className="bg-tech-dark border border-tech-green p-4">
            <h3 className="font-mono font-bold text-tech-green mb-2">REVERSÍVEL</h3>
            <p className="text-sm text-tech-white">Use --reverse para desfazer tudo</p>
          </div>
          <div className="bg-tech-dark border border-tech-green p-4">
            <h3 className="font-mono font-bold text-tech-green mb-2">LOGS DETALHADOS</h3>
            <p className="text-sm text-tech-white">Tudo salvo em /sdcard/Logs/</p>
          </div>
          <div className="bg-tech-dark border border-tech-green p-4">
            <h3 className="font-mono font-bold text-tech-green mb-2">EXECUÇÃO DIRETA</h3>
            <p className="text-sm text-tech-white">Via curl - sem download necessário</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            className="brutal-button text-base px-8 py-4"
            onClick={() => {
              document.getElementById('commands')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            VER COMANDOS
          </Button>
          
          <Button 
            variant="outline" 
            className="brutal-button-secondary text-base px-8 py-4"
            onClick={() => {
              window.open('https://discord.gg/darkanomaly', '_blank');
            }}
          >
            DISCORD COMMUNITY
          </Button>
        </div>

        {/* Quick commands */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="bg-tech-black border border-tech-green p-3">
            <h4 className="text-tech-green font-mono text-sm font-bold mb-2">PERFIL GAMER</h4>
            <div className="code-block text-xs bg-tech-dark border-0 p-2">
              <code className="text-tech-green">--gamer</code>
            </div>
          </div>
          <div className="bg-tech-black border border-tech-yellow p-3">
            <h4 className="text-tech-yellow font-mono text-sm font-bold mb-2">ECONOMIA BATERIA</h4>
            <div className="code-block text-xs bg-tech-dark border-0 p-2">
              <code className="text-tech-green">--battery</code>
            </div>
          </div>
          <div className="bg-tech-black border border-tech-blue p-3">
            <h4 className="text-tech-blue font-mono text-sm font-bold mb-2">MINIMAL DEV</h4>
            <div className="code-block text-xs bg-tech-dark border-0 p-2">
              <code className="text-tech-green">--minimal</code>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="p-4 border border-tech-red bg-tech-dark/50">
          <p className="text-tech-red font-mono text-sm">
            ⚠ WARNING: POWER USER TOOL - USE --reverse TO UNDO ⚠
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
