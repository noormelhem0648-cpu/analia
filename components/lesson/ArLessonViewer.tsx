'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Star, Volume2, CheckCircle, Circle } from 'lucide-react'
import Confetti from '@/components/lesson/Confetti'
import { generateVocabExercises, type GeneratedExercise } from '@/lib/generateExercises'
import { ARABIC_ALPHABET, type ArabicLetter } from '@/lib/arabicAlphabet'
import { PRE_A1_GREETINGS, ARABIC_NUMBERS, PRE_A1_VOCAB, type VocabItem } from '@/lib/preA1Content'
import { A1_PRONOUNS, A1_PROFESSIONS, A1_PLACES, A1_TIME, A1_VERBS_PAST } from '@/lib/a1Content'
import { A2_FOOD, A2_TRAVEL, A2_FAMILY, A2_BODY_HEALTH } from '@/lib/a2Content'
import { B1_WORK, B1_CULTURE, B1_OPINION, B1_CITY } from '@/lib/b1Content'

interface Lesson {
  id: number
  title_ar: string; title_en: string; title_zh: string
  description_ar?: string; description_en?: string; description_zh?: string
  lesson_type: string; day_number: number; xp_reward: number; estimated_minutes: number
  content_data?: Record<string, unknown> | null
  levels?: { name_ar: string; name_en: string; name_zh: string; code: string; color_primary?: string }
}
interface Props {
  locale: string
  lesson: Lesson
  levelId: number
  nextLessonId?: number | null
  progress: { status: string; score?: number } | null
}

const tx = {
  ar: {
    back: 'رجوع', finish: 'أنهِ الدرس واكسب النقاط', retake: 'إعادة الاختبار وحفظ النتيجة', saving: 'جارٍ الحفظ...',
    great: 'أحسنت!', xp: 'نقطة', listen: 'استمع', backLevel: 'العودة للمستوى', nextLesson: 'الدرس التالي',
    completedBefore: 'أنهيتَ هذا الدرس سابقاً', reviewHint: 'راجعه أو أعد الاختبار في الأسفل.',
    letters: 'الحروف', vocab: 'المفردات',
    // 7 merged section labels (pairs of the original 13-14 grouped together)
    s: ['الهدف والحروف', 'الكتابة والنطق', 'القاعدة والأمثلة', 'الاستماع والترديد', 'القراءة والكتابة', 'تمارين وبطاقات', 'اختبار'],
    writePrompt: 'اكتب ما يلي بيدك على ورقة ثم قارن:',
    menuTitle: 'أقسام الدرس', next: 'التالي', prev: 'السابق', menu: 'القائمة', ofSections: 'من',
  },
  zh: {
    back: '返回', finish: '完成并获得XP', retake: '重新测验并保存成绩', saving: '保存中...',
    great: '太棒了！', xp: 'XP', listen: '听', backLevel: '返回关卡', nextLesson: '下一课',
    completedBefore: '你已完成本课', reviewHint: '可复习或在下方重新测验。',
    letters: '字母', vocab: '词汇',
    s: ['目标与字母', '书写与发音', '语法与例句', '听力与跟读', '阅读与手写', '练习与闪卡', '测验'],
    writePrompt: '请手写下面内容，然后对照：',
    menuTitle: '课程内容', next: '下一部分', prev: '上一部分', menu: '目录', ofSections: '/',
  },
  en: {
    back: 'Back', finish: 'Finish & Earn XP', retake: 'Retake Quiz & Save Score', saving: 'Saving...',
    great: 'Great job!', xp: 'XP', listen: 'Listen', backLevel: 'Back to Level', nextLesson: 'Next Lesson',
    completedBefore: "You've completed this lesson", reviewHint: 'Review it, or retake the quiz below.',
    letters: 'Letters', vocab: 'Vocabulary',
    s: ['Objective & Letters', 'Writing & Pronunciation', 'Grammar & Examples', 'Listening & Shadowing', 'Reading & Handwriting', 'Exercises & Flashcards', 'Quiz'],
    writePrompt: 'Write the following by hand, then compare:',
    menuTitle: 'Lesson Sections', next: 'Next', prev: 'Previous', menu: 'Menu', ofSections: 'of',
  },
}

