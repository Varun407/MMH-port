import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Presentation, Box, Mic, Smartphone, MonitorPlay, Film, Zap } from 'lucide-react';

const Services = () => {
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
      pretitle: 'VIRAL 2D / MOTION GRAPHICS',
      icon: <Wand2 size={24} color="#007BFF" strokeWidth={1.5} />,
      title: 'Viral Motion Videos',
      outcome: 'Scroll-stopping visuals designed to capture attention fast and drive shares across platforms.',
      glowColor: 'rgba(96, 165, 250, 0.2)',
      bgAccent: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, transparent 100%)'
    },
    {
      pretitle: 'VSL (VIDEO SALES LETTERS)',
      icon: <Presentation size={24} color="#8b5cf6" strokeWidth={1.5} />,
      title: 'VSL (Sales Videos)',
      outcome: 'Structured for conversion—turning viewers into leads and revenue through strategic storytelling.',
      glowColor: 'rgba(139, 92, 246, 0.2)',
      bgAccent: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, transparent 100%)'
    },
    {
      pretitle: '3D MOTION',
      icon: <Box size={24} color="#007BFF" strokeWidth={1.5} />,
      title: '3D Motion Content',
      outcome: 'High-impact visuals that elevate perception and make your content stand out instantly.',
      glowColor: 'rgba(14, 165, 233, 0.2)',
      bgAccent: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, transparent 100%)'
    },
    {
      pretitle: 'PODCAST EDITING',
      icon: <Mic size={24} color="#f43f5e" strokeWidth={1.5} />,
      title: 'Podcast Editing',
      outcome: 'Clean, engaging edits that hold attention and transform long conversations into valuable content.',
      glowColor: 'rgba(244, 63, 94, 0.2)',
      bgAccent: 'linear-gradient(135deg, rgba(244, 63, 94, 0.1) 0%, transparent 100%)'
    },
    {
      pretitle: 'VIRAL REELS / TALKING HEADS',
      icon: <Smartphone size={24} color="#facc15" strokeWidth={1.5} />,
      title: 'Short-Form & Reels',
      outcome: 'Fast-paced edits optimized for retention, designed to stop the scroll and boost reach.',
      glowColor: 'rgba(250, 204, 21, 0.2)',
      bgAccent: 'linear-gradient(135deg, rgba(250, 204, 21, 0.1) 0%, transparent 100%)'
    },
    {
      pretitle: 'SAAS ANIMATION',
      icon: <MonitorPlay size={24} color="#10b981" strokeWidth={1.5} />,
      title: 'SaaS & Explainer Videos',
      outcome: 'Simplifying complex ideas into clear, engaging visuals that improve understanding and conversions.',
      glowColor: 'rgba(16, 185, 129, 0.2)',
      bgAccent: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)'
    },
    {
      pretitle: 'DOCUMENTARY / LONG FORM',
      icon: <Film size={24} color="#f97316" strokeWidth={1.5} />,
      title: 'Long-Form & Documentary',
      outcome: 'Structured storytelling that keeps viewers engaged and builds authority over time.',
      glowColor: 'rgba(249, 115, 22, 0.2)',
      bgAccent: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, transparent 100%)'
    },
    {
      pretitle: 'INTROS',
      icon: <Zap size={24} color="#d946ef" strokeWidth={1.5} />,
      title: 'High-Impact Intros',
      outcome: 'Designed to hook attention instantly and keep viewers watching from the first second.',
      glowColor: 'rgba(217, 70, 239, 0.2)',
      bgAccent: 'linear-gradient(135deg, rgba(217, 70, 239, 0.1) 0%, transparent 100%)'
    }
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ width: '30px', height: '2px', background: 'linear-gradient(to right, transparent, #4444f4)' }}></div>
            <span style={{ color: '#4444f4', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>SERVICES</span>
            <div style={{ width: '30px', height: '2px', background: 'linear-gradient(to left, transparent, #4444f4)' }}></div>
          </div>
          <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            What I <span className="italic text-primary">Offer</span>
          </h2>
          {/* Subtle background glow for the header */}
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: '200px', 
            height: '100px', 
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 70%)',
            zIndex: -1
          }}></div>
        </div>

        <motion.div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
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
                boxShadow: `0 15px 35px -10px ${service.glowColor}`,
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

              <p style={{ zIndex: 1, color: '#4444f4', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem', margin: 0 }}>{service.pretitle}</p>
              <p className="text-muted" style={{ zIndex: 1, fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>{service.outcome}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
