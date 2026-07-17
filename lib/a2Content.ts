// A2 Content — following 《新编阿拉伯语》 第二册 (Volume 2)
// Story: مينغ يتعمق في حياة القاهرة — Ming deepens into Cairo life

import type { VocabItem } from './preA1Content'
import type { StoryDialogue } from './a1Content'

// ─────────────────────────────────────────────────────────────
//  الجملة الفعلية + ترتيب الكلمات — Sentence Structure (A2 Unit 1)
// ─────────────────────────────────────────────────────────────
export const A2_SENTENCE_STRUCTURE: VocabItem[] = [
  { arabic: 'لأن', arabic_with_harakat: 'لِأَنَّ', transliteration: 'li-anna', meaning_zh: '因为', meaning_en: 'Because', category: 'connectors', emoji: '🔗', example_sentence: 'أحبّ العربية لأنها جميلة.', example_meaning_zh: '我喜欢阿拉伯语因为它很美。' },
  { arabic: 'لكن', arabic_with_harakat: 'لَكِنَّ', transliteration: 'lākinna', meaning_zh: '但是', meaning_en: 'But / However', category: 'connectors', emoji: '↔️', example_sentence: 'أريد الذهاب لكنني مشغول.', example_meaning_zh: '我想去但我很忙。' },
  { arabic: 'عندما', arabic_with_harakat: 'عِنْدَمَا', transliteration: 'ʿindamā', meaning_zh: '当...时候', meaning_en: 'When', category: 'connectors', emoji: '⏰', example_sentence: 'عندما أدرس، أشرب القهوة.', example_meaning_zh: '当我学习时，我喝咖啡。' },
  { arabic: 'إذا', arabic_with_harakat: 'إِذَا', transliteration: 'idhā', meaning_zh: '如果', meaning_en: 'If', category: 'connectors', emoji: '❓', example_sentence: 'إذا درست جيداً، ستنجح.', example_meaning_zh: '如果你好好学习，你会成功。' },
  { arabic: 'حتى', arabic_with_harakat: 'حَتَّى', transliteration: 'ḥattā', meaning_zh: '直到/为了', meaning_en: 'Until / In order to', category: 'connectors', emoji: '🎯', example_sentence: 'درس حتى الفجر.', example_meaning_zh: '他学习到黎明。' },
  { arabic: 'بعد أن', arabic_with_harakat: 'بَعْدَ أَنْ', transliteration: 'baʿda an', meaning_zh: '在...之后', meaning_en: 'After (+ verb)', category: 'connectors', emoji: '➡️', example_sentence: 'بعد أن أكل، ذهب للنوم.', example_meaning_zh: '吃完后，他去睡觉了。' },
  { arabic: 'قبل أن', arabic_with_harakat: 'قَبْلَ أَنْ', transliteration: 'qabla an', meaning_zh: '在...之前', meaning_en: 'Before (+ verb)', category: 'connectors', emoji: '⬅️', example_sentence: 'قبل أن يذهب، قال مع السلامة.', example_meaning_zh: '在离开之前，他说了再见。' },
]

