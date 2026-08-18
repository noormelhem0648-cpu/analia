// ============================================================
// ANALIA: HSK Vocabulary Content for Arabic Speakers Learning Chinese
// Real HSK curriculum with accurate Arabic meanings
// ============================================================

export interface HskItem {
  hanzi: string
  pinyin: string
  meaning_ar: string
  meaning_en: string
  category: string
  hsk_level: number
  example_ar?: string
  example_zh?: string
  stroke_count?: number
  emoji?: string
}

export interface PinyinLesson {
  initial?: string
  final?: string
  tone: number
  example_hanzi: string
  example_pinyin: string
  meaning_ar: string
  audio_hint_ar: string
}

// ============================================================
// PINYIN REFERENCE DATA
// ============================================================

export const PINYIN_INITIALS: PinyinLesson[] = [
  { initial: 'b', tone: 1, example_hanzi: '爸', example_pinyin: 'bà', meaning_ar: 'أب', audio_hint_ar: 'مثل حرف "ب" في العربية' },
  { initial: 'p', tone: 2, example_hanzi: '朋', example_pinyin: 'péng', meaning_ar: 'صديق', audio_hint_ar: 'مثل "ب" مع نفخ هواء قوي' },
  { initial: 'm', tone: 1, example_hanzi: '妈', example_pinyin: 'mā', meaning_ar: 'أم', audio_hint_ar: 'مثل حرف "م" في العربية' },
  { initial: 'f', tone: 1, example_hanzi: '飞', example_pinyin: 'fēi', meaning_ar: 'يطير', audio_hint_ar: 'مثل حرف "ف" في العربية' },
  { initial: 'd', tone: 4, example_hanzi: '大', example_pinyin: 'dà', meaning_ar: 'كبير', audio_hint_ar: 'مثل حرف "د" لكن غير مُلتهب' },
  { initial: 't', tone: 2, example_hanzi: '头', example_pinyin: 'tóu', meaning_ar: 'رأس', audio_hint_ar: 'مثل "ت" مع نفخ هواء' },
  { initial: 'n', tone: 3, example_hanzi: '你', example_pinyin: 'nǐ', meaning_ar: 'أنت', audio_hint_ar: 'مثل حرف "ن" في العربية' },
  { initial: 'l', tone: 4, example_hanzi: '来', example_pinyin: 'lái', meaning_ar: 'يأتي', audio_hint_ar: 'مثل حرف "ل" في العربية' },
  { initial: 'g', tone: 1, example_hanzi: '高', example_pinyin: 'gāo', meaning_ar: 'طويل/مرتفع', audio_hint_ar: 'مثل "ك" لكن من الحلق' },
  { initial: 'k', tone: 3, example_hanzi: '口', example_pinyin: 'kǒu', meaning_ar: 'فم', audio_hint_ar: 'مثل "ك" مع نفخ هواء' },
  { initial: 'h', tone: 3, example_hanzi: '好', example_pinyin: 'hǎo', meaning_ar: 'جيد', audio_hint_ar: 'مثل "خ" في العربية' },
  { initial: 'j', tone: 1, example_hanzi: '家', example_pinyin: 'jiā', meaning_ar: 'بيت/عائلة', audio_hint_ar: 'مثل "ج" لكن أمامي أكثر' },
  { initial: 'q', tone: 3, example_hanzi: '钱', example_pinyin: 'qián', meaning_ar: 'مال', audio_hint_ar: 'مثل "تش" مع نفخ' },
  { initial: 'x', tone: 4, example_hanzi: '下', example_pinyin: 'xià', meaning_ar: 'تحت', audio_hint_ar: 'مثل "ش" ناعمة وأمامية' },
  { initial: 'zh', tone: 1, example_hanzi: '中', example_pinyin: 'zhōng', meaning_ar: 'وسط/صين', audio_hint_ar: 'مثل "ج" المُلتوية' },
  { initial: 'ch', tone: 2, example_hanzi: '吃', example_pinyin: 'chī', meaning_ar: 'يأكل', audio_hint_ar: 'مثل "تش" ملتوية مع نفخ' },
  { initial: 'sh', tone: 2, example_hanzi: '是', example_pinyin: 'shì', meaning_ar: 'هو/يكون', audio_hint_ar: 'مثل "ش" ملتوية' },
  { initial: 'r', tone: 2, example_hanzi: '热', example_pinyin: 'rè', meaning_ar: 'حار', audio_hint_ar: 'مزيج بين "ر" و "ج" ملتوية' },
  { initial: 'z', tone: 4, example_hanzi: '字', example_pinyin: 'zì', meaning_ar: 'حرف/كلمة', audio_hint_ar: 'مثل "ز" أمامية' },
  { initial: 'c', tone: 2, example_hanzi: '词', example_pinyin: 'cí', meaning_ar: 'مفردة', audio_hint_ar: 'مثل "تس" مع نفخ' },
  { initial: 's', tone: 4, example_hanzi: '四', example_pinyin: 'sì', meaning_ar: 'أربعة', audio_hint_ar: 'مثل حرف "س" في العربية' },
]

export const PINYIN_FINALS: PinyinLesson[] = [
  { final: 'a', tone: 1, example_hanzi: '啊', example_pinyin: 'ā', meaning_ar: 'آه!', audio_hint_ar: 'مثل "آ" الطويلة' },
  { final: 'o', tone: 1, example_hanzi: '哦', example_pinyin: 'ó', meaning_ar: 'أوه!', audio_hint_ar: 'مثل "و" المستديرة' },
  { final: 'e', tone: 2, example_hanzi: '呢', example_pinyin: 'né', meaning_ar: 'ماذا عن...؟', audio_hint_ar: 'مثل "ع" ممزوجة بـ"أ"' },
  { final: 'i', tone: 4, example_hanzi: '一', example_pinyin: 'yī', meaning_ar: 'واحد', audio_hint_ar: 'مثل "إي" الطويلة' },
  { final: 'u', tone: 3, example_hanzi: '五', example_pinyin: 'wǔ', meaning_ar: 'خمسة', audio_hint_ar: 'مثل "أو" المستديرة' },
  { final: 'ü', tone: 3, example_hanzi: '鱼', example_pinyin: 'yú', meaning_ar: 'سمكة', audio_hint_ar: '"إي" مع شفاه مستديرة' },
]

export const TONE_GUIDE = [
  { tone: 0, name_ar: 'النغمة المحايدة / الساكنة', symbol: '·', description_ar: 'قصيرة وخفيفة بدون ضغط', example_pinyin: 'ma', example_hanzi: '吗', example_meaning: 'أداة استفهام' },
  { tone: 1, name_ar: 'النغمة الأولى - المستوية', symbol: 'ā', description_ar: 'مرتفعة وثابتة مثل الغناء بنبرة ثابتة', example_pinyin: 'māo', example_hanzi: '猫', example_meaning: 'قطة' },
  { tone: 2, name_ar: 'النغمة الثانية - الصاعدة', symbol: 'á', description_ar: 'ترتفع مثل سؤال "هاه؟"', example_pinyin: 'máng', example_hanzi: '忙', example_meaning: 'مشغول' },
  { tone: 3, name_ar: 'النغمة الثالثة - المنخفضة', symbol: 'ǎ', description_ar: 'تنزل ثم ترتفع مثل "هممم؟"', example_pinyin: 'wǒ', example_hanzi: '我', example_meaning: 'أنا' },
  { tone: 4, name_ar: 'النغمة الرابعة - الهابطة', symbol: 'à', description_ar: 'تنزل بشدة مثل الأمر أو الغضب', example_pinyin: 'dà', example_hanzi: '大', example_meaning: 'كبير' },
]

// ============================================================
// HSK 1 VOCABULARY
// ============================================================

export const HSK1_GREETINGS: HskItem[] = [
  { hanzi: '你好', pinyin: 'nǐ hǎo', meaning_ar: 'مرحباً', meaning_en: 'Hello', category: 'greetings', hsk_level: 1, example_zh: '你好！我叫明。', example_ar: 'مرحباً! اسمي مينغ.', emoji: '👋' },
  { hanzi: '您好', pinyin: 'nín hǎo', meaning_ar: 'مرحباً (للاحترام)', meaning_en: 'Hello (formal)', category: 'greetings', hsk_level: 1, example_zh: '您好，老师！', example_ar: 'مرحباً أستاذ!', emoji: '🙏' },
  { hanzi: '再见', pinyin: 'zài jiàn', meaning_ar: 'مع السلامة', meaning_en: 'Goodbye', category: 'greetings', hsk_level: 1, example_zh: '明天再见！', example_ar: 'إلى اللقاء غداً!', emoji: '👋' },
  { hanzi: '谢谢', pinyin: 'xiè xiè', meaning_ar: 'شكراً', meaning_en: 'Thank you', category: 'greetings', hsk_level: 1, example_zh: '谢谢你！', example_ar: 'شكراً لك!', emoji: '🙏' },
  { hanzi: '不客气', pinyin: 'bú kè qì', meaning_ar: 'على الرحب', meaning_en: "You're welcome", category: 'greetings', hsk_level: 1, example_zh: '谢谢！— 不客气。', example_ar: 'شكراً! — على الرحب.', emoji: '😊' },
  { hanzi: '对不起', pinyin: 'duì bù qǐ', meaning_ar: 'آسف / عذراً', meaning_en: 'Sorry / Excuse me', category: 'greetings', hsk_level: 1, example_zh: '对不起，我来晚了。', example_ar: 'آسف، لقد تأخرت.', emoji: '😔' },
  { hanzi: '没关系', pinyin: 'méi guān xi', meaning_ar: 'لا بأس', meaning_en: "It's okay / Never mind", category: 'greetings', hsk_level: 1, example_zh: '没关系，我等你。', example_ar: 'لا بأس، سأنتظرك.', emoji: '🤗' },
  { hanzi: '请', pinyin: 'qǐng', meaning_ar: 'من فضلك / تفضل', meaning_en: 'Please / Invite', category: 'greetings', hsk_level: 1, example_zh: '请坐！', example_ar: 'تفضل بالجلوس!', emoji: '🪑' },
  { hanzi: '好', pinyin: 'hǎo', meaning_ar: 'جيد / حسناً', meaning_en: 'Good / OK', category: 'greetings', hsk_level: 1, stroke_count: 6, example_zh: '好，我去。', example_ar: 'حسناً، سأذهب.', emoji: '👍' },
  { hanzi: '是', pinyin: 'shì', meaning_ar: 'نعم / هو / يكون', meaning_en: 'Yes / Is / Am / Are', category: 'greetings', hsk_level: 1, stroke_count: 9, example_zh: '是的，我是学生。', example_ar: 'نعم، أنا طالب.', emoji: '✅' },
  { hanzi: '不', pinyin: 'bù', meaning_ar: 'لا / ليس', meaning_en: 'No / Not', category: 'greetings', hsk_level: 1, stroke_count: 4, example_zh: '我不去。', example_ar: 'لن أذهب.', emoji: '❌' },
  { hanzi: '呢', pinyin: 'ne', meaning_ar: 'ماذا عن...؟', meaning_en: 'And you? / What about...?', category: 'greetings', hsk_level: 1, example_zh: '我很好，你呢？', example_ar: 'أنا بخير، وأنت؟', emoji: '🤔' },
  { hanzi: '吗', pinyin: 'ma', meaning_ar: 'أداة الاستفهام', meaning_en: 'Question particle', category: 'greetings', hsk_level: 1, example_zh: '你好吗？', example_ar: 'هل أنت بخير؟', emoji: '❓' },
  { hanzi: '嗯', pinyin: 'ń / ňg', meaning_ar: 'همم / آه (موافقة)', meaning_en: 'Mm-hmm / Uh-huh', category: 'greetings', hsk_level: 1, example_zh: '嗯，我明白。', example_ar: 'آه، أفهم.', emoji: '💭' },
  { hanzi: '早上好', pinyin: 'zǎo shang hǎo', meaning_ar: 'صباح الخير', meaning_en: 'Good morning', category: 'greetings', hsk_level: 1, example_zh: '早上好！今天天气很好。', example_ar: 'صباح الخير! الطقس جميل اليوم.', emoji: '🌅' },
]

