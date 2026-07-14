-- SEED DATA FOR ANALIA

-- INSERT LEVELS
INSERT INTO levels (code, name_ar, name_en, name_zh, description_ar, description_en, description_zh, order_index, total_lessons, color_primary, icon_emoji, xp_required, pass_percentage) VALUES
('pre-a1', 'الأساسيات', 'Basics', '基础', 'تعلم الحروف العربية والأساسيات من الصفر', 'Learn Arabic letters and basics from zero', '从零学习阿拉伯字母和基础知识', 0, 60, '#10B981', '🌱', 0, 80),
('a1', 'المبتدئ', 'Beginner', '初级', 'قواعد أساسية ومفردات 300 كلمة', 'Basic grammar and 300 essential words', '基础语法和300个必备词汇', 1, 50, '#3B82F6', '🔤', 600, 80),
('a2', 'الأساسي', 'Elementary', '基础级', 'أفعال المضارع والمستقبل والأوصاف', 'Present/future verbs and adjectives', '现在时、将来时和形容词', 2, 50, '#8B5CF6', '📖', 1100, 80),
('b1', 'المتوسط', 'Intermediate', '中级', 'أوزان الأفعال والقراءة بدون تشكيل', 'Verb patterns and reading without diacritics', '动词形式和无符号阅读', 3, 55, '#F59E0B', '💬', 1650, 80),
('b2', 'فوق المتوسط', 'Upper Intermediate', '中高级', 'جمل معقدة ومقالات إخبارية', 'Complex sentences and news articles', '复杂句型和新闻文章', 4, 55, '#EF4444', '📰', 2200, 80),
('c1', 'المتقدم', 'Advanced', '高级', 'الصرف والإعراب والنصوص الأدبية', 'Morphology, syntax and literary texts', '形态学、句法和文学文本', 5, 50, '#EC4899', '🎓', 2750, 80),
('c2', 'الإتقان', 'Mastery', '精通', 'إتقان كامل — الإعراب والبلاغة والفصحى', 'Full mastery — syntax, rhetoric, classical Arabic', '完全掌握 — 句法、修辞和古典阿拉伯语', 6, 40, '#F97316', '🏆', 3250, 80)
ON CONFLICT (code) DO NOTHING;

-- PRE-A1 LESSONS (60 lessons)
INSERT INTO lessons (level_id, day_number, title_ar, title_en, title_zh, description_ar, description_en, description_zh, lesson_type, order_index, xp_reward, estimated_minutes) VALUES
-- Days 1-10: Alphabet Part 1
(1, 1, 'ما هي اللغة العربية؟', 'What is Arabic?', '什么是阿拉伯语？', 'نظرة عامة على اللغة العربية وحروفها الـ28', 'Overview of Arabic and its 28 letters', '阿拉伯语及其28个字母概述', 'letters', 1, 20, 25),
(1, 2, 'حروف: ب ت ث', 'Letters: B T Th', '字母：ب ت ث', 'تعلم حروف الباء والتاء والثاء', 'Learn the letters Baa, Taa, Thaa', '学习字母巴、塔、萨', 'letters', 2, 20, 25),
(1, 3, 'حروف: ج ح خ', 'Letters: J H Kh', '字母：ج ح خ', 'أصوات الحلق — الجيم والحاء والخاء', 'Throat sounds — Jiim, Haa, Khaa', '喉音 — 吉姆、哈、哈', 'letters', 3, 20, 25),
(1, 4, 'حروف: د ذ ر ز', 'Letters: D Dh R Z', '字母：د ذ ر ز', 'الدال والذال والراء والزاي', 'Daal, Dhaal, Raa, Zaay', '达、扎、拉、扎', 'letters', 4, 20, 25),
(1, 5, 'حروف: س ش', 'Letters: S Sh', '字母：س ش', 'السين والشين — أصوات الصفير', 'Siin and Shiin — sibilant sounds', '辛和辛 — 嘶嘶音', 'letters', 5, 20, 25),
(1, 6, 'حروف: ص ض', 'Letters: S D (emphatic)', '字母：ص ض', 'الصاد والضاد — الأصوات المفخمة الصعبة', 'Saad and Daad — the hardest emphatic consonants', '萨德和达德 — 最难的强调辅音', 'letters', 6, 20, 25),
(1, 7, 'حروف: ط ظ', 'Letters: T Dh (emphatic)', '字母：ط ظ', 'الطاء والظاء — أصوات مفخمة', 'Taa and Zhaa — emphatic sounds', '塔和扎 — 强调音', 'letters', 7, 20, 25),
(1, 8, 'حرف العين والغين', 'The Ayn and Ghayn', '阿因和加因', 'أشهر حرف عربي — العين الفريدة', 'The most famous Arabic letter — the unique Ayn', '最著名的阿拉伯字母 — 独特的阿因', 'letters', 8, 20, 25),
(1, 9, 'حروف: ف ق', 'Letters: F Q', '字母：ف ق', 'الفاء والقاف — القاف اللهوي', 'Faa and Qaaf — the uvular Qaaf', '法和卡夫 — 小舌音卡夫', 'letters', 9, 20, 25),
(1, 10, 'حروف: ك ل م ن ه و ي ء', 'Letters: K L M N H W Y Hamza', '字母：ك ل م ن ه و ي ء', 'إتمام مراجعة الأبجدية كاملة', 'Complete the full alphabet review', '完成全字母复习', 'letters', 10, 20, 30),

