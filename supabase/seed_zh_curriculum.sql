-- ============================================================
-- ANALIA: Chinese Curriculum Seed (Units + Lessons)
-- AUTO-GENERATED from lib/zhCurriculum.ts — do not edit by hand.
-- 63 units · 330 lessons
-- Run AFTER seed_zh_units_schema.sql (or as one combined file).
-- Idempotent: wipes & re-seeds the zh-* levels only.
-- ============================================================

-- Clean previous zh curriculum (cascade removes lessons under these units)
DELETE FROM units WHERE level_id IN (SELECT id FROM levels WHERE code LIKE 'zh-%');


-- ============ LEVEL zh-pre-a1 ============
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-pre-a1-u1', 'أساسيات اللغة', 'Language Basics', '语言基础', '🔤', 1
FROM levels WHERE code = 'zh-pre-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 1, 'ما هي الصينية؟', 'What is Chinese?', '什么是汉语？', 'letters', 1, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u1' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 2, 'نظام Pinyin', 'The Pinyin System', '拼音系统', 'letters', 2, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u1' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 3, 'النغمة الأولى', 'First Tone', '第一声', 'letters', 3, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u1' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 4, 'النغمة الثانية', 'Second Tone', '第二声', 'letters', 4, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u1' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 5, 'النغمة الثالثة', 'Third Tone', '第三声', 'letters', 5, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u1' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 6, 'النغمة الرابعة', 'Fourth Tone', '第四声', 'letters', 6, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u1' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 7, 'النغمة المحايدة', 'Neutral Tone', '轻声', 'letters', 7, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u1' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 8, 'دمج النغمات', 'Combining Tones', '声调组合', 'listening', 8, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u1' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 9, 'ترتيب كتابة الحروف', 'Stroke Order', '笔顺', 'writing', 9, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u1' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 10, 'اختبار الوحدة', 'Unit Test', '单元测验', 'review', 10, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u1' WHERE lv.code = 'zh-pre-a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-pre-a1-u2', 'أول محادثة', 'First Conversation', '第一次对话', '🗣️', 2
FROM levels WHERE code = 'zh-pre-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 11, 'التحية', 'Greetings', '问候', 'conversation', 11, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u2' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 12, 'التعارف', 'Introductions', '自我介绍', 'conversation', 12, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u2' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 13, 'الأرقام', 'Numbers', '数字', 'vocabulary', 13, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u2' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 14, 'العمر', 'Age', '年龄', 'vocabulary', 14, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u2' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 15, 'الجنسية', 'Nationality', '国籍', 'vocabulary', 15, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u2' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 16, 'اللغات', 'Languages', '语言', 'vocabulary', 16, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u2' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 17, 'الوداع', 'Farewells', '告别', 'conversation', 17, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u2' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 18, 'مراجعة', 'Review', '复习', 'review', 18, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u2' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 19, 'قصة قصيرة', 'Short Story', '小故事', 'reading', 19, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u2' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 20, 'اختبار', 'Test', '测验', 'review', 20, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u2' WHERE lv.code = 'zh-pre-a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-pre-a1-u3', 'الحياة اليومية', 'Daily Life', '日常生活', '🏠', 3
FROM levels WHERE code = 'zh-pre-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 21, 'العائلة', 'Family', '家庭', 'vocabulary', 21, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u3' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 22, 'الطعام', 'Food', '食物', 'vocabulary', 22, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u3' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 23, 'الوقت', 'Time', '时间', 'vocabulary', 23, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u3' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 24, 'الأيام', 'Days', '星期', 'vocabulary', 24, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u3' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 25, 'الأشهر', 'Months', '月份', 'vocabulary', 25, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u3' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 26, 'المنزل', 'The Home', '房子', 'vocabulary', 26, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u3' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 27, 'المدرسة', 'School', '学校', 'vocabulary', 27, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u3' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 28, 'مراجعة', 'Review', '复习', 'review', 28, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u3' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 29, 'قراءة', 'Reading', '阅读', 'reading', 29, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u3' WHERE lv.code = 'zh-pre-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 30, 'اختبار', 'Test', '测验', 'review', 30, 20, 15
FROM levels lv JOIN units un ON un.code = 'zh-pre-a1-u3' WHERE lv.code = 'zh-pre-a1';