// ─────────────────────────────────────────────────────────────
//  الجسم والصحة — Body & Health (A2 Unit 2)
// ─────────────────────────────────────────────────────────────
export const A2_BODY_HEALTH: VocabItem[] = [
  { arabic: 'رأس', arabic_with_harakat: 'رَأْسٌ', transliteration: 'raʾs', meaning_zh: '头', meaning_en: 'Head', category: 'body', emoji: '🗣️' },
  { arabic: 'عين', arabic_with_harakat: 'عَيْنٌ', transliteration: 'ʿayn', meaning_zh: '眼睛', meaning_en: 'Eye', category: 'body', emoji: '👁️', example_sentence: 'عيناه جميلتان.', example_meaning_zh: '他的眼睛很漂亮。' },
  { arabic: 'أذن', arabic_with_harakat: 'أُذُنٌ', transliteration: 'udhun', meaning_zh: '耳朵', meaning_en: 'Ear', category: 'body', emoji: '👂' },
  { arabic: 'يد', arabic_with_harakat: 'يَدٌ', transliteration: 'yad', meaning_zh: '手', meaning_en: 'Hand', category: 'body', emoji: '🖐️' },
  { arabic: 'قلب', arabic_with_harakat: 'قَلْبٌ', transliteration: 'qalb', meaning_zh: '心脏/心', meaning_en: 'Heart', category: 'body', emoji: '❤️', example_sentence: 'أحبّك من كل قلبي.', example_meaning_zh: '我全心全意地爱你。' },
  { arabic: 'مريض', arabic_with_harakat: 'مَرِيضٌ', transliteration: 'marīḍ', meaning_zh: '病人/生病的', meaning_en: 'Sick / Patient', category: 'health', emoji: '🤒', example_sentence: 'أنا مريض اليوم.', example_meaning_zh: '我今天生病了。' },
  { arabic: 'دواء', arabic_with_harakat: 'دَوَاءٌ', transliteration: 'dawāʾ', meaning_zh: '药', meaning_en: 'Medicine', category: 'health', emoji: '💊' },
  { arabic: 'صداع', arabic_with_harakat: 'صُدَاعٌ', transliteration: 'ṣudāʿ', meaning_zh: '头痛', meaning_en: 'Headache', category: 'health', emoji: '🤕', example_sentence: 'عندي صداع شديد.', example_meaning_zh: '我头痛得很厉害。' },
  { arabic: 'حمى', arabic_with_harakat: 'حُمَّى', transliteration: 'ḥummā', meaning_zh: '发烧', meaning_en: 'Fever', category: 'health', emoji: '🌡️' },
]

// ─────────────────────────────────────────────────────────────
//  الطعام والشراب — Food & Drink (A2 Unit 3)
// ─────────────────────────────────────────────────────────────
export const A2_FOOD: VocabItem[] = [
  { arabic: 'أكل', arabic_with_harakat: 'أَكْلٌ', transliteration: 'akl', meaning_zh: '食物', meaning_en: 'Food', category: 'food', emoji: '🍽️' },
  { arabic: 'فطور', arabic_with_harakat: 'فُطُورٌ', transliteration: 'fuṭūr', meaning_zh: '早餐', meaning_en: 'Breakfast', category: 'food', emoji: '🌅', example_sentence: 'أتناول الفطور في السابعة.', example_meaning_zh: '我七点吃早餐。' },
  { arabic: 'غداء', arabic_with_harakat: 'غَدَاءٌ', transliteration: 'ghadāʾ', meaning_zh: '午餐', meaning_en: 'Lunch', category: 'food', emoji: '☀️' },
  { arabic: 'عشاء', arabic_with_harakat: 'عَشَاءٌ', transliteration: 'ʿashāʾ', meaning_zh: '晚餐', meaning_en: 'Dinner', category: 'food', emoji: '🌙' },
  { arabic: 'قهوة', arabic_with_harakat: 'قَهْوَةٌ', transliteration: 'qahwa', meaning_zh: '咖啡', meaning_en: 'Coffee', category: 'food', emoji: '☕', example_sentence: 'أشرب القهوة كل صباح.', example_meaning_zh: '我每天早上喝咖啡。' },
  { arabic: 'شاي', arabic_with_harakat: 'شَايٌ', transliteration: 'shāy', meaning_zh: '茶', meaning_en: 'Tea', category: 'food', emoji: '🍵' },
  { arabic: 'أرز', arabic_with_harakat: 'أُرْزٌ', transliteration: 'urz', meaning_zh: '米饭', meaning_en: 'Rice', category: 'food', emoji: '🍚', example_sentence: 'أحبّ الأرز بالدجاج.', example_meaning_zh: '我喜欢鸡肉饭。' },
  { arabic: 'دجاج', arabic_with_harakat: 'دَجَاجٌ', transliteration: 'dajāj', meaning_zh: '鸡肉', meaning_en: 'Chicken', category: 'food', emoji: '🍗' },
  { arabic: 'فاكهة', arabic_with_harakat: 'فَاكِهَةٌ', transliteration: 'fākiha', meaning_zh: '水果', meaning_en: 'Fruit', category: 'food', emoji: '🍎' },
  { arabic: 'لذيذ', arabic_with_harakat: 'لَذِيذٌ', transliteration: 'ladhīdh', meaning_zh: '好吃的/美味的', meaning_en: 'Delicious', category: 'adjectives', emoji: '😋', example_sentence: 'هذا الطعام لذيذ جداً!', example_meaning_zh: '这个食物太好吃了！' },
]

