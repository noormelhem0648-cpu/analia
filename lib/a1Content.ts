// A1 Content — following 《新编阿拉伯语》 第一册 (Volume 1)
// Story character: مينغ (Ming) — Chinese student in Cairo

import type { VocabItem } from './preA1Content'

// ─────────────────────────────────────────────────────────────
//  الضمائر والجملة الاسمية — Pronouns & Nominal Sentences (A1 Unit 1)
// ─────────────────────────────────────────────────────────────
export const A1_PRONOUNS: VocabItem[] = [
  { arabic: 'أنا طالب', arabic_with_harakat: 'أَنَا طَالِبٌ', transliteration: 'anā ṭālib', meaning_zh: '我是学生（男）', meaning_en: 'I am a student (m)', category: 'sentences', emoji: '👨‍🎓', example_sentence: 'أَنَا طَالِبٌ مِنَ الصِّينِ.', example_meaning_zh: '我是来自中国的学生。' },
  { arabic: 'أنا طالبة', arabic_with_harakat: 'أَنَا طَالِبَةٌ', transliteration: 'anā ṭāliba', meaning_zh: '我是学生（女）', meaning_en: 'I am a student (f)', category: 'sentences', emoji: '👩‍🎓', example_sentence: 'أَنَا طَالِبَةٌ في الجامعة.', example_meaning_zh: '我是大学里的学生。' },
  { arabic: 'هذا', arabic_with_harakat: 'هَذَا', transliteration: 'hādhā', meaning_zh: '这个（男性名词）', meaning_en: 'This (m)', category: 'demonstratives', emoji: '👉', example_sentence: 'هَذَا كِتَابٌ.', example_meaning_zh: '这是一本书。' },
  { arabic: 'هذه', arabic_with_harakat: 'هَذِهِ', transliteration: 'hādhihi', meaning_zh: '这个（女性名词）', meaning_en: 'This (f)', category: 'demonstratives', emoji: '👉', example_sentence: 'هَذِهِ مَدْرَسَةٌ.', example_meaning_zh: '这是一所学校。' },
  { arabic: 'ذلك', arabic_with_harakat: 'ذَلِكَ', transliteration: 'dhālika', meaning_zh: '那个（远指，男）', meaning_en: 'That (m)', category: 'demonstratives', emoji: '👈', example_sentence: 'ذَلِكَ بَيْتٌ كَبِيرٌ.', example_meaning_zh: '那是一栋大房子。' },
  { arabic: 'ما هذا؟', arabic_with_harakat: 'مَا هَذَا؟', transliteration: 'mā hādhā?', meaning_zh: '这是什么？', meaning_en: 'What is this?', category: 'questions', emoji: '❓', example_sentence: 'مَا هَذَا؟ — هَذَا قَلَمٌ.', example_meaning_zh: '这是什么？— 这是一支笔。' },
  { arabic: 'من هذا؟', arabic_with_harakat: 'مَنْ هَذَا؟', transliteration: 'man hādhā?', meaning_zh: '这是谁？', meaning_en: 'Who is this?', category: 'questions', emoji: '❓', example_sentence: 'مَنْ هَذَا؟ — هَذَا مُعَلِّمٌ.', example_meaning_zh: '这是谁？— 这是一位老师。' },
]

