-- ═══════════════════════════════════════════════════════════════
--  ANALIA Curriculum Seed — Run in Supabase SQL Editor
--  منهج أناليا — تنفيذ في محرر SQL لـ Supabase
-- ═══════════════════════════════════════════════════════════════

-- ─────────────────────────────────────────────────────────────
--  1. LEVELS (المستويات)
-- ─────────────────────────────────────────────────────────────
INSERT INTO levels (code, name_ar, name_en, name_zh, description_ar, description_en, description_zh, order_index, color_primary, icon_emoji, xp_required)
VALUES
  ('pre-a1', 'ما قبل A1', 'Pre-A1', '入门级', 'الأبجدية والحركات والأرقام والتحيات', 'Alphabet, harakat, numbers, and greetings', '字母、符号、数字和问候语', 0, '#10B981', '🌱', 0),
  ('a1',     'A1',        'A1',     'A1初级',  'الجمل الأساسية والتواصل اليومي البسيط', 'Basic sentences and simple daily communication', '基础句型和简单日常交流', 1, '#3B82F6', '🌊', 500),
  ('a2',     'A2',        'A2',     'A2基础',  'المحادثات القصيرة وصف الروتين اليومي', 'Short conversations and describing daily routines', '短对话和描述日常生活', 2, '#8B5CF6', '🌸', 1500),
  ('b1',     'B1',        'B1',     'B1中级',  'مناقشة المواضيع المألوفة بطلاقة نسبية', 'Discussing familiar topics with moderate fluency', '较流利地讨论熟悉话题', 3, '#F59E0B', '🔥', 4000),
  ('b2',     'B2',        'B2',     'B2中高级', 'فهم الأفكار المعقدة والتعبير عنها', 'Understanding and expressing complex ideas', '理解并表达复杂思想', 4, '#EF4444', '⚡', 9000),
  ('c1',     'C1',        'C1',     'C1高级',  'استخدام اللغة بشكل مرن وفعّال', 'Flexible and effective language use', '灵活有效地使用语言', 5, '#6366F1', '💎', 18000),
  ('c2',     'C2',        'C2',     'C2精通',  'إتقان تام وكامل للغة', 'Complete mastery of the language', '完全精通语言', 6, '#EC4899', '👑', 35000)
ON CONFLICT (code) DO UPDATE
  SET name_ar = EXCLUDED.name_ar, name_en = EXCLUDED.name_en, name_zh = EXCLUDED.name_zh,
      color_primary = EXCLUDED.color_primary, icon_emoji = EXCLUDED.icon_emoji;