-- Days 11-20: Vowels
(1, 11, 'الفتحة — صوت الـ"أَ"', 'The Fatha — the "a" sound', '开口符 — "a"音', 'تعلم علامة الفتحة واستخدامها', 'Learn the fatha diacritic and its use', '学习开口符及其用法', 'letters', 11, 15, 20),
(1, 12, 'الضمة — صوت الـ"أُ"', 'The Damma — the "u" sound', '前附符 — "u"音', 'تعلم علامة الضمة واستخدامها', 'Learn the damma diacritic and its use', '学习前附符及其用法', 'letters', 12, 15, 20),
(1, 13, 'الكسرة — صوت الـ"إِ"', 'The Kasra — the "i" sound', '下附符 — "i"音', 'تعلم علامة الكسرة واستخدامها', 'Learn the kasra diacritic and its use', '学习下附符及其用法', 'letters', 13, 15, 20),
(1, 14, 'السكون — بدون حركة', 'The Sukun — no vowel', '静止符 — 无元音', 'تعلم السكون وأهميته', 'Learn the sukun and its importance', '学习静止符及其重要性', 'letters', 14, 15, 20),
(1, 15, 'التنوين — نونات الإعراب', 'Tanwin — nunation', '双写符 — 词尾加n音', 'تنوين الفتح والضم والكسر: اً — ٌ — ٍ', 'Tanwin fath, damm, kasra: an, un, in', '双写符开口、前附、下附：an, un, in', 'letters', 15, 15, 20),
(1, 16, 'الشدة — الحرف المشدد', 'The Shadda — doubled consonants', '加重符 — 双写辅音', 'تعلم الشدة وكيفية نطق الحروف المشددة', 'Learn the shadda and pronouncing doubled consonants', '学习加重符和发双写辅音', 'letters', 16, 15, 20),
(1, 17, 'حروف المد — ا و ي', 'Long vowels — aa, uu, ii', '长元音 — ا و ي', 'الألف والواو والياء كحروف مد', 'Alif, Waaw, and Yaa as long vowels', '阿里夫、瓦乌和亚作为长元音', 'letters', 17, 15, 20),
(1, 18, 'الحروف الشمسية والقمرية', 'Sun and Moon letters', '阳性字母和月性字母', 'كيف تتصرف "ال" مع الحروف المختلفة', 'How "al-" behaves with different letters', '"ال"与不同字母的组合方式', 'grammar', 18, 20, 25),
(1, 19, 'الحروف الموصلة والمنفصلة', 'Connecting and non-connecting letters', '连接字母和非连接字母', 'أي الحروف تتصل وأيها لا تتصل', 'Which letters connect and which do not', '哪些字母连接，哪些不连接', 'letters', 19, 20, 25),
(1, 20, 'مراجعة شاملة للأبجدية', 'Full alphabet review + test', '字母全面复习 + 测试', 'مراجعة الأبجدية كاملة واختبار النطق', 'Review the full alphabet and pronunciation test', '复习全字母和发音测试', 'review', 20, 30, 35),

