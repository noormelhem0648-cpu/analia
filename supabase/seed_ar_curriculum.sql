-- ============================================================
-- ANALIA: Arabic Curriculum for Chinese speakers (Units + Lessons)
-- AUTO-GENERATED from lib/arabicCurriculum.ts — do not edit by hand.
-- 33 units · 185 lessons
-- Requires the units table (from seed_zh_units_schema.sql).
-- Idempotent: wipes & re-seeds the Arabic levels below only.
-- ============================================================

-- Idempotent + safe: clear progress for previously-seeded UNIT lessons (FK has no cascade),
-- then drop the units (cascade removes their lessons). Legacy flat lessons (unit_id IS NULL)
-- are left untouched — they are simply hidden once a level has units.
DELETE FROM user_lesson_progress WHERE lesson_id IN (
  SELECT l.id FROM lessons l JOIN units u ON l.unit_id = u.id
  WHERE u.level_id IN (SELECT id FROM levels WHERE code IN ('pre-a1', 'a1', 'a2', 'b1', 'b2', 'c1'))
);
DELETE FROM units WHERE level_id IN (SELECT id FROM levels WHERE code IN ('pre-a1', 'a1', 'a2', 'b1', 'b2', 'c1'));


-- ============ LEVEL pre-a1 ============
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-pre-a1-u1', 'الأبجدية العربية (١)', 'Arabic Alphabet (1)', '阿拉伯字母（一）', '🔤', 1
FROM levels WHERE code = 'pre-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 1, 'الحروف: ا ب ت ث', 'Letters: alif–thaa', '字母：ا ب ت ث', 'letters', 1, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u1' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 2, 'الحروف: ج ح خ', 'Letters: jeem–khaa', '字母：ج ح خ', 'letters', 2, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u1' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 3, 'الحروف: د ذ ر ز', 'Letters: daal–zaay', '字母：د ذ ر ز', 'letters', 3, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u1' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 4, 'الحروف: س ش ص ض', 'Letters: seen–daad', '字母：س ش ص ض', 'letters', 4, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u1' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 5, 'الحروف: ط ظ ع غ', 'Letters: taa–ghayn', '字母：ط ظ ع غ', 'letters', 5, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u1' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 6, 'الحروف: ف ق ك ل', 'Letters: faa–laam', '字母：ف ق ك ل', 'letters', 6, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u1' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 7, 'الحروف: م ن ه و ي', 'Letters: meem–yaa', '字母：م ن ه و ي', 'letters', 7, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u1' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 8, 'أشكال الحرف: أول ووسط وآخر', 'Letter forms: initial/medial/final', '字形：词首/中/尾', 'letters', 8, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u1' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 9, 'اتصال الحروف', 'Connecting letters', '字母连写', 'writing', 9, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u1' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 10, 'اختبار الوحدة', 'Unit Test', '单元测验', 'review', 10, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u1' WHERE lv.code = 'pre-a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-pre-a1-u2', 'الكتابة والتشكيل', 'Writing & Harakat', '书写与音符', '✍️', 2
FROM levels WHERE code = 'pre-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 11, 'كتابة الحروف باليد', 'Handwriting letters', '手写字母', 'writing', 11, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u2' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 12, 'الحركات: الفتحة والكسرة والضمة', 'Harakat: fatha/kasra/damma', '短元音 فتحة/كسرة/ضمة', 'letters', 12, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u2' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 13, 'السكون', 'Sukoon', '静符 سكون', 'letters', 13, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u2' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 14, 'الشدّة', 'Shadda', '叠音符 شدّة', 'letters', 14, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u2' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 15, 'التنوين (ً ٍ ٌ)', 'Tanwin (nunation)', '鼻音符 تنوين', 'letters', 15, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u2' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 16, 'المدّ الطويل (ا و ي)', 'Long vowels (madd)', '长元音 مدّ', 'letters', 16, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u2' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 17, 'التاء المربوطة ة', 'Taa marbuta', '闭塔 ة（阴性标志）', 'letters', 17, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u2' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 18, 'الحروف الشمسية والقمرية', 'Sun & moon letters', '太阳字母与月亮字母', 'grammar', 18, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u2' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 19, 'قراءة كلمات بسيطة', 'Reading simple words', '拼读简单词', 'reading', 19, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u2' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 20, 'اختبار الوحدة', 'Unit Test', '单元测验', 'review', 20, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u2' WHERE lv.code = 'pre-a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-pre-a1-u3', 'النطق: الأصوات الصعبة', 'Pronunciation: Hard Sounds', '发音：难点音', '🗣️', 3
FROM levels WHERE code = 'pre-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 21, 'أصوات لا مثيل لها في الصينية', 'Sounds not in Chinese', '汉语中没有的音', 'letters', 21, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u3' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 22, 'التمييز: س / ص', 'Contrast: seen / saad', '辨音：س / ص', 'listening', 22, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u3' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 23, 'التمييز: د / ض', 'Contrast: daal / daad', '辨音：د / ض', 'listening', 23, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u3' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 24, 'التمييز: ت / ط', 'Contrast: taa / Taa', '辨音：ت / ط', 'listening', 24, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u3' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 25, 'التمييز: ه / ح', 'Contrast: haa / Haa', '辨音：ه / ح', 'listening', 25, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u3' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 26, 'التمييز: ك / ق', 'Contrast: kaaf / qaaf', '辨音：ك / ق', 'listening', 26, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u3' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 27, 'التمييز: ع / أ', 'Contrast: ayn / hamza', '辨音：ع / أ', 'listening', 27, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u3' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 28, 'مراجعة الأصوات', 'Sounds review', '发音复习', 'review', 28, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u3' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 29, 'قراءة صوتية', 'Phonetic reading', '语音朗读', 'reading', 29, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u3' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 30, 'اختبار النطق', 'Pronunciation Test', '发音测验', 'review', 30, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u3' WHERE lv.code = 'pre-a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-pre-a1-u4', 'أول محادثة', 'First Conversation', '第一次对话', '👋', 4
FROM levels WHERE code = 'pre-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 31, 'السلام والتحية', 'Greetings', '问候', 'conversation', 31, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u4' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 32, 'الاسم والتعريف بالنفس', 'Name & introductions', '姓名与自我介绍', 'conversation', 32, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u4' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 33, 'البلد والجنسية', 'Country & nationality', '国家与国籍', 'vocabulary', 33, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u4' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 34, 'الأرقام ٠–١٠', 'Numbers 0–10', '数字 ٠–١٠', 'vocabulary', 34, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u4' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 35, 'الأسرة', 'Family', '家庭', 'vocabulary', 35, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u4' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 36, 'الوقت واليوم', 'Time & day', '时间与日期', 'vocabulary', 36, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u4' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 37, 'مراجعة', 'Review', '复习', 'review', 37, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u4' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 38, 'محادثة قصيرة', 'Short dialogue', '简短对话', 'conversation', 38, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u4' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 39, 'قراءة قصيرة', 'Short reading', '短文阅读', 'reading', 39, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u4' WHERE lv.code = 'pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 40, 'اختبار الوحدة', 'Unit Test', '单元测验', 'review', 40, 20, 15
FROM levels lv JOIN units un ON un.code = 'ar-pre-a1-u4' WHERE lv.code = 'pre-a1';