-- ============ LEVEL zh-a1 ============
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a1-u1', 'الحياة اليومية', 'Daily Life', '日常生活', '🏠', 1
FROM levels WHERE code = 'zh-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 1, 'المفردات والحروف — الحياة اليومية', 'Vocabulary & Characters — Daily Life', '词汇与汉字 — 日常生活', 'vocabulary', 1, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u1' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 2, 'القاعدة والمحادثة — الحياة اليومية', 'Grammar & Conversation — Daily Life', '语法与会话 — 日常生活', 'grammar', 2, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u1' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 3, 'الاستماع والقراءة — الحياة اليومية', 'Listening & Reading — Daily Life', '听力与阅读 — 日常生活', 'listening', 3, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u1' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 4, 'الكتابة والتمارين — الحياة اليومية', 'Writing & Practice — Daily Life', '写作与练习 — 日常生活', 'writing', 4, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u1' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 5, 'المراجعة والاختبار — الحياة اليومية', 'Review & Quiz — Daily Life', '复习与测验 — 日常生活', 'review', 5, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u1' WHERE lv.code = 'zh-a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a1-u2', 'التسوق', 'Shopping', '购物', '🛍️', 2
FROM levels WHERE code = 'zh-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 6, 'المفردات والحروف — التسوق', 'Vocabulary & Characters — Shopping', '词汇与汉字 — 购物', 'vocabulary', 6, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u2' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 7, 'القاعدة والمحادثة — التسوق', 'Grammar & Conversation — Shopping', '语法与会话 — 购物', 'grammar', 7, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u2' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 8, 'الاستماع والقراءة — التسوق', 'Listening & Reading — Shopping', '听力与阅读 — 购物', 'listening', 8, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u2' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 9, 'الكتابة والتمارين — التسوق', 'Writing & Practice — Shopping', '写作与练习 — 购物', 'writing', 9, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u2' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 10, 'المراجعة والاختبار — التسوق', 'Review & Quiz — Shopping', '复习与测验 — 购物', 'review', 10, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u2' WHERE lv.code = 'zh-a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a1-u3', 'المطعم', 'The Restaurant', '餐厅', '🍜', 3
FROM levels WHERE code = 'zh-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 11, 'المفردات والحروف — المطعم', 'Vocabulary & Characters — The Restaurant', '词汇与汉字 — 餐厅', 'vocabulary', 11, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u3' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 12, 'القاعدة والمحادثة — المطعم', 'Grammar & Conversation — The Restaurant', '语法与会话 — 餐厅', 'grammar', 12, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u3' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 13, 'الاستماع والقراءة — المطعم', 'Listening & Reading — The Restaurant', '听力与阅读 — 餐厅', 'listening', 13, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u3' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 14, 'الكتابة والتمارين — المطعم', 'Writing & Practice — The Restaurant', '写作与练习 — 餐厅', 'writing', 14, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u3' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 15, 'المراجعة والاختبار — المطعم', 'Review & Quiz — The Restaurant', '复习与测验 — 餐厅', 'review', 15, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u3' WHERE lv.code = 'zh-a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a1-u4', 'الجامعة', 'University', '大学', '🎓', 4
FROM levels WHERE code = 'zh-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 16, 'المفردات والحروف — الجامعة', 'Vocabulary & Characters — University', '词汇与汉字 — 大学', 'vocabulary', 16, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u4' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 17, 'القاعدة والمحادثة — الجامعة', 'Grammar & Conversation — University', '语法与会话 — 大学', 'grammar', 17, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u4' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 18, 'الاستماع والقراءة — الجامعة', 'Listening & Reading — University', '听力与阅读 — 大学', 'listening', 18, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u4' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 19, 'الكتابة والتمارين — الجامعة', 'Writing & Practice — University', '写作与练习 — 大学', 'writing', 19, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u4' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 20, 'المراجعة والاختبار — الجامعة', 'Review & Quiz — University', '复习与测验 — 大学', 'review', 20, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u4' WHERE lv.code = 'zh-a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a1-u5', 'المواصلات', 'Transport', '交通', '🚌', 5
FROM levels WHERE code = 'zh-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 21, 'المفردات والحروف — المواصلات', 'Vocabulary & Characters — Transport', '词汇与汉字 — 交通', 'vocabulary', 21, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u5' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 22, 'القاعدة والمحادثة — المواصلات', 'Grammar & Conversation — Transport', '语法与会话 — 交通', 'grammar', 22, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u5' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 23, 'الاستماع والقراءة — المواصلات', 'Listening & Reading — Transport', '听力与阅读 — 交通', 'listening', 23, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u5' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 24, 'الكتابة والتمارين — المواصلات', 'Writing & Practice — Transport', '写作与练习 — 交通', 'writing', 24, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u5' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 25, 'المراجعة والاختبار — المواصلات', 'Review & Quiz — Transport', '复习与测验 — 交通', 'review', 25, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u5' WHERE lv.code = 'zh-a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a1-u6', 'الطقس', 'Weather', '天气', '🌦️', 6
FROM levels WHERE code = 'zh-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 26, 'المفردات والحروف — الطقس', 'Vocabulary & Characters — Weather', '词汇与汉字 — 天气', 'vocabulary', 26, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u6' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 27, 'القاعدة والمحادثة — الطقس', 'Grammar & Conversation — Weather', '语法与会话 — 天气', 'grammar', 27, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u6' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 28, 'الاستماع والقراءة — الطقس', 'Listening & Reading — Weather', '听力与阅读 — 天气', 'listening', 28, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u6' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 29, 'الكتابة والتمارين — الطقس', 'Writing & Practice — Weather', '写作与练习 — 天气', 'writing', 29, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u6' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 30, 'المراجعة والاختبار — الطقس', 'Review & Quiz — Weather', '复习与测验 — 天气', 'review', 30, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u6' WHERE lv.code = 'zh-a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a1-u7', 'الهوايات', 'Hobbies', '爱好', '⚽', 7
FROM levels WHERE code = 'zh-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 31, 'المفردات والحروف — الهوايات', 'Vocabulary & Characters — Hobbies', '词汇与汉字 — 爱好', 'vocabulary', 31, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u7' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 32, 'القاعدة والمحادثة — الهوايات', 'Grammar & Conversation — Hobbies', '语法与会话 — 爱好', 'grammar', 32, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u7' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 33, 'الاستماع والقراءة — الهوايات', 'Listening & Reading — Hobbies', '听力与阅读 — 爱好', 'listening', 33, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u7' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 34, 'الكتابة والتمارين — الهوايات', 'Writing & Practice — Hobbies', '写作与练习 — 爱好', 'writing', 34, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u7' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 35, 'المراجعة والاختبار — الهوايات', 'Review & Quiz — Hobbies', '复习与测验 — 爱好', 'review', 35, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u7' WHERE lv.code = 'zh-a1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a1-u8', 'السفر', 'Travel', '旅行', '✈️', 8
FROM levels WHERE code = 'zh-a1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 36, 'المفردات والحروف — السفر', 'Vocabulary & Characters — Travel', '词汇与汉字 — 旅行', 'vocabulary', 36, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u8' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 37, 'القاعدة والمحادثة — السفر', 'Grammar & Conversation — Travel', '语法与会话 — 旅行', 'grammar', 37, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u8' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 38, 'الاستماع والقراءة — السفر', 'Listening & Reading — Travel', '听力与阅读 — 旅行', 'listening', 38, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u8' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 39, 'الكتابة والتمارين — السفر', 'Writing & Practice — Travel', '写作与练习 — 旅行', 'writing', 39, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u8' WHERE lv.code = 'zh-a1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 40, 'المراجعة والاختبار — السفر', 'Review & Quiz — Travel', '复习与测验 — 旅行', 'review', 40, 25, 15
FROM levels lv JOIN units un ON un.code = 'zh-a1-u8' WHERE lv.code = 'zh-a1';