export const HSK1_PRONOUNS: HskItem[] = [
  { hanzi: '我', pinyin: 'wǒ', meaning_ar: 'أنا', meaning_en: 'I / me', category: 'pronouns', hsk_level: 1, stroke_count: 7, example_zh: '我是学生。', example_ar: 'أنا طالب.', emoji: '👤' },
  { hanzi: '你', pinyin: 'nǐ', meaning_ar: 'أنت', meaning_en: 'You (singular)', category: 'pronouns', hsk_level: 1, stroke_count: 7, example_zh: '你叫什么名字？', example_ar: 'ما اسمك؟', emoji: '👉' },
  { hanzi: '您', pinyin: 'nín', meaning_ar: 'أنت (احترام)', meaning_en: 'You (respectful)', category: 'pronouns', hsk_level: 1, stroke_count: 11, example_zh: '您是老师吗？', example_ar: 'هل أنت أستاذ؟', emoji: '🎩' },
  { hanzi: '他', pinyin: 'tā', meaning_ar: 'هو', meaning_en: 'He / him', category: 'pronouns', hsk_level: 1, stroke_count: 5, example_zh: '他是我的朋友。', example_ar: 'هو صديقي.', emoji: '👨' },
  { hanzi: '她', pinyin: 'tā', meaning_ar: 'هي', meaning_en: 'She / her', category: 'pronouns', hsk_level: 1, stroke_count: 6, example_zh: '她是我的老师。', example_ar: 'هي أستاذتي.', emoji: '👩' },
  { hanzi: '它', pinyin: 'tā', meaning_ar: 'هو/هي (لغير العاقل)', meaning_en: 'It', category: 'pronouns', hsk_level: 1, stroke_count: 5, example_zh: '它是一只猫。', example_ar: 'إنها قطة.', emoji: '🐱' },
  { hanzi: '我们', pinyin: 'wǒ men', meaning_ar: 'نحن', meaning_en: 'We / us', category: 'pronouns', hsk_level: 1, example_zh: '我们是朋友。', example_ar: 'نحن أصدقاء.', emoji: '👥' },
  { hanzi: '你们', pinyin: 'nǐ men', meaning_ar: 'أنتم', meaning_en: 'You (plural)', category: 'pronouns', hsk_level: 1, example_zh: '你们好！', example_ar: 'مرحباً بكم!', emoji: '👋' },
  { hanzi: '他们', pinyin: 'tā men', meaning_ar: 'هم', meaning_en: 'They (masc.)', category: 'pronouns', hsk_level: 1, example_zh: '他们是学生。', example_ar: 'هم طلاب.', emoji: '👨‍👨‍👦' },
  { hanzi: '她们', pinyin: 'tā men', meaning_ar: 'هن', meaning_en: 'They (fem.)', category: 'pronouns', hsk_level: 1, example_zh: '她们很漂亮。', example_ar: 'هن جميلات.', emoji: '👩‍👩‍👧' },
  { hanzi: '这', pinyin: 'zhè', meaning_ar: 'هذا / هذه', meaning_en: 'This', category: 'pronouns', hsk_level: 1, stroke_count: 7, example_zh: '这是我的书。', example_ar: 'هذا كتابي.', emoji: '👇' },
  { hanzi: '那', pinyin: 'nà', meaning_ar: 'ذلك / تلك', meaning_en: 'That', category: 'pronouns', hsk_level: 1, stroke_count: 6, example_zh: '那是什么？', example_ar: 'ما ذلك؟', emoji: '👉' },
]

export const HSK1_NUMBERS: HskItem[] = [
  { hanzi: '零', pinyin: 'líng', meaning_ar: 'صفر', meaning_en: 'Zero', category: 'numbers', hsk_level: 1, stroke_count: 13, example_zh: '我有零个苹果。', example_ar: 'ليس لدي أي تفاحة.', emoji: '0️⃣' },
  { hanzi: '一', pinyin: 'yī', meaning_ar: 'واحد', meaning_en: 'One', category: 'numbers', hsk_level: 1, stroke_count: 1, example_zh: '我有一个苹果。', example_ar: 'عندي تفاحة واحدة.', emoji: '1️⃣' },
  { hanzi: '二', pinyin: 'èr', meaning_ar: 'اثنان', meaning_en: 'Two', category: 'numbers', hsk_level: 1, stroke_count: 2, example_zh: '我有两个朋友。', example_ar: 'عندي صديقان.', emoji: '2️⃣' },
  { hanzi: '三', pinyin: 'sān', meaning_ar: 'ثلاثة', meaning_en: 'Three', category: 'numbers', hsk_level: 1, stroke_count: 3, example_zh: '三个学生。', example_ar: 'ثلاثة طلاب.', emoji: '3️⃣' },
  { hanzi: '四', pinyin: 'sì', meaning_ar: 'أربعة', meaning_en: 'Four', category: 'numbers', hsk_level: 1, stroke_count: 5, example_zh: '四只猫。', example_ar: 'أربعة قطط.', emoji: '4️⃣' },
  { hanzi: '五', pinyin: 'wǔ', meaning_ar: 'خمسة', meaning_en: 'Five', category: 'numbers', hsk_level: 1, stroke_count: 4, example_zh: '五本书。', example_ar: 'خمسة كتب.', emoji: '5️⃣' },
  { hanzi: '六', pinyin: 'liù', meaning_ar: 'ستة', meaning_en: 'Six', category: 'numbers', hsk_level: 1, stroke_count: 4, example_zh: '六个人。', example_ar: 'ستة أشخاص.', emoji: '6️⃣' },
  { hanzi: '七', pinyin: 'qī', meaning_ar: 'سبعة', meaning_en: 'Seven', category: 'numbers', hsk_level: 1, stroke_count: 2, example_zh: '七天一周。', example_ar: 'سبعة أيام في الأسبوع.', emoji: '7️⃣' },
  { hanzi: '八', pinyin: 'bā', meaning_ar: 'ثمانية', meaning_en: 'Eight', category: 'numbers', hsk_level: 1, stroke_count: 2, example_zh: '八点钟。', example_ar: 'الساعة الثامنة.', emoji: '8️⃣' },
  { hanzi: '九', pinyin: 'jiǔ', meaning_ar: 'تسعة', meaning_en: 'Nine', category: 'numbers', hsk_level: 1, stroke_count: 2, example_zh: '九个月。', example_ar: 'تسعة أشهر.', emoji: '9️⃣' },
  { hanzi: '十', pinyin: 'shí', meaning_ar: 'عشرة', meaning_en: 'Ten', category: 'numbers', hsk_level: 1, stroke_count: 2, example_zh: '十个学生。', example_ar: 'عشرة طلاب.', emoji: '🔟' },
  { hanzi: '百', pinyin: 'bǎi', meaning_ar: 'مئة', meaning_en: 'Hundred', category: 'numbers', hsk_level: 1, stroke_count: 6, example_zh: '一百元。', example_ar: 'مئة يوان.', emoji: '💯' },
  { hanzi: '千', pinyin: 'qiān', meaning_ar: 'ألف', meaning_en: 'Thousand', category: 'numbers', hsk_level: 1, stroke_count: 3, example_zh: '一千个字。', example_ar: 'ألف كلمة.', emoji: '💫' },
  { hanzi: '万', pinyin: 'wàn', meaning_ar: 'عشرة آلاف', meaning_en: 'Ten thousand', category: 'numbers', hsk_level: 1, stroke_count: 3, example_zh: '一万元。', example_ar: 'عشرة آلاف يوان.', emoji: '🔢' },
  { hanzi: '两', pinyin: 'liǎng', meaning_ar: 'اثنان (مع أسماء)', meaning_en: 'Two (with measure words)', category: 'numbers', hsk_level: 1, stroke_count: 7, example_zh: '两个人。', example_ar: 'شخصان.', emoji: '✌️' },
]

export const HSK1_FAMILY: HskItem[] = [
  { hanzi: '爸爸', pinyin: 'bà ba', meaning_ar: 'أبي / البابا', meaning_en: 'Dad / Father', category: 'family', hsk_level: 1, example_zh: '我爸爸是医生。', example_ar: 'أبي طبيب.', emoji: '👨' },
  { hanzi: '妈妈', pinyin: 'mā ma', meaning_ar: 'أمي / الماما', meaning_en: 'Mom / Mother', category: 'family', hsk_level: 1, example_zh: '妈妈做饭很好吃。', example_ar: 'طبخ أمي لذيذ.', emoji: '👩' },
  { hanzi: '哥哥', pinyin: 'gē ge', meaning_ar: 'الأخ الأكبر', meaning_en: 'Older brother', category: 'family', hsk_level: 1, example_zh: '我哥哥在大学学习。', example_ar: 'أخي الأكبر يدرس في الجامعة.', emoji: '👦' },
  { hanzi: '弟弟', pinyin: 'dì di', meaning_ar: 'الأخ الأصغر', meaning_en: 'Younger brother', category: 'family', hsk_level: 1, example_zh: '我弟弟七岁。', example_ar: 'أخي الأصغر عمره سبع سنوات.', emoji: '👶' },
  { hanzi: '姐姐', pinyin: 'jiě jiě', meaning_ar: 'الأخت الكبرى', meaning_en: 'Older sister', category: 'family', hsk_level: 1, example_zh: '姐姐很漂亮。', example_ar: 'أختي الكبرى جميلة.', emoji: '👧' },
  { hanzi: '妹妹', pinyin: 'mèi mei', meaning_ar: 'الأخت الصغرى', meaning_en: 'Younger sister', category: 'family', hsk_level: 1, example_zh: '妹妹喜欢唱歌。', example_ar: 'أختي الصغرى تحب الغناء.', emoji: '👶' },
  { hanzi: '爷爷', pinyin: 'yé ye', meaning_ar: 'الجد (من الأب)', meaning_en: 'Paternal grandfather', category: 'family', hsk_level: 1, example_zh: '爷爷七十岁了。', example_ar: 'جدي عمره سبعون عاماً.', emoji: '👴' },
  { hanzi: '奶奶', pinyin: 'nǎi nai', meaning_ar: 'الجدة (من الأب)', meaning_en: 'Paternal grandmother', category: 'family', hsk_level: 1, example_zh: '奶奶做的饺子很好吃。', example_ar: 'فطائر جدتي لذيذة.', emoji: '👵' },
  { hanzi: '朋友', pinyin: 'péng yǒu', meaning_ar: 'صديق', meaning_en: 'Friend', category: 'family', hsk_level: 1, stroke_count: 10, example_zh: '他是我最好的朋友。', example_ar: 'هو أعز أصدقائي.', emoji: '🤝' },
  { hanzi: '老师', pinyin: 'lǎo shī', meaning_ar: 'أستاذ / معلم', meaning_en: 'Teacher', category: 'family', hsk_level: 1, example_zh: '我的老师很好。', example_ar: 'أستاذي رائع.', emoji: '👨‍🏫' },
]

