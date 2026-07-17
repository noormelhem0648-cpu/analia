import type { VocabItem } from './preA1Content'
import type { StoryDialogue } from './a1Content'

// C1 — Advanced (Literary Arabic, classical texts, rhetoric)
// C2 — Mastery (authentic academic & literary Arabic)

export const C1_RHETORIC: VocabItem[] = [
  { arabic: 'استعارة', arabic_with_harakat: 'اسْتِعَارَة', transliteration: 'istiʿāra', meaning_en: 'metaphor', meaning_zh: '隐喻', category: 'rhetoric', example_sentence: 'استخدم الشاعر استعارة جميلة في قصيدته.', emoji: '🌹' },
  { arabic: 'تشبيه', arabic_with_harakat: 'تَشْبِيه', transliteration: 'tashbīh', meaning_en: 'simile / comparison', meaning_zh: '明喻', category: 'rhetoric', example_sentence: 'الشجاع كالأسد في الشجاعة.', emoji: '🦁' },
  { arabic: 'مجاز', arabic_with_harakat: 'مَجَاز', transliteration: 'majāz', meaning_en: 'figurative language', meaning_zh: '比喻/修辞', category: 'rhetoric', example_sentence: 'استعمل الكاتب المجاز في وصف الزمن.', emoji: '✨' },
  { arabic: 'جناس', arabic_with_harakat: 'جِنَاس', transliteration: 'jināṣ', meaning_en: 'paronomasia / pun', meaning_zh: '双关语', category: 'rhetoric', example_sentence: 'الجناس فن بلاغي قديم.', emoji: '🎭' },
  { arabic: 'طباق', arabic_with_harakat: 'طِبَاق', transliteration: 'ṭibāq', meaning_en: 'antithesis', meaning_zh: '对比/反题', category: 'rhetoric', example_sentence: 'الطباق بين النور والظلام في القصيدة رائع.', emoji: '☯️' },
  { arabic: 'بلاغة', arabic_with_harakat: 'بَلَاغَة', transliteration: 'balāgha', meaning_en: 'eloquence / rhetoric', meaning_zh: '修辞学/雄辩', category: 'rhetoric', example_sentence: 'البلاغة العربية علم عريق وثري.', emoji: '📜' },
  { arabic: 'فصاحة', arabic_with_harakat: 'فَصَاحَة', transliteration: 'faṣāḥa', meaning_en: 'eloquence / clarity', meaning_zh: '流畅/清晰表达', category: 'rhetoric', example_sentence: 'يُعرف ابن الأثير بفصاحته.', emoji: '🗣️' },
]

export const C1_CLASSICAL: VocabItem[] = [
  { arabic: 'الفصحى', arabic_with_harakat: 'الفُصْحَى', transliteration: 'al-fuṣḥā', meaning_en: 'Classical/Modern Standard Arabic', meaning_zh: '正式/古典阿拉伯语', category: 'classical', example_sentence: 'القرآن الكريم كُتب بالفصحى.', emoji: '📖' },
  { arabic: 'نثر', arabic_with_harakat: 'نَثْر', transliteration: 'nathr', meaning_en: 'prose', meaning_zh: '散文', category: 'classical', example_sentence: 'نثر ابن المقفع من أجمل النثر العربي.', emoji: '📝' },
  { arabic: 'شعر', arabic_with_harakat: 'شِعْر', transliteration: 'shiʿr', meaning_en: 'poetry', meaning_zh: '诗歌', category: 'classical', example_sentence: 'المتنبي من أعظم شعراء العرب.', emoji: '🌙' },
  { arabic: 'عروض', arabic_with_harakat: 'عَرُوض', transliteration: 'ʿarūḍ', meaning_en: 'prosody / poetic meter', meaning_zh: '韵律学', category: 'classical', example_sentence: 'تدرس منغ علم العروض في بحثها.', emoji: '🎵' },
  { arabic: 'تفسير', arabic_with_harakat: 'تَفْسِير', transliteration: 'tafsīr', meaning_en: 'interpretation / exegesis', meaning_zh: '解释/诠释', category: 'classical', example_sentence: 'التفسير يحتاج إلى معرفة عميقة باللغة.', emoji: '🔍' },
  { arabic: 'مخطوطة', arabic_with_harakat: 'مَخْطُوطَة', transliteration: 'makhṭūṭa', meaning_en: 'manuscript', meaning_zh: '手稿', category: 'classical', example_sentence: 'اكتشفت الباحثة مخطوطة نادرة في المكتبة.', emoji: '📜' },
  { arabic: 'ديوان', arabic_with_harakat: 'دِيوَان', transliteration: 'dīwān', meaning_en: 'poetry collection / divan', meaning_zh: '诗集', category: 'classical', example_sentence: 'ديوان المتنبي مشهور في العالم العربي.', emoji: '📚' },
]

