// ============================================================
// CHINESE PATH — module boundary (Arabic speakers learning Mandarin)
// Everything Chinese-specific is re-exported here so the Chinese and
// Arabic paths stay decoupled: edit the Chinese side without touching
// the Arabic files (arabicAlphabet, preA1Content, a1Content, ...).
//
// Files owned by the Chinese path:
//   lib/zhCurriculum.ts            — levels → units → lessons structure
//   lib/hskContent.ts              — vocabulary banks + pinyin reference
//   lib/chinese/placementTest.ts   — Chinese placement questions/logic
//   components/lesson/ZhLessonViewer.tsx        — 14-section lesson UI
//   app/[locale]/placement-test/ChinesePlacementTestClient.tsx
//   app/[locale]/sounds/ChineseSoundsClient.tsx — pinyin pronunciation
//
// Level codes:  zh-pre-a1, zh-a1, zh-a2, zh-b1, zh-b2, zh-c1
// Direction flag on profiles.learning_direction === 'ar_learns_zh'
// ============================================================

export { ZH_CURRICULUM, ZH_TOTALS } from '@/lib/zhCurriculum'
export type { CurriculumLevel, CurriculumUnit, CurriculumLesson } from '@/lib/zhCurriculum'

export {
  PINYIN_INITIALS, PINYIN_FINALS, TONE_GUIDE,
  HSK1_GREETINGS, HSK1_PRONOUNS, HSK1_NUMBERS, HSK1_FAMILY, HSK1_FOOD,
} from '@/lib/hskContent'
export type { HskItem } from '@/lib/hskContent'

export { CHINESE_PLACEMENT_QUESTIONS, getChineseLevel } from '@/lib/chinese/placementTest'
export type { ZhPlacementQuestion, ZhLevelResult } from '@/lib/chinese/placementTest'

export const ZH_DIRECTION = 'ar_learns_zh' as const
export const isChineseDirection = (dir?: string | null) => dir === ZH_DIRECTION
