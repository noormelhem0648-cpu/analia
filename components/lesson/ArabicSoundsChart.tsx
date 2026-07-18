'use client'

import { useState, useRef } from 'react'
import { ARABIC_ALPHABET, HARAKAT, type ArabicLetter, type MakhrajZone } from '@/lib/arabicAlphabet'
import { speakArabicLetter } from '@/lib/tts'
import ArticulationDiagram from './ArticulationDiagram'

interface Props {
  locale?: string
}

// Zone grouping for the chart layout
const ZONE_GROUPS: Array<{
  zone: MakhrajZone
  label_zh: string
  label_en: string
  label_ar: string
  color: string
  emoji: string
}> = [
  { zone: 'cavity',      label_zh: '空腔（长元音）', label_en: 'Open Cavity',    label_ar: 'الجوف',    color: '#818CF8', emoji: '🌊' },
  { zone: 'glottal',     label_zh: '声门',           label_en: 'Glottal',        label_ar: 'المزمار',  color: '#94A3B8', emoji: '🌬️' },
  { zone: 'pharyngeal',  label_zh: '咽喉',           label_en: 'Pharyngeal',     label_ar: 'الحلق',    color: '#F87171', emoji: '🔴' },
  { zone: 'uvular',      label_zh: '小舌',           label_en: 'Uvular',         label_ar: 'اللهاة',   color: '#FB923C', emoji: '🟠' },
  { zone: 'velar',       label_zh: '软腭',           label_en: 'Velar',          label_ar: 'الحنك اللين', color: '#FBBF24', emoji: '🟡' },
  { zone: 'palatal',     label_zh: '硬腭',           label_en: 'Palatal',        label_ar: 'الحنك الأوسط', color: '#34D399', emoji: '🟢' },
  { zone: 'emphatic',    label_zh: '强化音（卷舌）', label_en: 'Emphatic',       label_ar: 'المطبقة',  color: '#EF4444', emoji: '💪' },
  { zone: 'sibilant',    label_zh: '嘶擦音',         label_en: 'Sibilant',       label_ar: 'الصفير',   color: '#60A5FA', emoji: '🌊' },
  { zone: 'alveolar',    label_zh: '齿龈',           label_en: 'Alveolar',       label_ar: 'اللثة',    color: '#38BDF8', emoji: '💧' },
  { zone: 'interdental', label_zh: '齿间',           label_en: 'Interdental',    label_ar: 'بين الأسنان', color: '#A78BFA', emoji: '🦷' },
  { zone: 'teeth_lip',   label_zh: '唇齿',           label_en: 'Labiodental',    label_ar: 'الأسنان+شفة', color: '#C084FC', emoji: '👄' },
  { zone: 'lips',        label_zh: '双唇',           label_en: 'Bilabial',       label_ar: 'الشفتان',  color: '#F472B6', emoji: '💋' },
]

const DIFFICULTY_COLOR: Record<number, string> = {
  1: '#10B981',
  2: '#F59E0B',
  3: '#EF4444',
}

const tx = {
  zh: {
    title: '阿拉伯语发音图表',
    subtitle: '点击字母听发音 · 悬停查看详情',
    harakat_title: '元音符号（الحركات）',
    harakat_sub: '点击听发音 · 标注在字母上的短元音',
    click_listen: '点击播放',
    hover_info: '悬停查看',
    forms: '字形变化',
    similar: '近似音',
    tip: '学习提示',
    no_cn: '中文无此音',
    easy: '易', medium: '中', hard: '难',
    isolated: '独立', initial: '词首', medial: '词中', final: '词尾',
    with_ba: '配 ب',
    memory: '记忆口诀',
    example: '例词',
  },
  en: {
    title: 'Arabic Sounds Chart',
    subtitle: 'Click a letter to hear it · Hover for details',
    harakat_title: 'Vowel Marks (الحركات)',
    harakat_sub: 'Click to hear · Short vowel diacritics written on letters',
    click_listen: 'Click to play',
    hover_info: 'Hover to explore',
    forms: 'Letter forms',
    similar: 'Sounds like',
    tip: 'Learning tip',
    no_cn: 'No Chinese equiv.',
    easy: 'Easy', medium: 'Med', hard: 'Hard',
    isolated: 'Isolated', initial: 'Initial', medial: 'Medial', final: 'Final',
    with_ba: 'With ب',
    memory: 'Memory trick',
    example: 'Example',
  },
  ar: {
    title: 'مخطط أصوات العربية',
    subtitle: 'اضغط على الحرف لسماع نطقه · مرّر لعرض التفاصيل',
    harakat_title: 'الحركات',
    harakat_sub: 'اضغط للاستماع',
    click_listen: 'اضغط للاستماع',
    hover_info: 'مرّر للتفاصيل',
    forms: 'أشكال الحرف',
    similar: 'يشبه صوت',
    tip: 'ملاحظة',
    no_cn: 'لا مقابل صيني',
    easy: 'سهل', medium: 'متوسط', hard: 'صعب',
    isolated: 'مفرد', initial: 'أول', medial: 'وسط', final: 'آخر',
    with_ba: 'مع ب',
    memory: 'وسيلة تذكر',
    example: 'مثال',
  },
}

