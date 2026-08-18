// B1 Content — following 《新编阿拉伯语》 第三册 (Volume 3)
// Story: مينغ يعمل ويتعمق في الثقافة العربية — Ming works and deepens into Arab culture

import type { VocabItem } from './preA1Content'
import type { StoryDialogue } from './a1Content'

// ─────────────────────────────────────────────────────────────
//  الأفعال الخمسة + المزيد — Advanced Verb Forms (B1 Unit 1)
// ─────────────────────────────────────────────────────────────
export const B1_VERBS: VocabItem[] = [
  { arabic: 'استطاع', arabic_with_harakat: 'اسْتَطَاعَ', transliteration: 'istaṭāʿa', meaning_zh: '能够/设法做到', meaning_en: 'Was able to / Could', category: 'verbs', emoji: '💪', example_sentence: 'استطاع مينغ أن يتكلم العربية بعد سنة.', example_meaning_zh: '明一年后能够说阿拉伯语了。' },
  { arabic: 'احتاج', arabic_with_harakat: 'اِحْتَاجَ', transliteration: 'iḥtāja', meaning_zh: '需要', meaning_en: 'Needed / Required', category: 'verbs', emoji: '📌', example_sentence: 'احتاج إلى مساعدة.', example_meaning_zh: '他需要帮助。' },
  { arabic: 'اعتقد', arabic_with_harakat: 'اِعْتَقَدَ', transliteration: 'iʿtaqada', meaning_zh: '认为/相信', meaning_en: 'Believed / Thought', category: 'verbs', emoji: '💭', example_sentence: 'أعتقد أن العربية جميلة.', example_meaning_zh: '我认为阿拉伯语很美。' },
  { arabic: 'اقترح', arabic_with_harakat: 'اِقْتَرَحَ', transliteration: 'iqtaraḥa', meaning_zh: '建议', meaning_en: 'Suggested / Proposed', category: 'verbs', emoji: '💡', example_sentence: 'اقترح خالد فكرة رائعة.', example_meaning_zh: '哈立德提出了一个好主意。' },
  { arabic: 'انتهى', arabic_with_harakat: 'اِنْتَهَى', transliteration: 'intahā', meaning_zh: '结束了', meaning_en: 'Ended / Finished', category: 'verbs', emoji: '✅', example_sentence: 'انتهى الدرس.', example_meaning_zh: '课结束了。' },
  { arabic: 'تعلّم', arabic_with_harakat: 'تَعَلَّمَ', transliteration: 'taʿallama', meaning_zh: '学习了（主动努力）', meaning_en: 'Learned (actively)', category: 'verbs', emoji: '📚', example_sentence: 'تعلّم مينغ العربية في القاهرة.', example_meaning_zh: '明在开罗学习了阿拉伯语。' },
  { arabic: 'تحدّث', arabic_with_harakat: 'تَحَدَّثَ', transliteration: 'taḥaddatha', meaning_zh: '交谈/讲话', meaning_en: 'Talked / Conversed', category: 'verbs', emoji: '🗣️', example_sentence: 'تحدّث مع أصدقائه العرب كثيراً.', example_meaning_zh: '他经常和阿拉伯朋友交谈。' },
  { arabic: 'استمتع', arabic_with_harakat: 'اِسْتَمْتَعَ', transliteration: 'istamtaʿa', meaning_zh: '享受', meaning_en: 'Enjoyed', category: 'verbs', emoji: '😊', example_sentence: 'استمتع بالموسيقى العربية.', example_meaning_zh: '他享受着阿拉伯音乐。' },
]

