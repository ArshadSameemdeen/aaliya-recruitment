import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Globe, Award, ShieldCheck, Star, ChevronRight, Clock, FileCheck, Search, Headphones } from 'lucide-react'
import './Home.css'

const stats = [
  { value: '28+', label: 'Years in Business' },
  { value: '400,000+', label: 'Workers Recruited' },
  { value: '46+', label: 'Employer Clients' },
  { value: '12', label: 'Countries Worldwide' },
]

const whyUs = [
  {
    icon: <Search size={28} />,
    title: 'Pre-Screened Candidates',
    desc: 'Every worker is background-checked, skill-verified, and reference-cleared before we present them to you. No wasted interviews.',
  },
  {
    icon: <FileCheck size={28} />,
    title: 'Full Documentation Handled',
    desc: 'We manage all visa, work permit, SLBFE, and contract paperwork end-to-end — so you focus on your business, not the bureaucracy.',
  },
  {
    icon: <Clock size={28} />,
    title: 'Fast Turnaround',
    desc: 'With an established pool of ready candidates and streamlined processes, we deliver qualified workers faster than any other agency.',
  },
  {
    icon: <Headphones size={28} />,
    title: 'Dedicated Account Manager',
    desc: 'Every employer partner gets a single point of contact who understands your industry and hiring needs inside out.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'SLBFE Licensed & Compliant',
    desc: 'Fully licensed by the Sri Lanka Bureau of Foreign Employment. Every placement is legal, documented, and internationally compliant.',
  },
  {
    icon: <Users size={28} />,
    title: 'Bulk Hiring Capacity',
    desc: 'Need 5 workers or 500? We have the network and infrastructure to fulfill large-scale recruitment drives on time.',
  },
]

const sectors = [
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Construction', icon: '🏗️' },
  { name: 'Hospitality', icon: '🏨' },
  { name: 'Domestic Staff', icon: '🏠' },
  { name: 'Engineering', icon: '⚙️' },
  { name: 'IT & Tech', icon: '💻' },
  { name: 'Manufacturing', icon: '🏭' },
  { name: 'Agriculture', icon: '🌾' },
]

const employerTestimonials = [
  {
    name: 'Khalid Al-Mansoori',
    role: 'HR Director',
    company: 'Al-Mansoori Construction Group',
    country: 'UAE',
    flag: '🇦🇪',
    text: "We have been working with Aaliya Travels for 6 years. They consistently deliver pre-screened, work-ready candidates on time. Their documentation is always clean and we've never had a compliance issue.",
    rating: 5,
  },
  {
    name: 'Dr. Fatima Al-Rashidi',
    role: 'Head of HR',
    company: 'Al-Rashidi Medical Centre',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    text: 'Finding qualified nursing staff from Sri Lanka used to be a challenge. Aaliya Travels made it seamless — every nurse they sent us has been professional, qualified, and culturally prepared.',
    rating: 5,
  },
  {
    name: 'Tanaka Hiroshi',
    role: 'Operations Manager',
    company: 'Tanaka Manufacturing Co.',
    country: 'Japan',
    flag: '🇯🇵',
    text: "Sri Lankan workers placed by Aaliya Travels are exceptional — disciplined, hardworking, and loyal. The agency's pre-departure training means workers arrive ready to perform from day one.",
    rating: 5,
  },
]

