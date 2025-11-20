import React from 'react';
import { X } from 'lucide-react';

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavOverlay: React.FC<NavOverlayProps> = ({ isOpen, onClose }) => (
  <div className={`fixed inset-0 bg-[#F3F3F3] z-50 transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
    <div className="absolute top-6 right-6">
      <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform duration-300">
        <X size={32} />
      </button>
    </div>
    <div className="flex flex-col items-center justify-center h-full space-y-8">
      {['About', 'Skills', 'Projects', 'Internship', 'Certifications', 'Resume'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`} 
          onClick={onClose} 
          className="text-4xl md:text-6xl font-black uppercase tracking-tighter hover:text-orange-600 transition-colors duration-300 cursor-pointer"
        >
          {item}
        </a>
      ))}
    </div>
  </div>
);