// ─────────────────────────────────────────────────────────────
//  السفر والمواصلات — Travel & Transport (A2 Unit 4)
// ─────────────────────────────────────────────────────────────
export const A2_TRAVEL: VocabItem[] = [
  { arabic: 'سيارة', arabic_with_harakat: 'سَيَّارَةٌ', transliteration: 'sayyāra', meaning_zh: '汽车', meaning_en: 'Car', category: 'transport', emoji: '🚗' },
  { arabic: 'حافلة', arabic_with_harakat: 'حَافِلَةٌ', transliteration: 'ḥāfila', meaning_zh: '公共汽车', meaning_en: 'Bus', category: 'transport', emoji: '🚌' },
  { arabic: 'قطار', arabic_with_harakat: 'قِطَارٌ', transliteration: 'qiṭār', meaning_zh: '火车', meaning_en: 'Train', category: 'transport', emoji: '🚆', example_sentence: 'أركب القطار إلى الإسكندرية.', example_meaning_zh: '我坐火车去亚历山大。' },
  { arabic: 'طيارة', arabic_with_harakat: 'طَيَّارَةٌ', transliteration: 'ṭayyāra', meaning_zh: '飞机', meaning_en: 'Airplane', category: 'transport', emoji: '✈️' },
  { arabic: 'محطة', arabic_with_harakat: 'مَحَطَّةٌ', transliteration: 'maḥaṭṭa', meaning_zh: '车站', meaning_en: 'Station / Stop', category: 'places', emoji: '🚉', example_sentence: 'أين محطة القطار؟', example_meaning_zh: '火车站在哪里？' },
  { arabic: 'مطار', arabic_with_harakat: 'مَطَارٌ', transliteration: 'maṭār', meaning_zh: '机场', meaning_en: 'Airport', category: 'places', emoji: '🛫' },
  { arabic: 'فندق', arabic_with_harakat: 'فُنْدُقٌ', transliteration: 'funduq', meaning_zh: '酒店', meaning_en: 'Hotel', category: 'places', emoji: '🏨', example_sentence: 'الفندق قريب من المطار.', example_meaning_zh: '酒店离机场很近。' },
  { arabic: 'تذكرة', arabic_with_harakat: 'تَذْكِرَةٌ', transliteration: 'tadhkira', meaning_zh: '票/车票', meaning_en: 'Ticket', category: 'transport', emoji: '🎫', example_sentence: 'أريد تذكرة ذهاباً وإياباً.', example_meaning_zh: '我要一张往返票。' },
  { arabic: 'يمين', arabic_with_harakat: 'يَمِينٌ', transliteration: 'yamīn', meaning_zh: '右边', meaning_en: 'Right', category: 'directions', emoji: '➡️' },
  { arabic: 'يسار', arabic_with_harakat: 'يَسَارٌ', transliteration: 'yasār', meaning_zh: '左边', meaning_en: 'Left', category: 'directions', emoji: '⬅️' },
  { arabic: 'أمام', arabic_with_harakat: 'أَمَامَ', transliteration: 'amāma', meaning_zh: '前面', meaning_en: 'In front of', category: 'directions', emoji: '⬆️' },
  { arabic: 'خلف', arabic_with_harakat: 'خَلْفَ', transliteration: 'khalfa', meaning_zh: '后面', meaning_en: 'Behind', category: 'directions', emoji: '⬇️' },
]