// ─────────────────────────────────────────────────────────────
//  المهن والناس — Professions (A1 Unit 2)
// ─────────────────────────────────────────────────────────────
export const A1_PROFESSIONS: VocabItem[] = [
  { arabic: 'طالب', arabic_with_harakat: 'طَالِبٌ', transliteration: 'ṭālib', meaning_zh: '学生（男）', meaning_en: 'Student (m)', category: 'professions', emoji: '👨‍🎓' },
  { arabic: 'طالبة', arabic_with_harakat: 'طَالِبَةٌ', transliteration: 'ṭāliba', meaning_zh: '学生（女）', meaning_en: 'Student (f)', category: 'professions', emoji: '👩‍🎓' },
  { arabic: 'معلم', arabic_with_harakat: 'مُعَلِّمٌ', transliteration: 'muʿallim', meaning_zh: '老师（男）', meaning_en: 'Teacher (m)', category: 'professions', emoji: '👨‍🏫' },
  { arabic: 'معلمة', arabic_with_harakat: 'مُعَلِّمَةٌ', transliteration: 'muʿallima', meaning_zh: '老师（女）', meaning_en: 'Teacher (f)', category: 'professions', emoji: '👩‍🏫' },
  { arabic: 'طبيب', arabic_with_harakat: 'طَبِيبٌ', transliteration: 'ṭabīb', meaning_zh: '医生（男）', meaning_en: 'Doctor (m)', category: 'professions', emoji: '👨‍⚕️' },
  { arabic: 'مهندس', arabic_with_harakat: 'مُهَنْدِسٌ', transliteration: 'muhandis', meaning_zh: '工程师', meaning_en: 'Engineer', category: 'professions', emoji: '👷' },
  { arabic: 'موظف', arabic_with_harakat: 'مُوَظَّفٌ', transliteration: 'muwazzaf', meaning_zh: '职员/公务员', meaning_en: 'Employee / Officer', category: 'professions', emoji: '💼' },
  { arabic: 'تاجر', arabic_with_harakat: 'تَاجِرٌ', transliteration: 'tājir', meaning_zh: '商人', meaning_en: 'Merchant', category: 'professions', emoji: '🧑‍💼' },
]

// ─────────────────────────────────────────────────────────────
//  المكان والجنسيات — Places & Nationalities (A1 Unit 3)
// ─────────────────────────────────────────────────────────────
export const A1_PLACES: VocabItem[] = [
  { arabic: 'مدرسة', arabic_with_harakat: 'مَدْرَسَةٌ', transliteration: 'madrasa', meaning_zh: '学校', meaning_en: 'School', category: 'places', emoji: '🏫', example_sentence: 'أَنَا فِي الْمَدْرَسَةِ.', example_meaning_zh: '我在学校里。' },
  { arabic: 'جامعة', arabic_with_harakat: 'جَامِعَةٌ', transliteration: 'jāmiʿa', meaning_zh: '大学', meaning_en: 'University', category: 'places', emoji: '🎓', example_sentence: 'هَذِهِ جَامِعَةٌ كَبِيرَةٌ.', example_meaning_zh: '这是一所大学校。' },
  { arabic: 'مستشفى', arabic_with_harakat: 'مُسْتَشْفًى', transliteration: 'mustashfā', meaning_zh: '医院', meaning_en: 'Hospital', category: 'places', emoji: '🏥' },
  { arabic: 'مكتب', arabic_with_harakat: 'مَكْتَبٌ', transliteration: 'maktab', meaning_zh: '办公室/桌子', meaning_en: 'Office / Desk', category: 'places', emoji: '🖥️' },
  { arabic: 'مسجد', arabic_with_harakat: 'مَسْجِدٌ', transliteration: 'masjid', meaning_zh: '清真寺', meaning_en: 'Mosque', category: 'places', emoji: '🕌' },
  { arabic: 'سوق', arabic_with_harakat: 'سُوقٌ', transliteration: 'sūq', meaning_zh: '市场/集市', meaning_en: 'Market / Bazaar', category: 'places', emoji: '🏪', example_sentence: 'أَنَا فِي السُّوقِ.', example_meaning_zh: '我在市场里。' },
  { arabic: 'صيني', arabic_with_harakat: 'صِينِيٌّ', transliteration: 'ṣīnī', meaning_zh: '中国人（男）', meaning_en: 'Chinese (m)', category: 'nationalities', emoji: '🇨🇳' },
  { arabic: 'عربي', arabic_with_harakat: 'عَرَبِيٌّ', transliteration: 'ʿarabī', meaning_zh: '阿拉伯人（男）', meaning_en: 'Arab (m)', category: 'nationalities', emoji: '🕌' },
  { arabic: 'مصري', arabic_with_harakat: 'مِصْرِيٌّ', transliteration: 'miṣrī', meaning_zh: '埃及人', meaning_en: 'Egyptian', category: 'nationalities', emoji: '🇪🇬' },
]

