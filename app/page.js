'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

// ─── Icons (inline SVG) ────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)
const Star = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)
const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const Zap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

// ─── Services Data ─────────────────────────────────────────────────────────
const SERVICES = [
  { icon: '🌐', title: 'Web Design & Dev', desc: 'Premium websites jo aapki brand ko unforgettable banate hain. React, Next.js, WordPress — sab platform.', tag: 'DESIGN', color: '#6c47ff' },
  { icon: '📈', title: 'SEO & Rankings', desc: 'Google pe #1 rank karo. Technical SEO, content strategy, aur backlinks — complete growth engine.', tag: 'GROWTH', color: '#ff3cac' },
  { icon: '📱', title: 'Social Media', desc: 'Instagram, LinkedIn, YouTube — har platform pe viral content jo followers ko customers banaye.', tag: 'SOCIAL', color: '#00d4ff' },
  { icon: '🎯', title: 'Paid Ads (PPC)', desc: 'Google Ads, Meta Ads, YouTube Ads — har rupee pe maximum ROI. 3x conversion guaranteed.', tag: 'ADS', color: '#f59e0b' },
  { icon: '✍️', title: 'Content Marketing', desc: 'Blogs, videos, reels, newsletters — ek complete content ecosystem jo 24/7 leads laata rahe.', tag: 'CONTENT', color: '#10b981' },
  { icon: '🎨', title: 'Branding & Identity', desc: 'Logo, brand guide, packaging — ek aisi identity jo log pehli nazar mein hi pehchaan lein.', tag: 'BRAND', color: '#6c47ff' },
  { icon: '📧', title: 'Email Marketing', desc: 'Automated email funnels jo leads ko nurture karke paying customers mein convert karein.', tag: 'EMAIL', color: '#ff3cac' },
  { icon: '📊', title: 'Analytics & CRO', desc: 'Data-driven decisions. Conversion rate optimization jo aapki existing traffic se 2x results de.', tag: 'DATA', color: '#00d4ff' },
  { icon: '🎬', title: 'Video Production', desc: 'Brand films, product videos, reels, ads — cinematic quality jo audience ko hook karle.', tag: 'VIDEO', color: '#f59e0b' },
]

// ─── Stats ─────────────────────────────────────────────────────────────────
const STATS = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 5.0, suffix: '★', label: 'Avg Rating', decimal: 1 },
  { value: 100, suffix: '%', label: 'On-Time Delivery' },
  { value: 3, suffix: 'x', label: 'Avg Revenue Growth' },
]

// ─── Testimonials ──────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { name: 'Arjun Mehta', role: 'Founder, TechScale', text: 'NEXUS ne hamare conversion rate ko 340% badha diya. Sirf 3 mahine mein 50 lakh ka revenue — unbelievable!', rating: 5 },
  { name: 'Priya Sharma', role: 'CEO, LuxeFashion', text: 'Instagram pe 0 se 200k followers in 6 months. Unka social media strategy ekdum next level hai.', rating: 5 },
  { name: 'Rahul Gupta', role: 'MD, PropTech India', text: 'Google pe #1 rank ho gaye 4 mahine mein. Aur organic leads ka flood aa gaya. Best investment ever.', rating: 5 },
  { name: 'Sneha Agarwal', role: 'Founder, HealthFirst', text: 'Website se lekar reels tak, sab kuch NEXUS handle karta hai. Ab main business pe focus kar sakti hun.', rating: 5 },
]

// ─── Process Steps ─────────────────────────────────────────────────────────
const PROCESS = [
  { step: '01', title: 'Discovery Call', desc: 'Aapka business, goals, aur competitors ko samjhte hain. 30-minute free strategy session.' },
  { step: '02', title: 'Custom Strategy', desc: 'Aapke liye tailor-made digital marketing roadmap jo exact results define kare.' },
  { step: '03', title: 'Execution', desc: 'Expert team deploy ho jaati hai. Design, content, ads — sab parallel chalta hai.' },
  { step: '04', title: 'Optimize & Scale', desc: 'Weekly reports, A/B testing, aur continuous optimization. Results improve hote rahe.' },
]