export const HSK1_FOOD: HskItem[] = [
  { hanzi: '饭', pinyin: 'fàn', meaning_ar: 'طعام / أرز مطبوخ', meaning_en: 'Rice / meal', category: 'food', hsk_level: 1, stroke_count: 7, example_zh: '我喜欢吃饭。', example_ar: 'أنا أحب الأكل.', emoji: '🍚' },
  { hanzi: '水', pinyin: 'shuǐ', meaning_ar: 'ماء', meaning_en: 'Water', category: 'food', hsk_level: 1, stroke_count: 4, example_zh: '我要一杯水。', example_ar: 'أريد كوب ماء.', emoji: '💧' },
  { hanzi: '茶', pinyin: 'chá', meaning_ar: 'شاي', meaning_en: 'Tea', category: 'food', hsk_level: 1, stroke_count: 9, example_zh: '中国人喜欢喝茶。', example_ar: 'الصينيون يحبون شرب الشاي.', emoji: '🍵' },
  { hanzi: '咖啡', pinyin: 'kā fēi', meaning_ar: 'قهوة', meaning_en: 'Coffee', category: 'food', hsk_level: 1, example_zh: '我每天喝咖啡。', example_ar: 'أشرب القهوة يومياً.', emoji: '☕' },
  { hanzi: '苹果', pinyin: 'píng guǒ', meaning_ar: 'تفاحة', meaning_en: 'Apple', category: 'food', hsk_level: 1, example_zh: '一天一个苹果。', example_ar: 'تفاحة في اليوم.', emoji: '🍎' },
  { hanzi: '面条', pinyin: 'miàn tiáo', meaning_ar: 'مكرونة / شعرية', meaning_en: 'Noodles', category: 'food', hsk_level: 1, example_zh: '我喜欢吃面条。', example_ar: 'أنا أحب المكرونة.', emoji: '🍜' },
  { hanzi: '米饭', pinyin: 'mǐ fàn', meaning_ar: 'أرز مطبوخ', meaning_en: 'Cooked rice', category: 'food', hsk_level: 1, example_zh: '我想吃米饭。', example_ar: 'أريد أن آكل الأرز.', emoji: '🍚' },
  { hanzi: '肉', pinyin: 'ròu', meaning_ar: 'لحم', meaning_en: 'Meat', category: 'food', hsk_level: 1, stroke_count: 6, example_zh: '我不吃肉。', example_ar: 'أنا لا آكل اللحم.', emoji: '🥩' },
  { hanzi: '鱼', pinyin: 'yú', meaning_ar: 'سمك', meaning_en: 'Fish', category: 'food', hsk_level: 1, stroke_count: 8, example_zh: '这条鱼很新鲜。', example_ar: 'هذه السمكة طازجة.', emoji: '🐟' },
  { hanzi: '蛋', pinyin: 'dàn', meaning_ar: 'بيضة', meaning_en: 'Egg', category: 'food', hsk_level: 1, stroke_count: 11, example_zh: '我早上吃一个蛋。', example_ar: 'آكل بيضة في الصباح.', emoji: '🥚' },
  { hanzi: '菜', pinyin: 'cài', meaning_ar: 'خضار / طبق', meaning_en: 'Vegetable / dish', category: 'food', hsk_level: 1, stroke_count: 11, example_zh: '今天的菜很好吃！', example_ar: 'الأطباق اليوم لذيذة!', emoji: '🥦' },
  { hanzi: '面包', pinyin: 'miàn bāo', meaning_ar: 'خبز', meaning_en: 'Bread', category: 'food', hsk_level: 1, example_zh: '早上我吃面包。', example_ar: 'آكل الخبز صباحاً.', emoji: '🍞' },
]

export const HSK1_PLACES: HskItem[] = [
  { hanzi: '家', pinyin: 'jiā', meaning_ar: 'بيت / عائلة', meaning_en: 'Home / family', category: 'places', hsk_level: 1, stroke_count: 10, example_zh: '我回家了。', example_ar: 'عدت إلى البيت.', emoji: '🏠' },
  { hanzi: '学校', pinyin: 'xué xiào', meaning_ar: 'مدرسة', meaning_en: 'School', category: 'places', hsk_level: 1, example_zh: '我在学校学习。', example_ar: 'أنا أدرس في المدرسة.', emoji: '🏫' },
  { hanzi: '医院', pinyin: 'yī yuàn', meaning_ar: 'مستشفى', meaning_en: 'Hospital', category: 'places', hsk_level: 1, example_zh: '我去医院看病。', example_ar: 'أذهب إلى المستشفى للعلاج.', emoji: '🏥' },
  { hanzi: '商店', pinyin: 'shāng diàn', meaning_ar: 'محل / متجر', meaning_en: 'Shop / store', category: 'places', hsk_level: 1, example_zh: '那个商店很大。', example_ar: 'ذلك المتجر كبير.', emoji: '🏪' },
  { hanzi: '餐厅', pinyin: 'cān tīng', meaning_ar: 'مطعم', meaning_en: 'Restaurant', category: 'places', hsk_level: 1, example_zh: '我们去餐厅吃饭吧。', example_ar: 'لنذهب إلى المطعم.', emoji: '🍽️' },
  { hanzi: '银行', pinyin: 'yín háng', meaning_ar: 'بنك', meaning_en: 'Bank', category: 'places', hsk_level: 1, example_zh: '我去银行取钱。', example_ar: 'أذهب إلى البنك لسحب المال.', emoji: '🏦' },
  { hanzi: '超市', pinyin: 'chāo shì', meaning_ar: 'سوبرماركت', meaning_en: 'Supermarket', category: 'places', hsk_level: 1, example_zh: '超市里有很多东西。', example_ar: 'في السوبرماركت أشياء كثيرة.', emoji: '🛒' },
  { hanzi: '公园', pinyin: 'gōng yuán', meaning_ar: 'حديقة عامة', meaning_en: 'Park', category: 'places', hsk_level: 1, example_zh: '我喜欢在公园散步。', example_ar: 'أحب المشي في الحديقة.', emoji: '🌳' },
  { hanzi: '北京', pinyin: 'Běi jīng', meaning_ar: 'بكين', meaning_en: 'Beijing', category: 'places', hsk_level: 1, example_zh: '北京是中国的首都。', example_ar: 'بكين هي عاصمة الصين.', emoji: '🏯' },
  { hanzi: '中国', pinyin: 'Zhōng guó', meaning_ar: 'الصين', meaning_en: 'China', category: 'places', hsk_level: 1, example_zh: '中国很大。', example_ar: 'الصين كبيرة جداً.', emoji: '🇨🇳' },
]

export const HSK1_VERBS: HskItem[] = [
  { hanzi: '是', pinyin: 'shì', meaning_ar: 'يكون / هو', meaning_en: 'To be', category: 'verbs', hsk_level: 1, stroke_count: 9, example_zh: '我是学生。', example_ar: 'أنا طالب.', emoji: '✅' },
  { hanzi: '有', pinyin: 'yǒu', meaning_ar: 'يملك / يوجد', meaning_en: 'Have / there is', category: 'verbs', hsk_level: 1, stroke_count: 6, example_zh: '我有一本书。', example_ar: 'عندي كتاب.', emoji: '📦' },
  { hanzi: '去', pinyin: 'qù', meaning_ar: 'يذهب', meaning_en: 'Go', category: 'verbs', hsk_level: 1, stroke_count: 5, example_zh: '我去学校。', example_ar: 'أذهب إلى المدرسة.', emoji: '🚶' },
  { hanzi: '来', pinyin: 'lái', meaning_ar: 'يأتي', meaning_en: 'Come', category: 'verbs', hsk_level: 1, stroke_count: 7, example_zh: '你来这里！', example_ar: 'تعال إلى هنا!', emoji: '🤗' },
  { hanzi: '吃', pinyin: 'chī', meaning_ar: 'يأكل', meaning_en: 'Eat', category: 'verbs', hsk_level: 1, stroke_count: 6, example_zh: '我喜欢吃中国菜。', example_ar: 'أحب أكل الطعام الصيني.', emoji: '🍽️' },
  { hanzi: '喝', pinyin: 'hē', meaning_ar: 'يشرب', meaning_en: 'Drink', category: 'verbs', hsk_level: 1, stroke_count: 12, example_zh: '我想喝水。', example_ar: 'أريد أن أشرب ماء.', emoji: '🥤' },
  { hanzi: '买', pinyin: 'mǎi', meaning_ar: 'يشتري', meaning_en: 'Buy', category: 'verbs', hsk_level: 1, stroke_count: 6, example_zh: '我去买东西。', example_ar: 'أذهب للتسوق.', emoji: '🛍️' },
  { hanzi: '看', pinyin: 'kàn', meaning_ar: 'ينظر / يقرأ', meaning_en: 'Look / read / watch', category: 'verbs', hsk_level: 1, stroke_count: 9, example_zh: '我看书。', example_ar: 'أقرأ كتاباً.', emoji: '👀' },
  { hanzi: '说', pinyin: 'shuō', meaning_ar: 'يتكلم / يقول', meaning_en: 'Say / speak', category: 'verbs', hsk_level: 1, stroke_count: 9, example_zh: '他说中文。', example_ar: 'هو يتكلم الصينية.', emoji: '🗣️' },
  { hanzi: '听', pinyin: 'tīng', meaning_ar: 'يسمع / يستمع', meaning_en: 'Listen / hear', category: 'verbs', hsk_level: 1, stroke_count: 7, example_zh: '我听音乐。', example_ar: 'أستمع إلى الموسيقى.', emoji: '👂' },
  { hanzi: '写', pinyin: 'xiě', meaning_ar: 'يكتب', meaning_en: 'Write', category: 'verbs', hsk_level: 1, stroke_count: 5, example_zh: '我写汉字。', example_ar: 'أكتب الحروف الصينية.', emoji: '✍️' },
  { hanzi: '读', pinyin: 'dú', meaning_ar: 'يقرأ بصوت', meaning_en: 'Read aloud', category: 'verbs', hsk_level: 1, stroke_count: 10, example_zh: '请大家读这个句子。', example_ar: 'الجميع يقرأ هذه الجملة.', emoji: '📖' },
  { hanzi: '学', pinyin: 'xué', meaning_ar: 'يتعلم / يدرس', meaning_en: 'Study / learn', category: 'verbs', hsk_level: 1, stroke_count: 8, example_zh: '我学中文。', example_ar: 'أتعلم الصينية.', emoji: '📚' },
  { hanzi: '住', pinyin: 'zhù', meaning_ar: 'يسكن / يقيم', meaning_en: 'Live / reside', category: 'verbs', hsk_level: 1, stroke_count: 7, example_zh: '我住在北京。', example_ar: 'أسكن في بكين.', emoji: '🏠' },
  { hanzi: '知道', pinyin: 'zhī dào', meaning_ar: 'يعرف / يعلم', meaning_en: 'Know', category: 'verbs', hsk_level: 1, example_zh: '我知道了。', example_ar: 'أعرف ذلك.', emoji: '💡' },
  { hanzi: '想', pinyin: 'xiǎng', meaning_ar: 'يريد / يفكر', meaning_en: 'Want / think', category: 'verbs', hsk_level: 1, stroke_count: 13, example_zh: '我想去中国。', example_ar: 'أريد أن أذهب إلى الصين.', emoji: '💭' },
  { hanzi: '喜欢', pinyin: 'xǐ huān', meaning_ar: 'يحب / يعجبه', meaning_en: 'Like', category: 'verbs', hsk_level: 1, example_zh: '我喜欢学中文。', example_ar: 'أحب تعلم الصينية.', emoji: '❤️' },
  { hanzi: '叫', pinyin: 'jiào', meaning_ar: 'اسمه / ينادي', meaning_en: 'Be called / shout', category: 'verbs', hsk_level: 1, stroke_count: 5, example_zh: '我叫明明。', example_ar: 'اسمي مينغمينغ.', emoji: '📣' },
  { hanzi: '做', pinyin: 'zuò', meaning_ar: 'يعمل / يصنع', meaning_en: 'Do / make', category: 'verbs', hsk_level: 1, stroke_count: 11, example_zh: '我在做作业。', example_ar: 'أنا أعمل الواجب.', emoji: '🔨' },
  { hanzi: '睡觉', pinyin: 'shuì jiào', meaning_ar: 'ينام', meaning_en: 'Sleep', category: 'verbs', hsk_level: 1, example_zh: '我去睡觉了。', example_ar: 'سأنام الآن.', emoji: '😴' },
]

