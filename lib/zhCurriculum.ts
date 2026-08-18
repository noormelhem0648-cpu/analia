// ============================================================
// ANALIA — Full Chinese (Mandarin) Curriculum for Arabic speakers
// Source of truth: Levels → Units → Lessons
// 6 levels · 63 units · 330 lessons
// ============================================================

export interface CurriculumLesson {
  title_ar: string
  title_en: string
  title_zh: string
  /** primary skill/type for icon + exercise generation */
  type: 'letters' | 'vocabulary' | 'grammar' | 'listening' | 'conversation' | 'reading' | 'writing' | 'review'
}

export interface CurriculumUnit {
  code: string
  title_ar: string
  title_en: string
  title_zh: string
  icon: string
  lessons: CurriculumLesson[]
}

export interface CurriculumLevel {
  code: string
  lessons: CurriculumUnit[]
}

// Standard 5-lesson pattern used by every unit in A1..C1
function standardFive(unitAr: string, unitEn: string, unitZh: string): CurriculumLesson[] {
  return [
    { title_ar: `المفردات والحروف — ${unitAr}`, title_en: `Vocabulary & Characters — ${unitEn}`, title_zh: `词汇与汉字 — ${unitZh}`, type: 'vocabulary' },
    { title_ar: `القاعدة والمحادثة — ${unitAr}`, title_en: `Grammar & Conversation — ${unitEn}`, title_zh: `语法与会话 — ${unitZh}`, type: 'grammar' },
    { title_ar: `الاستماع والقراءة — ${unitAr}`, title_en: `Listening & Reading — ${unitEn}`, title_zh: `听力与阅读 — ${unitZh}`, type: 'listening' },
    { title_ar: `الكتابة والتمارين — ${unitAr}`, title_en: `Writing & Practice — ${unitEn}`, title_zh: `写作与练习 — ${unitZh}`, type: 'writing' },
    { title_ar: `المراجعة والاختبار — ${unitAr}`, title_en: `Review & Quiz — ${unitEn}`, title_zh: `复习与测验 — ${unitZh}`, type: 'review' },
  ]
}

// Build a unit that uses the standard 5-lesson pattern
function unit(levelCode: string, idx: number, icon: string, ar: string, en: string, zh: string): CurriculumUnit {
  return {
    code: `${levelCode}-u${idx}`,
    title_ar: ar, title_en: en, title_zh: zh, icon,
    lessons: standardFive(ar, en, zh),
  }
}

// ---------- Pre-A1 (3 units × 10 = 30) — explicit lessons ----------
const PRE_A1_UNITS: CurriculumUnit[] = [
  {
    code: 'zh-pre-a1-u1', icon: '🔤',
    title_ar: 'أساسيات اللغة', title_en: 'Language Basics', title_zh: '语言基础',
    lessons: [
      { title_ar: 'ما هي الصينية؟', title_en: 'What is Chinese?', title_zh: '什么是汉语？', type: 'letters' },
      { title_ar: 'نظام Pinyin', title_en: 'The Pinyin System', title_zh: '拼音系统', type: 'letters' },
      { title_ar: 'النغمة الأولى', title_en: 'First Tone', title_zh: '第一声', type: 'letters' },
      { title_ar: 'النغمة الثانية', title_en: 'Second Tone', title_zh: '第二声', type: 'letters' },
      { title_ar: 'النغمة الثالثة', title_en: 'Third Tone', title_zh: '第三声', type: 'letters' },
      { title_ar: 'النغمة الرابعة', title_en: 'Fourth Tone', title_zh: '第四声', type: 'letters' },
      { title_ar: 'النغمة المحايدة', title_en: 'Neutral Tone', title_zh: '轻声', type: 'letters' },
      { title_ar: 'دمج النغمات', title_en: 'Combining Tones', title_zh: '声调组合', type: 'listening' },
      { title_ar: 'ترتيب كتابة الحروف', title_en: 'Stroke Order', title_zh: '笔顺', type: 'writing' },
      { title_ar: 'اختبار الوحدة', title_en: 'Unit Test', title_zh: '单元测验', type: 'review' },
    ],
  },
  {
    code: 'zh-pre-a1-u2', icon: '🗣️',
    title_ar: 'أول محادثة', title_en: 'First Conversation', title_zh: '第一次对话',
    lessons: [
      { title_ar: 'التحية', title_en: 'Greetings', title_zh: '问候', type: 'conversation' },
      { title_ar: 'التعارف', title_en: 'Introductions', title_zh: '自我介绍', type: 'conversation' },
      { title_ar: 'الأرقام', title_en: 'Numbers', title_zh: '数字', type: 'vocabulary' },
      { title_ar: 'العمر', title_en: 'Age', title_zh: '年龄', type: 'vocabulary' },
      { title_ar: 'الجنسية', title_en: 'Nationality', title_zh: '国籍', type: 'vocabulary' },
      { title_ar: 'اللغات', title_en: 'Languages', title_zh: '语言', type: 'vocabulary' },
      { title_ar: 'الوداع', title_en: 'Farewells', title_zh: '告别', type: 'conversation' },
      { title_ar: 'مراجعة', title_en: 'Review', title_zh: '复习', type: 'review' },
      { title_ar: 'قصة قصيرة', title_en: 'Short Story', title_zh: '小故事', type: 'reading' },
      { title_ar: 'اختبار', title_en: 'Test', title_zh: '测验', type: 'review' },
    ],
  },
  {
    code: 'zh-pre-a1-u3', icon: '🏠',
    title_ar: 'الحياة اليومية', title_en: 'Daily Life', title_zh: '日常生活',
    lessons: [
      { title_ar: 'العائلة', title_en: 'Family', title_zh: '家庭', type: 'vocabulary' },
      { title_ar: 'الطعام', title_en: 'Food', title_zh: '食物', type: 'vocabulary' },
      { title_ar: 'الوقت', title_en: 'Time', title_zh: '时间', type: 'vocabulary' },
      { title_ar: 'الأيام', title_en: 'Days', title_zh: '星期', type: 'vocabulary' },
      { title_ar: 'الأشهر', title_en: 'Months', title_zh: '月份', type: 'vocabulary' },
      { title_ar: 'المنزل', title_en: 'The Home', title_zh: '房子', type: 'vocabulary' },
      { title_ar: 'المدرسة', title_en: 'School', title_zh: '学校', type: 'vocabulary' },
      { title_ar: 'مراجعة', title_en: 'Review', title_zh: '复习', type: 'review' },
      { title_ar: 'قراءة', title_en: 'Reading', title_zh: '阅读', type: 'reading' },
      { title_ar: 'اختبار', title_en: 'Test', title_zh: '测验', type: 'review' },
    ],
  },
]

