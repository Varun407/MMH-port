import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Target, Eye, TrendingUp } from 'lucide-react';

const Hero = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!navRef.current) return;
      const rect = navRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      navRef.current.style.setProperty('--mouse-x', `${x}px`);
      navRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="bg-glows-container">
        <div className="glow orb-1"></div>
        <div className="glow orb-2"></div>
        <div className="glow orb-3"></div>
      </div>

      <div className="vignette"></div>

      <section className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', paddingTop: '2rem' }}>
        <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <header style={{ position: 'absolute', top: '2rem', left: 0, right: 0, padding: '0 1rem', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', zIndex: 50, width: '100%' }}>
            {/* Logo Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', paddingLeft: '1rem' }}>
              <img src="logo.png" alt="(Logo)" style={{ height: '80px', objectFit: 'contain' }} />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontWeight: 900, fontSize: '2.2rem', fontFamily: 'SF Pro Display, sans-serif', letterSpacing: '-0.04em', lineHeight: 1, color: '#ffffff', textShadow: '0 0 12px rgba(255,255,255,0.4)' }}>MMH</span>
                <span style={{ fontWeight: 600, fontSize: '1rem', fontFamily: 'SF Pro Display, sans-serif', letterSpacing: '0.4em', textTransform: 'uppercase', lineHeight: 1, marginTop: '5px', background: 'linear-gradient(to right, #60a5fa, #2c2b9e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GALAXY</span>
              </div>
            </div>

            {/* Centered Navigation Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <nav
                ref={navRef}
                className="nav-box"
              >
                <div className="nav-box-inner" style={{ alignItems: 'center' }}>
                  <img src="profile.png" alt="Profile" style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', marginRight: '1.5rem', marginLeft: '-0.75rem', border: 'none' }} />
                  <a href="#home" className="nav-link">Home</a>
                  <a href="#work" className="nav-link">Work</a>
                  <a href="#services" className="nav-link">Services</a>
                  <a href="#testimonials" className="nav-link">Testimonial</a>
                  <a href="#faqs" className="nav-link">FAQs</a>
                </div>
              </nav>
            </div>

            {/* Empty right column to keep navigation perfectly centered using CSS Grid */}
            <div></div>
          </header>

          <div className="flex-col justify-center items-center text-center" style={{ flex: 1, display: 'flex', marginTop: '10rem' }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center gap-4"
                style={{ padding: '0.5rem 2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)', display: 'inline-flex', width: 'fit-content', margin: '0 auto 0.5rem auto' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ animation: 'blinkGlow 4s infinite 0s', animationFillMode: 'both', display: 'flex', alignItems: 'center' }}>
                    <Target size={20} color="#f8fafc" />
                  </div>
                  <span style={{ fontWeight: 600, color: '#f8fafc' }}>Attention</span>
                </div>
                <span className="text-muted text-gradient-primary">→</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ animation: 'blinkGlow 4s infinite 1s', animationFillMode: 'both', display: 'flex', alignItems: 'center' }}>
                    <Eye size={20} color="#f8fafc" />
                  </div>
                  <span style={{ fontWeight: 600, color: '#f8fafc' }}>Views</span>
                </div>
                <span className="text-muted text-gradient-primary">→</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ animation: 'blinkGlow 4s infinite 2s', animationFillMode: 'both', display: 'flex', alignItems: 'center' }}>
                    <TrendingUp size={20} color="#60a5fa" />
                  </div>
                  <span style={{ fontWeight: 600, color: '#60a5fa' }}>Revenue</span>
                </div>
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 10, mass: 1 } }
                }}
                style={{ fontSize: '5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#ffffff' }}
              >
                Turn your <span style={{ color: '#60a5fa' }}>content</span> into real<br />wealth.
              </motion.h1>
              <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(96, 165, 250, 0.2)', color: '#60a5fa', flexShrink: 0 }}>
                  <Play size={20} fill="currentColor" />
                </div>
                <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '750px', margin: 0, color: '#94a3b8' }}>
                  I help creators and brands turn content into scalable growth, revenue, and long-term digital asset through clean, sleek editing that keeps viewers engaged and drives real results.
                </p>
              </motion.div>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
            >
              <a href="#work" className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>View my work</a>
              <a href="#contact" className="btn-secondary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>Let's work together</a>
            </motion.div>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-item">Long Form</span>
            <span className="marquee-item">Short Form</span>
            <span className="marquee-item">Reels</span>
            <span className="marquee-item">X (Twitter)</span>
            <span className="marquee-item">LinkedIn</span>
            <span className="marquee-item">Meta Ads</span>
            <span className="marquee-item">Thumbnails</span>
            {/* Duplicate to make loop seamless */}
            <span className="marquee-item">Long Form</span>
            <span className="marquee-item">Short Form</span>
            <span className="marquee-item">Reels</span>
            <span className="marquee-item">X (Twitter)</span>
            <span className="marquee-item">LinkedIn</span>
            <span className="marquee-item">Meta Ads</span>
            <span className="marquee-item">Thumbnails</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
