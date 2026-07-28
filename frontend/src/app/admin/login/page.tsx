'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const apiHost = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
      const res = await fetch(`${apiHost}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.detail || 'E-mail ou senha incorretos.');
      }

      const tokenData = await res.json();
      localStorage.setItem('tourly_token', tokenData.access_token);
      localStorage.setItem('tourly_role', tokenData.role);

      if (tokenData.role === 'ADMIN_TENANT' || tokenData.role === 'ADMIN_GLOBAL') {
        router.push('/admin/prefeitura');
      } else {
        router.push('/admin/dashboard');
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao realizar login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Image
          src="/logo-white.png"
          alt="Tourly Logo"
          width={220}
          height={60}
          priority
          className="mx-auto h-14 w-auto object-contain mb-6"
        />
        <h2 className="text-3xl font-extrabold text-white">
          Painel de Gestão Tourly
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Acesso para Lojistas e Secretarias de Turismo
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-3xl sm:px-10 border border-slate-100">
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-rose-50 text-rose-600 text-xs font-semibold p-3 rounded-xl border border-rose-200">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                E-mail
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@empresa.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-turquoise-500 focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Senha
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-turquoise-500 focus:outline-none text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl bg-turquoise-500 hover:bg-turquoise-600 text-white font-bold text-sm shadow-md shadow-turquoise-500/20 transition"
              >
                {loading ? 'Entrando...' : 'Entrar no Painel'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-xs text-slate-500 hover:text-slate-700 font-medium">
              ← Voltar ao Portal Turístico
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
