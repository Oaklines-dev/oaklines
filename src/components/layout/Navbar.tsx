'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useNavScroll } from '@/hooks/useNavScroll'
import { strings } from '@/lib/strings'
import Button from '@/components/ui/Button'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const scrolled = useNavScroll(60)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(7,11,18,0.92)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)]'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-oak-blue flex items-center justify-center shadow-[0_0_16px_rgba(79,155,255,0.4)]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 2C6.5 2 4.5 4 4.5 6.5C4.5 9 6.5 11 9 11C9 13.5 7 15.5 4.5 15.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M9 11C11.5 11 13.5 9 13.5 6.5C13.5 4 11.5 2 9 2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="9" cy="11" r="1.5" fill="white" />
              </svg>
            </div>
            <span
              className="text-xl font-bold text-oak-text tracking-tight"
              style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
            >
              {strings.nav.logo}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {strings.nav.links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-oak-muted hover:text-oak-text rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-all duration-150 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button
                onClick={() => handleNavClick('#kontaktai')}
                size="sm"
              >
                {strings.nav.cta}
              </Button>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Atidaryti meniu"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-oak-muted hover:text-oak-text hover:bg-[rgba(255,255,255,0.06)] transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M3 6h16M3 11h16M3 16h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