-- Days 21-35: First Words
(1, 21, 'التحيات — السلام عليكم', 'Greetings — As-Salamu Alaykum', '问候语 — 萨拉姆', 'تعلم التحيات الإسلامية الأساسية', 'Learn basic Islamic greetings', '学习基本伊斯兰问候语', 'vocabulary', 21, 15, 20),
(1, 22, 'التحيات — مرحبا وأهلا', 'Greetings — Marhaba and Ahlan', '问候语 — 你好', 'مرحبا وأهلا وسهلا والردود عليهما', 'Marhaba, Ahlan Wasahlan and their responses', '你好、欢迎及其回应', 'vocabulary', 22, 15, 20),
(1, 23, 'كيف حالك؟', 'How are you?', '你好吗？', 'أسئلة الحال والردود الشائعة', 'How are you questions and common responses', '询问状态的问题和常见回答', 'vocabulary', 23, 15, 20),
(1, 24, 'التعريف بالنفس', 'Introducing yourself', '自我介绍', 'أنا... اسمي... من...', 'I am... My name is... I am from...', '我是...我的名字是...我来自...', 'vocabulary', 24, 15, 20),
(1, 25, 'الوداع والمجاملات', 'Farewell and courtesies', '告别和礼貌用语', 'مع السلامة وشكراً وعفواً والمزيد', 'Goodbye, thank you, you are welcome and more', '再见、谢谢、不客气等', 'vocabulary', 25, 15, 20),

(1, 26, 'الأرقام ١–١٠', 'Numbers 1–10', '数字1-10', 'الأرقام من واحد إلى عشرة', 'Numbers from one to ten', '从一到十的数字', 'vocabulary', 26, 15, 20),
(1, 27, 'الأرقام ١١–٢٠', 'Numbers 11–20', '数字11-20', 'الأرقام من أحد عشر إلى عشرين', 'Numbers from eleven to twenty', '从十一到二十的数字', 'vocabulary', 27, 15, 20),
(1, 28, 'الأرقام ٢١–١٠٠', 'Numbers 21–100', '数字21-100', 'العقود والأرقام المركبة', 'Tens and compound numbers', '十位数和复合数字', 'vocabulary', 28, 15, 20),
(1, 29, 'الألوان', 'Colors', '颜色', 'الألوان الأساسية باللغة العربية', 'Basic colors in Arabic', '阿拉伯语基础颜色', 'vocabulary', 29, 15, 20),
(1, 30, 'أيام الأسبوع', 'Days of the week', '星期几', 'الأحد والاثنين والثلاثاء... إلخ', 'Sunday, Monday, Tuesday... etc.', '周日、周一、周二...等', 'vocabulary', 30, 15, 20),

(1, 31, 'أشهر السنة', 'Months of the year', '月份', 'الأشهر الهجرية والميلادية', 'Hijri and Gregorian months', '伊斯兰历和公历月份', 'vocabulary', 31, 15, 20),
(1, 32, 'الفصول والطقس', 'Seasons and weather', '季节和天气', 'الربيع والصيف والخريف والشتاء', 'Spring, summer, autumn, winter', '春夏秋冬', 'vocabulary', 32, 15, 20),
(1, 33, 'الطعام والشراب الأساسي', 'Basic food and drink', '基础食物和饮料', 'ماء وخبز وأرز وشاي وقهوة', 'Water, bread, rice, tea, coffee', '水、面包、米饭、茶、咖啡', 'vocabulary', 33, 15, 20),
(1, 34, 'أفراد الأسرة', 'Family members', '家庭成员', 'أب وأم وأخ وأخت وجد وجدة', 'Father, mother, brother, sister, grandfather, grandmother', '父亲、母亲、兄弟、姐妹、祖父、祖母', 'vocabulary', 34, 15, 20),
(1, 35, 'الحيوانات المألوفة', 'Common animals', '常见动物', 'قطة وكلب وحصان وطائر وسمكة', 'Cat, dog, horse, bird, fish', '猫、狗、马、鸟、鱼', 'vocabulary', 35, 15, 20),

