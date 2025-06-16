
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CopyButton } from './CopyButton';

const Hero = () => {
  const asciiArt = `
███████╗██╗      ██████╗ ██╗    ██╗    ██████╗  ██████╗  ██████╗ ███████╗████████╗███████╗██████╗ 
██╔════╝██║     ██╔═══██╗██║    ██║    ██╔══██╗██╔═══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗
█████╗  ██║     ██║   ██║██║ █╗ ██║    ██████╔╝██║   ██║██║   ██║███████╗   ██║   █████╗  ██████╔╝
██╔══╝  ██║     ██║   ██║██║███╗██║    ██╔══██╗██║   ██║██║   ██║╚════██║   ██║   ██╔══╝  ██╔══██╗
██║     ███████╗╚██████╔╝╚███╔███╔╝    ██████╔╝╚██████╔╝╚██████╔╝███████║   ██║   ███████╗██║  ██║
╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝     ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
`;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        {/* ASCII Art */}
        <div className="mb-8 overflow-x-auto">
          <pre className="ascii-art text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl inline-block">
            {asciiArt}
          </pre>
        </div>

        {/* Main title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-tech-white mb-4 glitch-text">
          ANDROID CLI OPTIMIZER
        </h1>

        {/* Taglines */}
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-tech-green mb-2 font-mono">
          "EXECUTADO COM BRUTALIDADE, FOCO E EFICIÊNCIA"
        </p>
        
        <p className="text-sm sm:text-base md:text-lg text-tech-white mb-8 font-mono">
          DESBLOAT. OTIMIZE. DESTRUA A LENTIDÃO.
        </p>

        {/* Command preview */}
        <div className="code-block max-w-2xl mx-auto mb-8 text-left">
          <div className="flex items-center justify-between mb-2">
            <span className="text-tech-yellow font-mono text-xs">$ flow_booster.sh</span>
            <CopyButton text="sh /sdcard/flow_booster.sh --optimize --debloat" />
          </div>
          <code className="text-tech-green">
            sh /sdcard/flow_booster.sh --optimize --debloat<span className="terminal-cursor"></span>
          </code>
        </div>

        {/* Key features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-tech-dark border border-tech-green p-4">
            <h3 className="font-mono font-bold text-tech-green mb-2">SEM ROOT</h3>
            <p className="text-sm text-tech-white">Funciona via shell sem necessidade de root</p>
          </div>
          <div className="bg-tech-dark border border-tech-green p-4">
            <h3 className="font-mono font-bold text-tech-green mb-2">TERMINAL READY</h3>
            <p className="text-sm text-tech-white">Execute via Termux, Brevent ou ADB</p>
          </div>
          <div className="bg-tech-dark border border-tech-green p-4">
            <h3 className="font-mono font-bold text-tech-green mb-2">POWER USER</h3>
            <p className="text-sm text-tech-white">Para desenvolvedores que sabem o que fazem</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="brutal-button text-base px-8 py-4"
            onClick={() => {
              // Simulated download
              console.log('Downloading flow_booster.sh...');
            }}
          >
            DOWNLOAD .SH
          </Button>
          
          <Button 
            variant="outline" 
            className="brutal-button-secondary text-base px-8 py-4"
            onClick={() => {
              window.open('https://github.com', '_blank');
            }}
          >
            VIEW ON GITHUB
          </Button>
        </div>

        {/* Warning */}
        <div className="mt-8 p-4 border border-tech-red bg-tech-dark/50">
          <p className="text-tech-red font-mono text-sm">
            ⚠ WARNING: POWER USER TOOL - USE WITH CAUTION ⚠
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
