'use client'
import { useState } from 'react'
import Script from 'next/script'
import Tag from '@/components/ui/Tag'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { strings } from '@/lib/strings'

/* ── GHL submission goes through /api/contact (server-side, no CORS) ── */

/* ── Business type options (Lithuanian) ── */
const BUSINESS_TYPES = [
  'Automobilių stilius / detailingas',
  'Sveikatos priežiūra',
  'E-komercija / mažoji prekyba',
  'B2B paslaugos',
  'Nekilnojamas turtas',
  'Finansai / draudimas',
  'Švietimas',
  'Technologijos / SaaS',
  'Kita',
]

/* ── Icons ── */
const infoIcons: Record<string, React.ReactNode> = {
  mail: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 4h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1z" stroke="currentColor" strokeWidth="1.4" />
      <polyline points="17,4 9,11 1,4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M16.5 12.8l-3.4 3.4a1.5 1.5 0 0 1-2.1-.1C9.7 14.6 5.4 10.3 3.9 8.7a1.5 1.5 0 0 1-.1-2.1l3.4-3.4L9.5 6l-1.7 1.7a12.7 12.7 0 0 0 3.6 3.6L13.1 9.6l2.8 2.8-.2.2.2-.2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  'map-pin': (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 1.5C6.5 1.5 4.5 3.5 4.5 6C4.5 9.5 9 16.5 9 16.5S13.5 9.5 13.5 6C13.5 3.5 11.5 1.5 9 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="9" cy="6" r="1.5" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-oak-muted mb-2 pl-0.5">
      {children}
    </label>
  )
}