-- Days 36-50: First Sentences
(1, 36, 'أنا + اسم — جملة اسمية', 'I am + name — nominal sentence', '我是+名字 — 名词句', 'أنا طالب. أنا مدرسة. أنا طبيب.', 'I am a student. I am a teacher. I am a doctor.', '我是学生。我是老师。我是医生。', 'grammar', 36, 20, 25),
(1, 37, 'هذا وهذه — أسماء الإشارة', 'This (hādhā/hādhihi)', '这个/这位 — 指示代词', 'هذا كتاب. هذه شجرة. هذا بيت.', 'This is a book. This is a tree. This is a house.', '这是一本书。这是一棵树。这是一所房子。', 'grammar', 37, 20, 25),
(1, 38, 'ذلك وتلك — الإشارة للبعيد', 'That (dhālik/tilk)', '那个/那位 — 远指', 'ذلك جبل. تلك سيارة. ذلك طريق.', 'That is a mountain. That is a car. That is a road.', '那是一座山。那是一辆车。那是一条路。', 'grammar', 38, 20, 25),
(1, 39, 'النفي — ليس وما', 'Negation — laysa and maa', '否定 — 不是', 'هذا ليس كلباً. أنا لست مريضاً.', 'This is not a dog. I am not sick.', '这不是一只狗。我没有生病。', 'grammar', 39, 20, 25),
(1, 40, 'الصفات — الوصف', 'Adjectives — describing things', '形容词 — 描述', 'الكتاب كبير. البيت جميل.', 'The book is big. The house is beautiful.', '书很大。房子很漂亮。', 'grammar', 40, 20, 25),

(1, 41, 'السؤال بـ"من؟"', 'Questions with "who?"', '"谁？"提问', 'من هذا؟ من أنت؟ من هو؟', 'Who is this? Who are you? Who is he?', '这是谁？你是谁？他是谁？', 'grammar', 41, 20, 25),
(1, 42, 'السؤال بـ"ماذا؟" و"ما؟"', 'Questions with "what?"', '"什么？"提问', 'ما هذا؟ ماذا تريد؟ ما اسمك؟', 'What is this? What do you want? What is your name?', '这是什么？你想要什么？你叫什么名字？', 'grammar', 42, 20, 25),
(1, 43, 'السؤال بـ"أين؟"', 'Questions with "where?"', '"在哪里？"提问', 'أين المدرسة؟ أين أنت؟ أين البيت؟', 'Where is the school? Where are you? Where is the house?', '学校在哪里？你在哪里？房子在哪里？', 'grammar', 43, 20, 25),
(1, 44, 'السؤال بـ"متى؟"', 'Questions with "when?"', '"什么时候？"提问', 'متى الدرس؟ متى تذهب؟', 'When is the lesson? When do you go?', '什么时候上课？你什么时候去？', 'grammar', 44, 20, 25),
(1, 45, 'السؤال بـ"كيف؟" و"كم؟"', 'Questions with "how?" and "how many?"', '"怎么？"和"多少？"', 'كيف حالك؟ كم عمرك؟ كم الثمن؟', 'How are you? How old are you? How much is the price?', '你好吗？你多大了？价格多少？', 'grammar', 45, 20, 25),

(1, 46, 'قراءة جمل بسيطة ١', 'Reading simple sentences 1', '读简单句子1', 'قراءة جمل قصيرة مشكولة', 'Read short fully-voweled sentences', '阅读带符号的短句', 'reading', 46, 20, 25),
(1, 47, 'قراءة جمل بسيطة ٢', 'Reading simple sentences 2', '读简单句子2', 'فقرة قصيرة مشكولة مع فهم النص', 'Short voweled paragraph with comprehension', '带符号短文段和理解', 'reading', 47, 20, 25),
(1, 48, 'الكتابة العربية ١', 'Arabic writing practice 1', '阿拉伯语写作练习1', 'تدرب على كتابة الحروف والكلمات', 'Practice writing letters and words', '练习书写字母和单词', 'writing', 48, 20, 25),
(1, 49, 'الكتابة العربية ٢', 'Arabic writing practice 2', '阿拉伯语写作练习2', 'كتابة جمل بسيطة', 'Write simple sentences', '书写简单句子', 'writing', 49, 20, 25),
(1, 50, 'محادثة بسيطة — أول حوار', 'Simple conversation — first dialogue', '简单对话 — 第一个对话', 'حوار بين شخصين حول الاسم والبلد', 'Dialogue between two people about name and country', '两人关于名字和国家的对话', 'conversation', 50, 20, 25),

