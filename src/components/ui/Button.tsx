import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none'

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2',
  }

  const variants = {
    primary:
      'bg-oak-blue text-void hover:bg-oak-blue-bright active:scale-[0.97] shadow-[0_0_24px_rgba(79,155,255,0.3)] hover:shadow-[0_0_32px_rgba(79,155,255,0.45)]',
    ghost:
      'bg-transparent text-oak-text border border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.04)] active:scale-[0.97]',
    outline:
      'bg-transparent text-oak-blue border border-oak-blue hover:bg-[rgba(79,155,255,0.08)] active:scale-[0.97]',
  }

  const disabledCls = disabled ? 'opacity-50 pointer-events-none' : ''
  const widthCls = fullWidth ? 'w-full' : ''

  const cls = [base, sizes[size], variants[variant], disabledCls, widthCls, className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  )
}
