'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Star, Volume2, CheckCircle, Circle } from 'lucide-react'
import Confetti from '@/components/lesson/Confetti'
import { generateHskExercises, type GeneratedExercise } from '@/lib/generateExercises'
import {
  HSK1_GREETINGS, HSK1_PRONOUNS, HSK1_NUMBERS, HSK1_FAMILY, HSK1_FOOD, HSK1_PLACES, HSK1_VERBS, HSK1_TIME, HSK1_ADJECTIVES, HSK1_QUESTION_WORDS,
  HSK2_DAILY_LIFE, HSK2_WORK_STUDY, HSK2_BODY_HEALTH, HSK2_EMOTIONS, HSK3_SOCIETY, HSK3_CULTURE,
  HSK4_BUSINESS, HSK4_SOCIETY, HSK4_ADVANCED_VERBS, HSK5_ACADEMIC, HSK5_ADVANCED_EXPRESSIONS, HSK6_LITERARY, HSK6_MASTERY,
  PINYIN_INITIALS, PINYIN_FINALS, TONE_GUIDE,
  type HskItem,
} from '@/lib/hskContent'

// Foundation (Pre-A1) lessons teach pinyin/tones, not vocabulary.
// Map the pinyin/tone reference data into the HskItem shape so the viewer can render it.
function foundationItems(titleEn: string): HskItem[] | null {
  const t = (titleEn || '').toLowerCase()
  const isTone = /tone/.test(t)
  const isPinyin = /pinyin|what is chinese|stroke|initial|final/.test(t)
  if (!isTone && !isPinyin) return null
  if (isTone) {
    return TONE_GUIDE.filter(g => g.tone > 0).map(g => ({
      hanzi: g.example_hanzi, pinyin: g.example_pinyin,
      meaning_ar: `${g.name_ar} — ${g.example_meaning}`, meaning_en: g.example_meaning,
      category: 'tones', hsk_level: 0, example_zh: g.example_hanzi, emoji: '🎵',
    }))
  }
  // pinyin initials + a few finals
  return [...PINYIN_INITIALS.slice(0, 6), ...PINYIN_FINALS.slice(0, 2)].map(p => ({
    hanzi: p.example_hanzi, pinyin: p.example_pinyin,
    meaning_ar: `${p.initial || p.final} — ${p.meaning_ar}`, meaning_en: p.meaning_ar,
    category: 'pinyin', hsk_level: 0, example_zh: p.example_hanzi, emoji: '🔤',
  }))
}

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
    back: 'رجوع', finish: 'أنهِ الدرس واكسب النقاط', saving: 'جارٍ الحفظ...', great: 'أحسنت!', xp: 'نقطة',
    listen: 'استمع', of: 'من',
    s: ['الهدف والمحادثة', 'المفردات والحروف', 'النطق والقاعدة', 'الاستماع والترديد', 'القراءة والكتابة', 'تمارين وبطاقات', 'اختبار قصير'],
    next: 'التالي', prev: 'السابق', menu: 'القائمة', backLevel: 'العودة للمستوى', nextLesson: 'الدرس التالي',
    writePrompt: 'اكتب الجملة التالية بيدك على ورقة، ثم قارنها:',
    shadowHint: 'استمع ثم كرّر بصوت عالٍ خلف الصوت.',
    menuTitle: 'أقسام الدرس',
  },
  en: {
    back: 'Back', finish: 'Finish & Earn XP', saving: 'Saving...', great: 'Great job!', xp: 'XP',
    listen: 'Listen', of: 'of',
    s: ['Objective & Dialogue', 'Vocabulary & Characters', 'Pronunciation & Grammar', 'Listening & Shadowing', 'Reading & Writing', 'Exercises & Flashcards', 'Quiz'],
    next: 'Next', prev: 'Previous', menu: 'Menu', backLevel: 'Back to Level', nextLesson: 'Next Lesson',
    writePrompt: 'Write the sentence below by hand, then compare:',
    shadowHint: 'Listen, then repeat aloud right after the audio.',
    menuTitle: 'Lesson Sections',
  },
  zh: {
    back: '返回', finish: '完成并获得XP', saving: '保存中...', great: '太棒了！', xp: 'XP',
    listen: '听', of: '/',
    s: ['目标与对话', '词汇与汉字', '发音与语法', '听力与跟读', '阅读与写作', '练习与闪卡', '测验'],
    next: '下一步', prev: '上一步', menu: '目录', backLevel: '返回关卡', nextLesson: '下一课',
    writePrompt: '请手写下面的句子，然后对照：',
    shadowHint: '先听，然后跟着音频大声重复。',
    menuTitle: '课程内容',
  },
}

