import { ARABIC_ALPHABET, getLettersForLesson } from './arabicAlphabet'

export interface GeneratedExercise {
  id: string
  type: 'multiple_choice' | 'true_false' | 'matching' | 'fill_blank' | 'word_order'
  question_ar: string
  question_en: string
  question_zh: string
  correct_answer: string | string[]
  options?: string[]
  explanation_ar?: string
  explanation_en?: string
  explanation_zh?: string
  xp_reward: number
  // for matching
  pairs?: Array<{ ar: string; answer: string }>
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function wrongLetters(exclude: string, count = 3) {
  return shuffle(ARABIC_ALPHABET.filter(l => l.isolated !== exclude))
    .slice(0, count)
    .map(l => l.isolated)
}

function wrongNames(exclude: string, count = 3, lang: 'en' | 'zh' | 'ar' = 'en') {
  return shuffle(ARABIC_ALPHABET.filter(l => {
    const name = lang === 'zh' ? l.name_zh : lang === 'ar' ? l.name_ar : l.name_en
    return name !== exclude
  }))
    .slice(0, count)
    .map(l => lang === 'zh' ? l.name_zh : lang === 'ar' ? l.name_ar : l.name_en)
}

export function generateLetterExercises(dayNumber: number, count = 6): GeneratedExercise[] {
  const letters = getLettersForLesson(dayNumber)
  if (letters.length === 0) return []
  const exercises: GeneratedExercise[] = []

  // 1. Multiple choice: which letter is this? (show name, pick letter)
  for (const letter of letters) {
    if (exercises.length >= count) break
    const opts = shuffle([letter.isolated, ...wrongLetters(letter.isolated)])
    exercises.push({
      id: `mc-letter-${letter.letter}`,
      type: 'multiple_choice',
      question_ar: `أيٌّ من هذه هو حرف "${letter.name_ar}"؟`,
      question_en: `Which letter is "${letter.name_en}"?`,
      question_zh: `哪个字母是"${letter.name_zh}"？`,
      correct_answer: letter.isolated,
      options: opts,
      explanation_ar: `الحرف "${letter.name_ar}" يُكتب هكذا: ${letter.isolated}`,
      explanation_en: `The letter "${letter.name_en}" is written as: ${letter.isolated}`,
      explanation_zh: `字母"${letter.name_zh}"写作：${letter.isolated}`,
      xp_reward: 5,
    })
  }

  // 2. Multiple choice: what is the name of this letter?
  for (const letter of letters) {
    if (exercises.length >= count) break
    const opts = shuffle([letter.name_en, ...wrongNames(letter.name_en)])
    exercises.push({
      id: `mc-name-${letter.letter}`,
      type: 'multiple_choice',
      question_ar: `ما اسم هذا الحرف؟ ${letter.isolated}`,
      question_en: `What is the name of this letter? ${letter.isolated}`,
      question_zh: `这个字母叫什么？${letter.isolated}`,
      correct_answer: letter.name_en,
      options: opts,
      explanation_ar: `هذا الحرف اسمه "${letter.name_ar}" (${letter.name_en})`,
      explanation_en: `This letter is called "${letter.name_en}" (${letter.name_ar})`,
      explanation_zh: `这个字母叫"${letter.name_zh}"`,
      xp_reward: 5,
    })
  }

  // 3. True/False: Is this the letter X?
  for (const letter of letters) {
    if (exercises.length >= count) break
    const wrong = randomFrom(ARABIC_ALPHABET.filter(l => l.isolated !== letter.isolated))
    const isTrue = Math.random() > 0.5
    const shown = isTrue ? letter : wrong
    exercises.push({
      id: `tf-${letter.letter}-${isTrue}`,
      type: 'true_false',
      question_ar: `هل هذا الحرف "${letter.name_ar}"؟  ${shown.isolated}`,
      question_en: `Is this the letter "${letter.name_en}"?  ${shown.isolated}`,
      question_zh: `这是字母"${letter.name_zh}"吗？${shown.isolated}`,
      correct_answer: isTrue ? 'true' : 'false',
      options: ['true', 'false'],
      explanation_ar: isTrue
        ? `نعم! هذا هو الحرف "${letter.name_ar}"`
        : `لا، هذا الحرف "${shown.name_ar}"، وليس "${letter.name_ar}"`,
      explanation_en: isTrue
        ? `Yes! This is the letter "${letter.name_en}"`
        : `No, this is "${shown.name_en}", not "${letter.name_en}"`,
      explanation_zh: isTrue
        ? `是的！这是字母"${letter.name_zh}"`
        : `不对，这是"${shown.name_zh}"，不是"${letter.name_zh}"`,
      xp_reward: 3,
    })
  }

  // 4. Matching pairs (if enough letters)
  if (letters.length >= 2 && exercises.length < count) {
    const pairsLetters = letters.slice(0, Math.min(4, letters.length))
    exercises.push({
      id: `match-${dayNumber}`,
      type: 'matching',
      question_ar: 'طابق كل حرف مع اسمه',
      question_en: 'Match each letter with its name',
      question_zh: '将每个字母与其名称匹配',
      correct_answer: pairsLetters.map(l => `${l.isolated}:${l.name_en}`),
      pairs: pairsLetters.map(l => ({ ar: l.isolated, answer: l.name_en })),
      xp_reward: 10,
    })
  }

  // 5. Example word exercise
  for (const letter of letters) {
    if (exercises.length >= count) break
    const wrongWords = shuffle(ARABIC_ALPHABET.filter(l => l.example_word !== letter.example_word))
      .slice(0, 3)
      .map(l => l.example_word)
    exercises.push({
      id: `word-${letter.letter}`,
      type: 'multiple_choice',
      question_ar: `أي كلمة تبدأ بحرف "${letter.name_ar}"؟`,
      question_en: `Which word starts with the letter "${letter.name_en}"?`,
      question_zh: `哪个单词以字母"${letter.name_zh}"开头？`,
      correct_answer: letter.example_word,
      options: shuffle([letter.example_word, ...wrongWords]),
      explanation_ar: `كلمة "${letter.example_word}" تبدأ بحرف "${letter.name_ar}"`,
      explanation_en: `"${letter.example_word}" (${letter.example_meaning_en}) starts with "${letter.name_en}"`,
      explanation_zh: `"${letter.example_word}"（${letter.example_meaning_zh}）以"${letter.name_zh}"开头`,
      xp_reward: 5,
    })
  }

  return exercises.slice(0, count)
}

export function generateVocabExercises(words: Array<{ ar: string; en: string; zh: string }>, count = 5): GeneratedExercise[] {
  const exercises: GeneratedExercise[] = []
  for (const word of words.slice(0, count)) {
    const wrongEn = shuffle(words.filter(w => w.ar !== word.ar)).slice(0, 3).map(w => w.en)
    exercises.push({
      id: `vocab-${word.ar}`,
      type: 'multiple_choice',
      question_ar: `ما معنى كلمة "${word.ar}"؟`,
      question_en: `What does "${word.ar}" mean?`,
      question_zh: `"${word.ar}"是什么意思？`,
      correct_answer: word.en,
      options: shuffle([word.en, ...wrongEn]),
      explanation_en: `"${word.ar}" means "${word.en}"`,
      explanation_ar: `"${word.ar}" تعني "${word.en}"`,
      explanation_zh: `"${word.ar}"的意思是"${word.zh}"`,
      xp_reward: 5,
    })
  }
  return exercises
}