// ─────────────────────────────────────────────────────────────
//  الوقت — Time Expressions (A1 Unit 4)
// ─────────────────────────────────────────────────────────────
export const A1_TIME: VocabItem[] = [
  { arabic: 'اليوم', arabic_with_harakat: 'اَلْيَوْمَ', transliteration: 'al-yawma', meaning_zh: '今天', meaning_en: 'Today', category: 'time', emoji: '📅' },
  { arabic: 'غدا', arabic_with_harakat: 'غَدًا', transliteration: 'ghadan', meaning_zh: '明天', meaning_en: 'Tomorrow', category: 'time', emoji: '🌅' },
  { arabic: 'أمس', arabic_with_harakat: 'أَمْسِ', transliteration: 'amsi', meaning_zh: '昨天', meaning_en: 'Yesterday', category: 'time', emoji: '📆' },
  { arabic: 'الآن', arabic_with_harakat: 'اَلْآنَ', transliteration: 'al-āna', meaning_zh: '现在', meaning_en: 'Now', category: 'time', emoji: '⏰' },
  { arabic: 'صباح', arabic_with_harakat: 'صَبَاحٌ', transliteration: 'ṣabāḥ', meaning_zh: '早晨', meaning_en: 'Morning', category: 'time', emoji: '🌄' },
  { arabic: 'مساء', arabic_with_harakat: 'مَسَاءٌ', transliteration: 'masāʾ', meaning_zh: '傍晚/晚上', meaning_en: 'Evening', category: 'time', emoji: '🌆' },
  { arabic: 'ليل', arabic_with_harakat: 'لَيْلٌ', transliteration: 'layl', meaning_zh: '夜晚', meaning_en: 'Night', category: 'time', emoji: '🌙' },
  { arabic: 'أسبوع', arabic_with_harakat: 'أُسْبُوعٌ', transliteration: 'usbūʿ', meaning_zh: '一周', meaning_en: 'Week', category: 'time', emoji: '🗓️' },
  { arabic: 'شهر', arabic_with_harakat: 'شَهْرٌ', transliteration: 'shahr', meaning_zh: '月份', meaning_en: 'Month', category: 'time', emoji: '📅' },
  { arabic: 'سنة', arabic_with_harakat: 'سَنَةٌ', transliteration: 'sana', meaning_zh: '年', meaning_en: 'Year', category: 'time', emoji: '🎊' },
]

// ─────────────────────────────────────────────────────────────
//  الفعل الماضي — Past Tense Verbs (A1 Unit 5, following 《新编》)
// ─────────────────────────────────────────────────────────────
export const A1_VERBS_PAST: VocabItem[] = [
  { arabic: 'كَتَبَ', arabic_with_harakat: 'كَتَبَ', transliteration: 'kataba', meaning_zh: '他写了', meaning_en: 'He wrote', category: 'verbs', emoji: '✍️', example_sentence: 'كَتَبَ مينغ رِسَالَةً.', example_meaning_zh: '明写了一封信。' },
  { arabic: 'قَرَأَ', arabic_with_harakat: 'قَرَأَ', transliteration: 'qaraʾa', meaning_zh: '他读了', meaning_en: 'He read', category: 'verbs', emoji: '📖', example_sentence: 'قَرَأَ الطَّالِبُ الكِتَابَ.', example_meaning_zh: '学生读了这本书。' },
  { arabic: 'ذَهَبَ', arabic_with_harakat: 'ذَهَبَ', transliteration: 'dhahaba', meaning_zh: '他去了', meaning_en: 'He went', category: 'verbs', emoji: '🚶', example_sentence: 'ذَهَبَ مينغ إِلَى الْجَامِعَةِ.', example_meaning_zh: '明去了大学。' },
  { arabic: 'جَاءَ', arabic_with_harakat: 'جَاءَ', transliteration: 'jāʾa', meaning_zh: '他来了', meaning_en: 'He came', category: 'verbs', emoji: '🏃', example_sentence: 'جَاءَ الْأُسْتَاذُ مُتَأَخِّرًا.', example_meaning_zh: '老师来晚了。' },
  { arabic: 'أَكَلَ', arabic_with_harakat: 'أَكَلَ', transliteration: 'akala', meaning_zh: '他吃了', meaning_en: 'He ate', category: 'verbs', emoji: '🍽️', example_sentence: 'أَكَلَ مينغ الخُبْزَ.', example_meaning_zh: '明吃了面包。' },
  { arabic: 'شَرِبَ', arabic_with_harakat: 'شَرِبَ', transliteration: 'shariba', meaning_zh: '他喝了', meaning_en: 'He drank', category: 'verbs', emoji: '🥤', example_sentence: 'شَرِبَ الماءَ.', example_meaning_zh: '他喝了水。' },
  { arabic: 'فَهِمَ', arabic_with_harakat: 'فَهِمَ', transliteration: 'fahima', meaning_zh: '他理解了', meaning_en: 'He understood', category: 'verbs', emoji: '💡', example_sentence: 'فَهِمَ مينغ الدَّرْسَ.', example_meaning_zh: '明理解了这节课。' },
  { arabic: 'دَرَسَ', arabic_with_harakat: 'دَرَسَ', transliteration: 'darasa', meaning_zh: '他学习了', meaning_en: 'He studied', category: 'verbs', emoji: '📚', example_sentence: 'دَرَسَ اللُّغَةَ الْعَرَبِيَّةَ.', example_meaning_zh: '他学习了阿拉伯语。' },
]

