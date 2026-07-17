// Pre-A1 vocabulary, greetings, and numbers content
// Following 《新编阿拉伯语》 curriculum — lesson sequence for complete beginners

export interface VocabItem {
  arabic: string
  arabic_with_harakat: string
  transliteration: string
  meaning_zh: string
  meaning_en: string
  category: string
  emoji?: string
  example_sentence?: string
  example_meaning_zh?: string
  image_hint?: string   // describes an image if one were shown
}

// ─────────────────────────────────────────────────────────────
//  تحيات وتعارف — Greetings & Introductions (Lesson 3)
// ─────────────────────────────────────────────────────────────
export const PRE_A1_GREETINGS: VocabItem[] = [
  {
    arabic: 'مرحبا', arabic_with_harakat: 'مَرْحَبًا',
    transliteration: 'marḥaban', meaning_zh: '你好', meaning_en: 'Hello / Welcome',
    category: 'greetings', emoji: '👋',
    example_sentence: 'مَرْحَبًا، كَيْفَ حَالُكَ؟',
    example_meaning_zh: '你好，你怎么样？',
  },
  {
    arabic: 'أهلا', arabic_with_harakat: 'أَهْلًا',
    transliteration: 'ahlan', meaning_zh: '你好（热情）', meaning_en: 'Hi / Welcome (warm)',
    category: 'greetings', emoji: '😊',
    example_sentence: 'أَهْلًا وَسَهْلًا!',
    example_meaning_zh: '欢迎欢迎！（热情打招呼）',
  },
  {
    arabic: 'السلام عليكم', arabic_with_harakat: 'اَلسَّلَامُ عَلَيْكُمْ',
    transliteration: 'as-salāmu ʿalaykum', meaning_zh: '愿平安降临你们（伊斯兰问候）', meaning_en: 'Peace be upon you',
    category: 'greetings', emoji: '🕌',
    example_sentence: 'اَلسَّلَامُ عَلَيْكُمْ! — وَعَلَيْكُمُ اَلسَّلَامُ!',
    example_meaning_zh: '愿平安降临你！— 也愿平安降临你！',
  },
  {
    arabic: 'صباح الخير', arabic_with_harakat: 'صَبَاحُ اَلْخَيْرِ',
    transliteration: 'ṣabāḥ al-khayr', meaning_zh: '早上好', meaning_en: 'Good morning',
    category: 'greetings', emoji: '🌅',
    example_sentence: 'صَبَاحُ اَلْخَيْرِ! — صَبَاحُ اَلنُّورِ!',
    example_meaning_zh: '早上好！— 早上好（光明）！',
  },
  {
    arabic: 'مساء الخير', arabic_with_harakat: 'مَسَاءُ اَلْخَيْرِ',
    transliteration: 'masāʾ al-khayr', meaning_zh: '下午好/晚上好', meaning_en: 'Good afternoon/evening',
    category: 'greetings', emoji: '🌆',
    example_sentence: 'مَسَاءُ اَلْخَيْرِ! — مَسَاءُ اَلنُّورِ!',
    example_meaning_zh: '晚上好！— 晚上好（光明）！',
  },
  {
    arabic: 'كيف حالك', arabic_with_harakat: 'كَيْفَ حَالُكَ؟',
    transliteration: 'kayfa ḥāluk?', meaning_zh: '你怎么样？', meaning_en: 'How are you?',
    category: 'greetings', emoji: '❓',
    example_sentence: 'أَنَا بِخَيْرٍ، شُكْرًا! وَأَنْتَ؟',
    example_meaning_zh: '我很好，谢谢！你呢？',
  },
  {
    arabic: 'بخير', arabic_with_harakat: 'بِخَيْرٍ',
    transliteration: 'bi-khayr', meaning_zh: '很好', meaning_en: 'Fine / Good',
    category: 'greetings', emoji: '👍',
    example_sentence: 'أَنَا بِخَيْرٍ، اَلْحَمْدُ لِلَّهِ.',
    example_meaning_zh: '我很好，感谢主。',
  },
  {
    arabic: 'شكرا', arabic_with_harakat: 'شُكْرًا',
    transliteration: 'shukran', meaning_zh: '谢谢', meaning_en: 'Thank you',
    category: 'greetings', emoji: '🙏',
    example_sentence: 'شُكْرًا جَزِيلًا!',
    example_meaning_zh: '非常感谢！',
  },
  {
    arabic: 'عفوا', arabic_with_harakat: 'عَفْوًا',
    transliteration: 'ʿafwan', meaning_zh: '不客气 / 对不起', meaning_en: 'You\'re welcome / Excuse me',
    category: 'greetings', emoji: '😇',
    example_sentence: 'شُكْرًا! — عَفْوًا!',
    example_meaning_zh: '谢谢！— 不客气！',
  },
  {
    arabic: 'مع السلامة', arabic_with_harakat: 'مَعَ اَلسَّلَامَةِ',
    transliteration: 'maʿa as-salāma', meaning_zh: '再见（愿你平安）', meaning_en: 'Goodbye',
    category: 'greetings', emoji: '👋',
    example_sentence: 'إِلَى اَللِّقَاءِ! مَعَ اَلسَّلَامَةِ.',
    example_meaning_zh: '回见！再见。',
  },
  {
    arabic: 'اسمي', arabic_with_harakat: 'اِسْمِي',
    transliteration: 'ismī', meaning_zh: '我的名字是', meaning_en: 'My name is',
    category: 'greetings', emoji: '🏷️',
    example_sentence: 'اِسْمِي مِينْغ. مَا اِسْمُكَ؟',
    example_meaning_zh: '我叫明。你叫什么名字？',
  },
  {
    arabic: 'من أين أنت', arabic_with_harakat: 'مِنْ أَيْنَ أَنْتَ؟',
    transliteration: 'min ayna anta?', meaning_zh: '你从哪里来？', meaning_en: 'Where are you from?',
    category: 'greetings', emoji: '🌍',
    example_sentence: 'أَنَا مِنَ اَلصِّينِ.',
    example_meaning_zh: '我来自中国。',
  },
]