-- Days 51-60: Review & Final
(1, 51, 'مراجعة الحروف والحركات', 'Review: letters and vowels', '复习：字母和元音', 'مراجعة شاملة للحروف والتشكيل', 'Comprehensive review of letters and diacritics', '字母和符号的全面复习', 'review', 51, 25, 30),
(1, 52, 'مراجعة المفردات الأساسية', 'Review: basic vocabulary', '复习：基础词汇', 'مراجعة 100 كلمة أساسية', 'Review 100 essential words', '复习100个基础词汇', 'review', 52, 25, 30),
(1, 53, 'مراجعة الجمل الاسمية', 'Review: nominal sentences', '复习：名词句', 'مراجعة هذا وذلك وأنا وأسئلة', 'Review this, that, I am, and question words', '复习这个、那个、我是和疑问词', 'review', 53, 25, 30),
(1, 54, 'مراجعة القراءة والكتابة', 'Review: reading and writing', '复习：阅读和写作', 'قراءة وكتابة نصوص مشكولة', 'Reading and writing fully-voweled texts', '阅读和写作带符号文本', 'review', 54, 25, 30),
(1, 55, 'محادثة عامة — تمرين', 'General conversation practice', '一般对话练习', 'محادثة حرة مع مراجعة الإجابات', 'Free conversation with answer review', '自由对话和答案复习', 'conversation', 55, 25, 30),
(1, 56, 'مفردات إضافية — المنزل', 'Extra vocab — the home', '额外词汇 — 家', 'غرفة نوم وصالة ومطبخ وحمام', 'Bedroom, living room, kitchen, bathroom', '卧室、客厅、厨房、浴室', 'vocabulary', 56, 15, 20),
(1, 57, 'مفردات إضافية — المدرسة', 'Extra vocab — school', '额外词汇 — 学校', 'قلم وكتاب وسبورة ومعلم وطالب', 'Pen, book, board, teacher, student', '笔、书、黑板、老师、学生', 'vocabulary', 57, 15, 20),
(1, 58, 'مفردات إضافية — المدينة', 'Extra vocab — the city', '额外词汇 — 城市', 'شارع ومحل ومستشفى وجامعة ومسجد', 'Street, shop, hospital, university, mosque', '街道、商店、医院、大学、清真寺', 'vocabulary', 58, 15, 20),
(1, 59, 'مراجعة شاملة للمستوى', 'Full level review', '全级别综合复习', 'مراجعة كل ما تعلمته في هذا المستوى', 'Review everything learned in this level', '复习本级所学的所有内容', 'review', 59, 30, 40),
(1, 60, 'الاختبار النهائي — المستوى الأساسي', 'Final Exam — Pre-A1 Level', '期末考试 — 基础级', 'اجتز الاختبار للانتقال إلى مستوى A1', 'Pass the exam to advance to A1 level', '通过考试晋升到A1级别', 'review', 60, 50, 45)

ON CONFLICT DO NOTHING;

