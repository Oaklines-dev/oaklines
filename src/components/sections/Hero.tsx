'use client'
import { useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import { strings } from '@/lib/strings'

function useCountUp(target: number, suffix: string, duration = 1800, delay = 0) {
  const [display, setDisplay] = useState('0' + suffix)

  useEffect(() => {
    let raf: number
    const start = () => {
      const startTime = performance.now()
      const tick = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const ease = 1 - Math.pow(1 - progress, 3)
        const value = Math.round(ease * target)
        setDisplay(value.toLocaleString('lt-LT') + suffix)
        if (progress < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    const t = setTimeout(start, 600 + delay)
    return () => { clearTimeout(t); cancelAnimationFrame(raf) }
  }, [target, suffix, duration, delay])

  return display
}

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const display = useCountUp(value, suffix)
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-2xl font-bold text-oak-text" style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}>
        {display}
      </span>
      <span className="text-xs text-oak-muted leading-tight">{label}</span>
    </div>
  )
}

const barHeights = [35, 52, 44, 68, 55, 80, 95]
const barHighlighted = [5, 6]

export default function Hero() {
  const linesRef = useRef<HTMLDivElement>(null)
  const [linesIn, setLinesIn] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLinesIn(true), 200)
    return () => clearTimeout(t)
  }, [])

  const { hero } = strings

  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden bg-void">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Orb 1 */}
      <div
        className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 animate-orb-drift"
        style={{ background: 'radial-gradient(circle, rgba(79,155,255,0.4) 0%, transparent 70%)' }}
      />
      {/* Orb 2 */}
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(155,107,255,0.4) 0%, transparent 70%)',
          animation: 'orb-drift 12s ease-in-out infinite reverse',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <div>
            <Tag>{hero.tag}</Tag>
          </div>

          {/* Animated headline */}
          <div ref={linesRef} className="flex flex-col gap-1">
            {hero.headlineLines.map((line, i) => (
              <div key={i} className="hero-line-wrap">
                <span
                  className={`hero-line text-4xl sm:text-5xl xl:text-6xl font-black text-oak-text leading-none tracking-tight ${linesIn ? 'in' : ''}`}
                  style={{
                    fontFamily: 'var(--sora), Sora, sans-serif',
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  {i === 2 ? (
                    <span className="gradient-text">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              </div>
            ))}
          </div>

          <p className="text-oak-muted text-base sm:text-lg leading-relaxed max-w-[500px]">
            {hero.subtext}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Button size="lg" href="#kontaktai">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              {hero.ctaPrimary}
            </Button>
            <Button variant="ghost" size="lg" href="#how">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 6.5L12 9l-5 2.5V6.5z" fill="currentColor" />
              </svg>
              {hero.ctaSecondary}
            </Button>
          </div>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2 mt-1">
            {hero.trustPills.map((pill) => (
              <span
                key={pill}
                className="flex items-center gap-1.5 text-xs text-oak-muted bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-full px-3.5 py-1.5"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <circle cx="6.5" cy="6.5" r="6.5" fill="rgba(34,217,126,0.15)" />
                  <path d="M3.5 6.5l2 2 4-4" stroke="#22d97e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Dashboard card */}
        <div className="hidden lg:flex justify-end">
          <div className="relative w-full max-w-[480px]">
            {/* Floating badge 1 */}
            <div className="absolute -left-10 top-24 z-20 flex items-center gap-2 bg-[rgba(12,18,32,0.9)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-2.5 backdrop-blur-sm animate-float shadow-xl text-xs font-medium text-oak-text">
              <div className="w-2 h-2 rounded-full bg-oak-green animate-pulse-dot" />
              {hero.dashboard.floatBadge1}
            </div>

            {/* Floating badge 2 */}
            <div
              className="absolute -right-8 bottom-28 z-20 flex items-center gap-2 bg-[rgba(12,18,32,0.9)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-2.5 backdrop-blur-sm shadow-xl text-xs font-medium text-oak-text"
              style={{ animation: 'float 7s ease-in-out infinite 1s' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="5" height="5" rx="1" stroke="#4f9bff" strokeWidth="1.2" />
                <rect x="8" y="1" width="5" height="5" rx="1" stroke="#4f9bff" strokeWidth="1.2" />
                <rect x="1" y="8" width="5" height="5" rx="1" stroke="#4f9bff" strokeWidth="1.2" />
                <rect x="8" y="8" width="5" height="5" rx="1" stroke="#4f9bff" strokeWidth="1.2" />
              </svg>
              {hero.dashboard.floatBadge2}
            </div>

            {/* Main dashboard card */}
            <div className="w-full bg-card border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* macOS header */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c940]" />
                <span className="ml-3 text-xs text-oak-muted font-medium">{hero.dashboard.title}</span>
              </div>

              <div className="p-5 space-y-5">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 pb-5 border-b border-[rgba(255,255,255,0.06)]">
                  {hero.dashboard.stats.map((stat, i) => (
                    <StatCounter key={i} {...stat} />
                  ))}
                </div>

                {/* Bar chart */}
                <div>
                  <div className="text-xs text-oak-muted mb-3">{hero.dashboard.chartLabel}</div>
                  <div className="flex items-end gap-2 h-20">
                    {barHeights.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm transition-all duration-700"
                        style={{
                          height: `${h}%`,
                          background: barHighlighted.includes(i)
                            ? 'linear-gradient(180deg, #4f9bff 0%, #2a6fd4 100%)'
                            : 'rgba(255,255,255,0.1)',
                          transitionDelay: `${i * 80 + 800}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Lead pipeline rows */}
                <div className="space-y-2.5">
                  {hero.dashboard.leads.map((lead, i) => {
                    const statusColors: Record<string, string> = {
                      green: 'bg-[rgba(34,217,126,0.12)] text-oak-green',
                      blue: 'bg-[rgba(79,155,255,0.12)] text-oak-blue',
                      muted: 'bg-[rgba(255,255,255,0.06)] text-oak-muted',
                      purple: 'bg-[rgba(155,107,255,0.12)] text-oak-purple',
                    }
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-full bg-[rgba(79,155,255,0.15)] flex items-center justify-center text-xs font-bold text-oak-blue">
                            {lead.name[0]}
                          </div>
                          <span className="text-xs text-oak-text font-medium">{lead.name}</span>
                        </div>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusColors[lead.color]}`}
                        >
                          {lead.status}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-oak-muted tracking-widest uppercase">Slinkti</span>
        <div className="w-5 h-8 border border-[rgba(255,255,255,0.2)] rounded-full flex items-start justify-center pt-1.5">
          <div
            className="w-1 h-2 bg-oak-muted rounded-full"
            style={{ animation: 'scrollAnim 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  )
}
