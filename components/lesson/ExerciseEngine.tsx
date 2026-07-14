'use client'

import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import type { GeneratedExercise } from '@/lib/generateExercises'
import Confetti from './Confetti'

const tx = {
  zh: { check: '检查', next: '下一题', correct: '正确！', wrong: '错误！', finish: '完成！', score: '得分', perfect: '完美！', good: '很好！', keep_trying: '继续努力！', true: '正确', false: '错误', match_instruction: '点击配对', xp: 'XP', of: '/', exercises: '道题' },
  en: { check: 'Check', next: 'Next', correct: 'Correct!', wrong: 'Wrong!', finish: 'Finish!', score: 'Score', perfect: 'Perfect!', good: 'Good job!', keep_trying: 'Keep trying!', true: 'True', false: 'False', match_instruction: 'Click to match', xp: 'XP', of: '/', exercises: 'exercises' },
  ar: { check: 'تحقق', next: 'التالي', correct: 'صحيح!', wrong: 'خطأ!', finish: 'انتهى!', score: 'النتيجة', perfect: 'ممتاز!', good: 'أحسنت!', keep_trying: 'استمر!', true: 'صح', false: 'خطأ', match_instruction: 'اضغط للمطابقة', xp: 'نقطة', of: 'من', exercises: 'تمارين' },
}