// ─────────────────────────────────────────────────────────────
//  الأرقام — Numbers 0–20 (Lesson 4)
// ─────────────────────────────────────────────────────────────
export const ARABIC_NUMBERS: VocabItem[] = [
  { arabic: '٠', arabic_with_harakat: 'صِفْر', transliteration: 'ṣifr', meaning_zh: '零 (0)', meaning_en: 'Zero', category: 'numbers', emoji: '0️⃣' },
  { arabic: '١', arabic_with_harakat: 'وَاحِد', transliteration: 'wāḥid', meaning_zh: '一 (1)', meaning_en: 'One', category: 'numbers', emoji: '1️⃣' },
  { arabic: '٢', arabic_with_harakat: 'اِثْنَان', transliteration: 'ithnān', meaning_zh: '二 (2)', meaning_en: 'Two', category: 'numbers', emoji: '2️⃣' },
  { arabic: '٣', arabic_with_harakat: 'ثَلَاثَة', transliteration: 'thalātha', meaning_zh: '三 (3)', meaning_en: 'Three', category: 'numbers', emoji: '3️⃣' },
  { arabic: '٤', arabic_with_harakat: 'أَرْبَعَة', transliteration: 'arbaʿa', meaning_zh: '四 (4)', meaning_en: 'Four', category: 'numbers', emoji: '4️⃣' },
  { arabic: '٥', arabic_with_harakat: 'خَمْسَة', transliteration: 'khamsa', meaning_zh: '五 (5)', meaning_en: 'Five', category: 'numbers', emoji: '5️⃣' },
  { arabic: '٦', arabic_with_harakat: 'سِتَّة', transliteration: 'sitta', meaning_zh: '六 (6)', meaning_en: 'Six', category: 'numbers', emoji: '6️⃣' },
  { arabic: '٧', arabic_with_harakat: 'سَبْعَة', transliteration: 'sabʿa', meaning_zh: '七 (7)', meaning_en: 'Seven', category: 'numbers', emoji: '7️⃣' },
  { arabic: '٨', arabic_with_harakat: 'ثَمَانِيَة', transliteration: 'thamāniya', meaning_zh: '八 (8)', meaning_en: 'Eight', category: 'numbers', emoji: '8️⃣' },
  { arabic: '٩', arabic_with_harakat: 'تِسْعَة', transliteration: 'tisʿa', meaning_zh: '九 (9)', meaning_en: 'Nine', category: 'numbers', emoji: '9️⃣' },
  { arabic: '١٠', arabic_with_harakat: 'عَشَرَة', transliteration: 'ʿashara', meaning_zh: '十 (10)', meaning_en: 'Ten', category: 'numbers', emoji: '🔟' },
  { arabic: '١١', arabic_with_harakat: 'أَحَدَ عَشَرَ', transliteration: 'aḥada ʿashar', meaning_zh: '十一 (11)', meaning_en: 'Eleven', category: 'numbers', emoji: '1️⃣1️⃣' },
  { arabic: '١٢', arabic_with_harakat: 'اِثْنَا عَشَرَ', transliteration: 'ithnā ʿashar', meaning_zh: '十二 (12)', meaning_en: 'Twelve', category: 'numbers', emoji: '1️⃣2️⃣' },
  { arabic: '٢٠', arabic_with_harakat: 'عِشْرُون', transliteration: 'ʿishrūn', meaning_zh: '二十 (20)', meaning_en: 'Twenty', category: 'numbers', emoji: '2️⃣0️⃣' },
  { arabic: '١٠٠', arabic_with_harakat: 'مِئَة', transliteration: 'miʾa', meaning_zh: '一百 (100)', meaning_en: 'Hundred', category: 'numbers', emoji: '💯' },
]