// ─── Pricing ───────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: 'Starter',
    price: '24,999',
    period: '/month',
    desc: 'Perfect for new businesses',
    features: ['Website + 3 pages', 'Basic SEO', 'Social media (2 platforms)', '8 posts/month', 'Monthly report', 'WhatsApp support'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    price: '59,999',
    period: '/month',
    desc: 'Most popular — serious growth',
    features: ['Custom website (unlimited pages)', 'Advanced SEO + content', 'Social media (4 platforms)', 'Google + Meta Ads', '25 posts + 8 reels/month', 'Email marketing', 'Weekly reports', 'Dedicated account manager'],
    cta: 'Start Growing',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large-scale operations',
    features: ['Full digital ecosystem', 'Unlimited campaigns', 'All platforms covered', 'Video production', 'Brand identity', 'CRO + Analytics', 'Daily reports', 'Priority 24/7 support'],
    cta: 'Talk to Us',
    featured: false,
  },
]

// ─── Marquee items ─────────────────────────────────────────────────────────
const MARQUEE = ['Web Design', 'SEO', 'Branding', 'Social Media', 'Google Ads', 'Content', 'Email Marketing', 'Video Production', 'Meta Ads', 'Analytics', 'CRO', 'UI/UX']

// ─── Hook: Scroll Reveal ───────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ─── Hook: Counter ─────────────────────────────────────────────────────────
function useCounter(target, duration = 2000, decimal = 0) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = Date.now()
        const tick = () => {
          const elapsed = Date.now() - start
          const progress = Math.min(elapsed / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          setCount(parseFloat((target * ease).toFixed(decimal)))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration, decimal])

  return [count, ref]
}

// ─── Stat Item ─────────────────────────────────────────────────────────────
function StatItem({ value, suffix, label, decimal }) {
  const [count, ref] = useCounter(value, 1800, decimal || 0)
  return (
    <div ref={ref} className="text-center">
      <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1 }}>
        <span className="gradient-text">{decimal ? count.toFixed(decimal) : Math.round(count)}{suffix}</span>
      </div>
      <div style={{ color: 'var(--muted)', fontSize: '0.875rem', marginTop: 8, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</div>
    </div>
  )
}