// ─────────────────────────────────────────────────────────────
//  الثقافة العربية — Arab Culture (B1 Unit 2)
// ─────────────────────────────────────────────────────────────
export const B1_CULTURE: VocabItem[] = [
  { arabic: 'ثقافة', arabic_with_harakat: 'ثَقَافَةٌ', transliteration: 'thaqāfa', meaning_zh: '文化', meaning_en: 'Culture', category: 'culture', emoji: '🎭', example_sentence: 'الثقافة العربية غنية وقديمة.', example_meaning_zh: '阿拉伯文化丰富而古老。' },
  { arabic: 'تراث', arabic_with_harakat: 'تُرَاثٌ', transliteration: 'turāth', meaning_zh: '遗产/传统', meaning_en: 'Heritage / Tradition', category: 'culture', emoji: '🏛️' },
  { arabic: 'موسيقى', arabic_with_harakat: 'مُوسِيقَى', transliteration: 'mūsīqā', meaning_zh: '音乐', meaning_en: 'Music', category: 'culture', emoji: '🎵', example_sentence: 'يحبّ مينغ الموسيقى العربية.', example_meaning_zh: '明喜欢阿拉伯音乐。' },
  { arabic: 'شعر', arabic_with_harakat: 'شِعْرٌ', transliteration: 'shiʿr', meaning_zh: '诗歌', meaning_en: 'Poetry', category: 'culture', emoji: '📜', example_sentence: 'الشعر العربي له تاريخ طويل.', example_meaning_zh: '阿拉伯诗歌有着悠久的历史。' },
  { arabic: 'أدب', arabic_with_harakat: 'أَدَبٌ', transliteration: 'adab', meaning_zh: '文学', meaning_en: 'Literature', category: 'culture', emoji: '📚' },
  { arabic: 'عادة', arabic_with_harakat: 'عَادَةٌ', transliteration: 'ʿāda', meaning_zh: '习俗/习惯', meaning_en: 'Custom / Habit', category: 'culture', emoji: '🔄', example_sentence: 'من عادات العرب ضيافة الضيوف.', example_meaning_zh: '阿拉伯人的习俗之一是热情款待客人。' },
  { arabic: 'ضيافة', arabic_with_harakat: 'ضِيَافَةٌ', transliteration: 'ḍiyāfa', meaning_zh: '款待/好客', meaning_en: 'Hospitality', category: 'culture', emoji: '🤲' },
  { arabic: 'دين', arabic_with_harakat: 'دِينٌ', transliteration: 'dīn', meaning_zh: '宗教', meaning_en: 'Religion', category: 'culture', emoji: '🕌' },
  { arabic: 'رمضان', arabic_with_harakat: 'رَمَضَانُ', transliteration: 'ramaḍān', meaning_zh: '斋月', meaning_en: 'Ramadan', category: 'culture', emoji: '🌙', example_sentence: 'رمضان شهر مقدس عند المسلمين.', example_meaning_zh: '斋月是穆斯林的神圣月份。' },
]

// ─────────────────────────────────────────────────────────────
//  العمل والمهنة — Work & Career (B1 Unit 3)
// ─────────────────────────────────────────────────────────────
export const B1_WORK: VocabItem[] = [
  { arabic: 'عمل', arabic_with_harakat: 'عَمَلٌ', transliteration: 'ʿamal', meaning_zh: '工作', meaning_en: 'Work / Job', category: 'work', emoji: '💼', example_sentence: 'وجد مينغ عملاً في شركة صينية في القاهرة.', example_meaning_zh: '明在开罗找到了一家中国公司的工作。' },
  { arabic: 'شركة', arabic_with_harakat: 'شَرِكَةٌ', transliteration: 'sharika', meaning_zh: '公司', meaning_en: 'Company', category: 'work', emoji: '🏢' },
  { arabic: 'اجتماع', arabic_with_harakat: 'اِجْتِمَاعٌ', transliteration: 'ijtimāʿ', meaning_zh: '会议', meaning_en: 'Meeting', category: 'work', emoji: '🤝', example_sentence: 'لدينا اجتماع مهم غداً.', example_meaning_zh: '明天我们有一个重要会议。' },
  { arabic: 'مشروع', arabic_with_harakat: 'مَشْرُوعٌ', transliteration: 'mashrūʿ', meaning_zh: '项目', meaning_en: 'Project', category: 'work', emoji: '📊' },
  { arabic: 'راتب', arabic_with_harakat: 'رَاتِبٌ', transliteration: 'rātib', meaning_zh: '薪水', meaning_en: 'Salary', category: 'work', emoji: '💰' },
  { arabic: 'زميل', arabic_with_harakat: 'زَمِيلٌ', transliteration: 'zamīl', meaning_zh: '同事', meaning_en: 'Colleague', category: 'work', emoji: '👥', example_sentence: 'زملائي في العمل طيبون جداً.', example_meaning_zh: '我的同事们都非常好。' },
  { arabic: 'مدير', arabic_with_harakat: 'مُدِيرٌ', transliteration: 'mudīr', meaning_zh: '经理/主任', meaning_en: 'Manager / Director', category: 'work', emoji: '👔' },
  { arabic: 'عقد', arabic_with_harakat: 'عَقْدٌ', transliteration: 'ʿaqd', meaning_zh: '合同', meaning_en: 'Contract', category: 'work', emoji: '📝', example_sentence: 'وقّع على العقد اليوم.', example_meaning_zh: '他今天签了合同。' },
]