export const C1_PHILOSOPHY: VocabItem[] = [
  { arabic: 'وجود', arabic_with_harakat: 'وُجُود', transliteration: 'wujūd', meaning_en: 'existence / being', meaning_zh: '存在', category: 'philosophy', example_sentence: 'سؤال الوجود شغل الفلاسفة عبر العصور.', emoji: '🌌' },
  { arabic: 'حقيقة', arabic_with_harakat: 'حَقِيقَة', transliteration: 'ḥaqīqa', meaning_en: 'truth / reality', meaning_zh: '真理/现实', category: 'philosophy', example_sentence: 'البحث عن الحقيقة هدف الفلسفة.', emoji: '💫' },
  { arabic: 'عدالة', arabic_with_harakat: 'عَدَالَة', transliteration: 'ʿadāla', meaning_en: 'justice', meaning_zh: '公正', category: 'philosophy', example_sentence: 'العدالة أساس المجتمع المتحضر.', emoji: '⚖️' },
  { arabic: 'أخلاق', arabic_with_harakat: 'أَخْلَاق', transliteration: 'akhlāq', meaning_en: 'ethics / morality', meaning_zh: '伦理/道德', category: 'philosophy', example_sentence: 'الأخلاق العربية الإسلامية غنية ومتعددة.', emoji: '🕊️' },
  { arabic: 'عقل', arabic_with_harakat: 'عَقْل', transliteration: 'ʿaql', meaning_en: 'reason / intellect', meaning_zh: '理性/理智', category: 'philosophy', example_sentence: 'وازن ابن رشد بين العقل والنقل.', emoji: '🧠' },
  { arabic: 'جدل', arabic_with_harakat: 'جَدَل', transliteration: 'jadal', meaning_en: 'dialectic / debate', meaning_zh: '辩证法/辩论', category: 'philosophy', example_sentence: 'الجدل الفلسفي وسيلة للوصول إلى الحقيقة.', emoji: '🔄' },
]

// C2 — Mastery content
export const C2_LITERARY: VocabItem[] = [
  { arabic: 'سرد', arabic_with_harakat: 'سَرْد', transliteration: 'sard', meaning_en: 'narration / narrative', meaning_zh: '叙事/叙述', category: 'literary', example_sentence: 'أسلوب السرد عند نجيب محفوظ فريد من نوعه.', emoji: '📖' },
  { arabic: 'رواية', arabic_with_harakat: 'رِوَايَة', transliteration: 'riwāya', meaning_en: 'novel', meaning_zh: '小说', category: 'literary', example_sentence: 'رواية "أولاد حارتنا" عمل أدبي خالد.', emoji: '📗' },
  { arabic: 'أسلوب', arabic_with_harakat: 'أُسْلُوب', transliteration: 'uslūb', meaning_en: 'style', meaning_zh: '风格', category: 'literary', example_sentence: 'لكل كاتب أسلوبه الخاص.', emoji: '✒️' },
  { arabic: 'رمز', arabic_with_harakat: 'رَمْز', transliteration: 'ramz', meaning_en: 'symbol', meaning_zh: '象征', category: 'literary', example_sentence: 'الشمس رمز الحياة في الأدب العربي.', emoji: '☀️' },
  { arabic: 'دلالة', arabic_with_harakat: 'دَلَالَة', transliteration: 'dalāla', meaning_en: 'connotation / significance', meaning_zh: '含义/意义', category: 'literary', example_sentence: 'لكلمة "وطن" دلالة عاطفية عميقة.', emoji: '❤️' },
  { arabic: 'إيقاع', arabic_with_harakat: 'إِيقَاع', transliteration: 'īqāʿ', meaning_en: 'rhythm', meaning_zh: '节奏', category: 'literary', example_sentence: 'الإيقاع الموسيقي في قصيدة المتنبي مميز.', emoji: '🎶' },
]

