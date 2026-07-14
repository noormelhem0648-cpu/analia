export interface SRSCard {
  easiness_factor: number
  interval_days: number
  repetitions: number
  next_review_date: string
}

// quality: 0-5 (0=blackout, 5=perfect)
export function calculateNextReview(card: SRSCard, quality: number): SRSCard {
  let { easiness_factor, interval_days, repetitions } = card

  if (quality < 3) {
    repetitions = 0
    interval_days = 1
  } else {
    if (repetitions === 0) interval_days = 1
    else if (repetitions === 1) interval_days = 6
    else interval_days = Math.round(interval_days * easiness_factor)
    repetitions += 1
  }

  easiness_factor = Math.max(
    1.3,
    easiness_factor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
  )

  const next = new Date()
  next.setDate(next.getDate() + interval_days)

  return {
    easiness_factor,
    interval_days,
    repetitions,
    next_review_date: next.toISOString().split('T')[0],
  }
}

export function qualityFromScore(scorePercent: number): number {
  if (scorePercent >= 95) return 5
  if (scorePercent >= 85) return 4
  if (scorePercent >= 70) return 3
  if (scorePercent >= 50) return 2
  if (scorePercent >= 30) return 1
  return 0
}
