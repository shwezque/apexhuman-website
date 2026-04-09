const rows = [
  { label: 'Format',       value: 'Live cohort. Small group. Remote.' },
  { label: 'Duration',     value: '4 sessions per pillar · 3–4 hours each' },
  { label: 'Schedule',     value: 'Weekends — Saturday or Sunday mornings' },
  { label: 'Cohort Size',  value: 'Maximum 12 participants' },
  { label: 'Prerequisites',value: 'None. Bring ambition and a laptop.' },
  { label: 'Investment',   value: 'Pricing available on application' },
]

export default function Details() {
  return (
    <section className="sec" style={{ background: '#0A0A0F', padding: '96px 32px', borderTop: '1px solid #2A2A38' }}>
      <div className="details-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 80px' }}>
        <div>
          <p style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 11, color: '#8A8A9A', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 20 }}>05 · Details</p>
          <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 'clamp(28px,3.2vw,42px)', color: '#F0EFE9', letterSpacing: '-0.02em', marginBottom: 48 }}>Program details.</h2>
          <dl>
            {rows.map((r, i) => (
              <div key={r.label} style={{ display: 'flex', gap: 24, padding: '18px 0', borderBottom: i < rows.length - 1 ? '1px solid #2A2A38' : 'none' }}>
                <dt style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 10, color: '#8A8A9A', letterSpacing: '0.16em', textTransform: 'uppercase', minWidth: 130, flexShrink: 0, paddingTop: 2 }}>{r.label}</dt>
                <dd style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#F0EFE9', lineHeight: 1.55 }}>{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        {/* intentional negative space */}
      </div>
    </section>
  )
}
