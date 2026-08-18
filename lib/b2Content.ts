import type { VocabItem } from './preA1Content'
import type { StoryDialogue } from './a1Content'

// B2 — Upper Intermediate (~《新编阿拉伯语》第三册)
// Themes: advanced grammar, media/politics, abstract ideas, academic writing

export const B2_ABSTRACT: VocabItem[] = [
  { arabic: 'مفهوم', arabic_with_harakat: 'مَفْهُوم', transliteration: 'mafhūm', meaning_en: 'concept', meaning_zh: '概念', category: 'abstract', example_sentence: 'هذا المفهوم صعب الفهم.', emoji: '💡' },
  { arabic: 'ظاهرة', arabic_with_harakat: 'ظَاهِرَة', transliteration: 'ẓāhira', meaning_en: 'phenomenon', meaning_zh: '现象', category: 'abstract', example_sentence: 'هذه ظاهرة اجتماعية معقدة.', emoji: '🔍' },
  { arabic: 'تأثير', arabic_with_harakat: 'تَأْثِير', transliteration: 'taʾthīr', meaning_en: 'influence / effect', meaning_zh: '影响', category: 'abstract', example_sentence: 'للتعليم تأثير كبير على المجتمع.', emoji: '⚡' },
  { arabic: 'تطوّر', arabic_with_harakat: 'تَطَوُّر', transliteration: 'taṭawwur', meaning_en: 'development / evolution', meaning_zh: '发展', category: 'abstract', example_sentence: 'شهدت العلوم تطوّراً سريعاً.', emoji: '📈' },
  { arabic: 'أزمة', arabic_with_harakat: 'أَزْمَة', transliteration: 'azma', meaning_en: 'crisis', meaning_zh: '危机', category: 'abstract', example_sentence: 'يواجه العالم أزمة اقتصادية.', emoji: '⚠️' },
  { arabic: 'حضارة', arabic_with_harakat: 'حَضَارَة', transliteration: 'ḥaḍāra', meaning_en: 'civilization', meaning_zh: '文明', category: 'abstract', example_sentence: 'الحضارة العربية قديمة وعريقة.', emoji: '🏛️' },
  { arabic: 'هوية', arabic_with_harakat: 'هُوِيَّة', transliteration: 'huwiyya', meaning_en: 'identity', meaning_zh: '身份认同', category: 'abstract', example_sentence: 'اللغة جزء من الهوية الثقافية.', emoji: '🪪' },
  { arabic: 'عولمة', arabic_with_harakat: 'عَوْلَمَة', transliteration: 'ʿawlama', meaning_en: 'globalization', meaning_zh: '全球化', category: 'abstract', example_sentence: 'أثّرت العولمة على ثقافات كثيرة.', emoji: '🌐' },
]

export const B2_MEDIA: VocabItem[] = [
  { arabic: 'صحيفة', arabic_with_harakat: 'صَحِيفَة', transliteration: 'ṣaḥīfa', meaning_en: 'newspaper', meaning_zh: '报纸', category: 'media', example_sentence: 'قرأت الخبر في الصحيفة الصباحية.', emoji: '📰' },
  { arabic: 'مقال', arabic_with_harakat: 'مَقَال', transliteration: 'maqāl', meaning_en: 'article / essay', meaning_zh: '文章', category: 'media', example_sentence: 'كتبت مقالاً عن العلاقات الصينية العربية.', emoji: '✍️' },
  { arabic: 'تقرير', arabic_with_harakat: 'تَقْرِير', transliteration: 'taqrīr', meaning_en: 'report', meaning_zh: '报告', category: 'media', example_sentence: 'نشرت القناة تقريراً مهماً.', emoji: '📋' },
  { arabic: 'وسائل التواصل', arabic_with_harakat: 'وَسَائِل التَّوَاصُل', transliteration: 'wasāʾil al-tawāṣul', meaning_en: 'social media', meaning_zh: '社交媒体', category: 'media', example_sentence: 'انتشر الخبر عبر وسائل التواصل الاجتماعي.', emoji: '📱' },
  { arabic: 'مذيع', arabic_with_harakat: 'مُذِيع', transliteration: 'mudhīʿ', meaning_en: 'broadcaster / anchor', meaning_zh: '播音员', category: 'media', example_sentence: 'المذيع يقرأ نشرة الأخبار.', emoji: '🎙️' },
  { arabic: 'رأي عام', arabic_with_harakat: 'رَأْي عَام', transliteration: 'raʾy ʿāmm', meaning_en: 'public opinion', meaning_zh: '公众舆论', category: 'media', example_sentence: 'يؤثر الإعلام في الرأي العام.', emoji: '📊' },
  { arabic: 'إعلان', arabic_with_harakat: 'إِعْلَان', transliteration: 'iʿlān', meaning_en: 'advertisement / announcement', meaning_zh: '广告/通告', category: 'media', example_sentence: 'شاهدت إعلاناً جميلاً في التلفاز.', emoji: '📺' },
]

