interface TagProps {
  children: React.ReactNode
  className?: string
  color?: 'blue' | 'green' | 'purple'
}

export default function Tag({ children, className = '', color = 'blue' }: TagProps) {
  const colors = {
    blue: 'bg-[rgba(79,155,255,0.1)] text-oak-blue border border-[rgba(79,155,255,0.2)]',
    green: 'bg-[rgba(34,217,126,0.1)] text-oak-green border border-[rgba(34,217,126,0.2)]',
    purple: 'bg-[rgba(155,107,255,0.1)] text-oak-purple border border-[rgba(155,107,255,0.2)]',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${colors[color]} ${className}`}
    >
      {children}
    </span>
  )
}