-- ============ LEVEL a1 ============
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a1-u1', 'المنزل', 'The Home', '家', '🏠', 1
FROM levels WHERE code = 'a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 1, 'المفردات — المنزل', 'Vocabulary — The Home', '词汇 — 家', 'vocabulary', 1, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u1' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 2, 'القواعد والمحادثة — المنزل', 'Grammar & Conversation — The Home', '语法与会话 — 家', 'grammar', 2, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u1' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 3, 'الاستماع والقراءة — المنزل', 'Listening & Reading — The Home', '听力与阅读 — 家', 'listening', 3, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u1' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 4, 'الكتابة — المنزل', 'Writing — The Home', '写作 — 家', 'writing', 4, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u1' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 5, 'المراجعة والاختبار — المنزل', 'Review & Quiz — The Home', '复习与测验 — 家', 'review', 5, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u1' WHERE lv.code = 'a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a1-u2', 'الجامعة', 'University', '大学', '🎓', 2
FROM levels WHERE code = 'a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 6, 'المفردات — الجامعة', 'Vocabulary — University', '词汇 — 大学', 'vocabulary', 6, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u2' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 7, 'القواعد والمحادثة — الجامعة', 'Grammar & Conversation — University', '语法与会话 — 大学', 'grammar', 7, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u2' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 8, 'الاستماع والقراءة — الجامعة', 'Listening & Reading — University', '听力与阅读 — 大学', 'listening', 8, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u2' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 9, 'الكتابة — الجامعة', 'Writing — University', '写作 — 大学', 'writing', 9, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u2' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 10, 'المراجعة والاختبار — الجامعة', 'Review & Quiz — University', '复习与测验 — 大学', 'review', 10, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u2' WHERE lv.code = 'a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a1-u3', 'المطعم', 'The Restaurant', '餐厅', '🍽️', 3
FROM levels WHERE code = 'a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 11, 'المفردات — المطعم', 'Vocabulary — The Restaurant', '词汇 — 餐厅', 'vocabulary', 11, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u3' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 12, 'القواعد والمحادثة — المطعم', 'Grammar & Conversation — The Restaurant', '语法与会话 — 餐厅', 'grammar', 12, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u3' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 13, 'الاستماع والقراءة — المطعم', 'Listening & Reading — The Restaurant', '听力与阅读 — 餐厅', 'listening', 13, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u3' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 14, 'الكتابة — المطعم', 'Writing — The Restaurant', '写作 — 餐厅', 'writing', 14, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u3' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 15, 'المراجعة والاختبار — المطعم', 'Review & Quiz — The Restaurant', '复习与测验 — 餐厅', 'review', 15, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u3' WHERE lv.code = 'a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a1-u4', 'السوق', 'The Market', '市场', '🛒', 4
FROM levels WHERE code = 'a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 16, 'المفردات — السوق', 'Vocabulary — The Market', '词汇 — 市场', 'vocabulary', 16, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u4' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 17, 'القواعد والمحادثة — السوق', 'Grammar & Conversation — The Market', '语法与会话 — 市场', 'grammar', 17, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u4' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 18, 'الاستماع والقراءة — السوق', 'Listening & Reading — The Market', '听力与阅读 — 市场', 'listening', 18, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u4' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 19, 'الكتابة — السوق', 'Writing — The Market', '写作 — 市场', 'writing', 19, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u4' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 20, 'المراجعة والاختبار — السوق', 'Review & Quiz — The Market', '复习与测验 — 市场', 'review', 20, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u4' WHERE lv.code = 'a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a1-u5', 'المستشفى', 'The Hospital', '医院', '🏥', 5
FROM levels WHERE code = 'a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 21, 'المفردات — المستشفى', 'Vocabulary — The Hospital', '词汇 — 医院', 'vocabulary', 21, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u5' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 22, 'القواعد والمحادثة — المستشفى', 'Grammar & Conversation — The Hospital', '语法与会话 — 医院', 'grammar', 22, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u5' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 23, 'الاستماع والقراءة — المستشفى', 'Listening & Reading — The Hospital', '听力与阅读 — 医院', 'listening', 23, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u5' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 24, 'الكتابة — المستشفى', 'Writing — The Hospital', '写作 — 医院', 'writing', 24, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u5' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 25, 'المراجعة والاختبار — المستشفى', 'Review & Quiz — The Hospital', '复习与测验 — 医院', 'review', 25, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u5' WHERE lv.code = 'a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a1-u6', 'المواصلات', 'Transport', '交通', '🚕', 6
FROM levels WHERE code = 'a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 26, 'المفردات — المواصلات', 'Vocabulary — Transport', '词汇 — 交通', 'vocabulary', 26, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u6' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 27, 'القواعد والمحادثة — المواصلات', 'Grammar & Conversation — Transport', '语法与会话 — 交通', 'grammar', 27, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u6' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 28, 'الاستماع والقراءة — المواصلات', 'Listening & Reading — Transport', '听力与阅读 — 交通', 'listening', 28, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u6' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 29, 'الكتابة — المواصلات', 'Writing — Transport', '写作 — 交通', 'writing', 29, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u6' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 30, 'المراجعة والاختبار — المواصلات', 'Review & Quiz — Transport', '复习与测验 — 交通', 'review', 30, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u6' WHERE lv.code = 'a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a1-u7', 'الهوايات', 'Hobbies', '爱好', '⚽', 7
FROM levels WHERE code = 'a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 31, 'المفردات — الهوايات', 'Vocabulary — Hobbies', '词汇 — 爱好', 'vocabulary', 31, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u7' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 32, 'القواعد والمحادثة — الهوايات', 'Grammar & Conversation — Hobbies', '语法与会话 — 爱好', 'grammar', 32, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u7' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 33, 'الاستماع والقراءة — الهوايات', 'Listening & Reading — Hobbies', '听力与阅读 — 爱好', 'listening', 33, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u7' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 34, 'الكتابة — الهوايات', 'Writing — Hobbies', '写作 — 爱好', 'writing', 34, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u7' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 35, 'المراجعة والاختبار — الهوايات', 'Review & Quiz — Hobbies', '复习与测验 — 爱好', 'review', 35, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u7' WHERE lv.code = 'a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a1-u8', 'الطقس', 'Weather', '天气', '🌤️', 8
FROM levels WHERE code = 'a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 36, 'المفردات — الطقس', 'Vocabulary — Weather', '词汇 — 天气', 'vocabulary', 36, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u8' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 37, 'القواعد والمحادثة — الطقس', 'Grammar & Conversation — Weather', '语法与会话 — 天气', 'grammar', 37, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u8' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 38, 'الاستماع والقراءة — الطقس', 'Listening & Reading — Weather', '听力与阅读 — 天气', 'listening', 38, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u8' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 39, 'الكتابة — الطقس', 'Writing — Weather', '写作 — 天气', 'writing', 39, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u8' WHERE lv.code = 'a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 40, 'المراجعة والاختبار — الطقس', 'Review & Quiz — Weather', '复习与测验 — 天气', 'review', 40, 25, 15
FROM levels lv JOIN units un ON un.code = 'ar-a1-u8' WHERE lv.code = 'a1';

