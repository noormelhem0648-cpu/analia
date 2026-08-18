const requests = new Map<string, { count: number; reset: number }>()

// Prune expired entries periodically to prevent unbounded memory growth
function pruneExpired(now: number) {
  if (requests.size > 500) {
    for (const [key, val] of requests) {
      if (now > val.reset) requests.delete(key)
    }
  }
}

export function rateLimit(ip: string, limit = 20, windowMs = 60_000): { ok: boolean; remaining: number } {
  const now = Date.now()
  pruneExpired(now)
  const entry = requests.get(ip)

  if (!entry || now > entry.reset) {
    requests.set(ip, { count: 1, reset: now + windowMs })
    return { ok: true, remaining: limit - 1 }
  }

  entry.count++
  if (entry.count > limit) return { ok: false, remaining: 0 }
  return { ok: true, remaining: limit - entry.count }
}
