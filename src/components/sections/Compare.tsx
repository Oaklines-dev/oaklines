'use client'
import { useState, useMemo } from 'react'
import Tag from '@/components/ui/Tag'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { strings } from '@/lib/strings'

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="rgba(34,217,126,0.12)" />
      <path d="M6 10l2.5 2.5L14 7" stroke="#22d97e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="rgba(255,80,80,0.1)" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#ff5050" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function CalcIcon({ type }: { type: string }) {
  if (type === 'clock') return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.4"/><path d="M9 5v4l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
  )
  if (type === 'users') return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M1 15c0-3.314 2.686-5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="13" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M10 15c0-2.761 1.567-4 3.5-4S17 12.239 17 15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
  )
  if (type === 'zap') return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M10 2L4 10h6l-2 6 8-9h-6l2-5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
  )
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/><rect x="11" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/><rect x="2" y="11" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/><rect x="11" y="11" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/></svg>
  )
}

const outputColors: Record<string, string> = {
  blue: '#4f9bff',
  green: '#22d97e',
  purple: '#9b6bff',
  orange: '#f5a623',
}
const outputBorders: Record<string, string> = {
  blue: 'border-oak-blue',
  green: 'border-oak-green',
  purple: 'border-oak-purple',
  orange: 'border-[#f5a623]',
}