-- ─────────────────────────────────────────────────────────────
--  2. PRE-A1 LESSONS (دروس ما قبل A1)
-- ─────────────────────────────────────────────────────────────
DO $$
DECLARE pre_a1_id INT;
BEGIN
  SELECT id INTO pre_a1_id FROM levels WHERE code = 'pre-a1';

  INSERT INTO lessons (level_id, day_number, lesson_type, title_ar, title_en, title_zh, description_ar, description_en, description_zh, xp_reward, estimated_minutes, order_index)
  VALUES
    -- Alphabet lessons
    (pre_a1_id, 1,  'letters',    'الحروف: ا ب ت ث',          'Letters: ا ب ت ث',          '字母 ا ب ت ث',           'تعلّم أول أربعة حروف في الأبجدية العربية', 'Learn the first 4 letters with articulation diagrams', '学习前4个字母及发音图解', 20, 15, 1),
    (pre_a1_id, 1,  'harakat',    'الحركات القصيرة',           'Harakat (Short Vowels)',     '短元音符号 الحركات',      'الفتحة والضمة والكسرة والسكون والشدة والتنوين والمدة', 'All 9 diacritics: fatha, damma, kasra, sukun, shadda, tanwin, madda', '9个元音符号：开口、圆唇、下折、静音、加倍、双符、长音', 30, 20, 2),
    (pre_a1_id, 2,  'letters',    'الحروف: ج ح خ',             'Letters: ج ح خ',             '字母 ج ح خ',              'حروف الحلق والحنك', 'Palatal and pharyngeal letters', '腭音和咽喉音字母', 20, 15, 3),
    (pre_a1_id, 3,  'letters',    'الحروف: د ذ ر ز',           'Letters: د ذ ر ز',           '字母 د ذ ر ز',            'حروف اللثة والأسنان', 'Alveolar and interdental letters', '齿龈音和齿间音字母', 20, 15, 4),
    (pre_a1_id, 4,  'letters',    'الحروف: س ش',               'Letters: س ش',               '字母 س ش',                'حروف الصفير والحنك', 'Sibilant and palatal letters', '嘶音和腭音字母', 15, 12, 5),
    (pre_a1_id, 5,  'letters',    'الأحرف المفخّمة: ص ض',      'Emphatic Letters: ص ض',      '强调粗音 ص ض',            'الحروف المفخّمة الصعبة على الناطقين بالصينية', 'Emphatic letters — hardest for Chinese speakers', '强调音，中文使用者最难的音', 25, 18, 6),
    (pre_a1_id, 6,  'letters',    'الأحرف المفخّمة: ط ظ',      'Emphatic Letters: ط ظ',      '强调粗音 ط ظ',            'استكمال الحروف المفخّمة', 'Completing the emphatic letters', '完成强调音字母', 25, 18, 7),
    (pre_a1_id, 7,  'letters',    'الحروف الحلقية: ع غ',       'Pharyngeal Letters: ع غ',    '咽喉音 ع غ',              'أصعب حرفين في العربية للناطقين بالصينية', 'The two hardest letters for Chinese speakers', '中文使用者最难的两个字母', 30, 20, 8),
    (pre_a1_id, 8,  'letters',    'الحروف: ف ق ك',             'Letters: ف ق ك',             '字母 ف ق ك',              'حروف الشفة والأقصى والحنك اللين', 'Labial, uvular, and velar letters', '唇音、小舌音和软腭音', 20, 15, 9),
    (pre_a1_id, 9,  'letters',    'الحروف: ل م ن',             'Letters: ل م ن',             '字母 ل م ن',              'الحروف الشائعة', 'Common consonants', '常见辅音', 20, 15, 10),
    (pre_a1_id, 10, 'letters',    'الحروف الأخيرة: ه و ي ء',  'Final Letters: ه و ي ء',    '最后字母 ه و ي ء',        'إتمام الأبجدية العربية بالكامل', 'Completing the full Arabic alphabet', '完成完整的阿拉伯字母表', 20, 15, 11),
    (pre_a1_id, 1,  'greetings',  'التحيات والتعارف',          'Greetings & Introductions',  '打招呼与自我介绍',         'تعلّم التحيات الأساسية وكيفية تقديم نفسك', 'Learn basic greetings and how to introduce yourself', '学习基本问候语和自我介绍', 25, 15, 12),
    (pre_a1_id, 1,  'numbers',    'الأرقام العربية ٠–١٠٠',     'Arabic Numbers 0–100',       '阿拉伯数字 0–100',         'الأرقام العربية والهندية-العربية', 'Arabic and Hindu-Arabic numerals', '阿拉伯数字和印度-阿拉伯数字', 25, 15, 13),
    (pre_a1_id, 1,  'vocabulary', 'المفردات الأساسية',          'Core Vocabulary',            '基础词汇：代词、颜色、家庭','الضمائر والألوان وأفراد الأسرة والكلمات الأساسية', 'Pronouns, colors, family members, basic adjectives', '代词、颜色、家庭成员和基础形容词', 30, 20, 14)
  ON CONFLICT DO NOTHING;
END $$;

