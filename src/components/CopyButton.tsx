
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CopyButtonProps {
  text: string;
  className?: string;
}

export const CopyButton = ({ text, className = "" }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      onClick={copyToClipboard}
      variant="ghost"
      size="sm"
      className={`font-mono text-xs text-tech-green hover:text-tech-black hover:bg-tech-green ${className}`}
    >
      {copied ? 'COPIED!' : 'COPY'}
    </Button>
  );
};
