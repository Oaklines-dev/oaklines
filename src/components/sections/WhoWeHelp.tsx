import Tag from '@/components/ui/Tag'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { strings } from '@/lib/strings'

const iconMap: Record<string, React.ReactNode> = {
  'shopping-bag': (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path d="M21 7H5l2 14h12l2-14z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 7V6a4 4 0 0 1 8 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  home: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path d="M3 12L13 3l10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 10v11a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  heart: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path d="M22 9.3C22 6.4 19.8 4 17 4c-1.7 0-3.2.9-4 2.2C12.2 4.9 10.7 4 9 4 6.2 4 4 6.4 4 9.3c0 5.3 9 12.7 9 12.7s9-7.4 9-12.7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  'bar-chart-2': (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="13" y1="20" x2="13" y2="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="8" y1="20" x2="8" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  'book-open': (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path d="M2 6s3-2 9-2 9 2 9 2v16s-3-2-9-2-9 2-9 2V6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="11" y1="4" x2="11" y2="22" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  shield: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path d="M13 3L5 6.5V13c0 4.5 3.4 8.7 8 10 4.6-1.3 8-5.5 8-10V6.5L13 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 13l2.5 2.5L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  cpu: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <rect x="7" y="7" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 7V4M13 7V4M16 7V4M10 22v-3M13 22v-3M16 22v-3M7 10H4M7 13H4M7 16H4M22 10h-3M22 13h-3M22 16h-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <rect x="10" y="10" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.2"/>
    </svg>
  ),
  coffee: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path d="M17 8H19a3 3 0 0 1 0 6h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 8h13v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="6" y1="22" x2="18" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
}

export default function WhoWeHelp() {
  const { whoWeHelp } = strings

  return (
    <section className="py-24 bg-void">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="text-center mb-16">
          <Tag className="mb-4">{whoWeHelp.tag}</Tag>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold text-oak-text mb-4"
            style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
          >
            {whoWeHelp.title}
          </h2>
          <p className="text-oak-muted text-lg max-w-2xl mx-auto">{whoWeHelp.subtitle}</p>
        </RevealWrapper>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {whoWeHelp.industries.map((industry, i) => (
            <RevealWrapper
              key={industry.name}
              delay={i * 60}
              className="group flex flex-col items-center gap-3 p-6 bg-card border border-[rgba(255,255,255,0.07)] rounded-2xl hover:border-[rgba(79,155,255,0.25)] hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="text-oak-muted group-hover:text-oak-blue transition-colors duration-300">
                {iconMap[industry.icon]}
              </div>
              <span className="text-xs font-medium text-oak-muted group-hover:text-oak-text text-center leading-tight transition-colors duration-300">
                {industry.name}
              </span>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
