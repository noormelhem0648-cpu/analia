let voices: SpeechSynthesisVoice[] = []

function loadVoices() {
  if (typeof window === 'undefined') return
  voices = window.speechSynthesis.getVoices()
  if (!voices.length) {
    window.speechSynthesis.onvoiceschanged = () => {
      voices = window.speechSynthesis.getVoices()
    }
  }
}

export function speakArabic(text: string, rate = 0.8) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  loadVoices()
  window.speechSynthesis.cancel()
  const utt = new SpeechSynthesisUtterance(text)
  utt.lang = 'ar-SA'
  utt.rate = rate
  utt.pitch = 1
  const arabicVoice = voices.find(v => v.lang.startsWith('ar'))
  if (arabicVoice) utt.voice = arabicVoice
  window.speechSynthesis.speak(utt)
}

export function speakText(text: string, lang: string, rate = 0.9) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  loadVoices()
  window.speechSynthesis.cancel()
  const utt = new SpeechSynthesisUtterance(text)
  utt.lang = lang
  utt.rate = rate
  window.speechSynthesis.speak(utt)
}

export function isTTSSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}
