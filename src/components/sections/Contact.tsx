'use client'
import { useState } from 'react'
import Tag from '@/components/ui/Tag'
import Button from '@/components/ui/Button'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { strings } from '@/lib/strings'

const infoIcons: Record<string, React.ReactNode> = {
  mail: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 4h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1z" stroke="currentColor" strokeWidth="1.4"/>
      <polyline points="17,4 9,11 1,4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M16.5 12.8l-3.4 3.4a1.5 1.5 0 0 1-2.1-.1C9.7 14.6 5.4 10.3 3.9 8.7a1.5 1.5 0 0 1-.1-2.1l3.4-3.4L9.5 6l-1.7 1.7a12.7 12.7 0 0 0 3.6 3.6L13.1 9.6l2.8 2.8-.2.2.2-.2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  ),
  'map-pin': (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 1.5C6.5 1.5 4.5 3.5 4.5 6C4.5 9.5 9 16.5 9 16.5S13.5 9.5 13.5 6C13.5 3.5 11.5 1.5 9 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      <circle cx="9" cy="6" r="1.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  ),
}

export default function Contact() {
  const { contact } = strings
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSuccess(true)
  }

  return (
    <section id="kontaktai" className="py-24 bg-void">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="text-center mb-16">
          <Tag className="mb-4">{contact.tag}</Tag>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold text-oak-text mb-4"
            style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
          >
            {contact.title}
          </h2>
          <p className="text-oak-muted text-lg max-w-2xl mx-auto">{contact.subtitle}</p>
        </RevealWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <RevealWrapper>
            <div className="space-y-6">
              {contact.info.map((item) => (
                <div key={item.icon} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(79,155,255,0.1)] flex items-center justify-center text-oak-blue flex-shrink-0">
                    {infoIcons[item.icon]}
                  </div>
                  <div>
                    <div className="text-xs text-oak-muted mb-0.5">{item.label}</div>
                    <div className="text-sm font-medium text-oak-text">{item.value}</div>
                  </div>
                </div>
              ))}

              {/* Founders */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(155,107,255,0.1)] flex items-center justify-center text-oak-purple flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/>
                    <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M1 15c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    <path d="M10 14.5c.5-1.5 1.5-3.5 4-3.5s3.5 2 4 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-oak-muted mb-0.5">{contact.founders.label}</div>
                  <div className="text-sm font-medium text-oak-text">{contact.founders.value}</div>
                </div>
              </div>

            </div>
          </RevealWrapper>

          {/* Right: Form */}
          <RevealWrapper delay={100}>
            {success ? (
              <div className="flex flex-col items-center justify-center text-center gap-5 py-16 bg-card border border-[rgba(255,255,255,0.07)] rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-[rgba(34,217,126,0.12)] flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M7 16l5 5L25 10" stroke="#22d97e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-oak-text mb-2"
                    style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
                  >
                    {contact.form.successTitle}
                  </h3>
                  <p className="text-oak-muted text-sm max-w-xs">{contact.form.successText}</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-[rgba(255,255,255,0.07)] rounded-2xl p-6 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={contact.form.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="field"
                  />
                  <input
                    type="text"
                    placeholder={contact.form.lastnamePlaceholder}
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                    className="field"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder={contact.form.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="field"
                  />
                  <input
                    type="tel"
                    placeholder={contact.form.phonePlaceholder}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="field"
                  />
                </div>

                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  required
                  className="field"
                >
                  {contact.form.businessType.options.map((opt, i) => (
                    <option key={i} value={i === 0 ? '' : opt} disabled={i === 0}>
                      {opt}
                    </option>
                  ))}
                </select>

                <textarea
                  placeholder={contact.form.messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="field"
                />

                <Button
                  type="submit"
                  disabled={submitting}
                  fullWidth
                  size="lg"
                >
                  {submitting ? (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="animate-spin"
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="20" strokeDashoffset="5" strokeLinecap="round"/>
                      </svg>
                      {contact.form.submitting}
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M14 2L2 7l5 3 3 5 4-13z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                      </svg>
                      {contact.form.submit}
                    </>
                  )}
                </Button>
              </form>
            )}
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
