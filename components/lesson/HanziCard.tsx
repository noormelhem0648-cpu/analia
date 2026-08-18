'use client'

import { useState } from 'react'
import type { HskItem } from '@/lib/hskContent'

interface Props {
  item: HskItem
  locale: string
  onNext: () => void
}

function detectTone(pinyin: string): number {
  if (/[āēīōūǖ]/.test(pinyin)) return 1
  if (/[áéíóúǘ]/.test(pinyin)) return 2
  if (/[ǎěǐǒǔǚ]/.test(pinyin)) return 3
  if (/[àèìòùǜ]/.test(pinyin)) return 4
  return 0
}

const TONE_COLORS = ['#6B7280', '#DC2626', '#D97706', '#16A34A', '#2563EB']
const TONE_BG = ['#F3F4F6', '#FEF2F2', '#FFFBEB', '#F0FDF4', '#EFF6FF']
const TONE_NAMES_AR = [
  'ساكن',
  'النغمة الأولى (ـ)',
  'النغمة الثانية (／)',
  'النغمة الثالثة (∨)',
  'النغمة الرابعة (＼)',
]

const tx = {
  zh: { next: '下一个', flip: '翻转', listen: '听', tone: '声调', meaning: '意思', example: '例句' },
  en: { next: 'Next', flip: 'Flip', listen: '听', tone: 'Tone', meaning: 'Meaning', example: 'Example' },
  ar: { next: 'التالي', flip: 'اقلب', listen: 'استمع', tone: 'النغمة', meaning: 'المعنى', example: 'مثال' },
}

