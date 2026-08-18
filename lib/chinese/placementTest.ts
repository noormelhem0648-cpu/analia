// ============================================================
// Chinese placement test — for Arabic speakers learning Mandarin.
// Fully separate from the Arabic placement test.
// Difficulty ramps: pinyin/tones → basic hanzi → grammar → reading.
// ============================================================

export interface ZhPlacementQuestion {
  id: number
  /** difficulty band: 1=pre-a1 … 5=b2 */
  band: number
  prompt_ar: string
  prompt_en: string
  prompt_zh: string
  options: string[]
  correct: number // index into options
  hint_ar?: string
}

export interface ZhLevelResult {
  min: number
  max: number
  code: string // zh-* level code
  name_ar: string
  name_en: string
  name_zh: string
  icon: string
  color: string
  desc_ar: string
  desc_en: string
  desc_zh: string
}

export const CHINESE_PLACEMENT_QUESTIONS: ZhPlacementQuestion[] = [
  // Band 1 — pinyin & tones
  {
    id: 1, band: 1,
    prompt_ar: 'ما هو نطق كلمة 你好 (مرحباً)؟', prompt_en: 'How is 你好 (hello) pronounced?', prompt_zh: '你好 怎么读？',
    options: ['nǐ hǎo', 'wǒ shì', 'zài jiàn', 'xiè xie'], correct: 0,
    hint_ar: '你 = أنت، 好 = جيد',
  },
  {
    id: 2, band: 1,
    prompt_ar: 'أي رمز يدل على النغمة الثالثة (المنخفضة الصاعدة)؟', prompt_en: 'Which mark shows the 3rd tone (dipping)?', prompt_zh: '哪个是第三声？',
    options: ['ā', 'á', 'ǎ', 'à'], correct: 2,
  },
  // Band 2 — basic hanzi meaning
  {
    id: 3, band: 2,
    prompt_ar: 'ماذا يعني الحرف 我؟', prompt_en: 'What does 我 mean?', prompt_zh: '“我” 是什么意思？',
    options: ['أنت', 'أنا', 'هو', 'نحن'], correct: 1,
  },
  {
    id: 4, band: 2,
    prompt_ar: 'ما الرقم 三؟', prompt_en: 'What number is 三?', prompt_zh: '“三” 是几？',
    options: ['1', '2', '3', '5'], correct: 2,
  },
  // Band 3 — simple sentence / grammar
  {
    id: 5, band: 3,
    prompt_ar: 'أكمل: 我 ___ 学生 (أنا طالب)', prompt_en: 'Complete: 我 ___ 学生 (I am a student)', prompt_zh: '我 ___ 学生',
    options: ['是', '有', '在', '不'], correct: 0,
  },
  {
    id: 6, band: 3,
    prompt_ar: 'ما معنى الجملة 我喜欢中国菜؟', prompt_en: 'What does 我喜欢中国菜 mean?', prompt_zh: '“我喜欢中国菜” 的意思？',
    options: ['أدرس الصينية', 'أحب الطعام الصيني', 'أزور الصين', 'أتكلم الصينية'], correct: 1,
  },
  // Band 4 — intermediate
  {
    id: 7, band: 4,
    prompt_ar: 'اختر الأداة الصحيحة: 你 ___ 去过北京吗؟ (هل سبق أن ذهبت؟)', prompt_en: 'Choose the aspect particle: 你 ___ 去过北京吗?', prompt_zh: '你 ___ 去过北京吗？',
    options: ['了', '有', '过', '在'], correct: 2,
  },
  {
    id: 8, band: 4,
    prompt_ar: 'ما معنى 虽然...但是...؟', prompt_en: 'What does 虽然…但是… express?', prompt_zh: '“虽然…但是…” 表示什么？',
    options: ['السبب', 'مع أنّ... لكن', 'الشرط', 'الزمن'], correct: 1,
  },
  // Band 5 — upper intermediate
  {
    id: 9, band: 5,
    prompt_ar: 'اختر الأقرب لمعنى 经济发展', prompt_en: 'Closest meaning of 经济发展?', prompt_zh: '“经济发展” 的意思？',
    options: ['التطور الاقتصادي', 'النظام السياسي', 'التبادل الثقافي', 'التقدم العلمي'], correct: 0,
  },
  {
    id: 10, band: 5,
    prompt_ar: 'ما وظيفة 无论...都... في الجملة؟', prompt_en: 'Role of 无论…都… ?', prompt_zh: '“无论…都…” 的作用？',
    options: ['المقارنة', 'مهما... فإنّ (تعميم)', 'التتابع', 'النتيجة'], correct: 1,
  },
]

export const ZH_LEVELS: ZhLevelResult[] = [
  { min: 0, max: 2, code: 'zh-pre-a1', name_ar: 'Pre-A1 — التأسيس', name_en: 'Pre-A1 — Foundation', name_zh: '入门', icon: '🀄', color: '#DC2626', desc_ar: 'ستبدأ من البينيين والنغمات وأول الكلمات', desc_en: 'Start from pinyin, tones and first words', desc_zh: '从拼音、声调和第一批词汇开始' },
  { min: 3, max: 4, code: 'zh-a1', name_ar: 'A1 — المبتدئ', name_en: 'A1 — Beginner', name_zh: '初级', icon: '🏮', color: '#EA580C', desc_ar: 'أساسك جيد! ستتعلم المحادثات اليومية', desc_en: 'Good base! Daily conversations await', desc_zh: '基础不错！进入日常会话' },
  { min: 5, max: 6, code: 'zh-a2', name_ar: 'A2 — أساسي', name_en: 'A2 — Elementary', name_zh: '基础', icon: '🎋', color: '#D97706', desc_ar: 'ممتاز! ستوسّع مفرداتك ومواقفك', desc_en: 'Great! Broaden vocabulary & situations', desc_zh: '很好！扩展词汇与场景' },
  { min: 7, max: 8, code: 'zh-b1', name_ar: 'B1 — متوسط', name_en: 'B1 — Intermediate', name_zh: '中级', icon: '🐉', color: '#16A34A', desc_ar: 'مستوى متوسط قوي! ستعبّر عن الآراء وتسرد', desc_en: 'Strong intermediate! Opinions & storytelling', desc_zh: '中级扎实！表达观点与叙述' },
  { min: 9, max: 10, code: 'zh-b2', name_ar: 'B2 — متوسط متقدم', name_en: 'B2 — Upper Intermediate', name_zh: '中高级', icon: '🏯', color: '#0284C7', desc_ar: 'مستوى عالٍ جداً! الأعمال والإعلام والمجتمع', desc_en: 'Very high! Business, media & society', desc_zh: '很高！商务、媒体与社会' },
]

export function getChineseLevel(score: number): ZhLevelResult {
  return ZH_LEVELS.find(l => score >= l.min && score <= l.max) || ZH_LEVELS[0]
}