// ---------- A1 (8 units × 5 = 40) ----------
const A1_UNITS: CurriculumUnit[] = [
  unit('zh-a1', 1, '🏠', 'الحياة اليومية', 'Daily Life', '日常生活'),
  unit('zh-a1', 2, '🛍️', 'التسوق', 'Shopping', '购物'),
  unit('zh-a1', 3, '🍜', 'المطعم', 'The Restaurant', '餐厅'),
  unit('zh-a1', 4, '🎓', 'الجامعة', 'University', '大学'),
  unit('zh-a1', 5, '🚌', 'المواصلات', 'Transport', '交通'),
  unit('zh-a1', 6, '🌦️', 'الطقس', 'Weather', '天气'),
  unit('zh-a1', 7, '⚽', 'الهوايات', 'Hobbies', '爱好'),
  unit('zh-a1', 8, '✈️', 'السفر', 'Travel', '旅行'),
]

// ---------- A2 (10 units × 5 = 50) ----------
const A2_UNITS: CurriculumUnit[] = [
  unit('zh-a2', 1, '💼', 'العمل', 'Work', '工作'),
  unit('zh-a2', 2, '🏥', 'الصحة', 'Health', '健康'),
  unit('zh-a2', 3, '🏨', 'الفندق', 'The Hotel', '酒店'),
  unit('zh-a2', 4, '🛫', 'المطار', 'The Airport', '机场'),
  unit('zh-a2', 5, '🎉', 'المناسبات', 'Occasions', '节日'),
  unit('zh-a2', 6, '🏙️', 'المدينة', 'The City', '城市'),
  unit('zh-a2', 7, '🌐', 'الإنترنت', 'The Internet', '网络'),
  unit('zh-a2', 8, '📚', 'التعليم', 'Education', '教育'),
  unit('zh-a2', 9, '🎭', 'الثقافة', 'Culture', '文化'),
  unit('zh-a2', 10, '🔁', 'مراجعة شاملة', 'Comprehensive Review', '综合复习'),
]

// ---------- B1 (12 units × 5 = 60) ----------
const B1_UNITS: CurriculumUnit[] = [
  unit('zh-b1', 1, '📖', 'سرد القصص', 'Storytelling', '叙述'),
  unit('zh-b1', 2, '💭', 'التعبير عن الرأي', 'Expressing Opinions', '表达观点'),
  unit('zh-b1', 3, '🏮', 'الثقافة الصينية', 'Chinese Culture', '中国文化'),
  unit('zh-b1', 4, '👔', 'الوظائف', 'Careers', '职业'),
  unit('zh-b1', 5, '💻', 'التكنولوجيا', 'Technology', '科技'),
  unit('zh-b1', 6, '📰', 'الأخبار', 'The News', '新闻'),
  unit('zh-b1', 7, '🌱', 'البيئة', 'The Environment', '环境'),
  unit('zh-b1', 8, '🧭', 'السفر المتقدم', 'Advanced Travel', '深度旅行'),
  unit('zh-b1', 9, '❤️', 'العلاقات', 'Relationships', '人际关系'),
  unit('zh-b1', 10, '✉️', 'كتابة الرسائل', 'Letter Writing', '书信写作'),
  unit('zh-b1', 11, '🏃', 'الصحة والرياضة', 'Health & Sport', '健康与运动'),
  unit('zh-b1', 12, '💰', 'المال والتسوق', 'Money & Shopping', '金钱与购物'),
]