// ─────────────────────────────────────────────────────────────
//  الوصف والمقارنة — Description & Comparison (A2 Unit 5)
// ─────────────────────────────────────────────────────────────
export const A2_COMPARISON: VocabItem[] = [
  { arabic: 'أكبر من', arabic_with_harakat: 'أَكْبَرُ مِنْ', transliteration: 'akbar min', meaning_zh: '比...大', meaning_en: 'Bigger than', category: 'comparison', emoji: '📏', example_sentence: 'القاهرة أكبر من بكين؟', example_meaning_zh: '开罗比北京大吗？' },
  { arabic: 'أصغر من', arabic_with_harakat: 'أَصْغَرُ مِنْ', transliteration: 'aṣghar min', meaning_zh: '比...小', meaning_en: 'Smaller than', category: 'comparison', emoji: '📏' },
  { arabic: 'أجمل من', arabic_with_harakat: 'أَجْمَلُ مِنْ', transliteration: 'ajmal min', meaning_zh: '比...更漂亮', meaning_en: 'More beautiful than', category: 'comparison', emoji: '✨' },
  { arabic: 'أرخص من', arabic_with_harakat: 'أَرْخَصُ مِنْ', transliteration: 'arkhaṣ min', meaning_zh: '比...便宜', meaning_en: 'Cheaper than', category: 'comparison', emoji: '💰', example_sentence: 'هذا الفندق أرخص من ذاك.', example_meaning_zh: '这家酒店比那家便宜。' },
  { arabic: 'الأفضل', arabic_with_harakat: 'الأَفْضَلُ', transliteration: 'al-afḍal', meaning_zh: '最好的', meaning_en: 'The best', category: 'comparison', emoji: '🏆', example_sentence: 'هذا الأفضل!', example_meaning_zh: '这是最好的！' },
  { arabic: 'مثل', arabic_with_harakat: 'مِثْلَ', transliteration: 'mithla', meaning_zh: '像/如同', meaning_en: 'Like / Similar to', category: 'comparison', emoji: '🔄', example_sentence: 'هو مثل أخي.', example_meaning_zh: '他就像我的兄弟一样。' },
]

// ─────────────────────────────────────────────────────────────
//  الأسرة والعلاقات — Family & Relationships (A2 Unit 6)
// ─────────────────────────────────────────────────────────────
export const A2_FAMILY: VocabItem[] = [
  { arabic: 'زوج', arabic_with_harakat: 'زَوْجٌ', transliteration: 'zawj', meaning_zh: '丈夫', meaning_en: 'Husband', category: 'family', emoji: '👨' },
  { arabic: 'زوجة', arabic_with_harakat: 'زَوْجَةٌ', transliteration: 'zawja', meaning_zh: '妻子', meaning_en: 'Wife', category: 'family', emoji: '👩' },
  { arabic: 'ابن', arabic_with_harakat: 'اِبْنٌ', transliteration: 'ibn', meaning_zh: '儿子', meaning_en: 'Son', category: 'family', emoji: '👦' },
  { arabic: 'ابنة', arabic_with_harakat: 'اِبْنَةٌ', transliteration: 'ibna', meaning_zh: '女儿', meaning_en: 'Daughter', category: 'family', emoji: '👧' },
  { arabic: 'جد', arabic_with_harakat: 'جَدٌّ', transliteration: 'jadd', meaning_zh: '祖父', meaning_en: 'Grandfather', category: 'family', emoji: '👴' },
  { arabic: 'جدة', arabic_with_harakat: 'جَدَّةٌ', transliteration: 'jadda', meaning_zh: '祖母', meaning_en: 'Grandmother', category: 'family', emoji: '👵' },
  { arabic: 'عم', arabic_with_harakat: 'عَمٌّ', transliteration: 'ʿamm', meaning_zh: '叔叔/伯伯（父方）', meaning_en: 'Paternal uncle', category: 'family', emoji: '👨‍🦳' },
  { arabic: 'خال', arabic_with_harakat: 'خَالٌ', transliteration: 'khāl', meaning_zh: '舅舅（母方）', meaning_en: 'Maternal uncle', category: 'family', emoji: '👨‍🦳' },
  { arabic: 'صديق', arabic_with_harakat: 'صَدِيقٌ', transliteration: 'ṣadīq', meaning_zh: '朋友（男）', meaning_en: 'Friend (m)', category: 'relationships', emoji: '🤝', example_sentence: 'خالد صديقي المصري.', example_meaning_zh: '哈立德是我的埃及朋友。' },
  { arabic: 'جار', arabic_with_harakat: 'جَارٌ', transliteration: 'jār', meaning_zh: '邻居（男）', meaning_en: 'Neighbor (m)', category: 'relationships', emoji: '🏠' },
]

