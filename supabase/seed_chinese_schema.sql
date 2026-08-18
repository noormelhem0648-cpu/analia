-- ============================================================
-- ANALIA: Chinese (Mandarin) Learning Direction Schema
-- Run this in the Supabase SQL Editor
-- ============================================================

-- 1. Add learning_direction to profiles
ALTER TABLE profiles
  ADD COLUMN IF NOT EXISTS learning_direction TEXT DEFAULT 'zh_learns_ar'
    CHECK (learning_direction IN ('zh_learns_ar', 'ar_learns_zh'));

-- 2. Add lang_pair to levels
ALTER TABLE levels
  ADD COLUMN IF NOT EXISTS lang_pair TEXT DEFAULT 'ar';

-- 3. Update existing Arabic levels to have lang_pair = 'ar'
UPDATE levels SET lang_pair = 'ar' WHERE lang_pair IS NULL OR lang_pair = 'ar';

-- 4. Seed Chinese (HSK) levels
INSERT INTO levels (code, name_ar, name_en, name_zh, order_index, color_primary, icon_emoji, xp_required, lang_pair)
VALUES
  ('pre-hsk', 'البينيين والنغمات',   'Pinyin & Tones',          '拼音和声调', 0, '#DC2626', '🔤',  0,     'zh'),
  ('hsk1',    'HSK 1 - المبتدئ',      'HSK 1 - Beginner',        'HSK一级',   1, '#EA580C', '🏮',  0,     'zh'),
  ('hsk2',    'HSK 2 - أساسي',        'HSK 2 - Elementary',      'HSK二级',   2, '#D97706', '🎋',  500,   'zh'),
  ('hsk3',    'HSK 3 - متوسط',        'HSK 3 - Intermediate',    'HSK三级',   3, '#16A34A', '🐉',  1500,  'zh'),
  ('hsk4',    'HSK 4 - متقدم مبتدئ',  'HSK 4 - Upper Intermediate','HSK四级', 4, '#0284C7', '🏯',  4000,  'zh'),
  ('hsk5',    'HSK 5 - متقدم',        'HSK 5 - Advanced',        'HSK五级',   5, '#7C3AED', '⛩️', 9000,  'zh'),
  ('hsk6',    'HSK 6 - احتراف',       'HSK 6 - Mastery',         'HSK六级',   6, '#BE185D', '🌸',  18000, 'zh')
ON CONFLICT (code) DO UPDATE SET
  name_ar = EXCLUDED.name_ar,
  name_en = EXCLUDED.name_en,
  name_zh = EXCLUDED.name_zh,
  order_index = EXCLUDED.order_index,
  color_primary = EXCLUDED.color_primary,
  icon_emoji = EXCLUDED.icon_emoji,
  xp_required = EXCLUDED.xp_required,
  lang_pair = EXCLUDED.lang_pair;

-- ============================================================
-- 5. Seed lessons for pre-hsk
-- ============================================================
INSERT INTO lessons (level_id, title_ar, title_en, title_zh, description_ar, description_en, description_zh, lesson_type, day_number, xp_reward, estimated_minutes, order_index)
SELECT
  l.id,
  lesson.title_ar, lesson.title_en, lesson.title_zh,
  lesson.description_ar, lesson.description_en, lesson.description_zh,
  'vocabulary', lesson.day_number, 30, 10, lesson.day_number
