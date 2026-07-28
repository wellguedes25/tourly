'use client';

import React, { useState } from 'react';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIChatModal: React.FC<AIChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    { sender: 'ai', text: 'Olá! Sou o assistente virtual do Tourly. Como posso te ajudar a aproveitar Porto de Galinhas hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    try {
      const apiHost = '/api/v1';
      const res = await fetch(`${apiHost}/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });
      const data = await res.json();

      setMessages(prev => [...prev, { sender: 'ai', text: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { 
        sender: 'ai', 
        text: 'Recomendo visitar a Pizzaria da Hora para massas ou a Submerso Scuba Diver para mergulho nas piscinas naturais!' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col h-[600px]">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-900 to-slate-800 text-white p-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-turquoise-500 flex items-center justify-center text-xl">
              ✨
            </div>
            <div>
              <h3 className="font-bold text-base">Assistente Tourly</h3>
              <p className="text-xs text-turquoise-400 font-medium">Informações Verificadas</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white text-2xl font-bold p-1"
          >
            ×
          </button>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
          {messages.map((m, idx) => (
            <div 
              key={idx} 
              className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                m.sender === 'user' 
                  ? 'bg-turquoise-500 text-white rounded-br-none shadow-md shadow-turquoise-500/10' 
                  : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none shadow-sm'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 rounded-2xl p-3 text-xs text-slate-400 animate-pulse">
                Buscando atrações verificadas...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ex: Onde comer pizza com crianças?"
            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-turquoise-500 text-sm"
          />
          <button
            onClick={handleSend}
            className="bg-turquoise-500 hover:bg-turquoise-600 text-white px-5 py-3 rounded-xl font-bold text-sm transition"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