// ─────────────────────────────────────────────────────────────
//  A2 Story Dialogues
// ─────────────────────────────────────────────────────────────
export const A2_STORIES: StoryDialogue[] = [
  {
    id: 'doctor-visit',
    title_zh: '明去看医生',
    title_ar: 'مينغ يزور الطبيب',
    scene_zh: '🤒 明感觉不舒服，哈立德陪他去了医院诊所。',
    scene_emoji: '🏥🤒',
    lines: [
      { speaker: 'other', speaker_name_zh: '医生', speaker_emoji: '👨‍⚕️', arabic: 'صباح الخير. ما الذي يؤلمك؟', arabic_with_harakat: 'صَبَاحُ الْخَيْرِ. مَا الَّذِي يُؤْلِمُكَ؟', meaning_zh: '早上好。哪里不舒服？', transliteration: 'Ṣabāḥ al-khayr. Mā lladhī yuʾlimuk?' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'عندي صداع شديد وحمى منذ أمس.', arabic_with_harakat: 'عِنْدِي صُدَاعٌ شَدِيدٌ وَحُمَّى مُنْذُ أَمْسِ.', meaning_zh: '我从昨天开始就有严重的头痛和发烧。', transliteration: 'ʿindī ṣudāʿ shadīd wa-ḥummā mundhu amsi.' },
      { speaker: 'other', speaker_name_zh: '医生', speaker_emoji: '👨‍⚕️', arabic: 'افتح فمك من فضلك. ها، ليس خطيراً. خذ هذا الدواء ثلاث مرات يومياً.', arabic_with_harakat: 'اِفْتَحْ فَمَكَ مِنْ فَضْلِكَ. هَا، لَيْسَ خَطِيرًا. خُذْ هَذَا الدَّوَاءَ ثَلَاثَ مَرَّاتٍ يَوْمِيًّا.', meaning_zh: '请张开嘴。好的，不严重。每天服用这个药三次。', transliteration: 'Iftaḥ famak min faḍlik. Hā, laysa khaṭīran. Khudh hādhā d-dawāʾ thalāth marrāt yawmiyyan.' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'شكراً دكتور. كم تكلف الكشف؟', arabic_with_harakat: 'شُكْرًا دُكْتُورُ. كَمْ تَكُلَّفُ الْكَشْفُ؟', meaning_zh: '谢谢医生。诊费多少钱？', transliteration: 'Shukran duktūr. Kam tukallifu l-kashf?' },
      { speaker: 'other', speaker_name_zh: '医生', speaker_emoji: '👨‍⚕️', arabic: 'خمسون جنيهاً. ومع السلامة، استرح اليوم.', arabic_with_harakat: 'خَمْسُونَ جُنَيْهًا. وَمَعَ السَّلَامَةِ، اسْتَرِحْ الْيَوْمَ.', meaning_zh: '五十埃镑。再见，今天好好休息。', transliteration: 'Khamsūna junayhan. Wa-maʿa s-salāma, istariḥ al-yawm.' },
    ],
    vocab_focus: ['صداع', 'حمى', 'دواء', 'يومياً', 'استرح'],
  },
  {
    id: 'restaurant',
    title_zh: '在餐厅点餐',
    title_ar: 'في المطعم',
    scene_zh: '🍽️ 明和哈立德去了开罗著名的埃及餐厅，第一次尝试地道的阿拉伯食物。',
    scene_emoji: '🍽️🌙',
    lines: [
      { speaker: 'other', speaker_name_zh: '服务员', speaker_emoji: '🧑‍🍳', arabic: 'أهلاً بكم! ماذا تريدون؟', arabic_with_harakat: 'أَهْلًا بِكُمْ! مَاذَا تُرِيدُونَ؟', meaning_zh: '欢迎光临！你们想要什么？', transliteration: 'Ahlan bikum! Mādhā turīdūn?' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'ما هو الطبق الأشهر هنا؟', arabic_with_harakat: 'مَا هُوَ الطَّبَقُ الأَشْهَرُ هُنَا؟', meaning_zh: '这里最著名的菜是什么？', transliteration: 'Mā huwa ṭ-ṭabaqu l-ashharu hunā?' },
      { speaker: 'other', speaker_name_zh: '服务员', speaker_emoji: '🧑‍🍳', arabic: 'الكشري! أكلة مصرية مشهورة جداً.', arabic_with_harakat: 'الْكُشَرِي! أَكْلَةٌ مِصْرِيَّةٌ مَشْهُورَةٌ جِدًّا.', meaning_zh: '科沙利！非常著名的埃及食物。', transliteration: 'Al-kusharī! Akla miṣriyya mashhūra jiddan.' },
      { speaker: 'other', speaker_name_zh: '哈立德', speaker_emoji: '👨‍🦱', arabic: 'جرّبه يا مينغ، ستحبّه لأنه لذيذ جداً!', arabic_with_harakat: 'جَرِّبْهُ يَا مِينْغ، سَتُحِبُّهُ لِأَنَّهُ لَذِيذٌ جِدًّا!', meaning_zh: '试试看，明，你会喜欢的，因为它太好吃了！', transliteration: 'Jarribhu yā Mīng, sa-tuḥibbuhu li-annahu ladhīdh jiddan!' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'ممتاز! هذا أحسن من الطعام الصيني؟ لا... لكنه لذيذ جداً!', arabic_with_harakat: 'مُمْتَازٌ! هَذَا أَحْسَنُ مِنَ الطَّعَامِ الصِّينِيِّ؟ لَا... لَكِنَّهُ لَذِيذٌ جِدًّا!', meaning_zh: '太棒了！这比中餐好吗？不...但它真的很好吃！', transliteration: 'Mumtāz! Hādhā aḥsan min aṭ-ṭaʿām aṣ-ṣīnī? Lā... lākinahu ladhīdh jiddan!' },
    ],
    vocab_focus: ['طبق', 'مشهور', 'جرّب', 'لأن', 'أحسن من'],
  },
  {
    id: 'travel-planning',
    title_zh: '计划去亚历山大旅行',
    title_ar: 'التخطيط للسفر إلى الإسكندرية',
    scene_zh: '🗺️ 明和哈立德在计划去亚历山大的周末旅行。',
    scene_emoji: '🌊🗺️',
    lines: [
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'هل تريد أن تسافر معي إلى الإسكندرية هذا الأسبوع؟', arabic_with_harakat: 'هَلْ تُرِيدُ أَنْ تُسَافِرَ مَعِي إِلَى الإِسْكَنْدَرِيَّةِ هَذَا الأُسْبُوعَ؟', meaning_zh: '你这周想和我一起去亚历山大旅行吗？', transliteration: 'Hal turīdu an tusāfira maʿī ilā l-Iskandariyya hādhā l-usbūʿ?' },
      { speaker: 'other', speaker_name_zh: '哈立德', speaker_emoji: '👨‍🦱', arabic: 'فكرة رائعة! نأخذ القطار أم الحافلة؟', arabic_with_harakat: 'فِكْرَةٌ رَائِعَةٌ! نَأْخُذُ الْقِطَارَ أَمِ الْحَافِلَةَ؟', meaning_zh: '好主意！我们坐火车还是公共汽车？', transliteration: 'Fikra rāʾiʿa! Naʾkudhu l-qiṭāra am l-ḥāfila?' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'القطار أسرع وأرخص. كم يستغرق؟', arabic_with_harakat: 'الْقِطَارُ أَسْرَعُ وَأَرْخَصُ. كَمْ يَسْتَغْرِقُ؟', meaning_zh: '火车更快更便宜。需要多长时间？', transliteration: 'Al-qiṭāru asraʿ wa-arkhaṣ. Kam yastaghriqu?' },
      { speaker: 'other', speaker_name_zh: '哈立德', speaker_emoji: '👨‍🦱', arabic: 'ساعتان تقريباً. وسنزور الكورنيش والمتحف.', arabic_with_harakat: 'سَاعَتَانِ تَقْرِيبًا. وَسَنَزُورُ الْكُورْنِيشَ وَالْمَتْحَفَ.', meaning_zh: '大约两个小时。我们会参观滨海大道和博物馆。', transliteration: 'Sāʿatān taqrīban. Wa-sa-nazūru l-kūrnīsh wa-l-matḥaf.' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'رائع! سأحجز التذاكر الآن من الإنترنت.', arabic_with_harakat: 'رَائِعٌ! سَأَحْجُزُ التَّذَاكِرَ الآنَ مِنَ الإِنْتَرْنَتِ.', meaning_zh: '太棒了！我现在就在网上订票。', transliteration: 'Rāʾiʿ! Sa-aḥjuzu t-tadhākira l-āna min al-internet.' },
    ],
    vocab_focus: ['يسافر', 'قطار', 'أسرع', 'أرخص', 'يحجز', 'تذاكر'],
  },
]