const SECTION_ICONS = ['🎯', '✍️', '📚', '🎧', '📖', '🧩', '📝']

// Small inline divider used to separate two merged topics inside one section.
function SubHeading({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3 mt-6 first:mt-0">
      <span className="w-1 h-4 rounded-full flex-shrink-0" style={{ background: color }} />
      <p className="text-xs font-bold uppercase tracking-wide text-gray-500">{children}</p>
    </div>
  )
}

function speakArabic(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'ar-SA'; u.rate = 0.8
  window.speechSynthesis.cancel(); window.speechSynthesis.speak(u)
}

// Extract the individual Arabic letters LISTED in a letter-lesson title.
// Only applies to lesson_type === 'letters'; parses the segment after the colon
// (e.g. "الحروف: ا ب ت ث" or "التمييز: س / ص") and keeps single-letter tokens,
// so the words of the label ("الحروف", "التمييز") are never mistaken for content.
function lettersFromTitle(titleAr: string): ArabicLetter[] {
  // Triggers whenever the title lists single Arabic letters after a colon —
  // covers alphabet lessons ("الحروف: ا ب ت ث") and pronunciation-contrast
  // lessons ("التمييز: س / ص"). Vocabulary titles use a dash (—), never a colon.
  const after = (titleAr || '').split(/[:：]/).slice(1).join(' ')
  if (!after) return []
  const tokens = after.split(/[\s/،,]+/).filter(Boolean)
  const singles = tokens.filter(tok => Array.from(tok).length === 1 && /[ء-ي]/.test(tok))
  const found = singles
    .map(c => ARABIC_ALPHABET.find(l => l.letter === c || l.isolated === c))
    .filter((l): l is ArabicLetter => !!l)
  // de-dupe by isolated form, preserve order
  const seen = new Set<string>()
  return found.filter(l => (seen.has(l.isolated) ? false : (seen.add(l.isolated), true)))
}

// Vocabulary bank by level + title keyword
function pickVocab(code: string, titleEn: string): VocabItem[] {
  const t = (titleEn || '').toLowerCase()
  const kw = (bank: VocabItem[], ...keys: string[]) => (keys.some(k => t.includes(k)) ? bank : null)
  if (code === 'pre-a1') {
    return kw(ARABIC_NUMBERS, 'number', 'رقم') || kw(PRE_A1_GREETINGS, 'greet', 'name', 'intro', 'سلام', 'اسم')
      || PRE_A1_VOCAB
  }
  if (code === 'a1') {
    return kw(A1_PROFESSIONS, 'university', 'work', 'job') || kw(A1_PLACES, 'home', 'market', 'hospital', 'transport')
      || kw(A1_TIME, 'weather', 'time') || kw(A1_VERBS_PAST, 'hobby', 'hobbies') || A1_PRONOUNS
  }
  if (code === 'a2') {
    return kw(A2_TRAVEL, 'travel') || kw(A2_BODY_HEALTH, 'work', 'news') || kw(A2_FAMILY, 'culture', 'letter') || A2_FOOD
  }
  if (code === 'b1') {
    return kw(B1_CULTURE, 'story', 'stories', 'culture') || kw(B1_WORK, 'media', 'tech') || kw(B1_CITY, 'discussion') || B1_OPINION
  }
  // b2 / c1 — reuse advanced-ish banks
  return kw(B1_OPINION, 'essay', 'politic', 'debate') || kw(B1_CULTURE, 'literature', 'poetry', 'quran') || B1_WORK
}

const DIFF_COLOR = ['#9CA3AF', '#10B981', '#F59E0B', '#EF4444']

