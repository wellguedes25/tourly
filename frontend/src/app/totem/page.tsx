'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TotemPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col p-8 select-none">
      {/* Header do Totem */}
      <header className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
        <div className="flex items-center gap-4">
          <Image 
            src="/logo.png" 
            alt="Tourly Logo" 
            width={240} 
            height={70} 
            className="h-16 w-auto brightness-200"
          />
          <span className="text-xl font-bold bg-turquoise-500 px-4 py-1 rounded-full text-slate-900">
            Balcão Digital
          </span>
        </div>
        <Link 
          href="/" 
          className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-lg font-bold px-6 py-3 rounded-2xl transition"
        >
          Sair do Modo Totem
        </Link>
      </header>

      {/* Grid de Categorias Touch Screen (Totem Mode PRD-08) */}
      <main className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-850 p-8 rounded-3xl border border-slate-700/50 flex flex-col items-center justify-center text-center hover:border-turquoise-500 transition cursor-pointer shadow-2xl">
          <span className="text-6xl mb-4">🍕</span>
          <h2 className="text-2xl font-extrabold mb-2">Restaurantes</h2>
          <p className="text-slate-400 text-sm">Pizzarias, Frutos do Mar e Bares</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-850 p-8 rounded-3xl border border-slate-700/50 flex flex-col items-center justify-center text-center hover:border-turquoise-500 transition cursor-pointer shadow-2xl">
          <span className="text-6xl mb-4">🤿</span>
          <h2 className="text-2xl font-extrabold mb-2">Passeios & Mergulho</h2>
          <p className="text-slate-400 text-sm">Piscinas Naturais e Buggy</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-850 p-8 rounded-3xl border border-slate-700/50 flex flex-col items-center justify-center text-center hover:border-turquoise-500 transition cursor-pointer shadow-2xl">
          <span className="text-6xl mb-4">🎁</span>
          <h2 className="text-2xl font-extrabold mb-2">Cupons de Desconto</h2>
          <p className="text-slate-400 text-sm">Escaneie o QR Code no Celular</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-850 p-8 rounded-3xl border border-slate-700/50 flex flex-col items-center justify-center text-center hover:border-turquoise-500 transition cursor-pointer shadow-2xl">
          <span className="text-6xl mb-4">🏨</span>
          <h2 className="text-2xl font-extrabold mb-2">Hospedagem</h2>
          <p className="text-slate-400 text-sm">Hotéis e Pousadas</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-850 p-8 rounded-3xl border border-slate-700/50 flex flex-col items-center justify-center text-center hover:border-turquoise-500 transition cursor-pointer shadow-2xl">
          <span className="text-6xl mb-4">📅</span>
          <h2 className="text-2xl font-extrabold mb-2">Eventos da Cidade</h2>
          <p className="text-slate-400 text-sm">Programação Cultural</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-850 p-8 rounded-3xl border border-slate-700/50 flex flex-col items-center justify-center text-center hover:border-turquoise-500 transition cursor-pointer shadow-2xl">
          <span className="text-6xl mb-4">✨</span>
          <h2 className="text-2xl font-extrabold mb-2">Pergunte à IA</h2>
          <p className="text-slate-400 text-sm">Recomendações Instantâneas</p>
        </div>
      </main>

      {/* Footer com QR Code instrucional */}
      <footer className="border-t border-slate-800 pt-6 mt-8 flex items-center justify-between text-slate-400 text-sm">
        <p>Toque em qualquer categoria para explorar. Em inatividade, a tela é reiniciada automaticamente.</p>
        <p className="text-turquoise-400 font-bold">Porto de Galinhas - PE</p>
      </footer>
    </div>
  );
}