// ─────────────────────────────────────────────────────────────
//  مفردات أساسية — Basic Pre-A1 Vocabulary (Lesson 5+)
// ─────────────────────────────────────────────────────────────
export const PRE_A1_VOCAB: VocabItem[] = [
  // People
  { arabic: 'أنا', arabic_with_harakat: 'أَنَا', transliteration: 'anā', meaning_zh: '我', meaning_en: 'I / Me', category: 'pronouns', emoji: '👤' },
  { arabic: 'أنت', arabic_with_harakat: 'أَنْتَ', transliteration: 'anta', meaning_zh: '你（男）', meaning_en: 'You (m)', category: 'pronouns', emoji: '👦' },
  { arabic: 'أنتِ', arabic_with_harakat: 'أَنْتِ', transliteration: 'anti', meaning_zh: '你（女）', meaning_en: 'You (f)', category: 'pronouns', emoji: '👧' },
  { arabic: 'هو', arabic_with_harakat: 'هُوَ', transliteration: 'huwa', meaning_zh: '他', meaning_en: 'He', category: 'pronouns', emoji: '👨' },
  { arabic: 'هي', arabic_with_harakat: 'هِيَ', transliteration: 'hiya', meaning_zh: '她', meaning_en: 'She', category: 'pronouns', emoji: '👩' },
  // Family
  { arabic: 'أب', arabic_with_harakat: 'أَبٌ', transliteration: 'ab', meaning_zh: '父亲', meaning_en: 'Father', category: 'family', emoji: '👨‍👧' },
  { arabic: 'أم', arabic_with_harakat: 'أُمٌّ', transliteration: 'umm', meaning_zh: '母亲', meaning_en: 'Mother', category: 'family', emoji: '👩‍👧' },
  { arabic: 'أخ', arabic_with_harakat: 'أَخٌ', transliteration: 'akh', meaning_zh: '兄弟', meaning_en: 'Brother', category: 'family', emoji: '👦' },
  { arabic: 'أخت', arabic_with_harakat: 'أُخْتٌ', transliteration: 'ukht', meaning_zh: '姐妹', meaning_en: 'Sister', category: 'family', emoji: '👧' },
  // Colors
  { arabic: 'أحمر', arabic_with_harakat: 'أَحْمَرُ', transliteration: 'aḥmar', meaning_zh: '红色', meaning_en: 'Red', category: 'colors', emoji: '🔴' },
  { arabic: 'أزرق', arabic_with_harakat: 'أَزْرَقُ', transliteration: 'azraq', meaning_zh: '蓝色', meaning_en: 'Blue', category: 'colors', emoji: '🔵' },
  { arabic: 'أخضر', arabic_with_harakat: 'أَخْضَرُ', transliteration: 'akhḍar', meaning_zh: '绿色', meaning_en: 'Green', category: 'colors', emoji: '🟢' },
  { arabic: 'أبيض', arabic_with_harakat: 'أَبْيَضُ', transliteration: 'abyaḍ', meaning_zh: '白色', meaning_en: 'White', category: 'colors', emoji: '⚪' },
  { arabic: 'أسود', arabic_with_harakat: 'أَسْوَدُ', transliteration: 'aswad', meaning_zh: '黑色', meaning_en: 'Black', category: 'colors', emoji: '⚫' },
  // Common nouns
  { arabic: 'كتاب', arabic_with_harakat: 'كِتَابٌ', transliteration: 'kitāb', meaning_zh: '书', meaning_en: 'Book', category: 'objects', emoji: '📚' },
  { arabic: 'بيت', arabic_with_harakat: 'بَيْتٌ', transliteration: 'bayt', meaning_zh: '房子', meaning_en: 'House', category: 'objects', emoji: '🏠' },
  { arabic: 'ماء', arabic_with_harakat: 'مَاءٌ', transliteration: 'māʾ', meaning_zh: '水', meaning_en: 'Water', category: 'food', emoji: '💧' },
  { arabic: 'خبز', arabic_with_harakat: 'خُبْزٌ', transliteration: 'khubz', meaning_zh: '面包', meaning_en: 'Bread', category: 'food', emoji: '🍞' },
  // Common adjectives
  { arabic: 'كبير', arabic_with_harakat: 'كَبِيرٌ', transliteration: 'kabīr', meaning_zh: '大', meaning_en: 'Big', category: 'adjectives', emoji: '🐘' },
  { arabic: 'صغير', arabic_with_harakat: 'صَغِيرٌ', transliteration: 'ṣaghīr', meaning_zh: '小', meaning_en: 'Small', category: 'adjectives', emoji: '🐭' },
  { arabic: 'جميل', arabic_with_harakat: 'جَمِيلٌ', transliteration: 'jamīl', meaning_zh: '漂亮', meaning_en: 'Beautiful', category: 'adjectives', emoji: '✨' },
  { arabic: 'جيد', arabic_with_harakat: 'جَيِّدٌ', transliteration: 'jayyid', meaning_zh: '好', meaning_en: 'Good', category: 'adjectives', emoji: '👍' },
]