-- ============ LEVEL a2 ============
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a2-u1', 'السفر', 'Travel', '旅行', '✈️', 1
FROM levels WHERE code = 'a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 1, 'المفردات — السفر', 'Vocabulary — Travel', '词汇 — 旅行', 'vocabulary', 1, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u1' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 2, 'القواعد والمحادثة — السفر', 'Grammar & Conversation — Travel', '语法与会话 — 旅行', 'grammar', 2, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u1' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 3, 'الاستماع والقراءة — السفر', 'Listening & Reading — Travel', '听力与阅读 — 旅行', 'listening', 3, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u1' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 4, 'الكتابة — السفر', 'Writing — Travel', '写作 — 旅行', 'writing', 4, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u1' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 5, 'المراجعة والاختبار — السفر', 'Review & Quiz — Travel', '复习与测验 — 旅行', 'review', 5, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u1' WHERE lv.code = 'a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a2-u2', 'العمل', 'Work', '工作', '💼', 2
FROM levels WHERE code = 'a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 6, 'المفردات — العمل', 'Vocabulary — Work', '词汇 — 工作', 'vocabulary', 6, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u2' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 7, 'القواعد والمحادثة — العمل', 'Grammar & Conversation — Work', '语法与会话 — 工作', 'grammar', 7, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u2' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 8, 'الاستماع والقراءة — العمل', 'Listening & Reading — Work', '听力与阅读 — 工作', 'listening', 8, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u2' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 9, 'الكتابة — العمل', 'Writing — Work', '写作 — 工作', 'writing', 9, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u2' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 10, 'المراجعة والاختبار — العمل', 'Review & Quiz — Work', '复习与测验 — 工作', 'review', 10, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u2' WHERE lv.code = 'a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a2-u3', 'الثقافة', 'Culture', '文化', '🎭', 3
FROM levels WHERE code = 'a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 11, 'المفردات — الثقافة', 'Vocabulary — Culture', '词汇 — 文化', 'vocabulary', 11, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u3' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 12, 'القواعد والمحادثة — الثقافة', 'Grammar & Conversation — Culture', '语法与会话 — 文化', 'grammar', 12, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u3' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 13, 'الاستماع والقراءة — الثقافة', 'Listening & Reading — Culture', '听力与阅读 — 文化', 'listening', 13, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u3' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 14, 'الكتابة — الثقافة', 'Writing — Culture', '写作 — 文化', 'writing', 14, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u3' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 15, 'المراجعة والاختبار — الثقافة', 'Review & Quiz — Culture', '复习与测验 — 文化', 'review', 15, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u3' WHERE lv.code = 'a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a2-u4', 'الفن', 'Art', '艺术', '🎨', 4
FROM levels WHERE code = 'a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 16, 'المفردات — الفن', 'Vocabulary — Art', '词汇 — 艺术', 'vocabulary', 16, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u4' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 17, 'القواعد والمحادثة — الفن', 'Grammar & Conversation — Art', '语法与会话 — 艺术', 'grammar', 17, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u4' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 18, 'الاستماع والقراءة — الفن', 'Listening & Reading — Art', '听力与阅读 — 艺术', 'listening', 18, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u4' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 19, 'الكتابة — الفن', 'Writing — Art', '写作 — 艺术', 'writing', 19, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u4' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 20, 'المراجعة والاختبار — الفن', 'Review & Quiz — Art', '复习与测验 — 艺术', 'review', 20, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u4' WHERE lv.code = 'a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a2-u5', 'الأخبار السهلة', 'Easy News', '简易新闻', '📰', 5
FROM levels WHERE code = 'a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 21, 'المفردات — الأخبار السهلة', 'Vocabulary — Easy News', '词汇 — 简易新闻', 'vocabulary', 21, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u5' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 22, 'القواعد والمحادثة — الأخبار السهلة', 'Grammar & Conversation — Easy News', '语法与会话 — 简易新闻', 'grammar', 22, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u5' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 23, 'الاستماع والقراءة — الأخبار السهلة', 'Listening & Reading — Easy News', '听力与阅读 — 简易新闻', 'listening', 23, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u5' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 24, 'الكتابة — الأخبار السهلة', 'Writing — Easy News', '写作 — 简易新闻', 'writing', 24, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u5' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 25, 'المراجعة والاختبار — الأخبار السهلة', 'Review & Quiz — Easy News', '复习与测验 — 简易新闻', 'review', 25, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u5' WHERE lv.code = 'a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-a2-u6', 'كتابة الرسائل', 'Letter Writing', '书信写作', '✉️', 6
FROM levels WHERE code = 'a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 26, 'المفردات — كتابة الرسائل', 'Vocabulary — Letter Writing', '词汇 — 书信写作', 'vocabulary', 26, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u6' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 27, 'القواعد والمحادثة — كتابة الرسائل', 'Grammar & Conversation — Letter Writing', '语法与会话 — 书信写作', 'grammar', 27, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u6' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 28, 'الاستماع والقراءة — كتابة الرسائل', 'Listening & Reading — Letter Writing', '听力与阅读 — 书信写作', 'listening', 28, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u6' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 29, 'الكتابة — كتابة الرسائل', 'Writing — Letter Writing', '写作 — 书信写作', 'writing', 29, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u6' WHERE lv.code = 'a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 30, 'المراجعة والاختبار — كتابة الرسائل', 'Review & Quiz — Letter Writing', '复习与测验 — 书信写作', 'review', 30, 30, 15
FROM levels lv JOIN units un ON un.code = 'ar-a2-u6' WHERE lv.code = 'a2';

