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
//  B1 Story Dialogues
// ─────────────────────────────────────────────────────────────
export const B1_STORIES: StoryDialogue[] = [
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
  { day_number: 1, lesson_type: 'vocabulary', title_zh: '高级动词形式', title_ar: 'الأفعال المزيدة', title_en: 'Advanced Verb Forms', xp_reward: 40, estimated_minutes: 25 },
  { day_number: 1, lesson_type: 'vocabulary', title_zh: '阿拉伯文化与传统', title_ar: 'الثقافة العربية والتراث', title_en: 'Arab Culture & Heritage', xp_reward: 35, estimated_minutes: 22 },
  { day_number: 1, lesson_type: 'vocabulary', title_zh: '工作与职场', title_ar: 'العمل والمهنة', title_en: 'Work & Career', xp_reward: 35, estimated_minutes: 22 },
  { day_number: 2, lesson_type: 'dialogue', title_zh: '故事：明的工作面试', title_ar: 'قصة: مقابلة عمل مينغ', title_en: 'Story: Ming\'s Job Interview', xp_reward: 45, estimated_minutes: 28 },
  { day_number: 1, lesson_type: 'vocabulary', title_zh: '表达观点与意见', title_ar: 'التعبير عن الرأي', title_en: 'Expressing Opinions', xp_reward: 35, estimated_minutes: 22 },
]
