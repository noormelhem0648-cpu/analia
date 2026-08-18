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

// ─────────────────────────────────────────────────────────────
//  الترجمة والتأويل — Translation & Interpretation (C2 Unit 3)
// ─────────────────────────────────────────────────────────────
export const C2_TRANSLATION: VocabItem[] = [
  { arabic: 'ترجمة', arabic_with_harakat: 'تَرْجَمَة', transliteration: 'tarjama', meaning_en: 'translation', meaning_zh: '翻译', category: 'translation', example_sentence: 'الترجمة جسر بين الثقافات.', emoji: '🌉' },
  { arabic: 'مترجم', arabic_with_harakat: 'مُتَرْجِم', transliteration: 'mutarjim', meaning_en: 'translator / interpreter', meaning_zh: '翻译员/口译员', category: 'translation', example_sentence: 'عملت منغ مترجمة في المؤتمر الدولي.', emoji: '🎙️' },
  { arabic: 'تكافؤ', arabic_with_harakat: 'تَكَافُؤ', transliteration: 'takāfuʾ', meaning_en: 'equivalence', meaning_zh: '等值/对等', category: 'translation', example_sentence: 'إيجاد التكافؤ الثقافي في الترجمة تحدٍّ كبير.', emoji: '⚖️' },
  { arabic: 'نقل ثقافي', arabic_with_harakat: 'نَقْل ثَقَافِي', transliteration: 'naql thaqāfī', meaning_en: 'cultural transfer', meaning_zh: '文化移植', category: 'translation', example_sentence: 'النقل الثقافي أعقد من الترجمة اللفظية.', emoji: '🌐' },
  { arabic: 'إعادة صياغة', arabic_with_harakat: 'إِعَادَة صِيَاغَة', transliteration: 'iʿādat ṣiyāgha', meaning_en: 'rephrasing / reformulation', meaning_zh: '重新表述', category: 'translation', example_sentence: 'لجأت إلى إعادة الصياغة لنقل المعنى الضمني.', emoji: '✏️' },
  { arabic: 'أمانة الترجمة', arabic_with_harakat: 'أَمَانَة التَّرْجَمَة', transliteration: 'amānat al-tarjama', meaning_en: 'fidelity / faithfulness in translation', meaning_zh: '翻译忠实性', category: 'translation', example_sentence: 'أمانة الترجمة تعني الحفاظ على روح النص.', emoji: '🔐' },
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

// ─────────────────────────────────────────────────────────────
//  اللهجات العربية — Arabic Dialects (C1 Unit 4)
// ─────────────────────────────────────────────────────────────
export const C1_DIALECTS: VocabItem[] = [
  { arabic: 'لهجة', arabic_with_harakat: 'لَهْجَة', transliteration: 'lahja', meaning_en: 'dialect', meaning_zh: '方言', category: 'dialects', example_sentence: 'لكل بلد عربي لهجته المحلية.', emoji: '🗣️' },
  { arabic: 'عامية', arabic_with_harakat: 'عَامِيَّة', transliteration: 'ʿāmmiyya', meaning_en: 'colloquial Arabic', meaning_zh: '口语阿拉伯语', category: 'dialects', example_sentence: 'العامية المصرية مفهومة في معظم الدول العربية.', emoji: '💬' },
  { arabic: 'مصري', arabic_with_harakat: 'مِصْرِي', transliteration: 'miṣrī', meaning_en: 'Egyptian (dialect)', meaning_zh: '埃及方言', category: 'dialects', example_sentence: 'اللهجة المصرية منتشرة بسبب السينما.', emoji: '🎬' },
  { arabic: 'شامي', arabic_with_harakat: 'شَامِي', transliteration: 'shāmī', meaning_en: 'Levantine dialect', meaning_zh: '黎凡特方言', category: 'dialects', example_sentence: 'اللهجة الشامية تُستخدم في سوريا ولبنان والأردن وفلسطين.', emoji: '🌿' },
  { arabic: 'خليجي', arabic_with_harakat: 'خَلِيجِي', transliteration: 'khalījī', meaning_en: 'Gulf dialect', meaning_zh: '海湾方言', category: 'dialects', example_sentence: 'اللهجة الخليجية شائعة في دول الخليج العربي.', emoji: '🏜️' },
  { arabic: 'مغربي', arabic_with_harakat: 'مَغْرِبِي', transliteration: 'maghribī', meaning_en: 'Maghrebi dialect', meaning_zh: '马格里布方言', category: 'dialects', example_sentence: 'اللهجة المغربية تتأثر بالأمازيغية والفرنسية.', emoji: '🌅' },
  { arabic: 'دارجة', arabic_with_harakat: 'دَارِجَة', transliteration: 'dārija', meaning_en: 'spoken vernacular (esp. Moroccan)', meaning_zh: '口语（尤指摩洛哥）', category: 'dialects', example_sentence: 'الدارجة المغربية صعبة على الناطقين بالفصحى.', emoji: '🗺️' },
  { arabic: 'فصحى وعامية', arabic_with_harakat: 'فُصْحَى وَعَامِيَّة', transliteration: 'fuṣḥā wa-ʿāmmiyya', meaning_en: 'formal and colloquial Arabic', meaning_zh: '正式语与口语', category: 'dialects', example_sentence: 'كثير من العرب يتبدّلون بين الفصحى والعامية.', emoji: '🔄' },
]

// New C1 Story: Ming explores Arabic dialects with friends from different countries
export const C1_DIALECT_STORY: StoryDialogue = {
  id: 'dialect-journey',
  title_zh: '方言之旅',
  title_en: 'A Journey Through Dialects',
  title_ar: 'رحلة في اللهجات',
  scene_zh: '🌍 明在开罗参加了一个阿拉伯语言学营，认识了来自埃及、叙利亚和摩洛哥的新朋友，他们一起谈论各自的方言。',
  scene_en: '🌍 Ming joins an Arabic linguistics camp in Cairo and meets friends from Egypt, Syria, and Morocco. They compare their dialects.',
  scene_emoji: '🌍🗣️',
  vocab_focus: ['لهجة', 'عامية', 'فصحى', 'مصري', 'شامي', 'مغربي'],
  lines: [
    { speaker: 'other', speaker_name_zh: '法鲁克（埃及）', speaker_name_en: 'Farouk (Egypt)', speaker_emoji: '🇪🇬', arabic: 'إيه رأيك في اللهجة المصرية يا منغ؟ تقدري تفهمينا؟', arabic_with_harakat: 'إِيهْ رَأْيَكِ فِي اللَّهْجَةِ المِصْرِيَّةِ يَا مِنْغ؟ تِقْدَرِي تِفْهَمِينَا؟', meaning_zh: '明，你觉得埃及方言怎么样？你能听懂我们说的吗？', meaning_en: 'Ming, what do you think of Egyptian dialect? Can you understand us?', transliteration: 'Ēh raʾyaki fī al-lahja al-miṣriyya yā Ming? tiqdarī tifhamīnā?' },
    { speaker: 'ming', speaker_name_zh: '明', speaker_name_en: 'Ming', speaker_emoji: '🧑‍🎓', arabic: 'أفهمكم أحياناً لأن اللهجة المصرية منتشرة في الأفلام العربية! لكن اللهجة المغربية صعبة علي.', arabic_with_harakat: 'أَفْهَمُكُمْ أَحْيَانًا لِأَنَّ اللَّهْجَةَ المِصْرِيَّةَ مُنْتَشِرَةٌ فِي الأَفْلَامِ العَرَبِيَّة! لَكِنَّ اللَّهْجَةَ المَغْرِبِيَّةَ صَعْبَةٌ عَلَيَّ.', meaning_zh: '我有时能听懂你们，因为埃及方言在阿拉伯电影中很普遍！但摩洛哥方言对我来说很难。', meaning_en: 'I understand you sometimes because Egyptian dialect is common in Arabic films! But Moroccan dialect is hard for me.', transliteration: 'Afhamukum aḥyānan li-anna al-lahja al-miṣriyya muntashira fī al-aflām al-ʿarabiyya! lakinna al-lahja al-maghribiyya ṣaʿba ʿalayya.' },
    { speaker: 'other', speaker_name_zh: '亚辛（摩洛哥）', speaker_name_en: 'Yasin (Morocco)', speaker_emoji: '🇲🇦', arabic: 'واش كاتفهمي شي؟ الدارجة المغربية مزيان! (هل تفهمين شيئاً؟ الدارجة جميلة!)', arabic_with_harakat: 'وَاشْ كَاتْفَهْمِي شِي؟ الدَّارِجَةُ المَغْرِبِيَّةُ مْزِيَان!', meaning_zh: '你能理解什么吗？摩洛哥口语很好听！', meaning_en: 'Do you understand anything? Moroccan darija is wonderful!', transliteration: 'Wāsh kātfhamī shī? ad-dārija al-maghribiyya mziyān!' },
    { speaker: 'other', speaker_name_zh: '拉娜（叙利亚）', speaker_name_en: 'Rana (Syria)', speaker_emoji: '🇸🇾', arabic: 'بالشامي منقول: شو رأيك بلغتنا؟ يعني، كيف حالك بالعربي الحكي؟', arabic_with_harakat: 'بِالشَّامِيِّ مِنْقُول: شُو رَأْيَكِ بِلُغْتِنَا؟ يَعْنِي، كِيفِ حَالَكِ بِالعَرَبِي الحَكِي؟', meaning_zh: '用叙利亚方言说：你对我们的语言有什么看法？就是，你的口语阿拉伯语怎么样？', meaning_en: "In Levantine: what do you think of our dialect? I mean, how's your spoken Arabic?", transliteration: 'Bis-shāmī minqūl: shū raʾyaki bi-lughtina? yaʿnī, kīf ḥālak bil-ʿarabī al-ḥakī?' },
    { speaker: 'ming', speaker_name_zh: '明', speaker_name_en: 'Ming', speaker_emoji: '🧑‍🎓', arabic: 'أشعر أن اللهجات العربية كأنها لغات مختلفة! لكن الفصحى توحّدنا جميعاً. هذا جميل.', arabic_with_harakat: 'أَشْعُرُ أَنَّ اللَّهْجَاتِ العَرَبِيَّةَ كَأَنَّهَا لُغَاتٌ مُخْتَلِفَة! لَكِنَّ الفُصْحَى تُوَحِّدُنَا جَمِيعًا. هَذَا جَمِيل.', meaning_zh: '我感觉阿拉伯方言就像是不同的语言！但正式阿拉伯语把我们所有人联合在一起。这很美妙。', meaning_en: "I feel like Arabic dialects are like different languages! But Modern Standard Arabic unites us all. That's beautiful.", transliteration: 'Ashʿuru anna al-lahjāt al-ʿarabiyya ka-annahā lughāt mukhtalifa! lakinna al-fuṣḥā tuwāḥḥidunā jamīʿan. hādhā jamīl.' },
  ],
}

// C1 Ming story: translating classical Arabic poetry with a Cairo professor
export const C1_STORIES: StoryDialogue[] = [
  C1_DIALECT_STORY,
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

// ─────────────────────────────────────────────────────────────
//  التقنية والمجتمع — Technology & Society (C1 Unit 5)
// ─────────────────────────────────────────────────────────────
export const C1_TECHNOLOGY: VocabItem[] = [
  { arabic: 'ذكاء اصطناعي', arabic_with_harakat: 'ذَكَاء اصْطِنَاعِي', transliteration: 'dhakāʾ iṣṭināʿī', meaning_en: 'artificial intelligence', meaning_zh: '人工智能', category: 'technology', example_sentence: 'يُحدث الذكاء الاصطناعي ثورة في كل المجالات.', emoji: '🤖' },
  { arabic: 'خوارزمية', arabic_with_harakat: 'خَوَارِزْمِيَّة', transliteration: 'khawārizmiyya', meaning_en: 'algorithm', meaning_zh: '算法', category: 'technology', example_sentence: 'صمّم المبرمج خوارزمية متطورة.', emoji: '💻' },
  { arabic: 'بيانات ضخمة', arabic_with_harakat: 'بَيَانَات ضَخْمَة', transliteration: 'bayānāt ḍakhma', meaning_en: 'big data', meaning_zh: '大数据', category: 'technology', example_sentence: 'تعتمد الشركات الكبرى على البيانات الضخمة.', emoji: '📊' },
  { arabic: 'أمن إلكتروني', arabic_with_harakat: 'أَمْن إِلِكْتْرُونِي', transliteration: 'amn ilikthrūnī', meaning_en: 'cybersecurity', meaning_zh: '网络安全', category: 'technology', example_sentence: 'الأمن الإلكتروني ضرورة في العصر الرقمي.', emoji: '🔐' },
  { arabic: 'تحوّل رقمي', arabic_with_harakat: 'تَحَوُّل رَقْمِي', transliteration: 'taḥawwul raqmī', meaning_en: 'digital transformation', meaning_zh: '数字化转型', category: 'technology', example_sentence: 'تشهد الدول العربية تحولاً رقمياً متسارعاً.', emoji: '🌐' },
  { arabic: 'تطبيق ذكي', arabic_with_harakat: 'تَطْبِيق ذَكِي', transliteration: 'taṭbīq dhakī', meaning_en: 'smart application', meaning_zh: '智能应用程序', category: 'technology', example_sentence: 'طوّرت الشركة تطبيقاً ذكياً لتعلّم العربية.', emoji: '📱' },
  { arabic: 'واقع افتراضي', arabic_with_harakat: 'وَاقِع افْتِرَاضِي', transliteration: 'wāqiʿ iftirāḍī', meaning_en: 'virtual reality', meaning_zh: '虚拟现实', category: 'technology', example_sentence: 'يُستخدم الواقع الافتراضي في تعليم اللغات.', emoji: '🥽' },
]

// ─────────────────────────────────────────────────────────────
//  التراث الإسلامي والعلوم العربية — Islamic Heritage (C1 Unit 6)
// ─────────────────────────────────────────────────────────────
export const C1_HERITAGE: VocabItem[] = [
  { arabic: 'تراث', arabic_with_harakat: 'تُرَاث', transliteration: 'turāth', meaning_en: 'heritage / legacy', meaning_zh: '遗产/传承', category: 'heritage', example_sentence: 'التراث العربي الإسلامي أثّر في النهضة الأوروبية.', emoji: '🏛️' },
  { arabic: 'علم الكلام', arabic_with_harakat: 'عِلْم الكَلَام', transliteration: 'ʿilm al-kalām', meaning_en: 'Islamic theology', meaning_zh: '伊斯兰神学', category: 'heritage', example_sentence: 'علم الكلام يبحث في أصول الدين بالعقل.', emoji: '📖' },
  { arabic: 'الفلسفة الإسلامية', arabic_with_harakat: 'الفَلْسَفَة الإِسْلَامِيَّة', transliteration: 'al-falsafa al-islāmiyya', meaning_en: 'Islamic philosophy', meaning_zh: '伊斯兰哲学', category: 'heritage', example_sentence: 'ابن سينا وابن رشد أعلام الفلسفة الإسلامية.', emoji: '🧠' },
  { arabic: 'حضارة', arabic_with_harakat: 'حَضَارَة', transliteration: 'ḥaḍāra', meaning_en: 'civilization', meaning_zh: '文明', category: 'heritage', example_sentence: 'أسهمت الحضارة العربية في العلوم والفنون.', emoji: '🌟' },
  { arabic: 'اجتهاد', arabic_with_harakat: 'اجْتِهَاد', transliteration: 'ijtihād', meaning_en: 'independent legal reasoning', meaning_zh: '法律独立推理', category: 'heritage', example_sentence: 'الاجتهاد في الفقه الإسلامي ضروري في كل عصر.', emoji: '⚖️' },
  { arabic: 'الطب العربي', arabic_with_harakat: 'الطِّب العَرَبِي', transliteration: 'al-ṭibb al-ʿarabī', meaning_en: 'Arabic/Islamic medicine', meaning_zh: '阿拉伯医学', category: 'heritage', example_sentence: 'ابن سينا ألّف "القانون في الطب" أشهر كتاب طبي.', emoji: '⚕️' },
  { arabic: 'رياضيات عربية', arabic_with_harakat: 'رِيَاضِيَّات عَرَبِيَّة', transliteration: 'riyāḍiyyāt ʿarabiyya', meaning_en: 'Arabic mathematics', meaning_zh: '阿拉伯数学', category: 'heritage', example_sentence: 'الخوارزمي مؤسس علم الجبر وأعطى اسمه للخوارزمية.', emoji: '🔢' },
]

// C1 Story 3: Ming at a tech & Arabic language conference
export const C1_TECH_STORY: StoryDialogue = {
  id: 'tech-arabic',
  title_zh: '科技与阿拉伯语的未来',
  title_en: 'Technology and the Future of Arabic',
  title_ar: 'التقنية ومستقبل اللغة العربية',
  scene_zh: '🤖 明参加了一场关于人工智能与阿拉伯语处理的学术研讨会。',
  scene_emoji: '🤖📚',
  vocab_focus: ['ذكاء اصطناعي', 'خوارزمية', 'تحوّل رقمي', 'بيانات ضخمة'],
  lines: [
    { speaker: 'other', speaker_name_zh: '艾哈迈德博士', speaker_emoji: '👨‍💻', arabic: 'كيف يمكن للذكاء الاصطناعي أن يُساعد في تعليم اللغة العربية للناطقين بالصينية؟', arabic_with_harakat: 'كَيْفَ يُمْكِنُ لِلذَّكَاءِ الاصْطِنَاعِيِّ أَنْ يُسَاعِدَ فِي تَعْلِيمِ اللُّغَةِ العَرَبِيَّةِ لِلنَّاطِقِينَ بِالصِّينِيَّة؟', meaning_zh: '人工智能如何帮助中文使用者学习阿拉伯语？', meaning_en: 'How can AI help Chinese speakers learn Arabic?', transliteration: 'Kayfa yumkin lil-dhakāʾ al-iṣṭināʿī an yusāʿid fī taʿlīm al-lugha al-ʿarabiyya lil-nāṭiqīn bil-ṣīniyya?' },
    { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '👩‍🎓', arabic: 'أعتقد أن أهم تطبيق هو التعرف على النطق وتصحيحه آنياً. الخوارزميات يمكنها تحليل الأخطاء الشائعة لدى الطلاب الصينيين.', arabic_with_harakat: 'أَعْتَقِدُ أَنَّ أَهَمَّ تَطْبِيقٍ هُوَ التَّعَرُّفُ عَلَى النُّطْقِ وَتَصْحِيحُهُ آنِيًّا. الخَوَارِزْمِيَّاتُ يُمْكِنُهَا تَحْلِيلُ الأَخْطَاءِ الشَّائِعَةِ لَدَى الطُّلَّابِ الصِّينِيِّين.', meaning_zh: '我认为最重要的应用是实时语音识别和纠正。算法可以分析中国学生常犯的错误。', meaning_en: 'I think the most important application is real-time speech recognition and correction. Algorithms can analyze common mistakes by Chinese students.', transliteration: 'Aʿtaqidu anna ahamma taṭbīq huwa al-taʿarruf ʿalā al-nuṭq wa-taṣḥīḥihi āniyyan. al-khawārizmiyyāt yumkinuhā taḥlīl al-akḥṭāʾ al-shāʾiʿa ladā al-ṭullāb al-ṣīniyyīn.' },
    { speaker: 'other', speaker_name_zh: '艾哈迈德博士', speaker_emoji: '👨‍💻', arabic: 'هذا صحيح. لكن اللغة العربية تُشكّل تحدياً للبيانات الضخمة بسبب الاشتقاق وتعدد اللهجات.', arabic_with_harakat: 'هَذَا صَحِيح. لَكِنَّ اللُّغَةَ العَرَبِيَّةَ تُشَكِّلُ تَحَدِّيًا لِلْبَيَانَاتِ الضَّخْمَةِ بِسَبَبِ الاشْتِقَاقِ وَتَعَدُّدِ اللَّهْجَات.', meaning_zh: '这是正确的。但阿拉伯语对大数据来说是个挑战，因为词根派生和方言多样性。', meaning_en: 'True. But Arabic poses a challenge for big data due to its root derivation system and dialect diversity.', transliteration: 'Hādhā ṣaḥīḥ. lakinna al-lugha al-ʿarabiyya tushakkil taḥaddiyan lil-bayānāt al-ḍakhma bi-sabab al-ishtiqāq wa-taʿaddud al-lahjāt.' },
    { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '👩‍🎓', arabic: 'بالضبط. هذا يجعل التحوّل الرقمي للمحتوى العربي فرصة ضخمة تنتظر الباحثين الصينيين والعرب معاً.', arabic_with_harakat: 'بِالضَّبْط. هَذَا يَجْعَلُ التَّحَوُّلَ الرَّقْمِيَّ لِلْمَحْتَوَى العَرَبِيِّ فُرْصَةً ضَخْمَةً تَنْتَظِرُ الْبَاحِثِينَ الصِّينِيِّينَ وَالعَرَبَ مَعًا.', meaning_zh: '正是。这使阿拉伯内容的数字化转型成为等待中阿研究者共同把握的巨大机遇。', meaning_en: 'Exactly. This makes the digital transformation of Arabic content a huge opportunity awaiting Chinese and Arab researchers together.', transliteration: 'Bil-ḍabṭ. hādhā yajʿalu al-taḥawwul al-raqmī lil-muḥtawā al-ʿarabī furṣa ḍakhma tantaẓiru al-bāḥithīn al-ṣīniyyīn wa-l-ʿarab maʿan.' },
  ],
}

// C1 Story 4: Ming explores Islamic heritage and science
export const C1_HERITAGE_STORY: StoryDialogue = {
  id: 'islamic-heritage',
  title_zh: '黄金时代的遗产',
  title_en: 'The Legacy of the Golden Age',
  title_ar: 'إرث العصر الذهبي',
  scene_zh: '🏛️ 明在开罗的伊斯兰博物馆参观，和导游法鲁克博士一起探索阿拉伯文明的黄金时代。',
  scene_emoji: '🏛️📜',
  vocab_focus: ['تراث', 'حضارة', 'الطب العربي', 'رياضيات عربية'],
  lines: [
    { speaker: 'other', speaker_name_zh: '法鲁克博士', speaker_emoji: '👨‍🏫', arabic: 'هنا أمامك مخطوطات ابن سينا — أعظم طبيب في التاريخ الإسلامي.', arabic_with_harakat: 'هُنَا أَمَامَكِ مَخْطُوطَاتُ ابْنِ سِينَا — أَعْظَمُ طَبِيبٍ فِي التَّارِيخِ الإِسْلَامِيّ.', meaning_zh: '这里在你面前的是伊本·西那的手稿——伊斯兰历史上最伟大的医生。', meaning_en: "Before you are Ibn Sina's manuscripts — the greatest physician in Islamic history.", transliteration: 'Hunā amāmaki makhṭūṭāt Ibn Sīnā — aʿẓamu ṭabīb fī al-tārīkh al-islāmī.' },
    { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '👩‍🎓', arabic: 'درسنا عنه في الصين! كان يُسمى "Avicenna" في أوروبا. التراث العلمي العربي أثّر في الحضارة العالمية.', arabic_with_harakat: 'دَرَسْنَا عَنْهُ فِي الصِّين! كَانَ يُسَمَّى "أَفِيسِينَا" فِي أُورُوبَّا. التُّرَاثُ العِلْمِيُّ العَرَبِيُّ أَثَّرَ فِي الحَضَارَةِ العَالَمِيَّة.', meaning_zh: '我们在中国学过他！他在欧洲被称为"阿维森纳"。阿拉伯科学遗产影响了世界文明。', meaning_en: 'We studied him in China! He was called "Avicenna" in Europe. The Arab scientific heritage influenced world civilization.', transliteration: 'Darasnā ʿanhu fī aṣ-Ṣīn! kāna yusammā "Avicenna" fī Ūrūbbā. al-turāth al-ʿilmī al-ʿarabī aththara fī al-ḥaḍāra al-ʿālamiyya.' },
    { speaker: 'other', speaker_name_zh: '法鲁克博士', speaker_emoji: '👨‍🏫', arabic: 'وهذا عمل الخوارزمي — مؤسس علم الجبر. كلمة "الخوارزمية" مأخوذة من اسمه.', arabic_with_harakat: 'وَهَذَا عَمَلُ الخَوَارِزْمِيِّ — مُؤَسِّسُ عِلْمِ الجَبْر. كَلِمَةُ "الخَوَارِزْمِيَّة" مَأْخُوذَةٌ مِنِ اسْمِه.', meaning_zh: '这是花剌子模的著作——代数的创始人。"算法"这个词来自他的名字。', meaning_en: "And this is al-Khwarizmi's work — the founder of algebra. The word 'algorithm' comes from his name.", transliteration: 'Wa-hādhā ʿamal al-Khawārizmī — muʾassis ʿilm al-jabr. kalimat "al-khawārizmiyya" maʾkhūdha min ismih.' },
    { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '👩‍🎓', arabic: 'هذا مذهل! كلما تعمّقت في اللغة العربية اكتشفت كم أثّرت في العلوم الحديثة والتراث الإنساني.', arabic_with_harakat: 'هَذَا مُذْهِل! كُلَّمَا تَعَمَّقْتُ فِي اللُّغَةِ العَرَبِيَّةِ اكْتَشَفْتُ كَمْ أَثَّرَتْ فِي العُلُومِ الحَدِيثَةِ وَالتُّرَاثِ الإِنْسَانِيّ.', meaning_zh: '这太令人惊叹了！每当我深入学习阿拉伯语，我就发现它对现代科学和人类遗产的影响有多深远。', meaning_en: "That's amazing! The more I delve into Arabic, the more I discover how much it influenced modern science and human heritage.", transliteration: 'Hādhā mudhhill! kullamā taʿammaQt fī al-lugha al-ʿarabiyya iktashaftu kam aththarat fī al-ʿulūm al-ḥadītha wa-l-turāth al-insānī.' },
  ],
}

export const C1_LESSON_PLAN = [
  { day_number: 1,  title_zh: '修辞学与文采',   title_en: 'Rhetoric & Eloquence',           title_ar: 'البلاغة والفصاحة',          lesson_type: 'vocabulary', xp_reward: 80,  estimated_minutes: 30 },
  { day_number: 2,  title_zh: '古典阿拉伯语',   title_en: 'Classical Arabic',               title_ar: 'العربية الكلاسيكية',         lesson_type: 'vocabulary', xp_reward: 80,  estimated_minutes: 30 },
  { day_number: 3,  title_zh: '哲学与思想',     title_en: 'Philosophy & Thought',           title_ar: 'الفلسفة والفكر',             lesson_type: 'vocabulary', xp_reward: 80,  estimated_minutes: 28 },
  { day_number: 4,  title_zh: '阿拉伯方言',     title_en: 'Arabic Dialects',               title_ar: 'اللهجات العربية',            lesson_type: 'vocabulary', xp_reward: 80,  estimated_minutes: 28 },
  { day_number: 5,  title_zh: '科技与语言',     title_en: 'Technology & Language',          title_ar: 'التقنية واللغة',             lesson_type: 'vocabulary', xp_reward: 85,  estimated_minutes: 30 },
  { day_number: 6,  title_zh: '伊斯兰文明遗产', title_en: 'Islamic Heritage & Science',     title_ar: 'التراث الإسلامي والعلوم',    lesson_type: 'vocabulary', xp_reward: 85,  estimated_minutes: 32 },
  { day_number: 7,  title_zh: '故事：古典诗歌', title_en: 'Story: Classical Poetry',        title_ar: 'قصة: الشعر الكلاسيكي',     lesson_type: 'dialogue',   xp_reward: 100, estimated_minutes: 35 },
  { day_number: 8,  title_zh: '故事：方言之旅', title_en: 'Story: A Journey Through Dialects', title_ar: 'قصة: رحلة في اللهجات', lesson_type: 'dialogue',   xp_reward: 100, estimated_minutes: 35 },
  { day_number: 9,  title_zh: '故事：科技与阿拉伯语', title_en: 'Story: Technology & Arabic', title_ar: 'قصة: التقنية ومستقبل العربية', lesson_type: 'dialogue', xp_reward: 100, estimated_minutes: 35 },
  { day_number: 10, title_zh: '故事：黄金时代', title_en: "Story: The Golden Age's Legacy", title_ar: 'قصة: إرث العصر الذهبي',      lesson_type: 'dialogue',   xp_reward: 100, estimated_minutes: 35 },
]

// ─────────────────────────────────────────────────────────────
//  C2 Additional vocab banks
// ─────────────────────────────────────────────────────────────
export const C2_COMPARATIVE: VocabItem[] = [
  { arabic: 'أدب مقارن', arabic_with_harakat: 'أَدَب مُقَارَن', transliteration: 'adab muqāran', meaning_en: 'comparative literature', meaning_zh: '比较文学', category: 'literary', example_sentence: 'الأدب المقارن يربط الثقافات بعضها ببعض.', emoji: '🌏' },
  { arabic: 'تناصّ', arabic_with_harakat: 'تَنَاصّ', transliteration: 'tanāṣṣ', meaning_en: 'intertextuality', meaning_zh: '互文性', category: 'literary', example_sentence: 'التناص بين نجيب محفوظ والروايات الغربية واضح.', emoji: '🔗' },
  { arabic: 'نقد أدبي', arabic_with_harakat: 'نَقْد أَدَبِي', transliteration: 'naqd adabī', meaning_en: 'literary criticism', meaning_zh: '文学批评', category: 'literary', example_sentence: 'النقد الأدبي يكشف أبعاداً خفية في النص.', emoji: '🔍' },
  { arabic: 'سيميائية', arabic_with_harakat: 'سِيمِيَائِيَّة', transliteration: 'sīmiyāʾiyya', meaning_en: 'semiotics', meaning_zh: '符号学', category: 'literary', example_sentence: 'تدرس السيميائية الأنظمة الرمزية في الأدب.', emoji: '🔣' },
  { arabic: 'ما بعد الحداثة', arabic_with_harakat: 'مَا بَعْد الحَدَاثَة', transliteration: 'mā baʿd al-ḥadātha', meaning_en: 'postmodernism', meaning_zh: '后现代主义', category: 'literary', example_sentence: 'الأدب العربي المعاصر يتأثر بما بعد الحداثة.', emoji: '🌀' },
  { arabic: 'هوامش', arabic_with_harakat: 'هَوَامِش', transliteration: 'hawāmish', meaning_en: 'margins / footnotes', meaning_zh: '边缘/注脚', category: 'academic', example_sentence: 'كتب درّيدا عن هوامش الفلسفة.', emoji: '📄' },
]

export const C2_RESEARCH: VocabItem[] = [
  { arabic: 'منهجية البحث', arabic_with_harakat: 'مَنْهَجِيَّة البَحْث', transliteration: 'manhajiyyat al-baḥth', meaning_en: 'research methodology', meaning_zh: '研究方法论', category: 'academic', example_sentence: 'منهجية البحث النوعي تختلف عن الكمي.', emoji: '📐' },
  { arabic: 'استقراء', arabic_with_harakat: 'اسْتِقْرَاء', transliteration: 'istiqrāʾ', meaning_en: 'induction / inductive reasoning', meaning_zh: '归纳法', category: 'academic', example_sentence: 'الاستقراء ينطلق من الجزئيات إلى الكليات.', emoji: '🔺' },
  { arabic: 'استنباط', arabic_with_harakat: 'اسْتِنْبَاط', transliteration: 'istinbāṭ', meaning_en: 'deduction / deductive reasoning', meaning_zh: '演绎法', category: 'academic', example_sentence: 'الاستنباط ينطلق من القواعد العامة.', emoji: '🔻' },
  { arabic: 'مراجعة الأدبيات', arabic_with_harakat: 'مُرَاجَعَة الأَدَبِيَّات', transliteration: 'murājaʿat al-adabiyyāt', meaning_en: 'literature review', meaning_zh: '文献综述', category: 'academic', example_sentence: 'مراجعة الأدبيات خطوة أساسية في كل بحث.', emoji: '📚' },
  { arabic: 'أخلاقيات البحث', arabic_with_harakat: 'أَخْلَاقِيَّات البَحْث', transliteration: 'akhlāqiyyāt al-baḥth', meaning_en: 'research ethics', meaning_zh: '研究伦理', category: 'academic', example_sentence: 'أخلاقيات البحث تحمي المشاركين في الدراسة.', emoji: '🛡️' },
  { arabic: 'تحليل خطاب', arabic_with_harakat: 'تَحْلِيل خِطَاب', transliteration: 'taḥlīl khiṭāb', meaning_en: 'discourse analysis', meaning_zh: '话语分析', category: 'academic', example_sentence: 'تحليل الخطاب السياسي يكشف الأيديولوجيا الخفية.', emoji: '💬' },
]

// C2 Story 2: Ming writing her masterpiece book on Arabic-Chinese bridges
export const C2_BOOK_STORY: StoryDialogue = {
  id: 'arabic-chinese-bridge',
  title_zh: '架桥者：明的书',
  title_en: "The Bridge Builder: Ming's Book",
  title_ar: 'بانية الجسور: كتاب منغ',
  scene_zh: '✍️ 明完成了她的著作《中阿文化桥梁》，并在开罗国际书展上首发。',
  scene_emoji: '✍️📗',
  vocab_focus: ['أدب مقارن', 'تناصّ', 'نقد أدبي', 'ترجمة'],
  lines: [
    { speaker: 'other', speaker_name_zh: '书展主持人', speaker_emoji: '🎙️', arabic: 'يسعدنا الإعلان عن صدور كتاب "جسور بين العربية والصينية" للدكتورة منغ في معرض القاهرة الدولي للكتاب.', arabic_with_harakat: 'يَسْعَدُنَا الإِعْلَانُ عَنْ صُدُورِ كِتَابِ "جُسُورٌ بَيْنَ العَرَبِيَّةِ وَالصِّينِيَّة" لِلدُّكْتُورَةِ مِنْغ.', meaning_zh: '我们很高兴宣布明博士的著作《阿拉伯语与中文之间的桥梁》在开罗国际书展上出版。', meaning_en: 'We are pleased to announce the publication of Dr. Ming\'s book "Bridges Between Arabic and Chinese" at the Cairo International Book Fair.', transliteration: 'Yasaʿdunā al-iʿlān ʿan ṣudūr kitāb "Jusūr bayna al-ʿarabiyya wa-l-ṣīniyya" lil-duktūra Ming.' },
    { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '👩‍🎓', arabic: 'هذا الكتاب ثمرة رحلة عمر. أردتُ أن أُثبت أن الأدب المقارن بين الثقافتين يكشف جوهراً إنسانياً مشتركاً.', arabic_with_harakat: 'هَذَا الكِتَابُ ثَمَرَةُ رِحْلَةِ عُمُر. أَرَدْتُ أَنْ أُثْبِتَ أَنَّ الأَدَبَ المُقَارَنَ بَيْنَ الثَّقَافَتَيْنِ يَكْشِفُ جَوْهَرًا إِنْسَانِيًّا مُشْتَرَكًا.', meaning_zh: '这本书是一生旅程的结晶。我想证明两种文化之间的比较文学揭示了共同的人类本质。', meaning_en: 'This book is the fruit of a lifetime journey. I wanted to prove that comparative literature between the two cultures reveals a shared human essence.', transliteration: 'Hādhā al-kitāb thamarat riḥlat ʿumur. Aradtu an uthbita anna al-adab al-muqāran bayna al-thaqāfatayn yakshifu jawaharan insāniyyan mushtarakan.' },
    { speaker: 'other', speaker_name_zh: '记者', speaker_emoji: '📰', arabic: 'ما أصعب تحدٍّ واجهتِه في الكتابة الأكاديمية باللغة العربية؟', arabic_with_harakat: 'مَا أَصْعَبُ تَحَدٍّ وَاجَهْتِهِ فِي الكِتَابَةِ الأَكَادِيمِيَّةِ بِاللُّغَةِ العَرَبِيَّة؟', meaning_zh: '用阿拉伯语进行学术写作时，你遇到的最大挑战是什么？', meaning_en: 'What was the hardest challenge you faced in academic writing in Arabic?', transliteration: 'Mā aṣʿab taḥaddin wājahtihi fī al-kitāba al-akādīmiyya bil-lugha al-ʿarabiyya?' },
    { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '👩‍🎓', arabic: 'التناص الثقافي — حين أُشير إلى شاعر صيني كلاسيكي باللغة العربية، يجب أن أجد معادلاً ثقافياً لا مجرد ترجمة حرفية.', arabic_with_harakat: 'التَّنَاصُّ الثَّقَافِيُّ — حِينَ أُشِيرُ إِلَى شَاعِرٍ صِينِيٍّ كَلَاسِيكِيٍّ بِاللُّغَةِ العَرَبِيَّة، يَجِبُ أَنْ أَجِدَ مُعَادِلًا ثَقَافِيًّا لَا مُجَرَّدَ تَرْجَمَةٍ حَرْفِيَّة.', meaning_zh: '文化互文性——当我用阿拉伯语指代一位中国古典诗人时，我必须找到文化对等物，而不仅仅是字面翻译。', meaning_en: 'Cultural intertextuality — when I reference a classical Chinese poet in Arabic, I must find a cultural equivalent, not just a literal translation.', transliteration: 'Al-tanāṣṣ al-thaqāfī — ḥīna ushīru ilā shāʿir ṣīnī klāsīkī bil-lugha al-ʿarabiyya, yajibu an ajida muʿādilan thaqāfiyyan lā mujarrad tarjama ḥarfiyya.' },
    { speaker: 'other', speaker_name_zh: '读者', speaker_emoji: '📖', arabic: 'كلامك يلهمنا كطلاب عرب! إن شخصاً صينياً يُتقن العربية الأكاديمية الفصحى يُثبت أن اللغة لا حدود لها.', arabic_with_harakat: 'كَلَامُكِ يُلْهِمُنَا كَطُلَّابٍ عَرَب! إِنَّ شَخْصًا صِينِيًّا يُتْقِنُ العَرَبِيَّةَ الأَكَادِيمِيَّةَ الفُصْحَى يُثْبِتُ أَنَّ اللُّغَةَ لَا حُدُودَ لَهَا.', meaning_zh: '您的话语激励了我们这些阿拉伯学生！一个中国人精通正式学术阿拉伯语证明了语言是没有边界的。', meaning_en: 'Your words inspire us as Arab students! A Chinese person mastering formal academic Arabic proves that language has no borders.', transliteration: 'Kalāmuki yulhimunā ka-ṭullāb ʿarab! inna shakḥṣan ṣīniyyan yutqin al-ʿarabiyya al-akādīmiyya al-fuṣḥā yuthbitu anna al-lugha lā ḥudūd lahā.' },
    { speaker: 'ming', speaker_name_zh: '明', speaker_emoji: '👩‍🎓', arabic: 'والكم أيضاً! تذكّروا: اللغة الثانية هي نافذة جديدة على العالم. واللغة العربية نافذة لا تُقدَّر بثمن.', arabic_with_harakat: 'وَأَنْتُمْ أَيْضًا! تَذَكَّرُوا: اللُّغَةُ الثَّانِيَةُ هِيَ نَافِذَةٌ جَدِيدَةٌ عَلَى العَالَم. وَاللُّغَةُ العَرَبِيَّةُ نَافِذَةٌ لَا تُقَدَّرُ بِثَمَن.', meaning_zh: '你们也是！记住：第二语言是看向世界的新窗口。而阿拉伯语是一扇无价之窗。', meaning_en: 'And so are you! Remember: a second language is a new window on the world. And Arabic is a priceless window.', transliteration: 'Wa-antum ayḍan! Tadhakkarū: al-lugha al-thāniya hiya nāfidhā jadīda ʿalā al-ʿālam. wa-l-lugha al-ʿarabiyya nāfidhā lā tuqaddar bi-thaman.' },
  ],
}

export const C2_LESSON_PLAN = [
  { day_number: 1, title_zh: '文学分析',         title_en: 'Literary Analysis',              title_ar: 'التحليل الأدبي',             lesson_type: 'vocabulary', xp_reward: 100, estimated_minutes: 35 },
  { day_number: 2, title_zh: '高级学术语言',     title_en: 'Advanced Academic Language',     title_ar: 'اللغة الأكاديمية المتقدمة', lesson_type: 'vocabulary', xp_reward: 100, estimated_minutes: 35 },
  { day_number: 3, title_zh: '翻译与诠释',       title_en: 'Translation & Interpretation',   title_ar: 'الترجمة والتأويل',           lesson_type: 'vocabulary', xp_reward: 100, estimated_minutes: 35 },
  { day_number: 4, title_zh: '比较文学',         title_en: 'Comparative Literature',         title_ar: 'الأدب المقارن',              lesson_type: 'vocabulary', xp_reward: 100, estimated_minutes: 35 },
  { day_number: 5, title_zh: '高级研究方法',     title_en: 'Advanced Research Methods',      title_ar: 'مناهج البحث المتقدمة',       lesson_type: 'vocabulary', xp_reward: 110, estimated_minutes: 38 },
  { day_number: 6, title_zh: '故事：国际研讨会', title_en: 'Story: International Symposium', title_ar: 'قصة: المؤتمر الدولي',        lesson_type: 'dialogue',   xp_reward: 120, estimated_minutes: 40 },
  { day_number: 7, title_zh: '故事：架桥者',     title_en: "Story: The Bridge Builder",      title_ar: 'قصة: بانية الجسور',          lesson_type: 'dialogue',   xp_reward: 120, estimated_minutes: 40 },
]
