const items = [
  'A deployed web app at your own URL',
  'A live, monetized Roblox game',
  'A full AI content campaign package',
  'Automated workflows running 24/7',
]

function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden style={{ flexShrink: 0, marginTop: 2 }}>
      <path d="M2 7.5L6 11.5L13 3.5" stroke="#39D98A" strokeWidth="1.5" strokeLinecap="square"/>
    </svg>
  )
}

export default function Outcomes() {
  return (
    <section className="sec" style={{ background: '#0A0A0F', padding: '96px 32px', borderTop: '1px solid #2A2A38' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 11, color: '#8A8A9A', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 20 }}>04 · Outcomes</p>
        <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 'clamp(30px,3.8vw,50px)', color: '#F0EFE9', letterSpacing: '-0.02em', marginBottom: 56 }}>Real deliverables. Not certificates.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 12 }}>
          {items.map((item, i) => (
            <div key={i} style={{ background: '#13131A', border: '1px solid #2A2A38', padding: '28px 24px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <Check />
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#F0EFE9', fontWeight: 500, lineHeight: 1.5 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
