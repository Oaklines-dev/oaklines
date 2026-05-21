'use client'
import { useEffect, useRef, useState } from 'react'
import Tag from '@/components/ui/Tag'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { strings } from '@/lib/strings'

function useCounter(target: number, suffix: string, startOnMount = true) {
  const [val, setVal] = useState('0' + suffix)
  const started = useRef(false)

  const start = () => {
    if (started.current) return
    started.current = true
    const duration = 1600
    const startTime = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setVal(Math.round(ease * target) + suffix)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  if (startOnMount) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => { start() }, [])
  }

  return { val, start }
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState('0' + suffix)
  const started = useRef(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1600
        const startTime = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(ease * value) + suffix)
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, suffix])

  return (
    <div ref={containerRef} className="text-center p-6">
      <div
        className="text-5xl xl:text-6xl font-black gradient-text mb-2"
        style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
      >
        {display}
      </div>
      <div className="text-oak-muted text-sm leading-relaxed max-w-[200px] mx-auto">{label}</div>
    </div>
  )
}

const insightIconMap: Record<string, React.ReactNode> = {
  'trending-up': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <polyline points="1 16 7 10 11 14 19 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="13 4 19 4 19 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  clock: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 5.5v4.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  zap: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M11 2L4 12h7l-2 6 9-10h-7l2-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  'dollar-sign': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 5.5H8a2.5 2.5 0 0 0 0 5h4a2.5 2.5 0 0 1 0 5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  users: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="8" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1 17c0-3.5 3-5.5 7-5.5s7 2 7 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="15" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M12 16c.5-2.5 1.5-4 3.5-4S19 13.5 19 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
}

const channelColors: Record<string, string> = {
  blue: '#4f9bff',
  purple: '#9b6bff',
  green: '#22d97e',
  orange: '#f5a623',
  muted: 'rgba(122,138,170,0.5)',
}

export default function Results() {
  const { results } = strings
  const barsRef = useRef<HTMLDivElement>(null)
  const [barsVisible, setBarsVisible] = useState(false)

  useEffect(() => {
    const el = barsRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setBarsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tyrimai" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <RevealWrapper className="text-center mb-16">
          <Tag className="mb-4">{results.tag}</Tag>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold text-oak-text mb-4"
            style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
          >
            {results.title}
          </h2>
          <p className="text-oak-muted text-lg max-w-2xl mx-auto">{results.subtitle}</p>
        </RevealWrapper>

        {/* Big stats */}
        <RevealWrapper className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)] rounded-2xl mb-12 overflow-hidden bg-card">
          {results.stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </RevealWrapper>

        {/* Insight cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {results.insightCards.map((card, i) => (
            <RevealWrapper
              key={i}
              delay={i * 70}
              className="bg-card border border-[rgba(255,255,255,0.07)] rounded-2xl p-5 hover:border-[rgba(79,155,255,0.15)] transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[rgba(79,155,255,0.1)] flex items-center justify-center text-oak-blue">
                  {insightIconMap[card.icon]}
                </div>
                <span className="text-xs font-semibold text-oak-muted uppercase tracking-wide">
                  {card.category}
                </span>
              </div>
              <div
                className="text-3xl font-black text-oak-text mb-2"
                style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
              >
                {card.stat}
              </div>
              <h3
                className="text-sm font-semibold text-oak-text mb-2"
                style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
              >
                {card.headline}
              </h3>
              <p className="text-xs text-oak-muted leading-relaxed mb-3">{card.detail}</p>
              <p className="text-[10px] text-oak-muted opacity-50 italic">{card.source}</p>
            </RevealWrapper>
          ))}
        </div>

        {/* Channel performance card (full width) */}
        <RevealWrapper>
          <div ref={barsRef} className="bg-card border border-[rgba(255,255,255,0.07)] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3
                  className="text-lg font-semibold text-oak-text"
                  style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
                >
                  {results.channelCard.title}
                </h3>
                <p className="text-xs text-oak-muted mt-1">{results.channelCard.subtitle}</p>
              </div>
            </div>
            <div className="space-y-4">
              {results.channelCard.channels.map((ch, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-32 text-sm text-oak-muted flex-shrink-0">{ch.name}</div>
                  <div className="flex-1 prog-bar">
                    <div
                      className="prog-fill"
                      style={{
                        width: barsVisible ? `${ch.pct}%` : '0%',
                        background: channelColors[ch.color] || channelColors.blue,
                        transitionDelay: `${i * 120}ms`,
                      }}
                    />
                  </div>
                  <div className="w-12 text-right text-sm font-semibold text-oak-text">{ch.value}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* Disclaimer */}
        <div className="mt-6 flex items-start gap-2 text-xs text-oak-muted opacity-60">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
            <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M7 6v5M7 4.5v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          <span>{results.disclaimer}</span>
        </div>
      </div>
    </section>
  )
}