-- ─────────────────────────────────────────────────────────────
--  3. A1 LESSONS (دروس A1)
-- ─────────────────────────────────────────────────────────────
DO $$
DECLARE a1_id INT;
BEGIN
  SELECT id INTO a1_id FROM levels WHERE code = 'a1';

  INSERT INTO lessons (level_id, day_number, lesson_type, title_ar, title_en, title_zh, description_ar, description_en, description_zh, xp_reward, estimated_minutes, order_index)
  VALUES
    (a1_id, 1,  'vocabulary', 'الضمائر المنفصلة',             'Personal Pronouns',          '人称代词',                'أنا، أنت، هو، هي وأسماء الإشارة', 'I, you, he, she + demonstratives', '我、你、他、她和指示代词', 25, 15, 1),
    (a1_id, 2,  'dialogue',   'قصة: مينغ يصل إلى القاهرة',    'Story: Ming Arrives in Cairo','故事：明到达开罗',         'الحوار الأول: في المطار', 'First story dialogue: at Cairo airport', '第一个故事对话：在开罗机场', 30, 20, 2),
    (a1_id, 3,  'vocabulary', 'المهن والهويات',                'Professions & Identity',     '职业与身份',              'طالب، معلم، طبيب، مهندس...', 'Student, teacher, doctor, engineer...', '学生、老师、医生、工程师...', 25, 15, 3),
    (a1_id, 4,  'vocabulary', 'أسماء الإشارة',                 'Demonstratives',             '指示代词 هذا/هذه/ذلك',    'هذا وهذه وذلك وتلك', 'This (m/f) and That (m/f)', '这个（男/女）和那个（男/女）', 20, 12, 4),
    (a1_id, 5,  'dialogue',   'قصة: في الجامعة',               'Story: At the University',   '故事：在大学里',           'الحوار الثاني: أول يوم في الجامعة', 'Second story: first day at university', '第二个故事：在大学的第一天', 30, 20, 5),
    (a1_id, 6,  'vocabulary', 'الأماكن والجنسيات',             'Places & Nationalities',     '地点与国籍',              'المدرسة، الجامعة، المستشفى، السوق...', 'School, university, hospital, market...', '学校、大学、医院、市场...', 25, 15, 6),
    (a1_id, 7,  'vocabulary', 'تعبيرات الزمن',                 'Time Expressions',           '时间表达',                'اليوم، غداً، أمس، الآن، صباح، مساء...', 'Today, tomorrow, yesterday, now, morning, evening...', '今天、明天、昨天、现在、早上、晚上...', 20, 12, 7),
    (a1_id, 8,  'vocabulary', 'الفعل الماضي',                  'Past Tense Verbs',           '过去时动词',              'كتب، قرأ، ذهب، جاء، أكل، شرب...', 'Wrote, read, went, came, ate, drank...', '写了、读了、去了、来了、吃了、喝了...', 35, 25, 8),
    (a1_id, 9,  'dialogue',   'قصة: في السوق',                 'Story: At the Market',       '故事：在市场里',           'الحوار الثالث: خان الخليلي', 'Third story: Khan al-Khalili market', '第三个故事：汗·哈利利市场', 30, 20, 9),
    (a1_id, 10, 'vocabulary', 'الفعل المضارع',                  'Present Tense Verbs',        '现在时动词',              'يكتب، يقرأ، يذهب، يتكلم، يريد...', 'Writes, reads, goes, speaks, wants...', '写、读、去、说、想要...', 35, 25, 10)
  ON CONFLICT DO NOTHING;
END $$;