// ---------- B2 (14 units × 5 = 70) ----------
const B2_UNITS: CurriculumUnit[] = [
  unit('zh-b2', 1, '📈', 'الاقتصاد', 'The Economy', '经济'),
  unit('zh-b2', 2, '🏛️', 'السياسة', 'Politics', '政治'),
  unit('zh-b2', 3, '🤝', 'الأعمال', 'Business', '商务'),
  unit('zh-b2', 4, '📡', 'الإعلام', 'Media', '媒体'),
  unit('zh-b2', 5, '🩺', 'الصحة', 'Health', '医疗'),
  unit('zh-b2', 6, '🎓', 'الجامعات', 'Universities', '高等教育'),
  unit('zh-b2', 7, '⚖️', 'النقاش', 'Debate', '辩论'),
  unit('zh-b2', 8, '📝', 'المقالات', 'Essays', '文章'),
  unit('zh-b2', 9, '🎬', 'الأفلام', 'Film', '电影'),
  unit('zh-b2', 10, '📚', 'الأدب', 'Literature', '文学'),
  unit('zh-b2', 11, '🔬', 'العلوم', 'Science', '科学'),
  unit('zh-b2', 12, '🏺', 'التاريخ', 'History', '历史'),
  unit('zh-b2', 13, '🎨', 'الفنون', 'The Arts', '艺术'),
  unit('zh-b2', 14, '📜', 'القانون', 'Law', '法律'),
]

// ---------- C1 (16 units × 5 = 80) ----------
const C1_UNITS: CurriculumUnit[] = [
  unit('zh-c1', 1, '📚', 'الأدب', 'Literature', '文学'),
  unit('zh-c1', 2, '🏺', 'التاريخ', 'History', '历史'),
  unit('zh-c1', 3, '🧠', 'الفلسفة', 'Philosophy', '哲学'),
  unit('zh-c1', 4, '🔬', 'البحث العلمي', 'Scientific Research', '科学研究'),
  unit('zh-c1', 5, '📊', 'العروض التقديمية', 'Presentations', '演讲'),
  unit('zh-c1', 6, '🔄', 'الترجمة', 'Translation', '翻译'),
  unit('zh-c1', 7, '⚖️', 'المناظرات', 'Debates', '辩论'),
  unit('zh-c1', 8, '✍️', 'كتابة المقالات', 'Essay Writing', '论文写作'),
  unit('zh-c1', 9, '🎓', 'الصينية الأكاديمية', 'Academic Chinese', '学术汉语'),
  unit('zh-c1', 10, '🏆', 'مشروع التخرج', 'Capstone Project', '毕业项目'),
  unit('zh-c1', 11, '📈', 'الاقتصاد المتقدم', 'Advanced Economics', '高级经济'),
  unit('zh-c1', 12, '🌍', 'العلاقات الدولية', 'International Relations', '国际关系'),
  unit('zh-c1', 13, '📰', 'الإعلام والصحافة', 'Media & Journalism', '媒体与新闻'),
  unit('zh-c1', 14, '🚀', 'التكنولوجيا والابتكار', 'Tech & Innovation', '科技与创新'),
  unit('zh-c1', 15, '🎭', 'الثقافة المعاصرة', 'Contemporary Culture', '当代文化'),
  unit('zh-c1', 16, '🎤', 'الخطابة', 'Rhetoric', '修辞'),
]

export const ZH_CURRICULUM: CurriculumLevel[] = [
  { code: 'zh-pre-a1', lessons: PRE_A1_UNITS },
  { code: 'zh-a1', lessons: A1_UNITS },
  { code: 'zh-a2', lessons: A2_UNITS },
  { code: 'zh-b1', lessons: B1_UNITS },
  { code: 'zh-b2', lessons: B2_UNITS },
  { code: 'zh-c1', lessons: C1_UNITS },
]

// quick self-check counts (used by generator)
export const ZH_TOTALS = ZH_CURRICULUM.reduce(
  (acc, lvl) => {
    acc.units += lvl.lessons.length
    acc.lessons += lvl.lessons.reduce((s, u) => s + u.lessons.length, 0)
    return acc
  },
  { units: 0, lessons: 0 },
)
