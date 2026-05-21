import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, ShieldCheck, Award, Globe, TrendingUp } from 'lucide-react'
import './About.css'

const trustPillars = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'SLBFE Licensed · No. 3101',
    desc: 'Fully licensed under the Foreign Employment Agency Act License No. 3101, regulated by the Sri Lanka Bureau of Foreign Employment. Every placement is legal, documented, and internationally compliant.',
  },
  {
    icon: <Award size={28} />,
    title: '28+ Years of Experience',
    desc: 'With over 28 years in the foreign employment industry, we have recruited 400,000+ workers for employers across 12 countries worldwide. Our track record speaks for itself.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Global Employer Network',
    desc: 'We maintain active relationships with 46+ verified employer clients across the Middle East, Asia, and beyond — including household names like Spinneys, L&T Construction, Al Hammadi Hospital, and NBK.',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Diplomatic-Level Connections',
    desc: 'Our Managing Director holds embassy submission cards issued by Kuwait and Saudi Arabia embassies, and our Foreign Relations Manager has 24+ years working across Sri Lankan embassies in the Middle East.',
  },
]

const guarantees = [
  'Training impartment — workers are prepared for the specific role and destination',
  'Registration of prospective applicants through a well-formulated selection process',
  'Clerical process handling — all paperwork and documentation managed end-to-end',
  'Attention to immigration and emigration formalities on both ends',
  'Medical fitness system compliance — all candidates medically cleared before deployment',
  'Inward remittances and disbursement of funds handled',
  'Full compliance with regulations of governmental authorities',
  'Attention to complaints and conciliation — healthy relationship maintained post-deployment',
  'Departure of recruits to various work destinations coordinated seamlessly',
  'Post-departure services organised to attend to the needs of foreign employers',
]

const milestones = [
  { year: '1996', event: 'Aaliya Travels & Tours founded in Colombo under SLBFE License No. 3101. First placements in Saudi Arabia.' },
  { year: '2000', event: 'Expanded to UAE and Kuwait. Established diplomatic ties with embassies in the Middle East.' },
  { year: '2005', event: 'Reached 50,000 cumulative worker placements. Extended recruitment to India, Bangladesh and Nepal (SAARC region).' },
  { year: '2010', event: 'Embassy submission cards issued by Embassies of Kuwait and Saudi Arabia in recognition of long-standing service.' },
  { year: '2018', event: 'Surpassed 300,000 total workers recruited across 12 countries worldwide.' },
  { year: '2024', event: '400,000+ workers placed for 46+ employer clients. 28 years of uninterrupted service.' },
]

const team = [
  { name: 'Yaseer Arafath', role: 'Managing Director', initial: 'Y', note: '28+ years in foreign employment. Fluent in Arabic, English, Tamil & Sinhala. Holds embassy submission cards from Kuwait & Saudi Arabia.' },
  { name: 'M.H. Husain Asaff', role: 'Foreign Relations Manager', initial: 'H', note: '24+ years at Sri Lankan embassies in KSA, Kuwait, Oman & UAE. Appointed by the Ministry of Foreign Employment Promotion & Welfare.' },
]

export default function About() {
  return (
    <div className="about">
      <section className="page-hero about-hero">
        <div className="container">
          <span className="tag accent-tag">About Us</span>
          <h1>Why Employers Trust Aaliya Travels</h1>
          <p>15 years of reliable Sri Lankan workforce solutions for international employers — built on compliance, quality, and accountability.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container about-story">
          <div className="about-story-text">
            <span className="inline-tag">Our Story</span>
            <h2>28 Years. 400,000 Workers. One Unwavering Standard.</h2>
            <p>
              Aaliya Travels & Tours was founded under Foreign Employment Agency Act License No. 3101 with one conviction — that international employers deserve a Sri Lankan recruitment partner they can truly rely on. A partner who selects carefully, documents correctly, and stands behind every placement.
            </p>
            <p>
              Over 28 years, that commitment has resulted in 400,000+ workers recruited for 46+ employer clients across 12 countries — a reputation built entirely on reliable delivery and repeat business.
            </p>
            <p>
              We recruit not only from Sri Lanka but across the SAARC region — India, Bangladesh, and Nepal — giving employers access to a wider, deeper talent pool. Whatever your requirements, we have one solution: a fast, qualified, fully compliant response.
            </p>
            <Link to="/contact?type=employer" className="btn btn-accent" style={{ marginTop: '8px' }}>
              Partner With Us <ArrowRight size={18} />
            </Link>
          </div>
          <div className="about-story-visual">
            <div className="about-image-bg">
              <div className="about-stat-badge top-badge">
                <strong>400,000+</strong>
                <span>Workers Recruited</span>
              </div>
              <div className="about-stat-badge bottom-badge">
                <strong>46+</strong>
                <span>Employer Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="tag">Why Choose Us</span>
            <h2>What Makes Us Different</h2>
            <p>The qualities that international employers consistently cite when they explain why they keep coming back.</p>
          </div>
          <div className="grid-4">
            {trustPillars.map((p, i) => (
              <div key={i} className="trust-pillar-card">
                <div className="trust-pillar-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section">
        <div className="container guarantees-section">
          <div className="guarantees-header">
            <span className="inline-tag">Our Commitment</span>
            <h2>What Every Employer Partner Gets</h2>
            <p>These are not aspirations — they are the standard we hold ourselves to on every single engagement.</p>
          </div>
          <div className="guarantees-list">
            {guarantees.map((g, i) => (
              <div key={i} className="guarantee-item">
                <CheckCircle size={20} className="guarantee-check" />
                <span>{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="tag">Track Record</span>
            <h2>15 Years of Proven Delivery</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-event">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tag">Our Team</span>
            <h2>The People You'll Work With</h2>
            <p>Experienced professionals who understand your needs as an international employer.</p>
          </div>
          <div className="grid-2" style={{ maxWidth: '720px', margin: '0 auto' }}>
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-avatar">{member.initial}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-note">{member.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta-inner">
          <div>
            <h2>Ready to Hire Sri Lankan Talent?</h2>
            <p>Talk to our team today — inquiries replied within 24 hours, fully confidential.</p>
          </div>
          <div className="about-cta-actions">
            <Link to="/contact?type=employer" className="btn btn-accent">
              Request Workers <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-white">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
