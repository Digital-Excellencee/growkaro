'use client'
import { useEffect, useState } from 'react'

const WA_NUMBER = '917300628199'
const WA_URL = `https://wa.me/${WA_NUMBER}`

const MARQUEE_ITEMS = [
  'Facebook Ads', 'Google Ads', 'Instagram Growth', 'Website Development',
  'SEO', 'Branding', 'Lead Generation', 'Video Editing', 'Content Marketing',
  'Social Media', 'YouTube Promotion', 'Logo Design', 'Reel Making',
  'Email Marketing', 'CRO', 'Analytics', 'Influencer Marketing',
]

const STATS = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 3, suffix: 'x', label: 'Avg ROI Growth' },
  { value: 24, suffix: 'hr', label: 'Support Available' },
]

const SERVICE_CATEGORIES = [
  {
    icon: '🎯',
    iconBg: 'linear-gradient(135deg, rgba(108,71,255,0.25), rgba(0,212,255,0.15))',
    title: 'Digital Marketing & Ads',
    desc: 'Facebook, Instagram, Google, YouTube — har platform pe targeted ads jo actual customers laayein.',
    tags: ['Facebook Ads', 'Google Ads', 'YouTube Ads', 'Lead Generation', 'Retargeting', 'Meta Ads'],
  },
  {
    icon: '📱',
    iconBg: 'linear-gradient(135deg, rgba(225,48,108,0.25), rgba(255,60,172,0.15))',
    title: 'Social Media Management',
    desc: 'Poora Instagram, Facebook, LinkedIn page handle karte hain. Content, reels, engagement — sab.',
    tags: ['Page Management', 'Reels & Posts', 'Follower Growth', 'Engagement', 'Community'],
  },
  {
    icon: '🎨',
    iconBg: 'linear-gradient(135deg, rgba(249,115,22,0.25), rgba(251,191,36,0.15))',
    title: 'Branding & Identity',
    desc: 'Logo se lekar brand guide tak — aisi identity jo aapko market mein alag dikhaye.',
    tags: ['Logo Design', 'Brand Identity', 'Brochure', 'Business Card', 'Brand Guide'],
  },
  {
    icon: '🌐',
    iconBg: 'linear-gradient(135deg, rgba(0,212,255,0.25), rgba(6,182,212,0.15))',
    title: 'Website & Online Presence',
    desc: 'Professional websites jo visitors ko customers mein convert karein. SEO ke saath.',
    tags: ['Website Dev', 'Landing Pages', 'SEO', 'Google Business', 'Domain Setup'],
  },
  {
    icon: '🎬',
    iconBg: 'linear-gradient(135deg, rgba(34,197,94,0.25), rgba(16,185,129,0.15))',
    title: 'Content Creation',
    desc: 'Photo shoots, video production, ad creatives — visual content jo brand ko powerful banaye.',
    tags: ['Photo Shoot', 'Video Production', 'Ad Creatives', 'Promo Videos', 'Thumbnails'],
  },
  {
    icon: '📊',
    iconBg: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(108,71,255,0.15))',
    title: 'Strategy & Consulting',
    desc: 'Market research, competitor analysis, aur growth planning jo business ko next level le jaaye.',
    tags: ['Market Research', 'Competitor Analysis', 'Growth Plan', 'Strategy', 'Consulting'],
  },
]

