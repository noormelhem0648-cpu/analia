// ─────────────────────────────────────────────────────────────
//  TTS — Arabic text-to-speech
//  Primary: /api/tts proxy → Google Translate TTS (human-sounding MP3)
//  Fallback: Web Speech API (browser built-in)
// ─────────────────────────────────────────────────────────────

let _voices: SpeechSynthesisVoice[] = []
let _voicesLoaded = false

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (typeof window === 'undefined' || !window.speechSynthesis) return Promise.resolve([])
  if (_voicesLoaded && _voices.length) return Promise.resolve(_voices)
  return new Promise(resolve => {
    const v = window.speechSynthesis.getVoices()
    if (v.length) { _voices = v; _voicesLoaded = true; resolve(v); return }
    window.speechSynthesis.onvoiceschanged = () => {
      _voices = window.speechSynthesis.getVoices()
      _voicesLoaded = true
      resolve(_voices)
    }
  })
}

function pickBestArabicVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  // Prefer neural/online voices (Microsoft, Google) over local
  const ar = voices.filter(v => v.lang.startsWith('ar'))
  return (
    ar.find(v => /Microsoft.*Arabic|Google.*Arabic|neural/i.test(v.name)) ||
    ar.find(v => v.name.toLowerCase().includes('arabic')) ||
    ar[0] ||
    null
  )
}

// Singleton audio element so we don't stack up multiple plays
let _audioEl: HTMLAudioElement | null = null

function getAudioEl(): HTMLAudioElement {
  if (!_audioEl) {
    _audioEl = new Audio()
    _audioEl.preload = 'auto'
  }
  return _audioEl
}

/**
 * Play Arabic text using the human-sounding Google TTS proxy.
 * Falls back to Web Speech API if the API route is unreachable.
 */
export async function speakArabic(text: string, rate = 0.85): Promise<void> {
  if (typeof window === 'undefined') return
  if (!text?.trim()) return

  // Stop whatever is currently playing
  if (_audioEl) { _audioEl.pause(); _audioEl.currentTime = 0 }
  window.speechSynthesis?.cancel()

  // Clamp long text — API supports up to 200 chars
  const clipped = text.length > 180 ? text.slice(0, 180) : text

  // Try the human TTS API first
  const speed = rate < 0.7 ? '0.5' : rate < 0.9 ? '0.8' : '1'
  const url = `/api/tts?text=${encodeURIComponent(clipped)}&lang=ar&speed=${speed}`

  try {
    const audio = getAudioEl()
    audio.src = url
    audio.playbackRate = 1  // speed already baked in via ttsspeed param
    await audio.play()
    return
  } catch {
    // Network error or API down — fall through to Web Speech API
  }

  // Fallback: Web Speech API
  const voices = await loadVoices()
  const utt = new SpeechSynthesisUtterance(text)
  utt.lang = 'ar-SA'
  utt.rate = rate
  utt.pitch = 1.0
  const voice = pickBestArabicVoice(voices)
  if (voice) utt.voice = voice
  window.speechSynthesis.speak(utt)
}

/**
 * Speak a single Arabic letter/harakat slowly and clearly.
 */
export function speakArabicLetter(text: string): Promise<void> {
  return speakArabic(text, 0.7)
}

/**
 * Speak text in any language using Web Speech API.
 */
export async function speakText(text: string, lang: string, rate = 0.9): Promise<void> {
  if (typeof window === 'undefined') return
  window.speechSynthesis?.cancel()
  const utt = new SpeechSynthesisUtterance(text)
  utt.lang = lang
  utt.rate = rate
  window.speechSynthesis.speak(utt)
}

export function isTTSSupported(): boolean {
  return typeof window !== 'undefined' &&
    ('speechSynthesis' in window || typeof Audio !== 'undefined')
}

/**
 * Preload TTS audio into browser cache (call on page load for key words).
 */
export function preloadArabic(words: string[]): void {
  if (typeof window === 'undefined') return
  words.slice(0, 10).forEach(w => {
    const url = `/api/tts?text=${encodeURIComponent(w)}&lang=ar&speed=0.8`
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = url
    document.head.appendChild(link)
  })
}