export const HSK1_TIME: HskItem[] = [
  { hanzi: '今天', pinyin: 'jīn tiān', meaning_ar: 'اليوم', meaning_en: 'Today', category: 'time', hsk_level: 1, example_zh: '今天是星期一。', example_ar: 'اليوم هو الاثنين.', emoji: '📅' },
  { hanzi: '明天', pinyin: 'míng tiān', meaning_ar: 'غداً', meaning_en: 'Tomorrow', category: 'time', hsk_level: 1, example_zh: '明天我去北京。', example_ar: 'غداً سأذهب إلى بكين.', emoji: '🌅' },
  { hanzi: '昨天', pinyin: 'zuó tiān', meaning_ar: 'أمس', meaning_en: 'Yesterday', category: 'time', hsk_level: 1, example_zh: '昨天我很忙。', example_ar: 'أمس كنت مشغولاً.', emoji: '📆' },
  { hanzi: '现在', pinyin: 'xiàn zài', meaning_ar: 'الآن', meaning_en: 'Now', category: 'time', hsk_level: 1, example_zh: '现在几点？', example_ar: 'كم الساعة الآن؟', emoji: '⏰' },
  { hanzi: '时候', pinyin: 'shí hòu', meaning_ar: 'وقت / حين', meaning_en: 'Time / when', category: 'time', hsk_level: 1, example_zh: '什么时候？', example_ar: 'متى؟', emoji: '⏱️' },
  { hanzi: '年', pinyin: 'nián', meaning_ar: 'سنة / عام', meaning_en: 'Year', category: 'time', hsk_level: 1, stroke_count: 6, example_zh: '今年是2024年。', example_ar: 'هذا العام هو 2024.', emoji: '📅' },
  { hanzi: '月', pinyin: 'yuè', meaning_ar: 'شهر / قمر', meaning_en: 'Month / moon', category: 'time', hsk_level: 1, stroke_count: 4, example_zh: '这个月很忙。', example_ar: 'هذا الشهر مشغول.', emoji: '🌙' },
  { hanzi: '日', pinyin: 'rì', meaning_ar: 'يوم / شمس', meaning_en: 'Day / sun', category: 'time', hsk_level: 1, stroke_count: 4, example_zh: '三月八日。', example_ar: 'الثامن من مارس.', emoji: '☀️' },
  { hanzi: '星期', pinyin: 'xīng qī', meaning_ar: 'أسبوع / يوم', meaning_en: 'Week / weekday', category: 'time', hsk_level: 1, example_zh: '星期一我有课。', example_ar: 'يوم الاثنين عندي دراسة.', emoji: '📋' },
  { hanzi: '上午', pinyin: 'shàng wǔ', meaning_ar: 'قبل الظهر / صباحاً', meaning_en: 'Morning / AM', category: 'time', hsk_level: 1, example_zh: '上午十点见面。', example_ar: 'نلتقي عند العاشرة صباحاً.', emoji: '🌄' },
  { hanzi: '下午', pinyin: 'xià wǔ', meaning_ar: 'بعد الظهر', meaning_en: 'Afternoon / PM', category: 'time', hsk_level: 1, example_zh: '下午我去图书馆。', example_ar: 'بعد الظهر أذهب إلى المكتبة.', emoji: '🌇' },
  { hanzi: '晚上', pinyin: 'wǎn shang', meaning_ar: 'في المساء / الليل', meaning_en: 'Evening / night', category: 'time', hsk_level: 1, example_zh: '晚上我看电视。', example_ar: 'في المساء أشاهد التلفاز.', emoji: '🌙' },
  { hanzi: '点', pinyin: 'diǎn', meaning_ar: 'ساعة (للوقت) / نقطة', meaning_en: "O'clock / point", category: 'time', hsk_level: 1, stroke_count: 9, example_zh: '现在三点了。', example_ar: 'الآن الساعة الثالثة.', emoji: '🕒' },
]

export const HSK1_ADJECTIVES: HskItem[] = [
  { hanzi: '大', pinyin: 'dà', meaning_ar: 'كبير', meaning_en: 'Big / large', category: 'adjectives', hsk_level: 1, stroke_count: 3, example_zh: '这个房子很大。', example_ar: 'هذا البيت كبير.', emoji: '🐘' },
  { hanzi: '小', pinyin: 'xiǎo', meaning_ar: 'صغير', meaning_en: 'Small / little', category: 'adjectives', hsk_level: 1, stroke_count: 3, example_zh: '这只猫很小。', example_ar: 'هذه القطة صغيرة.', emoji: '🐱' },
  { hanzi: '多', pinyin: 'duō', meaning_ar: 'كثير', meaning_en: 'Many / much', category: 'adjectives', hsk_level: 1, stroke_count: 6, example_zh: '这里人很多。', example_ar: 'الناس هنا كثيرون.', emoji: '👥' },
  { hanzi: '少', pinyin: 'shǎo', meaning_ar: 'قليل', meaning_en: 'Few / little', category: 'adjectives', hsk_level: 1, stroke_count: 4, example_zh: '钱太少了。', example_ar: 'المال قليل جداً.', emoji: '💸' },
  { hanzi: '好', pinyin: 'hǎo', meaning_ar: 'جيد', meaning_en: 'Good / well', category: 'adjectives', hsk_level: 1, stroke_count: 6, example_zh: '这本书很好！', example_ar: 'هذا الكتاب جيد!', emoji: '👍' },
  { hanzi: '漂亮', pinyin: 'piào liàng', meaning_ar: 'جميل / رائع', meaning_en: 'Beautiful / pretty', category: 'adjectives', hsk_level: 1, example_zh: '她很漂亮。', example_ar: 'هي جميلة.', emoji: '✨' },
  { hanzi: '高兴', pinyin: 'gāo xìng', meaning_ar: 'سعيد / مسرور', meaning_en: 'Happy / glad', category: 'adjectives', hsk_level: 1, example_zh: '我很高兴认识你！', example_ar: 'أنا سعيد بمعرفتك!', emoji: '😊' },
  { hanzi: '忙', pinyin: 'máng', meaning_ar: 'مشغول', meaning_en: 'Busy', category: 'adjectives', hsk_level: 1, stroke_count: 6, example_zh: '今天我很忙。', example_ar: 'أنا مشغول اليوم.', emoji: '😰' },
  { hanzi: '贵', pinyin: 'guì', meaning_ar: 'غالي الثمن', meaning_en: 'Expensive', category: 'adjectives', hsk_level: 1, stroke_count: 9, example_zh: '这个手机太贵了。', example_ar: 'هذا الهاتف غالٍ جداً.', emoji: '💎' },
  { hanzi: '冷', pinyin: 'lěng', meaning_ar: 'بارد', meaning_en: 'Cold', category: 'adjectives', hsk_level: 1, stroke_count: 7, example_zh: '今天很冷。', example_ar: 'اليوم بارد.', emoji: '🥶' },
  { hanzi: '热', pinyin: 'rè', meaning_ar: 'حار / ساخن', meaning_en: 'Hot', category: 'adjectives', hsk_level: 1, stroke_count: 10, example_zh: '夏天很热。', example_ar: 'الصيف حار.', emoji: '🥵' },
  { hanzi: '快', pinyin: 'kuài', meaning_ar: 'سريع', meaning_en: 'Fast / quick', category: 'adjectives', hsk_level: 1, stroke_count: 7, example_zh: '他跑得很快。', example_ar: 'هو يركض بسرعة.', emoji: '⚡' },
  { hanzi: '慢', pinyin: 'màn', meaning_ar: 'بطيء', meaning_en: 'Slow', category: 'adjectives', hsk_level: 1, stroke_count: 14, example_zh: '请说慢一点。', example_ar: 'من فضلك تكلم ببطء.', emoji: '🐌' },
  { hanzi: '新', pinyin: 'xīn', meaning_ar: 'جديد', meaning_en: 'New', category: 'adjectives', hsk_level: 1, stroke_count: 13, example_zh: '我有一本新书。', example_ar: 'عندي كتاب جديد.', emoji: '🆕' },
]

export const HSK1_QUESTION_WORDS: HskItem[] = [
  { hanzi: '什么', pinyin: 'shén me', meaning_ar: 'ما / ماذا', meaning_en: 'What', category: 'questions', hsk_level: 1, example_zh: '你叫什么名字？', example_ar: 'ما اسمك؟', emoji: '❓' },
  { hanzi: '谁', pinyin: 'shuí / shéi', meaning_ar: 'من', meaning_en: 'Who', category: 'questions', hsk_level: 1, stroke_count: 10, example_zh: '那个人是谁？', example_ar: 'من ذلك الشخص؟', emoji: '🤷' },
  { hanzi: '哪', pinyin: 'nǎ', meaning_ar: 'أي / أين', meaning_en: 'Which / where', category: 'questions', hsk_level: 1, stroke_count: 9, example_zh: '你住在哪？', example_ar: 'أين تسكن؟', emoji: '🗺️' },
  { hanzi: '哪里', pinyin: 'nǎ lǐ', meaning_ar: 'أين', meaning_en: 'Where', category: 'questions', hsk_level: 1, example_zh: '你从哪里来？', example_ar: 'من أين أنت؟', emoji: '📍' },
  { hanzi: '为什么', pinyin: 'wèi shén me', meaning_ar: 'لماذا', meaning_en: 'Why', category: 'questions', hsk_level: 1, example_zh: '你为什么学中文？', example_ar: 'لماذا تتعلم الصينية؟', emoji: '🤔' },
  { hanzi: '怎么', pinyin: 'zěn me', meaning_ar: 'كيف', meaning_en: 'How', category: 'questions', hsk_level: 1, example_zh: '你怎么去学校？', example_ar: 'كيف تذهب إلى المدرسة؟', emoji: '🤷' },
  { hanzi: '多少', pinyin: 'duō shǎo', meaning_ar: 'كم / بكم', meaning_en: 'How many / how much', category: 'questions', hsk_level: 1, example_zh: '多少钱？', example_ar: 'بكم هذا؟', emoji: '💰' },
  { hanzi: '几', pinyin: 'jǐ', meaning_ar: 'كم (للعدد الصغير)', meaning_en: 'How many (small number)', category: 'questions', hsk_level: 1, stroke_count: 2, example_zh: '你几岁？', example_ar: 'كم عمرك؟', emoji: '🔢' },
]

// ============================================================
// HSK 2 VOCABULARY
// ============================================================

export const HSK2_DAILY_LIFE: HskItem[] = [
  { hanzi: '超市', pinyin: 'chāo shì', meaning_ar: 'سوبرماركت', meaning_en: 'Supermarket', category: 'daily_life', hsk_level: 2, example_zh: '我去超市买东西。', example_ar: 'أذهب إلى السوبرماركت للتسوق.', emoji: '🛒' },
  { hanzi: '价格', pinyin: 'jià gé', meaning_ar: 'سعر', meaning_en: 'Price', category: 'daily_life', hsk_level: 2, example_zh: '这个价格太高了。', example_ar: 'هذا السعر مرتفع جداً.', emoji: '💰' },
  { hanzi: '便宜', pinyin: 'pián yí', meaning_ar: 'رخيص', meaning_en: 'Cheap / inexpensive', category: 'daily_life', hsk_level: 2, example_zh: '这件衣服很便宜！', example_ar: 'هذا الثوب رخيص!', emoji: '🏷️' },
  { hanzi: '天气', pinyin: 'tiān qì', meaning_ar: 'الطقس', meaning_en: 'Weather', category: 'daily_life', hsk_level: 2, example_zh: '今天天气怎么样？', example_ar: 'كيف حال الطقس اليوم؟', emoji: '🌤️' },
  { hanzi: '下雨', pinyin: 'xià yǔ', meaning_ar: 'يمطر', meaning_en: 'Raining', category: 'daily_life', hsk_level: 2, example_zh: '外面下雨了。', example_ar: 'المطر ينزل خارجاً.', emoji: '🌧️' },
  { hanzi: '下雪', pinyin: 'xià xuě', meaning_ar: 'يثلج', meaning_en: 'Snowing', category: 'daily_life', hsk_level: 2, example_zh: '北京冬天下雪。', example_ar: 'تثلج بكين في الشتاء.', emoji: '❄️' },
  { hanzi: '公共汽车', pinyin: 'gōng gòng qì chē', meaning_ar: 'حافلة عامة', meaning_en: 'Bus', category: 'daily_life', hsk_level: 2, example_zh: '我坐公共汽车上班。', example_ar: 'أركب الحافلة للعمل.', emoji: '🚌' },
  { hanzi: '地铁', pinyin: 'dì tiě', meaning_ar: 'مترو الأنفاق', meaning_en: 'Subway / metro', category: 'daily_life', hsk_level: 2, example_zh: '坐地铁比较快。', example_ar: 'المترو أسرع.', emoji: '🚇' },
  { hanzi: '出租车', pinyin: 'chū zū chē', meaning_ar: 'تاكسي', meaning_en: 'Taxi', category: 'daily_life', hsk_level: 2, example_zh: '我叫一辆出租车。', example_ar: 'أطلب سيارة تاكسي.', emoji: '🚕' },
  { hanzi: '火车', pinyin: 'huǒ chē', meaning_ar: 'قطار', meaning_en: 'Train', category: 'daily_life', hsk_level: 2, example_zh: '坐火车去上海。', example_ar: 'أذهب إلى شانغهاي بالقطار.', emoji: '🚄' },
  { hanzi: '飞机', pinyin: 'fēi jī', meaning_ar: 'طائرة', meaning_en: 'Airplane', category: 'daily_life', hsk_level: 2, example_zh: '我坐飞机来的。', example_ar: 'أتيت بالطائرة.', emoji: '✈️' },
  { hanzi: '手机', pinyin: 'shǒu jī', meaning_ar: 'هاتف محمول', meaning_en: 'Mobile phone', category: 'daily_life', hsk_level: 2, example_zh: '我的手机没电了。', example_ar: 'بطارية هاتفي نفدت.', emoji: '📱' },
  { hanzi: '电脑', pinyin: 'diàn nǎo', meaning_ar: 'حاسوب / كمبيوتر', meaning_en: 'Computer', category: 'daily_life', hsk_level: 2, example_zh: '我用电脑工作。', example_ar: 'أعمل على الكمبيوتر.', emoji: '💻' },
  { hanzi: '衣服', pinyin: 'yī fú', meaning_ar: 'ملابس', meaning_en: 'Clothes', category: 'daily_life', hsk_level: 2, example_zh: '今天穿什么衣服？', example_ar: 'ماذا أرتدي اليوم؟', emoji: '👕' },
  { hanzi: '钱', pinyin: 'qián', meaning_ar: 'مال / نقود', meaning_en: 'Money', category: 'daily_life', hsk_level: 2, stroke_count: 10, example_zh: '我没有钱了。', example_ar: 'ليس عندي مال.', emoji: '💴' },
]

