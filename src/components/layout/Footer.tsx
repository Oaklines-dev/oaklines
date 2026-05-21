import { strings } from '@/lib/strings'

export default function Footer() {
  const { footer } = strings

  return (
    <footer className="bg-void border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-oak-blue flex items-center justify-center shadow-[0_0_14px_rgba(79,155,255,0.35)]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M9 2C6.5 2 4.5 4 4.5 6.5C4.5 9 6.5 11 9 11C9 13.5 7 15.5 4.5 15.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M9 11C11.5 11 13.5 9 13.5 6.5C13.5 4 11.5 2 9 2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="9" cy="11" r="1.5" fill="white" />
                </svg>
              </div>
              <span
                className="text-xl font-bold text-oak-text tracking-tight"
                style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
              >
                Oaklines
              </span>
            </div>
            <p className="text-oak-muted text-sm leading-relaxed max-w-[220px]">
              {footer.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-oak-text font-semibold text-sm mb-4"
              style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
            >
              {footer.services.title}
            </h4>
            <ul className="space-y-2.5">
              {footer.services.links.map((link) => (
                <li key={link}>
                  <a
                    href="#paslaugos"
                    className="text-oak-muted text-sm hover:text-oak-text transition-colors duration-150"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-oak-text font-semibold text-sm mb-4"
              style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
            >
              {footer.company.title}
            </h4>
            <ul className="space-y-2.5">
              {footer.company.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-oak-muted text-sm hover:text-oak-text transition-colors duration-150"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-oak-text font-semibold text-sm mb-4"
              style={{ fontFamily: 'var(--sora), Sora, sans-serif' }}
            >
              {footer.contact.title}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="text-oak-muted text-sm hover:text-oak-text transition-colors duration-150"
                >
                  {footer.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footer.contact.phone.replace(/\s/g, '')}`}
                  className="text-oak-muted text-sm hover:text-oak-text transition-colors duration-150"
                >
                  {footer.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href="#kontaktai"
                  className="text-oak-blue text-sm hover:text-oak-blue-bright transition-colors duration-150 font-medium"
                >
                  {footer.contact.bookCall}
                </a>
              </li>
              <li>
                <span className="text-oak-muted text-sm">{footer.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-oak-muted text-xs">{footer.copyright}</p>
          <p className="text-oak-muted text-xs">{footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
