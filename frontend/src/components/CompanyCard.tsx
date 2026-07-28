'use client';

import React from 'react';

export interface Company {
  id: string;
  name: string;
  description?: string;
  address?: string;
  whatsapp_number?: string;
  plan_type: 'BASIC' | 'PRO' | 'HIGHLIGHT';
  is_verified: boolean;
  image_url?: string;
}

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const isHighlight = company.plan_type === 'HIGHLIGHT';
  const isPro = company.plan_type === 'PRO';

  const handleWhatsApp = () => {
    if (company.whatsapp_number) {
      const msg = encodeURIComponent(`Olá! Vi o perfil do ${company.name} no Tourly e gostaria de mais informações.`);
      window.open(`https://wa.me/${company.whatsapp_number}?text=${msg}`, '_blank');
    }
  };

  return (
    <div className={`relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${
      isHighlight ? 'border-amber-400 shadow-amber-500/10 ring-2 ring-amber-400/20' : 'border-slate-100 shadow-sm'
    }`}>
      {isHighlight && (
        <div className="absolute top-3 left-3 z-10 bg-amber-500 text-white font-bold text-xs uppercase px-3 py-1 rounded-full shadow-md">
          ⭐ Destaque
        </div>
      )}
      
      {company.is_verified && !isHighlight && (
        <div className="absolute top-3 left-3 z-10 bg-turquoise-500 text-white font-medium text-xs px-3 py-1 rounded-full shadow-md">
          ✓ Verificado
        </div>
      )}

      <div className="h-48 w-full bg-slate-100 relative overflow-hidden">
        {company.image_url ? (
          <img 
            src={company.image_url} 
            alt={company.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
          />
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400">Sem Imagem</div>
        )}
      </div>

      <div className="p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-navy-900 mb-1">{company.name}</h3>
          {company.address && (
            <p className="text-xs text-slate-500 mb-2 flex items-center gap-1">
              📍 {company.address}
            </p>
          )}
          {company.description && (
            <p className="text-sm text-slate-600 line-clamp-2 mb-4">
              {company.description}
            </p>
          )}
        </div>

        {company.whatsapp_number && (
          <button
            onClick={handleWhatsApp}
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition"
          >
            <span>💬 Conversar no WhatsApp</span>
          </button>
        )}
      </div>
    </div>
  );
};