-- ============ LEVEL zh-a2 ============
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a2-u1', 'العمل', 'Work', '工作', '💼', 1
FROM levels WHERE code = 'zh-a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 1, 'المفردات والحروف — العمل', 'Vocabulary & Characters — Work', '词汇与汉字 — 工作', 'vocabulary', 1, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u1' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 2, 'القاعدة والمحادثة — العمل', 'Grammar & Conversation — Work', '语法与会话 — 工作', 'grammar', 2, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u1' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 3, 'الاستماع والقراءة — العمل', 'Listening & Reading — Work', '听力与阅读 — 工作', 'listening', 3, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u1' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 4, 'الكتابة والتمارين — العمل', 'Writing & Practice — Work', '写作与练习 — 工作', 'writing', 4, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u1' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 5, 'المراجعة والاختبار — العمل', 'Review & Quiz — Work', '复习与测验 — 工作', 'review', 5, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u1' WHERE lv.code = 'zh-a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a2-u2', 'الصحة', 'Health', '健康', '🏥', 2
FROM levels WHERE code = 'zh-a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 6, 'المفردات والحروف — الصحة', 'Vocabulary & Characters — Health', '词汇与汉字 — 健康', 'vocabulary', 6, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u2' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 7, 'القاعدة والمحادثة — الصحة', 'Grammar & Conversation — Health', '语法与会话 — 健康', 'grammar', 7, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u2' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 8, 'الاستماع والقراءة — الصحة', 'Listening & Reading — Health', '听力与阅读 — 健康', 'listening', 8, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u2' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 9, 'الكتابة والتمارين — الصحة', 'Writing & Practice — Health', '写作与练习 — 健康', 'writing', 9, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u2' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 10, 'المراجعة والاختبار — الصحة', 'Review & Quiz — Health', '复习与测验 — 健康', 'review', 10, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u2' WHERE lv.code = 'zh-a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a2-u3', 'الفندق', 'The Hotel', '酒店', '🏨', 3
FROM levels WHERE code = 'zh-a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 11, 'المفردات والحروف — الفندق', 'Vocabulary & Characters — The Hotel', '词汇与汉字 — 酒店', 'vocabulary', 11, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u3' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 12, 'القاعدة والمحادثة — الفندق', 'Grammar & Conversation — The Hotel', '语法与会话 — 酒店', 'grammar', 12, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u3' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 13, 'الاستماع والقراءة — الفندق', 'Listening & Reading — The Hotel', '听力与阅读 — 酒店', 'listening', 13, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u3' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 14, 'الكتابة والتمارين — الفندق', 'Writing & Practice — The Hotel', '写作与练习 — 酒店', 'writing', 14, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u3' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 15, 'المراجعة والاختبار — الفندق', 'Review & Quiz — The Hotel', '复习与测验 — 酒店', 'review', 15, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u3' WHERE lv.code = 'zh-a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a2-u4', 'المطار', 'The Airport', '机场', '🛫', 4
FROM levels WHERE code = 'zh-a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 16, 'المفردات والحروف — المطار', 'Vocabulary & Characters — The Airport', '词汇与汉字 — 机场', 'vocabulary', 16, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u4' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 17, 'القاعدة والمحادثة — المطار', 'Grammar & Conversation — The Airport', '语法与会话 — 机场', 'grammar', 17, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u4' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 18, 'الاستماع والقراءة — المطار', 'Listening & Reading — The Airport', '听力与阅读 — 机场', 'listening', 18, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u4' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 19, 'الكتابة والتمارين — المطار', 'Writing & Practice — The Airport', '写作与练习 — 机场', 'writing', 19, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u4' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 20, 'المراجعة والاختبار — المطار', 'Review & Quiz — The Airport', '复习与测验 — 机场', 'review', 20, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u4' WHERE lv.code = 'zh-a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a2-u5', 'المناسبات', 'Occasions', '节日', '🎉', 5
FROM levels WHERE code = 'zh-a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 21, 'المفردات والحروف — المناسبات', 'Vocabulary & Characters — Occasions', '词汇与汉字 — 节日', 'vocabulary', 21, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u5' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 22, 'القاعدة والمحادثة — المناسبات', 'Grammar & Conversation — Occasions', '语法与会话 — 节日', 'grammar', 22, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u5' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 23, 'الاستماع والقراءة — المناسبات', 'Listening & Reading — Occasions', '听力与阅读 — 节日', 'listening', 23, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u5' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 24, 'الكتابة والتمارين — المناسبات', 'Writing & Practice — Occasions', '写作与练习 — 节日', 'writing', 24, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u5' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 25, 'المراجعة والاختبار — المناسبات', 'Review & Quiz — Occasions', '复习与测验 — 节日', 'review', 25, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u5' WHERE lv.code = 'zh-a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a2-u6', 'المدينة', 'The City', '城市', '🏙️', 6
FROM levels WHERE code = 'zh-a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 26, 'المفردات والحروف — المدينة', 'Vocabulary & Characters — The City', '词汇与汉字 — 城市', 'vocabulary', 26, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u6' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 27, 'القاعدة والمحادثة — المدينة', 'Grammar & Conversation — The City', '语法与会话 — 城市', 'grammar', 27, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u6' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 28, 'الاستماع والقراءة — المدينة', 'Listening & Reading — The City', '听力与阅读 — 城市', 'listening', 28, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u6' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 29, 'الكتابة والتمارين — المدينة', 'Writing & Practice — The City', '写作与练习 — 城市', 'writing', 29, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u6' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 30, 'المراجعة والاختبار — المدينة', 'Review & Quiz — The City', '复习与测验 — 城市', 'review', 30, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u6' WHERE lv.code = 'zh-a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a2-u7', 'الإنترنت', 'The Internet', '网络', '🌐', 7
FROM levels WHERE code = 'zh-a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 31, 'المفردات والحروف — الإنترنت', 'Vocabulary & Characters — The Internet', '词汇与汉字 — 网络', 'vocabulary', 31, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u7' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 32, 'القاعدة والمحادثة — الإنترنت', 'Grammar & Conversation — The Internet', '语法与会话 — 网络', 'grammar', 32, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u7' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 33, 'الاستماع والقراءة — الإنترنت', 'Listening & Reading — The Internet', '听力与阅读 — 网络', 'listening', 33, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u7' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 34, 'الكتابة والتمارين — الإنترنت', 'Writing & Practice — The Internet', '写作与练习 — 网络', 'writing', 34, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u7' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 35, 'المراجعة والاختبار — الإنترنت', 'Review & Quiz — The Internet', '复习与测验 — 网络', 'review', 35, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u7' WHERE lv.code = 'zh-a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a2-u8', 'التعليم', 'Education', '教育', '📚', 8
FROM levels WHERE code = 'zh-a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 36, 'المفردات والحروف — التعليم', 'Vocabulary & Characters — Education', '词汇与汉字 — 教育', 'vocabulary', 36, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u8' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 37, 'القاعدة والمحادثة — التعليم', 'Grammar & Conversation — Education', '语法与会话 — 教育', 'grammar', 37, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u8' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 38, 'الاستماع والقراءة — التعليم', 'Listening & Reading — Education', '听力与阅读 — 教育', 'listening', 38, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u8' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 39, 'الكتابة والتمارين — التعليم', 'Writing & Practice — Education', '写作与练习 — 教育', 'writing', 39, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u8' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 40, 'المراجعة والاختبار — التعليم', 'Review & Quiz — Education', '复习与测验 — 教育', 'review', 40, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u8' WHERE lv.code = 'zh-a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a2-u9', 'الثقافة', 'Culture', '文化', '🎭', 9
FROM levels WHERE code = 'zh-a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 41, 'المفردات والحروف — الثقافة', 'Vocabulary & Characters — Culture', '词汇与汉字 — 文化', 'vocabulary', 41, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u9' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 42, 'القاعدة والمحادثة — الثقافة', 'Grammar & Conversation — Culture', '语法与会话 — 文化', 'grammar', 42, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u9' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 43, 'الاستماع والقراءة — الثقافة', 'Listening & Reading — Culture', '听力与阅读 — 文化', 'listening', 43, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u9' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 44, 'الكتابة والتمارين — الثقافة', 'Writing & Practice — Culture', '写作与练习 — 文化', 'writing', 44, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u9' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 45, 'المراجعة والاختبار — الثقافة', 'Review & Quiz — Culture', '复习与测验 — 文化', 'review', 45, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u9' WHERE lv.code = 'zh-a2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-a2-u10', 'مراجعة شاملة', 'Comprehensive Review', '综合复习', '🔁', 10
FROM levels WHERE code = 'zh-a2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 46, 'المفردات والحروف — مراجعة شاملة', 'Vocabulary & Characters — Comprehensive Review', '词汇与汉字 — 综合复习', 'vocabulary', 46, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u10' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 47, 'القاعدة والمحادثة — مراجعة شاملة', 'Grammar & Conversation — Comprehensive Review', '语法与会话 — 综合复习', 'grammar', 47, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u10' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 48, 'الاستماع والقراءة — مراجعة شاملة', 'Listening & Reading — Comprehensive Review', '听力与阅读 — 综合复习', 'listening', 48, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u10' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 49, 'الكتابة والتمارين — مراجعة شاملة', 'Writing & Practice — Comprehensive Review', '写作与练习 — 综合复习', 'writing', 49, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u10' WHERE lv.code = 'zh-a2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 50, 'المراجعة والاختبار — مراجعة شاملة', 'Review & Quiz — Comprehensive Review', '复习与测验 — 综合复习', 'review', 50, 30, 15
FROM levels lv JOIN units un ON un.code = 'zh-a2-u10' WHERE lv.code = 'zh-a2';

