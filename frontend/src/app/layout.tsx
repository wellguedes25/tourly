import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tourly - Plataforma Inteligente de Turismo',
  description: 'Descubra as melhores atrações, restaurantes, passeios e eventos do município em um único lugar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-50 antialiased">{children}</body>
    </html>
  )
}