const ALL_SERVICES = [
  { icon: '📘', bg: 'rgba(24,119,242,0.18)', title: 'Facebook Ads', desc: 'Targeted campaigns jo leads aur sales dono laayein.' },
  { icon: '📸', bg: 'rgba(225,48,108,0.18)', title: 'Instagram Marketing', desc: 'Reels, posts, stories — Instagram ko business growth machine banayein.' },
  { icon: '🔍', bg: 'rgba(66,133,244,0.18)', title: 'Google Ads (PPC)', desc: 'Search pe top rank karo jahan customers dhundh rahe hain.' },
  { icon: '▶️', bg: 'rgba(255,0,0,0.15)', title: 'YouTube Promotion', desc: 'Videos ko viral karo aur brand awareness badao.' },
  { icon: '💰', bg: 'rgba(34,197,94,0.18)', title: 'Lead Generation', desc: 'Qualified leads jo seedha aapke sales funnel mein aayein.' },
  { icon: '🌐', bg: 'rgba(108,71,255,0.18)', title: 'Website Development', desc: 'Business, e-commerce, portfolio, landing pages.' },
  { icon: '📈', bg: 'rgba(0,212,255,0.18)', title: 'SEO & Ranking', desc: 'Google pe organically top rank karo — long-term results.' },
  { icon: '🏪', bg: 'rgba(249,115,22,0.18)', title: 'Google Business', desc: 'Google Maps par appear karo jahan customers search karte hain.' },
  { icon: '✏️', bg: 'rgba(139,92,246,0.18)', title: 'Logo Design', desc: 'Memorable logos jo brand ki pehchaan ban jaayein.' },
  { icon: '📑', bg: 'rgba(16,185,129,0.18)', title: 'Brand Identity', desc: 'Color palette, typography, brand guide — full identity.' },
  { icon: '🖼️', bg: 'rgba(249,115,22,0.18)', title: 'Poster & Banner', desc: 'Festival creatives, event banners, social media graphics.' },
  { icon: '🎥', bg: 'rgba(34,197,94,0.18)', title: 'Video Editing', desc: 'YouTube, reels, ads — professional editing har platform ke liye.' },
  { icon: '📞', bg: 'rgba(24,119,242,0.18)', title: 'WhatsApp Marketing', desc: 'Broadcast campaigns jo direct customers tak pohanchein.' },
  { icon: '📧', bg: 'rgba(108,71,255,0.18)', title: 'Email Marketing', desc: 'Automated email sequences jo nurture aur convert karein.' },
  { icon: '🏷️', bg: 'rgba(251,191,36,0.18)', title: 'Coupon & Offers', desc: 'Festive offers, discount codes, referral programs.' },
  { icon: '👤', bg: 'rgba(139,92,246,0.18)', title: 'Personal Branding', desc: 'Politician, influencer, businessman — personal brand banao.' },
]

const PROCESS = [
  { num: '01', title: 'Discovery Call', desc: 'Aapke business, goals, competitors aur target audience ko samjhte hain. Free 30-min strategy session.' },
  { num: '02', title: 'Custom Strategy', desc: 'Aapke liye tailor-made digital marketing roadmap with clear timelines aur expected results.' },
  { num: '03', title: 'Execution', desc: 'Design, content, ads, website — sab parallel chal raha hai. Dedicated account manager ke saath.' },
  { num: '04', title: 'Scale & Optimize', desc: 'Weekly reports, A/B testing, continuous optimization. Results improve hote hain every week.' },
]

const PORTFOLIO = [
  {
    emoji: '👗', bg: 'linear-gradient(135deg, #fce7f3, #fdf2f8)',
    cat: 'Fashion & E-commerce', title: 'LuxeFashion Store Launch',
    desc: 'Complete e-commerce website with Instagram integration aur targeted ads campaign.',
    stats: [{ val: '340%', lbl: 'Sales Up' }, { val: '200K', lbl: 'Reach' }, { val: '₹50L+', lbl: 'Revenue' }],
  },
  {
    emoji: '🏨', bg: 'linear-gradient(135deg, #dbeafe, #eff6ff)',
    cat: 'Hospitality & Tourism', title: 'Resort Digital Presence',
    desc: 'Google Ads, SEO, social media aur drone photography se resort ki online visibility triple.',
    stats: [{ val: '3x', lbl: 'Bookings' }, { val: '#1', lbl: 'Google Rank' }, { val: '500+', lbl: 'Reviews' }],
  },
  {
    emoji: '🎓', bg: 'linear-gradient(135deg, #ede9ff, #f5f3ff)',
    cat: 'Education & Coaching', title: 'Coaching Institute Growth',
    desc: 'Facebook + Google ads ke saath student enrollments double kiye aur brand authority banayi.',
    stats: [{ val: '2x', lbl: 'Enrollments' }, { val: '₹8L', lbl: 'Ad Spend ROI' }, { val: '180+', lbl: 'Leads/mo' }],
  },
  {
    emoji: '🏗️', bg: 'linear-gradient(135deg, #fef3c7, #fffbeb)',
    cat: 'Real Estate', title: 'Property Lead Generation',
    desc: 'Multi-city real estate campaigns jo high-intent property buyers seedha aapke paas laaye.',
    stats: [{ val: '500+', lbl: 'Leads/mo' }, { val: '₹200', lbl: 'Cost/Lead' }, { val: '8%', lbl: 'Close Rate' }],
  },
  {
    emoji: '💊', bg: 'linear-gradient(135deg, #dcfce7, #f0fdf4)',
    cat: 'Healthcare', title: 'Clinic Branding & Leads',
    desc: 'Local SEO, Google Ads aur social media se clinic mein patient flow 4x badhaya.',
    stats: [{ val: '4x', lbl: 'Patients' }, { val: '#1', lbl: 'Local Rank' }, { val: '60%', lbl: 'Less Cost' }],
  },
  {
    emoji: '🎉', bg: 'linear-gradient(135deg, #fce7f3, #fff1f2)',
    cat: 'Events & Entertainment', title: 'Music Festival Promotion',
    desc: 'Full digital campaign — Instagram reels, influencer collabs, Google ads se 5000+ tickets sold.',
    stats: [{ val: '5000+', lbl: 'Tickets' }, { val: '20M+', lbl: 'Impressions' }, { val: '3x', lbl: 'ROAS' }],
  },
]

