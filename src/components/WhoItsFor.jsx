const audience = [
  { label: 'Executives',    body: 'You want to prototype ideas and automate operations without depending on a technical team.' },
  { label: 'Entrepreneurs', body: 'You have a product idea and want to go from concept to deployed in days, not months.' },
  { label: 'Creators',      body: 'You want to build an AI content engine that produces campaigns at the speed of thought.' },
]

export default function WhoItsFor() {
  return (
    <section className="sec" style={{ background: '#0A0A0F', padding: '96px 32px', borderTop: '1px solid #2A2A38' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 11, color: '#8A8A9A', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 20 }}>03 · Who It's For</p>
        <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 'clamp(30px,3.8vw,50px)', color: '#F0EFE9', letterSpacing: '-0.02em', marginBottom: 56 }}>Built for people with serious goals.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 48, marginBottom: 72 }}>
          {audience.map(a => (
            <div key={a.label}>
              <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 19, color: '#F0EFE9', letterSpacing: '-0.01em', marginBottom: 12 }}>{a.label}</h3>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#8A8A9A', lineHeight: 1.68 }}>{a.body}</p>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid #2A2A38', paddingTop: 60 }}>
          <blockquote style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(20px,2.8vw,34px)', color: '#F0EFE9', letterSpacing: '-0.01em', lineHeight: 1.42, maxWidth: 700, margin: 0 }}>
            "You don't need to learn to code. You need to learn to direct."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
