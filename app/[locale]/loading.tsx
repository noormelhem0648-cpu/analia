export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center" style={{ background: '#F8F9FF' }}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center animate-pulse"
          style={{ background: 'linear-gradient(135deg, #1E3A5F, #2D5A8E)' }}>
          <span className="text-white text-2xl font-bold" style={{ fontFamily: 'Amiri, serif' }}>أ</span>
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map(i => (
            <div key={i} className="w-2 h-2 rounded-full animate-bounce"
              style={{ background: '#2D5A8E', animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </div>
    </div>
  )
}
