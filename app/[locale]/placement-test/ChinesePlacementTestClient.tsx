'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CHINESE_PLACEMENT_QUESTIONS, getChineseLevel } from '@/lib/chinese/placementTest'

const tx = {
  ar: {
    title: 'اختبار تحديد المستوى — الصينية', sub: 'أجب عن الأسئلة لنحدد أنسب نقطة بداية لك',
    q: 'سؤال', of: 'من', check: 'تحقق', next: 'التالي', finish: 'إنهاء',
    result_title: 'مستواك في الصينية', result_sub: 'بناءً على إجاباتك، ننصحك بالبدء من:',
    start: 'ابدأ التعلم من هنا', skip: 'تخطّي والبدء من الصفر', correct: 'صحيح!', wrong: 'الإجابة الصحيحة:',
    score: 'نتيجتك',
  },
  en: {
    title: 'Chinese Placement Test', sub: 'Answer to find your best starting point',
    q: 'Question', of: 'of', check: 'Check', next: 'Next', finish: 'Finish',
    result_title: 'Your Chinese Level', result_sub: 'Based on your answers, we recommend starting at:',
    start: 'Start here', skip: 'Skip & start from scratch', correct: 'Correct!', wrong: 'Correct answer:',
    score: 'Your score',
  },
  zh: {
    title: '汉语水平测试', sub: '回答问题，找到最适合你的起点',
    q: '问题', of: '/', check: '检查', next: '下一题', finish: '完成',
    result_title: '你的汉语水平', result_sub: '根据你的答案，建议从这里开始：',
    start: '从这里开始', skip: '跳过，从零开始', correct: '正确！', wrong: '正确答案：',
    score: '你的得分',
  },
}

export default function ChinesePlacementTestClient({ locale }: { locale: string }) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const router = useRouter()
  const questions = CHINESE_PLACEMENT_QUESTIONS

  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [saving, setSaving] = useState(false)

  const question = questions[current]
  const prompt = locale === 'zh' ? question?.prompt_zh : locale === 'ar' ? question?.prompt_ar : question?.prompt_en
  const level = getChineseLevel(score)
  const levelName = locale === 'zh' ? level.name_zh : locale === 'ar' ? level.name_ar : level.name_en
  const levelDesc = locale === 'zh' ? level.desc_zh : locale === 'ar' ? level.desc_ar : level.desc_en

  function check() {
    if (selected === null) return
    if (selected === question.correct) setScore(s => s + 1)
    setChecked(true)
  }
  function nextQ() {
    if (current + 1 >= questions.length) { setDone(true); return }
    setCurrent(c => c + 1); setSelected(null); setChecked(false)
  }
  async function saveAndStart(levelCode: string) {
    setSaving(true)
    try {
      await fetch('/api/placement-result', {
        method: 'POST', credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level_code: levelCode }),
      })
    } catch {}
    router.push(`/${locale}/levels`)
  }

  if (done) {
    return (
      <main className="lg:ml-64 flex-1 flex items-center justify-center p-6" style={{ minHeight: '100vh' }} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <div className="max-w-md w-full text-center">
          <div className="text-6xl mb-4">{level.icon}</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{t.result_title}</h2>
          <p className="text-gray-500 text-sm mb-2">{t.result_sub}</p>
          <p className="text-sm text-gray-400 mb-6">{t.score}: {score} / {questions.length}</p>
          <div className="rounded-2xl p-6 mb-6 border-2" style={{ borderColor: level.color, background: `${level.color}10` }}>
            <div className="text-3xl font-bold mb-1" style={{ color: level.color }}>{levelName}</div>
            <p className="text-gray-600 text-sm">{levelDesc}</p>
          </div>
          <button onClick={() => saveAndStart(level.code)} disabled={saving}
            className="w-full py-3 rounded-xl text-white font-semibold mb-3 disabled:opacity-60 hover:opacity-90 transition-all"
            style={{ background: level.color }}>
            {t.start} →
          </button>
          <button onClick={() => saveAndStart('zh-pre-a1')} disabled={saving}
            className="w-full py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-all">
            {t.skip}
          </button>
        </div>
      </main>
    )
  }

  const pct = Math.round((current / questions.length) * 100)

  return (
    <main className="lg:ml-64 flex-1 p-6 lg:p-10" style={{ minHeight: '100vh' }} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
          <p className="text-gray-600 text-sm">{t.sub}</p>
        </div>

        <div className="flex items-center justify-between mb-2 text-sm text-gray-500">
          <span>{t.q} {current + 1} {t.of} {questions.length}</span>
          <span>{pct}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-8">
          <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: '#C9858A' }} />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-4">
          <p className="text-lg font-semibold text-gray-800 mb-5">{prompt}</p>
          <div className="grid grid-cols-1 gap-3">
            {question.options.map((opt, i) => {
              const isSel = selected === i
              const isRight = question.correct === i
              let cls = 'border-2 border-gray-200 bg-white'
              if (checked) cls = isRight ? 'border-green-400 bg-green-50' : isSel ? 'border-red-400 bg-red-50' : 'border-gray-100'
              else if (isSel) cls = 'border-red-300 bg-red-50'
              return (
                <button key={i} disabled={checked} onClick={() => setSelected(i)}
                  className={`p-3.5 rounded-xl ${cls} transition-all text-start font-medium text-gray-800`}>
                  {opt}
                </button>
              )
            })}
          </div>
        </div>

        {checked && (
          <div className={`rounded-2xl p-4 mb-4 ${selected === question.correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-bold ${selected === question.correct ? 'text-green-700' : 'text-red-700'}`}>
              {selected === question.correct ? t.correct : `${t.wrong} ${question.options[question.correct]}`}
            </p>
            {question.hint_ar && locale === 'ar' && <p className="text-sm text-gray-600 mt-1">{question.hint_ar}</p>}
          </div>
        )}

        {!checked ? (
          <button onClick={check} disabled={selected === null}
            className="w-full py-3 rounded-xl text-white font-semibold disabled:opacity-40 transition-all"
            style={{ background: '#C9858A' }}>
            {t.check}
          </button>
        ) : (
          <button onClick={nextQ}
            className="w-full py-3 rounded-xl text-white font-semibold transition-all hover:opacity-90"
            style={{ background: '#C9858A' }}>
            {current + 1 >= questions.length ? t.finish : t.next} →
          </button>
        )}
      </div>
    </main>
  )
}
