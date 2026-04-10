import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Briefcase, LayoutTemplate } from 'lucide-react';

const MoreServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const specificServices = [
    { 
      pretitle: '1. THUMBNAIL DESIGN',
      icon: <ImageIcon size={24} color="#facc15" strokeWidth={1.5} />, 
      title: 'Thumbnail Design', 
      outcome: 'Scroll-stopping thumbnails designed to increase clicks and maximize video performance.',
      glowColor: 'rgba(250, 204, 21, 0.2)',
      bgAccent: 'linear-gradient(135deg, rgba(250, 204, 21, 0.1) 0%, transparent 100%)'
    },
    { 
      pretitle: '2. GRAPHIC DESIGN',
      icon: <Briefcase size={24} color="#06b6d4" strokeWidth={1.5} />, 
      title: 'Graphic Design', 
      outcome: 'Clean, strategic visuals that strengthen your brand identity and improve content clarity.',
      glowColor: 'rgba(6, 182, 212, 0.2)',
      bgAccent: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, transparent 100%)'
    },
    { 
      pretitle: '3. WEBSITE DESIGN',
      icon: <LayoutTemplate size={24} color="#f43f5e" strokeWidth={1.5} />, 
      title: 'Website Design', 
      outcome: 'Modern, conversion-focused websites built to present your brand and turn visitors into clients.',
      glowColor: 'rgba(244, 63, 94, 0.2)',
      bgAccent: 'linear-gradient(135deg, rgba(244, 63, 94, 0.1) 0%, transparent 100%)'
    }
  ];

  return (
    <section className="section" id="more-services">
      <div className="container">
        <div style={{ textAlign: 'center', margin: '4rem auto 4rem auto' }}>
          <h2 style={{ fontSize: '3.2rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em', background: 'linear-gradient(135deg, #f8fafc 0%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>More Services We Provide</h2>
          <p className="text-muted" style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '600px', margin: '0.5rem auto 0 auto', lineHeight: 1.6, textShadow: '0 0 15px rgba(14,165,233,0.2)' }}>
            Supporting your content and brand with design that drives attention and results.
          </p>
        </div>

        <motion.div 
          className="grid gap-6" 
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', justifyContent: 'center' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {specificServices.map((service, index) => (
            <motion.div 
              key={index} 
              className="card text-left flex-col items-start flex" 
              variants={itemVariants} 
              whileHover={{ 
                y: -5, 
                boxShadow: `0 15px 35px -10px ${service.glowColor.replace('0.2)', '0.6)')}`,
                borderColor: service.glowColor.replace('0.2)', '0.5)')
              }}
              style={{ 
                padding: '2rem 1.5rem', 
                background: '#050505',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '1rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: service.bgAccent, zIndex: 0, pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: '2px', background: `radial-gradient(ellipse at center, ${service.glowColor.replace('0.2)', '0.8)')} 0%, transparent 70%)`, zIndex: 0 }}></div>

              <div style={{ zIndex: 1, width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', background: service.glowColor.replace('0.2)', '0.05)') }}>
                {service.icon}
              </div>
              
              <p style={{ zIndex: 1, color: service.glowColor.replace('0.2)', '1)'), fontSize: '1rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.75rem', margin: 0 }}>{service.pretitle}</p>
              <p className="text-muted" style={{ zIndex: 1, fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6', margin: 0, marginTop: '0.5rem' }}>{service.outcome}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MoreServices;
