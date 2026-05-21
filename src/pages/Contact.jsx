import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building2, Users, Loader } from 'lucide-react'
// Web3Forms access key — get yours free at https://web3forms.com (enter aaliyatravels3101@gmail.com)
const WEB3FORMS_KEY = '95655310-8ae6-4465-bfd9-d608210e6452'

import './Contact.css'

const contactInfo = [
  { icon: <MapPin size={20} />, title: 'Office', lines: ['67, 2/1, Deans Road', 'Colombo 10, Sri Lanka'] },
  { icon: <Phone size={20} />, title: 'Phone', lines: ['+94 773 041 888', '+94 766 923 573', 'Tel: +94 112 662 933'] },
  { icon: <Mail size={20} />, title: 'Email', lines: ['aaliyatravels3101@gmail.com', 'manalarafath@gmail.com'] },
  { icon: <Clock size={20} />, title: 'Hours', lines: ['Mon–Fri: 8:30am – 5:30pm', 'Sat: 9:00am – 1:00pm'] },
]

const sectors = ['Healthcare / Nursing', 'Construction / Engineering', 'Hospitality / Tourism', 'Domestic Staff', 'IT / Technology', 'Manufacturing', 'Agriculture', 'Other']
const countries = ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Malaysia', 'Japan', 'South Korea', 'Singapore', 'UK', 'Germany', 'Australia', 'Canada', 'Other']
const volumes = ['1–5 workers', '6–20 workers', '21–50 workers', '51–100 workers', '100+ workers']

