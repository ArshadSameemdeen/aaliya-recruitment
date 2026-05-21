import { Star, Quote, Building2, Users } from 'lucide-react'
import './Testimonials.css'

const employerTestimonials = [
  {
    name: 'Khalid Al-Mansoori',
    role: 'HR Director',
    company: 'Al-Mansoori Construction Group',
    country: 'UAE',
    flag: '🇦🇪',
    rating: 5,
    text: "We have been working with Aaliya Travels for 6 years. They consistently deliver pre-screened, work-ready candidates on time. Their documentation is always clean and we've never had a compliance issue. Truly a reliable partner.",
    year: '2024',
  },
  {
    name: 'Dr. Fatima Al-Rashidi',
    role: 'Head of Human Resources',
    company: 'Al-Rashidi Medical Centre',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    rating: 5,
    text: 'Finding qualified nursing staff from Sri Lanka used to be a lengthy challenge. Aaliya Travels made it seamless — every nurse they sent us has been professional, qualified, and culturally prepared. We place all our Sri Lankan hiring through them.',
    year: '2023',
  },
  {
    name: 'Tanaka Hiroshi',
    role: 'Operations Manager',
    company: 'Tanaka Manufacturing Co.',
    country: 'Japan',
    flag: '🇯🇵',
    rating: 5,
    text: "Sri Lankan workers placed by Aaliya Travels are exceptional — disciplined, hardworking, and loyal. The agency's pre-departure training means workers arrive ready to perform from day one. We've hired over 80 workers through them.",
    year: '2024',
  },
  {
    name: 'Mohammed Al-Farsi',
    role: 'General Manager',
    company: 'Gulf Hospitality Group',
    country: 'Qatar',
    flag: '🇶🇦',
    rating: 5,
    text: 'Our hotels across Qatar have been staffed by Sri Lankan workers sourced by Aaliya Travels for years. The quality and consistency is unmatched. They understand what hospitality employers need and always deliver.',
    year: '2023',
  },
  {
    name: 'Lee Cheng Wei',
    role: 'Head of Recruitment',
    company: 'Petronas Facilities Sdn Bhd',
    country: 'Malaysia',
    flag: '🇲🇾',
    rating: 5,
    text: 'We needed 120 skilled technicians on short notice. Aaliya Travels delivered within 6 weeks — fully documented, medically cleared, and ready to work. Their bulk hiring capability is something we rely on heavily.',
    year: '2022',
  },
  {
    name: 'Ahmad Bin Rashid',
    role: 'HR Manager',
    company: 'Rashid Contracting LLC',
    country: 'Kuwait',
    flag: '🇰🇼',
    rating: 5,
    text: "We've tried other Sri Lankan agencies before and always ended up with documentation problems or workers who weren't as advertised. Aaliya Travels is the only agency where what we see is exactly what we get.",
    year: '2024',
  },
]

const workerTestimonials = [
  {
    name: 'Chaminda Perera',
    role: 'Electrician',
    country: 'UAE',
    flag: '🇦🇪',
    rating: 5,
    text: 'Within 3 months they had me working in Dubai with a reputable company. No hidden fees, no false promises. I now support my family comfortably from abroad.',
    year: '2023',
  },
  {
    name: 'Nirosha Fernando',
    role: 'Registered Nurse',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    rating: 5,
    text: 'As a woman going abroad alone for the first time, I was scared. Aaliya handled everything and even connected me with a Sri Lankan community before I left. I felt safe.',
    year: '2022',
  },
  {
    name: 'Ruwan Jayasinghe',
    role: 'Construction Supervisor',
    country: 'Qatar',
    flag: '🇶🇦',
    rating: 5,
    text: "I had been cheated by another agency before. Aaliya Travels was a completely different experience — honest, professional, and they genuinely care about workers.",
    year: '2023',
  },
  {
    name: 'Kumari Dissanayake',
    role: 'Hotel Receptionist',
    country: 'Malaysia',
    flag: '🇲🇾',
    rating: 5,
    text: 'The pre-departure training was incredibly helpful. My employer said I was the most prepared worker they had received from Sri Lanka.',
    year: '2024',
  },
  {
    name: 'Lasith Bandara',
    role: 'IT Support Specialist',
    country: 'Japan',
    flag: '🇯🇵',
    rating: 5,
    text: "Finding a tech job in Japan seemed impossible, but Aaliya Travels had connections I didn't expect. They found me a legitimate IT company and arranged Japanese language basics for me.",
    year: '2024',
  },
  {
    name: 'Asanka Liyanage',
    role: 'Chef',
    country: 'UAE',
    flag: '🇦🇪',
    rating: 5,
    text: 'They placed me with a restaurant chain in Abu Dhabi and negotiated a salary I could not have gotten on my own. The legal team explained every clause in Sinhala.',
    year: '2024',
  },
]

