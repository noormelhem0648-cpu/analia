// Arabic letter forms for display
export const ARABIC_LETTERS = [
  { letter: 'ب', name_ar: 'باء', name_en: 'Baa', name_zh: '巴', sound: 'b', isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب', example_word: 'بَيْت', example_meaning_en: 'house', example_meaning_zh: '房子', transliteration: 'bayt' },
  { letter: 'ت', name_ar: 'تاء', name_en: 'Taa', name_zh: '塔', sound: 't', isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت', example_word: 'تُفَّاح', example_meaning_en: 'apple', example_meaning_zh: '苹果', transliteration: 'tuffāḥ' },
  { letter: 'ث', name_ar: 'ثاء', name_en: 'Thaa', name_zh: '萨', sound: 'th', isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث', example_word: 'ثَلَاثَة', example_meaning_en: 'three', example_meaning_zh: '三', transliteration: 'thalātha' },
  { letter: 'ج', name_ar: 'جيم', name_en: 'Jiim', name_zh: '吉姆', sound: 'j', isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج', example_word: 'جَمِيل', example_meaning_en: 'beautiful', example_meaning_zh: '美丽', transliteration: 'jamīl' },
  { letter: 'ح', name_ar: 'حاء', name_en: 'Haa', name_zh: '哈', sound: 'ḥ', isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح', example_word: 'حُبّ', example_meaning_en: 'love', example_meaning_zh: '爱', transliteration: 'ḥubb' },
  { letter: 'خ', name_ar: 'خاء', name_en: 'Khaa', name_zh: '哈', sound: 'kh', isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ', example_word: 'خُبْز', example_meaning_en: 'bread', example_meaning_zh: '面包', transliteration: 'khubz' },
  { letter: 'د', name_ar: 'دال', name_en: 'Daal', name_zh: '达', sound: 'd', isolated: 'د', initial: 'د', medial: 'ـد', final: 'ـد', example_word: 'دَرْس', example_meaning_en: 'lesson', example_meaning_zh: '课', transliteration: 'dars' },
  { letter: 'ذ', name_ar: 'ذال', name_en: 'Dhaal', name_zh: '扎', sound: 'dh', isolated: 'ذ', initial: 'ذ', medial: 'ـذ', final: 'ـذ', example_word: 'ذَهَب', example_meaning_en: 'gold', example_meaning_zh: '黄金', transliteration: 'dhahab' },
  { letter: 'ر', name_ar: 'راء', name_en: 'Raa', name_zh: '拉', sound: 'r', isolated: 'ر', initial: 'ر', medial: 'ـر', final: 'ـر', example_word: 'رَجُل', example_meaning_en: 'man', example_meaning_zh: '男人', transliteration: 'rajul' },
  { letter: 'ز', name_ar: 'زاي', name_en: 'Zaay', name_zh: '扎', sound: 'z', isolated: 'ز', initial: 'ز', medial: 'ـز', final: 'ـز', example_word: 'زَهْرَة', example_meaning_en: 'flower', example_meaning_zh: '花', transliteration: 'zahra' },
  { letter: 'س', name_ar: 'سين', name_en: 'Siin', name_zh: '辛', sound: 's', isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس', example_word: 'سَمَاء', example_meaning_en: 'sky', example_meaning_zh: '天空', transliteration: 'samāʾ' },
  { letter: 'ش', name_ar: 'شين', name_en: 'Shiin', name_zh: '辛', sound: 'sh', isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش', example_word: 'شَمْس', example_meaning_en: 'sun', example_meaning_zh: '太阳', transliteration: 'shams' },
  { letter: 'ص', name_ar: 'صاد', name_en: 'Saad', name_zh: '萨德', sound: 'ṣ', isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص', example_word: 'صَدِيق', example_meaning_en: 'friend', example_meaning_zh: '朋友', transliteration: 'ṣadīq' },
  { letter: 'ض', name_ar: 'ضاد', name_en: 'Daad', name_zh: '达德', sound: 'ḍ', isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض', example_word: 'ضَوْء', example_meaning_en: 'light', example_meaning_zh: '光', transliteration: 'ḍawʾ' },
  { letter: 'ط', name_ar: 'طاء', name_en: 'Taa', name_zh: '塔', sound: 'ṭ', isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط', example_word: 'طَعَام', example_meaning_en: 'food', example_meaning_zh: '食物', transliteration: 'ṭaʿām' },
  { letter: 'ظ', name_ar: 'ظاء', name_en: 'Zhaa', name_zh: '扎', sound: 'ẓ', isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ', example_word: 'ظِلّ', example_meaning_en: 'shadow', example_meaning_zh: '影子', transliteration: 'ẓill' },
  { letter: 'ع', name_ar: 'عين', name_en: 'Ayn', name_zh: '阿因', sound: 'ʿ', isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع', example_word: 'عَيْن', example_meaning_en: 'eye', example_meaning_zh: '眼睛', transliteration: 'ʿayn' },
  { letter: 'غ', name_ar: 'غين', name_en: 'Ghayn', name_zh: '加因', sound: 'gh', isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ', example_word: 'غُرْفَة', example_meaning_en: 'room', example_meaning_zh: '房间', transliteration: 'ghurfa' },
  { letter: 'ف', name_ar: 'فاء', name_en: 'Faa', name_zh: '法', sound: 'f', isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف', example_word: 'فَتَاة', example_meaning_en: 'girl', example_meaning_zh: '女孩', transliteration: 'fatāh' },
  { letter: 'ق', name_ar: 'قاف', name_en: 'Qaaf', name_zh: '卡夫', sound: 'q', isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق', example_word: 'قَلَم', example_meaning_en: 'pen', example_meaning_zh: '笔', transliteration: 'qalam' },
  { letter: 'ك', name_ar: 'كاف', name_en: 'Kaaf', name_zh: '卡夫', sound: 'k', isolated: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك', example_word: 'كِتَاب', example_meaning_en: 'book', example_meaning_zh: '书', transliteration: 'kitāb' },
  { letter: 'ل', name_ar: 'لام', name_en: 'Laam', name_zh: '拉姆', sound: 'l', isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل', example_word: 'لَيْل', example_meaning_en: 'night', example_meaning_zh: '夜晚', transliteration: 'layl' },
  { letter: 'م', name_ar: 'ميم', name_en: 'Miim', name_zh: '米姆', sound: 'm', isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم', example_word: 'مَاء', example_meaning_en: 'water', example_meaning_zh: '水', transliteration: 'māʾ' },
  { letter: 'ن', name_ar: 'نون', name_en: 'Nuun', name_zh: '努恩', sound: 'n', isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن', example_word: 'نَهْر', example_meaning_en: 'river', example_meaning_zh: '河流', transliteration: 'nahr' },
  { letter: 'ه', name_ar: 'هاء', name_en: 'Haa', name_zh: '哈', sound: 'h', isolated: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه', example_word: 'هَوَاء', example_meaning_en: 'air', example_meaning_zh: '空气', transliteration: 'hawāʾ' },
  { letter: 'و', name_ar: 'واو', name_en: 'Waaw', name_zh: '瓦乌', sound: 'w', isolated: 'و', initial: 'و', medial: 'ـو', final: 'ـو', example_word: 'وَلَد', example_meaning_en: 'boy', example_meaning_zh: '男孩', transliteration: 'walad' },
  { letter: 'ي', name_ar: 'ياء', name_en: 'Yaa', name_zh: '亚', sound: 'y', isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي', example_word: 'يَد', example_meaning_en: 'hand', example_meaning_zh: '手', transliteration: 'yad' },
  { letter: 'ء', name_ar: 'همزة', name_en: 'Hamza', name_zh: '哈姆扎', sound: 'ʾ', isolated: 'ء', initial: 'أ', medial: 'ـئـ', final: 'ـأ', example_word: 'أُم', example_meaning_en: 'mother', example_meaning_zh: '母亲', transliteration: 'umm' },
]

export function isArabic(text: string): boolean {
  return /[؀-ۿ]/.test(text)
}