export const HSK2_WORK_STUDY: HskItem[] = [
  { hanzi: '工作', pinyin: 'gōng zuò', meaning_ar: 'عمل / وظيفة', meaning_en: 'Work / job', category: 'work_study', hsk_level: 2, example_zh: '我的工作很有意思。', example_ar: 'عملي مثير للاهتمام.', emoji: '💼' },
  { hanzi: '上班', pinyin: 'shàng bān', meaning_ar: 'يذهب للعمل', meaning_en: 'Go to work', category: 'work_study', hsk_level: 2, example_zh: '我每天八点上班。', example_ar: 'أذهب للعمل كل يوم الثامنة.', emoji: '🏢' },
  { hanzi: '下班', pinyin: 'xià bān', meaning_ar: 'ينتهي من العمل', meaning_en: 'Get off work', category: 'work_study', hsk_level: 2, example_zh: '我五点下班。', example_ar: 'أنتهي من العمل الساعة الخامسة.', emoji: '🏃' },
  { hanzi: '大学', pinyin: 'dà xué', meaning_ar: 'جامعة', meaning_en: 'University', category: 'work_study', hsk_level: 2, example_zh: '我在大学学习中文。', example_ar: 'أدرس الصينية في الجامعة.', emoji: '🎓' },
  { hanzi: '考试', pinyin: 'kǎo shì', meaning_ar: 'امتحان / اختبار', meaning_en: 'Exam / test', category: 'work_study', hsk_level: 2, example_zh: '明天有考试。', example_ar: 'غداً يوجد امتحان.', emoji: '📝' },
  { hanzi: '作业', pinyin: 'zuò yè', meaning_ar: 'واجب مدرسي', meaning_en: 'Homework', category: 'work_study', hsk_level: 2, example_zh: '我要做作业。', example_ar: 'يجب أن أعمل الواجب.', emoji: '📓' },
  { hanzi: '成绩', pinyin: 'chéng jì', meaning_ar: 'درجات / نتيجة', meaning_en: 'Grades / results', category: 'work_study', hsk_level: 2, example_zh: '我的成绩很好。', example_ar: 'درجاتي جيدة.', emoji: '📊' },
  { hanzi: '图书馆', pinyin: 'tú shū guǎn', meaning_ar: 'مكتبة', meaning_en: 'Library', category: 'work_study', hsk_level: 2, example_zh: '我去图书馆看书。', example_ar: 'أذهب إلى المكتبة للقراءة.', emoji: '📚' },
  { hanzi: '会议', pinyin: 'huì yì', meaning_ar: 'اجتماع', meaning_en: 'Meeting', category: 'work_study', hsk_level: 2, example_zh: '今天有一个重要会议。', example_ar: 'اليوم يوجد اجتماع مهم.', emoji: '🤝' },
  { hanzi: '同事', pinyin: 'tóng shì', meaning_ar: 'زميل العمل', meaning_en: 'Colleague', category: 'work_study', hsk_level: 2, example_zh: '我的同事很友好。', example_ar: 'زملائي في العمل ودودون.', emoji: '👔' },
  { hanzi: '经理', pinyin: 'jīng lǐ', meaning_ar: 'مدير', meaning_en: 'Manager', category: 'work_study', hsk_level: 2, example_zh: '我们的经理很严格。', example_ar: 'مديرنا صارم.', emoji: '👨‍💼' },
  { hanzi: '公司', pinyin: 'gōng sī', meaning_ar: 'شركة', meaning_en: 'Company', category: 'work_study', hsk_level: 2, example_zh: '这个公司很有名。', example_ar: 'هذه الشركة مشهورة.', emoji: '🏬' },
  { hanzi: '努力', pinyin: 'nǔ lì', meaning_ar: 'يجتهد / يسعى', meaning_en: 'Work hard / strive', category: 'work_study', hsk_level: 2, example_zh: '我努力学习中文。', example_ar: 'أجتهد في تعلم الصينية.', emoji: '💪' },
  { hanzi: '休息', pinyin: 'xiū xi', meaning_ar: 'يستريح', meaning_en: 'Rest', category: 'work_study', hsk_level: 2, example_zh: '周末我要休息。', example_ar: 'سأستريح في نهاية الأسبوع.', emoji: '😴' },
  { hanzi: '复习', pinyin: 'fù xí', meaning_ar: 'يراجع الدرس', meaning_en: 'Review / revise', category: 'work_study', hsk_level: 2, example_zh: '考试前要复习。', example_ar: 'يجب المراجعة قبل الامتحان.', emoji: '📖' },
]

export const HSK2_BODY_HEALTH: HskItem[] = [
  { hanzi: '头', pinyin: 'tóu', meaning_ar: 'رأس', meaning_en: 'Head', category: 'body_health', hsk_level: 2, stroke_count: 5, example_zh: '我头很疼。', example_ar: 'رأسي يؤلمني.', emoji: '🧠' },
  { hanzi: '手', pinyin: 'shǒu', meaning_ar: 'يد', meaning_en: 'Hand', category: 'body_health', hsk_level: 2, stroke_count: 4, example_zh: '请举手！', example_ar: 'ارفع يدك!', emoji: '✋' },
  { hanzi: '眼睛', pinyin: 'yǎn jīng', meaning_ar: 'عيون', meaning_en: 'Eyes', category: 'body_health', hsk_level: 2, example_zh: '他的眼睛很大。', example_ar: 'عيونه كبيرة.', emoji: '👁️' },
  { hanzi: '身体', pinyin: 'shēn tǐ', meaning_ar: 'جسم / صحة', meaning_en: 'Body / health', category: 'body_health', hsk_level: 2, example_zh: '你身体怎么样？', example_ar: 'كيف صحتك؟', emoji: '🏃' },
  { hanzi: '生病', pinyin: 'shēng bìng', meaning_ar: 'يمرض', meaning_en: 'Get sick', category: 'body_health', hsk_level: 2, example_zh: '我生病了，去不了。', example_ar: 'أنا مريض ولا أستطيع الذهاب.', emoji: '🤒' },
  { hanzi: '医生', pinyin: 'yī shēng', meaning_ar: 'طبيب', meaning_en: 'Doctor', category: 'body_health', hsk_level: 2, example_zh: '医生说我要多休息。', example_ar: 'الطبيب قال يجب أن أستريح أكثر.', emoji: '👨‍⚕️' },
  { hanzi: '药', pinyin: 'yào', meaning_ar: 'دواء', meaning_en: 'Medicine', category: 'body_health', hsk_level: 2, stroke_count: 9, example_zh: '你吃药了吗？', example_ar: 'هل أخذت دواءك؟', emoji: '💊' },
  { hanzi: '头疼', pinyin: 'tóu téng', meaning_ar: 'صداع', meaning_en: 'Headache', category: 'body_health', hsk_level: 2, example_zh: '我头疼得很厉害。', example_ar: 'صداعي شديد.', emoji: '🤕' },
  { hanzi: '发烧', pinyin: 'fā shāo', meaning_ar: 'يحمّ / يسخن', meaning_en: 'Have a fever', category: 'body_health', hsk_level: 2, example_zh: '孩子发烧了。', example_ar: 'الطفل عنده حمى.', emoji: '🌡️' },
  { hanzi: '健康', pinyin: 'jiàn kāng', meaning_ar: 'صحة / سليم', meaning_en: 'Health / healthy', category: 'body_health', hsk_level: 2, example_zh: '健康最重要。', example_ar: 'الصحة أهم شيء.', emoji: '💚' },
  { hanzi: '运动', pinyin: 'yùn dòng', meaning_ar: 'رياضة / يتحرك', meaning_en: 'Exercise / sports', category: 'body_health', hsk_level: 2, example_zh: '每天运动身体好。', example_ar: 'ممارسة الرياضة يومياً مفيدة للصحة.', emoji: '🏋️' },
  { hanzi: '睡眠', pinyin: 'shuì mián', meaning_ar: 'نوم', meaning_en: 'Sleep', category: 'body_health', hsk_level: 2, example_zh: '睡眠不好影响健康。', example_ar: 'قلة النوم تؤثر على الصحة.', emoji: '😴' },
]

export const HSK2_EMOTIONS: HskItem[] = [
  { hanzi: '高兴', pinyin: 'gāo xìng', meaning_ar: 'سعيد / فرح', meaning_en: 'Happy', category: 'emotions', hsk_level: 2, example_zh: '我今天很高兴！', example_ar: 'أنا سعيد اليوم!', emoji: '😊' },
  { hanzi: '难过', pinyin: 'nán guò', meaning_ar: 'حزين', meaning_en: 'Sad', category: 'emotions', hsk_level: 2, example_zh: '他很难过。', example_ar: 'هو حزين.', emoji: '😢' },
  { hanzi: '担心', pinyin: 'dān xīn', meaning_ar: 'قلق', meaning_en: 'Worried / anxious', category: 'emotions', hsk_level: 2, example_zh: '我担心你。', example_ar: 'أنا قلق عليك.', emoji: '😰' },
  { hanzi: '生气', pinyin: 'shēng qì', meaning_ar: 'غاضب', meaning_en: 'Angry', category: 'emotions', hsk_level: 2, example_zh: '她生气了。', example_ar: 'هي غاضبة.', emoji: '😠' },
  { hanzi: '害怕', pinyin: 'hài pà', meaning_ar: 'خائف', meaning_en: 'Afraid / scared', category: 'emotions', hsk_level: 2, example_zh: '我害怕黑暗。', example_ar: 'أنا أخاف من الظلام.', emoji: '😨' },
  { hanzi: '惊讶', pinyin: 'jīng yà', meaning_ar: 'مندهش / متفاجئ', meaning_en: 'Surprised', category: 'emotions', hsk_level: 2, example_zh: '他感到很惊讶。', example_ar: 'هو متفاجئ.', emoji: '😲' },
  { hanzi: '兴奋', pinyin: 'xīng fèn', meaning_ar: 'متحمس / منفعل', meaning_en: 'Excited', category: 'emotions', hsk_level: 2, example_zh: '我对旅游很兴奋。', example_ar: 'أنا متحمس للسفر.', emoji: '🤩' },
  { hanzi: '无聊', pinyin: 'wú liáo', meaning_ar: 'ممل / لا يوجد ما يفعله', meaning_en: 'Bored', category: 'emotions', hsk_level: 2, example_zh: '今天真无聊。', example_ar: 'اليوم ممل جداً.', emoji: '😑' },
  { hanzi: '满意', pinyin: 'mǎn yì', meaning_ar: 'راضٍ / مرتاح', meaning_en: 'Satisfied', category: 'emotions', hsk_level: 2, example_zh: '我对结果很满意。', example_ar: 'أنا راضٍ عن النتيجة.', emoji: '😌' },
  { hanzi: '感谢', pinyin: 'gǎn xiè', meaning_ar: 'ممتنن / يشكر', meaning_en: 'Grateful / thankful', category: 'emotions', hsk_level: 2, example_zh: '非常感谢你！', example_ar: 'أنا ممتن جداً لك!', emoji: '🙏' },
]

