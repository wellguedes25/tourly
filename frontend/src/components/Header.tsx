'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  onOpenAI: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAI }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Tourly Logo" 
            width={180} 
            height={50} 
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-3">
          <Link 
            href="/totem"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
          >
            Modo Totem
          </Link>
          <button
            onClick={onOpenAI}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-turquoise-500 to-cyan-600 hover:from-turquoise-600 hover:to-cyan-700 shadow-md shadow-turquoise-500/20 transition transform active:scale-95"
          >
            <span>✨ Assistente IA</span>
          </button>
        </div>
      </div>
    </header>
  );
};