FROM levels l,
(VALUES
  (1, 'الحروف الساكنة الأولية',    'Pinyin Initials Part 1',    '声母（一）', 'تعلم أول 7 حروف ساكنة في البينيين', 'Learn the first 7 pinyin initials', '学习前7个声母', 1),
  (2, 'الحروف الساكنة الأولية 2',  'Pinyin Initials Part 2',    '声母（二）', 'تعلم المزيد من الحروف الساكنة', 'Learn more pinyin initials', '继续学习声母', 2),
  (3, 'الحروف المتحركة الأساسية',  'Basic Finals',              '基本韵母',   'تعلم الحروف المتحركة الأساسية', 'Learn the basic finals a, o, e, i, u, ü', '学习基本韵母', 3),
  (4, 'النغمة الأولى والثانية',    'Tones 1 & 2',               '第一声和第二声', 'النغمة المستوية والنغمة الصاعدة', 'The flat tone and the rising tone', '学习第一声和第二声', 4),
  (5, 'النغمة الثالثة والرابعة',   'Tones 3 & 4',               '第三声和第四声', 'النغمة المنخفضة والنغمة الهابطة', 'The dipping tone and the falling tone', '学习第三声和第四声', 5),
  (6, 'الحروف المركبة',            'Compound Finals',            '复韵母',     'تعلم الحروف المتحركة المركبة', 'Learn compound finals ai, ei, ao, ou', '学习复韵母', 6),
  (7, 'النغمة المحايدة والتكرار',  'Neutral Tone & Review',      '轻声与复习', 'النغمة الساكنة ومراجعة كل النغمات', 'The neutral tone and review of all tones', '学习轻声，复习所有声调', 7),
  (8, 'ممارسة البينيين الكاملة',   'Full Pinyin Practice',       '拼音综合练习', 'تدريب شامل على البينيين', 'Comprehensive pinyin practice', '综合练习拼音', 8)
) AS lesson(day_number, title_ar, title_en, title_zh, description_ar, description_en, description_zh, ord)
WHERE l.code = 'pre-hsk'
ON CONFLICT DO NOTHING;

-- ============================================================
-- 6. Seed lessons for hsk1
-- ============================================================
INSERT INTO lessons (level_id, title_ar, title_en, title_zh, description_ar, description_en, description_zh, lesson_type, day_number, xp_reward, estimated_minutes, order_index)
SELECT
  l.id,
  lesson.title_ar, lesson.title_en, lesson.title_zh,
  lesson.description_ar, lesson.description_en, lesson.description_zh,
  'vocabulary', lesson.day_number, 40, 12, lesson.day_number
FROM levels l,
(VALUES
  (1,  'التحيات',              'Greetings',          '问候语',     'مرحبا، شكرا، مع السلامة وتعبيرات التحية', 'Hello, thank you, goodbye and greeting expressions', '你好、谢谢、再见等问候表达', 1),
  (2,  'الضمائر الشخصية',      'Pronouns',           '人称代词',   'أنا، أنت، هو، هي، نحن، أنتم، هم', 'I, you, he, she, we, you (pl), they', '我、你、他、她、我们、你们、他们', 2),
  (3,  'الأرقام',              'Numbers',            '数字',       'الأرقام من صفر إلى عشرة وما فوق', 'Numbers from zero to ten and beyond', '从零到十的数字及更多', 3),
  (4,  'العائلة',              'Family',             '家人',       'الأب، الأم، الأخ، الأخت والأقارب', 'Father, mother, brother, sister and relatives', '爸爸、妈妈、兄弟、姐妹及亲戚', 4),
  (5,  'الطعام والشراب',       'Food & Drinks',      '食物和饮料', 'الأرز، الماء، الشاي، والأطعمة الشائعة', 'Rice, water, tea, and common foods', '米饭、水、茶和常见食物', 5),
  (6,  'الأماكن',              'Places',             '地点',       'البيت، المدرسة، المستشفى، المطعم', 'Home, school, hospital, restaurant', '家、学校、医院、餐厅', 6),
  (7,  'الأفعال الأساسية',     'Basic Verbs',        '基本动词',   'يذهب، يأكل، يشرب، يريد، يحب', 'Go, eat, drink, want, like', '去、吃、喝、要、喜欢', 7),
  (8,  'الوقت والتاريخ',       'Time & Dates',       '时间和日期', 'الآن، اليوم، غداً، الأسبوع، الشهر', 'Now, today, tomorrow, week, month', '现在、今天、明天、星期、月份', 8),
  (9,  'الصفات الأساسية',      'Basic Adjectives',   '基本形容词', 'كبير، صغير، جيد، سيء، جميل، سريع', 'Big, small, good, bad, beautiful, fast', '大、小、好、不好、漂亮、快', 9),
  (10, 'كلمات الاستفهام',      'Question Words',     '疑问词',     'من؟ ما؟ أين؟ متى؟ كيف؟ كم؟', 'Who? What? Where? When? How? How many?', '谁、什么、在哪儿、什么时候、怎么、多少', 10)
) AS lesson(day_number, title_ar, title_en, title_zh, description_ar, description_en, description_zh, ord)
WHERE l.code = 'hsk1'
ON CONFLICT DO NOTHING;