const SECTION_ICONS = ['🎯', '📝', '🔊', '🎧', '📖', '🧩', '📋']

// Small inline divider used to separate two merged topics inside one section.
function SubHeading({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3 mt-6 first:mt-0">
      <span className="w-1 h-4 rounded-full flex-shrink-0" style={{ background: color }} />
      <p className="text-xs font-bold uppercase tracking-wide text-gray-500">{children}</p>
    </div>
  )
}

function speak(text: string, lang = 'zh-CN') {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  const u = new SpeechSynthesisUtterance(text)
  u.lang = lang
  u.rate = 0.85
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(u)
}

const TONE_COLORS = ['#DC2626', '#EA580C', '#16A34A', '#2563EB', '#6B7280']

function toneColor(pinyin: string): string {
  if (/[āēīōūǖ]/.test(pinyin)) return TONE_COLORS[0]
  if (/[áéíóúǘ]/.test(pinyin)) return TONE_COLORS[1]
  if (/[ǎěǐǒǔǚ]/.test(pinyin)) return TONE_COLORS[2]
  if (/[àèìòùǜ]/.test(pinyin)) return TONE_COLORS[3]
  return TONE_COLORS[4]
}

// Pick a vocabulary bank for the new zh-* levels based on level + title keywords
function pickVocab(code: string, titleEn: string): HskItem[] {
  const t = (titleEn || '').toLowerCase()
  const kw = (bank: HskItem[], ...keys: string[]) => (keys.some(k => t.includes(k)) ? bank : null)
  if (code === 'zh-pre-a1' || code === 'zh-a1') {
    return kw(HSK1_GREETINGS, 'greet', 'تحية', 'hello') || kw(HSK1_NUMBERS, 'number', 'رقم', 'age', 'عمر')
      || kw(HSK1_FAMILY, 'family', 'عائلة') || kw(HSK1_FOOD, 'food', 'restaurant', 'طعام', 'مطعم')
      || kw(HSK1_PLACES, 'place', 'travel', 'transport', 'سفر', 'مواصلات') || kw(HSK1_TIME, 'time', 'day', 'month', 'وقت', 'أيام')
      || kw(HSK1_VERBS, 'verb', 'hobby', 'هواية') || kw(HSK1_ADJECTIVES, 'weather', 'adjective', 'طقس')
      || kw(HSK1_QUESTION_WORDS, 'question', 'سؤال') || kw(HSK1_PRONOUNS, 'pronoun', 'intro', 'تعارف') || HSK1_GREETINGS
  }
  if (code === 'zh-a2') {
    return kw(HSK2_WORK_STUDY, 'work', 'education', 'عمل', 'تعليم') || kw(HSK2_BODY_HEALTH, 'health', 'صحة')
      || kw(HSK2_EMOTIONS, 'occasion', 'culture', 'مناسبات', 'ثقافة') || HSK2_DAILY_LIFE
  }
  if (code === 'zh-b1') {
    return kw(HSK3_CULTURE, 'culture', 'ثقافة', 'story', 'قصص') || HSK3_SOCIETY
  }
  if (code === 'zh-b2') {
    return kw(HSK4_BUSINESS, 'business', 'econom', 'أعمال', 'اقتصاد') || kw(HSK4_SOCIETY, 'politic', 'society', 'media', 'سياسة', 'إعلام')
      || kw(HSK4_ADVANCED_VERBS, 'verb', 'debate', 'نقاش') || HSK4_BUSINESS
  }
  // zh-c1
  return kw(HSK6_LITERARY, 'liter', 'أدب', 'philosoph', 'فلسفة') || kw(HSK5_ACADEMIC, 'academ', 'research', 'أكاديم', 'بحث')
    || kw(HSK5_ADVANCED_EXPRESSIONS, 'translat', 'rhetoric', 'ترجمة', 'خطابة') || HSK6_MASTERY
}