-- ─────────────────────────────────────────────────────────────
--  4. VOCABULARY CARDS for Pre-A1 (بطاقات المفردات)
-- ─────────────────────────────────────────────────────────────
INSERT INTO vocabulary_cards (word_ar, word_transliteration, meaning_en, meaning_zh, meaning_ar, example_sentence_ar, category, level_code)
VALUES
  -- Greetings
  ('مرحبا',          'marḥaban',           'Hello',           '你好',         'مرحبا',         'مرحباً، كيف حالك؟',                 'greetings', 'pre-a1'),
  ('السلام عليكم',   'as-salāmu ʿalaykum', 'Peace be upon you','愿平安降临你', 'السلام عليكم',  'السلام عليكم! وعليكم السلام!',       'greetings', 'pre-a1'),
  ('صباح الخير',    'ṣabāḥ al-khayr',     'Good morning',    '早上好',       'صباح الخير',   'صباح الخير! — صباح النور!',          'greetings', 'pre-a1'),
  ('مساء الخير',    'masāʾ al-khayr',     'Good evening',    '晚上好',       'مساء الخير',   'مساء الخير! — مساء النور!',          'greetings', 'pre-a1'),
  ('شكرا',          'shukran',            'Thank you',       '谢谢',         'شكراً',         'شكراً جزيلاً!',                      'greetings', 'pre-a1'),
  ('عفوا',          'ʿafwan',             'You''re welcome', '不客气',       'عفواً',          'عفواً، لا شكر على واجب.',           'greetings', 'pre-a1'),
  ('مع السلامة',    'maʿa as-salāma',     'Goodbye',         '再见',         'مع السلامة',    'مع السلامة! إلى اللقاء!',            'greetings', 'pre-a1'),
  -- Numbers
  ('واحد',          'wāḥid',              'One',             '一',           'واحد',          'عندي كتاب واحد.',                    'numbers',   'pre-a1'),
  ('اثنان',         'ithnān',             'Two',             '二',           'اثنان',         'عندي كتابان اثنان.',                 'numbers',   'pre-a1'),
  ('ثلاثة',         'thalātha',           'Three',           '三',           'ثلاثة',         'عندي ثلاثة أقلام.',                  'numbers',   'pre-a1'),
  ('عشرة',          'ʿashara',            'Ten',             '十',           'عشرة',          'درست عشرة دروس.',                    'numbers',   'pre-a1'),
  -- Core vocab
  ('كتاب',          'kitāb',              'Book',            '书',           'كتاب',          'هذا كتاب جميل.',                     'objects',   'pre-a1'),
  ('بيت',           'bayt',               'House',           '房子',         'بيت',           'بيتي كبير.',                         'objects',   'pre-a1'),
  ('ماء',           'māʾ',                'Water',           '水',           'ماء',           'أشرب الماء كل يوم.',                 'food',      'pre-a1'),
  ('كبير',          'kabīr',              'Big',             '大',           'كبير',          'البيت كبير جداً.',                   'adjectives','pre-a1'),
  ('صغير',          'ṣaghīr',             'Small',           '小',           'صغير',          'القلم صغير.',                        'adjectives','pre-a1'),
  -- A1 vocab
  ('طالب',          'ṭālib',              'Student (m)',      '学生（男）',   'طالب',          'أنا طالب في الجامعة.',               'professions','a1'),
  ('معلم',          'muʿallim',           'Teacher (m)',      '老师（男）',   'مُعلِّم',        'المعلم يشرح الدرس.',                 'professions','a1'),
  ('مدرسة',         'madrasa',            'School',          '学校',         'مدرسة',         'أذهب إلى المدرسة كل يوم.',           'places',    'a1'),
  ('جامعة',         'jāmiʿa',             'University',      '大学',         'جامعة',         'أدرس في الجامعة.',                   'places',    'a1'),
  ('كتب',           'kataba',             'He wrote',        '他写了',       'كَتَبَ',          'كتب مينغ رسالة.',                    'verbs',     'a1'),
  ('ذهب',           'dhahaba',            'He went',         '他去了',       'ذَهَبَ',          'ذهب إلى الجامعة.',                   'verbs',     'a1'),
  ('يكتب',          'yaktubu',            'He writes',       '他写',         'يَكْتُبُ',        'يكتب كل يوم.',                       'verbs',     'a1'),
  ('يريد',          'yurīdu',             'He wants',        '他想要',       'يُرِيدُ',         'يريد أن يتعلم العربية.',             'verbs',     'a1')
