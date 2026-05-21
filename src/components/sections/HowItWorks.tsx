'use client'
import { useState, useEffect, useRef } from 'react'
import Tag from '@/components/ui/Tag'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { strings } from '@/lib/strings'

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const chatRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null)

  const { howItWorks } = strings

  // Auto-cycle steps
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % howItWorks.steps.length)
    }, 3500)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [howItWorks.steps.length])

  const handleStepClick = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setActiveStep(i)
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % howItWorks.steps.length)
    }, 3500)
  }

  // Chat animation on section enter
  useEffect(() => {
    const el = chatRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          howItWorks.chat.messages.forEach((msg, i) => {
            setTimeout(() => {
              setVisibleMessages((prev) => [...prev, i])
            }, msg.delay)
          })
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [howItWorks.chat.messages])

  return (
    <section id="how" className="py-24 bg-void">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <RevealWrapper className="text-center mb-16">
          <Tag className="mb-4">{howItWorks.tag}</Tag>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold text-oak-text mb-4"
            style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
          >
            {howItWorks.title}
          </h2>
          <p className="text-oak-muted text-lg max-w-2xl mx-auto">{howItWorks.subtitle}</p>
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-[22px] top-10 bottom-10 w-px bg-[rgba(255,255,255,0.07)]" />

            <div className="space-y-2">
              {howItWorks.steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => handleStepClick(i)}
                  className={`w-full text-left flex gap-5 p-5 rounded-xl transition-all duration-300 group ${
                    activeStep === i
                      ? 'bg-[rgba(79,155,255,0.07)] border border-[rgba(79,155,255,0.2)]'
                      : 'border border-transparent hover:bg-[rgba(255,255,255,0.03)]'
                  }`}
                >
                  {/* Number */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300 ${
                      activeStep === i
                        ? 'bg-oak-blue text-void shadow-[0_0_16px_rgba(79,155,255,0.4)]'
                        : 'bg-[rgba(255,255,255,0.06)] text-oak-muted group-hover:text-oak-text'
                    }`}
                    style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
                  >
                    {step.num}
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3
                      className={`font-semibold transition-colors duration-200 ${
                        activeStep === i ? 'text-oak-text' : 'text-oak-muted group-hover:text-oak-text'
                      }`}
                      style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-all duration-300 overflow-hidden ${
                        activeStep === i ? 'text-oak-muted max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat demo */}
          <div ref={chatRef}>
            <div className="bg-card border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.5)]">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                <div className="w-9 h-9 rounded-full bg-oak-blue flex items-center justify-center shadow-[0_0_12px_rgba(79,155,255,0.4)]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M9 2C6.5 2 4.5 4 4.5 6.5C4.5 9 6.5 11 9 11" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                    <path d="M9 11C11.5 11 13.5 9 13.5 6.5C13.5 4 11.5 2 9 2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-oak-text">{howItWorks.chat.header}</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-oak-green animate-pulse-dot" />
                    <span className="text-xs text-oak-green">{howItWorks.chat.status}</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 min-h-[320px]">
                {howItWorks.chat.messages.map((msg, i) => {
                  const shown = visibleMessages.includes(i)
                  const isUser = msg.type === 'user'
                  return (
                    <div
                      key={i}
                      className={`chat-msg flex ${isUser ? 'justify-end' : 'justify-start'} ${shown ? 'shown' : ''}`}
                    >
                      {!isUser && (
                        <div className="w-7 h-7 rounded-full bg-oak-blue flex items-center justify-center mr-2.5 mt-0.5 flex-shrink-0">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M6 1C4 1 3 2.7 3 4.3C3 6 4 7 6 7" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                            <path d="M6 7C8 7 9 6 9 4.3C9 2.7 8 1 6 1" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round"/>
                          </svg>
                        </div>
                      )}
                      <div
                        className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                          isUser
                            ? 'bg-oak-blue text-void rounded-br-sm font-medium'
                            : 'bg-[rgba(255,255,255,0.05)] text-oak-text rounded-bl-sm border border-[rgba(255,255,255,0.07)]'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