// ============================================================
// HSK 3 VOCABULARY
// ============================================================

export const HSK3_SOCIETY: HskItem[] = [
  { hanzi: '社会', pinyin: 'shè huì', meaning_ar: 'مجتمع', meaning_en: 'Society', category: 'society', hsk_level: 3, example_zh: '现代社会变化很快。', example_ar: 'المجتمع الحديث يتغير بسرعة.', emoji: '🌆' },
  { hanzi: '环境', pinyin: 'huán jìng', meaning_ar: 'بيئة / محيط', meaning_en: 'Environment', category: 'society', hsk_level: 3, example_zh: '保护环境很重要。', example_ar: 'حماية البيئة مهمة.', emoji: '🌿' },
  { hanzi: '政府', pinyin: 'zhèng fǔ', meaning_ar: 'حكومة', meaning_en: 'Government', category: 'society', hsk_level: 3, example_zh: '政府要解决这个问题。', example_ar: 'الحكومة يجب أن تحل هذه المشكلة.', emoji: '🏛️' },
  { hanzi: '法律', pinyin: 'fǎ lǜ', meaning_ar: 'قانون', meaning_en: 'Law', category: 'society', hsk_level: 3, example_zh: '我们要遵守法律。', example_ar: 'يجب علينا احترام القانون.', emoji: '⚖️' },
  { hanzi: '经济', pinyin: 'jīng jì', meaning_ar: 'اقتصاد', meaning_en: 'Economy', category: 'society', hsk_level: 3, example_zh: '中国经济发展很快。', example_ar: 'الاقتصاد الصيني ينمو بسرعة.', emoji: '📈' },
  { hanzi: '文化', pinyin: 'wén huà', meaning_ar: 'ثقافة', meaning_en: 'Culture', category: 'society', hsk_level: 3, example_zh: '中国文化历史悠久。', example_ar: 'الثقافة الصينية قديمة وعريقة.', emoji: '🎭' },
  { hanzi: '教育', pinyin: 'jiào yù', meaning_ar: 'تعليم', meaning_en: 'Education', category: 'society', hsk_level: 3, example_zh: '教育是最好的投资。', example_ar: 'التعليم هو أفضل استثمار.', emoji: '📚' },
  { hanzi: '科技', pinyin: 'kē jì', meaning_ar: 'تكنولوجيا / علوم', meaning_en: 'Technology / science', category: 'society', hsk_level: 3, example_zh: '现代科技改变了生活。', example_ar: 'التكنولوجيا الحديثة غيّرت الحياة.', emoji: '🔬' },
  { hanzi: '网络', pinyin: 'wǎng luò', meaning_ar: 'إنترنت / شبكة', meaning_en: 'Internet / network', category: 'society', hsk_level: 3, example_zh: '网络让世界更近了。', example_ar: 'الإنترنت جعل العالم أقرب.', emoji: '🌐' },
  { hanzi: '新闻', pinyin: 'xīn wén', meaning_ar: 'أخبار', meaning_en: 'News', category: 'society', hsk_level: 3, example_zh: '我每天看新闻。', example_ar: 'أشاهد الأخبار يومياً.', emoji: '📰' },
  { hanzi: '问题', pinyin: 'wèn tí', meaning_ar: 'مشكلة / سؤال', meaning_en: 'Problem / question', category: 'society', hsk_level: 3, example_zh: '有什么问题吗？', example_ar: 'هل هناك أي مشكلة؟', emoji: '❓' },
  { hanzi: '解决', pinyin: 'jiě jué', meaning_ar: 'يحل مشكلة', meaning_en: 'Solve / resolve', category: 'society', hsk_level: 3, example_zh: '我们要解决这个问题。', example_ar: 'يجب أن نحل هذه المشكلة.', emoji: '🔧' },
  { hanzi: '发展', pinyin: 'fā zhǎn', meaning_ar: 'يتطور / تنمية', meaning_en: 'Development / develop', category: 'society', hsk_level: 3, example_zh: '中国发展很快。', example_ar: 'الصين تتطور بسرعة.', emoji: '📊' },
  { hanzi: '机会', pinyin: 'jī huì', meaning_ar: 'فرصة', meaning_en: 'Opportunity / chance', category: 'society', hsk_level: 3, example_zh: '这是一个好机会！', example_ar: 'هذه فرصة رائعة!', emoji: '🌟' },
  { hanzi: '影响', pinyin: 'yǐng xiǎng', meaning_ar: 'تأثير / يؤثر', meaning_en: 'Influence / affect', category: 'society', hsk_level: 3, example_zh: '这件事影响了我的生活。', example_ar: 'هذا الأمر أثّر على حياتي.', emoji: '🔄' },
]

export const HSK3_CULTURE: HskItem[] = [
  { hanzi: '春节', pinyin: 'Chūn Jié', meaning_ar: 'عيد الربيع / رأس السنة الصينية', meaning_en: 'Chinese New Year', category: 'culture', hsk_level: 3, example_zh: '春节是中国最重要的节日。', example_ar: 'عيد الربيع هو أهم عيد صيني.', emoji: '🧧' },
  { hanzi: '饺子', pinyin: 'jiǎo zi', meaning_ar: 'زلابية صينية', meaning_en: 'Dumplings', category: 'culture', hsk_level: 3, example_zh: '过年吃饺子是传统。', example_ar: 'أكل الزلابية في العيد تقليد قديم.', emoji: '🥟' },
  { hanzi: '长城', pinyin: 'Cháng Chéng', meaning_ar: 'سور الصين العظيم', meaning_en: 'The Great Wall', category: 'culture', hsk_level: 3, example_zh: '长城是世界奇迹之一。', example_ar: 'سور الصين العظيم إحدى عجائب العالم.', emoji: '🏯' },
  { hanzi: '功夫', pinyin: 'gōng fū', meaning_ar: 'كونغ فو', meaning_en: 'Kung fu', category: 'culture', hsk_level: 3, example_zh: '中国功夫很有名。', example_ar: 'الكونغ فو الصيني مشهور.', emoji: '🥋' },
  { hanzi: '茶文化', pinyin: 'chá wén huà', meaning_ar: 'ثقافة الشاي', meaning_en: 'Tea culture', category: 'culture', hsk_level: 3, example_zh: '茶文化在中国很重要。', example_ar: 'ثقافة الشاي مهمة في الصين.', emoji: '🍵' },
  { hanzi: '汉字', pinyin: 'hàn zì', meaning_ar: 'الحرف الصيني', meaning_en: 'Chinese character', category: 'culture', hsk_level: 3, example_zh: '汉字有几千年历史。', example_ar: 'الحروف الصينية لها تاريخ آلاف السنين.', emoji: '🈶' },
  { hanzi: '传统', pinyin: 'chuán tǒng', meaning_ar: 'تقليد / موروث', meaning_en: 'Tradition', category: 'culture', hsk_level: 3, example_zh: '尊重传统很重要。', example_ar: 'احترام التقاليد مهم.', emoji: '🏮' },
  { hanzi: '历史', pinyin: 'lì shǐ', meaning_ar: 'تاريخ', meaning_en: 'History', category: 'culture', hsk_level: 3, example_zh: '中国历史很长。', example_ar: 'التاريخ الصيني طويل.', emoji: '📜' },
  { hanzi: '艺术', pinyin: 'yì shù', meaning_ar: 'فن', meaning_en: 'Art', category: 'culture', hsk_level: 3, example_zh: '她喜欢中国传统艺术。', example_ar: 'هي تحب الفن الصيني التقليدي.', emoji: '🎨' },
  { hanzi: '音乐', pinyin: 'yīn yuè', meaning_ar: 'موسيقى', meaning_en: 'Music', category: 'culture', hsk_level: 3, example_zh: '我喜欢听中国音乐。', example_ar: 'أحب الاستماع إلى الموسيقى الصينية.', emoji: '🎵' },
  { hanzi: '节日', pinyin: 'jié rì', meaning_ar: 'عيد / مهرجان', meaning_en: 'Festival / holiday', category: 'culture', hsk_level: 3, example_zh: '这个节日很热闹。', example_ar: 'هذا العيد صاخب ومبهج.', emoji: '🎉' },
  { hanzi: '民族', pinyin: 'mín zú', meaning_ar: 'قومية / شعب', meaning_en: 'Ethnicity / people', category: 'culture', hsk_level: 3, example_zh: '中国有56个民族。', example_ar: 'الصين بها 56 قومية.', emoji: '🌏' },
]

// ── HSK 4 ────────────────────────────────────────────────────
export const HSK4_BUSINESS: HskItem[] = [
  { hanzi: '公司', pinyin: 'gōng sī', meaning_ar: 'شركة', meaning_en: 'company', category: 'business', hsk_level: 4, emoji: '🏢', example_zh: '这家公司很大。', example_ar: 'هذه الشركة كبيرة جداً.' },
  { hanzi: '经理', pinyin: 'jīng lǐ', meaning_ar: 'مدير', meaning_en: 'manager', category: 'business', hsk_level: 4, emoji: '👔', example_zh: '他是我们的经理。', example_ar: 'هو مديرنا.' },
  { hanzi: '合同', pinyin: 'hé tong', meaning_ar: 'عقد', meaning_en: 'contract', category: 'business', hsk_level: 4, emoji: '📄', example_zh: '请签合同。', example_ar: 'من فضلك وقّع العقد.' },
  { hanzi: '会议', pinyin: 'huì yì', meaning_ar: 'اجتماع', meaning_en: 'meeting', category: 'business', hsk_level: 4, emoji: '🤝', example_zh: '我们有会议。', example_ar: 'لدينا اجتماع.' },
  { hanzi: '产品', pinyin: 'chǎn pǐn', meaning_ar: 'منتج', meaning_en: 'product', category: 'business', hsk_level: 4, emoji: '📦', example_zh: '这个产品很好。', example_ar: 'هذا المنتج جيد جداً.' },
  { hanzi: '市场', pinyin: 'shì chǎng', meaning_ar: 'سوق', meaning_en: 'market', category: 'business', hsk_level: 4, emoji: '🛒', example_zh: '市场很大。', example_ar: 'السوق كبيرة جداً.' },
  { hanzi: '价格', pinyin: 'jià gé', meaning_ar: 'سعر', meaning_en: 'price', category: 'business', hsk_level: 4, emoji: '💰', example_zh: '价格太高了。', example_ar: 'السعر مرتفع جداً.' },
  { hanzi: '客户', pinyin: 'kè hù', meaning_ar: 'عميل/زبون', meaning_en: 'client/customer', category: 'business', hsk_level: 4, emoji: '🤝', example_zh: '客户很满意。', example_ar: 'العميل راضٍ جداً.' },
  { hanzi: '利润', pinyin: 'lì rùn', meaning_ar: 'ربح', meaning_en: 'profit', category: 'business', hsk_level: 4, emoji: '📈', example_zh: '今年利润增加了。', example_ar: 'الأرباح زادت هذا العام.' },
  { hanzi: '竞争', pinyin: 'jìng zhēng', meaning_ar: 'منافسة', meaning_en: 'competition', category: 'business', hsk_level: 4, emoji: '🏆', example_zh: '市场竞争激烈。', example_ar: 'المنافسة في السوق شديدة.' },
  { hanzi: '投资', pinyin: 'tóu zī', meaning_ar: 'استثمار', meaning_en: 'investment', category: 'business', hsk_level: 4, emoji: '💹', example_zh: '这是好的投资。', example_ar: 'هذا استثمار جيد.' },
  { hanzi: '收入', pinyin: 'shōu rù', meaning_ar: 'دخل/راتب', meaning_en: 'income', category: 'business', hsk_level: 4, emoji: '💵', example_zh: '我的收入不高。', example_ar: 'دخلي ليس مرتفعاً.' },
  { hanzi: '品牌', pinyin: 'pǐn pái', meaning_ar: 'علامة تجارية', meaning_en: 'brand', category: 'business', hsk_level: 4, emoji: '®️', example_zh: '这个品牌很有名。', example_ar: 'هذه العلامة التجارية مشهورة جداً.' },
  { hanzi: '销售', pinyin: 'xiāo shòu', meaning_ar: 'مبيعات', meaning_en: 'sales', category: 'business', hsk_level: 4, emoji: '📊', example_zh: '销售额增加了。', example_ar: 'زادت المبيعات.' },
  { hanzi: '谈判', pinyin: 'tán pàn', meaning_ar: 'تفاوض', meaning_en: 'negotiation', category: 'business', hsk_level: 4, emoji: '🗣️', example_zh: '谈判很成功。', example_ar: 'التفاوض كان ناجحاً جداً.' },
]