export default function ZhLessonViewer({ locale, lesson, levelId, nextLessonId, progress }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const color = lesson.levels?.color_primary || '#C9858A'
  const title = locale === 'zh' ? lesson.title_zh : locale === 'ar' ? lesson.title_ar : lesson.title_en
  const desc = locale === 'zh' ? lesson.description_zh : locale === 'ar' ? lesson.description_ar : lesson.description_en
  const cd = useMemo(() => (lesson.content_data || {}) as Record<string, unknown>, [lesson.content_data])

  const vocab = useMemo(() => {
    const fromCd = Array.isArray(cd.vocab) ? (cd.vocab as HskItem[]) : null
    if (fromCd && fromCd.length) return fromCd.slice(0, 8)
    const foundation = foundationItems(lesson.title_en)
    if (foundation && foundation.length) return foundation.slice(0, 8)
    return pickVocab(lesson.levels?.code || 'zh-a1', lesson.title_en).slice(0, 8)
  }, [cd, lesson.levels?.code, lesson.title_en])

  const exercises: GeneratedExercise[] = useMemo(() => generateHskExercises(vocab, 5, locale), [vocab, locale])

  // dialogue: from content_data or built from first vocab items
  const dialogue = (Array.isArray(cd.dialogue) ? cd.dialogue : null) as Array<{ hanzi: string; pinyin: string; meaning_ar?: string; meaning_en?: string }> | null
  const grammar = (cd.grammar as { title?: string; explain_ar?: string; explain_en?: string; example?: string } | undefined)

  const alreadyCompleted = progress?.status === 'completed'
  // Do NOT auto-jump to the done screen for a completed lesson — let the user review/retake.
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

  const meaning = (it: { meaning_ar?: string; meaning_en?: string }) => (locale === 'ar' ? it.meaning_ar : it.meaning_en) || it.meaning_en || it.meaning_ar || ''

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
    setSaving(true)
    setQuizChecked(true)
    const timeSpent = Math.round((Date.now() - startTime.current) / 1000)
    const score = scoreQuiz()
    try {
      await fetch('/api/progress/lesson', {
        method: 'POST', credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        // Don't re-award XP when retaking an already-completed lesson
        body: JSON.stringify({ lesson_id: lesson.id, status: 'completed', score, time_spent_seconds: timeSpent, xp_earned: alreadyCompleted ? 0 : lesson.xp_reward }),
      })
    } catch {}
    setDone(true)
    setConfetti(true)
    setTimeout(() => setConfetti(false), 4000)
    setSaving(false)
  }

  if (done) {
    return (
      <main className="lg:ml-64 flex-1 flex items-center justify-center p-6" style={{ minHeight: '100vh' }}>
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

  const labels = t.s

  // Each merged section as standalone content — rendered one at a time, not stacked.
  const sectionBodies: React.ReactNode[] = [
    // 0. Objective + Short dialogue
    <div key="g0">
      <p className="text-gray-700">{desc || (locale === 'ar' ? 'ستتعلم في هذا الدرس مفردات وقواعد جديدة مع النطق الصحيح.' : locale === 'zh' ? '本课你将学习新词汇、语法与正确发音。' : "You'll learn new vocabulary, grammar and correct pronunciation.")}</p>
      <SubHeading color={color}>{locale === 'ar' ? 'محادثة قصيرة' : locale === 'zh' ? '简短对话' : 'Short Dialogue'}</SubHeading>
      {(dialogue && dialogue.length ? dialogue : vocab.slice(0, 3).map(v => ({ hanzi: v.hanzi, pinyin: v.pinyin, meaning_ar: v.meaning_ar, meaning_en: v.meaning_en }))).map((line, i) => (
        <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
          <button onClick={() => speak(line.hanzi)} className="text-gray-400 hover:text-gray-700"><Volume2 size={18} /></button>
          <div className="flex-1">
            <p className="text-xl font-bold text-gray-900">{line.hanzi}</p>
            <p className="text-sm" style={{ color: toneColor(line.pinyin) }}>{line.pinyin}</p>
          </div>
          <p className="text-sm text-gray-600">{meaning(line)}</p>
        </div>
      ))}
    </div>,

    // 1. Vocabulary + Characters & writing
    <div key="g1">
      <div className="grid sm:grid-cols-2 gap-3">
        {vocab.map((v, i) => (
          <button key={i} onClick={() => speak(v.hanzi)} className="text-start bg-gray-50 rounded-xl p-3 hover:bg-gray-100 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">{v.hanzi}</span>
              <Volume2 size={16} className="text-gray-400" />
            </div>
            <p className="text-sm" style={{ color: toneColor(v.pinyin) }}>{v.pinyin}</p>
            <p className="text-sm text-gray-600">{meaning(v)}</p>
          </button>
        ))}
      </div>
      <SubHeading color={color}>{locale === 'ar' ? 'الحروف والكتابة' : locale === 'zh' ? '汉字与书写' : 'Characters & Writing'}</SubHeading>
      <p className="text-sm text-gray-600 mb-3">{locale === 'ar' ? 'تتبّع ترتيب الشطبات لكل حرف من اليسار لليمين ومن الأعلى للأسفل.' : locale === 'zh' ? '按照笔顺书写：从左到右，从上到下。' : 'Follow stroke order: left→right, top→bottom.'}</p>
      <div className="flex flex-wrap gap-3">
        {vocab.slice(0, 6).map((v, i) => (
          <div key={i} className="w-16 h-16 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-3xl font-bold text-gray-800" style={{ fontFamily: 'serif' }}>{v.hanzi[0]}</div>
        ))}
      </div>
    </div>,

    // 2. Pronunciation + Grammar + More examples
    <div key="g2">
      <div className="flex flex-wrap gap-2 mb-3">
        {['1 ā', '2 á', '3 ǎ', '4 à', '轻 a'].map((tone, i) => (
          <span key={i} className="px-3 py-1.5 rounded-lg text-white text-sm font-bold" style={{ background: TONE_COLORS[i] }}>{tone}</span>
        ))}
      </div>
      <p className="text-sm text-gray-600">{locale === 'ar' ? 'لون كل كلمة يدل على نغمتها الأولى. اضغط لسماع النطق.' : locale === 'zh' ? '颜色代表声调。点击听发音。' : 'Colors indicate the tone. Tap words to hear them.'}</p>
      <SubHeading color={color}>{locale === 'ar' ? 'القاعدة' : locale === 'zh' ? '语法' : 'Grammar'}</SubHeading>
      {grammar ? (
        <div>
          {grammar.title && <p className="font-semibold text-gray-800 mb-1">{grammar.title}</p>}
          <p className="text-gray-700 text-sm">{(locale === 'ar' ? grammar.explain_ar : grammar.explain_en) || grammar.explain_en}</p>
          {grammar.example && <p className="mt-2 text-lg font-bold text-gray-900">{grammar.example}</p>}
        </div>
      ) : (
        <p className="text-gray-700 text-sm">{locale === 'ar' ? 'ترتيب الجملة الصينية الأساسي: الفاعل + الفعل + المفعول (我 + 喜欢 + 中文).' : locale === 'zh' ? '基本语序：主语 + 谓语 + 宾语（我 + 喜欢 + 中文）。' : 'Basic word order: Subject + Verb + Object (我 + 喜欢 + 中文).'}</p>
      )}
      <SubHeading color={color}>{locale === 'ar' ? 'أمثلة إضافية' : locale === 'zh' ? '更多例句' : 'More Examples'}</SubHeading>
      {vocab.slice(0, 4).map((v, i) => (
        <div key={i} className="flex items-center gap-3 py-1.5">
          <span className="text-lg font-bold text-gray-900">{v.hanzi}</span>
          <span className="text-sm" style={{ color: toneColor(v.pinyin) }}>{v.pinyin}</span>
          <span className="text-sm text-gray-500">— {meaning(v)}</span>
        </div>
      ))}
    </div>,

    // 3. Listening + Shadowing
    <div key="g3">
      <button onClick={() => speak(vocab.map(v => v.hanzi).join('，'))} className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium" style={{ background: color }}>
        <Volume2 size={18} /> {t.listen}
      </button>
      <p className="text-sm text-gray-500 mt-2">{locale === 'ar' ? 'استمع لكل المفردات متتابعة.' : locale === 'zh' ? '连续听所有词汇。' : 'Listen to all vocabulary in sequence.'}</p>
      <SubHeading color={color}>{locale === 'ar' ? 'التكرار (Shadowing)' : locale === 'zh' ? '跟读' : 'Shadowing'}</SubHeading>
      <p className="text-sm text-gray-600 mb-3">{t.shadowHint}</p>
      {vocab.slice(0, 4).map((v, i) => (
        <div key={i} className="flex items-center gap-3 py-1.5">
          <button onClick={() => speak(v.hanzi)} className="text-gray-400 hover:text-gray-700"><Volume2 size={16} /></button>
          <span className="text-lg font-bold text-gray-900">{v.hanzi}</span>
          <span className="text-sm" style={{ color: toneColor(v.pinyin) }}>{v.pinyin}</span>
        </div>
      ))}
    </div>,

    // 4. Short reading + Writing
    <div key="g4">
      <p className="text-lg leading-loose text-gray-900">
        {(cd.reading as string) || vocab.slice(0, 5).map(v => v.hanzi).join('，') + '。'}
      </p>
      <SubHeading color={color}>{locale === 'ar' ? 'الكتابة' : locale === 'zh' ? '写作' : 'Writing'}</SubHeading>
      <p className="text-sm text-gray-600 mb-2">{t.writePrompt}</p>
      <p className="text-xl font-bold text-gray-900">{(cd.writing as string) || vocab.slice(0, 3).map(v => v.hanzi).join('')}</p>
    </div>,

    // 5. Exercises + Flashcards
    <div key="g5">
      <p className="text-sm text-gray-500 mb-3">{locale === 'ar' ? 'تدرّب — لن تُحتسب في النتيجة.' : locale === 'zh' ? '练习——不计入成绩。' : 'Practice — not scored.'}</p>
      {vocab.slice(0, 3).map((v, i) => (
        <div key={i} className="flex items-center justify-between py-1.5 text-sm">
          <span className="text-gray-600">{meaning(v)} = ؟</span>
          <span className="font-bold text-gray-900">{v.hanzi}</span>
        </div>
      ))}
      <SubHeading color={color}>{locale === 'ar' ? 'بطاقات المراجعة' : locale === 'zh' ? '闪卡' : 'Flashcards'}</SubHeading>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {vocab.map((v, i) => (
          <div key={i} className="flex-shrink-0 w-24 h-28 rounded-xl border border-gray-200 flex flex-col items-center justify-center gap-1">
            <span className="text-2xl font-bold text-gray-900">{v.hanzi}</span>
            <span className="text-xs" style={{ color: toneColor(v.pinyin) }}>{v.pinyin}</span>
            <span className="text-xs text-gray-500 px-1 text-center">{meaning(v)}</span>
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
                const label = ex.type === 'true_false' ? (locale === 'ar' ? (opt === 'true' ? 'صح' : 'خطأ') : locale === 'zh' ? (opt === 'true' ? '正确' : '错误') : opt) : opt
                return (
                  <button key={oi} disabled={quizChecked} onClick={() => setQuizAnswers(p => ({ ...p, [i]: opt }))}
                    className={`p-2.5 rounded-xl border-2 ${cls} transition-all text-sm`}>{label}</button>
                )
              })}
            </div>
          </div>
        )
      })}
      <button onClick={finish} disabled={saving}
        className="w-full mt-4 py-4 rounded-xl text-white font-bold text-lg disabled:opacity-60 transition-all hover:opacity-90"
        style={{ background: color }}>
        {saving ? t.saving : alreadyCompleted
          ? (locale === 'ar' ? 'إعادة الاختبار وحفظ النتيجة' : locale === 'zh' ? '重新测验并保存成绩' : 'Retake Quiz & Save Score')
          : `${t.finish} (+${lesson.xp_reward} XP)`}
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
      {/* Header */}
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
              <p className="font-semibold text-green-800">
                {locale === 'ar' ? 'أنهيتِ هذا الدرس سابقاً' : locale === 'zh' ? '你已完成本课' : "You've completed this lesson"}
                {typeof progress?.score === 'number' ? ` · ${progress.score}%` : ''}
              </p>
              <p className="text-sm text-green-700">
                {locale === 'ar' ? 'يمكنك مراجعته أو إعادة الاختبار في الأسفل.' : locale === 'zh' ? '你可以复习或在下方重新测验。' : 'Review it, or retake the quiz below.'}
              </p>
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
                        <p className="text-[11px] text-gray-400 font-medium">{i + 1} {t.of} {totalSections}{isNext ? ` · ${locale === 'ar' ? 'التالي' : locale === 'zh' ? '下一个' : 'Next'}` : ''}</p>
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
                <p className="text-xs text-gray-400">{(activeSection ?? 0) + 1} {t.of} {totalSections}</p>
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
