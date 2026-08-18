// ============================================================
// ANALIA — Arabic curriculum for CHINESE speakers (中文母语者学阿拉伯语)
// Tuned to the real difficulties a Chinese learner faces with Arabic:
// connected script, non-Chinese sounds, harakat, gender, dual/plural,
// verb conjugation, root-and-pattern, i'rab.
// Fully separate from the Chinese path (lib/zhCurriculum.ts).
// Level codes reuse existing Arabic levels: pre-a1, a1, a2, b1, b2, c1
// ============================================================

export interface ArLesson {
  title_ar: string
  title_en: string
  title_zh: string
  type: 'letters' | 'vocabulary' | 'grammar' | 'listening' | 'conversation' | 'reading' | 'writing' | 'review'
}
export interface ArUnit {
  code: string
  title_ar: string
  title_en: string
  title_zh: string
  icon: string
  lessons: ArLesson[]
}
export interface ArLevel {
  code: string
  units: ArUnit[]
}

// Standard 5-lesson pattern for A1..C1 units
function five(ar: string, en: string, zh: string): ArLesson[] {
  return [
    { title_ar: `المفردات — ${ar}`, title_en: `Vocabulary — ${en}`, title_zh: `词汇 — ${zh}`, type: 'vocabulary' },
    { title_ar: `القواعد والمحادثة — ${ar}`, title_en: `Grammar & Conversation — ${en}`, title_zh: `语法与会话 — ${zh}`, type: 'grammar' },
    { title_ar: `الاستماع والقراءة — ${ar}`, title_en: `Listening & Reading — ${en}`, title_zh: `听力与阅读 — ${zh}`, type: 'listening' },
    { title_ar: `الكتابة — ${ar}`, title_en: `Writing — ${en}`, title_zh: `写作 — ${zh}`, type: 'writing' },
    { title_ar: `المراجعة والاختبار — ${ar}`, title_en: `Review & Quiz — ${en}`, title_zh: `复习与测验 — ${zh}`, type: 'review' },
  ]
}
function unit(levelCode: string, idx: number, icon: string, ar: string, en: string, zh: string): ArUnit {
  return { code: `${levelCode}-u${idx}`, title_ar: ar, title_en: en, title_zh: zh, icon, lessons: five(ar, en, zh) }
}

