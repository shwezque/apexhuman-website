import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail]       = useState('')
  const [done, setDone]         = useState(false)
  const [error, setError]       = useState('')

  const valid = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

  const submit = e => {
    e.preventDefault()
    if (!email.trim()) return setError('Enter your email address.')
    if (!valid(email))  return setError('Enter a valid email address.')

    const list = JSON.parse(localStorage.getItem('apex_leads') || '[]')
    localStorage.setItem('apex_leads', JSON.stringify([...list, { email: email.trim(), ts: new Date().toISOString() }]))
    setDone(true)
  }

  return (
    <section id="apply" style={{ background: '#13131A', padding: '96px 32px', borderTop: '1px solid #2A2A38' }}>
      <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 'clamp(40px,5.5vw,68px)', color: '#F0EFE9', letterSpacing: '-0.025em', lineHeight: 1, marginBottom: 20 }}>
          Ready to build?
        </h2>
        <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 16, color: '#8A8A9A', lineHeight: 1.65, marginBottom: 48 }}>
          Cohort 01 is forming now. Drop your email and we'll be in touch within 48 hours.
        </p>

        {done ? (
          <div style={{ background: '#0A0A0F', border: '1px solid #2A2A38', padding: '40px 32px' }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ margin: '0 auto 18px', display: 'block' }}>
              <path d="M3 11L9 17L19 5" stroke="#39D98A" strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
            <p style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 20, color: '#F0EFE9', marginBottom: 8 }}>You're on the list.</p>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#8A8A9A' }}>We'll be in touch within 48 hours.</p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setError('') }}
              placeholder="your@email.com"
              style={{
                width: '100%', background: 'transparent', border: 'none',
                borderBottom: '1px solid rgba(240,239,233,0.35)', outline: 'none',
                fontFamily: 'Inter,sans-serif', fontSize: 16, color: '#F0EFE9',
                padding: '12px 0', marginBottom: 16, textAlign: 'center',
                transition: 'border-color 0.2s',
              }}
              onFocus={e  => e.target.style.borderBottomColor = '#F0EFE9'}
              onBlur={e   => e.target.style.borderBottomColor = 'rgba(240,239,233,0.35)'}
              aria-label="Email address"
            />
            {error && <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#FF6B6B', marginBottom: 12 }} role="alert">{error}</p>}
            <button
              type="submit"
              style={{
                width: '100%', background: '#4A7CFF', color: '#F0EFE9', border: 'none',
                padding: '16px', borderRadius: 2, fontFamily: 'Inter,sans-serif',
                fontWeight: 600, fontSize: 13, letterSpacing: '0.1em',
                textTransform: 'uppercase', cursor: 'pointer', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >Send Me Details →</button>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#8A8A9A', marginTop: 20 }}>
              No spam. No pressure. Just a conversation about your goals.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
