import React from 'react';

interface MarqueeProps {
  text: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text }) => (
  <div className="overflow-hidden bg-black text-white py-3 whitespace-nowrap border-t border-b border-white/10">
    <div className="inline-block animate-marquee">
      <span className="text-sm font-mono tracking-widest mx-4">{text}</span>
      <span className="text-sm font-mono tracking-widest mx-4">{text}</span>
      <span className="text-sm font-mono tracking-widest mx-4">{text}</span>
      <span className="text-sm font-mono tracking-widest mx-4">{text}</span>
      <span className="text-sm font-mono tracking-widest mx-4">{text}</span>
      <span className="text-sm font-mono tracking-widest mx-4">{text}</span>
      <span className="text-sm font-mono tracking-widest mx-4">{text}</span>
      <span className="text-sm font-mono tracking-widest mx-4">{text}</span>
    </div>
  </div>
);