// ─── Tilt Card ─────────────────────────────────────────────────────────────
function TiltCard({ children, className, style }) {
  const cardRef = useRef(null)
  const handleMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -8
    const rotateY = ((x - cx) / cx) * 8
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
  }, [])
  const handleLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)'
  }, [])

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ ...style, transition: 'transform 0.2s ease-out', willChange: 'transform' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal()

  // Cursor
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const ringPos = useRef({ x: 0, y: 0 })
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', onMove)

    let raf
    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px'
        ringRef.current.style.top = ringPos.current.y + 'px'
      }
      raf = requestAnimationFrame(animateRing)
    }
    raf = requestAnimationFrame(animateRing)

    const addHover = () => {
      dotRef.current?.classList.add('hovered')
      ringRef.current?.classList.add('hovered')
    }
    const removeHover = () => {
      dotRef.current?.classList.remove('hovered')
      ringRef.current?.classList.remove('hovered')
    }
    document.querySelectorAll('button, a, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Nav scroll state
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hero text animation
  const heroRef = useRef(null)
  const [heroVisible, setHeroVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Parallax orbs
  const orbRef1 = useRef(null)
  const orbRef2 = useRef(null)
  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      if (orbRef1.current) {
        orbRef1.current.style.transform = `translate(${x * 40}px, ${y * 30}px)`
      }
      if (orbRef2.current) {
        orbRef2.current.style.transform = `translate(${-x * 30}px, ${-y * 20}px)`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const [activeService, setActiveService] = useState(null)

  return (
    <>
      {/* Custom Cursor */}
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 5%',
        transition: 'all 0.4s',
        ...(scrolled ? { background: 'rgba(5,5,8,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' } : {})
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'linear-gradient(135deg, #6c47ff, #ff3cac)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, fontWeight: 900,
              boxShadow: '0 0 20px rgba(108,71,255,0.5)'
            }}>N</div>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.02em' }}>
              NEXUS<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="hidden md:flex">
            {['Services', 'Process', 'Work', 'Pricing', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{
                color: 'var(--muted)', textDecoration: 'none',
                fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.02em',
                transition: 'color 0.3s', position: 'relative',
              }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >{l}</a>
            ))}
          </div>

          {/* CTA */}
          <button className="btn-primary" style={{ padding: '10px 24px', borderRadius: 100, fontSize: '0.875rem' }}>
            <span>Let&apos;s Talk</span>
            <ArrowRight />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 72 }} className="grid-bg">
        {/* Orbs */}
        <div ref={orbRef1} style={{ position: 'absolute', top: '10%', right: '5%', width: 600, height: 600, transition: 'transform 0.3s ease-out' }}>
          <div className="orb" style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(108,71,255,0.25) 0%, transparent 70%)' }} />
        </div>
        <div ref={orbRef2} style={{ position: 'absolute', bottom: '10%', left: '0%', width: 500, height: 500, transition: 'transform 0.3s ease-out' }}>
          <div className="orb" style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(255,60,172,0.15) 0%, transparent 70%)' }} />
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 400, height: 400 }}>
          <div className="orb" style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)' }} />
        </div>

        {/* Spinning rings */}
        <div style={{ position: 'absolute', top: '50%', right: '8%', transform: 'translateY(-50%)' }}>
          <div className="spin-slow" style={{ width: 320, height: 320, border: '1px solid rgba(108,71,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="spin-reverse" style={{ width: 240, height: 240, border: '1px solid rgba(255,60,172,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 160, height: 160, border: '1px solid rgba(0,212,255,0.1)', borderRadius: '50%' }} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ maxWidth: 800 }}>
            {/* Tag */}
            <div style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.23,1,0.32,1)',
              marginBottom: 28,
            }}>
              <span className="tag">
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
                Full-Service Digital Marketing Agency
              </span>
            </div>

            {/* Main heading */}
            {['We Make', 'Brands', 'Impossible'].map((word, i) => (
              <div key={word} style={{
                overflow: 'hidden',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(60px)',
                transition: `all 0.8s cubic-bezier(0.23,1,0.32,1) ${0.1 + i * 0.12}s`,
              }}>
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                }}>
                  {word === 'Impossible' ? <span className="animated-gradient">{word}</span> : word}
                  {word === 'Brands' && <span style={{ color: 'var(--accent)' }}> </span>}
                </div>
              </div>
            ))}
            <div style={{
              overflow: 'hidden',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(60px)',
              transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1) 0.46s',
            }}>
              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--muted)',
              }}>to Ignore.</div>
            </div>

            {/* Sub */}
            <div style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1) 0.6s',
              marginTop: 28,
              marginBottom: 40,
              maxWidth: 520,
            }}>
              <p style={{ color: 'var(--muted)', fontSize: '1.125rem', lineHeight: 1.7, fontWeight: 400 }}>
                Web design se lekar SEO, social media, ads aur branding tak — ek hi agency, A to Z digital growth. 
                <span style={{ color: 'white', fontWeight: 600 }}> 500+ brands</span> ka trust.
              </p>
            </div>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1) 0.72s',
            }}>
              <button className="btn-primary" style={{ padding: '16px 32px', borderRadius: 100, fontSize: '1rem' }}>
                <span>Start Free Consultation</span>
                <ArrowRight />
              </button>
              <button className="btn-ghost" style={{ padding: '16px 32px', borderRadius: 100, fontSize: '1rem' }}>
                <span>See Our Work</span>
              </button>
            </div>

            {/* Social proof */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 16, marginTop: 48,
              opacity: heroVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.23,1,0.32,1) 0.85s',
            }}>
              <div style={{ display: 'flex' }}>
                {['A','B','C','D','E'].map((l,i) => (
                  <div key={l} style={{
                    width: 36, height: 36, borderRadius: '50%', marginLeft: i === 0 ? 0 : -10,
                    background: `hsl(${i * 60 + 240}, 70%, 50%)`,
                    border: '2px solid var(--bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: 700,
                  }}>{l}</div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: '#f59e0b' }}><Star /></span>)}
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}><strong style={{ color: 'white' }}>500+ clients</strong> growing with NEXUS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</div>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))', padding: '14px 0', overflow: 'hidden', position: 'relative' }}>
        <div className="marquee-track" style={{ display: 'flex', gap: 0, width: 'max-content' }}>
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} style={{ padding: '0 32px', whiteSpace: 'nowrap', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 16 }}>
              {item} <span style={{ color: 'rgba(255,255,255,0.5)' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section style={{ padding: '100px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 1, background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48 }} className="reveal stagger">
            {STATS.map((s, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <StatItem {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: '120px 5%', background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(108,71,255,0.1) 0%, transparent 70%)', top: '20%', right: '-10%' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: 72, maxWidth: 600 }}>
            <div className="reveal"><span className="tag" style={{ marginBottom: 20, display: 'inline-flex' }}>Everything Included</span></div>
            <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', marginTop: 16 }}>
              A–Z Digital Services.<br /><span className="gradient-text">Ek Hi Jagah.</span>
            </h2>
            <p className="reveal" style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.7, marginTop: 16 }}>
              Alag alag agencies ki zarurat nahi. NEXUS mein sab kuch milta hai — strategy se execution tak.
            </p>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }} className="stagger">
            {SERVICES.map((s, i) => (
              <TiltCard key={s.title} className="service-card reveal" style={{ padding: 32, borderRadius: 20, cursor: 'pointer', transitionDelay: `${i * 0.07}s` }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{s.icon}</div>
                <div style={{
                  display: 'inline-block', padding: '3px 10px', borderRadius: 6, fontSize: 10,
                  fontWeight: 700, letterSpacing: '0.1em',
                  background: `${s.color}20`, color: s.color, marginBottom: 12,
                  border: `1px solid ${s.color}40`,
                }}>{s.tag}</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.2rem', fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>{s.desc}</p>
                <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 8, color: s.color, fontSize: '0.875rem', fontWeight: 600 }}>
                  Learn more <ArrowRight />
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ padding: '120px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <span className="tag reveal" style={{ marginBottom: 20, display: 'inline-flex' }}>Why NEXUS</span>
            <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginTop: 16, marginBottom: 24 }}>
              Baaki agencies kya dete hain, hum kya dete hain
            </h2>

            {/* Comparison */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
              <div style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 16, padding: 20 }}>
                <div style={{ fontWeight: 700, marginBottom: 12, color: '#ef4444', fontSize: '0.85rem', letterSpacing: '0.05em' }}>❌ OTHERS</div>
                {['Ek hi service', 'Slow results', 'No transparency', 'Fixed templates', 'Fake reports', 'Ghosting after payment'].map(x => (
                  <div key={x} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: 8, paddingLeft: 8, borderLeft: '2px solid rgba(239,68,68,0.3)' }}>{x}</div>
                ))}
              </div>
              <div style={{ background: 'rgba(108,71,255,0.07)', border: '1px solid rgba(108,71,255,0.25)', borderRadius: 16, padding: 20 }}>
                <div style={{ fontWeight: 700, marginBottom: 12, color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>✅ NEXUS</div>
                {['A–Z sabkuch', 'Results in 90 days', 'Weekly reports', 'Custom everything', 'Real data', 'Dedicated manager'].map(x => (
                  <div key={x} style={{ color: 'var(--text)', fontSize: '0.85rem', marginBottom: 8, paddingLeft: 8, borderLeft: '2px solid var(--accent)' }}>{x}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - floating card */}
          <div style={{ position: 'relative' }}>
            <div className="reveal-right float" style={{
              background: 'var(--surface)',
              border: '1px solid rgba(108,71,255,0.3)',
              borderRadius: 24, padding: 36,
              boxShadow: '0 40px 80px rgba(0,0,0,0.4), 0 0 60px rgba(108,71,255,0.15)',
            }}>
              <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg, var(--accent), var(--accent2))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>📊</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Aapki Brand Ka Growth</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>Last 6 months</div>
                </div>
              </div>

              {/* Fake chart bars */}
              {[['Jan', 40], ['Feb', 55], ['Mar', 48], ['Apr', 72], ['May', 88], ['Jun', 95]].map(([m, h]) => (
                <div key={m} style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginBottom: 12 }}>
                  <div style={{ width: 36, color: 'var(--muted)', fontSize: '0.75rem', textAlign: 'right' }}>{m}</div>
                  <div style={{ flex: 1, height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', width: `${h}%`, borderRadius: 4,
                      background: h > 80 ? 'linear-gradient(90deg, var(--accent), var(--accent2))' : 'rgba(108,71,255,0.5)',
                      transition: 'width 1s ease'
                    }} />
                  </div>
                  <div style={{ width: 36, color: h > 80 ? 'var(--accent2)' : 'var(--muted)', fontSize: '0.75rem', fontWeight: 600 }}>{h}%</div>
                </div>
              ))}

              <div style={{ marginTop: 20, padding: 16, background: 'rgba(108,71,255,0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 20 }}>🚀</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>+138% Growth</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>6 mahine mein average client growth</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="float2" style={{
              position: 'absolute', top: -20, right: -20,
              background: 'linear-gradient(135deg, var(--accent2), #ff6b6b)',
              borderRadius: 16, padding: '12px 20px',
              boxShadow: '0 20px 40px rgba(255,60,172,0.3)',
            }}>
              <div style={{ fontWeight: 800, fontSize: '1.5rem' }}>500+</div>
              <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ padding: '120px 5%', background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <span className="tag reveal" style={{ marginBottom: 20, display: 'inline-flex' }}>Simple Process</span>
            <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginTop: 16 }}>
              Idea se <span className="gradient-text">Live Results</span> tak
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            {PROCESS.map((p, i) => (
              <div key={p.step} className="reveal" style={{ transitionDelay: `${i * 0.15}s`, position: 'relative' }}>
                {i < PROCESS.length - 1 && (
                  <div style={{ position: 'absolute', top: 28, left: 'calc(100% - 16px)', width: 32, height: 2, background: 'linear-gradient(90deg, var(--accent), transparent)', zIndex: 1 }} />
                )}
                <div style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 20, padding: 28, transition: 'all 0.4s',
                  position: 'relative', overflow: 'hidden',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(108,71,255,0.4)'; e.currentTarget.style.transform = 'translateY(-6px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  <div style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '3rem',
                    color: 'rgba(108,71,255,0.15)', lineHeight: 1, marginBottom: 20,
                    position: 'absolute', top: 16, right: 20,
                  }}>{p.step}</div>
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: 'linear-gradient(135deg, rgba(108,71,255,0.2), rgba(255,60,172,0.1))',
                    border: '1px solid rgba(108,71,255,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', marginBottom: 16,
                  }}>
                    {['🔍','📋','⚡','📈'][i]}
                  </div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.15rem', marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '120px 5%', position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,60,172,0.08) 0%, transparent 70%)', bottom: '0', left: '30%' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <span className="tag reveal" style={{ marginBottom: 20, display: 'inline-flex' }}>Seller Stories</span>
            <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginTop: 16 }}>
              Real Clients. <span className="gradient-text">Real Results.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }} className="stagger">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="reveal" style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 20, padding: 28, transition: 'all 0.4s',
                transitionDelay: `${i * 0.1}s`,
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(108,71,255,0.3)'; e.currentTarget.style.transform = 'translateY(-6px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {Array(t.rating).fill(0).map((_, j) => <span key={j} style={{ color: '#f59e0b' }}><Star /></span>)}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.925rem', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: '50%',
                    background: `hsl(${i * 80 + 200}, 60%, 45%)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '0.95rem',
                  }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: '120px 5%', background: 'var(--bg2)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <span className="tag reveal" style={{ marginBottom: 20, display: 'inline-flex' }}>Simple Pricing</span>
            <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', marginTop: 16 }}>
              Flat Price. <span className="gradient-text">Zero Surprises.</span>
            </h2>
            <p className="reveal" style={{ color: 'var(--muted)', fontSize: '1rem', marginTop: 12 }}>No hidden fees. No commission. 30-day free trial on all plans.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'start' }}>
            {PLANS.map((plan, i) => (
              <div key={plan.name} className={`pricing-card reveal ${plan.featured ? 'featured' : ''}`} style={{
                borderRadius: 24, padding: 36,
                transitionDelay: `${i * 0.1}s`,
                transform: plan.featured ? 'scale(1.03)' : undefined,
              }}>
                {plan.featured && (
                  <div style={{
                    position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                    padding: '4px 20px', borderRadius: '0 0 12px 12px',
                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
                    whiteSpace: 'nowrap',
                  }}>MOST POPULAR</div>
                )}

                <div style={{ marginBottom: 8, marginTop: plan.featured ? 16 : 0 }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>{plan.name}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: 4 }}>{plan.desc}</div>
                </div>

                <div style={{ margin: '24px 0', display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  {plan.price !== 'Custom' && <span style={{ color: 'var(--muted)', fontSize: '1.2rem' }}>₹</span>}
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2.5rem', ...(plan.featured ? { backgroundImage: 'linear-gradient(135deg, #a78bfa, var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } : {}) }}>
                    {plan.price}
                  </span>
                  <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{plan.period}</span>
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, marginBottom: 28 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <span style={{ color: plan.featured ? 'var(--accent2)' : 'var(--accent)', flexShrink: 0 }}><Check /></span>
                      <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={plan.featured ? 'btn-primary' : 'btn-ghost'}
                  style={{ width: '100%', padding: '14px', borderRadius: 100, fontSize: '0.95rem', justifyContent: 'center' }}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section id="contact" style={{ padding: '120px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(108,71,255,0.15) 0%, transparent 70%)' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

          {/* Rings */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}>
            {[300, 450, 600].map((size, i) => (
              <div key={size} style={{
                width: size, height: size,
                border: `1px solid rgba(108,71,255,${0.12 - i * 0.03})`,
                borderRadius: '50%',
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%,-50%)',
                animation: `spin-slow ${20 + i * 5}s linear infinite ${i % 2 === 1 ? 'reverse' : ''}`,
              }} />
            ))}
          </div>

          <span className="tag reveal" style={{ marginBottom: 24, display: 'inline-flex' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }} />
            Abhi Slots Available
          </span>

          <h2 className="reveal" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginTop: 16, marginBottom: 24 }}>
            Aapki Brand<br /><span className="animated-gradient">Live Honi Chahiye.</span><br />Aaj Raat.
          </h2>

          <p className="reveal" style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 40 }}>
            Free 30-minute strategy call book karo. Koi sales pressure nahi, sirf honest advice — aur ek clear roadmap.
          </p>

          <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ padding: '18px 40px', borderRadius: 100, fontSize: '1.05rem' }}>
              <span>🚀 Book Free Strategy Call</span>
              <ArrowRight />
            </button>
            <button className="btn-ghost" style={{ padding: '18px 32px', borderRadius: 100, fontSize: '1rem' }}>
              WhatsApp Us
            </button>
          </div>

          <div className="reveal" style={{ marginTop: 40, display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['No credit card', 'No commitment', 'Response in 2 hours'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--muted)', fontSize: '0.875rem' }}>
                <span style={{ color: '#22c55e' }}><Check /></span> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#030306', borderTop: '1px solid var(--border)', padding: '60px 5% 30px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 60 }}>
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #6c47ff, #ff3cac)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>N</div>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>NEXUS<span style={{ color: 'var(--accent)' }}>.</span></span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 260 }}>
                India ki premium digital marketing agency. Zero to ₹1 crore — hum saath hain.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                {['📸','💼','🐦','📺'].map((icon, i) => (
                  <div key={i} style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(108,71,255,0.5)'; e.currentTarget.style.background = 'rgba(108,71,255,0.1)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)' }}
                  >{icon}</div>
                ))}
              </div>
            </div>

            {[
              { title: 'Services', links: ['Web Design', 'SEO', 'Social Media', 'Paid Ads', 'Branding', 'Content'] },
              { title: 'Company', links: ['About Us', 'Our Work', 'Case Studies', 'Blog', 'Careers'] },
              { title: 'Contact', links: ['WhatsApp', 'Email Us', 'Book a Call', 'Mumbai Office', 'Delhi Office'] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: 16, textTransform: 'uppercase' }}>{col.title}</div>
                {col.links.map(l => (
                  <div key={l} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ color: 'var(--muted)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = 'white'}
                      onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                    >{l}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>© 2026 NEXUS. All rights reserved.</div>
            <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>Built with ❤️ in India</div>
          </div>
        </div>
      </footer>
    </>
  )
}
