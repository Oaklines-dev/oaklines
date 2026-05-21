'use client'
import { useEffect, useRef } from 'react'

export function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add('visible'), delay)
          } else {
            el.classList.add('visible')
          }
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
