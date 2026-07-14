'use client'

export async function speakArabic(text: string, rate = 0.85) {
  if (typeof window === 'undefined') return

  if (process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY) {
    try {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      if (res.ok) {
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        const audio = new Audio(url)
        audio.play()
        return
      }
    } catch {}
  }

  // Fallback: Web Speech API
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'ar-SA'
  utterance.rate = rate
  window.speechSynthesis.speak(utterance)
}
