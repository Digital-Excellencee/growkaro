'use client'
import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  BadgePercent,
  BriefcaseBusiness,
  Camera,
  Clapperboard,
  Globe,
  Image,
  IndianRupee,
  Mail,
  MapPinned,
  Megaphone,
  MessageCircle,
  MessageSquareQuote,
  Palette,
  PenTool,
  Play,
  Search,
  Sparkles,
  SquareKanban,
  Target,
  Gauge,
  TrendingUp,
  UserRound,
} from 'lucide-react'

function PremiumRocket() {
  return (
    <svg viewBox="0 0 200 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <defs>
        {/* Body gradient — rich violet to indigo to blue */}
        <linearGradient id="bodyGrad" x1="100" y1="20" x2="100" y2="260" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#e0d4ff" />
          <stop offset="12%" stopColor="#c4b5fd" />
          <stop offset="30%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="72%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        {/* Metallic left-highlight sheen */}
        <linearGradient id="bodySheen" x1="72" y1="40" x2="128" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="20%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="38%" stopColor="rgba(255,255,255,0.32)" />
          <stop offset="52%" stopColor="rgba(255,255,255,0.10)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        {/* Nose cone gradient */}
        <linearGradient id="noseGrad" x1="100" y1="12" x2="100" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f5f3ff" />
          <stop offset="25%" stopColor="#ddd6fe" />
          <stop offset="60%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="noseShine" x1="90" y1="12" x2="110" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        {/* Fin gradients */}
        <linearGradient id="finGradL" x1="50" y1="180" x2="70" y2="265" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#3730a3" />
        </linearGradient>
        <linearGradient id="finGradR" x1="150" y1="180" x2="130" y2="265" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#3730a3" />
        </linearGradient>
        <linearGradient id="finShineL" x1="40" y1="200" x2="75" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="finShineR" x1="160" y1="200" x2="125" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        {/* Window gradients */}
        <radialGradient id="windowGrad" cx="50%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="60%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0c1a3a" />
        </radialGradient>
        <linearGradient id="windowGlare" x1="88" y1="110" x2="106" y2="126" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.75)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        {/* Engine gradient */}
        <linearGradient id="engineGrad" x1="100" y1="244" x2="100" y2="264" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#4338ca" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        {/* Flame gradients */}
        <linearGradient id="flameOuter" x1="100" y1="264" x2="100" y2="368" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.95" />
          <stop offset="25%" stopColor="#fb923c" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#ef4444" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="flameMid" x1="100" y1="264" x2="100" y2="345" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef9c3" stopOpacity="0.98" />
          <stop offset="30%" stopColor="#fbbf24" stopOpacity="0.88" />
          <stop offset="65%" stopColor="#f97316" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="flameCore" x1="100" y1="264" x2="100" y2="324" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="35%" stopColor="#fef9c3" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#fcd34d" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="ambientGlow" cx="50%" cy="42%" r="50%" fx="50%" fy="35%">
          <stop offset="0%" stopColor="rgba(139,92,246,0.25)" />
          <stop offset="55%" stopColor="rgba(99,102,241,0.10)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        <radialGradient id="flameGlow" cx="50%" cy="0%" r="100%" fx="50%" fy="0%">
          <stop offset="0%" stopColor="rgba(251,191,36,0.4)" />
          <stop offset="100%" stopColor="rgba(251,191,36,0)" />
        </radialGradient>
        {/* Filters */}
        <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="bodyGlow" x="-15%" y="-8%" width="130%" height="120%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="flameBlur" x="-30%" y="-20%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="engineGlow" x="-60%" y="-30%" width="220%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="noseGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Ambient glow behind rocket */}
      <ellipse cx="100" cy="165" rx="92" ry="150" fill="url(#ambientGlow)" />

      {/* ═══ ROCKET BODY ═══ Tapered fuselage */}
      <g filter="url(#bodyGlow)">
        {/* Main body — tapered from wider top to narrower engine */}
        <path d="
          M100 28
          C108 28 120 40 126 58
          L132 90
          L136 140
          L136 200
          C136 220 132 240 126 250
          L118 260
          L82 260
          L74 250
          C68 240 64 220 64 200
          L64 140
          L68 90
          L74 58
          C80 40 92 28 100 28 Z
        " fill="url(#bodyGrad)" />
        {/* Metallic sheen overlay */}
        <path d="
          M100 28
          C108 28 120 40 126 58
          L132 90
          L136 140
          L136 200
          C136 220 132 240 126 250
          L118 260
          L82 260
          L74 250
          C68 240 64 220 64 200
          L64 140
          L68 90
          L74 58
          C80 40 92 28 100 28 Z
        " fill="url(#bodySheen)" />

        {/* Left highlight strip */}
        <path d="M74 60 C72 80 69 120 69 160 C69 200 72 230 76 248 L72 244 C68 228 66 200 66 160 C66 120 68 80 72 58 Z" fill="rgba(255,255,255,0.14)" />

        {/* Panel detail lines */}
        <line x1="70" y1="100" x2="130" y2="100" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
        <line x1="68" y1="160" x2="132" y2="160" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" />
        <line x1="70" y1="200" x2="130" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />

        {/* Accent bands */}
        <path d="M74 96 L126 96 L128 100 L72 100 Z" fill="rgba(255,255,255,0.08)" />
        <path d="M68 156 L132 156 L132 162 L68 162 Z" fill="rgba(139,92,246,0.12)" />
      </g>

      {/* ═══ NOSE CONE ═══ Sharp pointed tip */}
      <g filter="url(#noseGlow)">
        <path d="
          M100 12
          C104 12 112 30 118 50
          L126 58
          C130 66 133 78 134 90
          L68 90
          C69 78 72 66 76 58
          L82 50
          C88 30 96 12 100 12 Z
        " fill="url(#noseGrad)" />
        {/* Nose shine */}
        <path d="
          M100 12
          C104 12 112 30 118 50
          L126 58
          C130 66 133 78 134 90
          L68 90
          C69 78 72 66 76 58
          L82 50
          C88 30 96 12 100 12 Z
        " fill="url(#noseShine)" opacity="0.5" />
        {/* Tip highlight */}
        <path d="M100 14 L96 34 L100 18 L104 34 Z" fill="rgba(255,255,255,0.5)" />
      </g>

      {/* ═══ SIDE FINS ═══ Swept-back aerodynamic */}
      {/* Left fin */}
      <path d="
        M64 200
        C60 210 48 230 38 252
        L34 262
        C32 268 36 272 40 270
        L56 258
        L66 248
        C64 235 64 218 64 200 Z
      " fill="url(#finGradL)" />
      <path d="
        M64 200
        C60 210 48 230 38 252
        L34 262
        C32 268 36 272 40 270
        L56 258
        L66 248
        C64 235 64 218 64 200 Z
      " fill="url(#finShineL)" opacity="0.5" />

      {/* Right fin */}
      <path d="
        M136 200
        C140 210 152 230 162 252
        L166 262
        C168 268 164 272 160 270
        L144 258
        L134 248
        C136 235 136 218 136 200 Z
      " fill="url(#finGradR)" />
      <path d="
        M136 200
        C140 210 152 230 162 252
        L166 262
        C168 268 164 272 160 270
        L144 258
        L134 248
        C136 235 136 218 136 200 Z
      " fill="url(#finShineR)" opacity="0.5" />

      {/* Center stabiliser fin */}
      <path d="M96 252 L100 280 L104 252 Z" fill="#4338ca" opacity="0.6" />

      {/* ═══ ENGINE BELL ═══ */}
      <path d="
        M82 252
        C82 256 86 262 92 264
        L108 264
        C114 262 118 256 118 252
        L120 258
        C120 264 114 270 108 270
        L92 270
        C86 270 80 264 80 258 Z
      " fill="url(#engineGrad)" />
      {/* Engine rim highlight */}
      <path d="M86 253 L114 253 L116 255 L84 255 Z" fill="rgba(255,255,255,0.15)" />
      {/* Engine glow ring */}
      <ellipse cx="100" cy="268" rx="16" ry="4" fill="rgba(139,92,246,0.45)" filter="url(#engineGlow)" />

      {/* ═══ COCKPIT WINDOW ═══ Main viewport */}
      <ellipse cx="100" cy="122" rx="20" ry="22" fill="#1e3a8a" />
      <ellipse cx="100" cy="122" rx="17" ry="19" fill="url(#windowGrad)" />
      <ellipse cx="100" cy="122" rx="14" ry="16" fill="#0c1a3a" />
      {/* Star reflection in glass */}
      <circle cx="94" cy="116" r="2" fill="rgba(255,255,255,0.6)" />
      <circle cx="90" cy="120" r="1" fill="rgba(255,255,255,0.3)" />
      {/* Glass glare arc */}
      <ellipse cx="94" cy="114" rx="9" ry="6" fill="url(#windowGlare)" opacity="0.5" />
      {/* Window ring */}
      <ellipse cx="100" cy="122" rx="14" ry="16" fill="none" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" />
      <ellipse cx="100" cy="122" rx="20" ry="22" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

      {/* ═══ SECONDARY PORTHOLE ═══ */}
      <circle cx="100" cy="172" r="9" fill="#1e3a8a" />
      <circle cx="100" cy="172" r="7" fill="#0c1a3a" />
      <circle cx="97" cy="170" r="1.5" fill="rgba(255,255,255,0.4)" />
      <circle cx="100" cy="172" r="7" fill="none" stroke="rgba(99,102,241,0.25)" strokeWidth="1" />
      <circle cx="100" cy="172" r="9" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />

      {/* ═══ BODY RIVETS / ACCENT DOTS ═══ */}
      <circle cx="76" cy="140" r="1.5" fill="rgba(255,255,255,0.12)" />
      <circle cx="124" cy="140" r="1.5" fill="rgba(255,255,255,0.12)" />
      <circle cx="76" cy="190" r="1.5" fill="rgba(255,255,255,0.08)" />
      <circle cx="124" cy="190" r="1.5" fill="rgba(255,255,255,0.08)" />
      <circle cx="76" cy="220" r="1.5" fill="rgba(255,255,255,0.06)" />
      <circle cx="124" cy="220" r="1.5" fill="rgba(255,255,255,0.06)" />

      {/* Flame is handled by CSS .rocket-flame-old div — no SVG flame needed */}
    </svg>
  )
}

gsap.registerPlugin(ScrollTrigger)

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
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    title: 'Digital Marketing & Ads',
    desc: 'Facebook, Instagram, Google, YouTube — har platform pe targeted ads jo actual customers laayein.',
    tags: ['Facebook Ads', 'Google Ads', 'YouTube Ads', 'Lead Generation', 'Retargeting', 'Meta Ads'],
  },
  {
    icon: '📱',
    iconBg: 'linear-gradient(135deg, rgba(225,48,108,0.25), rgba(255,60,172,0.15))',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    title: 'Social Media Management',
    desc: 'Poora Instagram, Facebook, LinkedIn page handle karte hain. Content, reels, engagement — sab.',
    tags: ['Page Management', 'Reels & Posts', 'Follower Growth', 'Engagement', 'Community'],
  },
  {
    icon: '🎨',
    iconBg: 'linear-gradient(135deg, rgba(249,115,22,0.25), rgba(251,191,36,0.15))',
    img: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80',
    title: 'Branding & Identity',
    desc: 'Logo se lekar brand guide tak — aisi identity jo aapko market mein alag dikhaye.',
    tags: ['Logo Design', 'Brand Identity', 'Brochure', 'Business Card', 'Brand Guide'],
  },
  {
    icon: '🌐',
    iconBg: 'linear-gradient(135deg, rgba(0,212,255,0.25), rgba(6,182,212,0.15))',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
    title: 'Website & Online Presence',
    desc: 'Professional websites jo visitors ko customers mein convert karein. SEO ke saath.',
    tags: ['Website Dev', 'Landing Pages', 'SEO', 'Google Business', 'Domain Setup'],
  },
  {
    icon: '🎬',
    iconBg: 'linear-gradient(135deg, rgba(34,197,94,0.25), rgba(16,185,129,0.15))',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80',
    title: 'Content Creation',
    desc: 'Photo shoots, video production, ad creatives — visual content jo brand ko powerful banaye.',
    tags: ['Photo Shoot', 'Video Production', 'Ad Creatives', 'Promo Videos', 'Thumbnails'],
  },
  {
    icon: '📊',
    iconBg: 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(108,71,255,0.15))',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    title: 'Strategy & Consulting',
    desc: 'Market research, competitor analysis, aur growth planning jo business ko next level le jaaye.',
    tags: ['Market Research', 'Competitor Analysis', 'Growth Plan', 'Strategy', 'Consulting'],
  },
]

const ALL_SERVICES = [
  { icon: Megaphone, color: '#4f7cff', glow: 'rgba(79,124,255,0.18)', kicker: 'Paid Media', outcome: 'Meta campaigns tuned for sales', title: 'Facebook Ads', desc: 'Targeted campaigns jo leads aur sales dono laayein.' },
  { icon: Camera, color: '#ff4aa2', glow: 'rgba(255,74,162,0.18)', kicker: 'Social Growth', outcome: 'Reels-first creative engine', title: 'Instagram Marketing', desc: 'Reels, posts, stories — Instagram ko business growth machine banayein.' },
  { icon: Search, color: '#3ec7ff', glow: 'rgba(62,199,255,0.18)', kicker: 'Intent Capture', outcome: 'High-intent search traffic', title: 'Google Ads (PPC)', desc: 'Search pe top rank karo jahan customers dhundh rahe hain.' },
  { icon: Play, color: '#ff6b57', glow: 'rgba(255,107,87,0.18)', kicker: 'Video Reach', outcome: 'Short-form + long-form growth', title: 'YouTube Promotion', desc: 'Videos ko viral karo aur brand awareness badao.' },
  { icon: Target, color: '#42d392', glow: 'rgba(66,211,146,0.18)', kicker: 'Lead Engine', outcome: 'Funnels built for qualified enquiries', title: 'Lead Generation', desc: 'Qualified leads jo seedha aapke sales funnel mein aayein.' },
  { icon: Globe, color: '#8f6bff', glow: 'rgba(143,107,255,0.18)', kicker: 'Web Presence', outcome: 'Conversion-first digital storefronts', title: 'Website Development', desc: 'Business, e-commerce, portfolio, landing pages.' },
  { icon: TrendingUp, color: '#00d4ff', glow: 'rgba(0,212,255,0.18)', kicker: 'Organic Growth', outcome: 'Search visibility that compounds', title: 'SEO & Ranking', desc: 'Google pe organically top rank karo — long-term results.' },
  { icon: MapPinned, color: '#ff9c42', glow: 'rgba(255,156,66,0.18)', kicker: 'Local Discovery', outcome: 'Maps visibility for nearby buyers', title: 'Google Business', desc: 'Google Maps par appear karo jahan customers search karte hain.' },
  { icon: PenTool, color: '#b084ff', glow: 'rgba(176,132,255,0.18)', kicker: 'Visual Identity', outcome: 'Distinctive marks people remember', title: 'Logo Design', desc: 'Memorable logos jo brand ki pehchaan ban jaayein.' },
  { icon: Palette, color: '#44d6b7', glow: 'rgba(68,214,183,0.18)', kicker: 'Brand System', outcome: 'Colors, voice, look, consistency', title: 'Brand Identity', desc: 'Color palette, typography, brand guide — full identity.' },
  { icon: Image, color: '#ffb347', glow: 'rgba(255,179,71,0.18)', kicker: 'Campaign Creative', outcome: 'Launch-ready poster systems', title: 'Poster & Banner', desc: 'Festival creatives, event banners, social media graphics.' },
  { icon: Clapperboard, color: '#52d273', glow: 'rgba(82,210,115,0.18)', kicker: 'Motion Studio', outcome: 'Edit stacks for every platform', title: 'Video Editing', desc: 'YouTube, reels, ads — professional editing har platform ke liye.' },
  { icon: MessageCircle, color: '#5f8cff', glow: 'rgba(95,140,255,0.18)', kicker: 'Direct Outreach', outcome: 'Broadcasts that trigger replies', title: 'WhatsApp Marketing', desc: 'Broadcast campaigns jo direct customers tak pohanchein.' },
  { icon: Mail, color: '#7b7fff', glow: 'rgba(123,127,255,0.18)', kicker: 'Retention Layer', outcome: 'Nurture sequences that convert', title: 'Email Marketing', desc: 'Automated email sequences jo nurture aur convert karein.' },
  { icon: BadgePercent, color: '#ffc84a', glow: 'rgba(255,200,74,0.18)', kicker: 'Offer Systems', outcome: 'Discount journeys that increase AOV', title: 'Coupon & Offers', desc: 'Festive offers, discount codes, referral programs.' },
  { icon: UserRound, color: '#c46bff', glow: 'rgba(196,107,255,0.18)', kicker: 'Authority Build', outcome: 'Presence that attracts trust', title: 'Personal Branding', desc: 'Politician, influencer, businessman — personal brand banao.' },
]

const SERVICE_SPOTLIGHT = [
  {
    icon: Sparkles,
    title: 'Creative + Performance',
    desc: 'Ads, reels, landing pages aur copy ek hi growth system mein stitched rehte hain.',
  },
  {
    icon: SquareKanban,
    title: 'Execution Stack',
    desc: 'Strategy se launch tak design, media buying, content aur tracking same pipeline mein chalta hai.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'One Agency, Zero Chaos',
    desc: '16+ services ek jagah hone se freelancers wali fragmentation aur delay khatam hoti hai.',
  },
  {
    icon: MessageSquareQuote,
    title: 'Fast Iteration Loop',
    desc: 'Reports, feedback aur optimisation cycles se campaigns week by week sharper bante hain.',
  },
]

const TIMELINE_STEPS = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'Aapke business, goals, competitors aur target audience ko deeply samjhte hain. Free 30-min strategy session.',
    icon: '📞',
    color: '#6c47ff',
  },
  {
    num: '02',
    title: 'Custom Strategy',
    desc: 'Aapke liye tailor-made digital marketing roadmap with clear timelines aur expected results.',
    icon: '🎯',
    color: '#00d4ff',
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Design, content, ads, website — sab parallel chal raha hai. Dedicated account manager ke saath.',
    icon: '⚡',
    color: '#ff3cac',
  },
  {
    num: '04',
    title: 'Scale & Optimize',
    desc: 'Weekly reports, A/B testing, continuous optimization. Results improve hote hain every single week.',
    icon: '🚀',
    color: '#f97316',
  },
]

const PORTFOLIO = [
  { img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80', bg: 'linear-gradient(135deg, rgba(225,48,108,0.4), rgba(108,71,255,0.3))', cat: 'Fashion & E-commerce', title: 'LuxeFashion Store Launch', desc: 'Complete e-commerce website with Instagram integration aur targeted ads campaign.', stats: [{ val: '340%', lbl: 'Sales Up' }, { val: '200K', lbl: 'Reach' }, { val: '₹50L+', lbl: 'Revenue' }] },
  { img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80', bg: 'linear-gradient(135deg, rgba(0,212,255,0.4), rgba(6,182,212,0.3))', cat: 'Hospitality & Tourism', title: 'Resort Digital Presence', desc: 'Google Ads, SEO, social media aur drone photography se resort ki online visibility triple.', stats: [{ val: '3x', lbl: 'Bookings' }, { val: '#1', lbl: 'Google Rank' }, { val: '500+', lbl: 'Reviews' }] },
  { img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80', bg: 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(108,71,255,0.3))', cat: 'Education & Coaching', title: 'Coaching Institute Growth', desc: 'Facebook + Google ads ke saath student enrollments double kiye aur brand authority banayi.', stats: [{ val: '2x', lbl: 'Enrollments' }, { val: '₹8L', lbl: 'Ad Spend ROI' }, { val: '180+', lbl: 'Leads/mo' }] },
  { img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', bg: 'linear-gradient(135deg, rgba(249,115,22,0.4), rgba(251,191,36,0.3))', cat: 'Real Estate', title: 'Property Lead Generation', desc: 'Multi-city real estate campaigns jo high-intent property buyers seedha aapke paas laaye.', stats: [{ val: '500+', lbl: 'Leads/mo' }, { val: '₹200', lbl: 'Cost/Lead' }, { val: '8%', lbl: 'Close Rate' }] },
  { img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80', bg: 'linear-gradient(135deg, rgba(34,197,94,0.4), rgba(16,185,129,0.3))', cat: 'Healthcare', title: 'Clinic Branding & Leads', desc: 'Local SEO, Google Ads aur social media se clinic mein patient flow 4x badhaya.', stats: [{ val: '4x', lbl: 'Patients' }, { val: '#1', lbl: 'Local Rank' }, { val: '60%', lbl: 'Less Cost' }] },
  { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', bg: 'linear-gradient(135deg, rgba(255,60,172,0.4), rgba(225,48,108,0.3))', cat: 'Events & Entertainment', title: 'Music Festival Promotion', desc: 'Full digital campaign — Instagram reels, influencer collabs, Google ads se 5000+ tickets sold.', stats: [{ val: '5000+', lbl: 'Tickets' }, { val: '20M+', lbl: 'Impressions' }, { val: '3x', lbl: 'ROAS' }] },
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

// ── GSAP ANIMATIONS HOOK ──
function useGSAPAnimations(rocketRuntimeRef) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {
      // ── HERO ANIMATIONS ──
      gsap.fromTo('.hero-badge',
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      )

      gsap.fromTo('.hero-title',
        { opacity: 0, y: 50, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
      )

      gsap.fromTo('.hero-desc',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.7 }
      )

      gsap.fromTo('.hero-cta > *',
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out', delay: 0.9 }
      )

      gsap.fromTo('.hero-proof',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 1.2 }
      )

      gsap.fromTo('.rocket-stage',
        { opacity: 0, x: 60, scale: 0.9, rotateY: -5 },
        { opacity: 1, x: 0, scale: 1, rotateY: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      )

      gsap.fromTo('.hero-trust-logos',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 1.0 }
      )

      gsap.to('.rocket-ship-idle', {
        y: -10,
        duration: 2.4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      gsap.to('.rocket-charge-ring', {
        scale: 1.04,
        opacity: 0.45,
        duration: 1.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // ── ROCKET LAUNCH ON SCROLL DOWN (scrub with hero) ──
      // As user scrolls down past the hero, the rocket launches upward.
      // Scroll back up = rocket returns smoothly.
      const rocketProgress = { value: 0 }
      const rocketTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          // end when hero bottom reaches 20% from top — gives a tight, fast launch window
          end: '80% top',
          scrub: 0.4, // fast & smooth scrub
        },
      })

      rocketTl
        // Track scroll progress for canvas particles
        .to(rocketProgress, {
          value: 1,
          duration: 1,
          ease: 'none',
          onUpdate: () => {
            rocketRuntimeRef.current.progress = rocketProgress.value
          },
        }, 0)

        // Phase 1 — Pre-ignition: fuel ring + glow (0 → 0.15)
        .to('.rocket-fuel-ring', {
          opacity: 0.95,
          scale: 1.18,
          duration: 0.12,
          ease: 'none',
        }, 0)
        .to('.rocket-stage-glow', {
          opacity: 0.85,
          scale: 1.14,
          duration: 0.12,
          ease: 'none',
        }, 0.02)

        // Phase 2 — Ignition: flames on, smoke (0.1 → 0.25)
        .to('.rocket-flame-old', {
          opacity: 1,
          scaleY: 1,
          duration: 0.12,
          ease: 'none',
        }, 0.1)
        .to('.rocket-core-glow', {
          opacity: 1,
          scale: 1.3,
          duration: 0.12,
          ease: 'none',
        }, 0.1)
        .to('.rocket-flame-ambient', {
          opacity: 1,
          duration: 0.1,
          ease: 'none',
        }, 0.12)
        .to('.rocket-smoke-haze', {
          opacity: 0.75,
          scaleX: 1.2,
          duration: 0.1,
          ease: 'none',
        }, 0.12)

        // Phase 3 — Liftoff: rocket moves up, trail beam grows (0.2 → 0.55)
        .to('.rocket-trail-beam', {
          opacity: 0.7,
          scaleY: 0.5,
          duration: 0.15,
          ease: 'none',
        }, 0.2)
        .to('.rocket-ship-wrap', {
          y: -180,
          duration: 0.3,
          ease: 'none',
        }, 0.2)

        // Phase 4 — Full ascent: rocket flies high with tilt and trail (0.5 → 1.0)
        .to('.rocket-ship-wrap', {
          y: -700,
          x: 40,
          rotation: -15,
          duration: 0.5,
          ease: 'none',
        }, 0.5)
        .to('.rocket-trail-beam', {
          opacity: 1,
          scaleY: 1.3,
          duration: 0.4,
          ease: 'none',
        }, 0.5)
        .to('.rocket-stage-glow', {
          opacity: 1.0,
          scale: 1.5,
          duration: 0.3,
          ease: 'none',
        }, 0.55)

      // ── SCROLL REVEAL - FADE UP ──
      gsap.utils.toArray('.gsap-fade-up').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // ── SCROLL REVEAL - FADE LEFT ──
      gsap.utils.toArray('.gsap-fade-left').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -80, rotateZ: -2 },
          {
            opacity: 1,
            x: 0,
            rotateZ: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // ── SCROLL REVEAL - FADE RIGHT ──
      gsap.utils.toArray('.gsap-fade-right').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: 80, rotateZ: 2 },
          {
            opacity: 1,
            x: 0,
            rotateZ: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // ── SCROLL REVEAL - SCALE ──
      gsap.utils.toArray('.gsap-scale').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, scale: 0.85, rotateY: -3 },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // ── STAGGER - SERVICE CATEGORIES ──
      gsap.fromTo('.service-category-card',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.service-categories',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // ── STAGGER - SERVICE CARDS ──
      gsap.fromTo('.service-card',
        { opacity: 0, y: 40, scale: 0.88 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: { amount: 0.6, grid: 'auto', from: 'start' },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // ── STAGGER - PORTFOLIO CARDS ──
      gsap.fromTo('.portfolio-card',
        { opacity: 0, y: 60, scale: 0.9, rotateY: -5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.portfolio-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // ── STAGGER - TESTIMONIALS ──
      gsap.fromTo('.testimonial-card',
        { opacity: 0, y: 40, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // ── STAGGER - FAQ ITEMS ──
      gsap.fromTo('.faq-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // ── COUNTER ANIMATION ──
      gsap.utils.toArray('.gsap-counter').forEach((el) => {
        const target = parseInt(el.dataset.target)
        const suffix = el.dataset.suffix || ''
        const obj = { value: 0 }

        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.value) + suffix
          },
        })
      })

      // ── PARALLAX - HERO ORBS ──
      gsap.utils.toArray('.hero-orb').forEach((orb, i) => {
        const direction = i % 2 === 0 ? 1 : -1
        gsap.to(orb, {
          y: -100 * direction,
          x: 50 * direction,
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      // ── MARQUEE SECTION FADE IN ──
      gsap.fromTo('.marquee-section',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.marquee-section',
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // ── STATS BAR ANIMATION ──
      gsap.fromTo('.stats-bar-inner',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.stats-bar-inner',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // ── SECTION HEADER ANIMATION ──
      gsap.utils.toArray('.section-header').forEach((header) => {
        gsap.fromTo(header.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // ── TIMELINE LINE GROW ANIMATION ──
      gsap.fromTo('.timeline-line-fill',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.timeline-section',
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 0.5,
          },
        }
      )

      // ── TIMELINE NODES ANIMATION ──
      gsap.utils.toArray('.timeline-node').forEach((node, i) => {
        gsap.fromTo(node,
          {
            opacity: 0,
            scale: 0,
            boxShadow: '0 0 0 0 var(--purple)',
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: '.timeline-section',
              start: `${20 + i * 20}% 80%`,
              end: `${40 + i * 20}% 60%`,
              scrub: 1,
            },
            boxShadow: '0 0 30px 10px var(--purple)',
          }
        )

        // Node glow pulse
        gsap.to(node, {
          boxShadow: '0 0 40px 15px var(--purple)',
          duration: 1.5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          scrollTrigger: {
            trigger: '.timeline-section',
            start: `${30 + i * 20}% 80%`,
            end: `${50 + i * 20}% 60%`,
            scrub: 1,
          },
        })
      })

      // ── TIMELINE CONTENT SLIDE ──
      gsap.utils.toArray('.timeline-content').forEach((content, i) => {
        const direction = i % 2 === 0 ? -1 : 1
        gsap.fromTo(content,
          {
            opacity: 0,
            x: 60 * direction,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: content,
              start: 'top 85%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // ── CTA SECTION ANIMATION ──
      gsap.fromTo('.cta-badge',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: '.cta-dark',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo('.cta-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-dark',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.fromTo('.cta-actions > *',
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-dark',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // ── FOOTER ANIMATION ──
      gsap.fromTo('.footer',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return containerRef
}

export default function Home() {
  const rocketStageRef = useRef(null)
  const rocketCanvasRef = useRef(null)
  const rocketRuntimeRef = useRef({ progress: 0 })
  const containerRef = useGSAPAnimations(rocketRuntimeRef)

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

  useEffect(() => {
    if (typeof window === 'undefined') return

    const stage = rocketStageRef.current
    const canvas = rocketCanvasRef.current
    if (!stage || !canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const particles = []
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const runtime = rocketRuntimeRef.current
    const maxParticles = prefersReducedMotion ? 12 : 40
    const rocketShip = stage.querySelector('.rocket-ship')
    const rocketCoreGlow = stage.querySelector('.rocket-core-glow')
    const nozzle = stage.querySelector('.rocket-engine-nozzle')

    let width = 0
    let height = 0
    let dpr = 1
    let frameId = 0
    let lastTime = performance.now()

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

    const resizeCanvas = () => {
      const rect = stage.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.round(width * dpr))
      canvas.height = Math.max(1, Math.round(height * dpr))
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const spawnParticle = (type, x, y, progress) => {
      if (particles.length >= maxParticles) particles.shift()

      if (type === 'smoke') {
        const life = 28 + Math.random() * 20
        particles.push({
          type,
          x: x + (Math.random() - 0.5) * 20,
          y: y + Math.random() * 8,
          vx: (Math.random() - 0.5) * 0.8,
          vy: 1.3 + Math.random() * 1.8 + progress * 1.4,
          size: 16 + Math.random() * 16 + progress * 8,
          life,
          maxLife: life,
          alpha: 0.32 + Math.random() * 0.18,
        })
        return
      }

      const life = 14 + Math.random() * 12
      particles.push({
        type,
        x: x + (Math.random() - 0.5) * 10,
        y: y + Math.random() * 6,
        vx: (Math.random() - 0.5) * 1.6,
        vy: 2.5 + Math.random() * 3.2 + progress * 2,
        size: 3 + Math.random() * 4,
        life,
        maxLife: life,
        alpha: 0.7 + Math.random() * 0.2,
      })
    }

    const drawParticle = (particle) => {
      const lifeRatio = particle.life / particle.maxLife
      const alpha = lifeRatio * particle.alpha

      if (particle.type === 'smoke') {
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size
        )
        gradient.addColorStop(0, `rgba(198, 206, 255, ${alpha * 0.55})`)
        gradient.addColorStop(0.55, `rgba(116, 123, 177, ${alpha * 0.3})`)
        gradient.addColorStop(1, 'rgba(15, 12, 32, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        return
      }

      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size * 2.6
      )
      gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`)
      gradient.addColorStop(0.25, `rgba(255, 233, 154, ${alpha})`)
      gradient.addColorStop(0.6, `rgba(255, 138, 61, ${alpha * 0.8})`)
      gradient.addColorStop(1, 'rgba(255, 90, 40, 0)')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size * 2.4, 0, Math.PI * 2)
      ctx.fill()
    }

    const render = (time) => {
      const dt = Math.min((time - lastTime) / 16.667, 2)
      lastTime = time

      ctx.clearRect(0, 0, width, height)

      const progress = runtime.progress || 0
      const stageRect = stage.getBoundingClientRect()
      const nozzleRect = nozzle?.getBoundingClientRect()

      let nozzleX = width * 0.55
      let nozzleY = height * 0.72

      if (nozzleRect) {
        nozzleX = nozzleRect.left - stageRect.left + nozzleRect.width / 2
        nozzleY = nozzleRect.top - stageRect.top + nozzleRect.height
      }

      const fuelPhase = clamp((progress - 0.06) / 0.16, 0, 1)
      const ignitionPhase = clamp((progress - 0.2) / 0.14, 0, 1)
      const liftPhase = clamp((progress - 0.36) / 0.28, 0, 1)
      const ascentPhase = clamp((progress - 0.68) / 0.32, 0, 1)
      const intensity = Math.max(fuelPhase * 0.35, ignitionPhase * 0.9, liftPhase, ascentPhase * 1.2)

      if (progress > 0.08) {
        const smokeBursts = prefersReducedMotion ? 1 : 1 + Math.round(intensity * 3)
        for (let i = 0; i < smokeBursts; i += 1) {
          if (Math.random() < 0.6 + intensity * 0.18) {
            spawnParticle('smoke', nozzleX, nozzleY + 6, progress)
          }
        }
      }

      if (progress > 0.18) {
        const emberBursts = prefersReducedMotion ? 1 : 2 + Math.round((ignitionPhase + liftPhase + ascentPhase) * 4)
        for (let i = 0; i < emberBursts; i += 1) {
          if (Math.random() < 0.5 + intensity * 0.2) {
            spawnParticle('ember', nozzleX, nozzleY + 2, progress)
          }
        }
      }

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const particle = particles[i]
        particle.x += particle.vx * dt
        particle.y += particle.vy * dt
        particle.life -= dt

        if (particle.type === 'smoke') {
          particle.size += 0.22 * dt
          particle.vx *= 0.985
          particle.vy *= 0.995
        } else {
          particle.size *= 0.992
          particle.vx *= 0.99
        }

        if (particle.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        drawParticle(particle)
      }

      frameId = window.requestAnimationFrame(render)
    }

    resizeCanvas()

    let resizeObserver
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(resizeCanvas)
      resizeObserver.observe(stage)
    }

    const rotateXTo = rocketShip ? gsap.quickTo(rocketShip, 'rotateX', { duration: 0.22, ease: 'power3.out' }) : null
    const rotateYTo = rocketShip ? gsap.quickTo(rocketShip, 'rotateY', { duration: 0.22, ease: 'power3.out' }) : null
    const glowTo = rocketCoreGlow ? gsap.quickTo(rocketCoreGlow, 'opacity', { duration: 0.22, ease: 'power2.out' }) : null

    const handlePointerMove = (event) => {
      if (!rotateXTo || !rotateYTo) return
      const rect = stage.getBoundingClientRect()
      const px = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      const py = ((event.clientY - rect.top) / rect.height - 0.5) * 2
      rotateYTo(px * 9)
      rotateXTo(-py * 7)
      glowTo?.(0.92)
    }

    const handlePointerLeave = () => {
      rotateYTo?.(0)
      rotateXTo?.(0)
      glowTo?.(0.62)
    }

    stage.addEventListener('pointermove', handlePointerMove)
    stage.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('resize', resizeCanvas, { passive: true })
    frameId = window.requestAnimationFrame(render)

    return () => {
      window.cancelAnimationFrame(frameId)
      resizeObserver?.disconnect()
      window.removeEventListener('resize', resizeCanvas)
      stage.removeEventListener('pointermove', handlePointerMove)
      stage.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i)
  const navLinks = ['Services', 'Portfolio', 'Process', 'FAQ']
  const isDark = theme === 'dark'

  return (
    <div ref={containerRef}>
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

              <div className="hero-trust-logos">
                <span className="trust-label">Trusted by brands across India</span>
                <div className="trust-logos">
                  <div className="trust-logo-pill">Startup India</div>
                  <div className="trust-logo-pill">Google Partner</div>
                  <div className="trust-logo-pill">Meta Business</div>
                  <div className="trust-logo-pill">Shopify Expert</div>
                </div>
              </div>

              <div className="hero-proof">
                <span className="proof-item">No credit card</span>
                <span className="proof-item">3x ROI guaranteed</span>
                <span className="proof-item">Results in 30 days</span>
              </div>
            </div>

            <div className="rocket-stage" ref={rocketStageRef}>
              <div className="rocket-stage-glow"></div>
              <div className="rocket-parallax-grid"></div>
              <div className="rocket-parallax-rings"></div>
              <canvas ref={rocketCanvasRef} className="rocket-particles-canvas" aria-hidden="true"></canvas>

              <div className="rocket-stat-card rocket-stat-leads">
                <div className="rocket-stat-icon">
                  <Target strokeWidth={2.1} />
                </div>
                <div>
                  <div className="rocket-stat-value">+120 Leads</div>
                  <div className="rocket-stat-label">high-intent pipeline</div>
                </div>
              </div>

              <div className="rocket-stat-card rocket-stat-revenue">
                <div className="rocket-stat-icon">
                  <IndianRupee strokeWidth={2.1} />
                </div>
                <div>
                  <div className="rocket-stat-value">₹3.2L Revenue</div>
                  <div className="rocket-stat-label">month-on-month surge</div>
                </div>
              </div>

              <div className="rocket-stat-card rocket-stat-roas">
                <div className="rocket-stat-icon">
                  <Gauge strokeWidth={2.1} />
                </div>
                <div>
                  <div className="rocket-stat-value">4.2x ROAS</div>
                  <div className="rocket-stat-label">scaling profitably</div>
                </div>
              </div>

              <div className="rocket-launch-base">
                <div className="rocket-launch-ring rocket-charge-ring"></div>
                <div className="rocket-launch-ring rocket-fuel-ring"></div>
                <div className="rocket-launch-pad"></div>
                <div className="rocket-trail-beam"></div>
              </div>

              <div className="rocket-ship-wrap">
                <div className="rocket-ship-idle">
                  <div className="rocket-ship">
                    <div className="rocket-core-glow"></div>
                    <div className="rocket-svg-wrap">
                      <PremiumRocket />
                    </div>
                    <div className="rocket-engine-nozzle"></div>
                    <div className="rocket-flame-old">
                      <div className="rocket-flame-outer-old"></div>
                      <div className="rocket-flame-core-old"></div>
                    </div>
                    <div className="rocket-smoke-haze"></div>
                  </div>
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
            <span key={i} className="marquee-item">{item}<span className="marquee-dot"></span></span>
          ))}
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-bar-inner">
            {STATS.map((s, i) => (
              <div key={i} className="stats-bar-item gsap-fade-up">
                <div className="stats-bar-num">
                  <span className="gradient-text">
                    <span data-target={s.value} data-suffix={s.suffix} className="gsap-counter counter-value">{s.value}{s.suffix}</span>
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
              <div key={i} className="service-category-card">
                <div className="service-cat-img-wrap" style={{ background: cat.iconBg }}>
                  <img src={cat.img} alt={cat.title} className="service-cat-img" />
                </div>
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

      <div className="section-divider">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="divider-svg">
          <path d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z" fill="url(#divGrad)" opacity="0.15"/>
          <path d="M0 40C360 20 720 50 1080 30C1260 20 1380 40 1440 35" stroke="url(#divStrokeGrad)" strokeWidth="1.5" fill="none" opacity="0.3"/>
          <circle cx="360" cy="25" r="3" fill="#6c47ff" opacity="0.4"/>
          <circle cx="720" cy="30" r="4" fill="#00d4ff" opacity="0.4"/>
          <circle cx="1080" cy="28" r="3" fill="#ff3cac" opacity="0.4"/>
          <defs>
            <linearGradient id="divGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6c47ff"/>
              <stop offset="0.5" stopColor="#00d4ff"/>
              <stop offset="1" stopColor="#ff3cac"/>
            </linearGradient>
            <linearGradient id="divStrokeGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6c47ff" stopOpacity="0"/>
              <stop offset="0.3" stopColor="#6c47ff"/>
              <stop offset="0.7" stopColor="#00d4ff"/>
              <stop offset="1" stopColor="#ff3cac" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── ALL SERVICES GRID ── */}
      <section className="section services-section" style={{ paddingTop: '48px' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '0' }}>
            <div className="section-label">Complete Service List</div>
            <h2 className="section-title"><span className="gradient-text">16+ Services</span> Under One Roof</h2>
            <p className="section-sub services-sub">
              Flat service menus nahi, ek connected growth stack. Har block creative, traffic, trust aur conversions ko support karta hai.
            </p>
          </div>

          <div className="services-spotlight gsap-scale">
            <div className="services-spotlight-copy">
              <div className="services-spotlight-kicker">Growth Stack</div>
              <h3 className="services-spotlight-title">
                First click se repeat customer tak,
                <span className="gradient-text"> every layer is covered.</span>
              </h3>
              <p className="services-spotlight-desc">
                Isliye yeh section sirf list nahi hai. Yeh dikhaata hai ki paid media, organic visibility, design systems aur retention channels saath mein kaise kaam karte hain.
              </p>
              <div className="services-spotlight-pills">
                <span>Paid Media</span>
                <span>Creative Studio</span>
                <span>SEO + Local</span>
                <span>Retention Flows</span>
              </div>
            </div>

            <div className="services-spotlight-grid">
              {SERVICE_SPOTLIGHT.map((item) => (
                <div key={item.title} className="services-spotlight-card">
                  <div className="services-spotlight-icon">
                    <item.icon strokeWidth={2} />
                  </div>
                  <div className="services-spotlight-card-title">{item.title}</div>
                  <div className="services-spotlight-card-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="services-grid">
            {ALL_SERVICES.map((s, i) => (
              <div
                key={i}
                className="service-card"
                style={{
                  '--service-accent': s.color,
                  '--service-glow': s.glow,
                }}
              >
                <div className="service-card-top">
                  <div className="service-icon-shell">
                    <div className="service-icon">
                      <s.icon strokeWidth={2.1} />
                    </div>
                  </div>
                  <div className="service-kicker">{s.kicker}</div>
                </div>
                <div className="service-title-row">
                  <div className="service-title">{s.title}</div>
                  <div className="service-arrow">↗</div>
                </div>
                <div className="service-desc">{s.desc}</div>
                <div className="service-outcome">{s.outcome}</div>
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
            <div className="ba-card ba-card-bad gsap-fade-left">
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

            <div className="ba-card ba-card-good gsap-fade-right">
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
              <div key={i} className="portfolio-card">
                <div className="portfolio-visual" style={{ background: p.bg }}>
                  <img src={p.img} alt={p.title} className="portfolio-img" loading="lazy" />
                  <div className="portfolio-img-overlay">
                    <span className="portfolio-overlay-cat">{p.cat}</span>
                  </div>
                </div>
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

      {/* ── TIMELINE (Process) ── */}
      <section className="section timeline-section" id="process">
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

          <div className="timeline-container">
            <div className="timeline-line">
              <div className="timeline-line-fill"></div>
            </div>

            {TIMELINE_STEPS.map((step, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-node" style={{ '--node-color': step.color }}>
                  <span className="timeline-node-icon">{step.icon}</span>
                  <span className="timeline-node-num">{step.num}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-content-inner">
                    <div className="timeline-step-num">{step.num}</div>
                    <div className="timeline-step-icon">{step.icon}</div>
                    <div className="timeline-step-title">{step.title}</div>
                    <div className="timeline-step-desc">{step.desc}</div>
                  </div>
                </div>
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
              <div key={i} className="testimonial-card">
                <div className="test-stars">{'★★★★★'.split('').join(' ')}</div>
                <div className="test-text">&ldquo;{t.text}&rdquo;</div>
                <div className="test-author">
                  <div className="test-avatar" style={{ background: t.color }}>{t.name.split(' ').map(n => n[0]).join('')}</div>
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
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
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
              <div className="footer-brand-badge">
                <span className="footer-badge-dot"></span>
                India&apos;s Top Digital Agency 2026
              </div>
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
    </div>
  )
}