export const B2_POLITICS: VocabItem[] = [
  { arabic: 'حكومة', arabic_with_harakat: 'حُكُومَة', transliteration: 'ḥukūma', meaning_en: 'government', meaning_zh: '政府', category: 'politics', example_sentence: 'أعلنت الحكومة عن سياسة جديدة.', emoji: '🏛️' },
  { arabic: 'سياسة', arabic_with_harakat: 'سِيَاسَة', transliteration: 'siyāsa', meaning_en: 'politics / policy', meaning_zh: '政治/政策', category: 'politics', example_sentence: 'تدرس منغ السياسة الدولية.', emoji: '🗳️' },
  { arabic: 'قانون', arabic_with_harakat: 'قَانُون', transliteration: 'qānūn', meaning_en: 'law', meaning_zh: '法律', category: 'politics', example_sentence: 'يجب احترام القانون.', emoji: '⚖️' },
  { arabic: 'حقوق الإنسان', arabic_with_harakat: 'حُقُوق الإِنْسَان', transliteration: 'ḥuqūq al-insān', meaning_en: 'human rights', meaning_zh: '人权', category: 'politics', example_sentence: 'حقوق الإنسان مهمة في كل مجتمع.', emoji: '🕊️' },
  { arabic: 'اتفاقية', arabic_with_harakat: 'اتِّفَاقِيَّة', transliteration: 'ittifāqiyya', meaning_en: 'agreement / treaty', meaning_zh: '协议/条约', category: 'politics', example_sentence: 'وقّعت الدولتان اتفاقية تجارية.', emoji: '🤝' },
  { arabic: 'انتخابات', arabic_with_harakat: 'انْتِخَابَات', transliteration: 'intikhābāt', meaning_en: 'elections', meaning_zh: '选举', category: 'politics', example_sentence: 'ستُجرى الانتخابات الشهر القادم.', emoji: '🗳️' },
  { arabic: 'دبلوماسية', arabic_with_harakat: 'دِبْلُومَاسِيَّة', transliteration: 'diblūmāsiyya', meaning_en: 'diplomacy', meaning_zh: '外交', category: 'politics', example_sentence: 'تلعب الدبلوماسية دوراً مهماً في السلام.', emoji: '🌍' },
]

export const B2_ACADEMIC: VocabItem[] = [
  { arabic: 'بحث', arabic_with_harakat: 'بَحْث', transliteration: 'baḥth', meaning_en: 'research', meaning_zh: '研究', category: 'academic', example_sentence: 'تكتب منغ بحثاً عن الترجمة.', emoji: '🔬' },
  { arabic: 'أطروحة', arabic_with_harakat: 'أُطْرُوحَة', transliteration: 'uṭrūḥa', meaning_en: 'thesis / dissertation', meaning_zh: '论文', category: 'academic', example_sentence: 'ستناقش أطروحتها في نهاية العام.', emoji: '📜' },
  { arabic: 'منهج', arabic_with_harakat: 'مَنْهَج', transliteration: 'manhaj', meaning_en: 'methodology / curriculum', meaning_zh: '方法论/课程', category: 'academic', example_sentence: 'استخدمت منهجاً علمياً في بحثها.', emoji: '📐' },
  { arabic: 'نظرية', arabic_with_harakat: 'نَظَرِيَّة', transliteration: 'naẓariyya', meaning_en: 'theory', meaning_zh: '理论', category: 'academic', example_sentence: 'طرح العالم نظرية جديدة.', emoji: '🧠' },
  { arabic: 'استنتاج', arabic_with_harakat: 'اسْتِنْتَاج', transliteration: 'istintāj', meaning_en: 'conclusion', meaning_zh: '结论', category: 'academic', example_sentence: 'توصّل البحث إلى استنتاج مثير.', emoji: '✅' },
  { arabic: 'مرجع', arabic_with_harakat: 'مَرْجِع', transliteration: 'marjiʿ', meaning_en: 'reference / source', meaning_zh: '参考文献', category: 'academic', example_sentence: 'ذكرت المراجع في نهاية البحث.', emoji: '📚' },
  { arabic: 'تحليل', arabic_with_harakat: 'تَحْلِيل', transliteration: 'taḥlīl', meaning_en: 'analysis', meaning_zh: '分析', category: 'academic', example_sentence: 'قدّمت تحليلاً عميقاً للنصوص.', emoji: '🔎' },
  { arabic: 'فرضية', arabic_with_harakat: 'فَرْضِيَّة', transliteration: 'farḍiyya', meaning_en: 'hypothesis', meaning_zh: '假设', category: 'academic', example_sentence: 'اختبرت الباحثة فرضيتها بالتجارب.', emoji: '🧪' },
]

