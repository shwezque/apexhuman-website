import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [done, setDone]     = useState(false)
  const [error, setError]   = useState('')
  const [focused, setFocused] = useState(false)
  const [loading, setLoading] = useState(false)

  const valid = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

  const submit = async e => {
    e.preventDefault()
    if (!email.trim()) return setError('Enter your email address.')
    if (!valid(email))  return setError('Enter a valid email address.')
    setLoading(true)
    try {
      const { error: dbError } = await supabase.from('leads').insert({ email: email.trim() })
      if (dbError) {
        if (dbError.code === '23505') return setError('That email is already on the list.')
        return setError('Something went wrong. Please try again.')
      }
      setDone(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={{
      flex: 1, minHeight: 0, background: '#0A0A0F',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Ghost logo watermark */}
      <div aria-hidden className="ghost-logo" style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(480px,60vw,820px)', height: 'clamp(480px,60vw,820px)',
        backgroundImage: 'url(/logo-white.png)',
        backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
        opacity: 0.035, pointerEvents: 'none',
      }} />

      {/* Scanline overlay */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)',
      }} />

      {/* Arc Blue glow */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(74,124,255,0.08) 0%, transparent 68%)',
      }} />

      {/* Content — pushed down from nav */}
      <div className="hero-content" style={{
        maxWidth: 600, width: '100%', padding: '0 32px',
        position: 'relative', textAlign: 'center',
        marginTop: 0,
      }}>

        <h1 className="fade-up-1" style={{
          fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700,
          fontSize: 'clamp(38px,5.2vw,64px)', color: '#F0EFE9',
          letterSpacing: '-0.025em', lineHeight: 1.16,
          marginBottom: 20,
        }}>
          Command AI.<br />Build anything.
        </h1>

        <p className="fade-up-2" style={{
          fontFamily: 'Inter,sans-serif', fontSize: 16,
          color: '#A8AEBB', lineHeight: 1.72, marginBottom: 44,
        }}>
          The people winning with AI aren't the engineers. They're the executives, founders, and creators who learned to direct it. Apex Human is a hands-on program that makes you one of them.
        </p>

        <p className="fade-up-2" style={{
          fontFamily: '"JetBrains Mono",monospace', fontSize: 11,
          color: '#4A7CFF', letterSpacing: '0.14em', textTransform: 'uppercase',
          marginBottom: 28, marginTop: -24,
        }}>
          Be the first to know when the program opens
        </p>

        {/* Form */}
        <div className="fade-up-3">
          {done ? (
            <div style={{
              background: '#13131A', border: '1px solid #2A2A38',
              padding: '40px 32px', maxWidth: 400, margin: '0 auto',
            }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ margin: '0 auto 16px', display: 'block' }}>
                <path d="M3 11L9 17L19 5" stroke="#39D98A" strokeWidth="1.5" strokeLinecap="square"/>
              </svg>
              <p style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 20, color: '#F0EFE9', marginBottom: 8 }}>You're on the list.</p>
              <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#8A8A9A' }}>We'll notify you the moment the program opens.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="hero-form-row" style={{
                background: '#13131A',
                border: `1px solid ${focused ? 'rgba(74,124,255,0.5)' : '#2A2A38'}`,
                boxShadow: focused ? '0 0 0 3px rgba(74,124,255,0.1)' : 'none',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                display: 'flex', alignItems: 'stretch',
                maxWidth: 440, margin: '0 auto',
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setError('') }}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="your@email.com"
                  aria-label="Email address"
                  style={{
                    flex: 1, background: 'transparent', border: 'none', outline: 'none',
                    fontFamily: 'Inter,sans-serif', fontSize: 15, color: '#F0EFE9',
                    padding: '14px 16px',
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = '0.82' }}
                  onMouseLeave={e => e.currentTarget.style.opacity = loading ? '0.6' : '1'}
                  style={{
                    background: '#4A7CFF', color: '#F0EFE9', border: 'none',
                    padding: '14px 22px', fontFamily: '"JetBrains Mono",monospace',
                    fontWeight: 500, fontSize: 11, letterSpacing: '0.12em',
                    textTransform: 'uppercase', cursor: loading ? 'default' : 'pointer',
                    transition: 'opacity 0.2s', whiteSpace: 'nowrap', flexShrink: 0,
                    opacity: loading ? 0.6 : 1,
                  }}
                >{loading ? '...' : 'Notify Me →'}</button>
              </div>

              {error && (
                <p role="alert" style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: '#FF6B6B', marginTop: 10 }}>{error}</p>
              )}

              <div className="hero-meta" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 18 }}>
                <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 10, color: '#4A7CFF', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                  Cohort 01 — Limited Seats
                </span>
                <span aria-hidden style={{ width: 1, height: 10, background: '#2A2A38', display: 'inline-block' }} />
                <span style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#8A8A9A' }}>
                  No spam. Cancel any time.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>

    </section>
  )
}