-- ============ LEVEL b1 ============
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-b1-u1', 'النقاش', 'Discussion', '讨论', '💬', 1
FROM levels WHERE code = 'b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 1, 'المفردات — النقاش', 'Vocabulary — Discussion', '词汇 — 讨论', 'vocabulary', 1, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u1' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 2, 'القواعد والمحادثة — النقاش', 'Grammar & Conversation — Discussion', '语法与会话 — 讨论', 'grammar', 2, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u1' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 3, 'الاستماع والقراءة — النقاش', 'Listening & Reading — Discussion', '听力与阅读 — 讨论', 'listening', 3, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u1' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 4, 'الكتابة — النقاش', 'Writing — Discussion', '写作 — 讨论', 'writing', 4, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u1' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 5, 'المراجعة والاختبار — النقاش', 'Review & Quiz — Discussion', '复习与测验 — 讨论', 'review', 5, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u1' WHERE lv.code = 'b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-b1-u2', 'القصص', 'Stories', '故事', '📖', 2
FROM levels WHERE code = 'b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 6, 'المفردات — القصص', 'Vocabulary — Stories', '词汇 — 故事', 'vocabulary', 6, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u2' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 7, 'القواعد والمحادثة — القصص', 'Grammar & Conversation — Stories', '语法与会话 — 故事', 'grammar', 7, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u2' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 8, 'الاستماع والقراءة — القصص', 'Listening & Reading — Stories', '听力与阅读 — 故事', 'listening', 8, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u2' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 9, 'الكتابة — القصص', 'Writing — Stories', '写作 — 故事', 'writing', 9, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u2' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 10, 'المراجعة والاختبار — القصص', 'Review & Quiz — Stories', '复习与测验 — 故事', 'review', 10, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u2' WHERE lv.code = 'b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-b1-u3', 'كتابة الفقرات', 'Paragraph Writing', '段落写作', '📝', 3
FROM levels WHERE code = 'b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 11, 'المفردات — كتابة الفقرات', 'Vocabulary — Paragraph Writing', '词汇 — 段落写作', 'vocabulary', 11, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u3' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 12, 'القواعد والمحادثة — كتابة الفقرات', 'Grammar & Conversation — Paragraph Writing', '语法与会话 — 段落写作', 'grammar', 12, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u3' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 13, 'الاستماع والقراءة — كتابة الفقرات', 'Listening & Reading — Paragraph Writing', '听力与阅读 — 段落写作', 'listening', 13, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u3' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 14, 'الكتابة — كتابة الفقرات', 'Writing — Paragraph Writing', '写作 — 段落写作', 'writing', 14, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u3' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 15, 'المراجعة والاختبار — كتابة الفقرات', 'Review & Quiz — Paragraph Writing', '复习与测验 — 段落写作', 'review', 15, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u3' WHERE lv.code = 'b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-b1-u4', 'الإعلام', 'Media', '媒体', '📡', 4
FROM levels WHERE code = 'b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 16, 'المفردات — الإعلام', 'Vocabulary — Media', '词汇 — 媒体', 'vocabulary', 16, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u4' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 17, 'القواعد والمحادثة — الإعلام', 'Grammar & Conversation — Media', '语法与会话 — 媒体', 'grammar', 17, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u4' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 18, 'الاستماع والقراءة — الإعلام', 'Listening & Reading — Media', '听力与阅读 — 媒体', 'listening', 18, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u4' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 19, 'الكتابة — الإعلام', 'Writing — Media', '写作 — 媒体', 'writing', 19, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u4' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 20, 'المراجعة والاختبار — الإعلام', 'Review & Quiz — Media', '复习与测验 — 媒体', 'review', 20, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u4' WHERE lv.code = 'b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-b1-u5', 'التكنولوجيا', 'Technology', '科技', '💻', 5
FROM levels WHERE code = 'b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 21, 'المفردات — التكنولوجيا', 'Vocabulary — Technology', '词汇 — 科技', 'vocabulary', 21, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u5' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 22, 'القواعد والمحادثة — التكنولوجيا', 'Grammar & Conversation — Technology', '语法与会话 — 科技', 'grammar', 22, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u5' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 23, 'الاستماع والقراءة — التكنولوجيا', 'Listening & Reading — Technology', '听力与阅读 — 科技', 'listening', 23, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u5' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 24, 'الكتابة — التكنولوجيا', 'Writing — Technology', '写作 — 科技', 'writing', 24, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u5' WHERE lv.code = 'b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 25, 'المراجعة والاختبار — التكنولوجيا', 'Review & Quiz — Technology', '复习与测验 — 科技', 'review', 25, 35, 15
FROM levels lv JOIN units un ON un.code = 'ar-b1-u5' WHERE lv.code = 'b1';