const process = [
  { step: '01', title: 'Tell Us What You Need', desc: 'Share your job requirements, volume, timeline, and destination country.' },
  { step: '02', title: 'We Source & Screen', desc: 'We search our candidate pool and run background, skill, and reference checks.' },
  { step: '03', title: 'You Review & Select', desc: 'Receive shortlisted profiles. Interview candidates at your convenience.' },
  { step: '04', title: 'We Handle the Rest', desc: 'Documentation, visas, training, and deployment — fully managed by us.' },
]

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-tag">SLBFE License No. 3101 · Over 28 Years in Foreign Employment</span>
            <h1>
              Hire Skilled Sri Lankan Workers
              <span className="hero-highlight"> With Confidence</span>
            </h1>
            <p>
              Aaliya Travels & Tours is Sri Lanka's trusted Human Resources Solution Provider. We source, screen, and deploy reliable workers for international employers across 12 countries — handling everything from candidate selection to visa clearance.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-accent">
                Request Workers <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn-white">
                Why Employers Trust Us
              </Link>
            </div>
            <div className="hero-trust">
              <CheckCircle size={16} color="#4ade80" />
              <span>SLBFE Licensed</span>
              <CheckCircle size={16} color="#4ade80" />
              <span>Pre-screened candidates</span>
              <CheckCircle size={16} color="#4ade80" />
              <span>End-to-end documentation</span>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="container">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tag">Why Employers Choose Us</span>
            <h2>Everything an International Employer Needs</h2>
            <p>We've spent 15 years perfecting the process of connecting global employers with Sri Lanka's skilled workforce.</p>
          </div>
          <div className="grid-3">
            {whyUs.map((w, i) => (
              <div key={i} className="why-card">
                <div className="why-card-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <span className="tag">How It Works</span>
            <h2>Simple, Transparent, Proven</h2>
            <p>From your first request to workers arriving on site — here's how we make it happen.</p>
          </div>
          <div className="process-steps">
            {process.map((p, i) => (
              <div key={i} className="process-step">
                <div className="process-num">{p.step}</div>
                <div className="process-line" />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="process-cta">
            <Link to="/contact" className="btn btn-primary">
              Start Your Hiring Request <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section sectors-section">
        <div className="container">
          <div className="section-header">
            <span className="tag">Industries We Serve</span>
            <h2>Skilled Workers Across Every Sector</h2>
            <p>Sri Lanka has a deep talent pool across a wide range of industries. We'll find the right fit for yours.</p>
          </div>
          <div className="sectors-row">
            {sectors.map((s, i) => (
              <div key={i} className="sector-pill">
                <span>{s.icon}</span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-outline">
              View All Services <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Employer Testimonials */}
      <section className="section employer-testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="tag">Employer Testimonials</span>
            <h2>What Our Employer Partners Say</h2>
            <p>Companies across the Middle East, Asia, and beyond have relied on us for years.</p>
          </div>
          <div className="grid-3">
            {employerTestimonials.map((t, i) => (
              <div key={i} className="emp-testimonial-card">
                <div className="emp-t-header">
                  <div className="emp-t-flag">{t.flag}</div>
                  <div>
                    <span className="emp-t-company">{t.company}</span>
                    <span className="emp-t-country">{t.country}</span>
                  </div>
                </div>
                <div className="stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#e8a020" color="#e8a020" />
                  ))}
                </div>
                <p>"{t.text}"</p>
                <div className="emp-t-author">
                  <div className="author-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/testimonials" className="btn btn-outline">
              More Success Stories <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="container trust-bar-inner">
          <div className="trust-item"><Award size={20} /> <span>SLBFE Licensed · License No. 3101</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><ShieldCheck size={20} /> <span>ISO Certified Processes</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><Globe size={20} /> <span>Active in 12 Countries Worldwide</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><Users size={20} /> <span>46+ Employer Clients Worldwide</span></div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="dual-cta">
        <div className="container dual-cta-grid">
          <div className="dual-cta-card employer-cta">
            <span className="dual-cta-tag">For Employers</span>
            <h2>Looking to Hire Sri Lankan Workers?</h2>
            <p>Tell us your requirements and we'll match you with pre-screened, qualified candidates within days.</p>
            <Link to="/contact?type=employer" className="btn btn-accent">
              Request Workers <ArrowRight size={18} />
            </Link>
          </div>
          <div className="dual-cta-card worker-cta">
            <span className="dual-cta-tag">For Job Seekers</span>
            <h2>Sri Lankan and Looking to Work Abroad?</h2>
            <p>Register with us and let our team match you with verified employers across 40+ countries.</p>
            <Link to="/contact?type=worker" className="btn btn-outline-light">
              Apply Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
