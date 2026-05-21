import Tag from '@/components/ui/Tag'
import Button from '@/components/ui/Button'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { strings } from '@/lib/strings'

export default function CTABanner() {
  const { cta } = strings

  return (
    <section className="py-20 relative overflow-hidden bg-void">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(79,155,255,0.12) 0%, rgba(155,107,255,0.08) 50%, rgba(34,217,126,0.06) 100%)',
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(79,155,255,0.15) 0%, transparent 70%)',
        }}
      />
      {/* Border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(79,155,255,0.3)] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(79,155,255,0.2)] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <RevealWrapper className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:max-w-xl text-center lg:text-left">
            <Tag color="blue" className="mb-4">{cta.tag}</Tag>
            <h2
              className="text-3xl sm:text-4xl xl:text-5xl font-bold text-oak-text mb-4"
              style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
            >
              {cta.title}
            </h2>
            <p className="text-oak-muted text-lg leading-relaxed">{cta.subtitle}</p>
          </div>

          <div className="flex-shrink-0">
            <Button href="#kontaktai" size="lg">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 2l7 7-7 7M2 9h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {cta.button}
            </Button>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
