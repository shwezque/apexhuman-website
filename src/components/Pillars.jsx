const pillars = [
  { n: '01', tag: 'Full-Stack Apps',    title: 'Build & Ship Your Idea',        body: 'Build a real web application — with a database, authentication, and live deployment — in four sessions. No code required.', deliverable: 'A deployed SaaS app at your own URL.' },
  { n: '02', tag: 'Game Development',   title: 'Publish a Roblox Game',          body: 'Go from concept to a live, monetized Roblox game with mechanics, UI, audio, and game passes — in four sessions.',          deliverable: 'A published live Roblox game.' },
  { n: '03', tag: 'Content & Creative', title: 'Build Your AI Content Studio',   body: 'Create a full campaign — copy, visuals, video ad with AI voiceover — using a one-person AI production team.',             deliverable: 'A complete campaign package ready to publish.' },
  { n: '04', tag: 'Operations & Scale', title: 'Automate Your Workflows',        body: 'Map, build, and deploy automations that handle your inbox, leads, reporting, and content distribution — on autopilot.',    deliverable: 'Production-grade workflows running 24/7.' },
]

export default function Pillars() {
  return (
    <section className="sec" style={{ background: '#0A0A0F', padding: '96px 32px', borderTop: '1px solid #2A2A38' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 11, color: '#8A8A9A', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 20 }}>02 · The Program</p>
        <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 'clamp(30px,3.8vw,50px)', color: '#F0EFE9', letterSpacing: '-0.02em', marginBottom: 56 }}>Four ways to build with AI.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 1, background: '#2A2A38' }}>
          {pillars.map(p => (
            <div key={p.n} style={{ background: '#13131A', padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 10, color: '#4A7CFF', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 20, display: 'block' }}>{p.tag}</span>
              <div style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
                <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 11, color: '#8A8A9A', flexShrink: 0, paddingTop: 3 }}>{p.n}</span>
                <h3 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 19, color: '#F0EFE9', letterSpacing: '-0.01em', lineHeight: 1.22 }}>{p.title}</h3>
              </div>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#8A8A9A', lineHeight: 1.7, flex: 1, marginBottom: 24 }}>{p.body}</p>
              <div style={{ borderTop: '1px solid #2A2A38', paddingTop: 20, marginBottom: 14 }}>
                <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 9, color: '#8A8A9A', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Deliverable</span>
                <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 14, color: '#F0EFE9', fontWeight: 500 }}>{p.deliverable}</p>
              </div>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#8A8A9A' }}>4 sessions · 3–4 hrs each</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