// ─────────────────────────────────────────────────────────────
//  A2 Lesson Plan
// ─────────────────────────────────────────────────────────────
export const A2_LESSON_PLAN = [
  { day_number: 1, lesson_type: 'vocabulary',  title_zh: '连接词和句子结构',    title_ar: 'الروابط وبنية الجملة',          title_en: 'Connectors & Sentence Structure', xp_reward: 30, estimated_minutes: 20 },
  { day_number: 1, lesson_type: 'vocabulary',  title_zh: '身体部位和健康',       title_ar: 'أجزاء الجسم والصحة',             title_en: 'Body & Health',                   xp_reward: 25, estimated_minutes: 18 },
  { day_number: 2, lesson_type: 'dialogue',    title_zh: '故事：明去看医生',     title_ar: 'قصة: مينغ يزور الطبيب',          title_en: 'Story: Ming Visits the Doctor',   xp_reward: 35, estimated_minutes: 22 },
  { day_number: 1, lesson_type: 'vocabulary',  title_zh: '食物和饮料',           title_ar: 'الطعام والشراب',                  title_en: 'Food & Drink',                    xp_reward: 25, estimated_minutes: 18 },
  { day_number: 3, lesson_type: 'dialogue',    title_zh: '故事：在餐厅点餐',     title_ar: 'قصة: في المطعم',                  title_en: 'Story: At the Restaurant',        xp_reward: 35, estimated_minutes: 22 },
  { day_number: 1, lesson_type: 'vocabulary',  title_zh: '旅行和交通',           title_ar: 'السفر والمواصلات',                title_en: 'Travel & Transport',              xp_reward: 30, estimated_minutes: 20 },
  { day_number: 4, lesson_type: 'dialogue',    title_zh: '故事：计划去亚历山大', title_ar: 'قصة: التخطيط للسفر إلى الإسكندرية', title_en: 'Story: Planning Trip to Alexandria', xp_reward: 35, estimated_minutes: 22 },
  { day_number: 1, lesson_type: 'vocabulary',  title_zh: '比较级和最高级',       title_ar: 'المقارنة والتفضيل',               title_en: 'Comparison',                      xp_reward: 30, estimated_minutes: 20 },
  { day_number: 1, lesson_type: 'vocabulary',  title_zh: '家庭和人际关系',       title_ar: 'الأسرة والعلاقات',                title_en: 'Family & Relationships',          xp_reward: 25, estimated_minutes: 18 },
]