// ---------- Pre-A1 (4 units × 10 = 40) — Arabic-specific foundation ----------
const PRE_A1_UNITS: ArUnit[] = [
  {
    code: 'ar-pre-a1-u1', icon: '🔤',
    title_ar: 'الأبجدية العربية (١)', title_en: 'Arabic Alphabet (1)', title_zh: '阿拉伯字母（一）',
    lessons: [
      { title_ar: 'الحروف: ا ب ت ث', title_en: 'Letters: alif–thaa', title_zh: '字母：ا ب ت ث', type: 'letters' },
      { title_ar: 'الحروف: ج ح خ', title_en: 'Letters: jeem–khaa', title_zh: '字母：ج ح خ', type: 'letters' },
      { title_ar: 'الحروف: د ذ ر ز', title_en: 'Letters: daal–zaay', title_zh: '字母：د ذ ر ز', type: 'letters' },
      { title_ar: 'الحروف: س ش ص ض', title_en: 'Letters: seen–daad', title_zh: '字母：س ش ص ض', type: 'letters' },
      { title_ar: 'الحروف: ط ظ ع غ', title_en: 'Letters: taa–ghayn', title_zh: '字母：ط ظ ع غ', type: 'letters' },
      { title_ar: 'الحروف: ف ق ك ل', title_en: 'Letters: faa–laam', title_zh: '字母：ف ق ك ل', type: 'letters' },
      { title_ar: 'الحروف: م ن ه و ي', title_en: 'Letters: meem–yaa', title_zh: '字母：م ن ه و ي', type: 'letters' },
      { title_ar: 'أشكال الحرف: أول ووسط وآخر', title_en: 'Letter forms: initial/medial/final', title_zh: '字形：词首/中/尾', type: 'letters' },
      { title_ar: 'اتصال الحروف', title_en: 'Connecting letters', title_zh: '字母连写', type: 'writing' },
      { title_ar: 'اختبار الوحدة', title_en: 'Unit Test', title_zh: '单元测验', type: 'review' },
    ],
  },
  {
    code: 'ar-pre-a1-u2', icon: '✍️',
    title_ar: 'الكتابة والتشكيل', title_en: 'Writing & Harakat', title_zh: '书写与音符',
    lessons: [
      { title_ar: 'كتابة الحروف باليد', title_en: 'Handwriting letters', title_zh: '手写字母', type: 'writing' },
      { title_ar: 'الحركات: الفتحة والكسرة والضمة', title_en: 'Harakat: fatha/kasra/damma', title_zh: '短元音 فتحة/كسرة/ضمة', type: 'letters' },
      { title_ar: 'السكون', title_en: 'Sukoon', title_zh: '静符 سكون', type: 'letters' },
      { title_ar: 'الشدّة', title_en: 'Shadda', title_zh: '叠音符 شدّة', type: 'letters' },
      { title_ar: 'التنوين (ً ٍ ٌ)', title_en: 'Tanwin (nunation)', title_zh: '鼻音符 تنوين', type: 'letters' },
      { title_ar: 'المدّ الطويل (ا و ي)', title_en: 'Long vowels (madd)', title_zh: '长元音 مدّ', type: 'letters' },
      { title_ar: 'التاء المربوطة ة', title_en: 'Taa marbuta', title_zh: '闭塔 ة（阴性标志）', type: 'letters' },
      { title_ar: 'الحروف الشمسية والقمرية', title_en: 'Sun & moon letters', title_zh: '太阳字母与月亮字母', type: 'grammar' },
      { title_ar: 'قراءة كلمات بسيطة', title_en: 'Reading simple words', title_zh: '拼读简单词', type: 'reading' },
      { title_ar: 'اختبار الوحدة', title_en: 'Unit Test', title_zh: '单元测验', type: 'review' },
    ],
  },
  {
    code: 'ar-pre-a1-u3', icon: '🗣️',
    title_ar: 'النطق: الأصوات الصعبة', title_en: 'Pronunciation: Hard Sounds', title_zh: '发音：难点音',
    lessons: [
      { title_ar: 'أصوات لا مثيل لها في الصينية', title_en: 'Sounds not in Chinese', title_zh: '汉语中没有的音', type: 'letters' },
      { title_ar: 'التمييز: س / ص', title_en: 'Contrast: seen / saad', title_zh: '辨音：س / ص', type: 'listening' },
      { title_ar: 'التمييز: د / ض', title_en: 'Contrast: daal / daad', title_zh: '辨音：د / ض', type: 'listening' },
      { title_ar: 'التمييز: ت / ط', title_en: 'Contrast: taa / Taa', title_zh: '辨音：ت / ط', type: 'listening' },
      { title_ar: 'التمييز: ه / ح', title_en: 'Contrast: haa / Haa', title_zh: '辨音：ه / ح', type: 'listening' },
      { title_ar: 'التمييز: ك / ق', title_en: 'Contrast: kaaf / qaaf', title_zh: '辨音：ك / ق', type: 'listening' },
      { title_ar: 'التمييز: ع / أ', title_en: 'Contrast: ayn / hamza', title_zh: '辨音：ع / أ', type: 'listening' },
      { title_ar: 'مراجعة الأصوات', title_en: 'Sounds review', title_zh: '发音复习', type: 'review' },
      { title_ar: 'قراءة صوتية', title_en: 'Phonetic reading', title_zh: '语音朗读', type: 'reading' },
      { title_ar: 'اختبار النطق', title_en: 'Pronunciation Test', title_zh: '发音测验', type: 'review' },
    ],
  },
  {
    code: 'ar-pre-a1-u4', icon: '👋',
    title_ar: 'أول محادثة', title_en: 'First Conversation', title_zh: '第一次对话',
    lessons: [
      { title_ar: 'السلام والتحية', title_en: 'Greetings', title_zh: '问候', type: 'conversation' },
      { title_ar: 'الاسم والتعريف بالنفس', title_en: 'Name & introductions', title_zh: '姓名与自我介绍', type: 'conversation' },
      { title_ar: 'البلد والجنسية', title_en: 'Country & nationality', title_zh: '国家与国籍', type: 'vocabulary' },
      { title_ar: 'الأرقام ٠–١٠', title_en: 'Numbers 0–10', title_zh: '数字 ٠–١٠', type: 'vocabulary' },
      { title_ar: 'الأسرة', title_en: 'Family', title_zh: '家庭', type: 'vocabulary' },
      { title_ar: 'الوقت واليوم', title_en: 'Time & day', title_zh: '时间与日期', type: 'vocabulary' },
      { title_ar: 'مراجعة', title_en: 'Review', title_zh: '复习', type: 'review' },
      { title_ar: 'محادثة قصيرة', title_en: 'Short dialogue', title_zh: '简短对话', type: 'conversation' },
      { title_ar: 'قراءة قصيرة', title_en: 'Short reading', title_zh: '短文阅读', type: 'reading' },
      { title_ar: 'اختبار الوحدة', title_en: 'Unit Test', title_zh: '单元测验', type: 'review' },
    ],
  },
]