export const C2_ACADEMIC_ADVANCED: VocabItem[] = [
  { arabic: 'إبستيمولوجيا', arabic_with_harakat: 'إِبِسْتِيمُولُوجِيَا', transliteration: 'ibistīmūlūjiyā', meaning_en: 'epistemology', meaning_zh: '认识论', category: 'academic', example_sentence: 'الإبستيمولوجيا تدرس أسس المعرفة.', emoji: '🔬' },
  { arabic: 'انثروبولوجيا', arabic_with_harakat: 'أَنْثْرُوبُولُوجِيَا', transliteration: 'anthrūbūlūjiyā', meaning_en: 'anthropology', meaning_zh: '人类学', category: 'academic', example_sentence: 'الانثروبولوجيا تدرس المجتمعات البشرية.', emoji: '🏺' },
  { arabic: 'منظومة', arabic_with_harakat: 'مَنْظُومَة', transliteration: 'manẓūma', meaning_en: 'system / framework', meaning_zh: '体系/框架', category: 'academic', example_sentence: 'المنظومة التعليمية تحتاج إلى إصلاح.', emoji: '🔧' },
  { arabic: 'خطاب', arabic_with_harakat: 'خِطَاب', transliteration: 'khiṭāb', meaning_en: 'discourse / speech', meaning_zh: '话语/演讲', category: 'academic', example_sentence: 'يدرس الباحثون الخطاب السياسي العربي.', emoji: '💬' },
  { arabic: 'تأويل', arabic_with_harakat: 'تَأْوِيل', transliteration: 'taʾwīl', meaning_en: 'hermeneutics / interpretation', meaning_zh: '诠释学/解读', category: 'academic', example_sentence: 'تأويل النصوص يختلف من باحث لآخر.', emoji: '🔎' },
  { arabic: 'إشكالية', arabic_with_harakat: 'إِشْكَالِيَّة', transliteration: 'ishkāliyya', meaning_en: 'problematic / problematique', meaning_zh: '问题性/核心问题', category: 'academic', example_sentence: 'تطرح هذه الدراسة إشكالية التعددية الثقافية.', emoji: '❓' },
]