export default function ArLessonViewer({ locale, lesson, levelId, nextLessonId, progress }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.ar
  const color = lesson.levels?.color_primary || '#C9858A'
  const title = locale === 'zh' ? lesson.title_zh : locale === 'ar' ? lesson.title_ar : lesson.title_en
  const desc = locale === 'zh' ? lesson.description_zh : locale === 'ar' ? lesson.description_ar : lesson.description_en

  const letters = useMemo(() => lettersFromTitle(lesson.title_ar), [lesson.title_ar])
  const isLetterLesson = letters.length > 0
  const vocab = useMemo(
    () => pickVocab(lesson.levels?.code || 'a1', lesson.title_en).slice(0, 8),
    [lesson.levels?.code, lesson.title_en],
  )
  // Exercises: from letters (name matching) or vocab
  const exercises: GeneratedExercise[] = useMemo(() => {
    const items = isLetterLesson
      ? letters.map(l => ({ ar: l.isolated, en: l.name_en, zh: l.name_zh }))
      : vocab.map(v => ({ ar: v.arabic, en: v.meaning_en, zh: v.meaning_zh }))
    return generateVocabExercises(items, 5, locale)
  }, [isLetterLesson, letters, vocab, locale])

  const alreadyCompleted = progress?.status === 'completed'
  const [done, setDone] = useState(false)
  const [saving, setSaving] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({})
  const [quizChecked, setQuizChecked] = useState(false)
  const startTime = useRef<number>(0)
  useEffect(() => { startTime.current = Date.now() }, [])

  // Navigation: null = section menu, number = active section index
  const [activeSection, setActiveSection] = useState<number | null>(null)
  const [visited, setVisited] = useState<Set<number>>(new Set())

  const gloss = (v: VocabItem) => (locale === 'zh' ? v.meaning_zh : v.meaning_en) || v.meaning_zh || v.meaning_en
  const lettername = (l: ArabicLetter) => (locale === 'zh' ? l.name_zh : locale === 'ar' ? l.name_ar : l.name_en)
  const makhraj = (l: ArabicLetter) => (locale === 'zh' ? l.makhraj_zh : locale === 'ar' ? l.makhraj_ar : l.makhraj_en)

  function scoreQuiz(): number {
    if (!exercises.length) return 100
    let correct = 0
    exercises.forEach((ex, i) => {
      const ca = Array.isArray(ex.correct_answer) ? String(ex.correct_answer[0]) : String(ex.correct_answer)
      if (quizAnswers[i] === ca) correct++
    })
    return Math.round((correct / exercises.length) * 100)
  }

  async function finish() {
    setSaving(true); setQuizChecked(true)
    const timeSpent = Math.round((Date.now() - startTime.current) / 1000)
    const score = scoreQuiz()
    try {
      await fetch('/api/progress/lesson', {
        method: 'POST', credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lesson_id: lesson.id, status: 'completed', score, time_spent_seconds: timeSpent, xp_earned: alreadyCompleted ? 0 : lesson.xp_reward }),
      })
    } catch {}
    setDone(true); setConfetti(true); setTimeout(() => setConfetti(false), 4000); setSaving(false)
  }

  if (done) {
    return (
      <main className="lg:ml-64 flex-1 flex items-center justify-center p-6" style={{ minHeight: '100vh' }} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <Confetti active={confetti} />
        <div className="max-w-md w-full text-center">
          <motion.div className="text-7xl mb-4" initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 14 }}>🎉</motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.great}</h1>
          <p className="text-gray-700 mb-6">{title}</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6 flex items-center justify-center gap-3">
            <Star size={24} className="text-yellow-500" fill="currentColor" />
            <span className="text-2xl font-bold text-gray-800">+{lesson.xp_reward}</span>
            <span className="text-gray-700">{t.xp}</span>
          </div>
          <div className="flex gap-3">
            <Link href={`/${locale}/levels/${levelId}`} className="flex-1 py-3 rounded-xl border border-gray-200 font-medium text-gray-600 hover:bg-gray-50 text-center">{t.backLevel}</Link>
            {nextLessonId && (
              <Link href={`/${locale}/levels/${levelId}/lessons/${nextLessonId}`} className="flex-1 py-3 rounded-xl text-white font-medium text-center hover:opacity-90" style={{ background: color }}>{t.nextLesson} →</Link>
            )}
          </div>
        </div>
      </main>
    )
  }

  // 7 merged section labels (each groups 2 of the original 13-14 sections).
  const labels = t.s
  const letterOrVocabLabel = isLetterLesson ? t.letters : t.vocab

  const bigArabic: React.CSSProperties = { fontFamily: 'Noto Naskh Arabic, Amiri, serif' }

  // Each merged section as standalone content — rendered one at a time, not stacked.
  const sectionBodies: React.ReactNode[] = [
    // 0. Objective + Letters/Vocabulary
    <div key="g0">
      <p className="text-gray-700">{desc || (locale === 'zh' ? '本课学习阿拉伯语字母、发音或词汇。' : 'ستتعلم في هذا الدرس حروفاً وأصواتاً ومفردات جديدة.')}</p>
      <SubHeading color={color}>{letterOrVocabLabel}</SubHeading>
      {isLetterLesson ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {letters.map((l, i) => (
            <button key={i} onClick={() => speakArabic(l.isolated)} className="text-start bg-gray-50 rounded-xl p-3 hover:bg-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-4xl text-gray-900" style={bigArabic}>{l.isolated}</span>
                <Volume2 size={16} className="text-gray-400" />
              </div>
              <p className="text-sm font-semibold text-gray-700 mt-1">{lettername(l)} · {l.transliteration}</p>
              {l.no_chinese_equivalent && (
                <span className="inline-block mt-1 text-[10px] px-1.5 py-0.5 rounded-full text-white" style={{ background: '#EF4444' }}>
                  {locale === 'zh' ? '汉语中无此音' : 'صوت غير موجود بالصينية'}
                </span>
              )}
            </button>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {vocab.map((v, i) => (
            <button key={i} onClick={() => speakArabic(v.arabic)} className="text-start bg-gray-50 rounded-xl p-3 hover:bg-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900" style={bigArabic} dir="rtl">{v.arabic_with_harakat || v.arabic}</span>
                <Volume2 size={16} className="text-gray-400" />
              </div>
              <p className="text-xs text-gray-400 italic">{v.transliteration}</p>
              <p className="text-sm text-gray-700">{gloss(v)}</p>
            </button>
          ))}
        </div>
      )}
    </div>,

    // 1. Writing & Joining + Pronunciation
    <div key="g1">
      {isLetterLesson ? (
        <div className="space-y-2">
          {letters.map((l, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2">
              <span className="text-sm text-gray-500">{lettername(l)}</span>
              <div className="flex items-center gap-4 text-2xl text-gray-900" style={bigArabic} dir="rtl">
                <span title="أول">{l.initial}</span>
                <span title="وسط">{l.medial}</span>
                <span title="آخر">{l.final}</span>
                <span title="منفصل" className="text-gray-400">{l.isolated}</span>
              </div>
            </div>
          ))}
          <p className="text-xs text-gray-500">{locale === 'zh' ? '同一字母在词首/中/尾的写法不同。' : 'يتغيّر شكل الحرف حسب موقعه في الكلمة.'}</p>
        </div>
      ) : (
        <p className="text-sm text-gray-600">{locale === 'zh' ? '阿拉伯语从右往左书写，字母相连。' : 'العربية تُكتب من اليمين لليسار والحروف متصلة.'}</p>
      )}
      <SubHeading color={color}>{locale === 'ar' ? 'النطق والمخرج' : locale === 'zh' ? '发音与发音部位' : 'Pronunciation'}</SubHeading>
      {isLetterLesson ? (
        <div className="space-y-2">
          {letters.map((l, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-2">
              <span className="w-2 h-8 rounded-full" style={{ background: DIFF_COLOR[l.difficulty] }} />
              <span className="text-3xl text-gray-900" style={bigArabic}>{l.isolated}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-700">{makhraj(l)}</p>
                {l.similar_zh && <p className="text-xs text-gray-500">{locale === 'zh' ? `类似：${l.similar_zh}` : `يشبه: ${l.similar_zh}`}</p>}
              </div>
              <button onClick={() => speakArabic(l.isolated)} className="text-gray-400 hover:text-gray-700"><Volume2 size={18} /></button>
            </div>
          ))}
        </div>
      ) : (
        <button onClick={() => speakArabic(vocab.map(v => v.arabic).join('، '))} className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium" style={{ background: color }}>
          <Volume2 size={18} /> {t.listen}
        </button>
      )}
    </div>,

    // 2. Grammar + Examples
    <div key="g2">
      <p className="text-sm text-gray-700">
        {locale === 'zh'
          ? '提示：阿拉伯语名词分阳性/阴性，动词随人称变化，这些在汉语中没有。'
          : 'ملاحظة: للأسماء تذكير وتأنيث، وتتصرّف الأفعال حسب الضمير — وهذا غير موجود في الصينية.'}
      </p>
      <SubHeading color={color}>{locale === 'ar' ? 'أمثلة' : locale === 'zh' ? '例句' : 'Examples'}</SubHeading>
      {(isLetterLesson ? letters.map(l => ({ a: l.example_word, g: locale === 'zh' ? l.example_meaning_zh : l.example_meaning_en })) : vocab.slice(0, 4).map(v => ({ a: v.arabic, g: gloss(v) }))).map((x, i) => (
        <div key={i} className="flex items-center gap-3 py-1.5" dir="rtl">
          <span className="text-lg font-bold text-gray-900" style={bigArabic}>{x.a}</span>
          <span className="text-sm text-gray-500">— {x.g}</span>
        </div>
      ))}
    </div>,

    // 3. Listening + Shadowing
    <div key="g3">
      <button onClick={() => speakArabic(isLetterLesson ? letters.map(l => l.isolated).join('، ') : vocab.map(v => v.arabic).join('، '))}
        className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium" style={{ background: color }}>
        <Volume2 size={18} /> {t.listen}
      </button>
      <SubHeading color={color}>{locale === 'ar' ? 'الترديد' : locale === 'zh' ? '跟读' : 'Shadowing'}</SubHeading>
      {(isLetterLesson ? letters.map(l => l.isolated) : vocab.slice(0, 4).map(v => v.arabic)).map((s, i) => (
        <div key={i} className="flex items-center gap-3 py-1.5" dir="rtl">
          <button onClick={() => speakArabic(s)} className="text-gray-400 hover:text-gray-700"><Volume2 size={16} /></button>
          <span className="text-xl font-bold text-gray-900" style={bigArabic}>{s}</span>
        </div>
      ))}
    </div>,

    // 4. Reading + Handwriting
    <div key="g4">
      <p className="text-xl leading-loose text-gray-900" style={bigArabic} dir="rtl">
        {(lesson.content_data?.reading as string) || (isLetterLesson ? letters.map(l => l.example_word).join(' — ') : vocab.slice(0, 5).map(v => v.arabic).join(' '))}
      </p>
      <SubHeading color={color}>{locale === 'ar' ? 'الكتابة اليدوية' : locale === 'zh' ? '手写' : 'Handwriting'}</SubHeading>
      <p className="text-sm text-gray-600 mb-2">{t.writePrompt}</p>
      <p className="text-2xl font-bold text-gray-900" style={bigArabic} dir="rtl">
        {isLetterLesson ? letters.map(l => l.isolated).join(' ') : vocab.slice(0, 3).map(v => v.arabic).join(' ')}
      </p>
    </div>,

    // 5. Exercises + Flashcards
    <div key="g5">
      <p className="text-sm text-gray-500 mb-2">{locale === 'zh' ? '练习——不计入成绩。' : 'تدرّب — لا يُحتسب في النتيجة.'}</p>
      {(isLetterLesson ? letters.slice(0, 4).map(l => ({ a: l.isolated, g: lettername(l) })) : vocab.slice(0, 3).map(v => ({ a: v.arabic, g: gloss(v) }))).map((x, i) => (
        <div key={i} className="flex items-center justify-between py-1.5 text-sm" dir="rtl">
          <span className="text-gray-600">{x.g} = ؟</span>
          <span className="font-bold text-gray-900" style={bigArabic}>{x.a}</span>
        </div>
      ))}
      <SubHeading color={color}>{locale === 'ar' ? 'بطاقات' : locale === 'zh' ? '闪卡' : 'Flashcards'}</SubHeading>
      <div className="flex gap-3 overflow-x-auto pb-2" dir="rtl">
        {(isLetterLesson ? letters.map(l => ({ a: l.isolated, s: l.transliteration, g: lettername(l) })) : vocab.map(v => ({ a: v.arabic, s: v.transliteration, g: gloss(v) }))).map((x, i) => (
          <div key={i} className="flex-shrink-0 w-24 h-28 rounded-xl border border-gray-200 flex flex-col items-center justify-center gap-1">
            <span className="text-3xl font-bold text-gray-900" style={bigArabic}>{x.a}</span>
            <span className="text-[10px] text-gray-400">{x.s}</span>
            <span className="text-xs text-gray-500 px-1 text-center">{x.g}</span>
          </div>
        ))}
      </div>
    </div>,

    // 6. Quiz (scored)
    <div key="g6">
      {exercises.map((ex, i) => {
        const q = locale === 'zh' ? ex.question_zh : locale === 'ar' ? ex.question_ar : ex.question_en
        const ca = Array.isArray(ex.correct_answer) ? String(ex.correct_answer[0]) : String(ex.correct_answer)
        const opts = ex.options || (ex.type === 'true_false' ? ['true', 'false'] : [])
        return (
          <div key={i} className="mb-4 last:mb-0">
            <p className="font-medium text-gray-800 mb-2">{i + 1}. {q}</p>
            <div className="grid grid-cols-2 gap-2">
              {opts.map((opt, oi) => {
                const sel = quizAnswers[i] === opt
                const isRight = ca === opt
                let cls = 'border-gray-200 bg-white'
                if (quizChecked) cls = isRight ? 'border-green-400 bg-green-50' : sel ? 'border-red-400 bg-red-50' : 'border-gray-100'
                else if (sel) cls = 'border-blue-400 bg-blue-50'
                const isArOpt = /[ء-ي]/.test(opt)
                const label = ex.type === 'true_false' ? (locale === 'zh' ? (opt === 'true' ? '正确' : '错误') : opt === 'true' ? 'صح' : 'خطأ') : opt
                return (
                  <button key={oi} disabled={quizChecked} onClick={() => setQuizAnswers(p => ({ ...p, [i]: opt }))}
                    className={`p-2.5 rounded-xl border-2 ${cls} transition-all text-sm`} dir={isArOpt ? 'rtl' : 'ltr'}
                    style={isArOpt ? bigArabic : undefined}>{label}</button>
                )
              })}
            </div>
          </div>
        )
      })}
      <button onClick={finish} disabled={saving}
        className="w-full mt-4 py-4 rounded-xl text-white font-bold text-lg disabled:opacity-60 transition-all hover:opacity-90"
        style={{ background: color }}>
        {saving ? t.saving : alreadyCompleted ? t.retake : `${t.finish} (+${lesson.xp_reward} XP)`}
      </button>
    </div>,
  ]

  const totalSections = sectionBodies.length
  const isMenu = activeSection === null

  function openSection(i: number) {
    setActiveSection(i)
    setVisited(prev => new Set(prev).add(i))
  }
  function goNext() {
    if (activeSection === null) return
    if (activeSection + 1 < totalSections) openSection(activeSection + 1)
  }
  function goPrev() {
    if (activeSection === null) return
    if (activeSection > 0) openSection(activeSection - 1)
  }

  const progressPct = Math.round((visited.size / totalSections) * 100)
  const firstUnvisited = labels.findIndex((_, i) => !visited.has(i))

  return (
    <main className="lg:ml-64 flex-1 pb-24" style={{ minHeight: '100vh', background: '#F8F9FF' }} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="px-6 py-4 flex items-center gap-4">
          {isMenu ? (
            <Link href={`/${locale}/levels/${levelId}`} className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
              <ChevronLeft size={18} /><span className="text-sm">{t.back}</span>
            </Link>
          ) : (
            <button onClick={() => setActiveSection(null)} className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
              <ChevronLeft size={18} /><span className="text-sm">{t.menu}</span>
            </button>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium" style={{ color }}>{locale === 'zh' ? lesson.levels?.name_zh : locale === 'ar' ? lesson.levels?.name_ar : lesson.levels?.name_en}</p>
            <p className="font-bold text-gray-800 truncate">{title}</p>
          </div>
          <div className="flex items-center gap-1 text-sm flex-shrink-0">
            <Star size={14} className="text-yellow-500" fill="currentColor" />
            <span className="font-medium text-gray-700">{lesson.xp_reward} XP</span>
          </div>
        </div>
        {/* Overall lesson progress */}
        <div className="h-1.5 bg-gray-100 overflow-hidden">
          <motion.div className="h-full rounded-r-full" style={{ background: color }}
            initial={false} animate={{ width: `${progressPct}%` }} transition={{ duration: 0.4, ease: 'easeOut' }} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-6">
        {alreadyCompleted && (
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl p-4 mb-4">
            <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-green-800">{t.completedBefore}{typeof progress?.score === 'number' ? ` · ${progress.score}%` : ''}</p>
              <p className="text-sm text-green-700">{t.reviewHint}</p>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {isMenu ? (
            <motion.div key="menu" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-bold text-gray-500">{t.menuTitle}</h2>
                <span className="text-xs font-medium text-gray-400">{visited.size}/{totalSections}</span>
              </div>
              <div className="space-y-2.5">
                {labels.map((label, i) => {
                  const isVisited = visited.has(i)
                  const isNext = !isVisited && i === firstUnvisited
                  return (
                    <motion.button key={i} onClick={() => openSection(i)}
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                      whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm transition-shadow text-start"
                      style={{ border: isNext ? `1.5px solid ${color}` : '1px solid #F3F4F6' }}>
                      <span className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: isVisited ? `${color}18` : '#F8F9FF' }}>
                        {SECTION_ICONS[i] || '📄'}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] text-gray-400 font-medium">{i + 1} {t.ofSections} {totalSections}{isNext ? ` · ${locale === 'ar' ? 'التالي' : locale === 'zh' ? '下一个' : 'Next'}` : ''}</p>
                        <p className="font-semibold text-gray-800">{label}</p>
                      </div>
                      {isVisited ? <CheckCircle size={20} style={{ color }} /> : <Circle size={20} className="text-gray-200" />}
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div key={`section-${activeSection}`} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.2 }}>
              {/* Step dots */}
              <div className="flex items-center justify-center gap-1.5 mb-4">
                {labels.map((_, i) => (
                  <button key={i} onClick={() => openSection(i)} aria-label={`Section ${i + 1}`}
                    className="rounded-full transition-all"
                    style={{
                      width: i === activeSection ? 20 : 6, height: 6,
                      background: i === activeSection ? color : visited.has(i) ? `${color}80` : '#E5E7EB',
                    }} />
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0" style={{ background: `${color}18` }}>
                    {SECTION_ICONS[activeSection ?? 0] || '📄'}
                  </span>
                  <h2 className="font-bold text-gray-800 text-lg">{labels[activeSection ?? 0]}</h2>
                </div>
                <div className="pl-10">
                  {sectionBodies[activeSection ?? 0]}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button onClick={goPrev} disabled={(activeSection ?? 0) === 0}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium disabled:opacity-40 hover:bg-gray-50 transition-all">
                  <ChevronRight size={16} className={locale === 'ar' ? '' : 'rotate-180'} />{t.prev}
                </button>
                <p className="text-xs text-gray-400">{(activeSection ?? 0) + 1} {t.ofSections} {totalSections}</p>
                {(activeSection ?? 0) < totalSections - 1 ? (
                  <button onClick={goNext}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white font-medium hover:opacity-90 transition-all" style={{ background: color }}>
                    {t.next}<ChevronRight size={16} className={locale === 'ar' ? 'rotate-180' : ''} />
                  </button>
                ) : (
                  <button onClick={() => setActiveSection(null)}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-all">
                    {t.menu}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