const stats = [
  { value: '28+', label: 'Years in Business' },
  { value: '46+', label: 'Employer Clients' },
  { value: '400,000+', label: 'Workers Recruited' },
  { value: '12', label: 'Countries Served' },
]

export default function Testimonials() {
  return (
    <div className="testimonials-page">
      <section className="page-hero testimonials-hero">
        <div className="container">
          <span className="tag accent-tag">Testimonials</span>
          <h1>Trusted by Employers and Workers Alike</h1>
          <p>Hundreds of international companies and thousands of Sri Lankan workers have trusted us. Here's what they say.</p>
          <div className="hero-rating">
            <div className="hero-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} fill="#e8a020" color="#e8a020" />
              ))}
            </div>
            <span>4.9 out of 5 · Based on 2,400+ reviews</span>
          </div>
        </div>
      </section>

      <section className="testimonials-stats-bar">
        <div className="container">
          <div className="tstats-grid">
            {stats.map((s, i) => (
              <div key={i} className="tstat-item">
                <span className="tstat-value">{s.value}</span>
                <span className="tstat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-header-icon"><Building2 size={20} /></div>
            <span className="tag">From Our Employer Partners</span>
            <h2>What International Employers Say</h2>
            <p>Companies that have partnered with us for years share their experience.</p>
          </div>
          <div className="testimonials-masonry">
            {employerTestimonials.map((t, i) => (
              <div key={i} className="testimonial-card employer-card">
                <div className="t-card-top">
                  <div className="t-company-info">
                    <span className="t-flag">{t.flag}</span>
                    <div>
                      <strong className="t-company">{t.company}</strong>
                      <span className="t-country">{t.country}</span>
                    </div>
                  </div>
                  <div className="t-stars">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} fill="#e8a020" color="#e8a020" />
                    ))}
                  </div>
                </div>
                <Quote size={24} className="quote-icon" />
                <p className="t-text">{t.text}</p>
                <div className="t-footer">
                  <div className="t-author">
                    <div className="t-avatar employer-avatar">{t.name.charAt(0)}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                  <span className="t-year">{t.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worker Testimonials */}
      <section className="section worker-testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-header-icon worker-icon"><Users size={20} /></div>
            <span className="tag">From Our Workers</span>
            <h2>Lives Changed Abroad</h2>
            <p>Sri Lankan workers placed by us share their stories.</p>
          </div>
          <div className="testimonials-masonry worker-masonry">
            {workerTestimonials.map((t, i) => (
              <div key={i} className="testimonial-card worker-card">
                <div className="t-stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={13} fill="#e8a020" color="#e8a020" />
                  ))}
                </div>
                <p className="t-text">"{t.text}"</p>
                <div className="t-footer">
                  <div className="t-author">
                    <div className="t-avatar">{t.name.charAt(0)}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                  <div className="t-destination">
                    <span>{t.flag}</span>
                    <span>{t.country} · {t.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
