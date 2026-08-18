export function getXpToday(): number {
  try {
    const key = `analia_xp_${new Date().toDateString()}`
    return parseInt(localStorage.getItem(key) || '0', 10)
  } catch { return 0 }
}

export function recordXpEarned(amount: number) {
  try {
    const key = `analia_xp_${new Date().toDateString()}`
    const prev = parseInt(localStorage.getItem(key) || '0', 10)
    localStorage.setItem(key, String(prev + amount))
  } catch {}
}

export function getStudyMinutesToday(): number {
  try {
    const key = `analia_study_${new Date().toDateString()}`
    return parseInt(localStorage.getItem(key) || '0', 10)
  } catch { return 0 }
}

export function recordStudyTime(minutes: number) {
  try {
    const key = `analia_study_${new Date().toDateString()}`
    const prev = parseInt(localStorage.getItem(key) || '0', 10)
    localStorage.setItem(key, String(prev + minutes))
  } catch {}
}
