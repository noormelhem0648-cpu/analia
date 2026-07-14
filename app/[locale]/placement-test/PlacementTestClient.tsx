'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle, XCircle, ChevronRight, Award } from 'lucide-react'
import { speakArabic } from '@/lib/tts'

const STORAGE_KEY = 'analia_placement_progress'

const tx = {
  zh: {
    title: '水平测试',
    subtitle: '让我们找到您的阿拉伯语起点！',
    question: '问题',
    of: '/',
    next: '下一题',
    finish: '查看结果',
    result_title: '您的阿拉伯语水平',
    result_sub: '根据您的答案，我们为您推荐以下起点：',
    start_btn: '开始学习',
    skip: '跳过测试（从零开始）',
    score: '得分',
    correct: '正确',
    wrong: '错误答案',
  },
  en: {
    title: 'Placement Test',
    subtitle: "Let's find your Arabic starting point!",
    question: 'Question',
    of: '/',
    next: 'Next',
    finish: 'See Results',
    result_title: 'Your Arabic Level',
    result_sub: 'Based on your answers, we recommend starting at:',
    start_btn: 'Start Learning',
    skip: 'Skip test (start from zero)',
    score: 'Score',
    correct: 'Correct',
    wrong: 'Wrong answer',
  },
  ar: {
    title: 'اختبار تحديد المستوى',
    subtitle: 'لنكتشف مستواك في العربية!',
    question: 'سؤال',
    of: 'من',
    next: 'التالي',
    finish: 'اعرض النتيجة',
    result_title: 'مستواك في العربية',
    result_sub: 'بناءً على إجاباتك، ننصحك بالبدء من:',
    start_btn: 'ابدأ التعلم',
    skip: 'تخطّ الاختبار (ابدأ من الصفر)',
    score: 'النتيجة',
    correct: 'صحيح',
    wrong: 'خطأ',
  },
}

