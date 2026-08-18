import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

function calculateNextReview(
  quality: number,
  easinessFactor: number,
  intervalDays: number,
  repetitions: number
): { newEF: number; newInterval: number; newReps: number } {
  // SM-2 algorithm
  const newEF = Math.max(1.3, easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)))
  let newInterval: number
  let newReps: number

  if (quality < 3) {
    // Failed — restart
    newInterval = 1
    newReps = 0
  } else {
    newReps = repetitions + 1
    if (repetitions === 0) newInterval = 1
    else if (repetitions === 1) newInterval = 6
    else newInterval = Math.round(intervalDays * newEF)
  }

  return { newEF, newInterval, newReps }
}

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { srs_id, quality, easiness_factor, interval_days, repetitions } = await req.json()

    const { newEF, newInterval, newReps } = calculateNextReview(
      quality, easiness_factor ?? 2.5, interval_days ?? 1, repetitions ?? 0
    )

    const nextDate = new Date()
    nextDate.setDate(nextDate.getDate() + newInterval)

    await supabase
      .from('user_vocabulary_srs')
      .update({
        easiness_factor: newEF,
        interval_days: newInterval,
        repetitions: newReps,
        next_review_date: nextDate.toISOString().split('T')[0],
        last_reviewed_at: new Date().toISOString(),
      })
      .eq('id', srs_id)
      .eq('user_id', user.id)

    return NextResponse.json({ ok: true, next_review_days: newInterval })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
