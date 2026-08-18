'use client'

import { useEffect, useState } from 'react'
import type { MakhrajZone } from '@/lib/arabicAlphabet'

interface Props {
  activeZone?: MakhrajZone
  size?: number
  showLabel?: boolean
  locale?: string
  animate?: boolean
}

// ── Chinese step-by-step instructions per zone ─────────────────
const ZONE_DATA: Record<MakhrajZone, {
  label_zh: string
  label_ar: string
  steps_zh: string[]
  airflow: 'forward' | 'nasal' | 'pharyngeal' | 'blocked'
  color: string
}> = {
  lips:        { label_zh: '双唇', label_ar: 'الشفتان', color: '#F472B6',
    steps_zh: ['双唇完全合拢', '气流在口中积压', '双唇突然分开——爆破！'],
    airflow: 'blocked' },
  teeth_lip:   { label_zh: '唇齿', label_ar: 'أسنان+شفة', color: '#C084FC',
    steps_zh: ['下唇内侧轻触上门牙', '气流从唇齿间隙摩擦通过', '声带不振动（ف是清音）'],
    airflow: 'forward' },
  interdental: { label_zh: '齿间', label_ar: 'بين الأسنان', color: '#A78BFA',
    steps_zh: ['舌尖轻轻伸出，置于上下齿之间', '气流从舌面与上齿之间通过', '⚠️ 中文无此音！类似英语"think/the"'],
    airflow: 'forward' },
  alveolar:    { label_zh: '齿龈', label_ar: 'اللثة', color: '#38BDF8',
    steps_zh: ['舌尖抵住上门牙后方（齿龈）', '气流积压形成压力', '舌尖突然离开——爆破或侧流'],
    airflow: 'forward' },
  emphatic:    { label_zh: '强化粗音', label_ar: 'المطبقة', color: '#EF4444',
    steps_zh: ['舌尖抵上齿龈（同普通齿龈音）', '🔑 关键：舌根同时上抬——咽化！', '口腔空间变小，声音变粗圆厚重'],
    airflow: 'forward' },
  sibilant:    { label_zh: '嘶擦音', label_ar: 'الصفير', color: '#60A5FA',
    steps_zh: ['舌尖接近上齿龈（不完全接触）', '舌中部微微凹陷形成气槽', '气流嘶嘶通过——产生振动（ز）或不振动（س）'],
    airflow: 'forward' },
  palatal:     { label_zh: '硬腭', label_ar: 'الحنك الأوسط', color: '#34D399',
    steps_zh: ['舌背（舌体中部）隆起', '舌背抵住硬腭中部', '气流从舌背与硬腭间通过'],
    airflow: 'forward' },
  velar:       { label_zh: '软腭', label_ar: 'الحنك اللين', color: '#FBBF24',
    steps_zh: ['舌背后部向上抬起', '舌背抵住软腭（口腔最后端）', '不送气——轻轻爆破，类似"个"的g'],
    airflow: 'forward' },
  uvular:      { label_zh: '小舌（悬雍垂）', label_ar: 'اللهاة', color: '#FB923C',
    steps_zh: ['舌根（最后端）向上抬起', '舌根接触或接近小舌（悬雍垂）', '⚠️ 发最深处的爆破（ق）或摩擦（خ/غ）'],
    airflow: 'pharyngeal' },
  pharyngeal:  { label_zh: '咽喉', label_ar: 'الحلق', color: '#F87171',
    steps_zh: ['咽喉（颈部内侧）强力收缩', '气流穿过极度收窄的通道', '手放喉咙——感受是否有振动（ع有，ح无）'],
    airflow: 'pharyngeal' },
  glottal:     { label_zh: '声门', label_ar: 'المزمار', color: '#94A3B8',
    steps_zh: ['声带（声门）关闭或收窄', '气流从两声带之间通过', 'ء=完全闭合后爆开；ه=轻柔呼气'],
    airflow: 'pharyngeal' },
  cavity:      { label_zh: '口腔空腔', label_ar: 'الجوف', color: '#818CF8',
    steps_zh: ['嘴巴自然张开', '舌头平放在口腔底部', '气流自由通过整个口腔——长元音'],
    airflow: 'forward' },
}

