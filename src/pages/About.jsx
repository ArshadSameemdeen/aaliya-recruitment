import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, ShieldCheck, Award, Globe, TrendingUp, X } from 'lucide-react'
import './About.css'

const certificates = [
  {
    img: '/licence.jpeg',
    title: 'SLBFE Licence — Foreign Employment Agency',
    subtitle: 'Licence No. 3101 · Valid 2026',
    desc: 'Issued by the Sri Lanka Bureau of Foreign Employment under the Foreign Employment Act No. 21 of 1985.',
  },
  {
    img: '/licence2.jpeg',
    title: 'ALFEA Compliance Certificate',
    subtitle: 'Code of Good Conduct · SLBFE License 3101',
    desc: 'Member of the Association of Licensed Foreign Employment Agencies, pledging compliance with the Code of Good Conduct.',
  },
]

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
  { name: 'Yaseer Arafath', role: 'Managing Director', photo: '/arafath.jpg', note: '28+ years in foreign employment. Fluent in Arabic, English, Tamil & Sinhala. Holds embassy submission cards from Kuwait & Saudi Arabia.' },
  { name: 'Aysha Manal (MBA)', role: 'Foreign Relations Manager', photo: '/aysha.jpg', note: 'Manages employer relationships and overseas coordination across the Middle East and Asia — ensuring smooth communication between clients and deployed workers.' },
  { name: 'Fathima Amal (LLB/LLM)', role: 'Legal Manager', photo: '/amal.jpeg', note: 'Ensures full legal compliance across all placements. Manages employment contracts, regulatory documentation, and dispute resolution under Sri Lankan and international employment law.' },
  { name: 'Afzal Faris', role: 'Recruitment Operations Manager', photo: '/afzal.jpeg', note: 'Oversees end-to-end recruitment operations — candidate sourcing, selection coordination, and employer liaison across all active markets.' },
  { name: 'Arshad Sameemdeen', role: 'Sales & Marketing Manager', photo: '/arshad.jpg', note: 'Drives business development, client acquisition, and marketing strategy — building relationships with international employers and expanding Aaliya\'s reach across new markets.' },
]

const officePhotos = [
  { img: '/office3.jpg', label: 'Our Office, Colombo 10' },
  { img: '/office6.jpg', label: "Managing Director's Office" },
  { img: '/office9.jpg', label: 'Our Operations Team' },
  { img: '/office5.jpg', label: 'Client Meeting Room' },
  { img: '/office8.jpg', label: 'Staff at Work' },
  { img: '/office4.jpg', label: 'Application Processing' },
]

export default function About() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="about">
      {lightbox !== null && (
        <div className="cert-lightbox" onClick={() => setLightbox(null)}>
          <button className="cert-lightbox-close" onClick={() => setLightbox(null)}><X size={24} /></button>
          <img src={certificates[lightbox].img} alt={certificates[lightbox].title} onClick={e => e.stopPropagation()} />
        </div>
      )}
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
              <img src="/office7.jpg" alt="Aaliya Travels office" className="about-office-img" loading="lazy" />
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

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tag">Verified & Licensed</span>
            <h2>Our Official Certifications</h2>
            <p>Every placement is backed by full regulatory compliance. Click any certificate to view it in full.</p>
          </div>
          <div className="cert-grid">
            {certificates.map((c, i) => (
              <div key={i} className="cert-card" onClick={() => setLightbox(i)}>
                <div className="cert-img-wrap">
                  <img src={c.img} alt={c.title} loading="lazy" />
                  <div className="cert-overlay">
                    <span>Click to view</span>
                  </div>
                </div>
                <div className="cert-info">
                  <h4>{c.title}</h4>
                  <p className="cert-subtitle">{c.subtitle}</p>
                  <p className="cert-desc">{c.desc}</p>
                </div>
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
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card">
                {member.photo
                  ? <img src={member.photo} alt={member.name} className="team-photo" loading="lazy" />
                  : <div className="team-avatar">{member.initial}</div>
                }
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-note">{member.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Gallery */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="tag">Our Office</span>
            <h2>A Real Office. A Real Team.</h2>
            <p>Based in Colombo 10, Sri Lanka — visit us or reach out anytime.</p>
          </div>
          <div className="office-gallery">
            {officePhotos.map((p, i) => (
              <div key={i} className="office-photo-wrap">
                <img src={p.img} alt={p.label} loading="lazy" />
                <div className="office-photo-label">{p.label}</div>
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
