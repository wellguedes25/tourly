'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { CompanyCard, Company } from '@/components/CompanyCard';
import { AIChatModal } from '@/components/AIChatModal';

export default function HomePage() {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const apiHost = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
        const res = await fetch(`${apiHost}/companies`);
        const data = await res.json();
        setCompanies(data);
      } catch (err) {
        console.log('Usando dados mockados');
      }
    };
    fetchCompanies();
  }, []);

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'restaurantes', name: '🍽️ Restaurantes' },
    { id: 'passeios', name: '🤿 Passeios & Mergulho' },
    { id: 'hospedagem', name: '🏨 Hospedagem' },
    { id: 'eventos', name: '🎉 Eventos' },
  ];

  const filteredCompanies = companies.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                          (c.description && c.description.toLowerCase().includes(search.toLowerCase()));
    return matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenAI={() => setIsAiOpen(true)} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-navy-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-turquoise-500/20 via-transparent to-transparent"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-turquoise-400 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
            📍 Porto de Galinhas - PE
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Descubra as melhores experiências da cidade
          </h1>
          <p className="text-lg text-slate-300 mb-8 font-light">
            Encontre restaurantes renomados, passeios inesquecíveis, eventos locais e cupons de desconto exclusivos.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto flex items-center bg-white rounded-2xl p-2 shadow-2xl">
            <span className="pl-4 text-xl">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="O que você está procurando hoje?"
              className="w-full px-4 py-3 text-slate-900 text-sm focus:outline-none bg-transparent"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {/* Categories Bar */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? 'bg-turquoise-500 text-white shadow-md shadow-turquoise-500/20'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((c) => (
            <CompanyCard key={c.id} company={c} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        <p>© 2026 Tourly - Plataforma Inteligente de Gestão de Destinos Turísticos.</p>
      </footer>

      {/* AI Modal */}
      <AIChatModal isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </div>
  );
}