// ── Per-zone tongue SVG paths ──────────────────────────────────
// viewBox 0 0 260 300; mouth area: x:85-200, y:180-280
const TONGUE_PATHS: Record<MakhrajZone, { body: string; tip: string; back: string }> = {
  cavity: {
    body: 'M 96 260 Q 91 250 89 237 Q 88 223 91 212 Q 101 208 118 210 Q 138 212 146 220 Q 147 232 140 242 Q 130 252 116 257 Q 104 261 96 260',
    tip:  'M 140 242 Q 147 238 153 244 Q 150 254 140 253 Q 134 249 140 242',
    back: 'M 91 212 Q 87 202 85 191 Q 84 181 88 175 Q 94 173 99 180 Q 102 192 101 212 Z',
  },
  lips: {
    body: 'M 96 262 Q 91 252 89 238 Q 88 224 91 213 Q 101 209 118 211 Q 138 213 146 220 Q 147 232 140 242 Q 130 252 116 258 Q 104 262 96 262',
    tip:  'M 140 242 Q 147 238 154 244 Q 151 254 141 253 Q 135 249 140 242',
    back: 'M 91 213 Q 87 203 85 192 Q 84 182 88 176 Q 94 174 99 181 Q 102 193 101 213 Z',
  },
  teeth_lip: {
    body: 'M 96 262 Q 91 252 89 238 Q 88 224 91 213 Q 101 209 118 211 Q 138 213 146 220 Q 147 232 140 242 Q 130 252 116 258 Q 104 262 96 262',
    tip:  'M 140 242 Q 147 238 154 244 Q 151 254 141 253 Q 135 249 140 242',
    back: 'M 91 213 Q 87 203 85 192 Q 84 182 88 176 Q 94 174 99 181 Q 102 193 101 213 Z',
  },
  interdental: {
    body: 'M 96 260 Q 91 250 89 236 Q 88 222 91 211 Q 101 207 118 209 Q 138 211 146 218 Q 148 230 142 240 Q 132 250 118 256 Q 105 260 96 260',
    tip:  'M 148 236 Q 158 232 170 238 Q 168 248 158 251 Q 150 250 148 236',
    back: 'M 91 211 Q 87 201 85 190 Q 84 180 88 174 Q 94 172 99 179 Q 102 191 101 211 Z',
  },
  alveolar: {
    body: 'M 96 260 Q 91 250 89 236 Q 88 222 91 210 Q 101 206 118 207 Q 138 208 148 215 Q 152 226 146 238 Q 136 248 122 255 Q 107 260 96 260',
    tip:  'M 150 228 Q 160 222 168 228 Q 167 237 159 240 Q 152 238 150 228',
    back: 'M 91 210 Q 87 200 85 189 Q 84 179 88 173 Q 94 171 99 178 Q 102 190 101 210 Z',
  },
  emphatic: {
    body: 'M 96 258 Q 91 248 89 234 Q 88 220 90 208 Q 100 203 118 204 Q 138 205 148 212 Q 153 223 148 235 Q 138 246 124 253 Q 109 258 96 258',
    tip:  'M 150 226 Q 160 220 168 226 Q 167 235 159 238 Q 152 236 150 226',
    back: 'M 90 208 Q 87 196 86 183 Q 86 172 91 167 Q 98 165 103 172 Q 106 183 104 208 Z',
  },
  sibilant: {
    body: 'M 96 260 Q 91 250 89 236 Q 88 222 91 210 Q 101 206 118 207 Q 138 208 147 216 Q 150 228 144 240 Q 134 250 120 256 Q 106 260 96 260',
    tip:  'M 146 232 Q 156 226 164 232 Q 162 242 154 244 Q 148 242 146 232',
    back: 'M 91 210 Q 87 200 85 189 Q 84 179 88 173 Q 94 171 99 178 Q 102 190 101 210 Z',
  },
  palatal: {
    body: 'M 96 254 Q 91 240 90 224 Q 90 208 96 198 Q 110 192 128 194 Q 148 196 156 208 Q 158 222 152 236 Q 140 248 122 254 Q 107 258 96 254',
    tip:  'M 155 228 Q 163 222 170 228 Q 168 238 160 240 Q 154 238 155 228',
    back: 'M 91 208 Q 88 196 87 183 Q 87 172 92 167 Q 99 165 104 172 Q 107 184 105 208 Z',
  },
  velar: {
    body: 'M 96 256 Q 91 243 89 229 Q 88 215 89 203 Q 92 193 101 188 Q 114 184 128 186 Q 140 188 146 208 Q 148 224 142 238 Q 132 250 116 256 Q 104 259 96 256',
    tip:  'M 144 240 Q 150 234 156 240 Q 154 250 146 252 Q 141 249 144 240',
    back: 'M 89 203 Q 87 191 87 178 Q 88 167 94 163 Q 101 161 106 168 Q 108 180 106 203 Z',
  },
  uvular: {
    body: 'M 96 254 Q 91 241 89 227 Q 88 213 88 200 Q 90 188 98 183 Q 111 178 126 180 Q 140 183 144 208 Q 146 226 140 240 Q 130 252 114 256 Q 103 258 96 254',
    tip:  'M 142 242 Q 148 236 154 242 Q 152 252 144 253 Q 139 249 142 242',
    back: 'M 88 200 Q 87 186 88 172 Q 89 161 96 157 Q 103 155 107 162 Q 109 174 108 200 Z',
  },
  pharyngeal: {
    body: 'M 96 254 Q 90 241 88 227 Q 86 212 86 198 Q 87 185 93 180 Q 104 175 120 177 Q 135 180 140 205 Q 141 224 136 240 Q 127 252 112 256 Q 101 258 96 254',
    tip:  'M 138 242 Q 144 236 150 242 Q 148 252 140 253 Q 135 249 138 242',
    back: 'M 86 198 Q 84 182 85 166 Q 86 154 93 150 Q 100 147 104 155 Q 106 167 106 198 Z',
  },
  glottal: {
    body: 'M 96 258 Q 91 248 89 234 Q 88 220 91 209 Q 101 205 118 207 Q 138 209 146 217 Q 148 229 141 241 Q 131 251 117 257 Q 105 261 96 258',
    tip:  'M 141 241 Q 148 237 154 243 Q 151 253 141 252 Q 135 248 141 241',
    back: 'M 91 209 Q 87 199 85 188 Q 84 178 88 172 Q 94 170 99 177 Q 102 189 101 209 Z',
  },
}

