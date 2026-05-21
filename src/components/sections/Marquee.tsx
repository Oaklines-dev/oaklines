'use client'
import { useRef, useState } from 'react'
import { strings } from '@/lib/strings'

export default function Marquee() {
  const [paused, setPaused] = useState(false)
  const items = [...strings.marquee.items, ...strings.marquee.items]

  return (
    <section
      className="relative py-5 bg-[rgba(255,255,255,0.02)] border-y border-[rgba(255,255,255,0.06)] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Galimybių juosta"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, var(--bg-void) 0%, transparent 100%)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, var(--bg-void) 0%, transparent 100%)' }} />

      <div
        className="flex whitespace-nowrap"
        style={{
          animation: 'marquee 28s linear infinite',
          animationPlayState: paused ? 'paused' : 'running',
          width: 'max-content',
        }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-6">
            <span className="text-sm font-medium text-oak-muted hover:text-oak-text transition-colors select-none">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-oak-blue opacity-50 flex-shrink-0" />
          </span>
        ))}
      </div>
    </section>
  )
}
