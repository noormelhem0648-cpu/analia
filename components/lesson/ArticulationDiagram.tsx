'use client'

import type { MakhrajZone } from '@/lib/arabicAlphabet'

interface Props {
  activeZone?: MakhrajZone
  size?: number
  showLabel?: boolean
  locale?: string
}

const ZONE_LABELS: Record<MakhrajZone, { zh: string; en: string; ar: string }> = {
  lips:        { zh: '双唇', en: 'Lips', ar: 'الشفتان' },
  teeth_lip:   { zh: '唇齿', en: 'Lip-Teeth', ar: 'أسنان+شفة' },
  interdental: { zh: '齿间', en: 'Interdental', ar: 'بين الأسنان' },
  alveolar:    { zh: '齿龈', en: 'Alveolar', ar: 'اللثة' },
  emphatic:    { zh: '粗音区', en: 'Emphatic', ar: 'مفخّم' },
  sibilant:    { zh: '嘶音', en: 'Sibilant', ar: 'صفير' },
  palatal:     { zh: '硬腭', en: 'Palatal', ar: 'الحنك' },
  velar:       { zh: '软腭', en: 'Velar', ar: 'الحنك اللين' },
  uvular:      { zh: '悬雍垂', en: 'Uvular', ar: 'اللهاة' },
  pharyngeal:  { zh: '咽喉', en: 'Pharyngeal', ar: 'الحلق' },
  glottal:     { zh: '声门', en: 'Glottal', ar: 'المزمار' },
  cavity:      { zh: '口腔空腔', en: 'Oral Cavity', ar: 'الجوف' },
}

// Map each zone to one or more highlighted region IDs in the SVG
const ZONE_REGIONS: Record<MakhrajZone, string[]> = {
  lips:        ['region-lips'],
  teeth_lip:   ['region-teeth-lip', 'region-upper-teeth'],
  interdental: ['region-upper-teeth', 'region-lower-teeth', 'region-tongue-tip'],
  alveolar:    ['region-alveolar', 'region-tongue-tip'],
  emphatic:    ['region-alveolar', 'region-tongue-body', 'region-pharynx'],
  sibilant:    ['region-alveolar', 'region-tongue-tip'],
  palatal:     ['region-hard-palate', 'region-tongue-body'],
  velar:       ['region-soft-palate', 'region-tongue-back'],
  uvular:      ['region-uvula', 'region-tongue-back'],
  pharyngeal:  ['region-pharynx'],
  glottal:     ['region-larynx'],
  cavity:      ['region-oral-cavity'],
}

const ACTIVE_COLOR = '#EF4444'
const INACTIVE_FILL = '#F3F4F6'
const SKIN_COLOR = '#FDDCB5'
const SKIN_DARK = '#E8B88A'
const TONGUE_COLOR = '#F87171'
const TONGUE_DARK = '#EF4444'

