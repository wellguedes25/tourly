'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PrefeituraDashboardPage() {
  const [successMsg, setSuccessMsg] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLoc, setEventLoc] = useState('');

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg(`Evento "${eventTitle}" publicado com sucesso na agenda oficial do município!`);
    setEventTitle('');
    setEventDate('');
    setEventLoc('');
    setTimeout(() => setSuccessMsg(''), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-navy-900 text-white px-8 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Tourly Logo" width={140} height={40} className="h-8 w-auto brightness-200" />
          <span className="text-xs bg-amber-500 text-white font-bold px-3 py-1 rounded-full uppercase">
            Gestor Público / Secretaria de Turismo
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-300">Município: Porto de Galinhas - PE</span>
          <Link href="/admin/login" className="text-xs text-rose-400 hover:underline">Sair</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto w-full p-8 flex-1">
        {successMsg && (
          <div className="mb-6 bg-emerald-50 text-emerald-700 text-sm font-semibold p-4 rounded-2xl border border-emerald-200">
            ✓ {successMsg}
          </div>
        )}

        {/* Dashboard Analytics Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase">Acessos no Mês</p>
            <h3 className="text-3xl font-extrabold text-navy-900 mt-2">14.820</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase">Empresas Cadastradas</p>
            <h3 className="text-3xl font-extrabold text-turquoise-600 mt-2">48</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-xs font-bold text-slate-400 uppercase">Interações Totem/PWA</p>
            <h3 className="text-3xl font-extrabold text-amber-500 mt-2">6.340</h3>
          </div>
        </div>

        {/* Form Evento */}
        <form onSubmit={handleCreateEvent} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 space-y-6">
          <h3 className="text-lg font-bold text-navy-900">Publicar Evento na Agenda da Cidade</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Nome do Evento</label>
              <input
                type="text"
                required
                placeholder="Ex: Festival Gastronômico de Verão"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-turquoise-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Data e Horário</label>
              <input
                type="text"
                required
                placeholder="Ex: Hoje às 19:00"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-turquoise-500 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Localização do Evento</label>
            <input
              type="text"
              required
              placeholder="Ex: Vila dos Pescadores"
              value={eventLoc}
              onChange={(e) => setEventLoc(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-turquoise-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="py-3 px-6 rounded-xl bg-turquoise-500 hover:bg-turquoise-600 text-white font-bold text-sm shadow-md transition"
          >
            Publicar Evento Oficial
          </button>
        </form>
      </main>
    </div>
  );
}