export default function HanziCard({ item, locale, onNext }: Props) {
  const [flipped, setFlipped] = useState(false)
  const [speaking, setSpeaking] = useState(false)
  const t = tx[locale as keyof typeof tx] || tx.ar
  const tone = detectTone(item.pinyin)
  const toneColor = TONE_COLORS[tone]
  const toneBg = TONE_BG[tone]

  function speakHanzi() {
    if (speaking) return
    setSpeaking(true)
    // Use browser SpeechSynthesis with Chinese voice
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(item.hanzi)
      utterance.lang = 'zh-CN'
      utterance.rate = 0.8
      utterance.onend = () => setSpeaking(false)
      utterance.onerror = () => setSpeaking(false)
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(utterance)
    } else {
      setSpeaking(false)
    }
  }

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto select-none">
      {/* Card with flip animation */}
      <div
        className="relative w-full cursor-pointer"
        style={{ perspective: '1000px', height: 340 }}
        onClick={() => setFlipped(f => !f)}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transition: 'transform 0.55s cubic-bezier(0.4,0,0.2,1)',
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* FRONT: Hanzi + Pinyin */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              background: `linear-gradient(135deg, ${toneColor}18 0%, ${toneColor}30 100%)`,
              border: `2px solid ${toneColor}40`,
              borderRadius: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              padding: '24px 16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }}
          >
            {/* Emoji top-right */}
            {item.emoji && (
              <span style={{ position: 'absolute', top: 16, right: 20, fontSize: 28 }}>
                {item.emoji}
              </span>
            )}

            {/* HSK level badge */}
            <span style={{
              position: 'absolute', top: 16, left: 16,
              background: toneColor, color: '#fff',
              fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 20,
            }}>
              HSK {item.hsk_level}
            </span>

            {/* Main Hanzi character */}
            <div style={{
              fontSize: 96,
              fontWeight: 700,
              color: toneColor,
              lineHeight: 1,
              letterSpacing: -2,
              textShadow: `0 4px 16px ${toneColor}40`,
              fontFamily: '"Noto Sans SC", "Microsoft YaHei", sans-serif',
            }}>
              {item.hanzi}
            </div>

            {/* Pinyin with tone color */}
            <div style={{
              fontSize: 24,
              fontWeight: 600,
              color: toneColor,
              letterSpacing: 2,
            }}>
              {item.pinyin}
            </div>

            {/* Tone name */}
            <div style={{
              background: toneBg,
              border: `1px solid ${toneColor}30`,
              borderRadius: 12,
              padding: '4px 14px',
              fontSize: 13,
              color: toneColor,
              fontWeight: 500,
            }}>
              {TONE_NAMES_AR[tone]}
            </div>

            {/* Stroke count if available */}
            {item.stroke_count && (
              <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: -8 }}>
                {item.stroke_count} {locale === 'ar' ? 'ضربة' : locale === 'zh' ? '画' : 'strokes'}
              </div>
            )}

            <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 4 }}>
              {locale === 'ar' ? 'اضغط للمعنى' : locale === 'zh' ? '点击查看意思' : 'Tap to see meaning'}
            </div>
          </div>

          {/* BACK: Meaning + Example */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: '#FFFFFF',
              border: '2px solid #E8E2DB',
              borderRadius: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 14,
              padding: '24px 20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
            }}
          >
            {/* Hanzi small on back */}
            <div style={{
              fontSize: 40,
              fontWeight: 700,
              color: toneColor,
              fontFamily: '"Noto Sans SC", "Microsoft YaHei", sans-serif',
            }}>
              {item.hanzi}
            </div>

            {/* Arabic meaning — big and bold */}
            <div style={{
              fontSize: 28,
              fontWeight: 800,
              color: '#FFFFFF',
              textAlign: 'center',
              direction: 'rtl',
              fontFamily: 'Noto Naskh Arabic, Amiri, serif',
            }}>
              {item.meaning_ar}
            </div>

            {/* English meaning */}
            <div style={{ fontSize: 15, color: '#6B7280', fontStyle: 'italic' }}>
              {item.meaning_en}
            </div>

            {/* Category badge */}
            <div style={{
              background: '#F5E8E9', borderRadius: 12,
              padding: '3px 12px', fontSize: 12, color: '#6B7280',
            }}>
              {item.category}
            </div>

            {/* Example sentences */}
            {(item.example_zh || item.example_ar) && (
              <div style={{
                background: '#F8F5F2',
                border: '1px solid #E0E7FF',
                borderRadius: 14,
                padding: '10px 14px',
                width: '100%',
                marginTop: 4,
              }}>
                {item.example_zh && (
                  <div style={{
                    fontSize: 14,
                    color: '#1A1A1A',
                    textAlign: 'center',
                    fontFamily: '"Noto Sans SC", "Microsoft YaHei", sans-serif',
                    marginBottom: 4,
                  }}>
                    {item.example_zh}
                  </div>
                )}
                {item.example_ar && (
                  <div style={{
                    fontSize: 14,
                    color: '#7A7370',
                    textAlign: 'right',
                    direction: 'rtl',
                    fontFamily: 'Noto Naskh Arabic, Amiri, serif',
                  }}>
                    {item.example_ar}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-5 w-full">
        {/* Listen / Speak button */}
        <button
          onClick={e => { e.stopPropagation(); speakHanzi() }}
          disabled={speaking}
          style={{
            flex: 1,
            padding: '12px 0',
            borderRadius: 14,
            border: `2px solid ${toneColor}50`,
            background: speaking ? toneBg : '#FFFFFF',
            color: toneColor,
            fontWeight: 700,
            fontSize: 16,
            cursor: speaking ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            transition: 'all 0.2s',
          }}
        >
          <span style={{ fontSize: 20 }}>{speaking ? '🔊' : '听'}</span>
          <span style={{ fontSize: 14 }}>{t.listen}</span>
        </button>

        {/* Flip card button */}
        <button
          onClick={() => setFlipped(f => !f)}
          style={{
            flex: 1,
            padding: '12px 0',
            borderRadius: 14,
            border: '2px solid #E8E2DB',
            background: '#F8F5F2',
            color: '#1A1A1A',
            fontWeight: 700,
            fontSize: 14,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          🔄 {t.flip}
        </button>

        {/* Next button */}
        <button
          onClick={onNext}
          style={{
            flex: 2,
            padding: '12px 0',
            borderRadius: 14,
            background: `linear-gradient(135deg, ${toneColor}, ${toneColor}CC)`,
            color: '#FFFFFF',
            fontWeight: 700,
            fontSize: 15,
            cursor: 'pointer',
            border: 'none',
            boxShadow: `0 4px 12px ${toneColor}40`,
            transition: 'all 0.2s',
          }}
        >
          {t.next} →
        </button>
      </div>
    </div>
  )
}
