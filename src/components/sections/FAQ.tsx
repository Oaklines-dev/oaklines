'use client'
import { useState } from 'react'
import Tag from '@/components/ui/Tag'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { strings } from '@/lib/strings'

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
        isOpen
          ? 'border-[rgba(79,155,255,0.2)] bg-[rgba(79,155,255,0.04)]'
          : 'border-[rgba(255,255,255,0.07)] bg-card hover:border-[rgba(255,255,255,0.12)]'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="font-semibold text-sm text-oak-text leading-snug"
          style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
        >
          {question}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`acc-icon flex-shrink-0 text-oak-muted ${isOpen ? 'open' : ''}`}
          aria-hidden="true"
        >
          <path d="M4 8h8M8 4v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>
      <div className={`acc-body ${isOpen ? 'open' : ''}`}>
        <p className="px-5 pb-4 text-sm text-oak-muted leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { faq } = strings
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  const half = Math.ceil(faq.items.length / 2)
  const left = faq.items.slice(0, half)
  const right = faq.items.slice(half)

  return (
    <section id="duk" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="text-center mb-16">
          <Tag className="mb-4">{faq.tag}</Tag>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold text-oak-text mb-4"
            style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
          >
            {faq.title}
          </h2>
          <p className="text-oak-muted text-lg max-w-2xl mx-auto">{faq.subtitle}</p>
        </RevealWrapper>

        <RevealWrapper className="grid md:grid-cols-2 gap-3">
          {/* Left column */}
          <div className="space-y-3">
            {left.map((item, i) => (
              <AccordionItem
                key={i}
                {...item}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-3">
            {right.map((item, i) => {
              const realIndex = i + half
              return (
                <AccordionItem
                  key={realIndex}
                  {...item}
                  isOpen={openIndex === realIndex}
                  onToggle={() => toggle(realIndex)}
                />
              )
            })}
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