// ─────────────────────────────────────────────────────────────
//  الرأي والتعبير — Opinion & Expression (B1 Unit 4)
// ─────────────────────────────────────────────────────────────
export const B1_OPINION: VocabItem[] = [
  { arabic: 'أظن أن', arabic_with_harakat: 'أَظُنُّ أَنَّ', transliteration: 'aẓunnu anna', meaning_zh: '我认为', meaning_en: 'I think that', category: 'opinion', emoji: '🤔', example_sentence: 'أظن أن العربية أجمل اللغات.', example_meaning_zh: '我认为阿拉伯语是最美的语言。' },
  { arabic: 'من وجهة نظري', arabic_with_harakat: 'مِنْ وُجْهَةِ نَظَرِي', transliteration: 'min wujhat naẓarī', meaning_zh: '从我的观点来看', meaning_en: 'From my point of view', category: 'opinion', emoji: '👁️' },
  { arabic: 'أوافق', arabic_with_harakat: 'أُوَافِقُ', transliteration: 'uwāfiq', meaning_zh: '我同意', meaning_en: 'I agree', category: 'opinion', emoji: '✅', example_sentence: 'أوافقك الرأي تماماً.', example_meaning_zh: '我完全同意你的看法。' },
  { arabic: 'لا أوافق', arabic_with_harakat: 'لَا أُوَافِقُ', transliteration: 'lā uwāfiq', meaning_zh: '我不同意', meaning_en: 'I disagree', category: 'opinion', emoji: '❌' },
  { arabic: 'من الممكن', arabic_with_harakat: 'مِنَ الْمُمْكِنِ', transliteration: 'min al-mumkin', meaning_zh: '有可能', meaning_en: 'It is possible', category: 'opinion', emoji: '🔮' },
  { arabic: 'للأسف', arabic_with_harakat: 'لِلْأَسَفِ', transliteration: 'lil-asaf', meaning_zh: '可惜/遗憾地', meaning_en: 'Unfortunately', category: 'opinion', emoji: '😔', example_sentence: 'للأسف لا أستطيع الحضور.', example_meaning_zh: '可惜我无法出席。' },
  { arabic: 'لحسن الحظ', arabic_with_harakat: 'لِحُسْنِ الْحَظِّ', transliteration: 'li-ḥusn al-ḥaẓẓ', meaning_zh: '幸运地', meaning_en: 'Fortunately', category: 'opinion', emoji: '🍀', example_sentence: 'لحسن الحظ، وجدت مكاناً.', example_meaning_zh: '幸运地，我找到了地方。' },
]

// ─────────────────────────────────────────────────────────────
//  الهوايات ووقت الفراغ — Hobbies & Free Time (B1 Unit 5)
// ─────────────────────────────────────────────────────────────
export const B1_HOBBIES: VocabItem[] = [
  { arabic: 'هواية', arabic_with_harakat: 'هِوَايَةٌ', transliteration: 'hiwāya', meaning_zh: '爱好', meaning_en: 'Hobby', category: 'hobbies', emoji: '🎨', example_sentence: 'هوايتي رسم اللوحات.', example_meaning_zh: '我的爱好是画画。' },
  { arabic: 'رسم', arabic_with_harakat: 'رَسْمٌ', transliteration: 'rasm', meaning_zh: '绘画', meaning_en: 'Drawing / Painting', category: 'hobbies', emoji: '🖼️' },
  { arabic: 'قراءة', arabic_with_harakat: 'قِرَاءَةٌ', transliteration: 'qirāʾa', meaning_zh: '阅读', meaning_en: 'Reading', category: 'hobbies', emoji: '📖', example_sentence: 'القراءة تفتح آفاقاً جديدة.', example_meaning_zh: '阅读打开新的视野。' },
  { arabic: 'سباحة', arabic_with_harakat: 'سِبَاحَةٌ', transliteration: 'sibāḥa', meaning_zh: '游泳', meaning_en: 'Swimming', category: 'hobbies', emoji: '🏊', example_sentence: 'يمارس مينغ السباحة كل جمعة.', example_meaning_zh: '明每周五游泳。' },
  { arabic: 'طبخ', arabic_with_harakat: 'طَبْخٌ', transliteration: 'ṭabkh', meaning_zh: '烹饪', meaning_en: 'Cooking', category: 'hobbies', emoji: '🍳' },
  { arabic: 'تصوير', arabic_with_harakat: 'تَصْوِيرٌ', transliteration: 'taṣwīr', meaning_zh: '摄影', meaning_en: 'Photography', category: 'hobbies', emoji: '📷', example_sentence: 'يحبّ مينغ تصوير المباني التاريخية.', example_meaning_zh: '明喜欢拍摄历史建筑。' },
  { arabic: 'رياضة', arabic_with_harakat: 'رِيَاضَةٌ', transliteration: 'riyāḍa', meaning_zh: '运动', meaning_en: 'Sport / Exercise', category: 'hobbies', emoji: '⚽' },
  { arabic: 'سفر', arabic_with_harakat: 'سَفَرٌ', transliteration: 'safar', meaning_zh: '旅行', meaning_en: 'Travel', category: 'hobbies', emoji: '✈️', example_sentence: 'السفر يثري التجارب الإنسانية.', example_meaning_zh: '旅行丰富了人类的体验。' },
  { arabic: 'متحف', arabic_with_harakat: 'مَتْحَفٌ', transliteration: 'matḥaf', meaning_zh: '博物馆', meaning_en: 'Museum', category: 'places', emoji: '🏛️', example_sentence: 'زرت المتحف المصري أمس.', example_meaning_zh: '我昨天参观了埃及博物馆。' },
]