// ─────────────────────────────────────────────────────────────
//  Pre-A1 lesson plan metadata — used to seed the DB
// ─────────────────────────────────────────────────────────────
export const PRE_A1_LESSON_PLAN = [
  { day_number: 1, lesson_type: 'letters',    title_zh: '字母 ا ب ت ث',           title_ar: 'الحروف: ا ب ت ث',           title_en: 'Letters: ا ب ت ث',        xp_reward: 20, estimated_minutes: 15 },
  { day_number: 2, lesson_type: 'letters',    title_zh: '字母 ج ح خ',              title_ar: 'الحروف: ج ح خ',              title_en: 'Letters: ج ح خ',           xp_reward: 20, estimated_minutes: 15 },
  { day_number: 1, lesson_type: 'harakat',    title_zh: '短元音符号 الحركات',       title_ar: 'الحركات القصيرة',            title_en: 'Harakat (Short Vowels)',   xp_reward: 30, estimated_minutes: 20 },
  { day_number: 3, lesson_type: 'letters',    title_zh: '字母 د ذ ر ز',            title_ar: 'الحروف: د ذ ر ز',            title_en: 'Letters: د ذ ر ز',         xp_reward: 20, estimated_minutes: 15 },
  { day_number: 4, lesson_type: 'letters',    title_zh: '字母 س ش',                title_ar: 'الحروف: س ش',                title_en: 'Letters: س ش',             xp_reward: 15, estimated_minutes: 12 },
  { day_number: 5, lesson_type: 'letters',    title_zh: '强调音 ص ض',              title_ar: 'الأحرف المفخّمة: ص ض',       title_en: 'Emphatic: ص ض',            xp_reward: 25, estimated_minutes: 18 },
  { day_number: 6, lesson_type: 'letters',    title_zh: '强调音 ط ظ',              title_ar: 'الأحرف المفخّمة: ط ظ',       title_en: 'Emphatic: ط ظ',            xp_reward: 25, estimated_minutes: 18 },
  { day_number: 7, lesson_type: 'letters',    title_zh: '咽喉音 ع غ',              title_ar: 'الحروف الحلقية: ع غ',        title_en: 'Pharyngeal: ع غ',          xp_reward: 30, estimated_minutes: 20 },
  { day_number: 8, lesson_type: 'letters',    title_zh: '字母 ف ق ك',              title_ar: 'الحروف: ف ق ك',              title_en: 'Letters: ف ق ك',           xp_reward: 20, estimated_minutes: 15 },
  { day_number: 9, lesson_type: 'letters',    title_zh: '字母 ل م ن',              title_ar: 'الحروف: ل م ن',              title_en: 'Letters: ل م ن',           xp_reward: 20, estimated_minutes: 15 },
  { day_number: 10, lesson_type: 'letters',   title_zh: '最后字母 ه و ي ء',        title_ar: 'الحروف الأخيرة: ه و ي ء',   title_en: 'Final Letters: ه و ي ء',  xp_reward: 20, estimated_minutes: 15 },
  { day_number: 1,  lesson_type: 'greetings', title_zh: '打招呼与自我介绍',         title_ar: 'التحيات والتعارف',           title_en: 'Greetings & Introductions', xp_reward: 25, estimated_minutes: 15 },
  { day_number: 1,  lesson_type: 'numbers',   title_zh: '阿拉伯数字 0–100',         title_ar: 'الأرقام العربية ٠-١٠٠',      title_en: 'Arabic Numbers 0–100',     xp_reward: 25, estimated_minutes: 15 },
  { day_number: 1,  lesson_type: 'vocabulary', title_zh: '基础词汇：人称、颜色',     title_ar: 'المفردات الأساسية',          title_en: 'Core Vocabulary',          xp_reward: 30, estimated_minutes: 20 },
]
