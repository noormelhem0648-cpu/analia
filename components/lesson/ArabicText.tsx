'use client'

interface Props {
  text: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  className?: string
  tashkeel?: boolean
}

const sizeMap = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-3xl',
  xl: 'text-4xl',
  '2xl': 'text-5xl',
  '3xl': 'text-6xl',
}

export default function ArabicText({ text, size = 'md', className = '', tashkeel = true }: Props) {
  const display = tashkeel ? text : text.replace(/[ً-ٰٟ]/g, '')
  return (
    <span
      className={`${sizeMap[size]} ${className}`}
      dir="rtl"
      lang="ar"
      style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif', lineHeight: 1.8 }}
    >
      {display}
    </span>
  )
}