-- ============ LEVEL zh-b1 ============
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b1-u1', 'سرد القصص', 'Storytelling', '叙述', '📖', 1
FROM levels WHERE code = 'zh-b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 1, 'المفردات والحروف — سرد القصص', 'Vocabulary & Characters — Storytelling', '词汇与汉字 — 叙述', 'vocabulary', 1, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u1' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 2, 'القاعدة والمحادثة — سرد القصص', 'Grammar & Conversation — Storytelling', '语法与会话 — 叙述', 'grammar', 2, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u1' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 3, 'الاستماع والقراءة — سرد القصص', 'Listening & Reading — Storytelling', '听力与阅读 — 叙述', 'listening', 3, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u1' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 4, 'الكتابة والتمارين — سرد القصص', 'Writing & Practice — Storytelling', '写作与练习 — 叙述', 'writing', 4, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u1' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 5, 'المراجعة والاختبار — سرد القصص', 'Review & Quiz — Storytelling', '复习与测验 — 叙述', 'review', 5, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u1' WHERE lv.code = 'zh-b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b1-u2', 'التعبير عن الرأي', 'Expressing Opinions', '表达观点', '💭', 2
FROM levels WHERE code = 'zh-b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 6, 'المفردات والحروف — التعبير عن الرأي', 'Vocabulary & Characters — Expressing Opinions', '词汇与汉字 — 表达观点', 'vocabulary', 6, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u2' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 7, 'القاعدة والمحادثة — التعبير عن الرأي', 'Grammar & Conversation — Expressing Opinions', '语法与会话 — 表达观点', 'grammar', 7, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u2' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 8, 'الاستماع والقراءة — التعبير عن الرأي', 'Listening & Reading — Expressing Opinions', '听力与阅读 — 表达观点', 'listening', 8, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u2' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 9, 'الكتابة والتمارين — التعبير عن الرأي', 'Writing & Practice — Expressing Opinions', '写作与练习 — 表达观点', 'writing', 9, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u2' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 10, 'المراجعة والاختبار — التعبير عن الرأي', 'Review & Quiz — Expressing Opinions', '复习与测验 — 表达观点', 'review', 10, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u2' WHERE lv.code = 'zh-b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b1-u3', 'الثقافة الصينية', 'Chinese Culture', '中国文化', '🏮', 3
FROM levels WHERE code = 'zh-b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 11, 'المفردات والحروف — الثقافة الصينية', 'Vocabulary & Characters — Chinese Culture', '词汇与汉字 — 中国文化', 'vocabulary', 11, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u3' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 12, 'القاعدة والمحادثة — الثقافة الصينية', 'Grammar & Conversation — Chinese Culture', '语法与会话 — 中国文化', 'grammar', 12, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u3' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 13, 'الاستماع والقراءة — الثقافة الصينية', 'Listening & Reading — Chinese Culture', '听力与阅读 — 中国文化', 'listening', 13, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u3' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 14, 'الكتابة والتمارين — الثقافة الصينية', 'Writing & Practice — Chinese Culture', '写作与练习 — 中国文化', 'writing', 14, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u3' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 15, 'المراجعة والاختبار — الثقافة الصينية', 'Review & Quiz — Chinese Culture', '复习与测验 — 中国文化', 'review', 15, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u3' WHERE lv.code = 'zh-b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b1-u4', 'الوظائف', 'Careers', '职业', '👔', 4
FROM levels WHERE code = 'zh-b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 16, 'المفردات والحروف — الوظائف', 'Vocabulary & Characters — Careers', '词汇与汉字 — 职业', 'vocabulary', 16, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u4' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 17, 'القاعدة والمحادثة — الوظائف', 'Grammar & Conversation — Careers', '语法与会话 — 职业', 'grammar', 17, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u4' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 18, 'الاستماع والقراءة — الوظائف', 'Listening & Reading — Careers', '听力与阅读 — 职业', 'listening', 18, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u4' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 19, 'الكتابة والتمارين — الوظائف', 'Writing & Practice — Careers', '写作与练习 — 职业', 'writing', 19, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u4' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 20, 'المراجعة والاختبار — الوظائف', 'Review & Quiz — Careers', '复习与测验 — 职业', 'review', 20, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u4' WHERE lv.code = 'zh-b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b1-u5', 'التكنولوجيا', 'Technology', '科技', '💻', 5
FROM levels WHERE code = 'zh-b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 21, 'المفردات والحروف — التكنولوجيا', 'Vocabulary & Characters — Technology', '词汇与汉字 — 科技', 'vocabulary', 21, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u5' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 22, 'القاعدة والمحادثة — التكنولوجيا', 'Grammar & Conversation — Technology', '语法与会话 — 科技', 'grammar', 22, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u5' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 23, 'الاستماع والقراءة — التكنولوجيا', 'Listening & Reading — Technology', '听力与阅读 — 科技', 'listening', 23, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u5' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 24, 'الكتابة والتمارين — التكنولوجيا', 'Writing & Practice — Technology', '写作与练习 — 科技', 'writing', 24, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u5' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 25, 'المراجعة والاختبار — التكنولوجيا', 'Review & Quiz — Technology', '复习与测验 — 科技', 'review', 25, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u5' WHERE lv.code = 'zh-b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b1-u6', 'الأخبار', 'The News', '新闻', '📰', 6
FROM levels WHERE code = 'zh-b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 26, 'المفردات والحروف — الأخبار', 'Vocabulary & Characters — The News', '词汇与汉字 — 新闻', 'vocabulary', 26, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u6' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 27, 'القاعدة والمحادثة — الأخبار', 'Grammar & Conversation — The News', '语法与会话 — 新闻', 'grammar', 27, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u6' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 28, 'الاستماع والقراءة — الأخبار', 'Listening & Reading — The News', '听力与阅读 — 新闻', 'listening', 28, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u6' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 29, 'الكتابة والتمارين — الأخبار', 'Writing & Practice — The News', '写作与练习 — 新闻', 'writing', 29, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u6' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 30, 'المراجعة والاختبار — الأخبار', 'Review & Quiz — The News', '复习与测验 — 新闻', 'review', 30, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u6' WHERE lv.code = 'zh-b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b1-u7', 'البيئة', 'The Environment', '环境', '🌱', 7
FROM levels WHERE code = 'zh-b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 31, 'المفردات والحروف — البيئة', 'Vocabulary & Characters — The Environment', '词汇与汉字 — 环境', 'vocabulary', 31, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u7' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 32, 'القاعدة والمحادثة — البيئة', 'Grammar & Conversation — The Environment', '语法与会话 — 环境', 'grammar', 32, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u7' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 33, 'الاستماع والقراءة — البيئة', 'Listening & Reading — The Environment', '听力与阅读 — 环境', 'listening', 33, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u7' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 34, 'الكتابة والتمارين — البيئة', 'Writing & Practice — The Environment', '写作与练习 — 环境', 'writing', 34, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u7' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 35, 'المراجعة والاختبار — البيئة', 'Review & Quiz — The Environment', '复习与测验 — 环境', 'review', 35, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u7' WHERE lv.code = 'zh-b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b1-u8', 'السفر المتقدم', 'Advanced Travel', '深度旅行', '🧭', 8
FROM levels WHERE code = 'zh-b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 36, 'المفردات والحروف — السفر المتقدم', 'Vocabulary & Characters — Advanced Travel', '词汇与汉字 — 深度旅行', 'vocabulary', 36, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u8' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 37, 'القاعدة والمحادثة — السفر المتقدم', 'Grammar & Conversation — Advanced Travel', '语法与会话 — 深度旅行', 'grammar', 37, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u8' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 38, 'الاستماع والقراءة — السفر المتقدم', 'Listening & Reading — Advanced Travel', '听力与阅读 — 深度旅行', 'listening', 38, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u8' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 39, 'الكتابة والتمارين — السفر المتقدم', 'Writing & Practice — Advanced Travel', '写作与练习 — 深度旅行', 'writing', 39, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u8' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 40, 'المراجعة والاختبار — السفر المتقدم', 'Review & Quiz — Advanced Travel', '复习与测验 — 深度旅行', 'review', 40, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u8' WHERE lv.code = 'zh-b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b1-u9', 'العلاقات', 'Relationships', '人际关系', '❤️', 9
FROM levels WHERE code = 'zh-b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 41, 'المفردات والحروف — العلاقات', 'Vocabulary & Characters — Relationships', '词汇与汉字 — 人际关系', 'vocabulary', 41, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u9' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 42, 'القاعدة والمحادثة — العلاقات', 'Grammar & Conversation — Relationships', '语法与会话 — 人际关系', 'grammar', 42, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u9' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 43, 'الاستماع والقراءة — العلاقات', 'Listening & Reading — Relationships', '听力与阅读 — 人际关系', 'listening', 43, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u9' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 44, 'الكتابة والتمارين — العلاقات', 'Writing & Practice — Relationships', '写作与练习 — 人际关系', 'writing', 44, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u9' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 45, 'المراجعة والاختبار — العلاقات', 'Review & Quiz — Relationships', '复习与测验 — 人际关系', 'review', 45, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u9' WHERE lv.code = 'zh-b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b1-u10', 'كتابة الرسائل', 'Letter Writing', '书信写作', '✉️', 10
FROM levels WHERE code = 'zh-b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 46, 'المفردات والحروف — كتابة الرسائل', 'Vocabulary & Characters — Letter Writing', '词汇与汉字 — 书信写作', 'vocabulary', 46, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u10' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 47, 'القاعدة والمحادثة — كتابة الرسائل', 'Grammar & Conversation — Letter Writing', '语法与会话 — 书信写作', 'grammar', 47, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u10' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 48, 'الاستماع والقراءة — كتابة الرسائل', 'Listening & Reading — Letter Writing', '听力与阅读 — 书信写作', 'listening', 48, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u10' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 49, 'الكتابة والتمارين — كتابة الرسائل', 'Writing & Practice — Letter Writing', '写作与练习 — 书信写作', 'writing', 49, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u10' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 50, 'المراجعة والاختبار — كتابة الرسائل', 'Review & Quiz — Letter Writing', '复习与测验 — 书信写作', 'review', 50, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u10' WHERE lv.code = 'zh-b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b1-u11', 'الصحة والرياضة', 'Health & Sport', '健康与运动', '🏃', 11
FROM levels WHERE code = 'zh-b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 51, 'المفردات والحروف — الصحة والرياضة', 'Vocabulary & Characters — Health & Sport', '词汇与汉字 — 健康与运动', 'vocabulary', 51, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u11' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 52, 'القاعدة والمحادثة — الصحة والرياضة', 'Grammar & Conversation — Health & Sport', '语法与会话 — 健康与运动', 'grammar', 52, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u11' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 53, 'الاستماع والقراءة — الصحة والرياضة', 'Listening & Reading — Health & Sport', '听力与阅读 — 健康与运动', 'listening', 53, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u11' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 54, 'الكتابة والتمارين — الصحة والرياضة', 'Writing & Practice — Health & Sport', '写作与练习 — 健康与运动', 'writing', 54, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u11' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 55, 'المراجعة والاختبار — الصحة والرياضة', 'Review & Quiz — Health & Sport', '复习与测验 — 健康与运动', 'review', 55, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u11' WHERE lv.code = 'zh-b1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b1-u12', 'المال والتسوق', 'Money & Shopping', '金钱与购物', '💰', 12
FROM levels WHERE code = 'zh-b1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 56, 'المفردات والحروف — المال والتسوق', 'Vocabulary & Characters — Money & Shopping', '词汇与汉字 — 金钱与购物', 'vocabulary', 56, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u12' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 57, 'القاعدة والمحادثة — المال والتسوق', 'Grammar & Conversation — Money & Shopping', '语法与会话 — 金钱与购物', 'grammar', 57, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u12' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 58, 'الاستماع والقراءة — المال والتسوق', 'Listening & Reading — Money & Shopping', '听力与阅读 — 金钱与购物', 'listening', 58, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u12' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 59, 'الكتابة والتمارين — المال والتسوق', 'Writing & Practice — Money & Shopping', '写作与练习 — 金钱与购物', 'writing', 59, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u12' WHERE lv.code = 'zh-b1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 60, 'المراجعة والاختبار — المال والتسوق', 'Review & Quiz — Money & Shopping', '复习与测验 — 金钱与购物', 'review', 60, 35, 15
FROM levels lv JOIN units un ON un.code = 'zh-b1-u12' WHERE lv.code = 'zh-b1';

