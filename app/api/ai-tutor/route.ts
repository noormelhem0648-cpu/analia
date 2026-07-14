import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const SYSTEM_PROMPT = `You are ANALIA, a friendly and expert Arabic language teacher specializing in teaching Arabic to Chinese and English speakers. You are patient, encouraging, and use simple explanations.

Your teaching approach:
- Always respond in the same language the student uses (Chinese/English/Arabic)
- When explaining Arabic, show the Arabic script clearly followed by transliteration
- Use examples with both Arabic and translation
- Break down grammar rules simply
- Correct mistakes gently and explain why
- Celebrate progress and keep students motivated
- Focus on Modern Standard Arabic (فصحى) with notes on colloquial when relevant

Format rules:
- Arabic text: always write in Arabic script, e.g. مرحباً (marhaban)
- Keep responses concise but complete
- Use numbered lists for step-by-step explanations
- Emoji occasionally to keep it friendly 📚

Student context: They are learning Arabic through the ANALIA platform, currently at beginner to intermediate level.`

async function callGroq(messages: { role: string; content: string }[], langHint: string): Promise<string> {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT + '\n\n' + langHint },
        ...messages,
      ],
      max_tokens: 1024,
      temperature: 0.7,
    }),
  })
  if (!res.ok) throw new Error(`Groq error: ${await res.text()}`)
  const data = await res.json()
  return data.choices?.[0]?.message?.content || ''
}

async function callOllama(messages: { role: string; content: string }[], langHint: string): Promise<string> {
  const url = process.env.OLLAMA_URL || 'http://localhost:11434'
  const res = await fetch(`${url}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: process.env.OLLAMA_MODEL || 'llama3',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT + '\n\n' + langHint },
        ...messages,
      ],
      stream: false,
    }),
  })
  if (!res.ok) throw new Error(`Ollama error: ${await res.text()}`)
  const data = await res.json()
  return data.message?.content || ''
}

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { messages, ui_language } = await req.json()
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 })
    }

    const langHint = ui_language === 'zh'
      ? 'The student prefers Chinese. Respond in Chinese unless they write in another language.'
      : ui_language === 'ar'
      ? 'The student prefers Arabic. Respond in Arabic unless they write in another language.'
      : 'The student prefers English. Respond in English unless they write in another language.'

    const msgList = messages.map((m: { role: string; content: string }) => ({
      role: m.role as 'user' | 'assistant',
      content: m.content,
    }))

    // Use Groq if key available, else fall back to local Ollama
    let text = ''
    if (process.env.GROQ_API_KEY) {
      text = await callGroq(msgList, langHint)
    } else {
      text = await callOllama(msgList, langHint)
    }

    await supabase.from('ai_conversations').insert({
      user_id: user.id,
      messages,
      response: text,
    }).then(() => {})

    return NextResponse.json({ response: text })
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'AI error'
    console.error('AI tutor error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