const SKIN_COLOR  = '#FDDCB5'
const SKIN_DARK   = '#E8B88A'
const TONGUE_FILL = '#F87171'
const TONGUE_DARK = '#EF4444'

export default function ArticulationDiagram({
  activeZone,
  size = 280,
  showLabel = true,
  locale = 'zh',
  animate = true,
}: Props) {
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    // Re-trigger the SVG animation whenever the active articulation zone changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (activeZone) setAnimKey(k => k + 1)
  }, [activeZone])

  const zd = activeZone ? ZONE_DATA[activeZone] : null
  const tp = TONGUE_PATHS[activeZone ?? 'cavity']
  const highlights = activeZone ? getHighlights(activeZone) : []
  const color = zd?.color ?? '#EF4444'
  const airflow = zd?.airflow ?? 'forward'

  function isHit(id: string) { return highlights.includes(id) }
  function fill(id: string)  { return isHit(id) ? color : '#F3F4F6' }
  function stk(id: string)   { return isHit(id) ? color : '#D1D5DB' }
  function op(id: string)    { return isHit(id) ? 1 : 0.6 }

  const aniClass = `zone-${animKey}`

  return (
    <div className="flex flex-col items-center gap-3 w-full select-none">
      <style>{`
        @keyframes zone-pulse-${animKey} {
          0%,100%{opacity:1;filter:drop-shadow(0 0 0px ${color})}
          50%{opacity:.85;filter:drop-shadow(0 0 7px ${color}99)}
        }
        @keyframes airflow-move {
          to{stroke-dashoffset:-20}
        }
        @keyframes tongue-snap-${animKey} {
          0%{opacity:0;transform:translateY(5px)}
          60%{opacity:1;transform:translateY(-2px)}
          100%{opacity:1;transform:translateY(0)}
        }
        .${aniClass}-zone{animation:zone-pulse-${animKey} 1.5s ease-in-out infinite}
        .${aniClass}-tongue{animation:tongue-snap-${animKey} 0.38s cubic-bezier(.34,1.56,.64,1) forwards}
        .airflow-dash{animation:airflow-move .65s linear infinite}
      `}</style>

      <svg
        viewBox="0 0 260 300"
        width={size}
        height={Math.round(size * 1.07)}
        xmlns="http://www.w3.org/2000/svg"
        aria-label={zd ? `发音位置: ${zd.label_zh}` : '发音图'}
      >
        <rect width="260" height="300" rx="16" fill="white" />

        {/* ── Head outline (right-facing sagittal profile) ── */}
        <path d="M 80 20 Q 180 10 200 70 Q 220 120 210 160 L 200 180" fill={SKIN_COLOR} stroke={SKIN_DARK} strokeWidth="1.5" />
        <path d="M 200 180 Q 215 200 210 220 Q 205 235 195 240 Q 210 250 205 265 Q 200 280 175 282 Q 140 285 110 280 L 90 270 Q 60 260 55 240 Q 50 220 60 200 L 70 180 L 75 160 Q 70 120 75 80 Q 78 50 80 20" fill={SKIN_COLOR} stroke={SKIN_DARK} strokeWidth="1.5" />
        <path d="M 90 270 L 85 300 L 165 300 L 175 282" fill={SKIN_COLOR} stroke={SKIN_DARK} strokeWidth="1" />
        <path d="M 200 180 Q 218 188 215 205 Q 212 218 200 220" fill={SKIN_COLOR} stroke={SKIN_DARK} strokeWidth="1.2" />
        <ellipse cx="205" cy="212" rx="7" ry="5" fill={SKIN_DARK} opacity="0.3" />

        {/* ── Upper lip ── */}
        <path className={isHit('lips') ? `${aniClass}-zone` : ''}
          d="M 170 242 Q 185 240 195 238 Q 197 245 192 250 Q 180 255 168 252 Z"
          fill={fill('lips')} stroke={stk('lips')} strokeWidth="1.8" opacity={op('lips')} />
        {/* ── Lower lip ── */}
        <path className={isHit('lips') ? `${aniClass}-zone` : ''}
          d="M 168 252 Q 180 255 192 250 Q 190 262 175 265 Q 160 268 155 260 Z"
          fill={fill('lips')} stroke={stk('lips')} strokeWidth="1.8" opacity={op('lips')} />

        {/* Lips-closed indicator when bilabial */}
        {isHit('lips') && (
          <line x1="155" y1="252" x2="194" y2="252" stroke={color} strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
        )}

        {/* ── Upper teeth ── */}
        <path className={isHit('upper-teeth') ? `${aniClass}-zone` : ''}
          d="M 160 242 Q 140 238 120 240 Q 118 248 120 252 Q 140 250 160 248 Z"
          fill={isHit('upper-teeth') ? color : 'white'} stroke={stk('upper-teeth')} strokeWidth="1" opacity={op('upper-teeth')} />
        {[128,136,144,152].map(x => <line key={x} x1={x} y1="240" x2={x} y2="251" stroke="#D1D5DB" strokeWidth="0.8" />)}

        {/* ── Lower teeth ── */}
        <path
          d="M 120 252 Q 140 250 160 252 Q 162 258 158 262 Q 140 264 122 262 Z"
          fill="white" stroke="#D1D5DB" strokeWidth="1" />

        {/* ── Hard palate ── */}
        <path className={isHit('hard-palate') ? `${aniClass}-zone` : ''}
          d="M 90 220 Q 95 200 100 185 Q 120 178 145 180 Q 160 181 165 190 Q 168 200 165 215 Q 145 210 120 210 Q 100 211 90 220"
          fill={fill('hard-palate')} stroke={stk('hard-palate')} strokeWidth="1.5" opacity={op('hard-palate')} />

        {/* ── Alveolar ridge ── */}
        <path className={isHit('alveolar') ? `${aniClass}-zone` : ''}
          d="M 158 238 Q 165 230 168 220 Q 165 215 158 218 Q 153 228 148 238 Z"
          fill={fill('alveolar')} stroke={stk('alveolar')} strokeWidth="1.8" opacity={op('alveolar')} />

        {/* ── Soft palate ── */}
        <path className={isHit('soft-palate') ? `${aniClass}-zone` : ''}
          d="M 90 220 Q 88 215 85 208 Q 83 195 86 185 Q 95 178 100 185 Q 95 200 90 220"
          fill={fill('soft-palate')} stroke={stk('soft-palate')} strokeWidth="1.8" opacity={op('soft-palate')} />

        {/* ── Uvula ── */}
        <ellipse className={isHit('uvula') ? `${aniClass}-zone` : ''}
          cx="87" cy="195" rx="6" ry="9"
          fill={fill('uvula')} stroke={stk('uvula')} strokeWidth="1.8" opacity={op('uvula')} />

        {/* ── Pharynx ── */}
        <path className={isHit('pharynx') ? `${aniClass}-zone` : ''}
          d="M 75 200 Q 70 195 68 185 Q 65 165 70 148 Q 75 140 82 142 Q 88 155 88 175 Q 87 185 85 195 Q 80 198 75 200"
          fill={fill('pharynx')} stroke={stk('pharynx')} strokeWidth="1.8" opacity={op('pharynx')} />

        {/* ── Larynx / glottis ── */}
        <path className={isHit('larynx') ? `${aniClass}-zone` : ''}
          d="M 70 148 Q 68 135 72 120 Q 78 110 85 112 Q 90 125 88 142 Q 82 142 70 148"
          fill={fill('larynx')} stroke={stk('larynx')} strokeWidth="1.8" opacity={op('larynx')} />

        {/* ── Tongue — animated to zone position ── */}
        <g key={`t${animKey}`} className={animate ? `${aniClass}-tongue` : ''}>
          <path d={tp.back}
            fill={isHit('tongue-back') ? color : TONGUE_DARK}
            stroke={isHit('tongue-back') ? color : '#DC2626'}
            strokeWidth="1" opacity={isHit('tongue-back') ? 1 : 0.75} />
          <path d={tp.body}
            fill={isHit('tongue-body') ? color : TONGUE_FILL}
            stroke={isHit('tongue-body') ? color : TONGUE_DARK}
            strokeWidth="1.5" opacity={isHit('tongue-body') ? 1 : 0.85} />
          <path d={tp.tip}
            fill={isHit('tongue-tip') ? color : TONGUE_DARK}
            stroke={isHit('tongue-tip') ? color : '#DC2626'}
            strokeWidth="1" opacity={isHit('tongue-tip') ? 1 : 0.9} />
        </g>

        {/* ── Lip-teeth contact ── */}
        <path className={isHit('teeth-lip') ? `${aniClass}-zone` : ''}
          d="M 168 250 Q 175 252 188 248 Q 192 252 190 258 Q 178 260 168 257 Z"
          fill={fill('teeth-lip')} stroke={stk('teeth-lip')} strokeWidth="1" opacity={op('teeth-lip')} />

        {/* ── Animated airflow ── */}
        {activeZone && (() => {
          const markerId = `arr${animKey}`
          return (
            <g>
              <defs>
                <marker id={markerId} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill={color} opacity="0.9" />
                </marker>
              </defs>
              <text x="6" y="248" fontSize="8" fill={color} fontFamily="sans-serif" opacity="0.9">气</text>
              {airflow === 'forward' && (
                <line className="airflow-dash"
                  x1="18" y1="252" x2="110" y2="252"
                  stroke={color} strokeWidth="2.5" strokeDasharray="5 4" opacity="0.8"
                  markerEnd={`url(#${markerId})`} />
              )}
              {airflow === 'pharyngeal' && (
                <path className="airflow-dash"
                  d="M 18 248 Q 50 248 70 230 Q 78 210 78 190"
                  stroke={color} strokeWidth="2.5" fill="none" strokeDasharray="5 4" opacity="0.8"
                  markerEnd={`url(#${markerId})`} />
              )}
              {airflow === 'blocked' && (<>
                <line x1="18" y1="252" x2="136" y2="252"
                  stroke={color} strokeWidth="2.5" strokeDasharray="5 4" opacity="0.6" />
                <text x="138" y="256" fontSize="13" fill={color} fontFamily="sans-serif" opacity="0.9">✕</text>
              </>)}
            </g>
          )
        })()}

        {/* ── Zone label at top ── */}
        {showLabel && zd && (
          <text x="130" y="17" textAnchor="middle" fontSize="11" fontWeight="700"
            fill={color} fontFamily="sans-serif">
            {zd.label_zh}  {zd.label_ar}
          </text>
        )}

        {/* ── Legend ── */}
        <g transform="translate(6,24)">
          <circle cx="5" cy="5" r="4" fill={color} opacity={activeZone ? 0.9 : 0.3} />
          <text x="12" y="9" fontSize="7" fill="#6B7280" fontFamily="sans-serif">发音位置</text>
          <circle cx="5" cy="18" r="4" fill={TONGUE_FILL} />
          <text x="12" y="22" fontSize="7" fill="#6B7280" fontFamily="sans-serif">舌头</text>
        </g>
      </svg>

      {/* ── Step-by-step panel ── */}
      {activeZone && zd && (
        <div className="w-full rounded-2xl px-3 py-2.5 space-y-1"
          style={{ background: color + '10', border: `1.5px solid ${color}35` }}>
          <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color }}>
            {locale === 'zh' ? '发音步骤' : locale === 'ar' ? 'خطوات النطق' : 'Steps'}
          </p>
          {zd.steps_zh.map((step, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[10px] font-bold flex-shrink-0 w-3" style={{ color }}>{i + 1}</span>
              <p className="text-[11px] text-gray-700 leading-snug">{step}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Zone → highlighted regions ──────────────────────────────────
function getHighlights(zone: MakhrajZone): string[] {
  const map: Record<MakhrajZone, string[]> = {
    lips:        ['lips'],
    teeth_lip:   ['teeth-lip', 'upper-teeth'],
    interdental: ['upper-teeth', 'lower-teeth', 'tongue-tip'],
    alveolar:    ['alveolar', 'tongue-tip'],
    emphatic:    ['alveolar', 'tongue-tip', 'tongue-body', 'pharynx'],
    sibilant:    ['alveolar', 'tongue-tip'],
    palatal:     ['hard-palate', 'tongue-body'],
    velar:       ['soft-palate', 'tongue-back'],
    uvular:      ['uvula', 'tongue-back'],
    pharyngeal:  ['pharynx'],
    glottal:     ['larynx'],
    cavity:      [],
  }
  return map[zone] ?? []
}
