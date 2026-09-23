'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Search,
  X,
  MapPin,
  ChevronRight,
  Award,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  Building2,
  Users,
  Layers,
  Filter
} from 'lucide-react'
import { PORTFOLIO_CATEGORIES, EXTENDED_PORTFOLIO, TOP_CLIENT_NAMES } from '../portfolio-data'

const WA_NUMBER = '918076517834'
const WA_URL = `https://wa.me/${WA_NUMBER}`

export default function PortfolioPage() {
  const [selectedCat, setSelectedCat] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [displayLimit, setDisplayLimit] = useState(18)
  const [activeModalItem, setActiveModalItem] = useState(null)

  const filteredItems = useMemo(() => {
    return EXTENDED_PORTFOLIO.filter((item) => {
      const matchesCat =
        selectedCat === 'all'
          ? true
          : selectedCat === 'featured'
          ? item.featured
          : item.category === selectedCat

      if (!searchQuery.trim()) return matchesCat

      const q = searchQuery.toLowerCase().trim()
      const matchesText =
        item.name.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        (item.tags && item.tags.some((t) => t.toLowerCase().includes(q)))

      return matchesCat && matchesText
    })
  }, [selectedCat, searchQuery])

  const displayedItems = filteredItems.slice(0, displayLimit)
  const hasMore = filteredItems.length > displayLimit

  const handleCatSelect = (catId) => {
    setSelectedCat(catId)
    setDisplayLimit(18)
  }

  const clearSearch = () => {
    setSearchQuery('')
    setDisplayLimit(18)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      {/* ── STICKY TOP NAVBAR ── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(10, 14, 26, 0.88)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border)',
          padding: '14px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link
              href="/"
              className="nav-brand"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
            >
              <span className="nav-brand-rocket" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="16" cy="13" rx="5.5" ry="5.5" fill="rgba(255,255,255,0.12)" />
                  <path d="M16 2C16 2 21.5 7 21.5 13.5C21.5 17.5 19 20.5 16 21.5V27.5C16 28.5 15 29.5 14 29.5C13 29.5 12 28.5 12 27.5V21.5C9 20.5 6.5 17.5 6.5 13.5C6.5 7 11 2 11 2H16Z" fill="url(#logoGradPortfolio)" />
                  <path d="M9.5 17L6 23.5L11 20.5L9.5 17Z" fill="url(#logoGradPortfolio)" opacity="0.95" />
                  <path d="M22.5 17L26 23.5L21 20.5L22.5 17Z" fill="url(#logoGradPortfolio)" opacity="0.95" />
                  <path d="M16 22L13.5 27.5H18.5L16 22Z" fill="url(#logoGradPortfolio)" opacity="0.8" />
                  <defs>
                    <linearGradient id="logoGradPortfolio" x1="6.5" y1="2" x2="25.5" y2="30.3" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a855f7" />
                      <stop offset="0.45" stopColor="#6c47ff" />
                      <stop offset="1" stopColor="#00d4ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="nav-brand-text" style={{ fontSize: '20px' }}>
                Growth<span className="nav-brand-karo">karo</span>
              </span>
            </Link>

            <span
              style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--cyan)',
                background: 'rgba(0,212,255,0.08)',
                padding: '4px 10px',
                borderRadius: '999px',
                border: '1px solid rgba(0,212,255,0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <Sparkles size={12} /> Full Client Archive
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              href="/"
              className="btn-ghost"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                padding: '8px 14px',
              }}
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <a
              href={`${WA_URL}?text=${encodeURIComponent('Hi Growthkaro! I am reviewing your complete portfolio and want to discuss marketing for my brand/campaign.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                padding: '8px 18px',
              }}
            >
              <MessageCircle size={15} /> Talk to Strategist
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO BANNER ── */}
      <section
        style={{
          position: 'relative',
          padding: '70px 0 40px',
          overflow: 'hidden',
          background: 'radial-gradient(circle at 50% 0%, rgba(108,71,255,0.18), transparent 70%)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--purple)',
              background: 'rgba(108,71,255,0.1)',
              padding: '6px 14px',
              borderRadius: '999px',
              border: '1px solid rgba(108,71,255,0.25)',
              marginBottom: '18px',
            }}
          >
            <Award size={13} /> Official Client Portfolio & Case Archive
          </div>

          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 54px)',
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              maxWidth: '900px',
              margin: '0 auto 18px',
            }}
          >
            100+ High-Impact Campaigns, Political Leaders & National Brands
          </h1>

          <p
            style={{
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              color: 'var(--muted)',
              lineHeight: 1.6,
              maxWidth: '750px',
              margin: '0 auto 36px',
            }}
          >
            From high-stakes parliamentary elections & massive yatras across Bihar to national retail
            unicorns, global QSRs, luxury resorts, and high-growth consumer brands.
          </p>

          {/* Quick Metrics Bar */}
          <div
            className="portfolio-highlights-bar"
            style={{ maxWidth: '850px', margin: '0 auto' }}
          >
            <div className="portfolio-highlight-item">
              <div className="portfolio-highlight-val">100+</div>
              <div className="portfolio-highlight-lbl">Delivered Campaigns</div>
            </div>
            <div className="portfolio-highlight-item">
              <div className="portfolio-highlight-val">29</div>
              <div className="portfolio-highlight-lbl">Political Leaders & Yatras</div>
            </div>
            <div className="portfolio-highlight-item">
              <div className="portfolio-highlight-val">50M+</div>
              <div className="portfolio-highlight-lbl">Voter & Consumer Reach</div>
            </div>
            <div className="portfolio-highlight-item">
              <div className="portfolio-highlight-val">38</div>
              <div className="portfolio-highlight-lbl">Districts Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND LOGOS MARQUEE TICKER ── */}
      <div className="portfolio-ticker-wrap">
        <div className="portfolio-ticker-track">
          {[...TOP_CLIENT_NAMES, ...TOP_CLIENT_NAMES].map((name, i) => (
            <span key={i} className="portfolio-ticker-item">
              <span className="portfolio-ticker-dot" />
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT AREA ── */}
      <main className="container" style={{ padding: '50px 20px 80px' }}>
        {/* ── TOOLBAR: SEARCH & CATEGORY PILLS ── */}
        <div className="portfolio-toolbar" style={{ marginBottom: '36px' }}>
          <div className="portfolio-search-row">
            <div className="portfolio-search-wrap" style={{ flex: 1 }}>
              <Search size={18} className="portfolio-search-icon" />
              <input
                type="text"
                className="portfolio-search-input"
                placeholder="Search by leader name, brand, city or tag (e.g. Tejashwi, Domino's, Patna, Yatra)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setDisplayLimit(18)
                }}
              />
              {searchQuery && (
                <button className="portfolio-search-clear" onClick={clearSearch} title="Clear search">
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="portfolio-count-badge">
              Showing <strong>{displayedItems.length}</strong> of <strong>{filteredItems.length}</strong> projects
            </div>
          </div>

          {/* Filter Navigation Pills */}
          <div className="portfolio-filter-nav">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`portfolio-filter-btn${selectedCat === cat.id ? ' active' : ''}`}
                onClick={() => handleCatSelect(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="portfolio-filter-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── PROJECTS GRID ── */}
        <div className="portfolio-grid">
          {displayedItems.length > 0 ? (
            displayedItems.map((item) => {
              const waCustomUrl = `${WA_URL}?text=${encodeURIComponent(
                `Hi Growthkaro! I am inquiring about your campaign work with ${item.name} (${item.badge}). I would like to explore similar growth marketing for my organization.`
              )}`

              return (
                <div key={item.id} className="portfolio-card">
                  {/* Visual Header */}
                  <div
                    className="portfolio-visual"
                    onClick={() => setActiveModalItem(item)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className={`portfolio-img${item.isLogo ? ' is-logo' : ''}`}
                      loading="lazy"
                    />
                    <div className="portfolio-img-overlay">
                      {item.featured && (
                        <span className="portfolio-badge-pill">
                          <Sparkles size={11} color="#fbbf24" /> Top Client
                        </span>
                      )}
                      <span className="portfolio-badge-loc">
                        <MapPin size={10} />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Info Details */}
                  <div className="portfolio-info">
                    <div className="portfolio-kicker-row">
                      <span className="portfolio-cat-pill">{item.categoryName}</span>
                      <span className="portfolio-role-badge">{item.badge}</span>
                    </div>

                    <div
                      className="portfolio-title"
                      onClick={() => setActiveModalItem(item)}
                      style={{ cursor: 'pointer' }}
                    >
                      {item.name}
                    </div>

                    <div className="portfolio-desc">{item.role}</div>

                    {item.tags && (
                      <div className="portfolio-tags">
                        {item.tags.map((t, idx) => (
                          <span key={idx} className="portfolio-tag">
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="portfolio-impact-box">
                      <span className="portfolio-impact-icon">⚡</span>
                      <span className="portfolio-impact-text">{item.impact}</span>
                    </div>

                    {/* Dual Action CTAs */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: 'auto' }}>
                      <button
                        onClick={() => setActiveModalItem(item)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: 700,
                          color: 'var(--text)',
                          background: 'var(--card-border)',
                          border: '1px solid var(--border)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        Case Details <ChevronRight size={13} />
                      </button>

                      <a
                        href={waCustomUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-cta-btn"
                        style={{ padding: '10px 12px', fontSize: '12px' }}
                      >
                        Inquire <MessageCircle size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="portfolio-empty">
              <div className="portfolio-empty-icon">🔍</div>
              <div className="portfolio-empty-title">No matching client projects found</div>
              <div className="portfolio-empty-desc">
                No campaigns match &ldquo;{searchQuery}&rdquo;. Try another term, leader name, or switch category.
              </div>
              <button className="portfolio-more-btn" onClick={clearSearch}>
                Clear Search & Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* ── PAGINATION / LOAD MORE CONTROLS ── */}
        {hasMore && (
          <div className="portfolio-bottom-actions">
            <button
              className="portfolio-more-btn primary"
              onClick={() => setDisplayLimit((prev) => prev + 18)}
            >
              Load More Projects (+{Math.min(18, filteredItems.length - displayLimit)} more)
            </button>
            <button
              className="portfolio-more-btn"
              onClick={() => setDisplayLimit(filteredItems.length)}
            >
              Show All {filteredItems.length} Campaigns
            </button>
          </div>
        )}

        {/* ── HIGH-CONVERTING BOTTOM CTA BANNER ── */}
        <div className="portfolio-showcase-banner" style={{ marginTop: '70px' }}>
          <div className="showcase-banner-inner">
            <div className="showcase-banner-text">
              <span className="showcase-banner-tag">
                <Sparkles size={12} /> Launch Your High-Growth Campaign
              </span>
              <h2 className="showcase-banner-title">
                Ready to dominate your market or constituency?
              </h2>
              <p className="showcase-banner-desc">
                Whether you are contesting a major election, expanding a national restaurant chain, or scaling
                an e-commerce brand — Growthkaro builds customized, high-conversion growth engines.
              </p>
            </div>
            <div className="showcase-banner-actions">
              <a
                href={`${WA_URL}?text=${encodeURIComponent('Hi Growthkaro! I reviewed your portfolio and want to book a 1-on-1 strategy call for my business/campaign.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-showcase-primary"
              >
                <MessageCircle size={16} /> Consult with Strategy Lead
              </a>
              <Link href="/" className="btn-showcase-secondary">
                Back to Growthkaro Home →
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* ── INTERACTIVE CASE STUDY MODAL DIALOG ── */}
      {activeModalItem && (
        <div
          className="portfolio-modal-backdrop"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="portfolio-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="portfolio-modal-close"
              onClick={() => setActiveModalItem(null)}
              title="Close modal"
            >
              <X size={18} />
            </button>

            {/* Modal Image */}
            <div className="portfolio-modal-media">
              <img
                src={activeModalItem.img}
                alt={activeModalItem.name}
                className={`portfolio-modal-img${activeModalItem.isLogo ? ' is-logo' : ''}`}
              />
            </div>

            {/* Modal Content */}
            <div className="portfolio-modal-body">
              <div className="portfolio-modal-kicker">
                <span className="portfolio-cat-pill">{activeModalItem.categoryName}</span>
                <span className="portfolio-role-badge">{activeModalItem.badge}</span>
                <span className="portfolio-badge-loc">
                  <MapPin size={11} /> {activeModalItem.location}
                </span>
              </div>

              <h2 className="portfolio-modal-title">{activeModalItem.name}</h2>
              <p className="portfolio-modal-role">{activeModalItem.role}</p>

              {/* Impact Badge */}
              <div className="portfolio-modal-impact-badge">
                <span style={{ fontSize: '22px' }}>⚡</span>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Measured Impact & Key Result
                  </div>
                  <div className="impact-text">{activeModalItem.impact}</div>
                </div>
              </div>

              {/* Tags / Playbook */}
              {activeModalItem.tags && (
                <>
                  <div className="portfolio-modal-section-title">Strategic Focus Areas</div>
                  <div className="portfolio-modal-tags">
                    {activeModalItem.tags.map((t, idx) => (
                      <span key={idx} className="portfolio-modal-tag">
                        #{t}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {/* WhatsApp Action */}
              <a
                href={`${WA_URL}?text=${encodeURIComponent(
                  `Hi Growthkaro! I was reviewing your case study with ${activeModalItem.name} (${activeModalItem.badge} in ${activeModalItem.location}) and want to discuss similar growth strategies.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-modal-cta"
              >
                <MessageCircle size={18} /> Discuss Similar Campaign on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer className="footer" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="footer-inner">
            <div>
              <div className="footer-brand-name">
                Growth<span>karo</span>
              </div>
              <div className="footer-brand-badge">
                <span className="footer-badge-dot"></span>
                India&apos;s Top Digital Agency 2026
              </div>
              <div className="footer-brand-desc">
                India&apos;s most trusted digital marketing agency. We build growth systems that scale businesses and electoral campaigns.
              </div>
            </div>

            <div>
              <div className="footer-col-title">Navigation</div>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#services">Services</Link></li>
                <li><Link href="/portfolio">Full Portfolio</Link></li>
                <li><Link href="/#process">Our Process</Link></li>
                <li><Link href="/#faq">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Direct Inquiries</div>
              <ul className="footer-links">
                <li><a href={WA_URL} target="_blank" rel="noopener noreferrer">WhatsApp Direct</a></li>
                <li><a href="mailto:hello@growthkaro.in">hello@growthkaro.in</a></li>
                <li><a href="tel:+918076517834">+91 80765 17834</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copy">© 2026 Growthkaro. All rights reserved.</div>
            <div className="footer-made">Made in India 🇮🇳 for growing brands & leaders</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