export const B2_ADVANCED_VERBS: VocabItem[] = [
  { arabic: 'يُحلِّل', arabic_with_harakat: 'يُحَلِّل', transliteration: 'yuḥallil', meaning_en: 'to analyze', meaning_zh: '分析', category: 'verbs', example_sentence: 'تُحلِّل منغ النصوص الأدبية.', emoji: '🔬' },
  { arabic: 'يستنتج', arabic_with_harakat: 'يَسْتَنْتِج', transliteration: 'yastantij', meaning_en: 'to conclude / deduce', meaning_zh: '得出结论', category: 'verbs', example_sentence: 'استنتجت أن اللغة والثقافة مرتبطتان.', emoji: '💭' },
  { arabic: 'يُناقش', arabic_with_harakat: 'يُنَاقِش', transliteration: 'yunāqish', meaning_en: 'to discuss / debate', meaning_zh: '讨论/辩论', category: 'verbs', example_sentence: 'ناقش الطلاب القضية بعمق.', emoji: '🗣️' },
  { arabic: 'يُعارض', arabic_with_harakat: 'يُعَارِض', transliteration: 'yuʿāriḍ', meaning_en: 'to oppose / disagree', meaning_zh: '反对', category: 'verbs', example_sentence: 'عارض الأستاذ هذا الرأي.', emoji: '❌' },
  { arabic: 'يُؤكّد', arabic_with_harakat: 'يُؤَكِّد', transliteration: 'yuʾakkid', meaning_en: 'to confirm / emphasize', meaning_zh: '确认/强调', category: 'verbs', example_sentence: 'أكّد الباحث صحة نتائجه.', emoji: '✔️' },
  { arabic: 'يستشهد بـ', arabic_with_harakat: 'يَسْتَشْهِد بـ', transliteration: 'yastashhid bi', meaning_en: 'to cite / quote', meaning_zh: '引用', category: 'verbs', example_sentence: 'استشهدت بأقوال ابن خلدون.', emoji: '📖' },
  { arabic: 'يُلخِّص', arabic_with_harakat: 'يُلَخِّص', transliteration: 'yulaẖẖiṣ', meaning_en: 'to summarize', meaning_zh: '总结', category: 'verbs', example_sentence: 'لخّصت البحث في فقرة واحدة.', emoji: '📝' },
]