interface Question {
  id: number
  question_ar: string
  question_en: string
  question_zh: string
  options_ar: string[]
  options_en: string[]
  options_zh: string[]
  correct: number
  level: number // 1=pre-a1, 2=a1, 3=a2, 4=b1, 5=b2
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question_ar: 'ما هذا الحرف؟    ب',
    question_en: 'What letter is this?    ب',
    question_zh: '这是什么字母？    ب',
    options_ar: ['با (Ba)', 'تا (Ta)', 'نون (Nun)', 'لام (Lam)'],
    options_en: ['Ba (ب)', 'Ta (ت)', 'Nun (ن)', 'Lam (ل)'],
    options_zh: ['Ba', 'Ta', 'Nun', 'Lam'],
    correct: 0,
    level: 1,
  },
  {
    id: 2,
    question_ar: 'ما معنى كلمة "مرحبا"؟',
    question_en: 'What does "مرحبا" mean?',
    question_zh: '"مرحبا" 是什么意思？',
    options_ar: ['شكراً', 'مرحباً / أهلاً', 'مع السلامة', 'أنا بخير'],
    options_en: ['Thank you', 'Hello / Welcome', 'Goodbye', "I'm fine"],
    options_zh: ['谢谢', '你好 / 欢迎', '再见', '我很好'],
    correct: 1,
    level: 1,
  },
  {
    id: 3,
    question_ar: 'اختر الأرقام الصحيحة بالعربية: 1، 2، 3',
    question_en: 'Choose the correct Arabic numbers: 1, 2, 3',
    question_zh: '选择正确的阿拉伯语数字：1、2、3',
    options_ar: ['واحد، اثنان، ثلاثة', 'خمسة، ستة، سبعة', 'عشرة، تسعة، ثمانية', 'أربعة، ثلاثة، اثنان'],
    options_en: ['One, Two, Three', 'Five, Six, Seven', 'Ten, Nine, Eight', 'Four, Three, Two'],
    options_zh: ['一、二、三', '五、六、七', '十、九、八', '四、三、二'],
    correct: 0,
    level: 2,
  },
  {
    id: 4,
    question_ar: 'ما معنى الجملة: "أنا طالب"؟',
    question_en: 'What does "أنا طالب" mean?',
    question_zh: '"أنا طالب" 是什么意思？',
    options_ar: ['أنا معلم', 'أنا طالب', 'أنا مريض', 'أنا سعيد'],
    options_en: ['I am a teacher', 'I am a student', 'I am sick', 'I am happy'],
    options_zh: ['我是老师', '我是学生', '我生病了', '我很高兴'],
    correct: 1,
    level: 2,
  },
  {
    id: 5,
    question_ar: 'أكمل الجملة: "الكتاب ___ الطاولة"',
    question_en: 'Complete: "الكتاب ___ الطاولة" (The book ___ the table)',
    question_zh: '填空："الكتاب ___ الطاولة"（书___桌子）',
    options_ar: ['في', 'على', 'تحت', 'بين'],
    options_en: ['in', 'on', 'under', 'between'],
    options_zh: ['在...里', '在...上', '在...下', '在...之间'],
    correct: 1,
    level: 3,
  },
  {
    id: 6,
    question_ar: 'ما مؤنث كلمة "طالب"؟',
    question_en: 'What is the feminine of "طالب" (student)?',
    question_zh: '"طالب"（学生）的阴性形式是什么？',
    options_ar: ['طلاب', 'طالبة', 'مدرسة', 'مدرس'],
    options_en: ['طلاب (students)', 'طالبة (female student)', 'مدرسة (school)', 'مدرس (teacher)'],
    options_zh: ['学生们（复数）', '女学生', '学校', '老师'],
    correct: 1,
    level: 3,
  },
  {
    id: 7,
    question_ar: 'أيّ جملة تعبّر عن الماضي؟',
    question_en: 'Which sentence is in the past tense?',
    question_zh: '哪句话是过去时？',
    options_ar: ['أنا أدرس العربية', 'أنا درست العربية', 'سأدرس العربية', 'كنت أدرس العربية'],
    options_en: ['أنا أدرس (I study)', 'أنا درست (I studied)', 'سأدرس (I will study)', 'كنت أدرس (I was studying)'],
    options_zh: ['我学习阿拉伯语（现在）', '我学习了阿拉伯语（过去）', '我将学习阿拉伯语（将来）', '我过去在学习阿拉伯语（过去进行）'],
    correct: 1,
    level: 4,
  },
  {
    id: 8,
    question_ar: 'ما جمع كلمة "كتاب"؟',
    question_en: 'What is the plural of "كتاب" (book)?',
    question_zh: '"كتاب"（书）的复数是什么？',
    options_ar: ['كتابان', 'كتبٌ', 'كتابات', 'كتيب'],
    options_en: ['كتابان (two books)', 'كتب (books)', 'كتابات (writings)', 'كتيب (booklet)'],
    options_zh: ['两本书（双数）', '书籍（复数）', '文章/写作', '小册子'],
    correct: 1,
    level: 4,
  },
  {
    id: 9,
    question_ar: 'ما معنى: "لو كنتُ غنياً لسافرتُ"؟',
    question_en: 'What does "لو كنتُ غنياً لسافرتُ" mean?',
    question_zh: '"لو كنتُ غنياً لسافرتُ" 是什么意思？',
    options_ar: ['أنا أسافر غداً', 'لو كنت ثرياً لسافرت', 'سأكون غنياً', 'السفر ممتع'],
    options_en: ['I will travel tomorrow', 'If I were rich, I would travel', 'I will be rich', 'Travel is fun'],
    options_zh: ['我明天要旅行', '如果我有钱，我就会旅行', '我将会富有', '旅行很有趣'],
    correct: 1,
    level: 5,
  },
  {
    id: 10,
    question_ar: 'أيّ من التالي يعبّر عن أسلوب الشرط؟',
    question_en: 'Which of the following expresses a conditional sentence?',
    question_zh: '以下哪个表达条件句？',
    options_ar: ['ذهبتُ إلى المدرسة', 'إذا درستَ نجحتَ', 'الطقس جميل اليوم', 'أحبّ العربية'],
    options_en: ['I went to school', 'If you study, you will succeed', 'The weather is nice today', 'I love Arabic'],
    options_zh: ['我去学校了', '如果你学习，你会成功', '今天天气很好', '我喜欢阿拉伯语'],
    correct: 1,
    level: 5,
  },
]

