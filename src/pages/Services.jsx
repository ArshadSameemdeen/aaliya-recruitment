import { Link } from 'react-router-dom'
import { Search, FileText, BookOpen, Globe, Headphones, Shield, Briefcase, ArrowRight, CheckCircle } from 'lucide-react'
import './Services.css'

const employerServices = [
  {
    icon: <Search size={32} />,
    title: 'Talent Sourcing & Screening',
    desc: 'We tap into Sri Lanka\'s deep talent pool to find workers that match your exact requirements. Every candidate is background-checked, skill-assessed, and reference-verified before you see a single profile.',
    includes: ['Skills & trade testing', 'Background verification', 'Reference checks', 'Medical screening'],
  },
  {
    icon: <FileText size={32} />,
    title: 'Documentation & Compliance',
    desc: 'We handle all paperwork on both ends — employment contracts, SLBFE clearances, destination country work permits, and visa applications — ensuring full legal compliance throughout.',
    includes: ['SLBFE registration & clearance', 'Employment contract drafting', 'Work visa processing', 'Attestation & authentication'],
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Pre-Departure Training',
    desc: 'Every worker we deploy undergoes tailored pre-departure training — covering job-specific skills, destination country culture, workplace expectations, and safety protocols.',
    includes: ['Cultural orientation', 'Job-specific skills refresher', 'Language basics', 'Safety & conduct briefing'],
  },
  {
    icon: <Globe size={32} />,
    title: 'Deployment & Onboarding Support',
    desc: 'We coordinate everything from departure logistics to arrival support. Our local partner network in destination countries ensures a smooth transition for your new hires.',
    includes: ['Travel & logistics coordination', 'Airport reception arrangement', 'Accommodation setup support', 'Local onboarding assistance'],
  },
  {
    icon: <Headphones size={32} />,
    title: 'Ongoing Worker Support',
    desc: 'Our 24/7 support line means workers have a lifeline if issues arise — reducing attrition, resolving problems early, and protecting your investment in each hire.',
    includes: ['24/7 worker helpline', 'Workplace dispute mediation', 'Welfare check-ins', 'Repatriation coordination if needed'],
  },
  {
    icon: <Shield size={32} />,
    title: 'Replacement Guarantee',
    desc: 'If a placed worker does not meet your expectations within the guarantee period, we will source and deploy a suitable replacement at no additional cost.',
    includes: ['90-day replacement guarantee', 'Performance issue mediation', 'No-cost re-deployment', 'Employer satisfaction follow-up'],
  },
]

const workerServices = [
  {
    icon: <Briefcase size={28} />,
    title: 'Job Matching',
    desc: 'We match your skills and experience to verified job openings with reputable international employers.',
  },
  {
    icon: <FileText size={28} />,
    title: 'Visa & Documentation',
    desc: 'We handle all your visa paperwork, SLBFE registration, and employment contract review.',
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Pre-Departure Training',
    desc: 'Orientation on culture, language basics, and job expectations so you arrive ready and confident.',
  },
  {
    icon: <Headphones size={28} />,
    title: 'Support Abroad',
    desc: 'Our team is available 24/7 to help you with any workplace issues or concerns once you are deployed.',
  },
]

const sectors = [
  { name: 'Healthcare & Nursing', icon: '🏥', detail: 'Nurses, caregivers, medical technicians, ward assistants' },
  { name: 'Construction', icon: '🏗️', detail: 'Civil engineers, foremen, laborers, welders, plumbers' },
  { name: 'Hospitality', icon: '🏨', detail: 'Hotel staff, chefs, receptionists, housekeeping' },
  { name: 'Domestic Staff', icon: '🏠', detail: 'Housekeepers, nannies, elderly caregivers, drivers' },
  { name: 'Engineering', icon: '⚙️', detail: 'Mechanical, electrical, civil, and industrial engineers' },
  { name: 'IT & Technology', icon: '💻', detail: 'Developers, IT support, network engineers, data analysts' },
  { name: 'Manufacturing', icon: '🏭', detail: 'Machine operators, quality control, assembly line workers' },
  { name: 'Agriculture', icon: '🌾', detail: 'Farm workers, supervisors, horticulture specialists' },
]

export default function Services() {
  return (
    <div className="services-page">
      <section className="page-hero services-hero">
        <div className="container">
          <span className="tag accent-tag">Our Services</span>
          <h1>End-to-End Recruitment, Handled for You</h1>
          <p>From sourcing the right candidate to getting them through your door — we manage the entire process so you don't have to.</p>
        </div>
      </section>

      {/* Employer Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="tag">For Employers</span>
            <h2>What We Do For You</h2>
            <p>A fully managed recruitment service from first contact to successful placement — and beyond.</p>
          </div>
          <div className="services-list">
            {employerServices.map((s, i) => (
              <div key={i} className="service-detail-card">
                <div className="service-detail-icon">{s.icon}</div>
                <div className="service-detail-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="service-includes">
                    <span className="includes-label">Includes:</span>
                    <div className="includes-list">
                      {s.includes.map((item, j) => (
                        <span key={j} className="include-item">
                          <CheckCircle size={14} /> {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/contact?type=employer" className="btn btn-accent">
              Request Workers Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section sectors-section">
        <div className="container">
          <div className="section-header">
            <span className="tag">Talent Pool</span>
            <h2>Sectors We Recruit For</h2>
            <p>Sri Lanka produces skilled, trained workers across a wide range of industries.</p>
          </div>
          <div className="sectors-detail-grid">
            {sectors.map((s, i) => (
              <div key={i} className="sector-detail-card">
                <span className="sector-emoji">{s.icon}</span>
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worker Services */}
      <section className="section worker-services-section">
        <div className="container">
          <div className="worker-services-inner">
            <div className="worker-services-header">
              <span className="tag">For Job Seekers</span>
              <h2>Are You a Sri Lankan Looking to Work Abroad?</h2>
              <p>We also help Sri Lankan workers find safe, verified jobs with reputable international employers.</p>
              <Link to="/contact?type=worker" className="btn btn-primary">
                Apply as a Worker <ArrowRight size={18} />
              </Link>
            </div>
            <div className="worker-services-grid">
              {workerServices.map((s, i) => (
                <div key={i} className="worker-service-card">
                  <div className="worker-service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
