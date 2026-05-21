// EmailJS Configuration
// 1. Sign up free at https://www.emailjs.com/
// 2. Create an Email Service (connect your Gmail: aaliyatravels3101@gmail.com)
// 3. Create two Email Templates (see template content below)
// 4. Replace the values below with your actual IDs from EmailJS dashboard

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_REPLACE_ME',      // e.g. 'service_abc123'
  EMPLOYER_TEMPLATE_ID: 'template_employer', // e.g. 'template_abc123'
  WORKER_TEMPLATE_ID: 'template_worker',     // e.g. 'template_xyz456'
  PUBLIC_KEY: 'PUBLIC_KEY_REPLACE_ME',   // e.g. 'abcDEF123...' (Account > API Keys)
}

// --- EMPLOYER TEMPLATE (copy-paste into EmailJS template editor) ---
// Subject: New Employer Hiring Request — {{company}} ({{country}})
//
// New hiring request from your website:
//
// Company: {{company}}
// Contact: {{name}}
// Email: {{email}}
// Phone: {{phone}}
// Country: {{country}}
// Sector: {{sector}}
// Volume: {{volume}}
//
// Requirements:
// {{requirements}}
//
// --
// Sent via Aaliya Travels website contact form

// --- WORKER TEMPLATE (copy-paste into EmailJS template editor) ---
// Subject: New Job Seeker Application — {{name}} ({{sector}})
//
// New job seeker application from your website:
//
// Name: {{name}}
// Phone: {{phone}}
// Email: {{email}}
// Sector: {{sector}}
// Preferred Country: {{country}}
//
// Experience & Skills:
// {{message}}
//
// --
// Sent via Aaliya Travels website contact form