const LEVEL_RESULT = [
  { min: 0, max: 2, code: 'pre-a1', name_ar: 'ما قبل A1 — مبتدئ تام', name_en: 'Pre-A1 — Absolute Beginner', name_zh: 'Pre-A1 — 完全初学者', icon: '🌱', color: '#10B981', desc_ar: 'ستتعلم الحروف الأبجدية والأسس من الصفر', desc_en: 'You will learn the alphabet and foundations from scratch', desc_zh: '您将从字母表开始从零学习' },
  { min: 3, max: 4, code: 'a1', name_ar: 'A1 — مبتدئ', name_en: 'A1 — Beginner', name_zh: 'A1 — 初学者', icon: '📘', color: '#3B82F6', desc_ar: 'تعرف بعض الأساسيات وستبني على ذلك', desc_en: 'You know some basics and will build on them', desc_zh: '您了解一些基础知识，将在此基础上继续学习' },
  { min: 5, max: 6, code: 'a2', name_ar: 'A2 — أساسي', name_en: 'A2 — Elementary', name_zh: 'A2 — 基础级', icon: '📗', color: '#8B5CF6', desc_ar: 'مستوى جيد، ستتعلم قواعد أكثر تعقيداً', desc_en: 'Good level, you will learn more complex grammar', desc_zh: '水平不错，您将学习更复杂的语法' },
  { min: 7, max: 8, code: 'b1', name_ar: 'B1 — متوسط', name_en: 'B1 — Intermediate', name_zh: 'B1 — 中级', icon: '📙', color: '#F59E0B', desc_ar: 'مستوى متوسط ممتاز! ستتعلم تراكيب متقدمة', desc_en: 'Excellent intermediate level! You will learn advanced structures', desc_zh: '优秀的中级水平！您将学习高级结构' },
  { min: 9, max: 10, code: 'b2', name_ar: 'B2 — فوق المتوسط', name_en: 'B2 — Upper Intermediate', name_zh: 'B2 — 中高级', icon: '🏆', color: '#EF4444', desc_ar: 'مستوى عالٍ جداً! ستتعمق في الفصحى والأدب', desc_en: 'Very high level! You will dive into formal Arabic and literature', desc_zh: '水平很高！您将深入学习正式阿拉伯语和文学' },
]

function getLevel(score: number) {
  return LEVEL_RESULT.find(l => score >= l.min && score <= l.max) || LEVEL_RESULT[0]
}

interface Props {
  locale: string
}