-- A1 LESSONS (first 20)
INSERT INTO lessons (level_id, day_number, title_ar, title_en, title_zh, description_ar, description_en, description_zh, lesson_type, order_index, xp_reward, estimated_minutes) VALUES
(2, 1, 'مراجعة سريعة للأبجدية', 'Quick alphabet review', '快速复习字母表', 'مراجعة سريعة للحروف العربية', 'Quick review of Arabic letters', '快速复习阿拉伯字母', 'review', 1, 15, 15),
(2, 2, 'الفعل الماضي — صيغة المفرد', 'Past tense — singular', '过去时 — 单数', 'ذهب، أكل، شرب، كتب، قرأ', 'He went, ate, drank, wrote, read', '他去了、吃了、喝了、写了、读了', 'grammar', 2, 20, 25),
(2, 3, 'الفعل الماضي — المتكلم والمخاطب', 'Past tense — I and you', '过去时 — 第一和第二人称', 'ذهبت، أكلت، كتبت، ذهبتَ، ذهبتِ', 'I went, I ate, I wrote, you went (m/f)', '我去了、我吃了、我写了、你去了(男/女)', 'grammar', 3, 20, 25),
(2, 4, 'المفردات — العائلة', 'Vocabulary — Family', '词汇 — 家庭', '300 كلمة — العائلة والأقارب', '300 words — family and relatives', '300词汇 — 家庭和亲属', 'vocabulary', 4, 15, 20),
(2, 5, 'المفردات — المنزل', 'Vocabulary — Home', '词汇 — 家', 'غرف المنزل وأثاثه وأدواته', 'Home rooms, furniture, and items', '家庭房间、家具和物品', 'vocabulary', 5, 15, 20),
(2, 6, 'المفردات — الطعام', 'Vocabulary — Food', '词汇 — 食物', 'أنواع الطعام والمطبخ العربي', 'Types of food and Arabic cuisine', '食物种类和阿拉伯美食', 'vocabulary', 6, 15, 20),
(2, 7, 'المفردات — الجسم', 'Vocabulary — Body parts', '词汇 — 身体部位', 'رأس وعين وأنف وفم ويد ورجل', 'Head, eye, nose, mouth, hand, leg', '头、眼睛、鼻子、嘴巴、手、腿', 'vocabulary', 7, 15, 20),
(2, 8, 'المفردات — الملابس', 'Vocabulary — Clothes', '词汇 — 服装', 'قميص وبنطال وفستان وحذاء وقبعة', 'Shirt, pants, dress, shoes, hat', '衬衫、裤子、裙子、鞋子、帽子', 'vocabulary', 8, 15, 20),
(2, 9, 'محادثة — في المطعم', 'Conversation — At the restaurant', '对话 — 在餐厅', 'طلب الطعام والمشروبات', 'Ordering food and drinks', '点餐和饮料', 'conversation', 9, 20, 25),
(2, 10, 'محادثة — في المدرسة', 'Conversation — At school', '对话 — 在学校', 'التعرف على الزملاء والأسئلة المدرسية', 'Meeting classmates and school questions', '认识同学和学校问题', 'conversation', 10, 20, 25),
(2, 11, 'الجملة الفعلية — الفاعل والفعل', 'Verbal sentence structure', '动词句结构', 'ذهب الولد. أكلت البنت.', 'The boy went. The girl ate.', '男孩去了。女孩吃了。', 'grammar', 11, 20, 25),
(2, 12, 'الضمائر المنفصلة', 'Independent pronouns', '独立代词', 'أنا، أنتَ، أنتِ، هو، هي، نحن، أنتم، هم', 'I, you(m), you(f), he, she, we, you(pl), they', '我、你(男)、你(女)、他、她、我们、你们、他们', 'grammar', 12, 20, 25),
(2, 13, 'التذكير والتأنيث', 'Masculine and feminine', '阳性和阴性', 'كتابٌ / كتابةٌ — معلمٌ / معلمةٌ', 'Book/bookcase — teacher(m)/teacher(f)', '书/书柜 — 老师(男)/老师(女)', 'grammar', 13, 20, 25),
(2, 14, 'المفردات — الألوان المتقدمة', 'Advanced colors vocab', '进阶颜色词汇', 'فاتح وداكن وزاهٍ وباهت وشفاف', 'Light, dark, vivid, faded, transparent', '浅色、深色、鲜艳、暗淡、透明', 'vocabulary', 14, 15, 20),
(2, 15, 'قراءة — نص بسيط ١', 'Reading — Simple text 1', '阅读 — 简单文章1', 'نص قصير عن يوم في حياة طالب', 'Short text about a day in a student life', '关于学生一天生活的短文', 'reading', 15, 20, 25),
(2, 16, 'قراءة — نص بسيط ٢', 'Reading — Simple text 2', '阅读 — 简单文章2', 'نص قصير عن العائلة والمنزل', 'Short text about family and home', '关于家庭和家的短文', 'reading', 16, 20, 25),
(2, 17, 'الكتابة — وصف يومي', 'Writing — My daily routine', '写作 — 我的日常', 'كتابة فقرة عن يومك', 'Write a paragraph about your day', '写一段关于你的一天的文字', 'writing', 17, 20, 25),
(2, 18, 'الاستماع — حوار قصير', 'Listening — Short dialogue', '听力 — 短对话', 'استمع وأجب عن أسئلة الفهم', 'Listen and answer comprehension questions', '听并回答理解问题', 'listening', 18, 20, 25),
(2, 19, 'مراجعة A1', 'A1 Review', 'A1复习', 'مراجعة كل دروس A1 حتى الآن', 'Review all A1 lessons so far', '复习迄今所有A1课程', 'review', 19, 25, 30),
(2, 20, 'اختبار A1 المرحلي', 'A1 Mid-level Test', 'A1中期测试', 'اختبار الربع الأول من مستوى A1', 'Test for first quarter of A1 level', 'A1级别第一季度测试', 'review', 20, 30, 35)
ON CONFLICT DO NOTHING;

