export interface Service {
  id: string
  icon: string
  name: string
  description: string
  bullets: string[]
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Industry {
  name: string
  icon: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface CompareRow {
  label: string
  traditional: string | boolean
  oaklines: string | boolean
}

export interface ChatMessage {
  type: 'ai' | 'user' | 'typing'
  text?: string
  delay: number
}

export interface Stat {
  value: number
  suffix: string
  label: string
  color: string
}

export interface InsightCard {
  icon: string
  category: string
  stat: string
  headline: string
  detail: string
  source: string
  colSpan?: boolean
}

export interface ChannelRow {
  name: string
  value: string
  pct: number
  color: string
}

export interface CalcOutputCard {
  icon: string
  label: string
  value: string
  unit: string
  color: string
  progress: number
}