-- ============================================================
-- 7. Seed lessons for hsk2
-- ============================================================
INSERT INTO lessons (level_id, title_ar, title_en, title_zh, description_ar, description_en, description_zh, lesson_type, day_number, xp_reward, estimated_minutes, order_index)
SELECT
  l.id,
  lesson.title_ar, lesson.title_en, lesson.title_zh,
  lesson.description_ar, lesson.description_en, lesson.description_zh,
  'vocabulary', lesson.day_number, 50, 15, lesson.day_number
FROM levels l,
(VALUES
  (1, 'الحياة اليومية والتسوق', 'Daily Life & Shopping',  '日常生活和购物', 'الأسواق والأسعار والتسوق اليومي', 'Markets, prices and daily shopping', '超市、价格和日常购物', 1),
  (2, 'الطقس والمناخ',          'Weather & Climate',      '天气和气候',     'الحار، البارد، المطر، الثلج، الرياح', 'Hot, cold, rain, snow, wind', '热、冷、下雨、下雪、刮风', 2),
  (3, 'وسائل النقل',            'Transportation',         '交通工具',       'الحافلة، القطار، السيارة، الطائرة', 'Bus, train, car, airplane', '公共汽车、火车、汽车、飞机', 3),
  (4, 'العمل والدراسة',         'Work & Study',           '工作和学习',     'المكتب، الجامعة، العمل، الواجب', 'Office, university, work, homework', '办公室、大学、工作、作业', 4),
  (5, 'الجسم والصحة',           'Body & Health',          '身体和健康',     'الرأس، اليد، المريض، الدواء، الطبيب', 'Head, hand, sick, medicine, doctor', '头、手、生病、药、医生', 5),
  (6, 'المشاعر والعواطف',       'Emotions & Feelings',    '情感和感受',     'سعيد، حزين، قلق، غاضب، متفاجئ', 'Happy, sad, worried, angry, surprised', '高兴、难过、担心、生气、惊讶', 6),
  (7, 'الألوان والأوصاف',       'Colors & Descriptions',  '颜色和描述',     'الألوان الأساسية والأوصاف الإضافية', 'Basic colors and additional descriptions', '基本颜色和附加描述', 7),
  (8, 'المراجعة الشاملة',       'Comprehensive Review',   '综合复习',       'مراجعة كل مفردات HSK 2', 'Review all HSK 2 vocabulary', '复习全部HSK2词汇', 8)
) AS lesson(day_number, title_ar, title_en, title_zh, description_ar, description_en, description_zh, ord)
WHERE l.code = 'hsk2'
ON CONFLICT DO NOTHING;

-- ============================================================
-- 8. Seed lessons for hsk3
-- ============================================================
INSERT INTO lessons (level_id, title_ar, title_en, title_zh, description_ar, description_en, description_zh, lesson_type, day_number, xp_reward, estimated_minutes, order_index)
SELECT
  l.id,
  lesson.title_ar, lesson.title_en, lesson.title_zh,
  lesson.description_ar, lesson.description_en, lesson.description_zh,
  'vocabulary', lesson.day_number, 60, 18, lesson.day_number
FROM levels l,
(VALUES
  (1, 'المجتمع والعلاقات',    'Society & Relationships', '社会和关系',   'الأصدقاء، الزملاء، المجتمع', 'Friends, colleagues, society', '朋友、同事、社会', 1),
  (2, 'الثقافة الصينية',      'Chinese Culture',          '中国文化',    'العادات والتقاليد والأعياد الصينية', 'Chinese customs, traditions and festivals', '中国习俗、传统和节日', 2),
  (3, 'السفر والسياحة',       'Travel & Tourism',         '旅游',        'التخطيط للرحلات والحجوزات والسياحة', 'Trip planning, bookings and tourism', '计划旅行、预订和旅游', 3),
  (4, 'التعليم والمعرفة',     'Education & Knowledge',    '教育和知识',  'المواد الدراسية والامتحانات والتعلم', 'Subjects, exams and learning', '科目、考试和学习', 4),
  (5, 'الطبيعة والبيئة',      'Nature & Environment',     '自然和环境',  'الجبال، الأنهار، الحيوانات، البيئة', 'Mountains, rivers, animals, environment', '山、河流、动物、环境', 5),
  (6, 'التكنولوجيا الحديثة',  'Modern Technology',        '现代科技',    'الإنترنت، الهواتف، التطبيقات', 'Internet, phones, apps', '网络、手机、应用程序', 6),
  (7, 'الترفيه والرياضة',     'Entertainment & Sports',   '娱乐和运动',  'الأفلام، الموسيقى، كرة القدم', 'Movies, music, football', '电影、音乐、足球', 7),
  (8, 'مراجعة HSK 3',         'HSK 3 Review',             'HSK3综合复习', 'مراجعة شاملة لمستوى HSK 3', 'Full review of HSK 3 level', '全面复习HSK3', 8)
) AS lesson(day_number, title_ar, title_en, title_zh, description_ar, description_en, description_zh, ord)
WHERE l.code = 'hsk3'
ON CONFLICT DO NOTHING;