-- ============ LEVEL zh-b2 ============
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u1', 'الاقتصاد', 'The Economy', '经济', '📈', 1
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 1, 'المفردات والحروف — الاقتصاد', 'Vocabulary & Characters — The Economy', '词汇与汉字 — 经济', 'vocabulary', 1, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u1' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 2, 'القاعدة والمحادثة — الاقتصاد', 'Grammar & Conversation — The Economy', '语法与会话 — 经济', 'grammar', 2, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u1' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 3, 'الاستماع والقراءة — الاقتصاد', 'Listening & Reading — The Economy', '听力与阅读 — 经济', 'listening', 3, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u1' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 4, 'الكتابة والتمارين — الاقتصاد', 'Writing & Practice — The Economy', '写作与练习 — 经济', 'writing', 4, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u1' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 5, 'المراجعة والاختبار — الاقتصاد', 'Review & Quiz — The Economy', '复习与测验 — 经济', 'review', 5, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u1' WHERE lv.code = 'zh-b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u2', 'السياسة', 'Politics', '政治', '🏛️', 2
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 6, 'المفردات والحروف — السياسة', 'Vocabulary & Characters — Politics', '词汇与汉字 — 政治', 'vocabulary', 6, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u2' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 7, 'القاعدة والمحادثة — السياسة', 'Grammar & Conversation — Politics', '语法与会话 — 政治', 'grammar', 7, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u2' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 8, 'الاستماع والقراءة — السياسة', 'Listening & Reading — Politics', '听力与阅读 — 政治', 'listening', 8, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u2' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 9, 'الكتابة والتمارين — السياسة', 'Writing & Practice — Politics', '写作与练习 — 政治', 'writing', 9, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u2' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 10, 'المراجعة والاختبار — السياسة', 'Review & Quiz — Politics', '复习与测验 — 政治', 'review', 10, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u2' WHERE lv.code = 'zh-b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u3', 'الأعمال', 'Business', '商务', '🤝', 3
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 11, 'المفردات والحروف — الأعمال', 'Vocabulary & Characters — Business', '词汇与汉字 — 商务', 'vocabulary', 11, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u3' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 12, 'القاعدة والمحادثة — الأعمال', 'Grammar & Conversation — Business', '语法与会话 — 商务', 'grammar', 12, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u3' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 13, 'الاستماع والقراءة — الأعمال', 'Listening & Reading — Business', '听力与阅读 — 商务', 'listening', 13, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u3' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 14, 'الكتابة والتمارين — الأعمال', 'Writing & Practice — Business', '写作与练习 — 商务', 'writing', 14, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u3' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 15, 'المراجعة والاختبار — الأعمال', 'Review & Quiz — Business', '复习与测验 — 商务', 'review', 15, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u3' WHERE lv.code = 'zh-b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u4', 'الإعلام', 'Media', '媒体', '📡', 4
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 16, 'المفردات والحروف — الإعلام', 'Vocabulary & Characters — Media', '词汇与汉字 — 媒体', 'vocabulary', 16, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u4' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 17, 'القاعدة والمحادثة — الإعلام', 'Grammar & Conversation — Media', '语法与会话 — 媒体', 'grammar', 17, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u4' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 18, 'الاستماع والقراءة — الإعلام', 'Listening & Reading — Media', '听力与阅读 — 媒体', 'listening', 18, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u4' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 19, 'الكتابة والتمارين — الإعلام', 'Writing & Practice — Media', '写作与练习 — 媒体', 'writing', 19, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u4' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 20, 'المراجعة والاختبار — الإعلام', 'Review & Quiz — Media', '复习与测验 — 媒体', 'review', 20, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u4' WHERE lv.code = 'zh-b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u5', 'الصحة', 'Health', '医疗', '🩺', 5
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 21, 'المفردات والحروف — الصحة', 'Vocabulary & Characters — Health', '词汇与汉字 — 医疗', 'vocabulary', 21, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u5' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 22, 'القاعدة والمحادثة — الصحة', 'Grammar & Conversation — Health', '语法与会话 — 医疗', 'grammar', 22, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u5' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 23, 'الاستماع والقراءة — الصحة', 'Listening & Reading — Health', '听力与阅读 — 医疗', 'listening', 23, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u5' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 24, 'الكتابة والتمارين — الصحة', 'Writing & Practice — Health', '写作与练习 — 医疗', 'writing', 24, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u5' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 25, 'المراجعة والاختبار — الصحة', 'Review & Quiz — Health', '复习与测验 — 医疗', 'review', 25, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u5' WHERE lv.code = 'zh-b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u6', 'الجامعات', 'Universities', '高等教育', '🎓', 6
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 26, 'المفردات والحروف — الجامعات', 'Vocabulary & Characters — Universities', '词汇与汉字 — 高等教育', 'vocabulary', 26, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u6' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 27, 'القاعدة والمحادثة — الجامعات', 'Grammar & Conversation — Universities', '语法与会话 — 高等教育', 'grammar', 27, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u6' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 28, 'الاستماع والقراءة — الجامعات', 'Listening & Reading — Universities', '听力与阅读 — 高等教育', 'listening', 28, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u6' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 29, 'الكتابة والتمارين — الجامعات', 'Writing & Practice — Universities', '写作与练习 — 高等教育', 'writing', 29, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u6' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 30, 'المراجعة والاختبار — الجامعات', 'Review & Quiz — Universities', '复习与测验 — 高等教育', 'review', 30, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u6' WHERE lv.code = 'zh-b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u7', 'النقاش', 'Debate', '辩论', '⚖️', 7
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 31, 'المفردات والحروف — النقاش', 'Vocabulary & Characters — Debate', '词汇与汉字 — 辩论', 'vocabulary', 31, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u7' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 32, 'القاعدة والمحادثة — النقاش', 'Grammar & Conversation — Debate', '语法与会话 — 辩论', 'grammar', 32, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u7' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 33, 'الاستماع والقراءة — النقاش', 'Listening & Reading — Debate', '听力与阅读 — 辩论', 'listening', 33, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u7' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 34, 'الكتابة والتمارين — النقاش', 'Writing & Practice — Debate', '写作与练习 — 辩论', 'writing', 34, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u7' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 35, 'المراجعة والاختبار — النقاش', 'Review & Quiz — Debate', '复习与测验 — 辩论', 'review', 35, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u7' WHERE lv.code = 'zh-b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u8', 'المقالات', 'Essays', '文章', '📝', 8
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 36, 'المفردات والحروف — المقالات', 'Vocabulary & Characters — Essays', '词汇与汉字 — 文章', 'vocabulary', 36, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u8' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 37, 'القاعدة والمحادثة — المقالات', 'Grammar & Conversation — Essays', '语法与会话 — 文章', 'grammar', 37, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u8' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 38, 'الاستماع والقراءة — المقالات', 'Listening & Reading — Essays', '听力与阅读 — 文章', 'listening', 38, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u8' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 39, 'الكتابة والتمارين — المقالات', 'Writing & Practice — Essays', '写作与练习 — 文章', 'writing', 39, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u8' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 40, 'المراجعة والاختبار — المقالات', 'Review & Quiz — Essays', '复习与测验 — 文章', 'review', 40, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u8' WHERE lv.code = 'zh-b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u9', 'الأفلام', 'Film', '电影', '🎬', 9
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 41, 'المفردات والحروف — الأفلام', 'Vocabulary & Characters — Film', '词汇与汉字 — 电影', 'vocabulary', 41, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u9' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 42, 'القاعدة والمحادثة — الأفلام', 'Grammar & Conversation — Film', '语法与会话 — 电影', 'grammar', 42, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u9' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 43, 'الاستماع والقراءة — الأفلام', 'Listening & Reading — Film', '听力与阅读 — 电影', 'listening', 43, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u9' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 44, 'الكتابة والتمارين — الأفلام', 'Writing & Practice — Film', '写作与练习 — 电影', 'writing', 44, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u9' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 45, 'المراجعة والاختبار — الأفلام', 'Review & Quiz — Film', '复习与测验 — 电影', 'review', 45, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u9' WHERE lv.code = 'zh-b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u10', 'الأدب', 'Literature', '文学', '📚', 10
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 46, 'المفردات والحروف — الأدب', 'Vocabulary & Characters — Literature', '词汇与汉字 — 文学', 'vocabulary', 46, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u10' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 47, 'القاعدة والمحادثة — الأدب', 'Grammar & Conversation — Literature', '语法与会话 — 文学', 'grammar', 47, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u10' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 48, 'الاستماع والقراءة — الأدب', 'Listening & Reading — Literature', '听力与阅读 — 文学', 'listening', 48, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u10' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 49, 'الكتابة والتمارين — الأدب', 'Writing & Practice — Literature', '写作与练习 — 文学', 'writing', 49, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u10' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 50, 'المراجعة والاختبار — الأدب', 'Review & Quiz — Literature', '复习与测验 — 文学', 'review', 50, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u10' WHERE lv.code = 'zh-b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u11', 'العلوم', 'Science', '科学', '🔬', 11
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 51, 'المفردات والحروف — العلوم', 'Vocabulary & Characters — Science', '词汇与汉字 — 科学', 'vocabulary', 51, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u11' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 52, 'القاعدة والمحادثة — العلوم', 'Grammar & Conversation — Science', '语法与会话 — 科学', 'grammar', 52, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u11' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 53, 'الاستماع والقراءة — العلوم', 'Listening & Reading — Science', '听力与阅读 — 科学', 'listening', 53, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u11' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 54, 'الكتابة والتمارين — العلوم', 'Writing & Practice — Science', '写作与练习 — 科学', 'writing', 54, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u11' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 55, 'المراجعة والاختبار — العلوم', 'Review & Quiz — Science', '复习与测验 — 科学', 'review', 55, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u11' WHERE lv.code = 'zh-b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u12', 'التاريخ', 'History', '历史', '🏺', 12
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 56, 'المفردات والحروف — التاريخ', 'Vocabulary & Characters — History', '词汇与汉字 — 历史', 'vocabulary', 56, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u12' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 57, 'القاعدة والمحادثة — التاريخ', 'Grammar & Conversation — History', '语法与会话 — 历史', 'grammar', 57, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u12' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 58, 'الاستماع والقراءة — التاريخ', 'Listening & Reading — History', '听力与阅读 — 历史', 'listening', 58, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u12' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 59, 'الكتابة والتمارين — التاريخ', 'Writing & Practice — History', '写作与练习 — 历史', 'writing', 59, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u12' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 60, 'المراجعة والاختبار — التاريخ', 'Review & Quiz — History', '复习与测验 — 历史', 'review', 60, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u12' WHERE lv.code = 'zh-b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u13', 'الفنون', 'The Arts', '艺术', '🎨', 13
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 61, 'المفردات والحروف — الفنون', 'Vocabulary & Characters — The Arts', '词汇与汉字 — 艺术', 'vocabulary', 61, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u13' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 62, 'القاعدة والمحادثة — الفنون', 'Grammar & Conversation — The Arts', '语法与会话 — 艺术', 'grammar', 62, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u13' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 63, 'الاستماع والقراءة — الفنون', 'Listening & Reading — The Arts', '听力与阅读 — 艺术', 'listening', 63, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u13' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 64, 'الكتابة والتمارين — الفنون', 'Writing & Practice — The Arts', '写作与练习 — 艺术', 'writing', 64, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u13' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 65, 'المراجعة والاختبار — الفنون', 'Review & Quiz — The Arts', '复习与测验 — 艺术', 'review', 65, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u13' WHERE lv.code = 'zh-b2';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-b2-u14', 'القانون', 'Law', '法律', '📜', 14
FROM levels WHERE code = 'zh-b2'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 66, 'المفردات والحروف — القانون', 'Vocabulary & Characters — Law', '词汇与汉字 — 法律', 'vocabulary', 66, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u14' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 67, 'القاعدة والمحادثة — القانون', 'Grammar & Conversation — Law', '语法与会话 — 法律', 'grammar', 67, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u14' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 68, 'الاستماع والقراءة — القانون', 'Listening & Reading — Law', '听力与阅读 — 法律', 'listening', 68, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u14' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 69, 'الكتابة والتمارين — القانون', 'Writing & Practice — Law', '写作与练习 — 法律', 'writing', 69, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u14' WHERE lv.code = 'zh-b2';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 70, 'المراجعة والاختبار — القانون', 'Review & Quiz — Law', '复习与测验 — 法律', 'review', 70, 40, 15
FROM levels lv JOIN units un ON un.code = 'zh-b2-u14' WHERE lv.code = 'zh-b2';