// ---------- A1 (8 × 5 = 40) ----------
const A1_UNITS: ArUnit[] = [
  unit('ar-a1', 1, '🏠', 'المنزل', 'The Home', '家'),
  unit('ar-a1', 2, '🎓', 'الجامعة', 'University', '大学'),
  unit('ar-a1', 3, '🍽️', 'المطعم', 'The Restaurant', '餐厅'),
  unit('ar-a1', 4, '🛒', 'السوق', 'The Market', '市场'),
  unit('ar-a1', 5, '🏥', 'المستشفى', 'The Hospital', '医院'),
  unit('ar-a1', 6, '🚕', 'المواصلات', 'Transport', '交通'),
  unit('ar-a1', 7, '⚽', 'الهوايات', 'Hobbies', '爱好'),
  unit('ar-a1', 8, '🌤️', 'الطقس', 'Weather', '天气'),
]

// ---------- A2 (6 × 5 = 30) ----------
const A2_UNITS: ArUnit[] = [
  unit('ar-a2', 1, '✈️', 'السفر', 'Travel', '旅行'),
  unit('ar-a2', 2, '💼', 'العمل', 'Work', '工作'),
  unit('ar-a2', 3, '🎭', 'الثقافة', 'Culture', '文化'),
  unit('ar-a2', 4, '🎨', 'الفن', 'Art', '艺术'),
  unit('ar-a2', 5, '📰', 'الأخبار السهلة', 'Easy News', '简易新闻'),
  unit('ar-a2', 6, '✉️', 'كتابة الرسائل', 'Letter Writing', '书信写作'),
]

// ---------- B1 (5 × 5 = 25) ----------
const B1_UNITS: ArUnit[] = [
  unit('ar-b1', 1, '💬', 'النقاش', 'Discussion', '讨论'),
  unit('ar-b1', 2, '📖', 'القصص', 'Stories', '故事'),
  unit('ar-b1', 3, '📝', 'كتابة الفقرات', 'Paragraph Writing', '段落写作'),
  unit('ar-b1', 4, '📡', 'الإعلام', 'Media', '媒体'),
  unit('ar-b1', 5, '💻', 'التكنولوجيا', 'Technology', '科技'),
]

// ---------- B2 (5 × 5 = 25) ----------
const B2_UNITS: ArUnit[] = [
  unit('ar-b2', 1, '📄', 'المقالات', 'Essays', '文章'),
  unit('ar-b2', 2, '📚', 'الأدب', 'Literature', '文学'),
  unit('ar-b2', 3, '📈', 'الاقتصاد', 'Economy', '经济'),
  unit('ar-b2', 4, '🏛️', 'السياسة', 'Politics', '政治'),
  unit('ar-b2', 5, '🗂️', 'كتابة التقارير', 'Report Writing', '报告写作'),
]

// ---------- C1 (5 × 5 = 25) ----------
const C1_UNITS: ArUnit[] = [
  unit('ar-c1', 1, '🎤', 'البلاغة', 'Rhetoric', '修辞'),
  unit('ar-c1', 2, '🗞️', 'الصحافة', 'Journalism', '新闻'),
  unit('ar-c1', 3, '🕌', 'القرآن والشعر (اختياري)', 'Quran & Poetry (optional)', '古兰经与诗歌（选修）'),
  unit('ar-c1', 4, '🎓', 'الكتابة الأكاديمية', 'Academic Writing', '学术写作'),
  unit('ar-c1', 5, '⚖️', 'المناظرات', 'Debates', '辩论'),
]

export const AR_CURRICULUM: ArLevel[] = [
  { code: 'pre-a1', units: PRE_A1_UNITS },
  { code: 'a1', units: A1_UNITS },
  { code: 'a2', units: A2_UNITS },
  { code: 'b1', units: B1_UNITS },
  { code: 'b2', units: B2_UNITS },
  { code: 'c1', units: C1_UNITS },
]

export const AR_TOTALS = AR_CURRICULUM.reduce(
  (acc, lvl) => {
    acc.units += lvl.units.length
    acc.lessons += lvl.units.reduce((s, u) => s + u.lessons.length, 0)
    return acc
  },
  { units: 0, lessons: 0 },
)
