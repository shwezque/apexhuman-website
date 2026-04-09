export default function Nav() {
  return (
    <nav style={{
      flexShrink: 0,
      height: 68,
      display: 'flex',
      alignItems: 'center',
      background: 'transparent',
      borderBottom: 'none',
      position: 'relative',
      zIndex: 10,
    }}>
      <div className="nav-inner" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', width: '100%', display: 'flex', alignItems: 'center', gap: 14 }}>
        <img src="/logo-white.png" alt="" style={{ height: 36, width: 'auto' }} />
        <span style={{ fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: 17, color: '#F0EFE9', letterSpacing: '-0.01em' }}>
          Apex Human
        </span>
      </div>
    </nav>
  )
}
