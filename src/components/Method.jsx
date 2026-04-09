const steps = [
  { n: '01', title: 'Describe', body: 'Say what you want in plain language. No syntax. No jargon.' },
  { n: '02', title: 'Build',    body: 'AI generates your app, game, content, or workflow in real time.' },
  { n: '03', title: 'Ship',     body: 'Review, refine, and deploy. Yours to keep.' },
]

export default function Method() {
  return (
    <section className="sec" style={{ background: '#0A0A0F', padding: '96px 32px', borderTop: '1px solid #2A2A38' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 11, color: '#8A8A9A', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 64 }}>01 · The Method</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 48 }}>
          {steps.map(s => (
            <div key={s.n}>
              <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 11, color: '#4A7CFF', letterSpacing: '0.15em', display: 'block', marginBottom: 18 }}>{s.n}</span>
              <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 22, color: '#F0EFE9', letterSpacing: '-0.01em', marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#8A8A9A', lineHeight: 1.68 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