// ─────────────────────────────────────────────────────────────
//  المضارع — Present Tense (A1 Unit 6)
// ─────────────────────────────────────────────────────────────
export const A1_VERBS_PRESENT: VocabItem[] = [
  { arabic: 'يَكْتُبُ', arabic_with_harakat: 'يَكْتُبُ', transliteration: 'yaktubu', meaning_zh: '他（正在）写', meaning_en: 'He writes / is writing', category: 'verbs', emoji: '✍️', example_sentence: 'يَكْتُبُ مينغ كُلَّ يَوْمٍ.', example_meaning_zh: '明每天写字。' },
  { arabic: 'يَقْرَأُ', arabic_with_harakat: 'يَقْرَأُ', transliteration: 'yaqraʾu', meaning_zh: '他（正在）读', meaning_en: 'He reads', category: 'verbs', emoji: '📖' },
  { arabic: 'يَذْهَبُ', arabic_with_harakat: 'يَذْهَبُ', transliteration: 'yadhhabu', meaning_zh: '他（正在）去', meaning_en: 'He goes', category: 'verbs', emoji: '🚶', example_sentence: 'يَذْهَبُ إِلَى الْمَدْرَسَةِ كُلَّ صَبَاحٍ.', example_meaning_zh: '他每天早上去学校。' },
  { arabic: 'يَتَكَلَّمُ', arabic_with_harakat: 'يَتَكَلَّمُ', transliteration: 'yatakallamu', meaning_zh: '他（正在）说话', meaning_en: 'He speaks', category: 'verbs', emoji: '🗣️', example_sentence: 'يَتَكَلَّمُ الْعَرَبِيَّةَ بِطَلَاقَةٍ.', example_meaning_zh: '他流利地说阿拉伯语。' },
  { arabic: 'يُرِيدُ', arabic_with_harakat: 'يُرِيدُ', transliteration: 'yurīdu', meaning_zh: '他想要', meaning_en: 'He wants', category: 'verbs', emoji: '🙏', example_sentence: 'يُرِيدُ مينغ أَنْ يَتَعَلَّمَ الْعَرَبِيَّةَ.', example_meaning_zh: '明想要学阿拉伯语。' },
  { arabic: 'يَعْمَلُ', arabic_with_harakat: 'يَعْمَلُ', transliteration: 'yaʿmalu', meaning_zh: '他工作/做', meaning_en: 'He works / does', category: 'verbs', emoji: '💼' },
]

// ─────────────────────────────────────────────────────────────
//  مينغ في القاهرة — Story Dialogues (A1 Units 1-6)
// ─────────────────────────────────────────────────────────────
export interface StoryDialogue {
  id: string
  title_zh: string
  title_ar: string
  scene_zh: string      // scene description in Chinese
  scene_emoji: string
  lines: Array<{
    speaker: 'ming' | 'other'
    speaker_name_zh: string
    speaker_emoji: string
    arabic: string
    arabic_with_harakat: string
    meaning_zh: string
    transliteration: string
  }>
  vocab_focus: string[]   // key vocab in this dialogue
}

