import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, ExternalLink, ArrowRight } from 'lucide-react';

// Custom SVG Icons to avoid Lucide-react version compatibility issues
const InstagramIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TwitterIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const CTA = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@MMHgalaxy',
      icon: <InstagramIcon size={28} />,
      color: '#E4405F',
      link: '#',
      desc: 'Follow for BTS and daily motion tips.'
    },
    {
      name: 'Twitter (X)',
      handle: '@Mohammad__m_m_h',
      icon: <TwitterIcon size={28} />,
      color: '#1DA1F2',
      link: 'https://x.com/Mohammad__m_m_h',
      desc: 'Get the latest industry news and thoughts.'
    },
    {
      name: 'LinkedIn',
      handle: 'mohammadmmh',
      icon: <LinkedinIcon size={28} />,
      color: '#0A66C2',
      link: 'https://www.linkedin.com/in/mohammadmmh',
      desc: 'Connect for professional networking.'
    },
    {
      name: 'Email',
      handle: 'hello@mmhgalaxy.com',
      icon: <Mail size={28} />,
      color: '#4444f4',
      link: 'mailto:hello@mmhgalaxy.com',
      desc: 'For direct project inquiries and business.'
    }
  ];

  return (
    <section className="section" id="contact" style={{ paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glows */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(68, 68, 244, 0.05) 0%, transparent 70%)', zIndex: -1 }}></div>

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ fontSize: '3.5rem', lineHeight: 1.1, fontWeight: 900 }}>
            STOP THE SCROLL.<br />
            <span className="italic text-primary" style={{ fontSize: '3rem' }}>START THE CONVERSION.</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.25rem', marginTop: '1.5rem', color: '#cbd5e1' }}>
            Ready to transform your brand? Let's build your high-performance content engine today.
          </p>
        </div>

        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {/* Scheduling Card - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              gridColumn: 'auto / span 2',
              background: 'linear-gradient(145deg, rgba(20, 20, 40, 0.8), rgba(68, 68, 244, 0.1))',
              borderRadius: '2rem',
              padding: '3rem',
              border: '1px solid rgba(68, 68, 244, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
            className="md:col-span-2"
          >
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(68, 68, 244, 0.15) 0%, transparent 70%)' }}></div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(68, 68, 244, 0.1)', padding: '1rem', borderRadius: '1rem', color: '#4444f4' }}>
                <Calendar size={32} />
              </div>
              <h3 style={{ fontSize: '2rem', margin: 0, fontWeight: 700, color: '#f8fafc' }}>Schedule via Calendly</h3>
            </div>

            <p style={{ fontSize: '1.2rem', color: '#94a3b8', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '600px' }}>
              Book a direct strategy consultation to discuss how we can scale your views and revenue through world-class motion systems.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', background: '#4444f4', display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                <span>Open Calendly</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Social Grid items */}
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2.5rem 2rem',
                  height: '100%',
                  background: 'rgba(10, 10, 15, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '1.5rem',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${social.color}44`;
                  e.currentTarget.style.background = `linear-gradient(145deg, rgba(10, 10, 15, 0.8), ${social.color}05)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.background = 'rgba(10, 10, 15, 0.6)';
                }}
              >
                <div style={{ color: social.color, marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  {social.icon}
                  <ExternalLink size={18} style={{ opacity: 0.4 }} />
                </div>

                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.25rem', color: '#f8fafc', fontWeight: 700 }}>{social.name}</h4>
                <p style={{ fontSize: '0.9rem', color: social.color, opacity: 0.8, marginBottom: '1rem', fontWeight: 600 }}>{social.handle}</p>
                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{social.desc}</p>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop: '8rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.02em', color: '#ffffff' }}>MMH</span>
              <span style={{ fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.3em', color: '#4444f4' }}>GALAXY</span>
            </div>

            <div className="flex gap-8 text-muted" style={{ fontSize: '0.95rem' }}>
              <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms of Service</a>
              <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</a>
            </div>

            <p style={{ fontSize: '0.9rem', color: '#475569' }}>
              &copy; {new Date().getFullYear()} MMHgalaxy. High-performance video systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