-- ============ LEVEL b2 ============
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-b2-u1', 'المقالات', 'Essays', '文章', '📄', 1
FROM levels WHERE code = 'b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 1, 'المفردات — المقالات', 'Vocabulary — Essays', '词汇 — 文章', 'vocabulary', 1, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u1' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 2, 'القواعد والمحادثة — المقالات', 'Grammar & Conversation — Essays', '语法与会话 — 文章', 'grammar', 2, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u1' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 3, 'الاستماع والقراءة — المقالات', 'Listening & Reading — Essays', '听力与阅读 — 文章', 'listening', 3, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u1' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 4, 'الكتابة — المقالات', 'Writing — Essays', '写作 — 文章', 'writing', 4, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u1' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 5, 'المراجعة والاختبار — المقالات', 'Review & Quiz — Essays', '复习与测验 — 文章', 'review', 5, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u1' WHERE lv.code = 'b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-b2-u2', 'الأدب', 'Literature', '文学', '📚', 2
FROM levels WHERE code = 'b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 6, 'المفردات — الأدب', 'Vocabulary — Literature', '词汇 — 文学', 'vocabulary', 6, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u2' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 7, 'القواعد والمحادثة — الأدب', 'Grammar & Conversation — Literature', '语法与会话 — 文学', 'grammar', 7, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u2' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 8, 'الاستماع والقراءة — الأدب', 'Listening & Reading — Literature', '听力与阅读 — 文学', 'listening', 8, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u2' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 9, 'الكتابة — الأدب', 'Writing — Literature', '写作 — 文学', 'writing', 9, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u2' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 10, 'المراجعة والاختبار — الأدب', 'Review & Quiz — Literature', '复习与测验 — 文学', 'review', 10, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u2' WHERE lv.code = 'b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-b2-u3', 'الاقتصاد', 'Economy', '经济', '📈', 3
FROM levels WHERE code = 'b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 11, 'المفردات — الاقتصاد', 'Vocabulary — Economy', '词汇 — 经济', 'vocabulary', 11, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u3' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 12, 'القواعد والمحادثة — الاقتصاد', 'Grammar & Conversation — Economy', '语法与会话 — 经济', 'grammar', 12, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u3' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 13, 'الاستماع والقراءة — الاقتصاد', 'Listening & Reading — Economy', '听力与阅读 — 经济', 'listening', 13, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u3' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 14, 'الكتابة — الاقتصاد', 'Writing — Economy', '写作 — 经济', 'writing', 14, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u3' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 15, 'المراجعة والاختبار — الاقتصاد', 'Review & Quiz — Economy', '复习与测验 — 经济', 'review', 15, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u3' WHERE lv.code = 'b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-b2-u4', 'السياسة', 'Politics', '政治', '🏛️', 4
FROM levels WHERE code = 'b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 16, 'المفردات — السياسة', 'Vocabulary — Politics', '词汇 — 政治', 'vocabulary', 16, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u4' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 17, 'القواعد والمحادثة — السياسة', 'Grammar & Conversation — Politics', '语法与会话 — 政治', 'grammar', 17, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u4' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 18, 'الاستماع والقراءة — السياسة', 'Listening & Reading — Politics', '听力与阅读 — 政治', 'listening', 18, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u4' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 19, 'الكتابة — السياسة', 'Writing — Politics', '写作 — 政治', 'writing', 19, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u4' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 20, 'المراجعة والاختبار — السياسة', 'Review & Quiz — Politics', '复习与测验 — 政治', 'review', 20, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u4' WHERE lv.code = 'b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-b2-u5', 'كتابة التقارير', 'Report Writing', '报告写作', '🗂️', 5
FROM levels WHERE code = 'b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 21, 'المفردات — كتابة التقارير', 'Vocabulary — Report Writing', '词汇 — 报告写作', 'vocabulary', 21, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u5' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 22, 'القواعد والمحادثة — كتابة التقارير', 'Grammar & Conversation — Report Writing', '语法与会话 — 报告写作', 'grammar', 22, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u5' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 23, 'الاستماع والقراءة — كتابة التقارير', 'Listening & Reading — Report Writing', '听力与阅读 — 报告写作', 'listening', 23, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u5' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 24, 'الكتابة — كتابة التقارير', 'Writing — Report Writing', '写作 — 报告写作', 'writing', 24, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u5' WHERE lv.code = 'b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 25, 'المراجعة والاختبار — كتابة التقارير', 'Review & Quiz — Report Writing', '复习与测验 — 报告写作', 'review', 25, 40, 15
FROM levels lv JOIN units un ON un.code = 'ar-b2-u5' WHERE lv.code = 'b2';

