import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6"
      style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A8E 100%)' }}>
      <div className="text-center">
        <div className="text-8xl mb-4" style={{ fontFamily: 'Amiri, serif', color: '#C9A84C' }}>٤٠٤</div>
        <h1 className="text-2xl font-bold text-white mb-2">الصفحة غير موجودة</h1>
        <p className="text-white/60 text-sm mb-2">Page Not Found</p>
        <p className="text-white/40 text-xs">页面未找到</p>
      </div>
      <Link href="/"
        className="px-6 py-3 bg-white rounded-2xl font-semibold text-gray-800 hover:bg-gray-50 transition-all shadow-lg">
        ← العودة للرئيسية
      </Link>
    </div>
  )
}