ON CONFLICT DO NOTHING;

-- ─────────────────────────────────────────────────────────────
--  5. ACHIEVEMENTS (الإنجازات)
-- ─────────────────────────────────────────────────────────────
INSERT INTO achievements (code, name_ar, name_en, name_zh, description_ar, description_en, description_zh, icon_emoji, xp_reward, condition_type, condition_value)
VALUES
  ('first_lesson',   'أول درس',         'First Lesson',        '第一课',      'أتممت درسك الأول',         'Completed your first lesson',     '完成了第一节课',   '🎯', 50,  'lessons_completed', 1),
  ('alphabet_done',  'أتقنت الأبجدية', 'Alphabet Master',     '字母达人',    'تعلّمت جميع حروف الأبجدية', 'Learned all Arabic letters',      '学会了全部字母',   '🔤', 100, 'lessons_completed', 11),
  ('harakat_done',   'سيد الحركات',    'Harakat Master',      '符号大师',    'أتقنت جميع الحركات',        'Mastered all diacritics',         '掌握了所有元音符号','✨', 75,  'lesson_type_done',  'harakat'),
  ('streak_3',       '3 أيام متتالية', '3-Day Streak',        '连续3天',     '3 أيام متتالية من التعلم',   '3 days in a row',                 '连续学习3天',      '🔥', 30,  'streak_days',       3),
  ('streak_7',       'أسبوع كامل',     'Week Warrior',        '一周战士',    '7 أيام متتالية',             '7 days in a row',                 '连续学习7周',      '⚡', 100, 'streak_days',       7),
  ('streak_30',      'شهر متتالي',     'Monthly Legend',      '月度传奇',    '30 يوماً متتالية',           '30 days in a row',                '连续学习30天',     '💎', 500, 'streak_days',       30),
  ('xp_500',         '500 نقطة',       '500 XP Club',         '500积分俱乐部','جمعت 500 نقطة',             'Earned 500 XP',                   '获得500积分',      '⭐', 50,  'total_xp',          500),
  ('xp_1000',        '1000 نقطة',      'XP Champion',         '积分冠军',    'جمعت 1000 نقطة',            'Earned 1000 XP',                  '获得1000积分',     '🏆', 100, 'total_xp',          1000),
  ('vocab_50',       '50 كلمة',        'Vocab Builder',       '词汇建造者',  'تعلّمت 50 كلمة',             'Learned 50 words',                '学会了50个词',     '📚', 75,  'vocab_learned',     50),
  ('ming_cairo',     'مع مينغ في القاهرة','Ming in Cairo',    '与明在开罗',  'أتممت قصة مينغ الأولى',     'Completed Ming''s first story',   '完成了明的第一个故事','🏙️', 60,  'dialogue_done',     'cairo-arrival'),
  ('level_a1',       'مستوى A1',        'A1 Achieved',        '达到A1',     'أكملت مستوى ما قبل A1',     'Completed Pre-A1 level',          '完成了Pre-A1级别', '🌊', 200, 'level_completed',   'pre-a1'),
  ('night_owl',      'بومة الليل',     'Night Owl',           '夜猫子',      'تعلّمت بعد منتصف الليل',     'Studied after midnight',          '在午夜后学习',     '🦉', 25,  'time_of_day',       'midnight'),
  ('perfect_score',  'درجة مثالية',    'Perfect Score',       '满分',        'حصلت على 100% في تمرين',     'Got 100% on an exercise',        '练习获得满分',     '💯', 30,  'exercise_score',    100)
ON CONFLICT (code) DO UPDATE
  SET name_zh = EXCLUDED.name_zh, description_zh = EXCLUDED.description_zh;