// ─────────────────────────────────────────────────────────────
//  المدينة والأحياء — City & Neighborhoods (B1 Unit 6)
// ─────────────────────────────────────────────────────────────
export const B1_CITY: VocabItem[] = [
  { arabic: 'حي', arabic_with_harakat: 'حَيٌّ', transliteration: 'ḥayy', meaning_zh: '街区/社区', meaning_en: 'Neighborhood / District', category: 'places', emoji: '🏘️', example_sentence: 'يسكن مينغ في حي الزمالك.', example_meaning_zh: '明住在扎马利克街区。' },
  { arabic: 'شارع', arabic_with_harakat: 'شَارِعٌ', transliteration: 'shāriʿ', meaning_zh: '街道', meaning_en: 'Street', category: 'places', emoji: '🛣️' },
  { arabic: 'ميدان', arabic_with_harakat: 'مَيْدَانٌ', transliteration: 'maydān', meaning_zh: '广场', meaning_en: 'Square / Plaza', category: 'places', emoji: '🏙️', example_sentence: 'ميدان التحرير في وسط القاهرة.', example_meaning_zh: '解放广场位于开罗市中心。' },
  { arabic: 'مكتبة', arabic_with_harakat: 'مَكْتَبَةٌ', transliteration: 'maktaba', meaning_zh: '图书馆/书店', meaning_en: 'Library / Bookstore', category: 'places', emoji: '📚', example_sentence: 'أقضي وقتي في المكتبة.', example_meaning_zh: '我在图书馆消磨时光。' },
  { arabic: 'حديقة', arabic_with_harakat: 'حَدِيقَةٌ', transliteration: 'ḥadīqa', meaning_zh: '公园/花园', meaning_en: 'Park / Garden', category: 'places', emoji: '🌳', example_sentence: 'حديقة الأزهر جميلة في الربيع.', example_meaning_zh: '爱资哈尔公园在春天很美。' },
  { arabic: 'قريب', arabic_with_harakat: 'قَرِيبٌ', transliteration: 'qarīb', meaning_zh: '近', meaning_en: 'Near / Close', category: 'adjectives', emoji: '📍', example_sentence: 'المحطة قريبة من البيت.', example_meaning_zh: '车站离家很近。' },
  { arabic: 'بعيد', arabic_with_harakat: 'بَعِيدٌ', transliteration: 'baʿīd', meaning_zh: '远', meaning_en: 'Far', category: 'adjectives', emoji: '🗺️' },
  { arabic: 'ازدحام', arabic_with_harakat: 'اِزْدِحَامٌ', transliteration: 'izdihām', meaning_zh: '拥挤/堵车', meaning_en: 'Traffic / Crowding', category: 'city', emoji: '🚗', example_sentence: 'الازدحام في القاهرة شديد.', example_meaning_zh: '开罗的交通非常拥挤。' },
  { arabic: 'ضوضاء', arabic_with_harakat: 'ضَوْضَاءٌ', transliteration: 'ḍawḍāʾ', meaning_zh: '噪音', meaning_en: 'Noise', category: 'city', emoji: '🔊' },
  { arabic: 'هادئ', arabic_with_harakat: 'هَادِئٌ', transliteration: 'hādiʾ', meaning_zh: '安静的', meaning_en: 'Quiet / Calm', category: 'adjectives', emoji: '🤫', example_sentence: 'الحي الجديد هادئ جداً.', example_meaning_zh: '新街区非常安静。' },
]

// ─────────────────────────────────────────────────────────────
//  النعت والحال — Adjectives & Adverbs (B1 Unit 7)
// ─────────────────────────────────────────────────────────────
export const B1_GRAMMAR: VocabItem[] = [
  { arabic: 'بسرعة', arabic_with_harakat: 'بِسُرْعَةٍ', transliteration: 'bi-surʿa', meaning_zh: '快速地', meaning_en: 'Quickly', category: 'adverbs', emoji: '⚡', example_sentence: 'يتعلم مينغ العربية بسرعة كبيرة.', example_meaning_zh: '明学阿拉伯语学得很快。' },
  { arabic: 'ببطء', arabic_with_harakat: 'بِبُطْءٍ', transliteration: 'bi-buṭʾ', meaning_zh: '慢慢地', meaning_en: 'Slowly', category: 'adverbs', emoji: '🐢' },
  { arabic: 'بوضوح', arabic_with_harakat: 'بِوُضُوحٍ', transliteration: 'bi-wuḍūḥ', meaning_zh: '清楚地', meaning_en: 'Clearly', category: 'adverbs', emoji: '🔍', example_sentence: 'تكلّم بوضوح من فضلك.', example_meaning_zh: '请说清楚一点。' },
  { arabic: 'مباشرة', arabic_with_harakat: 'مُبَاشَرَةً', transliteration: 'mubāsharatan', meaning_zh: '直接地', meaning_en: 'Directly', category: 'adverbs', emoji: '➡️' },
  { arabic: 'مشهور', arabic_with_harakat: 'مَشْهُورٌ', transliteration: 'mashhūr', meaning_zh: '著名的', meaning_en: 'Famous / Well-known', category: 'adjectives', emoji: '⭐', example_sentence: 'القاهرة مدينة مشهورة في العالم.', example_meaning_zh: '开罗是世界著名的城市。' },
  { arabic: 'رائع', arabic_with_harakat: 'رَائِعٌ', transliteration: 'rāʾiʿ', meaning_zh: '极好的/精彩的', meaning_en: 'Wonderful / Amazing', category: 'adjectives', emoji: '✨', example_sentence: 'الأهرام بناء رائع.', example_meaning_zh: '金字塔是一个宏伟的建筑。' },
  { arabic: 'قديم', arabic_with_harakat: 'قَدِيمٌ', transliteration: 'qadīm', meaning_zh: '古老的', meaning_en: 'Ancient / Old', category: 'adjectives', emoji: '🏛️' },
  { arabic: 'حديث', arabic_with_harakat: 'حَدِيثٌ', transliteration: 'ḥadīth', meaning_zh: '现代的', meaning_en: 'Modern', category: 'adjectives', emoji: '🏙️', example_sentence: 'القاهرة مزيج من القديم والحديث.', example_meaning_zh: '开罗是古老与现代的结合。' },
]

