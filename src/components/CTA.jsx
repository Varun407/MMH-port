import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';

// Custom SVG Icons
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
  useEffect(() => {
    // Load Calendly Script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const socialLinks = [
    { 
      name: 'Instagram', 
      handle: '@MMHgalaxy', 
      icon: <InstagramIcon size={24} />, 
      color: '#E4405F', 
      link: '#',
      desc: 'Behind the scenes'
    },
    { 
      name: 'Twitter (X)', 
      handle: '@Mohammad__m_m_h', 
      icon: <TwitterIcon size={24} />, 
      color: '#1DA1F2', 
      link: 'https://x.com/Mohammad__m_m_h',
      desc: 'Industry news'
    },
    { 
      name: 'LinkedIn', 
      handle: 'mohammadmmh', 
      icon: <LinkedinIcon size={24} />, 
      color: '#0A66C2', 
      link: 'https://www.linkedin.com/in/mohammadmmh',
      desc: 'Networking'
    },
    { 
      name: 'Email', 
      handle: 'hello@mmhgalaxy.com', 
      icon: <Mail size={24} />, 
      color: '#4444f4', 
      link: 'mailto:hello@mmhgalaxy.com',
      desc: 'Direct Inquiries'
    }
  ];

  return (
    <section className="section" id="contact" style={{ paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glows */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(68, 68, 244, 0.05) 0%, transparent 70%)', zIndex: -1 }}></div>

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Choose a time for a strategy call or reach out via socials.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {/* Calendly Inline Widget Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              width: '100%',
              maxWidth: '1000px',
              margin: '0 auto',
              background: 'rgba(10, 10, 20, 0.4)',
              borderRadius: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}
          >
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/mohammadmmh" 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </motion.div>

          {/* Simplified Social Grid */}
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <a 
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '1.25rem',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${social.color}44`;
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                >
                  <div style={{ color: social.color, display: 'flex' }}>
                    {social.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '1rem', margin: 0, color: '#f8fafc', fontWeight: 600 }}>{social.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>{social.handle}</p>
                  </div>
                  <ExternalLink size={16} style={{ opacity: 0.3, color: '#f8fafc' }} />
                </a>
              </motion.div>
            ))}
          </div>
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
