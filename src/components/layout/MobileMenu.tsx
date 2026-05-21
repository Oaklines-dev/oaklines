'use client'
import { strings } from '@/lib/strings'
import Button from '@/components/ui/Button'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const handleLink = (href: string) => {
    onClose()
    const target = document.querySelector(href)
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }

  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`}>
      {/* Close button */}
      <div className="flex items-center justify-between px-6 h-[72px] border-b border-[rgba(255,255,255,0.06)]">
        <span
          className="font-display font-bold text-xl tracking-tight"
          style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
        >
          Oaklines
        </span>
        <button
          onClick={onClose}
          aria-label="Uždaryti meniu"
          className="w-10 h-10 flex items-center justify-center rounded-lg text-oak-muted hover:text-oak-text hover:bg-[rgba(255,255,255,0.06)] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Links */}
      <nav className="flex flex-col px-6 py-8 gap-1">
        {strings.nav.links.map((link) => (
          <button
            key={link.href}
            onClick={() => handleLink(link.href)}
            className="text-left py-4 text-lg font-medium text-oak-muted hover:text-oak-text border-b border-[rgba(255,255,255,0.05)] transition-colors last:border-0"
          >
            {link.label}
          </button>
        ))}
      </nav>

      <div className="px-6 mt-auto pb-10">
        <Button
          href="#kontaktai"
          onClick={onClose}
          fullWidth
          size="lg"
        >
          {strings.nav.cta}
        </Button>
      </div>
    </div>
  )
}