// ─────────────────────────────────────────────────────────────
//  B1 Story Dialogues
// ─────────────────────────────────────────────────────────────
export const B1_STORIES: StoryDialogue[] = [
  {
    id: 'ramadan-iftar',
    title_zh: '斋月开斋宴',
    title_en: 'Ramadan Iftar Party',
    title_ar: 'حفلة إفطار رمضان',
    scene_zh: '🌙 斋月期间，哈立德邀请明参加家族开斋宴。明第一次体验真正的阿拉伯待客之道。',
    scene_en: '🌙 During Ramadan, Khalid invites Ming to his family\'s iftar dinner. Ming experiences authentic Arab hospitality for the first time.',
    scene_emoji: '🌙🍽️',
    vocab_focus: ['رمضان', 'إفطار', 'ضيافة', 'عادة', 'تراث', 'استمتع'],
    lines: [
      { speaker: 'other', speaker_name_zh: '哈立德', speaker_name_en: 'Khalid', speaker_emoji: '👨‍🦱', arabic: 'أهلاً وسهلاً يا مينغ! كل رمضان وأنت بخير. تفضّل، الإفطار جاهز.', arabic_with_harakat: 'أَهْلًا وَسَهْلًا يَا مِينْغ! كُلُّ رَمَضَانَ وَأَنْتَ بِخَيْرٍ. تَفَضَّلْ، الإِفْطَارُ جَاهِزٌ.', meaning_zh: '欢迎你，明！斋月快乐。请进，开斋饭已经准备好了。', meaning_en: 'Welcome, Ming! Happy Ramadan. Come in, iftar is ready.', transliteration: 'Ahlan wa-sahlan yā Mīng! Kullu ramaḍān wa-anta bi-khayr. Tafaḍḍal, al-ifṭār jāhiz.' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_name_en: 'Ming', speaker_emoji: '🧑‍🎓', arabic: 'شكراً جزيلاً يا خالد! هذه أول مرة أحضر إفطار رمضاني. ما هذه الروائح الجميلة؟', arabic_with_harakat: 'شُكْرًا جَزِيلًا يَا خَالِد! هَذِهِ أَوَّلُ مَرَّةٍ أَحْضُرُ إِفْطَارَ رَمَضَانَ. مَا هَذِهِ الرَّوَائِحُ الجَمِيلَةُ؟', meaning_zh: '非常感谢，哈立德！这是我第一次参加斋月开斋宴。这些香味是什么？', meaning_en: 'Thank you so much, Khalid! This is my first time attending a Ramadan iftar. What are these beautiful aromas?', transliteration: 'Shukran jazīlan yā Khālid! Hādhihi awwal marra aḥḍuru ifṭār ramaḍān. Mā hādhihi r-rawāʾiḥ al-jamīla?' },
      { speaker: 'other', speaker_name_zh: '哈立德的妈妈', speaker_name_en: 'Khalid\'s Mother', speaker_emoji: '👩‍🦳', arabic: 'هذا كنافة ومحشي وشوربة عدس! تفضّل يا بني، كُل معنا. الضيف في بيتنا كالملك.', arabic_with_harakat: 'هَذَا كُنَافَةٌ وَمَحْشِي وَشَوْرْبَةُ عَدَسٍ! تَفَضَّلْ يَا بُنَيَّ، كُلْ مَعَنَا. الضَّيْفُ فِي بَيْتِنَا كَالمَلِكِ.', meaning_zh: '这是甜面条糕、酿蔬菜和扁豆汤！来吧孩子，和我们一起吃。我们家的客人就像国王一样。', meaning_en: 'This is kunafa, stuffed vegetables, and lentil soup! Please, son, eat with us. A guest in our home is like a king.', transliteration: 'Hādhā kunāfa wa-maḥshi wa-shawrba ʿadas! Tafaḍḍal yā bunayya, kul maʿanā. Aḍ-ḍayf fī baytinā ka-l-malik.' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_name_en: 'Ming', speaker_emoji: '🧑‍🎓', arabic: 'سبحان الله، هذا الطعام رائع! من وجهة نظري، الضيافة العربية لا مثيل لها في العالم.', arabic_with_harakat: 'سُبْحَانَ اللهِ، هَذَا الطَّعَامُ رَائِعٌ! مِنْ وُجْهَةِ نَظَرِي، الضِّيَافَةُ الْعَرَبِيَّةُ لَا مَثِيلَ لَهَا فِي الْعَالَمِ.', meaning_zh: '真主啊，这食物太棒了！从我的观点来看，阿拉伯待客之道在世界上无与伦比。', meaning_en: 'Subhanallah, this food is amazing! From my point of view, Arab hospitality is unmatched in the world.', transliteration: 'Subḥān Allah, hādhā ṭ-ṭaʿām rāʾiʿ! Min wujhat naẓarī, aḍ-ḍiyāfa l-ʿarabiyya lā mathīla lahā fī l-ʿālam.' },
      { speaker: 'other', speaker_name_zh: '哈立德', speaker_name_en: 'Khalid', speaker_emoji: '👨‍🦱', arabic: 'أوافقك الرأي! رمضان شهر التراث والعائلة. استمتع يا مينغ، هذه ثقافتنا ونحن فخورون بها.', arabic_with_harakat: 'أُوَافِقُكَ الرَّأْيَ! رَمَضَانُ شَهْرُ التُّرَاثِ وَالْعَائِلَةِ. اسْتَمْتِعْ يَا مِينْغ، هَذِهِ ثَقَافَتُنَا وَنَحْنُ فَخُورُونَ بِهَا.', meaning_zh: '我同意你！斋月是传统和家庭的月份。享受吧，明，这是我们的文化，我们为之自豪。', meaning_en: 'I agree with you! Ramadan is the month of heritage and family. Enjoy, Ming, this is our culture and we are proud of it.', transliteration: 'Uwāfiquka r-raʾy! Ramaḍān shahr at-turāth wa-l-ʿāʾila. Istamtiʿ yā Mīng, hādhihi thaqāfatunā wa-naḥnu fakhrūn bihā.' },
    ],
  },
  {
    id: 'pyramids-visit',
    title_zh: '参观金字塔',
    title_en: 'Visiting the Pyramids',
    title_ar: 'زيارة الأهرام',
    scene_zh: '🏺 周末，明和哈立德一起去参观吉萨金字塔。明对古代埃及文明叹为观止。',
    scene_en: '🏺 On the weekend, Ming and Khalid visit the Giza Pyramids. Ming is awestruck by ancient Egyptian civilization.',
    scene_emoji: '🏺🐪',
    vocab_focus: ['أهرام', 'قديم', 'رائع', 'مشهور', 'تاريخ', 'حضارة'],
    lines: [
      { speaker: 'ming', speaker_name_zh: '明', speaker_name_en: 'Ming', speaker_emoji: '🧑‍🎓', arabic: 'سبحان الله! الأهرام أكبر بكثير مما تصوّرت! كيف بنوها قبل أربعة آلاف سنة؟', arabic_with_harakat: 'سُبْحَانَ اللهِ! الأَهْرَامُ أَكْبَرُ بِكَثِيرٍ مِمَّا تَصَوَّرْتُ! كَيْفَ بَنَوْهَا قَبْلَ أَرْبَعَةِ آلافِ سَنَةٍ؟', meaning_zh: '真主啊！金字塔比我想象的大多了！他们是怎么在四千年前建造它们的？', meaning_en: 'Subhanallah! The Pyramids are much bigger than I imagined! How did they build them 4,000 years ago?', transliteration: 'Subḥān Allah! Al-ahrām akbar bi-kathīr mimmā taṣawwart! Kayfa banawhā qabla arbaʿat ālāf sana?' },
      { speaker: 'other', speaker_name_zh: '哈立德', speaker_name_en: 'Khalid', speaker_emoji: '👨‍🦱', arabic: 'هذا هو السؤال الذي يسأله الجميع! الحضارة المصرية القديمة كانت متقدمة جداً في الهندسة والرياضيات.', arabic_with_harakat: 'هَذَا هُوَ السُّؤَالُ الَّذِي يَسْأَلُهُ الجَمِيعُ! الحَضَارَةُ المِصْرِيَّةُ القَدِيمَةُ كَانَتْ مُتَقَدِّمَةً جِدًّا فِي الهَنْدَسَةِ والرِّيَاضِيَّاتِ.', meaning_zh: '这是每个人都会问的问题！古埃及文明在工程学和数学方面非常先进。', meaning_en: 'That\'s the question everyone asks! Ancient Egyptian civilization was very advanced in engineering and mathematics.', transliteration: 'Hādhā huwa s-suʾāl alladhī yasʾaluhu l-jamīʿ! Al-ḥaḍāra al-miṣriyya al-qadīma kānat mutaqaddima jiddan fī l-handasa wa-r-riyāḍiyyāt.' },
      { speaker: 'other', speaker_name_zh: '导游', speaker_name_en: 'Tour Guide', speaker_emoji: '🎙️', arabic: 'هرم خوفو هو الوحيد الباقي من عجائب الدنيا السبع القديمة. بُني قبل 4500 سنة تقريباً.', arabic_with_harakat: 'هَرَمُ خُوفُو هُوَ الوَحِيدُ البَاقِي مِنْ عَجَائِبِ الدُّنْيَا السَّبْعِ القَدِيمَةِ. بُنِيَ قَبْلَ 4500 سَنَةٍ تَقْرِيبًا.', meaning_zh: '胡夫金字塔是古代世界七大奇迹中唯一留存的。建于大约4500年前。', meaning_en: 'The Pyramid of Khufu is the only remaining wonder of the ancient Seven Wonders. It was built approximately 4,500 years ago.', transliteration: 'Haram Khūfū huwa l-waḥīd al-bāqī min ʿajāʾib ad-dunyā s-sabʿ al-qadīma. Buniya qabla 4500 sana taqrīban.' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_name_en: 'Ming', speaker_emoji: '🧑‍🎓', arabic: 'لا أستطيع أن أصدّق ما أراه! أظن أن مصر تحتفظ بأجمل تراث في العالم. يجب أن أتعلم المزيد عن تاريخها.', arabic_with_harakat: 'لَا أَسْتَطِيعُ أَنْ أُصَدِّقَ مَا أَرَاهُ! أَظُنُّ أَنَّ مِصْرَ تَحْتَفِظُ بِأَجْمَلِ تُرَاثٍ فِي الْعَالَمِ. يَجِبُ أَنْ أَتَعَلَّمَ المَزِيدَ عَنْ تَارِيخِهَا.', meaning_zh: '我无法相信自己所看到的！我认为埃及保存着世界上最美丽的遗产。我必须学习更多关于它的历史。', meaning_en: 'I can\'t believe what I\'m seeing! I think Egypt preserves the most beautiful heritage in the world. I must learn more about its history.', transliteration: 'Lā astaṭīʿu an uṣaddiq mā arāh! Aẓunnu anna Miṣr taḥtafiẓu bi-ajmal turāth fī l-ʿālam. Yajibu an ataʿallam al-mazīd ʿan tārīkhihā.' },
    ],
  },
  {
    id: 'job-interview',
    title_zh: '明的工作面试',
    title_ar: 'مقابلة عمل مينغ',
    scene_zh: '👔 明在开罗的一家中阿联合公司申请了翻译职位，今天是他的面试日。',
    scene_emoji: '💼🤝',
    lines: [
      { speaker: 'other', speaker_name_zh: '经理', speaker_emoji: '👔', arabic: 'أهلاً سيد مينغ. من فضلك اجلس. أخبرني عن نفسك.', arabic_with_harakat: 'أَهْلًا سَيِّدَ مِينْغ. مِنْ فَضْلِكَ اجْلِسْ. أَخْبِرْنِي عَنْ نَفْسِكَ.', meaning_zh: '欢迎，明先生。请坐。告诉我关于你自己的情况。', transliteration: 'Ahlan sayyid Mīng. Min faḍlik ijlis. Akhbirnī ʿan nafsik.' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'أنا مينغ، من الصين. درست اللغة العربية لمدة سنتين. أستطيع التحدث والكتابة والترجمة بطلاقة.', arabic_with_harakat: 'أَنَا مِينْغ، مِنَ الصِّينِ. دَرَسْتُ اللُّغَةَ الْعَرَبِيَّةَ لِمُدَّةِ سَنَتَيْنِ. أَسْتَطِيعُ التَّحَدُّثَ وَالْكِتَابَةَ وَالتَّرْجَمَةَ بِطَلَاقَةٍ.', meaning_zh: '我叫明，来自中国。我学了两年阿拉伯语。我能够流利地说、写和翻译。', transliteration: 'Anā Mīng, min aṣ-Ṣīn. Darastu l-lugha l-ʿarabiyya li-muddat sanatayn. Astaṭīʿu t-taḥadduth wa-l-kitāba wa-t-tarjama bi-ṭalāqa.' },
      { speaker: 'other', speaker_name_zh: '经理', speaker_emoji: '👔', arabic: 'ممتاز! لماذا تريد العمل في هذه الشركة؟', arabic_with_harakat: 'مُمْتَازٌ! لِمَاذَا تُرِيدُ الْعَمَلَ فِي هَذِهِ الشَّرِكَةِ؟', meaning_zh: '太棒了！你为什么想在这家公司工作？', transliteration: 'Mumtāz! Li-mādhā turīdu l-ʿamal fī hādhihi sh-sharika?' },
      { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '🧑‍🎓', arabic: 'لأنني أريد تطوير العلاقات بين الصين والعالم العربي. أعتقد أن العمل هنا فرصة رائعة.', arabic_with_harakat: 'لِأَنَّنِي أُرِيدُ تَطْوِيرَ الْعَلَاقَاتِ بَيْنَ الصِّينِ وَالْعَالَمِ الْعَرَبِيِّ. أَعْتَقِدُ أَنَّ الْعَمَلَ هُنَا فُرْصَةٌ رَائِعَةٌ.', meaning_zh: '因为我想发展中国和阿拉伯世界之间的关系。我认为在这里工作是一个很好的机会。', transliteration: 'Li-annanī urīdu taṭwīra l-ʿalāqāt bayna ṣ-Ṣīn wa-l-ʿālam al-ʿarabī. Aʿtaqidu anna l-ʿamal hunā furṣa rāʾiʿa.' },
      { speaker: 'other', speaker_name_zh: '经理', speaker_emoji: '👔', arabic: 'ممتاز جداً! لحسن الحظ، أنت المرشح الأفضل. مبروك، الوظيفة لك!', arabic_with_harakat: 'مُمْتَازٌ جِدًّا! لِحُسْنِ الْحَظِّ، أَنْتَ الْمُرَشَّحُ الأَفْضَلُ. مَبْرُوكٌ، الْوَظِيفَةُ لَكَ!', meaning_zh: '非常棒！幸运的是，你是最佳候选人。恭喜，这份工作是你的了！', transliteration: 'Mumtāz jiddan! Li-ḥusn al-ḥaẓẓ, anta l-murashshaḥ al-afḍal. Mabrūk, al-waẓīfa lak!' },
    ],
    vocab_focus: ['أخبرني', 'أستطيع', 'طلاقة', 'لأن', 'أعتقد', 'فرصة', 'لحسن الحظ', 'مبروك'],
  },
]

