'use client'

import { useState } from 'react'
import { Volume2, ChevronRight, ChevronLeft, BookOpen } from 'lucide-react'
import { speakArabic } from '@/lib/tts'
import type { StoryDialogue } from '@/lib/a1Content'

interface Props {
  dialogue: StoryDialogue
  locale?: string
  onComplete?: () => void
}

export default function StoryDialogueLesson({ dialogue, locale = 'zh', onComplete }: Props) {
  const [lineIndex, setLineIndex] = useState(-1)   // -1 = scene intro
  const [revealed, setRevealed] = useState(false)

  const isIntro = lineIndex === -1
  const isDone = lineIndex >= dialogue.lines.length
  const currentLine = !isIntro && !isDone ? dialogue.lines[lineIndex] : null

  const nextLabel = { zh: '下一句', en: 'Next line', ar: 'التالي' }[locale as 'zh' | 'en' | 'ar'] ?? '下一句'
  const prevLabel = { zh: '上一句', en: 'Previous', ar: 'السابق' }[locale as 'zh' | 'en' | 'ar'] ?? '上一句'

  function goNext() {
    if (isDone) { onComplete?.(); return }
    setRevealed(false)
    setLineIndex(i => i + 1)
  }
  function goPrev() {
    if (lineIndex <= -1) return
    setRevealed(false)
    setLineIndex(i => i - 1)
  }

  const progress = Math.max(0, lineIndex + 1)
  const total = dialogue.lines.length

  return (
    <div className="max-w-lg mx-auto space-y-4">
      {/* Header */}
      <div className="text-center">
        <span className="text-3xl">{dialogue.scene_emoji}</span>
        <h2 className="text-lg font-bold text-gray-800 mt-1">
          {locale === 'ar' ? dialogue.title_ar : dialogue.title_zh}
        </h2>
        {/* progress bar */}
        <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
            style={{ width: `${(progress / total) * 100}%` }} />
        </div>
        <p className="text-xs text-gray-500 mt-1">{progress}/{total}</p>
      </div>

      {/* Scene intro */}
      {isIntro && (
        <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-6">
          <div className="flex items-start gap-3">
            <BookOpen size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 leading-relaxed text-sm">{dialogue.scene_zh}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {dialogue.vocab_focus.map(w => (
              <button key={w} onClick={() => speakArabic(w)}
                className="px-2 py-1 rounded-full bg-white border border-amber-200 text-sm font-medium text-amber-700 hover:bg-amber-50 transition-all flex items-center gap-1">
                <Volume2 size={11} /> <span dir="rtl" style={{ fontFamily: 'Amiri, serif' }}>{w}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Dialogue line */}
      {currentLine && (
        <div className={`rounded-3xl p-5 border-2 shadow-md transition-all ${
          currentLine.speaker === 'ming'
            ? 'bg-blue-50 border-blue-200 ml-4'
            : 'bg-white border-gray-200 mr-4'
        }`}>
          {/* Speaker */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{currentLine.speaker_emoji}</span>
            <span className="font-semibold text-gray-700 text-sm">{currentLine.speaker_name_zh}</span>
            {currentLine.speaker === 'ming' && (
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">你</span>
            )}
          </div>

          {/* Arabic with harakat */}
          <p className="text-2xl leading-relaxed text-right text-gray-800 mb-2"
            dir="rtl"
            style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif' }}>
            {currentLine.arabic_with_harakat}
          </p>

          {/* Transliteration */}
          <p className="text-xs text-gray-500 italic mb-3">{currentLine.transliteration}</p>

          {/* TTS */}
          <button onClick={() => speakArabic(currentLine.arabic)}
            className="flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 mb-3 transition-colors">
            <Volume2 size={14} />
            {locale === 'zh' ? '播放' : locale === 'ar' ? 'استمع' : 'Listen'}
          </button>

          {/* Reveal meaning */}
          {!revealed ? (
            <button onClick={() => setRevealed(true)}
              className="text-xs text-gray-500 hover:text-gray-700 border border-dashed border-gray-300 rounded-lg px-3 py-1.5 transition-all w-full">
              {locale === 'zh' ? '显示翻译 →' : locale === 'ar' ? 'أظهر الترجمة' : 'Show translation →'}
            </button>
          ) : (
            <div className="bg-white rounded-xl px-3 py-2 border border-gray-100">
              <p className="text-sm font-medium text-gray-800">{currentLine.meaning_zh}</p>
            </div>
          )}
        </div>
      )}

      {/* Completed state */}
      {isDone && (
        <div className="rounded-3xl bg-green-50 border-2 border-green-200 p-6 text-center">
          <p className="text-3xl mb-2">🎉</p>
          <p className="font-bold text-green-700 text-lg">
            {locale === 'zh' ? '对话完成！' : locale === 'ar' ? 'أحسنت!' : 'Dialogue complete!'}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {locale === 'zh' ? `你学会了 ${dialogue.vocab_focus.length} 个关键词` : `${dialogue.vocab_focus.length} key words learned`}
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3">
        <button onClick={goPrev} disabled={lineIndex <= -1}
          className="flex items-center gap-1 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-30 transition-all text-sm">
          <ChevronLeft size={16} /> {prevLabel}
        </button>
        <button onClick={goNext}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
          style={{ background: isDone ? '#10B981' : 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
          {isDone
            ? (locale === 'zh' ? '完成 ✓' : 'Complete ✓')
            : (<>{nextLabel} <ChevronRight size={16} /></>)
          }
        </button>
      </div>
    </div>
  )
}