// C1 Ming story: translating classical Arabic poetry with a Cairo professor
export const C1_STORIES: StoryDialogue[] = [
  {
    id: 'classical-poetry',
    title_zh: '古典诗歌的奥秘',
    title_ar: 'أسرار الشعر العربي الكلاسيكي',
    scene_zh: '明和开罗大学阿拉伯文学教授萨利姆一起研究穆太纳比的诗歌。',
    scene_emoji: '📜🌙',
    vocab_focus: ['استعارة', 'تشبيه', 'بلاغة', 'ديوان'],
    lines: [
      {
        speaker: 'other',
        speaker_name_zh: '萨利姆教授',
        speaker_emoji: '👨‍🏫',
        arabic: 'منغ، اقرئي هذا البيت من المتنبي وحاولي تفسيره.',
        arabic_with_harakat: 'مِنْغ، اقْرَئِي هَذَا البَيْتَ مِنَ المُتَنَبِّي وَحَاوِلِي تَفْسِيرَه.',
        transliteration: 'Ming, iqraʾī hādhā al-bayt min al-Mutanabbī wa-ḥāwilī tafsīrahu.',
        meaning_zh: '明，请读一下穆太纳比的这句诗，试着解释它。',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: '"أنا الذي نظر الأعمى إلى أدبي" — هل هذه استعارة؟',
        arabic_with_harakat: '"أَنَا الَّذِي نَظَرَ الأَعْمَى إِلَى أَدَبِي" — هَلْ هَذِهِ اسْتِعَارَة؟',
        transliteration: '"Anā alladhī naẓara al-aʿmā ilā adabī" — hal hādhihi istiʿāra?',
        meaning_zh: '"就连盲人也看得见我的文采"——这是隐喻吗？',
      },
      {
        speaker: 'other',
        speaker_name_zh: '萨利姆教授',
        speaker_emoji: '👨‍🏫',
        arabic: 'نعم! هذا مجاز رائع. المتنبي يقول إن شعره بلغ من الروعة حداً يرى فيه الأعمى.',
        arabic_with_harakat: 'نَعَمْ! هَذَا مَجَازٌ رَائِع. المُتَنَبِّي يَقُولُ إِنَّ شِعْرَهُ بَلَغَ مِنَ الرَّوْعَةِ حَدًّا يَرَى فِيهِ الأَعْمَى.',
        transliteration: 'Naʿam! hādhā majāz rāʾiʿ. al-Mutanabbī yaqūl inna shiʿrahu balagha min al-rawʿa ḥaddan yarā fīhi al-aʿmā.',
        meaning_zh: '对！这是绝妙的比喻。穆太纳比说他的诗歌已经达到了盲人也能"看见"的境界。',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: 'كيف أترجم هذا إلى الصينية؟ الاستعارة العربية مختلفة عن الاستعارة الصينية.',
        arabic_with_harakat: 'كَيْفَ أُتَرْجِمُ هَذَا إِلَى الصِّينِيَّة؟ الاسْتِعَارَةُ العَرَبِيَّةُ مُخْتَلِفَةٌ عَنِ الاسْتِعَارَةِ الصِّينِيَّة.',
        transliteration: 'Kayfa ʾuturjimu hādhā ilā al-ṣīniyya? al-istiʿāra al-ʿarabiyya mukhtalifa ʿan al-istiʿāra al-ṣīniyya.',
        meaning_zh: '我怎么把这个翻译成中文？阿拉伯语的隐喻和中文的隐喻不同。',
      },
      {
        speaker: 'other',
        speaker_name_zh: '萨利姆教授',
        speaker_emoji: '👨‍🏫',
        arabic: 'هذه هي قمة التحدي في الترجمة الأدبية! عليكِ نقل الروح لا الحرف.',
        arabic_with_harakat: 'هَذِهِ هِيَ قِمَّةُ التَّحَدِّي فِي التَّرْجَمَةِ الأَدَبِيَّة! عَلَيْكِ نَقْلُ الرُّوحِ لَا الحَرْف.',
        transliteration: 'Hādhihi hiya qimmat al-taḥaddī fī al-tarjama al-adabiyya! ʿalayki naql al-rūḥ lā al-ḥarf.',
        meaning_zh: '这正是文学翻译的最高挑战！你需要传达的是精神，而非字面意思。',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: 'فهمتُ. الترجمة الأدبية فن قائم بذاته. شكراً لهذا الدرس العميق.',
        arabic_with_harakat: 'فَهِمْتُ. التَّرْجَمَةُ الأَدَبِيَّةُ فَنٌّ قَائِمٌ بِذَاتِه. شُكْرًا لِهَذَا الدَّرْسِ العَمِيق.',
        transliteration: 'Fahimtu. al-tarjama al-adabiyya fann qāʾim bi-dhātih. shukran li-hādhā al-dars al-ʿamīq.',
        meaning_zh: '我明白了。文学翻译本身就是一门艺术。感谢这堂深刻的课。',
      },
    ],
  },
]