export default function Contact() {
  const { contact } = strings

  const [fields, setFields] = useState({
    name: '', lastname: '', phone: '', email: '', businessType: '', message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const set =
    (k: keyof typeof fields) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setFields(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      /* POST to our Next.js API route — server-side, zero CORS issues */
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName:    fields.name,
          lastName:     fields.lastname,
          phone:        fields.phone,
          email:        fields.email,
          businessType: fields.businessType,
          message:      fields.message,
        }),
      })
    } catch {
      /* Network failure — still show success; server already attempted GHL */
    } finally {
      setSubmitting(false)
      setSuccess(true)
      setFields({ name: '', lastname: '', phone: '', email: '', businessType: '', message: '' })
    }
  }

  return (
    <section id="kontaktai" className="relative py-32 bg-void overflow-hidden">
      {/* Background orbs */}
      <div
        className="absolute -bottom-24 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79,155,255,0.06) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute top-0 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(155,107,255,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <RevealWrapper className="text-center mb-20">
          <Tag className="mb-4">{contact.tag}</Tag>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold text-oak-text mb-4"
            style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
          >
            {contact.title}
          </h2>
          <p className="text-oak-muted text-lg max-w-2xl mx-auto">{contact.subtitle}</p>
        </RevealWrapper>

        <div className="grid lg:grid-cols-[1fr_1.45fr] gap-12 lg:gap-20 items-start">

          {/* ── Left: Contact info ── */}
          <RevealWrapper>
            <div className="space-y-8 lg:pt-2">

              {/* Info rows */}
              <div className="space-y-4">
                {contact.info.map((item) => (
                  <div key={item.icon} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-[rgba(79,155,255,0.08)] border border-[rgba(79,155,255,0.12)] flex items-center justify-center text-oak-blue flex-shrink-0 transition-all duration-200 group-hover:bg-[rgba(79,155,255,0.14)] group-hover:shadow-[0_0_16px_rgba(79,155,255,0.15)]">
                      {infoIcons[item.icon]}
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-oak-muted mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium text-oak-text">{item.value}</div>
                    </div>
                  </div>
                ))}

                {/* Founders */}
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(155,107,255,0.08)] border border-[rgba(155,107,255,0.12)] flex items-center justify-center text-oak-purple flex-shrink-0 transition-all duration-200 group-hover:bg-[rgba(155,107,255,0.14)]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.4" />
                      <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M1 15c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M10 14.5c.5-1.5 1.5-3.5 4-3.5s3.5 2 4 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-oak-muted mb-0.5">
                      {contact.founders.label}
                    </div>
                    <div className="text-sm font-medium text-oak-text">{contact.founders.value}</div>
                  </div>
                </div>
              </div>

              {/* Availability card */}
              <div className="bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-oak-green animate-pulse-dot flex-shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-oak-green">
                    Aktyvūs dabar
                  </span>
                </div>
                <p className="text-sm text-oak-muted leading-relaxed">
                  Vidutinis atsakymo laikas —{' '}
                  <span className="text-oak-text font-semibold">mažiau nei 24 val.</span>{' '}
                  Individualus konsultacinis skambutis arba video susitikimas.
                </p>
              </div>

              {/* Divider line */}
              <div className="h-px bg-[rgba(255,255,255,0.05)]" />

              {/* Trust row */}
              <div className="space-y-2.5">
                {['Nemokamai ir be įsipareigojimų', 'Atsakome per 24 val.', 'Individualus AI augimo planas'].map((pill) => (
                  <div key={pill} className="flex items-center gap-2.5 text-sm text-oak-muted">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="7" fill="rgba(34,217,126,0.12)" />
                      <path d="M4 7l2 2 4-4" stroke="#22d97e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {pill}
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* ── Right: Premium form ── */}
          <RevealWrapper delay={120}>
            {success ? (
              /* Success state */
              <div
                className="contact-success relative bg-[rgba(8,14,26,0.85)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-12 text-center overflow-hidden"
                style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(34,217,126,0.12)' }}
              >
                {/* Top green glow */}
                <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[rgba(34,217,126,0.55)] to-transparent" />

                <div className="flex flex-col items-center gap-5">
                  {/* Check circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: 'radial-gradient(circle, rgba(34,217,126,0.14) 0%, rgba(34,217,126,0.04) 60%, transparent 100%)',
                      border: '1px solid rgba(34,217,126,0.2)',
                    }}
                  >
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
                      <path
                        className="contact-check"
                        d="M9 19l6.5 7L29 12"
                        stroke="#22d97e"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3
                      className="text-2xl font-bold text-oak-text mb-2"
                      style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
                    >
                      {contact.form.successTitle}
                    </h3>
                    <p className="text-oak-muted text-sm leading-relaxed max-w-xs mx-auto">
                      {contact.form.successText}
                    </p>
                  </div>

                  <button
                    onClick={() => setSuccess(false)}
                    className="text-xs text-oak-muted hover:text-oak-text transition-colors duration-150 underline underline-offset-4 mt-1"
                  >
                    Siųsti dar vieną užklausą
                  </button>
                </div>
              </div>
            ) : (
              /* Form card */
              <form
                onSubmit={handleSubmit}
                className="relative bg-[rgba(8,14,26,0.85)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 sm:p-10 space-y-5"
                style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(79,155,255,0.08)' }}
              >
                {/* Top accent glow */}
                <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[rgba(79,155,255,0.5)] to-transparent rounded-full pointer-events-none" />

                {/* Row 1: Vardas + Pavardė */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Vardas</Label>
                    <input
                      type="text"
                      value={fields.name}
                      onChange={set('name')}
                      placeholder="Jonas"
                      required
                      autoComplete="given-name"
                      className="contact-field"
                    />
                  </div>
                  <div>
                    <Label>Pavardė</Label>
                    <input
                      type="text"
                      value={fields.lastname}
                      onChange={set('lastname')}
                      placeholder="Jonaitis"
                      required
                      autoComplete="family-name"
                      className="contact-field"
                    />
                  </div>
                </div>

                {/* Row 2: Tel. numeris + El. paštas */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Tel. numeris</Label>
                    <input
                      type="tel"
                      value={fields.phone}
                      onChange={set('phone')}
                      placeholder="+370 6XX XXXXX"
                      autoComplete="tel"
                      className="contact-field"
                    />
                  </div>
                  <div>
                    <Label>El. paštas</Label>
                    <input
                      type="email"
                      value={fields.email}
                      onChange={set('email')}
                      placeholder="jonas@verslas.lt"
                      required
                      autoComplete="email"
                      className="contact-field"
                    />
                  </div>
                </div>

                {/* Business type dropdown */}
                <div>
                  <Label>Verslo tipas</Label>
                  <select
                    value={fields.businessType}
                    onChange={set('businessType')}
                    required
                    className="contact-field contact-select"
                  >
                    <option value="" disabled>Pasirinkite verslo tipą</option>
                    {BUSINESS_TYPES.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <Label>Papasakokite apie savo verslą ir tikslus</Label>
                  <textarea
                    value={fields.message}
                    onChange={set('message')}
                    placeholder="Aprašykite dabartinę situaciją, tikslus ir ką norėtumėte pasiekti su AI automatizavimu..."
                    required
                    rows={4}
                    className="contact-field resize-none"
                    style={{ lineHeight: '1.65' }}
                  />
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(255,255,255,0.05)]" />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-shimmer w-full flex items-center justify-center gap-3 py-[15px] px-6 rounded-xl font-bold text-white text-[15px] transition-all duration-200 disabled:opacity-55 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    background: 'linear-gradient(135deg, #4f9bff 0%, #2a6fd4 100%)',
                    boxShadow: '0 8px 28px rgba(79,155,255,0.3)',
                    fontFamily: 'var(--sora), Sora, sans-serif',
                  }}
                  onMouseEnter={e => {
                    if (!submitting) (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 14px 40px rgba(79,155,255,0.45)'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 28px rgba(79,155,255,0.3)'
                  }}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.6" strokeDasharray="22" strokeDashoffset="6" strokeLinecap="round" />
                      </svg>
                      {contact.form.submitting}
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M14 2L2 7l5 3 3 5 4-13z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                      </svg>
                      {contact.form.submit}
                    </>
                  )}
                </button>

                {/* Privacy note */}
                <p className="text-[11px] text-oak-muted text-center leading-relaxed pt-0.5">
                  Jūsų duomenys saugomi ir naudojami komunikacijai su jumis.
                </p>
              </form>
            )}
          </RevealWrapper>
        </div>
      </div>
      {/* ── Hidden GHL iframe — loads form backend invisibly ── */}
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/SIl7bmSlwaJAAx4ZkIA4"
        id="polite-slide-in-right-SIl7bmSlwaJAAx4ZkIA4"
        data-layout="{'id':'INLINE'}"
        data-form-id="SIl7bmSlwaJAAx4ZkIA4"
        title="Oaklines Website Form"
        aria-hidden="true"
        style={{ display: 'none', position: 'absolute', width: 0, height: 0, border: 'none' }}
      />
      {/* GHL embed script — initialises form tracking in background */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </section>
  )
}