-- ============================================================
-- 9. Seed lessons for hsk4
-- ============================================================
INSERT INTO lessons (level_id, title_ar, title_en, title_zh, description_ar, description_en, description_zh, lesson_type, day_number, xp_reward, estimated_minutes, order_index)
SELECT
  l.id,
  lesson.title_ar, lesson.title_en, lesson.title_zh,
  lesson.description_ar, lesson.description_en, lesson.description_zh,
  'vocabulary', lesson.day_number, 70, 20, lesson.day_number
FROM levels l,
(VALUES
  (1, 'الاقتصاد والمال',     'Economy & Finance',        '经济和金融',  'الأسواق المالية والاستثمار والتجارة', 'Financial markets, investment and trade', '金融市场、投资和贸易', 1),
  (2, 'السياسة والمجتمع',    'Politics & Society',       '政治和社会',  'الحكومة والقانون والمجتمع المدني', 'Government, law and civil society', '政府、法律和公民社会', 2),
  (3, 'الفلسفة والفكر',      'Philosophy & Thought',     '哲学与思想',  'القيم والمعتقدات والتفكير النقدي', 'Values, beliefs and critical thinking', '价值观、信念和批判性思维', 3),
  (4, 'العلوم والبحث',       'Science & Research',       '科学与研究',  'الأبحاث والاكتشافات العلمية', 'Scientific research and discoveries', '科学研究和发现', 4),
  (5, 'الأدب والفنون',       'Literature & Arts',        '文学与艺术',  'الشعر والروايات والفنون الجميلة', 'Poetry, novels and fine arts', '诗歌、小说和美术', 5),
  (6, 'التعبير المتقدم',     'Advanced Expression',      '高级表达',    'الأساليب البلاغية والتعبير الراقي', 'Rhetorical devices and refined expression', '修辞手法和高级表达', 6),
  (7, 'الأعمال والمهنة',     'Business & Career',        '商业与职业',  'مفردات الأعمال والتفاوض المهني', 'Business vocabulary and professional negotiation', '商务词汇和职业谈判', 7),
  (8, 'مراجعة HSK 4',        'HSK 4 Review',             'HSK4综合复习', 'مراجعة شاملة لمستوى HSK 4', 'Full review of HSK 4', 'HSK4全面复习', 8)
) AS lesson(day_number, title_ar, title_en, title_zh, description_ar, description_en, description_zh, ord)
WHERE l.code = 'hsk4'
ON CONFLICT DO NOTHING;

-- ============================================================
-- 10. Seed lessons for hsk5
-- ============================================================
INSERT INTO lessons (level_id, title_ar, title_en, title_zh, description_ar, description_en, description_zh, lesson_type, day_number, xp_reward, estimated_minutes, order_index)
SELECT
  l.id,
  lesson.title_ar, lesson.title_en, lesson.title_zh,
  lesson.description_ar, lesson.description_en, lesson.description_zh,
  'vocabulary', lesson.day_number, 80, 25, lesson.day_number