export default function PlacementTestClient({ locale }: Props) {
  const t = tx[locale as keyof typeof tx] || tx.en
  const router = useRouter()

  const [current, setCurrent] = useState(() => {
    if (typeof window === 'undefined') return 0
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').current || 0 } catch { return 0 }
  })
  const [answers, setAnswers] = useState<number[]>(() => {
    if (typeof window === 'undefined') return []
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').answers || [] } catch { return [] }
  })
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [done, setDone] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!done) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ current, answers })) } catch {}
    }
  }, [current, answers, done])

  const q = QUESTIONS[current]
  const question = locale === 'zh' ? q.question_zh : locale === 'ar' ? q.question_ar : q.question_en
  const options = locale === 'zh' ? q.options_zh : locale === 'ar' ? q.options_ar : q.options_en

  const score = answers.filter((a, i) => a === QUESTIONS[i].correct).length
  const level = getLevel(score)
  const levelName = locale === 'zh' ? level.name_zh : locale === 'ar' ? level.name_ar : level.name_en
  const levelDesc = locale === 'zh' ? level.desc_zh : locale === 'ar' ? level.desc_ar : level.desc_en

  function handleSelect(i: number) {
    if (checked) return
    setSelected(i)
    setChecked(true)
  }

  function handleNext() {
    const newAnswers = [...answers, selected ?? -1]
    setAnswers(newAnswers)
    if (current + 1 >= QUESTIONS.length) {
      setDone(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setChecked(false)
    }
  }

  async function saveAndStart(levelCode: string) {
    setSaving(true)
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
    await fetch('/api/placement-result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level_code: levelCode }),
    })
    router.push(`/${locale}/dashboard`)
  }

  async function skipTest() {
    await fetch('/api/placement-result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level_code: 'pre-a1' }),
    })
    router.push(`/${locale}/dashboard`)
  }

  // Result screen
  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6"
        style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A8E 100%)' }}>
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center">
          <div className="text-6xl mb-4">{level.icon}</div>
          <div className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-medium mb-4"
            style={{ background: level.color }}>
            {t.score}: {score} / {QUESTIONS.length}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.result_title}</h2>
          <p className="text-gray-500 text-sm mb-6">{t.result_sub}</p>

          <div className="rounded-2xl p-6 mb-6 border-2" style={{ borderColor: level.color, background: `${level.color}10` }}>
            <div className="text-3xl font-bold mb-1" style={{ color: level.color }}>{levelName}</div>
            <p className="text-gray-600 text-sm">{levelDesc}</p>
          </div>

          <div className="flex gap-3 mb-2 text-sm text-gray-400">
            {answers.map((a, i) => (
              <span key={i}>{a === QUESTIONS[i].correct ? '✅' : '❌'}</span>
            ))}
          </div>

          <button onClick={() => saveAndStart(level.code)} disabled={saving}
            className="w-full py-3 rounded-xl font-semibold text-white mt-4 transition-all hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${level.color}, ${level.color}cc)` }}>
            <Award size={18} />
            {saving ? '...' : t.start_btn}
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6"
      style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A8E 100%)' }}>
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-4xl" style={{ fontFamily: 'Amiri, serif', color: '#C9A84C' }}>أ</span>
            <h1 className="text-3xl font-bold text-white">ANALIA</h1>
          </div>
          <p className="text-xl font-semibold text-white">{t.title}</p>
          <p className="text-white text-sm mt-1">{t.subtitle}</p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-amber-400 transition-all duration-500"
              style={{ width: `${((current) / QUESTIONS.length) * 100}%` }} />
          </div>
          <span className="text-white text-sm whitespace-nowrap">
            {t.question} {current + 1} {t.of} {QUESTIONS.length}
          </span>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-6">
            <p className="text-lg font-semibold text-gray-800 leading-relaxed"
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
              style={{ fontFamily: locale === 'ar' ? 'Noto Naskh Arabic, Amiri, serif' : 'inherit' }}>
              {question}
            </p>
            {/[؀-ۿ]/.test(q.question_ar) && (
              <button onClick={() => speakArabic(q.question_ar)}
                className="mt-2 text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 mx-auto bg-blue-50 px-3 py-1 rounded-full transition-colors">
                🔊 {locale === 'zh' ? '听发音' : locale === 'ar' ? 'استمع' : 'Listen'}
              </button>
            )}
          </div>

          <div className="space-y-3">
            {options.map((opt, i) => {
              let cls = 'border-2 border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
              if (checked) {
                if (i === q.correct) cls = 'border-2 border-green-400 bg-green-50'
                else if (i === selected) cls = 'border-2 border-red-400 bg-red-50'
                else cls = 'border-2 border-gray-100 bg-gray-50 opacity-50'
              } else if (selected === i) {
                cls = 'border-2 border-blue-400 bg-blue-50'
              }
              return (
                <button key={i} onClick={() => handleSelect(i)}
                  className={`w-full text-left px-5 py-3.5 rounded-2xl transition-all flex items-center justify-between group ${cls}`}
                  dir={locale === 'ar' ? 'rtl' : 'ltr'}>
                  <span className="text-sm font-semibold text-gray-900"
                    style={{ fontFamily: locale === 'ar' ? 'Noto Naskh Arabic, Amiri, serif' : 'inherit' }}>
                    {opt}
                  </span>
                  {checked && i === q.correct && <CheckCircle size={18} className="text-green-500 flex-shrink-0" />}
                  {checked && i === selected && i !== q.correct && <XCircle size={18} className="text-red-500 flex-shrink-0" />}
                </button>
              )
            })}
          </div>

          {checked && (
            <button onClick={handleNext}
              className="w-full mt-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
              {current + 1 >= QUESTIONS.length ? t.finish : t.next}
              <ChevronRight size={18} />
            </button>
          )}
        </div>

        <button onClick={skipTest}
          className="w-full text-center text-blue-100 text-sm mt-4 hover:text-white/80 transition-colors py-2">
          {t.skip}
        </button>
      </div>
    </div>
  )
}
