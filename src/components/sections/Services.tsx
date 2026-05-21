import Tag from '@/components/ui/Tag'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { strings } from '@/lib/strings'

const serviceIcons: Record<string, React.ReactNode> = {
  'lead-gen': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'auto-sales': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'ai-assistant': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'data-analytics': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  outreach: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  crm: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 8h3M7 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
}

export default function Services() {
  const { services } = strings

  return (
    <section id="paslaugos" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <RevealWrapper className="text-center mb-16">
          <Tag className="mb-4">{services.tag}</Tag>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold text-oak-text mb-4"
            style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
          >
            {services.title}
          </h2>
          <p className="text-oak-muted text-lg max-w-2xl mx-auto">{services.subtitle}</p>
        </RevealWrapper>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.items.map((service, i) => (
            <RevealWrapper
              key={service.id}
              delay={i * 80}
              className="service-card bg-card border border-[rgba(255,255,255,0.07)] rounded-2xl p-6 hover:border-[rgba(79,155,255,0.2)] group"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[rgba(79,155,255,0.1)] flex items-center justify-center text-oak-blue mb-5 group-hover:bg-[rgba(79,155,255,0.15)] transition-colors">
                {serviceIcons[service.id]}
              </div>

              <h3
                className="text-lg font-semibold text-oak-text mb-2"
                style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
              >
                {service.name}
              </h3>
              <p className="text-oak-muted text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-oak-muted">
                    <span className="text-oak-blue font-bold mt-px flex-shrink-0">→</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