-- ============ LEVEL c1 ============
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-c1-u1', 'البلاغة', 'Rhetoric', '修辞', '🎤', 1
FROM levels WHERE code = 'c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 1, 'المفردات — البلاغة', 'Vocabulary — Rhetoric', '词汇 — 修辞', 'vocabulary', 1, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u1' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 2, 'القواعد والمحادثة — البلاغة', 'Grammar & Conversation — Rhetoric', '语法与会话 — 修辞', 'grammar', 2, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u1' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 3, 'الاستماع والقراءة — البلاغة', 'Listening & Reading — Rhetoric', '听力与阅读 — 修辞', 'listening', 3, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u1' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 4, 'الكتابة — البلاغة', 'Writing — Rhetoric', '写作 — 修辞', 'writing', 4, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u1' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 5, 'المراجعة والاختبار — البلاغة', 'Review & Quiz — Rhetoric', '复习与测验 — 修辞', 'review', 5, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u1' WHERE lv.code = 'c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-c1-u2', 'الصحافة', 'Journalism', '新闻', '🗞️', 2
FROM levels WHERE code = 'c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 6, 'المفردات — الصحافة', 'Vocabulary — Journalism', '词汇 — 新闻', 'vocabulary', 6, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u2' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 7, 'القواعد والمحادثة — الصحافة', 'Grammar & Conversation — Journalism', '语法与会话 — 新闻', 'grammar', 7, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u2' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 8, 'الاستماع والقراءة — الصحافة', 'Listening & Reading — Journalism', '听力与阅读 — 新闻', 'listening', 8, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u2' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 9, 'الكتابة — الصحافة', 'Writing — Journalism', '写作 — 新闻', 'writing', 9, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u2' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 10, 'المراجعة والاختبار — الصحافة', 'Review & Quiz — Journalism', '复习与测验 — 新闻', 'review', 10, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u2' WHERE lv.code = 'c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-c1-u3', 'القرآن والشعر (اختياري)', 'Quran & Poetry (optional)', '古兰经与诗歌（选修）', '🕌', 3
FROM levels WHERE code = 'c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 11, 'المفردات — القرآن والشعر (اختياري)', 'Vocabulary — Quran & Poetry (optional)', '词汇 — 古兰经与诗歌（选修）', 'vocabulary', 11, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u3' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 12, 'القواعد والمحادثة — القرآن والشعر (اختياري)', 'Grammar & Conversation — Quran & Poetry (optional)', '语法与会话 — 古兰经与诗歌（选修）', 'grammar', 12, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u3' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 13, 'الاستماع والقراءة — القرآن والشعر (اختياري)', 'Listening & Reading — Quran & Poetry (optional)', '听力与阅读 — 古兰经与诗歌（选修）', 'listening', 13, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u3' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 14, 'الكتابة — القرآن والشعر (اختياري)', 'Writing — Quran & Poetry (optional)', '写作 — 古兰经与诗歌（选修）', 'writing', 14, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u3' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 15, 'المراجعة والاختبار — القرآن والشعر (اختياري)', 'Review & Quiz — Quran & Poetry (optional)', '复习与测验 — 古兰经与诗歌（选修）', 'review', 15, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u3' WHERE lv.code = 'c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-c1-u4', 'الكتابة الأكاديمية', 'Academic Writing', '学术写作', '🎓', 4
FROM levels WHERE code = 'c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 16, 'المفردات — الكتابة الأكاديمية', 'Vocabulary — Academic Writing', '词汇 — 学术写作', 'vocabulary', 16, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u4' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 17, 'القواعد والمحادثة — الكتابة الأكاديمية', 'Grammar & Conversation — Academic Writing', '语法与会话 — 学术写作', 'grammar', 17, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u4' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 18, 'الاستماع والقراءة — الكتابة الأكاديمية', 'Listening & Reading — Academic Writing', '听力与阅读 — 学术写作', 'listening', 18, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u4' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 19, 'الكتابة — الكتابة الأكاديمية', 'Writing — Academic Writing', '写作 — 学术写作', 'writing', 19, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u4' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 20, 'المراجعة والاختبار — الكتابة الأكاديمية', 'Review & Quiz — Academic Writing', '复习与测验 — 学术写作', 'review', 20, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u4' WHERE lv.code = 'c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'ar-c1-u5', 'المناظرات', 'Debates', '辩论', '⚖️', 5
FROM levels WHERE code = 'c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 21, 'المفردات — المناظرات', 'Vocabulary — Debates', '词汇 — 辩论', 'vocabulary', 21, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u5' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 22, 'القواعد والمحادثة — المناظرات', 'Grammar & Conversation — Debates', '语法与会话 — 辩论', 'grammar', 22, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u5' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 23, 'الاستماع والقراءة — المناظرات', 'Listening & Reading — Debates', '听力与阅读 — 辩论', 'listening', 23, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u5' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 24, 'الكتابة — المناظرات', 'Writing — Debates', '写作 — 辩论', 'writing', 24, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u5' WHERE lv.code = 'c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 25, 'المراجعة والاختبار — المناظرات', 'Review & Quiz — Debates', '复习与测验 — 辩论', 'review', 25, 50, 15
FROM levels lv JOIN units un ON un.code = 'ar-c1-u5' WHERE lv.code = 'c1';

-- Update total_lessons counters
UPDATE levels lv SET total_lessons = (SELECT COUNT(*) FROM lessons WHERE level_id = lv.id)
WHERE lv.code IN ('pre-a1', 'a1', 'a2', 'b1', 'b2', 'c1');