export const MING_STORIES: StoryDialogue[] = [
  {
    id: 'cairo-arrival',
    title_zh: '明到达开罗',
    title_ar: 'مينغ يصل إلى القاهرة',
    scene_zh: '🌙 深夜，开罗机场。明（مينغ）第一次来到阿拉伯世界，遇见了他的新朋友哈立德。',
    scene_emoji: '✈️🌙',
    lines: [
      { speaker: 'other', speaker_name_zh: '哈立德', speaker_emoji: '👨‍🦱', arabic: 'أهلاً وسهلاً في القاهرة!', arabic_with_harakat: 'أَهْلًا وَسَهْلًا فِي الْقَاهِرَةِ!', meaning_zh: '欢迎来到开罗！', transliteration: 'Ahlan wa-sahlan fī l-Qāhira!' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'شكراً جزيلاً! أنا مينغ، طالب من الصين.', arabic_with_harakat: 'شُكْرًا جَزِيلًا! أَنَا مِينْغ، طَالِبٌ مِنَ الصِّينِ.', meaning_zh: '非常感谢！我叫明，是来自中国的学生。', transliteration: 'Shukran jazīlan! Anā Mīng, ṭālib min aṣ-Ṣīn.' },
      { speaker: 'other', speaker_name_zh: '哈立德', speaker_emoji: '👨‍🦱', arabic: 'أنا خالد. أنا مصري. كيف حالك؟', arabic_with_harakat: 'أَنَا خَالِدٌ. أَنَا مِصْرِيٌّ. كَيْفَ حَالُكَ؟', meaning_zh: '我叫哈立德，我是埃及人。你怎么样？', transliteration: 'Anā Khālid. Anā miṣrī. Kayfa ḥāluk?' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'أنا بخير، الحمد لله! مسرور بلقائك.', arabic_with_harakat: 'أَنَا بِخَيْرٍ، اَلْحَمْدُ لِلَّهِ! مَسْرُورٌ بِلِقَائِكَ.', meaning_zh: '我很好，谢谢！很高兴认识你。', transliteration: 'Anā bi-khayr, al-ḥamdu li-llāh! Masrūr bi-liqāʾik.' },
    ],
    vocab_focus: ['أهلا وسهلا', 'شكرا', 'طالب', 'مصري', 'مسرور'],
  },
  {
    id: 'university',
    title_zh: '在大学里',
    title_ar: 'في الجامعة',
    scene_zh: '🌅 第二天早晨，明在开罗大学遇见了他的阿拉伯语老师。',
    scene_emoji: '🏛️📚',
    lines: [
      { speaker: 'other', speaker_name_zh: '老师', speaker_emoji: '👩‍🏫', arabic: 'صباح الخير يا طلاب!', arabic_with_harakat: 'صَبَاحُ الْخَيْرِ يَا طُلَّابُ!', meaning_zh: '同学们，早上好！', transliteration: 'Ṣabāḥ al-khayr yā ṭullāb!' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'صباح النور يا أستاذة!', arabic_with_harakat: 'صَبَاحُ النُّورِ يَا أُسْتَاذَةُ!', meaning_zh: '老师，早上好！', transliteration: 'Ṣabāḥ an-nūr yā ustādha!' },
      { speaker: 'other', speaker_name_zh: '老师', speaker_emoji: '👩‍🏫', arabic: 'ما اسمك أنت؟', arabic_with_harakat: 'مَا اسْمُكَ أَنْتَ؟', meaning_zh: '你叫什么名字？', transliteration: 'Mā ismuk anta?' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'اسمي مينغ. أنا من الصين. أدرس اللغة العربية.', arabic_with_harakat: 'اِسْمِي مِينْغ. أَنَا مِنَ الصِّينِ. أَدْرُسُ اللُّغَةَ الْعَرَبِيَّةَ.', meaning_zh: '我叫明。我来自中国，我在学阿拉伯语。', transliteration: 'Ismī Mīng. Anā min aṣ-Ṣīn. Adrusu l-lugha l-ʿarabiyya.' },
      { speaker: 'other', speaker_name_zh: '老师', speaker_emoji: '👩‍🏫', arabic: 'ممتاز! مرحباً بك يا مينغ.', arabic_with_harakat: 'مُمْتَازٌ! مَرْحَبًا بِكَ يَا مِينْغ.', meaning_zh: '太好了！欢迎你，明。', transliteration: 'Mumtāz! Marḥaban bika yā Mīng.' },
    ],
    vocab_focus: ['صباح الخير', 'أستاذة', 'اسمي', 'أدرس', 'ممتاز'],
  },
  {
    id: 'market',
    title_zh: '在市场里',
    title_ar: 'في السوق',
    scene_zh: '🌆 傍晚，明和哈立德去了开罗著名的汗·哈利利市场。',
    scene_emoji: '🏪✨',
    lines: [
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'هذا السوق جميل جداً!', arabic_with_harakat: 'هَذَا السُّوقُ جَمِيلٌ جِدًّا!', meaning_zh: '这个市场太漂亮了！', transliteration: 'Hādhā s-sūqu jamīl jiddan!' },
      { speaker: 'other', speaker_name_zh: '哈立德', speaker_emoji: '👨‍🦱', arabic: 'نعم! هذا خان الخليلي. قديم جداً.', arabic_with_harakat: 'نَعَمْ! هَذَا خَانُ الْخَلِيلِي. قَدِيمٌ جِدًّا.', meaning_zh: '是的！这是汗·哈利利，非常古老。', transliteration: 'Naʿam! Hādhā Khān al-Khalīlī. Qadīm jiddan.' },
      { speaker: 'other', speaker_name_zh: '小贩', speaker_emoji: '🧔', arabic: 'تفضل يا سيدي! بكم هذا؟', arabic_with_harakat: 'تَفَضَّلْ يَا سَيِّدِي! بِكَمْ هَذَا؟', meaning_zh: '请进，先生！这个多少钱？', transliteration: 'Tafaḍḍal yā sayyidī! Bi-kam hādhā?' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'بكم هذا الكتاب؟', arabic_with_harakat: 'بِكَمْ هَذَا الْكِتَابُ؟', meaning_zh: '这本书多少钱？', transliteration: 'Bi-kam hādhā l-kitāb?' },
      { speaker: 'other', speaker_name_zh: '小贩', speaker_emoji: '🧔', arabic: 'بخمسة جنيهات.', arabic_with_harakat: 'بِخَمْسَةِ جُنَيْهَاتٍ.', meaning_zh: '五埃镑。', transliteration: 'Bi-khamsat junayhat.' },
    ],
    vocab_focus: ['جميل', 'جداً', 'قديم', 'تفضل', 'بكم'],
  },
]