export const HSK4_SOCIETY: HskItem[] = [
  { hanzi: '社会', pinyin: 'shè huì', meaning_ar: 'مجتمع', meaning_en: 'society', category: 'society', hsk_level: 4, emoji: '🌍', example_zh: '社会在变化。', example_ar: 'المجتمع يتغير.' },
  { hanzi: '政府', pinyin: 'zhèng fǔ', meaning_ar: 'حكومة', meaning_en: 'government', category: 'society', hsk_level: 4, emoji: '🏛️', example_zh: '政府支持教育。', example_ar: 'الحكومة تدعم التعليم.' },
  { hanzi: '法律', pinyin: 'fǎ lǜ', meaning_ar: 'قانون', meaning_en: 'law', category: 'society', hsk_level: 4, emoji: '⚖️', example_zh: '要遵守法律。', example_ar: 'يجب اتباع القانون.' },
  { hanzi: '权利', pinyin: 'quán lì', meaning_ar: 'حق', meaning_en: 'right', category: 'society', hsk_level: 4, emoji: '✊', example_zh: '这是我的权利。', example_ar: 'هذا حقي.' },
  { hanzi: '教育', pinyin: 'jiào yù', meaning_ar: 'تعليم', meaning_en: 'education', category: 'society', hsk_level: 4, emoji: '📚', example_zh: '教育很重要。', example_ar: 'التعليم مهم جداً.' },
  { hanzi: '文化', pinyin: 'wén huà', meaning_ar: 'ثقافة', meaning_en: 'culture', category: 'society', hsk_level: 4, emoji: '🎭', example_zh: '中国文化历史悠久。', example_ar: 'الثقافة الصينية ذات تاريخ طويل.' },
  { hanzi: '科技', pinyin: 'kē jì', meaning_ar: 'تكنولوجيا/علم وتقنية', meaning_en: 'technology/science', category: 'society', hsk_level: 4, emoji: '🔬', example_zh: '科技发展很快。', example_ar: 'تطور التكنولوجيا سريع جداً.' },
  { hanzi: '环境', pinyin: 'huán jìng', meaning_ar: 'بيئة', meaning_en: 'environment', category: 'society', hsk_level: 4, emoji: '🌿', example_zh: '保护环境很重要。', example_ar: 'حماية البيئة مهمة جداً.' },
  { hanzi: '人口', pinyin: 'rén kǒu', meaning_ar: 'عدد السكان', meaning_en: 'population', category: 'society', hsk_level: 4, emoji: '👥', example_zh: '中国人口最多。', example_ar: 'الصين لديها أكبر عدد سكان.' },
  { hanzi: '发展', pinyin: 'fā zhǎn', meaning_ar: 'تطور/تنمية', meaning_en: 'development', category: 'society', hsk_level: 4, emoji: '📈', example_zh: '中国快速发展。', example_ar: 'الصين تتطور بسرعة.' },
  { hanzi: '历史', pinyin: 'lì shǐ', meaning_ar: 'تاريخ', meaning_en: 'history', category: 'society', hsk_level: 4, emoji: '📜', example_zh: '历史很有趣。', example_ar: 'التاريخ مثير للاهتمام جداً.' },
  { hanzi: '传统', pinyin: 'chuán tǒng', meaning_ar: 'تقليد', meaning_en: 'tradition', category: 'society', hsk_level: 4, emoji: '🏮', example_zh: '这是中国传统。', example_ar: 'هذا تقليد صيني.' },
  { hanzi: '改革', pinyin: 'gǎi gé', meaning_ar: 'إصلاح', meaning_en: 'reform', category: 'society', hsk_level: 4, emoji: '🔄', example_zh: '改革开放政策。', example_ar: 'سياسة الإصلاح والانفتاح.' },
  { hanzi: '民主', pinyin: 'mín zhǔ', meaning_ar: 'ديمقراطية', meaning_en: 'democracy', category: 'society', hsk_level: 4, emoji: '🗳️', example_zh: '民主很重要。', example_ar: 'الديمقراطية مهمة جداً.' },
  { hanzi: '平等', pinyin: 'píng děng', meaning_ar: 'مساواة', meaning_en: 'equality', category: 'society', hsk_level: 4, emoji: '⚖️', example_zh: '人人平等。', example_ar: 'الجميع متساوون.' },
]

export const HSK4_ADVANCED_VERBS: HskItem[] = [
  { hanzi: '分析', pinyin: 'fēn xī', meaning_ar: 'يحلّل', meaning_en: 'to analyze', category: 'verbs', hsk_level: 4, emoji: '🔍', example_zh: '我们分析数据。', example_ar: 'نحن نحلل البيانات.' },
  { hanzi: '解决', pinyin: 'jiě jué', meaning_ar: 'يحلّ (مشكلة)', meaning_en: 'to solve/resolve', category: 'verbs', hsk_level: 4, emoji: '✅', example_zh: '我们解决了问题。', example_ar: 'حللنا المشكلة.' },
  { hanzi: '影响', pinyin: 'yǐng xiǎng', meaning_ar: 'يؤثر في', meaning_en: 'to influence/affect', category: 'verbs', hsk_level: 4, emoji: '💫', example_zh: '天气影响我们的计划。', example_ar: 'الطقس يؤثر في خططنا.' },
  { hanzi: '提高', pinyin: 'tí gāo', meaning_ar: 'يرفع/يحسّن', meaning_en: 'to improve/raise', category: 'verbs', hsk_level: 4, emoji: '⬆️', example_zh: '提高学习效率。', example_ar: 'تحسين كفاءة الدراسة.' },
  { hanzi: '实现', pinyin: 'shí xiàn', meaning_ar: 'يحقق/ينجز', meaning_en: 'to achieve/realize', category: 'verbs', hsk_level: 4, emoji: '🎯', example_zh: '实现自己的梦想。', example_ar: 'تحقيق أحلامه.' },
  { hanzi: '建立', pinyin: 'jiàn lì', meaning_ar: 'يؤسس/يبني', meaning_en: 'to establish/build', category: 'verbs', hsk_level: 4, emoji: '🏗️', example_zh: '建立合作关系。', example_ar: 'بناء علاقة تعاون.' },
  { hanzi: '保护', pinyin: 'bǎo hù', meaning_ar: 'يحمي', meaning_en: 'to protect', category: 'verbs', hsk_level: 4, emoji: '🛡️', example_zh: '保护自然环境。', example_ar: 'حماية البيئة الطبيعية.' },
  { hanzi: '比较', pinyin: 'bǐ jiào', meaning_ar: 'يقارن', meaning_en: 'to compare', category: 'verbs', hsk_level: 4, emoji: '⚖️', example_zh: '比较两种方法。', example_ar: 'مقارنة الطريقتين.' },
  { hanzi: '证明', pinyin: 'zhèng míng', meaning_ar: 'يُثبت/يُبرهن', meaning_en: 'to prove', category: 'verbs', hsk_level: 4, emoji: '✔️', example_zh: '用事实证明。', example_ar: 'يُثبت بالحقائق.' },
  { hanzi: '考虑', pinyin: 'kǎo lǜ', meaning_ar: 'يفكر في/يأخذ بعين الاعتبار', meaning_en: 'to consider', category: 'verbs', hsk_level: 4, emoji: '🤔', example_zh: '考虑一下再决定。', example_ar: 'فكّر ثم اتخذ القرار.' },
  { hanzi: '代表', pinyin: 'dài biǎo', meaning_ar: 'يمثّل', meaning_en: 'to represent', category: 'verbs', hsk_level: 4, emoji: '🎖️', example_zh: '他代表学校参加比赛。', example_ar: 'هو يمثّل المدرسة في المسابقة.' },
  { hanzi: '承认', pinyin: 'chéng rèn', meaning_ar: 'يعترف', meaning_en: 'to admit/acknowledge', category: 'verbs', hsk_level: 4, emoji: '🙏', example_zh: '承认错误很重要。', example_ar: 'الاعتراف بالخطأ مهم.' },
]

// ── HSK 5 ────────────────────────────────────────────────────
export const HSK5_ACADEMIC: HskItem[] = [
  { hanzi: '理论', pinyin: 'lǐ lùn', meaning_ar: 'نظرية', meaning_en: 'theory', category: 'academic', hsk_level: 5, emoji: '💡', example_zh: '这个理论很重要。', example_ar: 'هذه النظرية مهمة جداً.' },
  { hanzi: '概念', pinyin: 'gài niàn', meaning_ar: 'مفهوم', meaning_en: 'concept', category: 'academic', hsk_level: 5, emoji: '🧠', example_zh: '理解这个概念。', example_ar: 'فهم هذا المفهوم.' },
  { hanzi: '研究', pinyin: 'yán jiū', meaning_ar: 'بحث/دراسة', meaning_en: 'research/study', category: 'academic', hsk_level: 5, emoji: '🔬', example_zh: '进行科学研究。', example_ar: 'إجراء بحث علمي.' },
  { hanzi: '假设', pinyin: 'jiǎ shè', meaning_ar: 'فرضية', meaning_en: 'hypothesis', category: 'academic', hsk_level: 5, emoji: '❓', example_zh: '提出假设。', example_ar: 'طرح فرضية.' },
  { hanzi: '结论', pinyin: 'jié lùn', meaning_ar: 'استنتاج/خلاصة', meaning_en: 'conclusion', category: 'academic', hsk_level: 5, emoji: '📝', example_zh: '得出结论。', example_ar: 'التوصل إلى استنتاج.' },
  { hanzi: '逻辑', pinyin: 'luó jí', meaning_ar: 'منطق', meaning_en: 'logic', category: 'academic', hsk_level: 5, emoji: '🔗', example_zh: '逻辑很清晰。', example_ar: 'المنطق واضح جداً.' },
  { hanzi: '数据', pinyin: 'shù jù', meaning_ar: 'بيانات', meaning_en: 'data', category: 'academic', hsk_level: 5, emoji: '📊', example_zh: '分析数据。', example_ar: 'تحليل البيانات.' },
  { hanzi: '方法论', pinyin: 'fāng fǎ lùn', meaning_ar: 'منهجية', meaning_en: 'methodology', category: 'academic', hsk_level: 5, emoji: '📐', example_zh: '研究方法论。', example_ar: 'منهجية البحث.' },
  { hanzi: '原则', pinyin: 'yuán zé', meaning_ar: 'مبدأ', meaning_en: 'principle', category: 'academic', hsk_level: 5, emoji: '⚡', example_zh: '坚守原则。', example_ar: 'التمسك بالمبادئ.' },
  { hanzi: '贡献', pinyin: 'gòng xiàn', meaning_ar: 'مساهمة', meaning_en: 'contribution', category: 'academic', hsk_level: 5, emoji: '🌟', example_zh: '对社会的贡献。', example_ar: 'المساهمة في المجتمع.' },
  { hanzi: '批判', pinyin: 'pī pàn', meaning_ar: 'نقد', meaning_en: 'criticism/critique', category: 'academic', hsk_level: 5, emoji: '🎯', example_zh: '批判性思维。', example_ar: 'التفكير النقدي.' },
  { hanzi: '观点', pinyin: 'guān diǎn', meaning_ar: 'وجهة نظر', meaning_en: 'viewpoint/perspective', category: 'academic', hsk_level: 5, emoji: '👁️', example_zh: '从不同观点看问题。', example_ar: 'النظر للمشكلة من وجهات نظر مختلفة.' },
  { hanzi: '影响力', pinyin: 'yǐng xiǎng lì', meaning_ar: 'تأثير/نفوذ', meaning_en: 'influence/impact', category: 'academic', hsk_level: 5, emoji: '💫', example_zh: '有很大的影响力。', example_ar: 'له تأثير كبير جداً.' },
  { hanzi: '背景', pinyin: 'bèi jǐng', meaning_ar: 'خلفية/سياق', meaning_en: 'background/context', category: 'academic', hsk_level: 5, emoji: '📖', example_zh: '了解历史背景。', example_ar: 'فهم الخلفية التاريخية.' },
  { hanzi: '综合', pinyin: 'zōng hé', meaning_ar: 'تكامل/شامل', meaning_en: 'comprehensive/integrated', category: 'academic', hsk_level: 5, emoji: '🔄', example_zh: '综合分析。', example_ar: 'تحليل شامل.' },
]