// C2 Ming story: delivering a keynote in Arabic at an international symposium
export const C2_STORIES: StoryDialogue[] = [
  {
    id: 'symposium-keynote',
    title_zh: '国际研讨会主旨演讲',
    title_ar: 'الكلمة الرئيسية في المؤتمر الدولي',
    scene_zh: '明在开罗举行的阿拉伯语与东方学国际研讨会上发表全阿拉伯语主旨演讲。这是她旅程的巅峰。',
    scene_emoji: '🎓🌍',
    vocab_focus: ['خطاب', 'إشكالية', 'تأويل', 'منظومة'],
    lines: [
      {
        speaker: 'other',
        speaker_name_zh: '研讨会主席',
        speaker_emoji: '🎙️',
        arabic: 'أيها الحضور الكرام، يسعدنا تقديم الدكتورة منغ، المتخصصة في اللسانيات العربية.',
        arabic_with_harakat: 'أَيُّهَا الحُضُورُ الكِرَام، يَسْعَدُنَا تَقْدِيمُ الدُّكْتُورَةِ مِنْغ، المُتَخَصِّصَةِ فِي اللِّسَانِيَّاتِ العَرَبِيَّة.',
        transliteration: 'Ayyuhā al-ḥuḍūr al-kirām, yasaʿdunā taqdīm al-duktūra Ming, al-mutakhaṣṣiṣa fī al-lisāniyyāt al-ʿarabiyya.',
        meaning_zh: '尊敬的来宾们，我们很荣幸介绍明博士，她是阿拉伯语言学专家。',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: 'شكراً جزيلاً. إن الإشكالية التي يطرحها بحثنا اليوم تتعلق بمنظومة التعليم اللغوي بين الثقافات.',
        arabic_with_harakat: 'شُكْرًا جَزِيلًا. إِنَّ الإِشْكَالِيَّةَ الَّتِي يَطْرَحُهَا بَحْثُنَا اليَوْمَ تَتَعَلَّقُ بِمَنْظُومَةِ التَّعْلِيمِ اللُّغَوِيِّ بَيْنَ الثَّقَافَات.',
        transliteration: 'Shukran jazīlan. inna al-ishkāliyya allatī yaṭraḥuhā baḥthunā al-yawm tataʿallaq bi-manẓūmat al-taʿlīm al-lughawī bayna al-thaqāfāt.',
        meaning_zh: '非常感谢。我们今天研究的核心问题涉及跨文化语言教育体系。',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: 'أرى أن تأويل النصوص الكلاسيكية لا يمكن فصله عن سياقه الثقافي والتاريخي.',
        arabic_with_harakat: 'أَرَى أَنَّ تَأْوِيلَ النُّصُوصِ الكَلَاسِيكِيَّةِ لَا يُمْكِنُ فَصْلُهُ عَنْ سِيَاقِهِ الثَّقَافِيِّ وَالتَّارِيخِيّ.',
        transliteration: 'Arā anna taʾwīl al-nuṣūṣ al-klāsīkiyya lā yumkin faṣluh ʿan siyāqihi al-thaqāfī wa-l-tārīkhī.',
        meaning_zh: '我认为对古典文本的诠释不能脱离其文化和历史背景。',
      },
      {
        speaker: 'other',
        speaker_name_zh: '与会学者',
        speaker_emoji: '👨‍💼',
        arabic: 'دكتورة منغ، كيف ترين العلاقة بين الخطاب العربي المعاصر والموروث الكلاسيكي؟',
        arabic_with_harakat: 'دُكْتُورَةُ مِنْغ، كَيْفَ تَرَيْنَ العَلَاقَةَ بَيْنَ الخِطَابِ العَرَبِيِّ المُعَاصِرِ وَالمَوْرُوثِ الكَلَاسِيكِيّ؟',
        transliteration: 'Duktūra Ming, kayfa tarayna al-ʿalāqa bayna al-khiṭāb al-ʿarabī al-muʿāṣir wa-l-mawrūth al-klāsīkī?',
        meaning_zh: '明博士，您如何看待当代阿拉伯话语与古典遗产之间的关系？',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: 'العلاقة علاقة جدلية خلاقة — التراث يُغذّي الحاضر، والحاضر يُعيد تأويل التراث.',
        arabic_with_harakat: 'العَلَاقَةُ عَلَاقَةٌ جَدَلِيَّةٌ خَلَّاقَة — التُّرَاثُ يُغَذِّي الحَاضِر، وَالحَاضِرُ يُعِيدُ تَأْوِيلَ التُّرَاث.',
        transliteration: 'Al-ʿalāqa ʿalāqa jadaliyya khallāqa — al-turāth yughadhdhī al-ḥāḍir, wa-l-ḥāḍir yuʿīdu taʾwīl al-turāth.',
        meaning_zh: '这是一种富有创造性的辩证关系——传统滋养当下，当下重新诠释传统。',
      },
      {
        speaker: 'other',
        speaker_name_zh: '研讨会主席',
        speaker_emoji: '🎙️',
        arabic: 'شكراً، دكتورة منغ. كلامكِ بالعربية الفصيحة يدل على مستوى نادر من الإتقان.',
        arabic_with_harakat: 'شُكْرًا، دُكْتُورَةُ مِنْغ. كَلَامُكِ بِالعَرَبِيَّةِ الفَصِيحَةِ يَدُلُّ عَلَى مُسْتَوًى نَادِرٍ مِنَ الإِتْقَان.',
        transliteration: 'Shukran, duktūra Ming. kalāmuki bil-ʿarabiyya al-faṣīḥa yadull ʿalā mustawan nādir min al-itqān.',
        meaning_zh: '谢谢，明博士。您用纯正阿拉伯语发言，展现了极其罕见的精通水准。',
      },
      {
        speaker: 'ming',
        speaker_name_zh: '明',
        speaker_emoji: '👩‍🎓',
        arabic: 'العربية لغة الروح. عشرُ سنوات من الدراسة لم تكن كافية لأستوعب جمالها كله.',
        arabic_with_harakat: 'العَرَبِيَّةُ لُغَةُ الرُّوح. عَشْرُ سَنَوَاتٍ مِنَ الدِّرَاسَةِ لَمْ تَكُنْ كَافِيَةً لِأَسْتَوْعِبَ جَمَالَهَا كُلَّه.',
        transliteration: 'Al-ʿarabiyya lughat al-rūḥ. ʿashr sanawāt min al-dirāsa lam takun kāfiya li-astawʿiba jamālahā kullahu.',
        meaning_zh: '阿拉伯语是灵魂的语言。十年的学习还不足以领略它全部的美丽。',
      },
    ],
  },
]