export default function ArticulationDiagram({ activeZone, size = 280, showLabel = true, locale = 'zh' }: Props) {
  const activeRegions = activeZone ? ZONE_REGIONS[activeZone] : []

  function fill(id: string) {
    return activeRegions.includes(id) ? ACTIVE_COLOR : INACTIVE_FILL
  }
  function stroke(id: string) {
    return activeRegions.includes(id) ? '#B91C1C' : '#D1D5DB'
  }
  function opacity(id: string) {
    return activeRegions.includes(id) ? 1 : 0.6
  }

  const label = activeZone ? (ZONE_LABELS[activeZone]?.[locale as 'zh' | 'en' | 'ar'] ?? ZONE_LABELS[activeZone].en) : ''

  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        viewBox="0 0 260 300"
        width={size}
        height={size * 1.07}
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }}
        aria-label={`Articulation diagram${activeZone ? ': ' + label : ''}`}
      >
        {/* ── Background ── */}
        <rect width="260" height="300" rx="16" fill="white" />

        {/* ── Head outline (side profile, facing right) ── */}
        {/* Skull/forehead */}
        <path d="M 80 20 Q 180 10 200 70 Q 220 120 210 160 L 200 180" fill={SKIN_COLOR} stroke={SKIN_DARK} strokeWidth="1.5" />
        {/* Face/nose/chin area */}
        <path d="M 200 180 Q 215 200 210 220 Q 205 235 195 240 Q 210 250 205 265 Q 200 280 175 282 Q 140 285 110 280 L 90 270 Q 60 260 55 240 Q 50 220 60 200 L 70 180 L 75 160 Q 70 120 75 80 Q 78 50 80 20" fill={SKIN_COLOR} stroke={SKIN_DARK} strokeWidth="1.5" />

        {/* ── Neck ── */}
        <path d="M 90 270 L 85 300 L 165 300 L 175 282" fill={SKIN_COLOR} stroke={SKIN_DARK} strokeWidth="1" />

        {/* ── Nose ── */}
        <path d="M 200 180 Q 218 188 215 205 Q 212 218 200 220" fill={SKIN_COLOR} stroke={SKIN_DARK} strokeWidth="1.2" />
        <ellipse cx="205" cy="212" rx="7" ry="5" fill={SKIN_DARK} opacity="0.3" />

        {/* ── Upper lip ── */}
        <path id="region-lips"
          d="M 170 242 Q 185 240 195 238 Q 197 245 192 250 Q 180 255 168 252 Z"
          fill={fill('region-lips')} stroke={stroke('region-lips')} strokeWidth="1.5"
          opacity={opacity('region-lips')} />
        {/* Lower lip */}
        <path d="M 168 252 Q 180 255 192 250 Q 190 262 175 265 Q 160 268 155 260 Z"
          fill={fill('region-lips')} stroke={stroke('region-lips')} strokeWidth="1.5"
          opacity={opacity('region-lips')} />

        {/* ── Oral cavity (open mouth inside) ── */}
        <ellipse id="region-oral-cavity" cx="138" cy="248" rx="48" ry="22"
          fill={fill('region-oral-cavity')} stroke={stroke('region-oral-cavity')} strokeWidth="1"
          opacity={opacity('region-oral-cavity') * 0.5} />

        {/* ── Upper teeth ── */}
        <path id="region-upper-teeth"
          d="M 160 242 Q 140 238 120 240 Q 118 248 120 252 Q 140 250 160 248 Z"
          fill={activeRegions.includes('region-upper-teeth') ? ACTIVE_COLOR : 'white'}
          stroke={stroke('region-upper-teeth')} strokeWidth="1"
          opacity={opacity('region-upper-teeth')} />
        {/* Teeth dividers */}
        {[128, 136, 144, 152].map(x => (
          <line key={x} x1={x} y1="240" x2={x} y2="251" stroke="#D1D5DB" strokeWidth="0.8" />
        ))}

        {/* ── Lower teeth ── */}
        <path id="region-lower-teeth"
          d="M 120 252 Q 140 250 160 252 Q 162 258 158 262 Q 140 264 122 262 Z"
          fill={activeRegions.includes('region-lower-teeth') ? ACTIVE_COLOR : 'white'}
          stroke="#D1D5DB" strokeWidth="1" />

        {/* ── Hard palate (roof of mouth) ── */}
        <path id="region-hard-palate"
          d="M 90 220 Q 95 200 100 185 Q 120 178 145 180 Q 160 181 165 190 Q 168 200 165 215 Q 145 210 120 210 Q 100 211 90 220"
          fill={fill('region-hard-palate')} stroke={stroke('region-hard-palate')} strokeWidth="1.5"
          opacity={opacity('region-hard-palate')} />

        {/* ── Alveolar ridge (behind upper teeth) ── */}
        <path id="region-alveolar"
          d="M 158 238 Q 165 230 168 220 Q 165 215 158 218 Q 153 228 148 238 Z"
          fill={fill('region-alveolar')} stroke={stroke('region-alveolar')} strokeWidth="1.5"
          opacity={opacity('region-alveolar')} />

        {/* ── Soft palate / velum ── */}
        <path id="region-soft-palate"
          d="M 90 220 Q 88 215 85 208 Q 83 195 86 185 Q 95 178 100 185 Q 95 200 90 220"
          fill={fill('region-soft-palate')} stroke={stroke('region-soft-palate')} strokeWidth="1.5"
          opacity={opacity('region-soft-palate')} />

        {/* ── Uvula (little hangy thing) ── */}
        <ellipse id="region-uvula" cx="87" cy="195" rx="6" ry="9"
          fill={fill('region-uvula')} stroke={stroke('region-uvula')} strokeWidth="1.5"
          opacity={opacity('region-uvula')} />

        {/* ── Pharynx / throat ── */}
        <path id="region-pharynx"
          d="M 75 200 Q 70 195 68 185 Q 65 165 70 148 Q 75 140 82 142 Q 88 155 88 175 Q 87 185 85 195 Q 80 198 75 200"
          fill={fill('region-pharynx')} stroke={stroke('region-pharynx')} strokeWidth="1.5"
          opacity={opacity('region-pharynx')} />

        {/* ── Larynx / glottis ── */}
        <path id="region-larynx"
          d="M 70 148 Q 68 135 72 120 Q 78 110 85 112 Q 90 125 88 142 Q 82 142 70 148"
          fill={fill('region-larynx')} stroke={stroke('region-larynx')} strokeWidth="1.5"
          opacity={opacity('region-larynx')} />

        {/* ── Tongue — body ── */}
        <path id="region-tongue-body"
          d="M 95 258 Q 90 248 88 235 Q 87 220 90 208 Q 100 205 120 208 Q 140 210 148 218 Q 148 230 140 240 Q 130 250 118 256 Q 105 260 95 258"
          fill={activeRegions.includes('region-tongue-body') ? ACTIVE_COLOR : TONGUE_COLOR}
          stroke={activeRegions.includes('region-tongue-body') ? '#B91C1C' : TONGUE_DARK}
          strokeWidth="1.5"
          opacity={activeRegions.includes('region-tongue-body') ? 1 : 0.85} />

        {/* Tongue tip */}
        <path id="region-tongue-tip"
          d="M 140 240 Q 148 238 155 245 Q 150 255 140 252 Q 135 248 140 240"
          fill={activeRegions.includes('region-tongue-tip') ? ACTIVE_COLOR : TONGUE_DARK}
          stroke={activeRegions.includes('region-tongue-tip') ? '#B91C1C' : '#DC2626'}
          strokeWidth="1"
          opacity={activeRegions.includes('region-tongue-tip') ? 1 : 0.9} />

        {/* Tongue back */}
        <path id="region-tongue-back"
          d="M 90 208 Q 85 200 83 188 Q 82 178 86 172 Q 92 170 97 178 Q 100 192 100 208 Z"
          fill={activeRegions.includes('region-tongue-back') ? ACTIVE_COLOR : TONGUE_DARK}
          stroke={activeRegions.includes('region-tongue-back') ? '#B91C1C' : '#DC2626'}
          strokeWidth="1"
          opacity={activeRegions.includes('region-tongue-back') ? 1 : 0.75} />

        {/* Lip-teeth region highlight */}
        <path id="region-teeth-lip"
          d="M 168 250 Q 175 252 188 248 Q 192 252 190 258 Q 178 260 168 257 Z"
          fill={fill('region-teeth-lip')} stroke={stroke('region-teeth-lip')} strokeWidth="1"
          opacity={opacity('region-teeth-lip')} />

        {/* ── Airflow arrow when zone active ── */}
        {activeZone && (
          <g opacity="0.7">
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={ACTIVE_COLOR} />
              </marker>
            </defs>
            <line x1="30" y1="248" x2="115" y2="248" stroke={ACTIVE_COLOR} strokeWidth="2"
              strokeDasharray="4 3" markerEnd="url(#arrow)" />
            <text x="12" y="244" fontSize="8" fill={ACTIVE_COLOR} fontFamily="sans-serif">→气流</text>
          </g>
        )}

        {/* ── Zone label ── */}
        {showLabel && activeZone && (
          <text x="130" y="18" textAnchor="middle" fontSize="11" fontWeight="600"
            fill={ACTIVE_COLOR} fontFamily="sans-serif">
            {label}
          </text>
        )}

        {/* ── Legend dots ── */}
        <g transform="translate(8, 26)">
          <circle cx="6" cy="6" r="5" fill={ACTIVE_COLOR} />
          <text x="14" y="10" fontSize="8" fill="#6B7280" fontFamily="sans-serif">
            {locale === 'zh' ? '发音位置' : locale === 'ar' ? 'موضع النطق' : 'Articulation point'}
          </text>
          <circle cx="6" cy="20" r="5" fill={TONGUE_COLOR} />
          <text x="14" y="24" fontSize="8" fill="#6B7280" fontFamily="sans-serif">
            {locale === 'zh' ? '舌头' : locale === 'ar' ? 'اللسان' : 'Tongue'}
          </text>
        </g>
      </svg>

      {showLabel && activeZone && (
        <div className="text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: ACTIVE_COLOR }}>
            {ZONE_LABELS[activeZone].ar} — {label}
          </span>
        </div>
      )}
    </div>
  )
}
