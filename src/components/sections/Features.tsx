'use client'
import { useEffect, useRef, useState } from 'react'
import Tag from '@/components/ui/Tag'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { strings } from '@/lib/strings'

const featureIcons: Record<string, React.ReactNode> = {
  zap: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M11 2L4 12h7l-2 6 9-10h-7l2-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  layers: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <polygon points="10 2 18 6.5 10 11 2 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <path d="M2 11l8 4.5 8-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 15.5l8 4.5 8-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'trending-up': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <polyline points="1 15 7 9 11 13 19 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="14 4 19 4 19 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2L3 5.5v5.5c0 4 2.8 7.7 7 9 4.2-1.3 7-5 7-9V5.5L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  users: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="7" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1 18c0-3.5 2.7-5 6-5s6 1.5 6 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="14.5" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M12 18c.5-2.5 1.5-3 2.5-3S17 15.5 19 18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  settings: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M3.6 3.6l1.4 1.4M15 15l1.4 1.4M3.6 16.4l1.4-1.4M15 5l1.4-1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
}

const metricColors: Record<string, string> = {
  blue: '#4f9bff',
  green: '#22d97e',
  purple: '#9b6bff',
}

export default function Features() {
  const { features } = strings
  const panelRef = useRef<HTMLDivElement>(null)
  const [panelVisible, setPanelVisible] = useState(false)

  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setPanelVisible(true); observer.disconnect() }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-void">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="text-center mb-16">
          <Tag className="mb-4">{features.tag}</Tag>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold text-oak-text mb-4"
            style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
          >
            {features.title}
          </h2>
          <p className="text-oak-muted text-lg max-w-2xl mx-auto">{features.subtitle}</p>
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Feature list */}
          <div className="space-y-2">
            {features.items.map((item, i) => (
              <RevealWrapper
                key={i}
                delay={i * 70}
                className="group flex items-start gap-4 p-5 rounded-xl border border-transparent hover:border-[rgba(79,155,255,0.15)] hover:bg-[rgba(79,155,255,0.04)] hover:pl-7 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-[rgba(79,155,255,0.1)] flex items-center justify-center text-oak-blue flex-shrink-0 group-hover:bg-[rgba(79,155,255,0.15)] transition-colors">
                  {featureIcons[item.icon]}
                </div>
                <div>
                  <h3
                    className="font-semibold text-oak-text mb-1"
                    style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-oak-muted leading-relaxed">{item.description}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>

          {/* Performance panel (sticky) */}
          <div ref={panelRef} className="lg:sticky lg:top-24">
            <div className="bg-card border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.4)]">
              <div className="px-6 py-4 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                <h3
                  className="text-sm font-semibold text-oak-text"
                  style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
                >
                  {features.panel.title}
                </h3>
              </div>

              <div className="p-6 space-y-6">
                {/* Metrics */}
                <div className="space-y-4">
                  {features.panel.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-oak-muted">{m.label}</span>
                        <span
                          className="text-sm font-bold"
                          style={{ color: metricColors[m.color] }}
                        >
                          {m.value}%
                        </span>
                      </div>
                      <div className="prog-bar">
                        <div
                          className="prog-fill"
                          style={{
                            width: panelVisible ? `${m.value}%` : '0%',
                            background: metricColors[m.color],
                            transitionDelay: `${i * 150}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[rgba(255,255,255,0.06)] pt-5">
                  <div className="text-xs font-semibold text-oak-muted mb-3 uppercase tracking-wide">
                    Kanalų konversija
                  </div>
                  <div className="space-y-2.5">
                    {features.panel.channels.map((ch, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-oak-muted">{ch.name}</span>
                        <div className="flex items-center gap-3">
                          <div className="w-20 prog-bar">
                            <div
                              className="prog-fill bg-oak-blue"
                              style={{
                                width: panelVisible ? `${ch.pct}%` : '0%',
                                transitionDelay: `${(i + 3) * 120}ms`,
                              }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-oak-text w-12 text-right">
                            {ch.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-[rgba(34,217,126,0.05)] border border-[rgba(34,217,126,0.15)] rounded-xl">
                  <span className="text-sm text-oak-muted">{features.panel.costLabel}</span>
                  <span
                    className="text-xl font-black text-oak-green"
                    style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
                  >
                    {features.panel.costValue}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
