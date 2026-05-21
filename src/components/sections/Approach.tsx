import Tag from '@/components/ui/Tag'
import RevealWrapper from '@/components/ui/RevealWrapper'
import { strings } from '@/lib/strings'

const cardIcons: Record<string, React.ReactNode> = {
  clock: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11 6v5.5l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  'check-circle': (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 11l2.5 2.5L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  layers: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <polygon points="11 2 20 7 11 12 2 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M2 12l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17l9 5 9-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

export default function Approach() {
  const { approach } = strings

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <RevealWrapper className="text-center mb-16">
          <Tag className="mb-4">{approach.tag}</Tag>
          <h2
            className="text-3xl sm:text-4xl xl:text-5xl font-bold text-oak-text mb-4"
            style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
          >
            {approach.title}
          </h2>
          <p className="text-oak-muted text-lg max-w-2xl mx-auto">{approach.subtitle}</p>
        </RevealWrapper>

        <div className="grid md:grid-cols-3 gap-5">
          {approach.cards.map((card, i) => (
            <RevealWrapper
              key={i}
              delay={i * 100}
              className="bg-card border border-[rgba(255,255,255,0.07)] rounded-2xl p-6 hover:border-[rgba(79,155,255,0.15)] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[rgba(79,155,255,0.1)] flex items-center justify-center text-oak-blue mb-5">
                {cardIcons[card.icon]}
              </div>

              <h3
                className="text-base font-semibold text-oak-text mb-3"
                style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
              >
                {card.title}
              </h3>

              {i === 0 && card.quote && (
                <>
                  <p className="text-sm text-oak-muted italic leading-relaxed mb-5">
                    {card.quote}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-oak-blue flex items-center justify-center text-xs font-bold text-void border-2 border-card">P</div>
                      <div className="w-8 h-8 rounded-full bg-oak-purple flex items-center justify-center text-xs font-bold text-void border-2 border-card">K</div>
                    </div>
                    <span className="text-xs text-oak-muted">{card.authors}</span>
                  </div>
                </>
              )}

              {i !== 0 && card.body && (
                <p className="text-sm text-oak-muted leading-relaxed">{card.body}</p>
              )}
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
