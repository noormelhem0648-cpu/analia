import { NextRequest, NextResponse } from 'next/server'

// Proxy Google Translate TTS for human-sounding Arabic audio.
// Google's unofficial TTS endpoint returns MP3 audio — much more
// natural than browser Web Speech API on Windows.
export async function GET(req: NextRequest) {
  const text = req.nextUrl.searchParams.get('text')
  const lang = req.nextUrl.searchParams.get('lang') || 'ar'
  const speed = req.nextUrl.searchParams.get('speed') || '0.8'

  if (!text || text.length > 200) {
    return NextResponse.json({ error: 'Invalid text' }, { status: 400 })
  }

  const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&tl=${lang}&client=gtx&ttsspeed=${speed}&q=${encodeURIComponent(text)}`

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0',
        'Referer': 'https://translate.google.com',
      },
    })

    if (!res.ok) throw new Error(`TTS fetch failed: ${res.status}`)

    const audio = await res.arrayBuffer()
    return new NextResponse(audio, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=86400', // cache 24h
      },
    })
  } catch {
    // Fallback: tell client to use Web Speech API
    return NextResponse.json({ error: 'tts_unavailable' }, { status: 503 })
  }
}
