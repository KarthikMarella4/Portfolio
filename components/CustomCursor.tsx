import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        body { cursor: none; }
        a, button { cursor: none !important; }
        @media (max-width: 768px) {
          .custom-cursor { display: none; }
          body { cursor: auto; }
          a, button { cursor: pointer !important; }
        }
      `}</style>
      <div
        className="custom-cursor fixed pointer-events-none z-[100] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 2.5 : 1})`,
          transition: 'transform 0.15s ease-out, height 0.15s ease-out, width 0.15s ease-out',
        }}
      >
        <div className={`
          w-4 h-4 rounded-full bg-white transition-all duration-300
        `} />
      </div>
    </>
  );
};