export const C1_LESSON_PLAN = [
  { day_number: 1, title_zh: '修辞学与文采', title_en: 'Rhetoric & Eloquence', title_ar: 'البلاغة والفصاحة', lesson_type: 'vocabulary', xp: 80 },
  { day_number: 2, title_zh: '古典阿拉伯语', title_en: 'Classical Arabic', title_ar: 'العربية الكلاسيكية', lesson_type: 'vocabulary', xp: 80 },
  { day_number: 3, title_zh: '哲学与思想', title_en: 'Philosophy & Thought', title_ar: 'الفلسفة والفكر', lesson_type: 'vocabulary', xp: 80 },
  { day_number: 4, title_zh: '故事：古典诗歌', title_en: 'Story: Classical Poetry', title_ar: 'قصة: الشعر الكلاسيكي', lesson_type: 'dialogue', xp: 100 },
]

export const C2_LESSON_PLAN = [
  { day_number: 1, title_zh: '文学分析', title_en: 'Literary Analysis', title_ar: 'التحليل الأدبي', lesson_type: 'vocabulary', xp: 100 },
  { day_number: 2, title_zh: '高级学术语言', title_en: 'Advanced Academic Language', title_ar: 'اللغة الأكاديمية المتقدمة', lesson_type: 'vocabulary', xp: 100 },
  { day_number: 3, title_zh: '故事：国际研讨会', title_en: 'Story: International Symposium', title_ar: 'قصة: المؤتمر الدولي', lesson_type: 'dialogue', xp: 120 },
]