// Ming's B2 stories: thesis defense & cultural exchange conference
export const B2_STORIES: StoryDialogue[] = [
  {
    id: 'thesis-defense',
    title_zh: '明的论文答辩',
    title_ar: 'مناقشة رسالة منغ',
    scene_zh: '在开罗大学答辩室。明正在向导师委员会答辩她的论文。',
    scene_emoji: '🎓📜',
    vocab_focus: ['أطروحة', 'فرضية', 'منهج', 'استنتاج'],
    lines: [
      {
        speaker: 'other',
        speaker_name_zh: '哈桑教授',
        speaker_emoji: '👨‍🏫',
        arabic: 'منغ، يسعدنا الاستماع إلى أطروحتك. هلّا بدأتِ؟',
        arabic_with_harakat: 'مِنْغ، يَسْعَدُنَا الاسْتِمَاعُ إِلَى أُطْرُوحَتِكِ. هَلَّا بَدَأْتِ؟',
        transliteration: 'Ming, yasaʿdunā al-istimāʿ ilā uṭrūḥatik. hallā badaʾti?',
        meaning_zh: '明，我们很高兴聆听你的论文答辩。请开始吧？',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: 'شكراً جزيلاً أستاذ. يتناول بحثي العلاقة بين اللغة العربية والهوية الثقافية.',
        arabic_with_harakat: 'شُكْرًا جَزِيلًا أُسْتَاذ. يَتَنَاوَلُ بَحْثِي العَلَاقَةَ بَيْنَ اللُّغَةِ العَرَبِيَّةِ وَالهُوِيَّةِ الثَّقَافِيَّة.',
        transliteration: 'Shukran jazīlan ustādh. yatanāwalu baḥthī al-ʿalāqa bayna al-lugha al-ʿarabiyya wa-l-huwiyya al-thaqāfiyya.',
        meaning_zh: '非常感谢教授。我的研究探讨阿拉伯语与文化认同之间的关系。',
      },
      {
        speaker: 'other',
        speaker_name_zh: '萨玛尔博士',
        speaker_emoji: '👩‍🏫',
        arabic: 'ما هي الفرضية الرئيسية لأطروحتك؟',
        arabic_with_harakat: 'مَا هِيَ الفَرْضِيَّةُ الرَّئِيسِيَّةُ لِأُطْرُوحَتِكِ؟',
        transliteration: 'Mā hiya al-farḍiyya al-raʾīsiyya li-uṭrūḥatik?',
        meaning_zh: '你论文的主要假设是什么？',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: 'أفترض أن تعلّم العربية يُعزّز التفاهم المتبادل ويُقلّل من سوء الفهم الثقافي.',
        arabic_with_harakat: 'أَفْتَرِضُ أَنَّ تَعَلُّمَ العَرَبِيَّةِ يُعَزِّزُ التَّفَاهُمَ المُتَبَادَلَ وَيُقَلِّلُ مِنْ سُوءِ الفَهْمِ الثَّقَافِي.',
        transliteration: 'Aftariḍu anna taʿallum al-ʿarabiyya yuʿazziz al-tafāhum al-mutabādal wa-yuqallil min sūʾ al-fahm al-thaqāfī.',
        meaning_zh: '我假设学习阿拉伯语能促进相互理解，减少文化误解。',
      },
      {
        speaker: 'other',
        speaker_name_zh: '哈桑教授',
        speaker_emoji: '👨‍🏫',
        arabic: 'ما المنهج الذي اتّبعتِه في بحثك؟',
        arabic_with_harakat: 'مَا المَنْهَجُ الَّذِي اتَّبَعْتِيهِ فِي بَحْثِكِ؟',
        transliteration: 'Mā al-manhaj alladhī ittabaʿtīhi fī baḥthik?',
        meaning_zh: '你在研究中采用了什么方法论？',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: 'اعتمدتُ على المنهج الوصفي التحليلي، وأجريتُ مقابلات مع خمسين طالباً صينياً.',
        arabic_with_harakat: 'اعْتَمَدْتُ عَلَى المَنْهَجِ الوَصْفِيِّ التَّحْلِيلِيِّ، وَأَجْرَيْتُ مُقَابَلَاتٍ مَعَ خَمْسِينَ طَالِبًا صِينِيًّا.',
        transliteration: 'Iʿtamadtu ʿalā al-manhaj al-waṣfī al-taḥlīlī, wa-ajraytu muqābalāt maʿa khamsīna ṭāliban ṣīniyyan.',
        meaning_zh: '我采用了描述性分析方法，并对五十名中国学生进行了访谈。',
      },
      {
        speaker: 'other',
        speaker_name_zh: '萨玛尔博士',
        speaker_emoji: '👩‍🏫',
        arabic: 'أُهنِّئكِ، منغ! بحثك متميّز وسيُضيف كثيراً للدراسات المقارنة.',
        arabic_with_harakat: 'أُهَنِّئُكِ، مِنْغ! بَحْثُكِ مُتَمَيِّزٌ وَسَيُضِيفُ كَثِيرًا لِلدِّرَاسَاتِ المُقَارَنَة.',
        transliteration: 'Uhanniʾuki, Ming! baḥthuki mutamayyiz wa-sa-yuḍīfu kathīran lil-dirāsāt al-muqārana.',
        meaning_zh: '恭喜你，明！你的研究很出色，将为比较研究增添很多价值。',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: 'شكراً لكم جميعاً. هذا يعني لي الكثير بعد كل هذه السنوات.',
        arabic_with_harakat: 'شُكْرًا لَكُمْ جَمِيعًا. هَذَا يَعْنِي لِي الكَثِيرَ بَعْدَ كُلِّ هَذِهِ السَّنَوَات.',
        transliteration: 'Shukran lakum jamīʿan. hādhā yaʿnī lī al-kathīr baʿda kull hādhihi al-sinawāt.',
        meaning_zh: '谢谢大家。经过这么多年的学习，这对我意义重大。',
      },
    ],
  },
  {
    id: 'cultural-conference',
    title_zh: '文化交流会议',
    title_ar: 'مؤتمر الحوار الثقافي',
    scene_zh: '明参加在开罗举行的中阿关系国际会议，并作主题发言。',
    scene_emoji: '🌍🎙️',
    vocab_focus: ['عولمة', 'هوية', 'تأثير', 'وسائل التواصل'],
    lines: [
      {
        speaker: 'other',
        speaker_name_zh: '会议主持人',
        speaker_emoji: '🎙️',
        arabic: 'أهلاً بكم في مؤتمر الحوار الثقافي الصيني العربي. الكلمة الأولى للدكتورة منغ.',
        arabic_with_harakat: 'أَهْلًا بِكُمْ فِي مُؤْتَمَرِ الحِوَارِ الثَّقَافِيِّ الصِّينِيِّ العَرَبِيِّ. الكَلِمَةُ الأُولَى لِلدُّكْتُورَةِ مِنْغ.',
        transliteration: 'Ahlan bikum fī muʾtamar al-ḥiwār al-thaqāfī al-ṣīnī al-ʿarabī. al-kalima al-ūlā lil-duktūra Ming.',
        meaning_zh: '欢迎参加中阿文化对话会议。首先请明博士发言。',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: 'شكراً. أودّ أن أتحدث عن تأثير العولمة على اللغة العربية والثقافة الصينية.',
        arabic_with_harakat: 'شُكْرًا. أَوَدُّ أَنْ أَتَحَدَّثَ عَنْ تَأْثِيرِ العَوْلَمَةِ عَلَى اللُّغَةِ العَرَبِيَّةِ وَالثَّقَافَةِ الصِّينِيَّة.',
        transliteration: 'Shukran. Awaddu an atahaddatha ʿan taʾthīr al-ʿawlama ʿalā al-lugha al-ʿarabiyya wa-l-thaqāfa al-ṣīniyya.',
        meaning_zh: '谢谢。我想谈谈全球化对阿拉伯语和中国文化的影响。',
      },
      {
        speaker: 'other',
        speaker_name_zh: '记者',
        speaker_emoji: '📰',
        arabic: 'هل تعتقدين أن وسائل التواصل الاجتماعي تُهدّد اللغات التقليدية؟',
        arabic_with_harakat: 'هَلْ تَعْتَقِدِينَ أَنَّ وَسَائِلَ التَّوَاصُلِ الاجْتِمَاعِيِّ تُهَدِّدُ اللُّغَاتِ التَّقْلِيدِيَّة؟',
        transliteration: 'Hal taʿtaqidīna anna wasāʾil al-tawāṣul al-ijtimāʿī tuhaddidu al-lughāt al-taqlīdiyya?',
        meaning_zh: '你认为社交媒体在威胁传统语言吗？',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: 'لا أعارض هذا الرأي تماماً، لكنني أُؤكِّد أن الوعي الثقافي هو الحل.',
        arabic_with_harakat: 'لَا أُعَارِضُ هَذَا الرَّأْيَ تَمَامًا، لَكِنَّنِي أُؤَكِّدُ أَنَّ الوَعْيَ الثَّقَافِيَّ هُوَ الحَل.',
        transliteration: 'Lā uʿāriḍu hādhā al-raʾy tamāman, lākinnanī uʾakkidu anna al-waʿy al-thaqāfī huwa al-ḥall.',
        meaning_zh: '我并不完全反对这个观点，但我强调文化意识才是解决方案。',
      },
      {
        speaker: 'other',
        speaker_name_zh: '阿拉伯教授',
        speaker_emoji: '👨‍🏫',
        arabic: 'هل يمكنكِ أن تستشهدي بمثال على ذلك؟',
        arabic_with_harakat: 'هَلْ يُمْكِنُكِ أَنْ تَسْتَشْهِدِي بِمِثَالٍ عَلَى ذَلِك؟',
        transliteration: 'Hal yumkinuki an tastashhidī bi-mithāl ʿalā dhālik?',
        meaning_zh: '你能举个例子吗？',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: 'بالطبع. كلمات مثل "إنترنت" و"كمبيوتر" دخلت العربية دون أن تُضعفها.',
        arabic_with_harakat: 'بِالطَّبْعِ. كَلِمَاتٌ مِثْلُ "إِنْتَرْنِت" وَ"كَمْبِيُوتَر" دَخَلَتِ العَرَبِيَّةَ دُونَ أَنْ تُضْعِفَهَا.',
        transliteration: 'Bil-ṭabʿ. kalimāt mithl "internet" wa-"computer" dakhalat al-ʿarabiyya dūna an tuḍaʿʿifihā.',
        meaning_zh: '当然。像"网络"和"电脑"这样的词进入了阿拉伯语而没有削弱它。',
      },
      {
        speaker: 'other',
        speaker_name_zh: '会议主持人',
        speaker_emoji: '🎙️',
        arabic: 'شكراً لهذا التحليل الرائع. ننتقل الآن إلى جلسة النقاش.',
        arabic_with_harakat: 'شُكْرًا لِهَذَا التَّحْلِيلِ الرَّائِع. نَنْتَقِلُ الآنَ إِلَى جَلْسَةِ النِّقَاش.',
        transliteration: 'Shukran li-hādhā al-taḥlīl al-rāʾiʿ. nantaqilu al-ān ilā jalsat al-niqāsh.',
        meaning_zh: '感谢这精彩的分析。现在我们进入讨论环节。',
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────
//  الاقتصاد والتجارة — Economics & Trade (B2 Unit 6)
// ─────────────────────────────────────────────────────────────
export const B2_ECONOMY: VocabItem[] = [
  { arabic: 'اقتصاد', arabic_with_harakat: 'اِقْتِصَاد', transliteration: 'iqtiṣād', meaning_en: 'economy', meaning_zh: '经济', category: 'economics', example_sentence: 'الاقتصاد الصيني من أكبر اقتصادات العالم.', emoji: '📈' },
  { arabic: 'تجارة', arabic_with_harakat: 'تِجَارَة', transliteration: 'tijāra', meaning_en: 'trade / commerce', meaning_zh: '贸易/商业', category: 'economics', example_sentence: 'التجارة بين الصين والدول العربية في تنامٍ مستمر.', emoji: '🤝' },
  { arabic: 'استثمار', arabic_with_harakat: 'اِسْتِثْمَار', transliteration: 'istithmār', meaning_en: 'investment', meaning_zh: '投资', category: 'economics', example_sentence: 'الاستثمار الأجنبي يدعم الاقتصاد.', emoji: '💰' },
  { arabic: 'صادرات', arabic_with_harakat: 'صَادِرَات', transliteration: 'ṣādirāt', meaning_en: 'exports', meaning_zh: '出口', category: 'economics', example_sentence: 'تزداد صادرات النفط العربي كل عام.', emoji: '🛢️' },
  { arabic: 'واردات', arabic_with_harakat: 'وَارِدَات', transliteration: 'wāridāt', meaning_en: 'imports', meaning_zh: '进口', category: 'economics', example_sentence: 'تستورد الدول العربية السلع الصينية.', emoji: '📦' },
  { arabic: 'ميزانية', arabic_with_harakat: 'مِيزَانِيَّة', transliteration: 'mīzāniyya', meaning_en: 'budget', meaning_zh: '预算', category: 'economics', example_sentence: 'وافق البرلمان على الميزانية الجديدة.', emoji: '📊' },
  { arabic: 'نمو', arabic_with_harakat: 'نُمُو', transliteration: 'numuww', meaning_en: 'growth', meaning_zh: '增长', category: 'economics', example_sentence: 'يُسجّل الاقتصاد نمواً ملحوظاً هذا العام.', emoji: '🌱' },
  { arabic: 'تضخم', arabic_with_harakat: 'تَضَخُّم', transliteration: 'taḍakhkhum', meaning_en: 'inflation', meaning_zh: '通货膨胀', category: 'economics', example_sentence: 'يؤثر التضخم على القدرة الشرائية.', emoji: '📉' },
]

// ─────────────────────────────────────────────────────────────
//  البيئة والمناخ — Environment & Climate (B2 Unit 7)
// ─────────────────────────────────────────────────────────────
export const B2_ENVIRONMENT: VocabItem[] = [
  { arabic: 'بيئة', arabic_with_harakat: 'بِيئَة', transliteration: 'bīʾa', meaning_en: 'environment', meaning_zh: '环境', category: 'environment', example_sentence: 'يجب حماية البيئة من التلوث.', emoji: '🌿' },
  { arabic: 'تلوث', arabic_with_harakat: 'تَلَوُّث', transliteration: 'talawwuth', meaning_en: 'pollution', meaning_zh: '污染', category: 'environment', example_sentence: 'التلوث الهوائي مشكلة عالمية.', emoji: '🏭' },
  { arabic: 'تغيّر المناخ', arabic_with_harakat: 'تَغَيُّر المَنَاخ', transliteration: 'taghayur al-manākh', meaning_en: 'climate change', meaning_zh: '气候变化', category: 'environment', example_sentence: 'تغيّر المناخ يهدد مستقبل كوكبنا.', emoji: '🌡️' },
  { arabic: 'طاقة متجددة', arabic_with_harakat: 'طَاقَة مُتَجَدِّدَة', transliteration: 'ṭāqa mutajaddida', meaning_en: 'renewable energy', meaning_zh: '可再生能源', category: 'environment', example_sentence: 'تستثمر دول الخليج في الطاقة المتجددة.', emoji: '☀️' },
  { arabic: 'تشجير', arabic_with_harakat: 'تَشْجِير', transliteration: 'tashjīr', meaning_en: 'reforestation / tree planting', meaning_zh: '植树造林', category: 'environment', example_sentence: 'تنفّذ المملكة مشاريع تشجير واسعة.', emoji: '🌳' },
  { arabic: 'جفاف', arabic_with_harakat: 'جَفَاف', transliteration: 'jafāf', meaning_en: 'drought', meaning_zh: '干旱', category: 'environment', example_sentence: 'يعاني كثير من المناطق العربية من الجفاف.', emoji: '🏜️' },
  { arabic: 'استدامة', arabic_with_harakat: 'اِسْتِدَامَة', transliteration: 'istidāma', meaning_en: 'sustainability', meaning_zh: '可持续性', category: 'environment', example_sentence: 'الاستدامة ضرورة لمستقبل أفضل.', emoji: '♻️' },
]

// ─────────────────────────────────────────────────────────────
//  B2 Additional Story: مناقشة بيئية في الأمم المتحدة
// ─────────────────────────────────────────────────────────────
export const B2_ENVIRONMENT_STORY: StoryDialogue = {
  id: 'un-environment',
  title_zh: '联合国环境讨论',
  title_en: 'UN Environment Discussion',
  title_ar: 'مناقشة بيئية في الأمم المتحدة',
  scene_zh: '🌍 明代表中国大学生参加了联合国青年气候峰会。她用阿拉伯语发言，令与会者惊叹。',
  scene_en: '🌍 Ming represents Chinese students at a UN Youth Climate Summit. She speaks in Arabic, stunning the audience.',
  scene_emoji: '🌍🌿',
  vocab_focus: ['بيئة', 'تغيّر المناخ', 'استدامة', 'تلوث', 'طاقة متجددة', 'تعاون'],
  lines: [
    { speaker: 'other', speaker_name_zh: '主持人', speaker_name_en: 'Moderator', speaker_emoji: '🎙️', arabic: 'كلمة التالية لممثلة الطلاب الصينيين، السيدة مينغ.', arabic_with_harakat: 'الْكَلِمَةُ التَّالِيَةُ لِمُمَثِّلَةِ الطُّلَّابِ الصِّينِيِّينَ، السَّيِّدَةِ مِينْغ.', meaning_zh: '下一个发言的是中国学生代表，明女士。', meaning_en: 'The next word goes to the representative of Chinese students, Ms. Ming.', transliteration: 'Al-kalima at-tāliya li-mumaththilat aṭ-ṭullāb aṣ-ṣīniyyīn, as-sayyida Mīng.' },
    { speaker: 'ming', speaker_name_zh: '明', speaker_name_en: 'Ming', speaker_emoji: '🧑‍🎓', arabic: 'شكراً. أيها السادة، تغيّر المناخ ليس مجرد مشكلة علمية — إنه أزمة حضارية تمسّ كل إنسان على هذه الأرض.', arabic_with_harakat: 'شُكْرًا. أَيُّهَا السَّادَة، تَغَيُّرُ المَنَاخِ لَيْسَ مُجَرَّدَ مُشْكِلَةٍ عِلْمِيَّةٍ — إِنَّهُ أَزْمَةٌ حَضَارِيَّةٌ تَمَسُّ كُلَّ إِنْسَانٍ عَلَى هَذِهِ الأَرْض.', meaning_zh: '谢谢。女士们先生们，气候变化不仅仅是一个科学问题——它是一场影响地球上每一个人的文明危机。', meaning_en: 'Thank you. Ladies and gentlemen, climate change is not merely a scientific problem — it is a civilizational crisis that touches every human being on this earth.', transliteration: 'Shukran. Ayyuhā as-sāda, taghayur al-manākh laysa mujarrad mushkila ʿilmiyya — innahu azma ḥaḍāriyya tamass kull insān ʿalā hādhihi l-arḍ.' },
    { speaker: 'other', speaker_name_zh: '阿拉伯代表', speaker_name_en: 'Arab Delegate', speaker_emoji: '👨‍💼', arabic: 'نتفق معك. دول الخليج تعاني من الجفاف والحرارة الشديدة. نحتاج إلى تعاون دولي حقيقي في مجال الطاقة المتجددة.', arabic_with_harakat: 'نَتَّفِقُ مَعَكِ. دُوَلُ الخَلِيجِ تُعَانِي مِنَ الجَفَافِ وَالحَرَارَةِ الشَّدِيدَة. نَحْتَاجُ إِلَى تَعَاوُنٍ دَوْلِيٍّ حَقِيقِيٍّ فِي مَجَالِ الطَّاقَةِ المُتَجَدِّدَة.', meaning_zh: '我们同意你的看法。海湾国家正遭受干旱和极端高温之苦。我们需要在可再生能源领域真正的国际合作。', meaning_en: 'We agree with you. Gulf states suffer from drought and extreme heat. We need genuine international cooperation in renewable energy.', transliteration: 'Nattafiqu maʿaki. Duwal al-khalīj tuʿānī min al-jafāf wa-l-ḥarāra ash-shadīda. Naḥtāju ilā taʿāwun dawlī ḥaqīqī fī majāl aṭ-ṭāqa al-mutajaddida.' },
    { speaker: 'ming', speaker_name_zh: '明', speaker_name_en: 'Ming', speaker_emoji: '🧑‍🎓', arabic: 'بالضبط. الصين والدول العربية شريكتان طبيعيتان في هذا التحدي. تُصدّر الصين تقنيات الطاقة الشمسية وتحتاج المنطقة العربية إلى بنية تحتية خضراء.', arabic_with_harakat: 'بِالضَّبْط. الصِّينُ وَالدُّوَلُ العَرَبِيَّةُ شَرِيكَتَانِ طَبِيعِيَّتَانِ فِي هَذَا التَّحَدِّي. تُصَدِّرُ الصِّينُ تَقْنِيَاتِ الطَّاقَةِ الشَّمْسِيَّةِ وَتَحْتَاجُ المِنْطَقَةُ العَرَبِيَّةُ إِلَى بُنْيَةٍ تَحْتِيَّةٍ خَضْرَاء.', meaning_zh: '正是如此。中国和阿拉伯国家是这一挑战中天然的伙伴。中国出口太阳能技术，阿拉伯地区需要绿色基础设施。', meaning_en: 'Exactly. China and Arab nations are natural partners in this challenge. China exports solar energy technologies and the Arab region needs green infrastructure.', transliteration: 'Bil-ḍabṭ. Aṣ-Ṣīn wa-d-duwal al-ʿarabiyya sharīkatān ṭabīʿiyyatān fī hādhā t-taḥaddī. Tuṣaddiru ṣ-Ṣīn taqniyyāt aṭ-ṭāqa sh-shamsiyya wa-taḥtāju l-minṭaqa l-ʿarabiyya ilā bunyā taḥtiyya khaḍrāʾ.' },
    { speaker: 'other', speaker_name_zh: '主持人', speaker_name_en: 'Moderator', speaker_emoji: '🎙️', arabic: 'خطاب رائع بالعربية! من أين تعلّمتِ هذه اللغة يا سيدة مينغ؟', arabic_with_harakat: 'خِطَابٌ رَائِعٌ بِالْعَرَبِيَّة! مِنْ أَيْنَ تَعَلَّمْتِ هَذِهِ اللُّغَةَ يَا سَيِّدَةَ مِينْغ؟', meaning_zh: '用阿拉伯语发表的精彩演讲！明女士，你是在哪里学的这门语言？', meaning_en: 'What a wonderful speech in Arabic! Where did you learn this language, Ms. Ming?', transliteration: 'Khiṭāb rāʾiʿ bil-ʿarabiyya! Min ayna taʿallamti hādhihi l-lugha yā sayyidat Mīng?' },
    { speaker: 'ming', speaker_name_zh: '明', speaker_name_en: 'Ming', speaker_emoji: '🧑‍🎓', arabic: 'تعلّمتها في القاهرة مع صديقي العزيز خالد — وبفضل إيماني بأن اللغة هي أول خطوة نحو الاستدامة الثقافية.', arabic_with_harakat: 'تَعَلَّمْتُهَا فِي الْقَاهِرَةِ مَعَ صَدِيقِي العَزِيزِ خَالِد — وَبِفَضْلِ إِيمَانِي بِأَنَّ اللُّغَةَ هِيَ أَوَّلُ خُطْوَةٍ نَحْوَ الاسْتِدَامَةِ الثَّقَافِيَّة.', meaning_zh: '我在开罗和我亲爱的朋友哈立德一起学的——也得益于我相信语言是走向文化可持续性的第一步。', meaning_en: 'I learned it in Cairo with my dear friend Khalid — and thanks to my belief that language is the first step toward cultural sustainability.', transliteration: 'Taʿallamtuhā fī l-Qāhira maʿa ṣadīqī l-ʿazīz Khālid — wa-bi-faḍl īmānī bi-anna l-lugha hiya awwalu khuṭwa naḥwa l-istidāma th-thaqāfiyya.' },
  ],
}

export const B2_LESSON_PLAN = [
  { day_number: 1, title_zh: '媒体与新闻',       title_en: 'Media & News',              title_ar: 'الإعلام والأخبار',           lesson_type: 'vocabulary', xp_reward: 60, estimated_minutes: 30 },
  { day_number: 2, title_zh: '政治与社会',        title_en: 'Politics & Society',         title_ar: 'السياسة والمجتمع',            lesson_type: 'vocabulary', xp_reward: 60, estimated_minutes: 30 },
  { day_number: 3, title_zh: '抽象概念',          title_en: 'Abstract Concepts',          title_ar: 'المفاهيم التجريدية',          lesson_type: 'vocabulary', xp_reward: 60, estimated_minutes: 28 },
  { day_number: 4, title_zh: '学术写作',          title_en: 'Academic Writing',           title_ar: 'الكتابة الأكاديمية',          lesson_type: 'vocabulary', xp_reward: 60, estimated_minutes: 30 },
  { day_number: 5, title_zh: '高级动词',          title_en: 'Advanced Verbs',             title_ar: 'الأفعال المتقدمة',            lesson_type: 'vocabulary', xp_reward: 60, estimated_minutes: 25 },
  { day_number: 6, title_zh: '经济与贸易',        title_en: 'Economics & Trade',          title_ar: 'الاقتصاد والتجارة',           lesson_type: 'vocabulary', xp_reward: 60, estimated_minutes: 28 },
  { day_number: 7, title_zh: '环境与气候',        title_en: 'Environment & Climate',      title_ar: 'البيئة والمناخ',              lesson_type: 'vocabulary', xp_reward: 60, estimated_minutes: 28 },
  { day_number: 8, title_zh: '故事：论文答辩',    title_en: "Story: Ming's Thesis Defense", title_ar: 'قصة: مناقشة الأطروحة',      lesson_type: 'dialogue',   xp_reward: 80, estimated_minutes: 35 },
  { day_number: 9, title_zh: '故事：文化交流会议', title_en: 'Story: Cultural Conference', title_ar: 'قصة: مؤتمر الحوار الثقافي',  lesson_type: 'dialogue',   xp_reward: 80, estimated_minutes: 35 },
  { day_number: 10, title_zh: '故事：联合国环境讨论', title_en: 'Story: UN Environment Discussion', title_ar: 'قصة: مناقشة بيئية في الأمم المتحدة', lesson_type: 'dialogue', xp_reward: 80, estimated_minutes: 35 },
]