-- VOCABULARY CARDS (28 Arabic letters as vocab)
INSERT INTO vocabulary_cards (word_ar, word_transliteration, meaning_en, meaning_zh, example_sentence_ar, level_id) VALUES
('بَيْت', 'bayt', 'house', '房子', 'هَذَا بَيْتٌ كَبِيرٌ', 1),
('كِتَاب', 'kitāb', 'book', '书', 'هَذَا كِتَابٌ جَمِيلٌ', 1),
('قَلَم', 'qalam', 'pen', '笔', 'الْقَلَمُ عَلَى الطَّاوِلَةِ', 1),
('مَاء', 'māʾ', 'water', '水', 'أَشْرَبُ الْمَاءَ كُلَّ يَوْمٍ', 1),
('خُبْز', 'khubz', 'bread', '面包', 'أَكُلُ الْخُبْزَ كُلَّ صَبَاحٍ', 1),
('شَمْس', 'shams', 'sun', '太阳', 'الشَّمْسُ مُشْرِقَةٌ الْيَوْمَ', 1),
('قَمَر', 'qamar', 'moon', '月亮', 'الْقَمَرُ جَمِيلٌ فِي اللَّيْلِ', 1),
('سَمَاء', 'samāʾ', 'sky', '天空', 'السَّمَاءُ زَرْقَاءُ', 1),
('بَحْر', 'baḥr', 'sea', '海', 'الْبَحْرُ وَاسِعٌ وَجَمِيلٌ', 1),
('جَبَل', 'jabal', 'mountain', '山', 'الْجَبَلُ عَالٍ', 1),
('وَلَد', 'walad', 'boy', '男孩', 'الْوَلَدُ يَلْعَبُ فِي الْحَدِيقَةِ', 1),
('بِنْت', 'bint', 'girl', '女孩', 'الْبِنْتُ تَقْرَأُ كِتَاباً', 1),
('رَجُل', 'rajul', 'man', '男人', 'الرَّجُلُ يَعْمَلُ كَثِيراً', 1),
('امْرَأَة', 'imraʾa', 'woman', '女人', 'الْمَرْأَةُ طَبِيبَةٌ', 1),
('مَدِينَة', 'madīna', 'city', '城市', 'أَسْكُنُ فِي مَدِينَةٍ كَبِيرَةٍ', 1),
('مَدْرَسَة', 'madrasa', 'school', '学校', 'أَذْهَبُ إِلَى الْمَدْرَسَةِ كُلَّ يَوْمٍ', 1),
('مَسْجِد', 'masjid', 'mosque', '清真寺', 'الْمَسْجِدُ قَرِيبٌ مِنَ الْبَيْتِ', 1),
('سَيَّارَة', 'sayyāra', 'car', '汽车', 'السَّيَّارَةُ سَرِيعَةٌ', 1),
('طَعَام', 'ṭaʿām', 'food', '食物', 'الطَّعَامُ لَذِيذٌ جِدّاً', 1),
('صَدِيق', 'ṣadīq', 'friend', '朋友', 'هَذَا صَدِيقِي الْعَزِيزُ', 1),
('مُعَلِّم', 'muʿallim', 'teacher', '老师', 'الْمُعَلِّمُ يَشْرَحُ الدَّرْسَ', 1),
('طَالِب', 'ṭālib', 'student', '学生', 'الطَّالِبُ يَدْرُسُ بِجِدٍّ', 1),
('لُغَة', 'lugha', 'language', '语言', 'اللُّغَةُ الْعَرَبِيَّةُ جَمِيلَةٌ', 1),
('عَرَبِي', 'ʿarabī', 'Arabic', '阿拉伯语', 'أَتَعَلَّمُ اللُّغَةَ الْعَرَبِيَّةَ', 1),
('شُكْراً', 'shukran', 'thank you', '谢谢', 'شُكْراً جَزِيلاً عَلَى مُسَاعَدَتِكَ', 1),
('مَرْحَبَا', 'marḥabā', 'hello/welcome', '你好/欢迎', 'مَرْحَبَا بِكَ فِي بِلَادِنَا', 1),
('نَعَم', 'naʿam', 'yes', '是', 'نَعَم، أَنَا مُوَافِق', 1),
('لَا', 'lā', 'no', '不', 'لَا، أَنَا لَسْتُ مَعَكَ', 1)
ON CONFLICT DO NOTHING;