interface Props {
  exercises: GeneratedExercise[]
  locale: string
  accentColor?: string
  onComplete?: (score: number, xpEarned: number) => void
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function ArabicSpan({ text, size = '1rem' }: { text: string; size?: string }) {
  const isArabic = /[؀-ۿ]/.test(text)
  return (
    <span dir={isArabic ? 'rtl' : 'ltr'}
      style={{ fontFamily: isArabic ? 'Noto Naskh Arabic, Amiri, serif' : 'inherit', fontSize: size }}>
      {text}
    </span>
  )
}

export default function ExerciseEngine({ exercises, locale, accentColor = '#1E3A5F', onComplete }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [xpTotal, setXpTotal] = useState(0)
  const [done, setDone] = useState(false)
  const [confetti, setConfetti] = useState(false)
  // matching state
  const [matchLeft, setMatchLeft] = useState<string | null>(null)
  const [matchDone, setMatchDone] = useState<Record<string, string>>({})

  const ex = exercises[idx]
  if (!ex) return null

  const q = locale === 'zh' ? ex.question_zh : locale === 'ar' ? ex.question_ar : ex.question_en
  const expl = locale === 'zh' ? ex.explanation_zh : locale === 'ar' ? ex.explanation_ar : ex.explanation_en

  function checkAnswer() {
    if (!selected && ex.type !== 'matching') return
    let correct = false

    if (ex.type === 'matching') {
      const pairs = ex.pairs || []
      correct = pairs.every(p => matchDone[p.ar] === p.answer)
    } else if (Array.isArray(ex.correct_answer)) {
      correct = (ex.correct_answer as string[]).includes(selected!)
    } else {
      correct = String(ex.correct_answer) === selected
    }

    setIsCorrect(correct)
    setChecked(true)
    if (correct) {
      setCorrectCount(c => c + 1)
      setXpTotal(x => x + ex.xp_reward)
    }
  }

  function nextExercise() {
    if (idx + 1 >= exercises.length) {
      const score = Math.round((correctCount + (isCorrect ? 1 : 0)) / exercises.length * 100)
      const finalXp = xpTotal + (isCorrect ? ex.xp_reward : 0)
      const isPerfect = score === 100
      setDone(true)
      if (isPerfect) setConfetti(true)
      setTimeout(() => {
        onComplete?.(score, finalXp)
        if (isPerfect) setTimeout(() => setConfetti(false), 3000)
      }, isPerfect ? 1500 : 0)
      return
    }
    setIdx(i => i + 1)
    setSelected(null)
    setChecked(false)
    setIsCorrect(false)
    setMatchLeft(null)
    setMatchDone({})
  }

  function handleMatchClick(ar: string) {
    if (checked) return
    if (matchLeft === null) {
      setMatchLeft(ar)
    } else if (matchLeft !== ar) {
      // ar is a name option
      setMatchDone(d => ({ ...d, [matchLeft]: ar }))
      setMatchLeft(null)
    } else {
      setMatchLeft(null)
    }
  }

  if (done) {
    const finalScore = Math.round((correctCount) / exercises.length * 100)
    const finalXp = xpTotal
    const label = finalScore === 100 ? t.perfect : finalScore >= 70 ? t.good : t.keep_trying
    return (
      <>
        <Confetti active={confetti} />
        <div className="text-center py-8">
          <div className="text-6xl mb-4">{finalScore === 100 ? '🏆' : finalScore >= 70 ? '⭐' : '💪'}</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{label}</h2>
          <p className="text-gray-700 mb-6">{correctCount} {t.of} {exercises.length} {t.exercises}</p>
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: accentColor }}>{finalScore}%</div>
              <div className="text-xs text-gray-600">{t.score}</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">+{finalXp}</div>
              <div className="text-xs text-gray-600">{t.xp}</div>
            </div>
          </div>
          {/* Score circle */}
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <svg viewBox="0 0 36 36" className="w-24 h-24 -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="#E5E7EB" strokeWidth="3" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke={accentColor} strokeWidth="3"
                strokeDasharray={`${finalScore} 100`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-800">{finalScore}%</span>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
        <span>{idx + 1} {t.of} {exercises.length}</span>
        <span className="text-yellow-500 font-medium">+{xpTotal} {t.xp}</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full mb-6">
        <div className="h-full rounded-full transition-all"
          style={{ width: `${(idx / exercises.length) * 100}%`, background: accentColor }} />
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4">
        <p className="text-center font-semibold text-gray-800 text-lg mb-6">
          <ArabicSpan text={q} size="1.1rem" />
        </p>

        {/* Multiple choice */}
        {ex.type === 'multiple_choice' && ex.options && (
          <div className="grid grid-cols-2 gap-3">
            {ex.options.map((opt, i) => {
              const isSelected = selected === opt
              const correct = String(ex.correct_answer) === opt
              let cls = 'border-2 border-gray-200 bg-white'
              if (checked) {
                if (correct) cls = 'border-green-400 bg-green-50'
                else if (isSelected) cls = 'border-red-400 bg-red-50'
              } else if (isSelected) cls = 'border-blue-400 bg-blue-50'
              return (
                <button key={i} onClick={() => !checked && setSelected(opt)}
                  className={`p-3 rounded-xl ${cls} transition-all text-center font-bold text-gray-900 flex items-center justify-center min-h-[56px]`}
                  style={{ color: '#1E3A5F' }}>
                  <ArabicSpan text={opt} size={/[؀-ۿ]/.test(opt) ? '2.2rem' : '1rem'} />
                </button>
              )
            })}
          </div>
        )}

        {/* True / False */}
        {ex.type === 'true_false' && (
          <div className="grid grid-cols-2 gap-4">
            {(['true', 'false'] as const).map(val => {
              const isSelected = selected === val
              const correct = String(ex.correct_answer) === val
              let cls = 'border-2 border-gray-200 bg-white'
              if (checked) {
                if (correct) cls = 'border-green-400 bg-green-50'
                else if (isSelected) cls = 'border-red-400 bg-red-50'
              } else if (isSelected) cls = 'border-blue-400 bg-blue-50'
              return (
                <button key={val} onClick={() => !checked && setSelected(val)}
                  className={`py-4 rounded-xl ${cls} transition-all font-bold text-lg flex items-center justify-center gap-2`}>
                  {val === 'true' ? <CheckCircle size={20} className="text-green-500" /> : <XCircle size={20} className="text-red-500" />}
                  {t[val]}
                </button>
              )
            })}
          </div>
        )}

        {/* Fill blank */}
        {ex.type === 'fill_blank' && (
          <input type="text" value={selected || ''} onChange={e => !checked && setSelected(e.target.value)}
            dir="rtl" placeholder="..."
            className="w-full p-3 border-2 border-gray-200 rounded-xl text-center focus:outline-none focus:border-blue-400"
            style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif', fontSize: '1.5rem' }} />
        )}

        {/* Matching */}
        {ex.type === 'matching' && ex.pairs && (
          <div className="space-y-3">
            <p className="text-xs text-center text-gray-600 mb-4">{t.match_instruction}</p>
            {ex.pairs.map(pair => {
              const matched = matchDone[pair.ar]
              const isLeft = matchLeft === pair.ar
              const names = shuffle(ex.pairs!.map(p => p.answer))
              return (
                <div key={pair.ar} className="flex items-center gap-3">
                  <button onClick={() => !checked && handleMatchClick(pair.ar)}
                    className={`flex-1 py-3 rounded-xl border-2 text-center transition-all ${isLeft ? 'border-blue-400 bg-blue-50' : matched ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-white'}`}
                    style={{ fontFamily: 'Noto Naskh Arabic, Amiri, serif', fontSize: '2rem' }}>
                    {pair.ar}
                  </button>
                  <span className="text-gray-300">→</span>
                  <div className="flex-1 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-center text-sm font-medium text-gray-600">
                    {matched || '?'}
                  </div>
                </div>
              )
            })}
            {/* Name buttons */}
            {matchLeft && (
              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                {ex.pairs.map(p => {
                  const used = Object.values(matchDone).includes(p.answer)
                  return (
                    <button key={p.answer} onClick={() => !used && handleMatchClick(p.answer)} disabled={used}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${used ? 'opacity-30 border-gray-100' : 'border-blue-200 bg-blue-50 hover:bg-blue-100'}`}>
                      {p.answer}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Feedback */}
      {checked && (
        <div className={`rounded-2xl p-4 mb-4 flex items-start gap-3 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          {isCorrect ? <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" /> : <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />}
          <div>
            <p className={`font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {isCorrect ? t.correct : t.wrong}
            </p>
            {expl && <p className="text-sm text-gray-600 mt-0.5">{expl}</p>}
          </div>
        </div>
      )}

      {/* Action button */}
      {!checked ? (
        <button onClick={checkAnswer}
          disabled={!selected && ex.type !== 'matching'}
          className="w-full py-3 rounded-xl text-white font-semibold transition-all hover:opacity-90 disabled:opacity-40"
          style={{ background: accentColor }}>
          {t.check}
        </button>
      ) : (
        <button onClick={nextExercise}
          className="w-full py-3 rounded-xl text-white font-semibold transition-all hover:opacity-90"
          style={{ background: isCorrect ? '#10B981' : accentColor }}>
          {idx + 1 >= exercises.length ? t.finish : t.next} →
        </button>
      )}
    </div>
  )
}
