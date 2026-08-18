import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { lesson_id } = await req.json()
    if (!lesson_id) return NextResponse.json({ ok: true })

    // Get lesson info to find its level and type
    const { data: lesson } = await supabase
      .from('lessons')
      .select('id, level_id, lesson_type, title_en')
      .eq('id', lesson_id)
      .maybeSingle()

    if (!lesson) return NextResponse.json({ ok: true })

    // Only save for vocabulary-type lessons
    if (!['vocabulary', 'letters', 'reading'].includes(lesson.lesson_type || '')) {
      return NextResponse.json({ ok: true })
    }

    // Advance any active "vocab" challenges (generated lessons teach ~6 words each) — non-fatal
    try { await supabase.rpc('bump_challenges', { p_user_id: user.id, p_type: 'vocab', p_amount: 6 }) } catch {}

    // Get existing vocabulary_cards for this lesson
    const { data: existingCards } = await supabase
      .from('vocabulary_cards')
      .select('id')
      .eq('lesson_id', lesson_id)

    if (!existingCards?.length) return NextResponse.json({ ok: true })

    // Insert SRS entries for any cards not already tracked
    const { data: existingSRS } = await supabase
      .from('user_vocabulary_srs')
      .select('card_id')
      .eq('user_id', user.id)
      .in('card_id', existingCards.map(c => c.id))

    const existingCardIds = new Set((existingSRS || []).map(s => s.card_id))
    const newCards = existingCards.filter(c => !existingCardIds.has(c.id))

    if (newCards.length > 0) {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)

      await supabase.from('user_vocabulary_srs').insert(
        newCards.map(card => ({
          user_id: user.id,
          card_id: card.id,
          easiness_factor: 2.5,
          interval_days: 1,
          repetitions: 0,
          next_review_date: tomorrow.toISOString().split('T')[0],
          last_reviewed_at: new Date().toISOString(),
        }))
      )
    }

    return NextResponse.json({ ok: true, new_cards: newCards.length })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