// ─────────────────────────────────────────────────────────────
//  A1 Lesson Plan
// ─────────────────────────────────────────────────────────────
export const A1_LESSON_PLAN = [
  { day_number: 1, lesson_type: 'vocabulary', title_zh: '人称代词：أنا أنت هو هي', title_ar: 'الضمائر المنفصلة', title_en: 'Personal Pronouns', xp_reward: 25, estimated_minutes: 15 },
  { day_number: 2, lesson_type: 'dialogue', title_zh: '故事：明到达开罗', title_ar: 'قصة: مينغ يصل إلى القاهرة', title_en: 'Story: Ming arrives in Cairo', xp_reward: 30, estimated_minutes: 20 },
  { day_number: 3, lesson_type: 'vocabulary', title_zh: '职业与身份', title_ar: 'المهن والهويات', title_en: 'Professions & Identity', xp_reward: 25, estimated_minutes: 15 },
  { day_number: 4, lesson_type: 'vocabulary', title_zh: '指示代词：هذا هذه ذلك', title_ar: 'أسماء الإشارة', title_en: 'Demonstratives', xp_reward: 20, estimated_minutes: 12 },
  { day_number: 5, lesson_type: 'dialogue', title_zh: '故事：在大学里', title_ar: 'قصة: في الجامعة', title_en: 'Story: At the University', xp_reward: 30, estimated_minutes: 20 },
  { day_number: 6, lesson_type: 'vocabulary', title_zh: '地点与国籍', title_ar: 'الأماكن والجنسيات', title_en: 'Places & Nationalities', xp_reward: 25, estimated_minutes: 15 },
  { day_number: 7, lesson_type: 'vocabulary', title_zh: '时间表达', title_ar: 'تعبيرات الزمن', title_en: 'Time Expressions', xp_reward: 20, estimated_minutes: 12 },
  { day_number: 8, lesson_type: 'vocabulary', title_zh: '过去时动词', title_ar: 'الفعل الماضي', title_en: 'Past Tense Verbs', xp_reward: 35, estimated_minutes: 25 },
  { day_number: 9, lesson_type: 'dialogue', title_zh: '故事：在市场里', title_ar: 'قصة: في السوق', title_en: 'Story: At the Market', xp_reward: 30, estimated_minutes: 20 },
  { day_number: 10, lesson_type: 'vocabulary', title_zh: '现在时动词', title_ar: 'الفعل المضارع', title_en: 'Present Tense Verbs', xp_reward: 35, estimated_minutes: 25 },
]