export default function Compare() {
  const { compare } = strings

  const [leads, setLeads] = useState(500)
  const [responseTime, setResponseTime] = useState(8)
  const [manualPct, setManualPct] = useState(60)
  const [activeTeam, setActiveTeam] = useState(1)

  const teamMultiplier = [0.7, 1, 1.4, 2][activeTeam]

  const calc = useMemo(() => {
    const hoursSaved = Math.round(leads * (manualPct / 100) * 2.5 * teamMultiplier)
    const recoverableLeads = Math.round(leads * (manualPct / 100) * 0.28)
    const speedImprovement = Math.round((responseTime / 0.47) * 10) / 10
    const automationCoverage = Math.min(95, Math.round(52 + manualPct * 0.42))

    const insightKey =
      manualPct >= 70
        ? 'high'
        : responseTime < 2
        ? 'fast'
        : manualPct < 30
        ? 'low'
        : 'medium'

    return { hoursSaved, recoverableLeads, speedImprovement, automationCoverage, insightKey }
  }, [leads, responseTime, manualPct, teamMultiplier])

  const outputValues: Record<string, string> = {
    hoursSaved: calc.hoursSaved.toLocaleString('lt-LT'),
    recoverableLeads: calc.recoverableLeads.toLocaleString('lt-LT'),
    speedImprovement: calc.speedImprovement + 'x',
    automationCoverage: calc.automationCoverage + '%',
  }

  const outputProgress: Record<string, number> = {
    hoursSaved: Math.min(100, (calc.hoursSaved / 600) * 100),
    recoverableLeads: Math.min(100, (calc.recoverableLeads / 200) * 100),
    speedImprovement: Math.min(100, (calc.speedImprovement / 30) * 100),
    automationCoverage: calc.automationCoverage,
  }

  return (
    <section id="tyrimai" className="py-24 bg-void">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <RevealWrapper className="text-center mb-16">
          <Tag className="mb-4">{compare.tag}</Tag>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold text-oak-text mb-4"
            style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
          >
            {compare.title}
          </h2>
          <p className="text-oak-muted text-lg max-w-2xl mx-auto">{compare.subtitle}</p>
        </RevealWrapper>

        {/* Comparison table */}
        <RevealWrapper delay={100} className="mb-16">
          <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-3 md:grid-cols-3 bg-[rgba(255,255,255,0.02)]">
              <div className="hidden md:flex px-6 py-5 items-center text-sm text-oak-muted font-medium">
                {compare.conversionLabel}
              </div>
              <div className="px-6 py-5 flex flex-col gap-1 md:text-center">
                <span className="text-2xl font-bold text-[#ff5050]" style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}>
                  {compare.traditional.value}
                </span>
                <span className="text-xs text-oak-muted">{compare.traditional.label}</span>
              </div>
              <div className="relative px-6 py-5 flex flex-col gap-1 md:text-center bg-[rgba(79,155,255,0.06)] border-l border-[rgba(79,155,255,0.2)]">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-oak-blue to-transparent" />
                <span className="text-2xl font-bold text-oak-green" style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}>
                  {compare.oaklines.value}
                </span>
                <span className="text-xs text-oak-muted">{compare.oaklines.label}</span>
              </div>
            </div>

            {/* Data rows */}
            {compare.rows.map((row, i) => (
              <div
                key={i}
                className="compare-row grid grid-cols-2 md:grid-cols-3 border-t border-[rgba(255,255,255,0.06)]"
              >
                <div className="c-cell hidden md:flex px-6 py-4 items-center text-sm text-oak-muted transition-colors">
                  {row.label}
                </div>
                <div className="c-cell px-6 py-4 flex items-center gap-2 text-sm text-oak-muted transition-colors">
                  {typeof row.traditional === 'boolean' ? (
                    row.traditional ? <CheckIcon /> : <XIcon />
                  ) : (
                    <>
                      <XIcon />
                      <span>{row.traditional}</span>
                    </>
                  )}
                  {/* Show label on mobile */}
                  <span className="md:hidden text-xs text-oak-muted ml-auto">{row.label}</span>
                </div>
                <div className="c-cell px-6 py-4 flex items-center gap-2 text-sm text-oak-text bg-[rgba(79,155,255,0.03)] border-l border-[rgba(79,155,255,0.1)] transition-colors">
                  {typeof row.oaklines === 'boolean' ? (
                    row.oaklines ? <CheckIcon /> : <XIcon />
                  ) : (
                    <>
                      <CheckIcon />
                      <span>{row.oaklines}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* ROI Calculator */}
        <RevealWrapper delay={150}>
          <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] overflow-hidden">
            {/* Calc header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c940]" />
                </div>
                <span className="text-sm font-medium text-oak-text">{compare.calc.title}</span>
              </div>
              <div className="flex items-center gap-2 bg-[rgba(34,217,126,0.1)] rounded-full px-3 py-1">
                <div className="w-1.5 h-1.5 rounded-full bg-oak-green animate-pulse-dot" />
                <span className="text-xs font-semibold text-oak-green">{compare.calc.tag}</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: inputs */}
              <div className="p-6 lg:border-r border-[rgba(255,255,255,0.06)] space-y-6">
                {compare.calc.sliders.map((slider) => {
                  const val = slider.key === 'leads' ? leads : slider.key === 'responseTime' ? responseTime : manualPct
                  const setter = slider.key === 'leads' ? setLeads : slider.key === 'responseTime' ? setResponseTime : setManualPct
                  return (
                    <div key={slider.key}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-oak-text">{slider.label}</span>
                        <span className="text-sm font-bold text-oak-blue">
                          {val.toLocaleString('lt-LT')}{slider.unit}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={slider.min}
                        max={slider.max}
                        step={slider.step}
                        value={val}
                        onChange={(e) => setter(Number(e.target.value))}
                      />
                    </div>
                  )
                })}

                {/* Team size */}
                <div>
                  <div className="text-sm font-medium text-oak-text mb-2.5">Komandos dydis</div>
                  <div className="flex gap-2">
                    {compare.calc.teamChips.map((chip, i) => (
                      <button
                        key={chip}
                        onClick={() => setActiveTeam(i)}
                        className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                          activeTeam === i
                            ? 'bg-oak-blue text-void'
                            : 'bg-[rgba(255,255,255,0.05)] text-oak-muted hover:text-oak-text hover:bg-[rgba(255,255,255,0.08)]'
                        }`}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: outputs */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {compare.calc.outputs.map((output) => (
                    <div
                      key={output.key}
                      className={`p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border-l-2 ${outputBorders[output.color]} border border-[rgba(255,255,255,0.06)]`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span style={{ color: outputColors[output.color] }}>
                          <CalcIcon type={output.icon} />
                        </span>
                        <span className="text-xs text-oak-muted leading-tight">{output.label}</span>
                      </div>
                      <div
                        className="text-xl font-bold mb-2"
                        style={{ color: outputColors[output.color], fontFamily: 'var(--sora), Sora, sans-serif' }}
                      >
                        {outputValues[output.key]}
                      </div>
                      <div className="prog-bar">
                        <div
                          className="prog-fill"
                          style={{
                            width: `${outputProgress[output.key]}%`,
                            background: outputColors[output.color],
                            transition: 'width 0.8s cubic-bezier(0.16,1,0.3,1)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dynamic insight */}
                <div className="p-4 rounded-xl bg-[rgba(79,155,255,0.05)] border border-[rgba(79,155,255,0.12)]">
                  <div className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0 text-oak-blue" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M8 7v5M8 5v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <p className="text-xs text-oak-muted leading-relaxed">
                      {compare.calc.insights[calc.insightKey as keyof typeof compare.calc.insights]}
                    </p>
                  </div>
                </div>

                <p className="text-[10px] text-oak-muted leading-relaxed opacity-60">
                  {compare.calc.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