const TESTIMONIALS = [
  { name: 'Arjun Mehta', role: 'Founder, TechScale India', text: 'Growthkaro ne hamare digital presence ko completely transform kar diya. Facebook ads se 340% sales growth in 4 months — beyond expectations!', rating: 5, color: 'linear-gradient(135deg, var(--purple), var(--cyan))' },
  { name: 'Priya Sharma', role: 'CEO, LuxeFashion', text: 'Instagram page 0 se 200K followers in 6 months. Unki content strategy aur reel game ekdum next level hai. Highly recommend!', rating: 5, color: 'linear-gradient(135deg, #e1306c, #f77737)' },
  { name: 'Rahul Gupta', role: 'MD, PropTech India', text: 'Google pe #1 rank ho gaye 5 months mein for competitive keywords. Organic leads ka flood aa gaya. Best investment hamare business mein.', rating: 5, color: 'linear-gradient(135deg, #4285f4, #34a853)' },
  { name: 'Sneha Agarwal', role: 'Founder, HealthFirst Clinic', text: 'Website se lekar social media tak, sab kuch Growthkaro handle karta hai. Ab main sirf business pe focus kar sakti hun. Freeing!', rating: 5, color: 'linear-gradient(135deg, #10b981, #00d4ff)' },
]

const FAQS = [
  { q: 'Growthkaro ki services shuru karne mein kitna time lagta hai?', a: 'Hum aapke saath discovery call ke baad 48 hours mein kaam shuru kar dete hain. Website ke liye 7-14 din, social media management immediate start ho sakta hai, aur ads 2-3 din mein live ho jaate hain.' },
  { q: 'Kya main sirf ek service le sakta hoon, poora package nahi?', a: 'Haan, bilkul! Aap sirf Facebook Ads bhi le sakte hain, ya sirf website, ya sirf social media management. Poora bundle lena optional hai — flexibility aapke paas hai.' },
  { q: 'Results kitne time mein dikhte hain?', a: 'Social media growth 4-8 weeks mein, Google SEO 3-6 months mein, paid ads 2-4 weeks mein. Long-term compounding results ke liye hum 3-6 month minimum recommend karte hain.' },
  { q: 'Kya mujhe apni existing website mein changes karne ka access milega?', a: 'Haan, aapko full admin access milega. Aap khud bhi content add kar sakte ho. Hum training bhi dete hain ki website kaise manage karna hai.' },
  { q: 'Kya guarantee hai ki results aayenge?', a: 'Hum data-driven approach use karte hain. Pehle month mein hum A/B testing ke through optimal strategy finalize karte hain. Agar targeted results 90 din mein na aayein, hum next 30 din free continue karte hain.' },
  { q: 'Kya aap offline businesses ke liye bhi kaam karte ho?', a: 'Haan! Restaurents, clinics, salons, real estate, local shops — offline businesses ke liye hum Google Business optimization, local SEO, aur hyper-local targeting ads ke through excellent results dete hain.' },
]

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0
            setTimeout(() => entry.target.classList.add('visible'), Number(delay))
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    const els = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-rotate')
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useCounterAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const target = parseInt(el.dataset.target)
            const suffix = el.dataset.suffix || ''
            const duration = 1800
            const start = Date.now()
            const tick = () => {
              const elapsed = Date.now() - start
              const progress = Math.min(elapsed / duration, 1)
              const ease = 1 - Math.pow(1 - progress, 3)
              const current = Math.round(target * ease)
              el.textContent = current + suffix
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll('[data-target]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Home() {
  useScrollReveal()
  useCounterAnimation()

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i)
  const navLinks = ['Services', 'Portfolio', 'Process', 'FAQ']
  const isDark = theme === 'dark'

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="nav-brand" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          Growth<span>karo</span>
        </a>

        <div className="nav-links">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${isDark ? 'light' : 'dark'} mode`} aria-label="Toggle theme">
            <span className="theme-icon" style={{ display: isDark ? 'block' : 'none' }}>☀️</span>
            <span className="theme-icon" style={{ display: isDark ? 'none' : 'block' }}>🌙</span>
          </button>
          <a href={WA_URL} target="_blank" rel="noopener" className="btn-ghost">WhatsApp</a>
          <a href={WA_URL} target="_blank" rel="noopener" className="btn-primary">Get Started →</a>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}}></span>
            <span style={menuOpen ? { opacity: 0 } : {}}></span>
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}}></span>
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>
        ))}
        <a href={WA_URL} target="_blank" rel="noopener" onClick={() => setMenuOpen(false)}>WhatsApp us</a>
        <a href={WA_URL} target="_blank" rel="noopener" onClick={() => setMenuOpen(false)}>Get Started</a>
      </div>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
          <div className="hero-orb hero-orb-4"></div>
          <div className="hero-grid-bg"></div>
        </div>

        <div className="container">
          <div className="hero-inner">
            <div>
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                India&apos;s #1 Digital Marketing Agency
              </div>

              <h1 className="hero-title">
                Your brand deserves to be{' '}
                <span className="gradient-text">seen by millions.</span>
              </h1>

              <p className="hero-desc">
                Stop guessing what&apos;s working. We build complete digital marketing systems that bring
                real customers, generate quality leads, and scale your revenue — month after month.
              </p>

              <div className="hero-cta">
                <a href={WA_URL} target="_blank" rel="noopener" className="btn-primary-lg">
                  Start Growing Today →
                </a>
                <a href="#process" className="btn-outline">
                  See How It Works
                </a>
              </div>

              <div className="hero-proof">
                <span className="proof-item">No credit card</span>
                <span className="proof-item">3x ROI guaranteed</span>
                <span className="proof-item">Results in 30 days</span>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-dots"><span></span><span></span><span></span></div>
                <span className="hero-card-url">growthkaro.in/dashboard</span>
                <span className="hero-card-live">Live</span>
              </div>
              <div className="hero-card-body">
                <div className="dash-metric-row">
                  <div className="dash-metric">
                    <div className="dash-metric-label">Revenue</div>
                    <div className="dash-metric-value">₹4.8L</div>
                    <div className="dash-metric-sub">↑ 34% this month</div>
                  </div>
                  <div className="dash-metric">
                    <div className="dash-metric-label">Leads</div>
                    <div className="dash-metric-value">847</div>
                    <div className="dash-metric-sub">↑ 2.1x vs last</div>
                  </div>
                  <div className="dash-metric">
                    <div className="dash-metric-label">ROAS</div>
                    <div className="dash-metric-value">4.2x</div>
                    <div className="dash-metric-sub">↑ From 2.1x</div>
                  </div>
                </div>

                <div className="dash-chart">
                  <div className="dash-chart-title">Weekly Performance Overview</div>
                  <div className="dash-bars">
                    <div className="dash-bar"></div>
                    <div className="dash-bar"></div>
                    <div className="dash-bar"></div>
                    <div className="dash-bar"></div>
                    <div className="dash-bar"></div>
                    <div className="dash-bar active"></div>
                    <div className="dash-bar"></div>
                  </div>
                </div>

                <div className="dash-platforms">
                  <div className="dash-platform ig">Instagram</div>
                  <div className="dash-platform fb">Facebook</div>
                  <div className="dash-platform gad">Google</div>
                  <div className="dash-platform yt">YouTube</div>
                </div>

                <div className="dash-lead-card">
                  <div className="dash-lead-icon">🎯</div>
                  <div>
                    <div className="dash-lead-title">New lead from Google Ads</div>
                    <div className="dash-lead-sub">Real Estate · Mumbai · ₹25L budget</div>
                  </div>
                  <span className="dash-lead-badge">Hot Lead ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">
              {item}<span className="marquee-dot"></span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-bar-inner">
            {STATS.map((s, i) => (
              <div key={i} className="stats-bar-item scroll-reveal" data-delay={i * 80}>
                <div className="stats-bar-num">
                  <span className="gradient-text">
                    <span data-target={s.value} data-suffix={s.suffix} className="counter-value">{s.value}{s.suffix}</span>
                  </span>
                </div>
                <div className="stats-bar-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">
              Everything your brand needs.{' '}
              <span className="gradient-text">One agency.</span>
            </h2>
            <p className="section-sub">
              From ads to websites to content — Growthkaro is your complete digital marketing partner.
              No freelancers, no confusion. One team, infinite growth.
            </p>
          </div>

          <div className="service-categories">
            {SERVICE_CATEGORIES.map((cat, i) => (
              <div key={i} className="service-category-card scroll-reveal" data-delay={i * 80}>
                <div className="service-cat-icon" style={{ background: cat.iconBg }}>{cat.icon}</div>
                <div className="service-cat-title">{cat.title}</div>
                <div className="service-cat-desc">{cat.desc}</div>
                <div className="service-cat-items">
                  {cat.tags.map((tag, j) => (
                    <span key={j} className="service-cat-tag">{tag}</span>
                  ))}
                </div>
                <div className="service-cat-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ── ALL SERVICES GRID ── */}
      <section className="section" style={{ paddingTop: '48px' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '0' }}>
            <div className="section-label">Complete Service List</div>
            <h2 className="section-title"><span className="gradient-text">16+ Services</span> Under One Roof</h2>
          </div>
          <div className="services-grid">
            {ALL_SERVICES.map((s, i) => (
              <div key={i} className="service-card scroll-reveal-scale" data-delay={i * 50}>
                <div className="service-icon" style={{ background: s.bg }}>{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE/AFTER ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">The Problem</div>
            <h2 className="section-title">Sound familiar?</h2>
            <p className="section-sub">
              Every business owner we meet has the same pain points. We fix all of them.
            </p>
          </div>

          <div className="before-after">
            <div className="ba-card ba-card-bad scroll-reveal-left">
              <div className="ba-card-title">😤 Without Growthkaro</div>
              {[
                'Low brand visibility — customers can\'t find you online',
                'Wasting money on random ads with no strategy',
                'Social media posting random content with zero engagement',
                'No proper website — just a "DM for orders" culture',
                'Leads slipping away because no follow-up system',
                'No idea what\'s working and what\'s not',
                'Hiring random freelancers — inconsistent quality',
              ].map((item, i) => (
                <div key={i} className="ba-item ba-item-bad">
                  <span className="ba-icon">✗</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="ba-card ba-card-good scroll-reveal-right">
              <div className="ba-card-title">🚀 With Growthkaro</div>
              {[
                'Top Google rankings — customers find you first',
                'Data-driven ads with 3x+ ROI every month',
                'Professional content that actually engages followers',
                'Stunning website that converts visitors to customers',
                'Automated lead capture with follow-up systems',
                'Weekly reports with clear metrics and insights',
                'One dedicated team — consistent quality, always',
              ].map((item, i) => (
                <div key={i} className="ba-item ba-item-good">
                  <span className="ba-icon">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="section" id="portfolio">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Work</div>
            <h2 className="section-title">
              Real results for{' '}
              <span className="gradient-text">real businesses.</span>
            </h2>
            <p className="section-sub">
              Every industry, every size. See how we&apos;ve transformed these businesses with digital marketing.
            </p>
          </div>

          <div className="portfolio-grid">
            {PORTFOLIO.map((p, i) => (
              <div key={i} className="portfolio-card scroll-reveal-scale" data-delay={i * 80}>
                <div className="portfolio-visual" style={{ background: p.bg }}>{p.emoji}</div>
                <div className="portfolio-info">
                  <div className="portfolio-cat">{p.cat}</div>
                  <div className="portfolio-title">{p.title}</div>
                  <div className="portfolio-desc">{p.desc}</div>
                  <div className="portfolio-stats">
                    {p.stats.map((s, j) => (
                      <div key={j} className="portfolio-stat">
                        <div className="portfolio-stat-val">{s.val}</div>
                        <div className="portfolio-stat-label">{s.lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section" id="process">
        <div className="container">
          <div className="section-header">
            <div className="section-label">How It Works</div>
            <h2 className="section-title">
              From zero to{' '}
              <span className="gradient-text">scaling fast</span> in 4 steps.
            </h2>
            <p className="section-sub">
              No fluff, no confusion. Our proven process delivers results every single time.
            </p>
          </div>

          <div className="process-grid">
            {PROCESS.map((p, i) => (
              <div key={i} className="process-card scroll-reveal" data-delay={i * 100}>
                <div className="process-num">{p.num}</div>
                <div className="process-title">{p.title}</div>
                <div className="process-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Client Love</div>
            <h2 className="section-title">
              What our{' '}
              <span className="gradient-text">clients say.</span>
            </h2>
            <p className="section-sub">
              Don&apos;t take our word for it. Here&apos;s what business owners say after working with Growthkaro.
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card scroll-reveal" data-delay={i * 80}>
                <div className="test-stars">{'★★★★★'.split('').join(' ')}</div>
                <div className="test-text">&ldquo;{t.text}&rdquo;</div>
                <div className="test-author">
                  <div className="test-avatar" style={{ background: t.color }}>{t.name[0]}</div>
                  <div>
                    <div className="test-name">{t.name}</div>
                    <div className="test-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-header">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">
              Questions?{' '}
              <span className="gradient-text">Answered.</span>
            </h2>
            <p className="section-sub">
              Still have questions? WhatsApp us directly — we reply within 30 minutes.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''} scroll-reveal`} data-delay={i * 60}>
                <button className="faq-btn" onClick={() => toggleFaq(i)}>
                  {faq.q}
                  <span className="faq-arrow">+</span>
                </button>
                <div className="faq-body" style={openFaq === i ? { maxHeight: '200px' } : {}}>
                  <div className="faq-body-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA DARK ── */}
      <section className="cta-dark">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cta-badge">Free Strategy Call · 30 Minutes</div>
          <h2 className="cta-title">
            Your competitors are already{' '}
            <span className="gradient-text">investing in digital.</span>
          </h2>
          <p className="cta-sub">
            Every day you wait is a day your competitors get ahead. Let&apos;s build your growth engine today.
          </p>

          <div className="cta-actions">
            <a href={WA_URL} target="_blank" rel="noopener" className="btn-primary-cta">
              Start Growing Today →
            </a>
            <a href={WA_URL} target="_blank" rel="noopener" className="btn-outline-cta">
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="cta-note">
            No credit card · No commitment · Results in 30 days or we keep working free
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-brand-name">Growth<span>karo</span></div>
              <div className="footer-brand-desc">
                India&apos;s most trusted digital marketing agency. We build growth systems that scale businesses.
              </div>
              <div className="footer-social">
                <button className="footer-social-btn" title="Instagram">📸</button>
                <button className="footer-social-btn" title="Facebook">📘</button>
                <button className="footer-social-btn" title="LinkedIn">💼</button>
                <button className="footer-social-btn" title="YouTube">▶️</button>
              </div>
            </div>

            <div>
              <div className="footer-col-title">Services</div>
              <ul className="footer-links">
                <li><a href="#services">Digital Marketing</a></li>
                <li><a href="#services">Social Media</a></li>
                <li><a href="#services">Branding</a></li>
                <li><a href="#services">Website Dev</a></li>
                <li><a href="#services">SEO</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Company</div>
              <ul className="footer-links">
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#process">How It Works</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Contact</div>
              <ul className="footer-links">
                <li><a href={WA_URL} target="_blank" rel="noopener">WhatsApp us</a></li>
                <li><a href="mailto:hello@growthkaro.in">hello@growthkaro.in</a></li>
                <li><a href="tel:+917300628199">+91 73006 28199</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">© 2026 Growthkaro. All rights reserved.</div>
            <div className="footer-made">Made in India 🇮🇳 for growing businesses</div>
          </div>
        </div>
      </footer>

      {/* ── WA FLOAT ── */}
      <a href={WA_URL} target="_blank" rel="noopener" className="wa-float" title="Chat on WhatsApp">
        💬
      </a>
    </>
  )
}