// ─────────────────────────────────────────────────────────────
//  B1 Lesson Plan
// ─────────────────────────────────────────────────────────────
export const B1_LESSON_PLAN = [
  { day_number: 1, lesson_type: 'vocabulary', title_zh: '高级动词形式',       title_ar: 'الأفعال المزيدة',          title_en: 'Advanced Verb Forms',      xp_reward: 40, estimated_minutes: 25 },
  { day_number: 1, lesson_type: 'vocabulary', title_zh: '阿拉伯文化与传统',   title_ar: 'الثقافة العربية والتراث',   title_en: 'Arab Culture & Heritage',  xp_reward: 35, estimated_minutes: 22 },
  { day_number: 1, lesson_type: 'vocabulary', title_zh: '工作与职场',         title_ar: 'العمل والمهنة',             title_en: 'Work & Career',            xp_reward: 35, estimated_minutes: 22 },
  { day_number: 2, lesson_type: 'dialogue',   title_zh: '故事：明的工作面试', title_ar: 'قصة: مقابلة عمل مينغ',    title_en: "Story: Ming's Job Interview", xp_reward: 45, estimated_minutes: 28 },
  { day_number: 1, lesson_type: 'vocabulary', title_zh: '表达观点与意见',     title_ar: 'التعبير عن الرأي',         title_en: 'Expressing Opinions',      xp_reward: 35, estimated_minutes: 22 },
  { day_number: 3, lesson_type: 'dialogue',   title_zh: '故事：斋月开斋宴',   title_ar: 'قصة: حفلة إفطار رمضان',   title_en: 'Story: Ramadan Iftar Party', xp_reward: 45, estimated_minutes: 28 },
  { day_number: 4, lesson_type: 'dialogue',   title_zh: '故事：参观金字塔',   title_ar: 'قصة: زيارة الأهرام',       title_en: 'Story: Visiting the Pyramids', xp_reward: 45, estimated_minutes: 28 },
  { day_number: 1, lesson_type: 'vocabulary', title_zh: '爱好与业余时间',     title_ar: 'الهوايات ووقت الفراغ',     title_en: 'Hobbies & Free Time',      xp_reward: 35, estimated_minutes: 22 },
  { day_number: 1, lesson_type: 'vocabulary', title_zh: '城市与街区',         title_ar: 'المدينة والأحياء',          title_en: 'City & Neighborhoods',     xp_reward: 35, estimated_minutes: 22 },
  { day_number: 1, lesson_type: 'vocabulary', title_zh: '形容词与副词',       title_ar: 'النعت والحال',              title_en: 'Adjectives & Adverbs',     xp_reward: 35, estimated_minutes: 22 },
]
