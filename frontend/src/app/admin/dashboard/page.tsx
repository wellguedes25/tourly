'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LojistaDashboardPage() {
  const [activeTab, setActiveTab] = useState<'perfil' | 'promocoes'>('perfil');
  const [successMsg, setSuccessMsg] = useState('');

  // Estado do perfil do estabelecimento
  const [companyName, setCompanyName] = useState('Pizzaria da Hora');
  const [description, setDescription] = useState('A melhor pizza artesanal de Porto de Galinhas com ingredientes selecionados.');
  const [address, setAddress] = useState('Rua das Piscinas Naturais, 45');
  const [whatsapp, setWhatsapp] = useState('5581999990001');

  // Estado de nova promoção
  const [promoTitle, setPromoTitle] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [promoDesc, setPromoDesc] = useState('');

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg('Perfil atualizado com sucesso no portal!');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  const handleCreatePromo = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg(`Cupom ${promoCode} criado e disponibilizado nos totens!`);
    setPromoTitle('');
    setPromoCode('');
    setPromoDesc('');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Topbar */}
      <header className="bg-navy-900 text-white px-8 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Tourly Logo" width={140} height={40} className="h-8 w-auto brightness-200" />
          <span className="text-xs bg-turquoise-500 text-slate-900 font-bold px-3 py-1 rounded-full uppercase">
            Painel do Comerciante
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-300">Pizzaria da Hora (Plano Destaque)</span>
          <Link href="/admin/login" className="text-xs text-rose-400 hover:underline">Sair</Link>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-5xl mx-auto w-full p-8 flex-1">
        {successMsg && (
          <div className="mb-6 bg-emerald-50 text-emerald-700 text-sm font-semibold p-4 rounded-2xl border border-emerald-200">
            ✓ {successMsg}
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex gap-4 border-b border-slate-200 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('perfil')}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition ${
              activeTab === 'perfil' ? 'bg-turquoise-500 text-white shadow-md shadow-turquoise-500/20' : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            🏢 Perfil da Empresa
          </button>
          <button
            onClick={() => setActiveTab('promocoes')}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition ${
              activeTab === 'promocoes' ? 'bg-turquoise-500 text-white shadow-md shadow-turquoise-500/20' : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            🏷️ Minhas Promoções & Cupons
          </button>
        </div>

        {/* Tab 1: Perfil */}
        {activeTab === 'perfil' && (
          <form onSubmit={handleSaveProfile} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 space-y-6">
            <h3 className="text-lg font-bold text-navy-900">Editar Informações do Estabelecimento</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Nome Comercial</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-turquoise-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">WhatsApp de Atendimento</label>
                <input
                  type="text"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-turquoise-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Endereço Completo</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-turquoise-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Descrição Curta para Turistas</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-turquoise-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="py-3 px-6 rounded-xl bg-turquoise-500 hover:bg-turquoise-600 text-white font-bold text-sm shadow-md transition"
            >
              Salvar Alterações
            </button>
          </form>
        )}

        {/* Tab 2: Promoções */}
        {activeTab === 'promocoes' && (
          <form onSubmit={handleCreatePromo} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 space-y-6">
            <h3 className="text-lg font-bold text-navy-900">Criar Novo Cupom de Desconto</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Título da Oferta</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: 15% de Desconto na Pizza Grande"
                  value={promoTitle}
                  onChange={(e) => setPromoTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-turquoise-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Código do Cupom</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: TOURLY15"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-turquoise-500 text-sm uppercase"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Regras de Resgate</label>
              <textarea
                rows={2}
                required
                placeholder="Ex: Válido para consumação no salão de segunda a quinta."
                value={promoDesc}
                onChange={(e) => setPromoDesc(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-turquoise-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md transition"
            >
              Publicar Cupom nos Totens
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