export const HSK5_ADVANCED_EXPRESSIONS: HskItem[] = [
  { hanzi: '不得不', pinyin: 'bù dé bù', meaning_ar: 'لا بد من/مضطر إلى', meaning_en: 'have no choice but to', category: 'expressions', hsk_level: 5, emoji: '😤', example_zh: '我不得不离开。', example_ar: 'لا بد لي من المغادرة.' },
  { hanzi: '尽管', pinyin: 'jǐn guǎn', meaning_ar: 'رغم أن/على الرغم من', meaning_en: 'although/even though', category: 'expressions', hsk_level: 5, emoji: '↔️', example_zh: '尽管很难，他坚持了。', example_ar: 'على الرغم من الصعوبة، استمر.' },
  { hanzi: '因此', pinyin: 'yīn cǐ', meaning_ar: 'لذلك/بالتالي', meaning_en: 'therefore/thus', category: 'expressions', hsk_level: 5, emoji: '➡️', example_zh: '他努力，因此成功了。', example_ar: 'اجتهد، وبالتالي نجح.' },
  { hanzi: '然而', pinyin: 'rán ér', meaning_ar: 'غير أن/إلا أن', meaning_en: 'however/nevertheless', category: 'expressions', hsk_level: 5, emoji: '↩️', example_zh: '计划好，然而失败了。', example_ar: 'التخطيط كان جيداً، غير أنه فشل.' },
  { hanzi: '此外', pinyin: 'cǐ wài', meaning_ar: 'علاوة على ذلك/فضلاً عن', meaning_en: 'furthermore/besides', category: 'expressions', hsk_level: 5, emoji: '➕', example_zh: '此外，还有其他方法。', example_ar: 'علاوة على ذلك، هناك طرق أخرى.' },
  { hanzi: '总之', pinyin: 'zǒng zhī', meaning_ar: 'باختصار/خلاصة القول', meaning_en: 'in summary/in short', category: 'expressions', hsk_level: 5, emoji: '📌', example_zh: '总之，他很优秀。', example_ar: 'باختصار، هو متميز جداً.' },
  { hanzi: '相反', pinyin: 'xiāng fǎn', meaning_ar: 'على العكس', meaning_en: 'on the contrary', category: 'expressions', hsk_level: 5, emoji: '🔄', example_zh: '相反，情况更好了。', example_ar: 'على العكس، الوضع تحسّن.' },
  { hanzi: '随着', pinyin: 'suí zhe', meaning_ar: 'مع/بمرور', meaning_en: 'with/as (time progresses)', category: 'expressions', hsk_level: 5, emoji: '⏳', example_zh: '随着时间的推移。', example_ar: 'مع مرور الوقت.' },
  { hanzi: '根据', pinyin: 'gēn jù', meaning_ar: 'بناءً على/وفقاً لـ', meaning_en: 'according to/based on', category: 'expressions', hsk_level: 5, emoji: '📋', example_zh: '根据研究结果。', example_ar: 'بناءً على نتائج البحث.' },
  { hanzi: '在...方面', pinyin: 'zài...fāng miàn', meaning_ar: 'في مجال.../من ناحية...', meaning_en: 'in terms of/in the aspect of', category: 'expressions', hsk_level: 5, emoji: '🎯', example_zh: '在学习方面很努力。', example_ar: 'مجتهد جداً في مجال الدراسة.' },
]

// ── HSK 6 ────────────────────────────────────────────────────
export const HSK6_LITERARY: HskItem[] = [
  { hanzi: '哲学', pinyin: 'zhé xué', meaning_ar: 'فلسفة', meaning_en: 'philosophy', category: 'literary', hsk_level: 6, emoji: '🤔', example_zh: '研究哲学问题。', example_ar: 'دراسة المسائل الفلسفية.' },
  { hanzi: '文明', pinyin: 'wén míng', meaning_ar: 'حضارة', meaning_en: 'civilization', category: 'literary', hsk_level: 6, emoji: '🏛️', example_zh: '古代文明遗址。', example_ar: 'مواقع الحضارات القديمة.' },
  { hanzi: '思想', pinyin: 'sī xiǎng', meaning_ar: 'فكر/أيديولوجيا', meaning_en: 'thought/ideology', category: 'literary', hsk_level: 6, emoji: '💭', example_zh: '传统思想的影响。', example_ar: 'تأثير الفكر التقليدي.' },
  { hanzi: '精神', pinyin: 'jīng shén', meaning_ar: 'روح/جوهر', meaning_en: 'spirit/essence', category: 'literary', hsk_level: 6, emoji: '✨', example_zh: '民族精神。', example_ar: 'الروح الوطنية.' },
  { hanzi: '境界', pinyin: 'jìng jiè', meaning_ar: 'مستوى/مرتبة', meaning_en: 'level/realm/state', category: 'literary', hsk_level: 6, emoji: '🌟', example_zh: '达到更高的境界。', example_ar: 'الوصول إلى مستوى أعلى.' },
  { hanzi: '审美', pinyin: 'shěn měi', meaning_ar: 'ذوق جمالي/تقدير الجمال', meaning_en: 'aesthetics/appreciation of beauty', category: 'literary', hsk_level: 6, emoji: '🎨', example_zh: '审美观念很重要。', example_ar: 'الذوق الجمالي مهم جداً.' },
  { hanzi: '内涵', pinyin: 'nèi hán', meaning_ar: 'مضمون/عمق', meaning_en: 'connotation/depth', category: 'literary', hsk_level: 6, emoji: '💎', example_zh: '这首诗内涵丰富。', example_ar: 'هذه القصيدة غنية بمضمونها.' },
  { hanzi: '韵味', pinyin: 'yùn wèi', meaning_ar: 'رونق/سحر', meaning_en: 'charm/artistic appeal', category: 'literary', hsk_level: 6, emoji: '🌸', example_zh: '充满诗意的韵味。', example_ar: 'مليء بالرونق الشعري.' },
  { hanzi: '意境', pinyin: 'yì jìng', meaning_ar: 'أجواء شعرية/حالة مزاجية', meaning_en: 'artistic conception/mood', category: 'literary', hsk_level: 6, emoji: '🌙', example_zh: '创造美丽的意境。', example_ar: 'خلق أجواء جميلة وشعرية.' },
  { hanzi: '隐喻', pinyin: 'yǐn yù', meaning_ar: 'استعارة', meaning_en: 'metaphor', category: 'literary', hsk_level: 6, emoji: '🦋', example_zh: '用隐喻表达感情。', example_ar: 'التعبير عن المشاعر بالاستعارة.' },
  { hanzi: '象征', pinyin: 'xiàng zhēng', meaning_ar: 'رمز/يرمز إلى', meaning_en: 'symbol/to symbolize', category: 'literary', hsk_level: 6, emoji: '🎴', example_zh: '龙象征着权力。', example_ar: 'التنين يرمز إلى القوة.' },
  { hanzi: '传承', pinyin: 'chuán chéng', meaning_ar: 'توارث/انتقال', meaning_en: 'inheritance/transmission', category: 'literary', hsk_level: 6, emoji: '🔗', example_zh: '文化传承很重要。', example_ar: 'توارث الثقافة مهم جداً.' },
]

export const HSK6_MASTERY: HskItem[] = [
  { hanzi: '辩证', pinyin: 'biàn zhèng', meaning_ar: 'جدلي/ديالكتيكي', meaning_en: 'dialectical', category: 'mastery', hsk_level: 6, emoji: '⚖️', example_zh: '辩证地看问题。', example_ar: 'النظر للمشكلة بشكل جدلي.' },
  { hanzi: '演变', pinyin: 'yǎn biàn', meaning_ar: 'تطور/تحول تدريجي', meaning_en: 'evolution/gradual change', category: 'mastery', hsk_level: 6, emoji: '🔄', example_zh: '语言的演变过程。', example_ar: 'مسيرة تطور اللغة.' },
  { hanzi: '折射', pinyin: 'zhé shè', meaning_ar: 'انعكاس/تجلٍّ', meaning_en: 'reflection/refraction', category: 'mastery', hsk_level: 6, emoji: '💡', example_zh: '折射出社会问题。', example_ar: 'يعكس المشاكل الاجتماعية.' },
  { hanzi: '沉淀', pinyin: 'chén diàn', meaning_ar: 'ترسّب/تراكم', meaning_en: 'sediment/accumulation', category: 'mastery', hsk_level: 6, emoji: '⏳', example_zh: '历史的沉淀。', example_ar: 'تراكم التاريخ.' },
  { hanzi: '融合', pinyin: 'róng hé', meaning_ar: 'اندماج/تكامل', meaning_en: 'fusion/integration', category: 'mastery', hsk_level: 6, emoji: '🔀', example_zh: '文化的融合。', example_ar: 'اندماج الثقافات.' },
  { hanzi: '升华', pinyin: 'shēng huá', meaning_ar: 'ارتقاء/سمو', meaning_en: 'sublimation/elevation', category: 'mastery', hsk_level: 6, emoji: '🌟', example_zh: '精神的升华。', example_ar: 'سمو الروح.' },
  { hanzi: '凝练', pinyin: 'níng liàn', meaning_ar: 'موجز/مكثّف', meaning_en: 'concise/refined', category: 'mastery', hsk_level: 6, emoji: '💎', example_zh: '语言凝练简洁。', example_ar: 'اللغة موجزة وبليغة.' },
  { hanzi: '贯穿', pinyin: 'guàn chuān', meaning_ar: 'يخترق/يسري في', meaning_en: 'to run through/pervade', category: 'mastery', hsk_level: 6, emoji: '➡️', example_zh: '贯穿全文的主题。', example_ar: 'الموضوع الذي يسري في النص كله.' },
  { hanzi: '彰显', pinyin: 'zhāng xiǎn', meaning_ar: 'يُبرز/يُجلّي', meaning_en: 'to highlight/manifest', category: 'mastery', hsk_level: 6, emoji: '✨', example_zh: '彰显文化魅力。', example_ar: 'إبراز سحر الثقافة.' },
  { hanzi: '铸就', pinyin: 'zhù jiù', meaning_ar: 'يصوغ/يشكّل', meaning_en: 'to forge/shape', category: 'mastery', hsk_level: 6, emoji: '⚒️', example_zh: '铸就了民族精神。', example_ar: 'صاغ الروح الوطنية.' },
]
