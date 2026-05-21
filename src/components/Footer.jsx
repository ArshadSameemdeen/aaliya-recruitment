import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import './Footer.css'

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo_copy.png" alt="Aaliya Travels & Tours" className="footer-logo-img" loading="lazy" />
            </div>
            <p>Human Resources Solution Providers & Recruitment Specialists. Over 28 years in the foreign employment industry — serving employers across 12 countries with 400,000+ workers recruited.</p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/aaliyatravelstours" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon size={18} /></a>
              <a href="https://www.facebook.com/AaliyaTravelsAndTours" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon size={18} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Countries We Recruit For</h4>
            <ul>
              <li><a href="#">Saudi Arabia</a></li>
              <li><a href="#">United Arab Emirates</a></li>
              <li><a href="#">Qatar</a></li>
              <li><a href="#">Kuwait</a></li>
              <li><a href="#">Malaysia & Asia</a></li>
            </ul>
          </div>

          <div className="footer-contact-group">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <MapPin size={16} />
                <span>67, 2/1, Deans Road, Colombo 10, Sri Lanka</span>
              </li>
              <li>
                <Phone size={16} />
                <a href="tel:+94773041888">+94 773 041 888</a>
              </li>
              <li>
                <Phone size={16} />
                <a href="tel:+94756041888">+94 756 041 888</a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:aaliyatravels3101@gmail.com">aaliyatravels3101@gmail.com</a>
              </li>
            </ul>
            <div className="footer-license">
              <span>SLBFE Licensed</span>
              <span>License No: 3101</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aaliya Travels & Tours. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
