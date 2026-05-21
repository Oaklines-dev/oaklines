'use client'
import { useEffect, useRef } from 'react'

interface RevealWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export default function RevealWrapper({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: RevealWrapperProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const show = () => el.classList.add('visible')
          if (delay) setTimeout(show, delay)
          else show()
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