-- ============ LEVEL zh-c1 ============
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u1', 'الأدب', 'Literature', '文学', '📚', 1
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 1, 'المفردات والحروف — الأدب', 'Vocabulary & Characters — Literature', '词汇与汉字 — 文学', 'vocabulary', 1, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u1' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 2, 'القاعدة والمحادثة — الأدب', 'Grammar & Conversation — Literature', '语法与会话 — 文学', 'grammar', 2, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u1' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 3, 'الاستماع والقراءة — الأدب', 'Listening & Reading — Literature', '听力与阅读 — 文学', 'listening', 3, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u1' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 4, 'الكتابة والتمارين — الأدب', 'Writing & Practice — Literature', '写作与练习 — 文学', 'writing', 4, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u1' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 5, 'المراجعة والاختبار — الأدب', 'Review & Quiz — Literature', '复习与测验 — 文学', 'review', 5, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u1' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u2', 'التاريخ', 'History', '历史', '🏺', 2
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 6, 'المفردات والحروف — التاريخ', 'Vocabulary & Characters — History', '词汇与汉字 — 历史', 'vocabulary', 6, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u2' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 7, 'القاعدة والمحادثة — التاريخ', 'Grammar & Conversation — History', '语法与会话 — 历史', 'grammar', 7, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u2' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 8, 'الاستماع والقراءة — التاريخ', 'Listening & Reading — History', '听力与阅读 — 历史', 'listening', 8, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u2' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 9, 'الكتابة والتمارين — التاريخ', 'Writing & Practice — History', '写作与练习 — 历史', 'writing', 9, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u2' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 10, 'المراجعة والاختبار — التاريخ', 'Review & Quiz — History', '复习与测验 — 历史', 'review', 10, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u2' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u3', 'الفلسفة', 'Philosophy', '哲学', '🧠', 3
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 11, 'المفردات والحروف — الفلسفة', 'Vocabulary & Characters — Philosophy', '词汇与汉字 — 哲学', 'vocabulary', 11, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u3' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 12, 'القاعدة والمحادثة — الفلسفة', 'Grammar & Conversation — Philosophy', '语法与会话 — 哲学', 'grammar', 12, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u3' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 13, 'الاستماع والقراءة — الفلسفة', 'Listening & Reading — Philosophy', '听力与阅读 — 哲学', 'listening', 13, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u3' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 14, 'الكتابة والتمارين — الفلسفة', 'Writing & Practice — Philosophy', '写作与练习 — 哲学', 'writing', 14, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u3' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 15, 'المراجعة والاختبار — الفلسفة', 'Review & Quiz — Philosophy', '复习与测验 — 哲学', 'review', 15, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u3' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u4', 'البحث العلمي', 'Scientific Research', '科学研究', '🔬', 4
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 16, 'المفردات والحروف — البحث العلمي', 'Vocabulary & Characters — Scientific Research', '词汇与汉字 — 科学研究', 'vocabulary', 16, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u4' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 17, 'القاعدة والمحادثة — البحث العلمي', 'Grammar & Conversation — Scientific Research', '语法与会话 — 科学研究', 'grammar', 17, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u4' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 18, 'الاستماع والقراءة — البحث العلمي', 'Listening & Reading — Scientific Research', '听力与阅读 — 科学研究', 'listening', 18, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u4' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 19, 'الكتابة والتمارين — البحث العلمي', 'Writing & Practice — Scientific Research', '写作与练习 — 科学研究', 'writing', 19, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u4' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 20, 'المراجعة والاختبار — البحث العلمي', 'Review & Quiz — Scientific Research', '复习与测验 — 科学研究', 'review', 20, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u4' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u5', 'العروض التقديمية', 'Presentations', '演讲', '📊', 5
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 21, 'المفردات والحروف — العروض التقديمية', 'Vocabulary & Characters — Presentations', '词汇与汉字 — 演讲', 'vocabulary', 21, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u5' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 22, 'القاعدة والمحادثة — العروض التقديمية', 'Grammar & Conversation — Presentations', '语法与会话 — 演讲', 'grammar', 22, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u5' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 23, 'الاستماع والقراءة — العروض التقديمية', 'Listening & Reading — Presentations', '听力与阅读 — 演讲', 'listening', 23, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u5' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 24, 'الكتابة والتمارين — العروض التقديمية', 'Writing & Practice — Presentations', '写作与练习 — 演讲', 'writing', 24, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u5' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 25, 'المراجعة والاختبار — العروض التقديمية', 'Review & Quiz — Presentations', '复习与测验 — 演讲', 'review', 25, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u5' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u6', 'الترجمة', 'Translation', '翻译', '🔄', 6
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 26, 'المفردات والحروف — الترجمة', 'Vocabulary & Characters — Translation', '词汇与汉字 — 翻译', 'vocabulary', 26, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u6' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 27, 'القاعدة والمحادثة — الترجمة', 'Grammar & Conversation — Translation', '语法与会话 — 翻译', 'grammar', 27, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u6' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 28, 'الاستماع والقراءة — الترجمة', 'Listening & Reading — Translation', '听力与阅读 — 翻译', 'listening', 28, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u6' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 29, 'الكتابة والتمارين — الترجمة', 'Writing & Practice — Translation', '写作与练习 — 翻译', 'writing', 29, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u6' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 30, 'المراجعة والاختبار — الترجمة', 'Review & Quiz — Translation', '复习与测验 — 翻译', 'review', 30, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u6' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u7', 'المناظرات', 'Debates', '辩论', '⚖️', 7
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 31, 'المفردات والحروف — المناظرات', 'Vocabulary & Characters — Debates', '词汇与汉字 — 辩论', 'vocabulary', 31, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u7' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 32, 'القاعدة والمحادثة — المناظرات', 'Grammar & Conversation — Debates', '语法与会话 — 辩论', 'grammar', 32, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u7' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 33, 'الاستماع والقراءة — المناظرات', 'Listening & Reading — Debates', '听力与阅读 — 辩论', 'listening', 33, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u7' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 34, 'الكتابة والتمارين — المناظرات', 'Writing & Practice — Debates', '写作与练习 — 辩论', 'writing', 34, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u7' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 35, 'المراجعة والاختبار — المناظرات', 'Review & Quiz — Debates', '复习与测验 — 辩论', 'review', 35, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u7' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u8', 'كتابة المقالات', 'Essay Writing', '论文写作', '✍️', 8
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 36, 'المفردات والحروف — كتابة المقالات', 'Vocabulary & Characters — Essay Writing', '词汇与汉字 — 论文写作', 'vocabulary', 36, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u8' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 37, 'القاعدة والمحادثة — كتابة المقالات', 'Grammar & Conversation — Essay Writing', '语法与会话 — 论文写作', 'grammar', 37, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u8' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 38, 'الاستماع والقراءة — كتابة المقالات', 'Listening & Reading — Essay Writing', '听力与阅读 — 论文写作', 'listening', 38, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u8' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 39, 'الكتابة والتمارين — كتابة المقالات', 'Writing & Practice — Essay Writing', '写作与练习 — 论文写作', 'writing', 39, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u8' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 40, 'المراجعة والاختبار — كتابة المقالات', 'Review & Quiz — Essay Writing', '复习与测验 — 论文写作', 'review', 40, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u8' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u9', 'الصينية الأكاديمية', 'Academic Chinese', '学术汉语', '🎓', 9
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 41, 'المفردات والحروف — الصينية الأكاديمية', 'Vocabulary & Characters — Academic Chinese', '词汇与汉字 — 学术汉语', 'vocabulary', 41, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u9' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 42, 'القاعدة والمحادثة — الصينية الأكاديمية', 'Grammar & Conversation — Academic Chinese', '语法与会话 — 学术汉语', 'grammar', 42, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u9' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 43, 'الاستماع والقراءة — الصينية الأكاديمية', 'Listening & Reading — Academic Chinese', '听力与阅读 — 学术汉语', 'listening', 43, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u9' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 44, 'الكتابة والتمارين — الصينية الأكاديمية', 'Writing & Practice — Academic Chinese', '写作与练习 — 学术汉语', 'writing', 44, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u9' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 45, 'المراجعة والاختبار — الصينية الأكاديمية', 'Review & Quiz — Academic Chinese', '复习与测验 — 学术汉语', 'review', 45, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u9' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u10', 'مشروع التخرج', 'Capstone Project', '毕业项目', '🏆', 10
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 46, 'المفردات والحروف — مشروع التخرج', 'Vocabulary & Characters — Capstone Project', '词汇与汉字 — 毕业项目', 'vocabulary', 46, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u10' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 47, 'القاعدة والمحادثة — مشروع التخرج', 'Grammar & Conversation — Capstone Project', '语法与会话 — 毕业项目', 'grammar', 47, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u10' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 48, 'الاستماع والقراءة — مشروع التخرج', 'Listening & Reading — Capstone Project', '听力与阅读 — 毕业项目', 'listening', 48, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u10' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 49, 'الكتابة والتمارين — مشروع التخرج', 'Writing & Practice — Capstone Project', '写作与练习 — 毕业项目', 'writing', 49, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u10' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 50, 'المراجعة والاختبار — مشروع التخرج', 'Review & Quiz — Capstone Project', '复习与测验 — 毕业项目', 'review', 50, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u10' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u11', 'الاقتصاد المتقدم', 'Advanced Economics', '高级经济', '📈', 11
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 51, 'المفردات والحروف — الاقتصاد المتقدم', 'Vocabulary & Characters — Advanced Economics', '词汇与汉字 — 高级经济', 'vocabulary', 51, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u11' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 52, 'القاعدة والمحادثة — الاقتصاد المتقدم', 'Grammar & Conversation — Advanced Economics', '语法与会话 — 高级经济', 'grammar', 52, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u11' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 53, 'الاستماع والقراءة — الاقتصاد المتقدم', 'Listening & Reading — Advanced Economics', '听力与阅读 — 高级经济', 'listening', 53, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u11' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 54, 'الكتابة والتمارين — الاقتصاد المتقدم', 'Writing & Practice — Advanced Economics', '写作与练习 — 高级经济', 'writing', 54, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u11' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 55, 'المراجعة والاختبار — الاقتصاد المتقدم', 'Review & Quiz — Advanced Economics', '复习与测验 — 高级经济', 'review', 55, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u11' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u12', 'العلاقات الدولية', 'International Relations', '国际关系', '🌍', 12
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 56, 'المفردات والحروف — العلاقات الدولية', 'Vocabulary & Characters — International Relations', '词汇与汉字 — 国际关系', 'vocabulary', 56, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u12' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 57, 'القاعدة والمحادثة — العلاقات الدولية', 'Grammar & Conversation — International Relations', '语法与会话 — 国际关系', 'grammar', 57, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u12' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 58, 'الاستماع والقراءة — العلاقات الدولية', 'Listening & Reading — International Relations', '听力与阅读 — 国际关系', 'listening', 58, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u12' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 59, 'الكتابة والتمارين — العلاقات الدولية', 'Writing & Practice — International Relations', '写作与练习 — 国际关系', 'writing', 59, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u12' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 60, 'المراجعة والاختبار — العلاقات الدولية', 'Review & Quiz — International Relations', '复习与测验 — 国际关系', 'review', 60, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u12' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u13', 'الإعلام والصحافة', 'Media & Journalism', '媒体与新闻', '📰', 13
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 61, 'المفردات والحروف — الإعلام والصحافة', 'Vocabulary & Characters — Media & Journalism', '词汇与汉字 — 媒体与新闻', 'vocabulary', 61, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u13' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 62, 'القاعدة والمحادثة — الإعلام والصحافة', 'Grammar & Conversation — Media & Journalism', '语法与会话 — 媒体与新闻', 'grammar', 62, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u13' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 63, 'الاستماع والقراءة — الإعلام والصحافة', 'Listening & Reading — Media & Journalism', '听力与阅读 — 媒体与新闻', 'listening', 63, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u13' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 64, 'الكتابة والتمارين — الإعلام والصحافة', 'Writing & Practice — Media & Journalism', '写作与练习 — 媒体与新闻', 'writing', 64, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u13' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 65, 'المراجعة والاختبار — الإعلام والصحافة', 'Review & Quiz — Media & Journalism', '复习与测验 — 媒体与新闻', 'review', 65, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u13' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u14', 'التكنولوجيا والابتكار', 'Tech & Innovation', '科技与创新', '🚀', 14
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 66, 'المفردات والحروف — التكنولوجيا والابتكار', 'Vocabulary & Characters — Tech & Innovation', '词汇与汉字 — 科技与创新', 'vocabulary', 66, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u14' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 67, 'القاعدة والمحادثة — التكنولوجيا والابتكار', 'Grammar & Conversation — Tech & Innovation', '语法与会话 — 科技与创新', 'grammar', 67, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u14' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 68, 'الاستماع والقراءة — التكنولوجيا والابتكار', 'Listening & Reading — Tech & Innovation', '听力与阅读 — 科技与创新', 'listening', 68, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u14' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 69, 'الكتابة والتمارين — التكنولوجيا والابتكار', 'Writing & Practice — Tech & Innovation', '写作与练习 — 科技与创新', 'writing', 69, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u14' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 70, 'المراجعة والاختبار — التكنولوجيا والابتكار', 'Review & Quiz — Tech & Innovation', '复习与测验 — 科技与创新', 'review', 70, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u14' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u15', 'الثقافة المعاصرة', 'Contemporary Culture', '当代文化', '🎭', 15
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 71, 'المفردات والحروف — الثقافة المعاصرة', 'Vocabulary & Characters — Contemporary Culture', '词汇与汉字 — 当代文化', 'vocabulary', 71, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u15' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 72, 'القاعدة والمحادثة — الثقافة المعاصرة', 'Grammar & Conversation — Contemporary Culture', '语法与会话 — 当代文化', 'grammar', 72, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u15' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 73, 'الاستماع والقراءة — الثقافة المعاصرة', 'Listening & Reading — Contemporary Culture', '听力与阅读 — 当代文化', 'listening', 73, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u15' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 74, 'الكتابة والتمارين — الثقافة المعاصرة', 'Writing & Practice — Contemporary Culture', '写作与练习 — 当代文化', 'writing', 74, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u15' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 75, 'المراجعة والاختبار — الثقافة المعاصرة', 'Review & Quiz — Contemporary Culture', '复习与测验 — 当代文化', 'review', 75, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u15' WHERE lv.code = 'zh-c1';
INSERT INTO units (level_id, code, title_ar, title_en, title_zh, icon_emoji, order_index)
SELECT id, 'zh-c1-u16', 'الخطابة', 'Rhetoric', '修辞', '🎤', 16
FROM levels WHERE code = 'zh-c1'
ON CONFLICT (code) DO UPDATE SET title_ar=EXCLUDED.title_ar, title_en=EXCLUDED.title_en, title_zh=EXCLUDED.title_zh, icon_emoji=EXCLUDED.icon_emoji, order_index=EXCLUDED.order_index;
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 76, 'المفردات والحروف — الخطابة', 'Vocabulary & Characters — Rhetoric', '词汇与汉字 — 修辞', 'vocabulary', 76, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u16' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 77, 'القاعدة والمحادثة — الخطابة', 'Grammar & Conversation — Rhetoric', '语法与会话 — 修辞', 'grammar', 77, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u16' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 78, 'الاستماع والقراءة — الخطابة', 'Listening & Reading — Rhetoric', '听力与阅读 — 修辞', 'listening', 78, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u16' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 79, 'الكتابة والتمارين — الخطابة', 'Writing & Practice — Rhetoric', '写作与练习 — 修辞', 'writing', 79, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u16' WHERE lv.code = 'zh-c1';
INSERT INTO lessons (level_id, unit_id, day_number, title_ar, title_en, title_zh, lesson_type, order_index, xp_reward, estimated_minutes)
SELECT lv.id, un.id, 80, 'المراجعة والاختبار — الخطابة', 'Review & Quiz — Rhetoric', '复习与测验 — 修辞', 'review', 80, 50, 15
FROM levels lv JOIN units un ON un.code = 'zh-c1-u16' WHERE lv.code = 'zh-c1';

-- Update total_lessons counters per level
UPDATE levels lv SET total_lessons = (SELECT COUNT(*) FROM lessons WHERE level_id = lv.id)
WHERE lv.code LIKE 'zh-%';