export default function Contact() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const defaultType = params.get('type') === 'worker' ? 'worker' : 'employer'

  const [type, setType] = useState(defaultType)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(null)

  const [employerForm, setEmployerForm] = useState({ company: '', name: '', email: '', phone: '', country: '', sector: '', volume: '', requirements: '' })
  const [workerForm, setWorkerForm] = useState({ name: '', phone: '', email: '', sector: '', country: '', message: '' })

  useEffect(() => {
    const p = new URLSearchParams(location.search)
    setType(p.get('type') === 'worker' ? 'worker' : 'employer')
    setSubmitted(false)
    setSendError(null)
  }, [location.search])

  const handleEmployerChange = (e) => setEmployerForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleWorkerChange = (e) => setWorkerForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setSendError(null)
    const isEmployer = type === 'employer'
    const formData = isEmployer ? employerForm : workerForm
    const subject = isEmployer
      ? `New Employer Enquiry — ${formData.company} (${formData.country})`
      : `New Job Seeker Application — ${formData.name} (${formData.sector})`
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: isEmployer ? formData.company : formData.name,
          ...formData,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setSendError('Something went wrong. Please try again or contact us directly by phone.')
      }
    } catch {
      setSendError('Something went wrong. Please try again or contact us directly by phone.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="contact-page">
      <section className="page-hero contact-hero">
        <div className="container">
          <span className="tag accent-tag">Contact Us</span>
          <h1>Let's Work Together</h1>
          <p>Whether you're an employer looking for talent or a worker looking for opportunity — we're here to help.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">

          {/* Left: Info */}
          <div className="contact-info-col">
            <h2>Get In Touch</h2>
            <p>Our team is ready to answer your questions and guide you through the process — no commitment required.</p>

            <div className="contact-info-cards">
              {contactInfo.map((c, i) => (
                <div key={i} className="contact-info-card">
                  <div className="contact-info-icon">{c.icon}</div>
                  <div>
                    <h4>{c.title}</h4>
                    {c.lines.map((l, j) => <p key={j}>{l}</p>)}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-license">
              <CheckCircle size={18} color="var(--primary)" />
              <div>
                <strong>SLBFE Licensed · License No. 3101</strong>
                <span>Regulated by the Sri Lanka Bureau of Foreign Employment. Inquiries replied within 24 hours, fully confidential.</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <CheckCircle size={52} color="var(--primary)" />
                <h3>{type === 'employer' ? 'Enquiry Received!' : 'Application Received!'}</h3>
                <p>
                  {type === 'employer'
                    ? `Thank you, ${employerForm.name}. Our employer relations team will contact you within 24 hours to discuss your hiring requirements.`
                    : `Thank you, ${workerForm.name}. Our team will contact you within 24 hours to discuss job opportunities.`}
                </p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Submit Another</button>
              </div>
            ) : (
              <>
                {/* Toggle */}
                <div className="form-type-toggle">
                  <button
                    className={`toggle-btn ${type === 'employer' ? 'active' : ''}`}
                    onClick={() => { setType('employer'); setSubmitted(false) }}
                  >
                    <Building2 size={18} /> I'm an Employer
                  </button>
                  <button
                    className={`toggle-btn ${type === 'worker' ? 'active' : ''}`}
                    onClick={() => { setType('worker'); setSubmitted(false) }}
                  >
                    <Users size={18} /> I'm a Job Seeker
                  </button>
                </div>

                {type === 'employer' ? (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-header">
                      <h3>Request Sri Lankan Workers</h3>
                      <p>Tell us what you need — free consultation, no commitment.</p>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Company Name *</label>
                        <input name="company" type="text" placeholder="Your company name" value={employerForm.company} onChange={handleEmployerChange} required />
                      </div>
                      <div className="form-group">
                        <label>Your Name *</label>
                        <input name="name" type="text" placeholder="Contact person name" value={employerForm.name} onChange={handleEmployerChange} required />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Business Email *</label>
                        <input name="email" type="email" placeholder="you@company.com" value={employerForm.email} onChange={handleEmployerChange} required />
                      </div>
                      <div className="form-group">
                        <label>Phone / WhatsApp *</label>
                        <input name="phone" type="tel" placeholder="With country code" value={employerForm.phone} onChange={handleEmployerChange} required />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Destination Country *</label>
                        <select name="country" value={employerForm.country} onChange={handleEmployerChange} required>
                          <option value="">Select country</option>
                          {countries.map(c => <option key={c}>{c}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Job Sector *</label>
                        <select name="sector" value={employerForm.sector} onChange={handleEmployerChange} required>
                          <option value="">Select sector</option>
                          {sectors.map(s => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Number of Workers Needed</label>
                      <select name="volume" value={employerForm.volume} onChange={handleEmployerChange}>
                        <option value="">Select volume</option>
                        {volumes.map(v => <option key={v}>{v}</option>)}
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Job Requirements & Details</label>
                      <textarea name="requirements" rows={4} placeholder="Describe the role, required skills, experience level, contract duration, accommodation provided, etc." value={employerForm.requirements} onChange={handleEmployerChange} />
                    </div>

                    {sendError && <p className="form-error">{sendError}</p>}
                    <button type="submit" className="btn btn-accent form-submit" disabled={sending}>
                      {sending ? <><Loader size={17} className="spin" /> Sending…</> : <>Send Hiring Request <Send size={17} /></>}
                    </button>
                    <p className="form-note">We typically respond within 24 hours. Your information is kept strictly confidential.</p>
                  </form>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-header">
                      <h3>Register as a Job Seeker</h3>
                      <p>We'll match you with verified jobs abroad — free service.</p>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input name="name" type="text" placeholder="Your full name" value={workerForm.name} onChange={handleWorkerChange} required />
                      </div>
                      <div className="form-group">
                        <label>Phone / WhatsApp *</label>
                        <input name="phone" type="tel" placeholder="+94 77 xxx xxxx" value={workerForm.phone} onChange={handleWorkerChange} required />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>
                      <input name="email" type="email" placeholder="your@email.com" value={workerForm.email} onChange={handleWorkerChange} />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Job Sector *</label>
                        <select name="sector" value={workerForm.sector} onChange={handleWorkerChange} required>
                          <option value="">Select sector</option>
                          {sectors.map(s => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Preferred Country</label>
                        <select name="country" value={workerForm.country} onChange={handleWorkerChange}>
                          <option value="">Any country</option>
                          {countries.map(c => <option key={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Your Experience & Skills</label>
                      <textarea name="message" rows={4} placeholder="Tell us about your work experience, qualifications, and any relevant skills..." value={workerForm.message} onChange={handleWorkerChange} />
                    </div>

                    {sendError && <p className="form-error">{sendError}</p>}
                    <button type="submit" className="btn btn-primary form-submit" disabled={sending}>
                      {sending ? <><Loader size={17} className="spin" /> Sending…</> : <>Submit Application <Send size={17} /></>}
                    </button>
                    <p className="form-note">Our team will contact you within 24 hours. We never share your information with third parties.</p>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <div className="map-placeholder">
        <div className="map-overlay">
          <MapPin size={30} color="var(--primary)" />
          <p>67, 2/1, Deans Road, Colombo 10, Sri Lanka</p>
          <a href="https://maps.google.com/?q=67+Deans+Road+Colombo+10+Sri+Lanka" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get Directions</a>
        </div>
      </div>
    </div>
  )
}