FROM levels l,
(VALUES
  (1, 'المناقشة والجدل',      'Discussion & Debate',      '讨论与辩论',  'التعبير عن الرأي والحجج والنقاش', 'Expressing opinions, arguments and debate', '表达意见、论点和辩论', 1),
  (2, 'الخطاب الأكاديمي',    'Academic Discourse',        '学术话语',   'الكتابة الأكاديمية والمصطلحات', 'Academic writing and terminology', '学术写作和术语', 2),
  (3, 'القضايا الاجتماعية',   'Social Issues',             '社会问题',   'الفقر والتعليم والعدالة الاجتماعية', 'Poverty, education and social justice', '贫困、教育和社会公正', 3),
  (4, 'العلاقات الدولية',     'International Relations',   '国际关系',   'الدبلوماسية والتعاون الدولي', 'Diplomacy and international cooperation', '外交和国际合作', 4),
  (5, 'الصحة العامة',         'Public Health',             '公共卫生',   'الأوبئة والوقاية والرعاية الصحية', 'Epidemics, prevention and healthcare', '流行病、预防和医疗保健', 5),
  (6, 'الإعلام والتواصل',     'Media & Communication',     '媒体与传播',  'وسائل الإعلام والصحافة والتواصل', 'Media, journalism and communication', '媒体、新闻业和传播', 6),
  (7, 'التعبير الإبداعي',     'Creative Expression',       '创意表达',   'الكتابة الإبداعية والتعبير الأدبي', 'Creative writing and literary expression', '创意写作和文学表达', 7),
  (8, 'مراجعة HSK 5',         'HSK 5 Review',              'HSK5综合复习', 'مراجعة شاملة لمستوى HSK 5', 'Full review of HSK 5', 'HSK5全面复习', 8)
) AS lesson(day_number, title_ar, title_en, title_zh, description_ar, description_en, description_zh, ord)
WHERE l.code = 'hsk5'
ON CONFLICT DO NOTHING;

-- ============================================================
-- 11. Seed lessons for hsk6
-- ============================================================
INSERT INTO lessons (level_id, title_ar, title_en, title_zh, description_ar, description_en, description_zh, lesson_type, day_number, xp_reward, estimated_minutes, order_index)
SELECT
  l.id,
  lesson.title_ar, lesson.title_en, lesson.title_zh,
  lesson.description_ar, lesson.description_en, lesson.description_zh,
  'vocabulary', lesson.day_number, 100, 30, lesson.day_number
FROM levels l,
(VALUES
  (1, 'اللغة الكلاسيكية',     'Classical Chinese',         '文言文',      'مقدمة للغة الصينية الكلاسيكية', 'Introduction to classical Chinese', '文言文入门', 1),
  (2, 'الأدب المعاصر',        'Contemporary Literature',    '当代文学',   'روائيون ومسرحيون صينيون معاصرون', 'Contemporary Chinese novelists and playwrights', '当代中国小说家和剧作家', 2),
  (3, 'الخطاب السياسي',       'Political Discourse',        '政治话语',   'خطاب الحكومة والتقارير الرسمية', 'Government discourse and official reports', '政府话语和官方报告', 3),
  (4, 'العلوم والابتكار',     'Science & Innovation',       '科学与创新',  'التقنيات الحديثة والابتكار العلمي', 'Modern technologies and scientific innovation', '现代技术和科学创新', 4),
  (5, 'الفلسفة والحضارة',     'Philosophy & Civilization',  '哲学与文明',  'الكونفوشيوسية والتاوية والبوذية', 'Confucianism, Taoism and Buddhism', '儒家、道家和佛家', 5),
  (6, 'البلاغة والأسلوب',     'Rhetoric & Style',           '修辞与风格',  'أساليب البلاغة والكتابة العالية المستوى', 'Rhetorical techniques and high-level writing', '修辞技巧和高水平写作', 6),
  (7, 'الترجمة والتفسير',     'Translation & Interpretation', '翻译与口译', 'مهارات الترجمة بين العربية والصينية', 'Translation skills between Arabic and Chinese', '阿拉伯语和中文翻译技巧', 7),
  (8, 'الإتقان الكامل',       'Full Mastery',               '全面精通',   'اختبار شامل لكل مستويات HSK', 'Comprehensive test of all HSK levels', '全面测试所有HSK级别', 8)
) AS lesson(day_number, title_ar, title_en, title_zh, description_ar, description_en, description_zh, ord)
WHERE l.code = 'hsk6'
ON CONFLICT DO NOTHING;

-- ============================================================
-- 12. Update handle_new_user trigger to include learning_direction
-- ============================================================
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, email, username, display_name, ui_language, learning_direction)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'ui_language', 'zh'),
    COALESCE(new.raw_user_meta_data->>'learning_direction', 'zh_learns_ar')
  ) ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
