import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Oaklines — AI augimo ir klientų generavimo agentūra',
  description:
    'Oaklines padeda verslams augti greičiau naudojant pažangias AI sistemas klientų generavimui, pardavimų automatizavimui ir duomenų analizei. Integruojama per 14 dienų.',
  keywords: ['AI rinkodara', 'klientų generavimas', 'pardavimų automatizavimas', 'Lietuva', 'dirbtinis intelektas'],
  openGraph: {
    title: 'Oaklines — AI augimo ir klientų generavimo agentūra',
    description: 'Daugiau klientų. Mažiau rankų darbo. Su dirbtiniu intelektu.',
    type: 'website',
    locale: 'lt_LT',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="lt" className={`${inter.variable} ${sora.variable}`}>
      <body style={{ fontFamily: `var(--inter), Inter, sans-serif` }}>
        {children}
      </body>
    </html>
  )
}