function LetterPopup({ letter, locale, color, onClose }: {
  letter: ArabicLetter
  locale: string
  color: string
  onClose: () => void
}) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const name = locale === 'zh' ? letter.name_zh : locale === 'ar' ? letter.name_ar : letter.name_en
  const similar = locale === 'zh' ? letter.similar_zh : letter.similar_en
  const tip = letter.tip_zh
  const exMeaning = locale === 'zh' ? letter.example_meaning_zh : letter.example_meaning_en

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden"
        onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="p-6 text-white" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-white/80 text-sm font-medium">{name}</p>
              <p className="text-white/70 text-xs mt-0.5">{letter.transliteration} — {locale === 'zh' ? letter.makhraj_zh : locale === 'ar' ? letter.makhraj_ar : letter.makhraj_en}</p>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-all">✕</button>
          </div>

          {/* Big letter + harakat buttons */}
          <div className="flex items-center justify-between">
            <span className="text-7xl text-white" dir="rtl"
              style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif', lineHeight: 1 }}>
              {letter.isolated}
            </span>
            <div className="flex flex-col gap-2">
              {[
                { form: letter.with_fatha, label: 'a (فَتْحة)' },
                { form: letter.with_damma, label: 'u (ضَمّة)' },
                { form: letter.with_kasra, label: 'i (كَسْرة)' },
                { form: letter.with_sukun,  label: '° (سُكُون)' },
              ].map(({ form, label }) => (
                <button key={label}
                  onClick={() => speakArabicLetter(form)}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/35 rounded-xl px-3 py-1 transition-all text-left">
                  <span className="text-lg text-white" dir="rtl" style={{ fontFamily: 'Amiri, serif', minWidth: 24 }}>{form}</span>
                  <span className="text-[10px] text-white/80">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Warning badge */}
          {letter.no_chinese_equivalent && (
            <div className="mt-3 bg-red-500/30 border border-red-300/40 rounded-xl px-3 py-1.5 text-xs text-white flex items-center gap-1.5">
              ⚠️ {t.no_cn}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-5 space-y-3">
          {/* Letter forms */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{t.forms}</p>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { label: t.isolated, form: letter.isolated },
                { label: t.initial,  form: letter.initial  },
                { label: t.medial,   form: letter.medial   },
                { label: t.final,    form: letter.final    },
              ].map(({ label, form }) => (
                <button key={label}
                  onClick={() => speakArabicLetter(form)}
                  className="bg-gray-50 hover:bg-gray-100 rounded-xl p-2 text-center transition-all group">
                  <span className="text-2xl block font-bold text-gray-800 group-hover:scale-110 transition-transform" dir="rtl"
                    style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif' }}>{form}</span>
                  <span className="text-[10px] text-gray-400">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Similar sound */}
          <div className="bg-green-50 rounded-xl px-3 py-2.5">
            <p className="text-xs font-semibold text-green-700 mb-0.5">{t.similar}</p>
            <p className="text-sm text-gray-700">{similar}</p>
          </div>

          {/* Tip (Chinese only) */}
          {locale === 'zh' && tip && (
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-3 py-2 text-sm text-gray-700">
              {tip}
            </div>
          )}

          {/* Example word */}
          <div className="bg-blue-50 rounded-xl px-3 py-2.5 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">{t.example}</p>
              <p className="text-sm font-medium text-gray-800">{exMeaning}</p>
            </div>
            <button onClick={() => speakArabicLetter(letter.example_word_with_harakat)}
              className="flex items-center gap-1.5 bg-blue-100 hover:bg-blue-200 rounded-xl px-3 py-1.5 transition-all">
              <span className="text-lg" dir="rtl" style={{ fontFamily: 'Amiri, serif' }}>{letter.example_word_with_harakat}</span>
              <span className="text-base">🔊</span>
            </button>
          </div>

          {/* Articulation diagram */}
          <div className="flex flex-col items-center gap-1 pt-1">
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
              {locale === 'zh' ? '发音部位' : locale === 'ar' ? 'مخرج الحرف' : 'Articulation'}
            </p>
            <ArticulationDiagram activeZone={letter.makhraj_zone} size={180} locale={locale} showLabel={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

function HarakaCell({ h, locale, isActive, onClick }: {
  h: typeof HARAKAT[0]
  locale: string
  isActive: boolean
  onClick: () => void
}) {
  const name = locale === 'zh' ? h.name_zh : locale === 'ar' ? h.name_ar : h.name_en
  const sound = locale === 'zh' ? h.sound_zh : h.sound_en

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 rounded-2xl p-3 transition-all hover:scale-105 active:scale-95 border-2 select-none"
      style={{
        background: isActive ? h.color + '20' : 'white',
        borderColor: isActive ? h.color : '#E5E7EB',
        boxShadow: isActive ? `0 4px 15px ${h.color}40` : '0 1px 3px rgba(0,0,0,0.06)',
      }}>
      {/* symbol on ب */}
      <span className="text-3xl" dir="rtl"
        style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif', color: isActive ? h.color : '#1E3A5F' }}>
        {h.example_with_ba}
      </span>
      {/* symbol alone */}
      <span className="text-base font-bold" style={{ color: h.color }}>{h.symbol}</span>
      <span className="text-[10px] font-semibold text-gray-600 text-center leading-tight">{name}</span>
      <span className="text-[10px] text-gray-400 text-center">{sound}</span>
    </button>
  )
}

export default function ArabicSoundsChart({ locale = 'zh' }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const [activeHaraka, setActiveHaraka] = useState<string | null>(null)
  const [activeLetter, setActiveLetter] = useState<ArabicLetter | null>(null)
  const [playingLetter, setPlayingLetter] = useState<string | null>(null)

  // Group letters by makhraj zone
  const byZone = new Map<MakhrajZone, ArabicLetter[]>()
  for (const letter of ARABIC_ALPHABET) {
    if (!byZone.has(letter.makhraj_zone)) byZone.set(letter.makhraj_zone, [])
    byZone.get(letter.makhraj_zone)!.push(letter)
  }

  async function handleLetterClick(letter: ArabicLetter) {
    setPlayingLetter(letter.letter)
    await speakArabicLetter(letter.isolated)
    setTimeout(() => setPlayingLetter(null), 800)
    setActiveLetter(letter)
  }

  async function handleHarakaClick(h: typeof HARAKAT[0]) {
    setActiveHaraka(h.id)
    await speakArabicLetter(h.example_with_ba)
  }

  return (
    <div className="w-full space-y-8">
      {/* ── Header ── */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">{t.title}</h2>
        <p className="text-gray-500 text-sm mt-1">{t.subtitle}</p>
      </div>

      {/* ── Letters Chart ── */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        {ZONE_GROUPS.map(({ zone, label_zh, label_en, label_ar, color, emoji }) => {
          const letters = byZone.get(zone) || []
          if (!letters.length) return null
          const zoneLabel = locale === 'zh' ? label_zh : locale === 'ar' ? label_ar : label_en
          return (
            <div key={zone} className="border-b border-gray-50 last:border-b-0">
              <div className="flex items-center gap-3 px-5 py-2 bg-gray-50/60">
                <span className="text-base">{emoji}</span>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{zoneLabel}</span>
                <div className="h-0.5 flex-1 rounded-full" style={{ background: color + '40' }} />
              </div>
              <div className="flex flex-wrap gap-2 px-4 py-3">
                {letters.map(letter => {
                  const isPlaying = playingLetter === letter.letter
                  const name = locale === 'zh' ? letter.name_zh : locale === 'ar' ? letter.name_ar : letter.name_en
                  return (
                    <button
                      key={letter.letter}
                      onClick={() => handleLetterClick(letter)}
                      title={`${name} — ${letter.transliteration}`}
                      className="relative flex flex-col items-center gap-0.5 rounded-2xl p-2.5 transition-all hover:scale-110 active:scale-95 select-none group"
                      style={{
                        minWidth: 64,
                        background: isPlaying ? color + '25' : 'white',
                        border: `2px solid ${isPlaying ? color : '#E5E7EB'}`,
                        boxShadow: isPlaying ? `0 4px 16px ${color}40` : '0 1px 3px rgba(0,0,0,0.06)',
                      }}>

                      {/* No CN equiv badge */}
                      {letter.no_chinese_equivalent && (
                        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border border-white" />
                      )}

                      {/* Difficulty dot */}
                      <span className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full"
                        style={{ background: DIFFICULTY_COLOR[letter.difficulty] }} />

                      {/* Letter */}
                      <span className="text-3xl font-bold transition-all group-hover:scale-110"
                        dir="rtl"
                        style={{
                          fontFamily: 'Noto Naskh Arabic, Amiri, serif',
                          color: isPlaying ? color : '#1E3A5F',
                          lineHeight: 1.2,
                        }}>
                        {letter.isolated}
                      </span>

                      {/* Transliteration */}
                      <span className="text-[10px] text-gray-500 font-mono">{letter.transliteration}</span>

                      {/* Sound wave animation when playing */}
                      {isPlaying && (
                        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 text-[8px]" style={{ color }}>
                          ♪♪♪
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Legend ── */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 justify-center text-xs text-gray-500">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"/>
          {locale === 'zh' ? '易学' : 'Easy'}</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500 inline-block"/>
          {locale === 'zh' ? '中等' : 'Medium'}</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500 inline-block"/>
          {locale === 'zh' ? '较难' : 'Hard'}</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500 border border-white inline-block"/>
          {locale === 'zh' ? '中文无此音' : 'No Chinese equiv.'}</span>
      </div>

      {/* ── Harakat Section ── */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 pt-5 pb-3 border-b border-gray-50">
          <h3 className="text-lg font-bold text-gray-900">{t.harakat_title}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{t.harakat_sub}</p>
        </div>
        <div className="p-5 grid grid-cols-3 sm:grid-cols-5 gap-3">
          {HARAKAT.map(h => (
            <HarakaCell
              key={h.id}
              h={h}
              locale={locale}
              isActive={activeHaraka === h.id}
              onClick={() => handleHarakaClick(h)}
            />
          ))}
        </div>

        {/* Active harakat detail */}
        {activeHaraka && (() => {
          const h = HARAKAT.find(x => x.id === activeHaraka)!
          const name = locale === 'zh' ? h.name_zh : locale === 'ar' ? h.name_ar : h.name_en
          const trick = h.memory_trick_zh
          return (
            <div className="mx-5 mb-5 rounded-2xl p-4 border-2 transition-all"
              style={{ borderColor: h.color, background: h.color + '0D' }}>
              <div className="flex items-start gap-4">
                <span className="text-5xl" dir="rtl" style={{ fontFamily: 'Amiri, serif', color: h.color }}>
                  {h.example_with_ba}
                </span>
                <div className="flex-1">
                  <p className="font-bold text-gray-800">{name} — <span className="font-mono text-sm">{h.symbol}</span></p>
                  <p className="text-sm text-gray-600 mt-1">
                    {locale === 'zh' ? h.sound_zh : h.sound_en}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {locale === 'zh' ? `例词: ${h.example_word_with_harakat} (${h.example_meaning_zh})`
                      : `Example: ${h.example_word_with_harakat} (${h.example_meaning_en})`}
                  </p>
                  {locale === 'zh' && trick && (
                    <p className="text-xs mt-2 italic text-gray-500">💡 {trick}</p>
                  )}
                </div>
                <button onClick={() => speakArabicLetter(h.example_word_with_harakat)}
                  className="flex items-center gap-1 text-white rounded-xl px-3 py-1.5 text-sm font-medium transition-all hover:opacity-80"
                  style={{ background: h.color }}>
                  🔊
                </button>
              </div>
            </div>
          )
        })()}
      </div>

      {/* ── Letter popup modal ── */}
      {activeLetter && (
        <LetterPopup
          letter={activeLetter}
          locale={locale}
          color={ZONE_GROUPS.find(g => g.zone === activeLetter.makhraj_zone)?.color ?? '#1E3A5F'}
          onClose={() => setActiveLetter(null)}
        />
      )}
    </div>
  )
}