-- ACHIEVEMENTS
INSERT INTO achievements (code, name_ar, name_en, name_zh, description_ar, description_en, description_zh, icon_emoji, xp_reward, achievement_type) VALUES
('first_lesson', 'أول درس', 'First Lesson', '第一课', 'أتممت أول درس لك في أناليا!', 'You completed your first lesson in ANALIA!', '你完成了ANALIA的第一课！', '🌟', 50, 'lessons'),
('streak_3', '٣ أيام متتالية', '3-Day Streak', '3天连续', 'درست ٣ أيام متتالية!', 'You studied 3 days in a row!', '你连续学习了3天！', '🔥', 30, 'streak'),
('streak_7', '٧ أيام متتالية', '7-Day Streak', '7天连续', 'أسبوع كامل من الدراسة المتواصلة!', 'A full week of continuous study!', '连续学习整整一周！', '🔥', 100, 'streak'),
('streak_30', '٣٠ يوماً متتالياً', '30-Day Streak', '30天连续', 'شهر كامل من الالتزام المذهل!', 'A full month of amazing dedication!', '令人惊叹的坚持整整一个月！', '🏆', 500, 'streak'),
('alphabet_master', 'متقن الحروف', 'Alphabet Master', '字母大师', 'أتقنت جميع الحروف العربية الـ28!', 'You mastered all 28 Arabic letters!', '你掌握了全部28个阿拉伯字母！', '🔤', 200, 'lessons'),
('perfect_week', 'أسبوع مثالي', 'Perfect Week', '完美一周', 'حصلت على 100٪ في ٧ دروس متتالية!', 'You scored 100% in 7 consecutive lessons!', '在7节课中连续获得100%！', '💎', 300, 'perfect_score'),
('level_complete', 'أتممت مستوى', 'Level Complete', '通关一级', 'أتممت مستوى كاملاً في أناليا!', 'You completed a full level in ANALIA!', '你完成了ANALIA的一个完整级别！', '🎓', 500, 'level'),
('speed_learner', 'متعلم سريع', 'Speed Learner', '速度学习者', 'أتممت درساً في نصف الوقت المقدر!', 'You finished a lesson in half the estimated time!', '你在估计时间的一半内完成了课程！', '⚡', 100, 'speed'),
('vocabulary_100', '١٠٠ مفردة', '100 Vocabulary', '100词汇', 'راجعت ١٠٠ بطاقة مفردات!', 'You reviewed 100 vocabulary cards!', '你复习了100张词汇卡！', '📚', 150, 'lessons'),
('ai_conversation', 'محادثة مع الذكاء', 'AI Conversation', 'AI对话', 'بدأت أول محادثة مع المعلم أنس!', 'You started your first chat with teacher Anas!', '你开始了与老师阿纳斯的第一次对话！', '🤖', 50, 'lessons'),
('all_levels', 'أتممت كل المستويات', 'All Levels Complete', '全部通关', 'أتقنت اللغة العربية من الصفر إلى الإتقان!', 'You mastered Arabic from zero to mastery!', '你从零开始掌握了阿拉伯语！', '👑', 2000, 'level')
ON CONFLICT (code) DO NOTHING;
