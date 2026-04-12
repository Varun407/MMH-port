import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Target, Eye, TrendingUp, Smartphone, AtSign, Briefcase, Image as ImageIcon, MonitorPlay, Film } from 'lucide-react';

const Hero = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [isWorkBtnHovered, setIsWorkBtnHovered] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!navRef.current) return;
      const rect = navRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      navRef.current.style.setProperty('--mouse-x', `${x}px`);
      navRef.current.style.setProperty('--mouse-y', `${y}px`);

      if (btnRef.current) {
        const btnRect = btnRef.current.getBoundingClientRect();
        const btnX = e.clientX - btnRect.left;
        const btnY = e.clientY - btnRect.top;
        btnRef.current.style.setProperty('--mouse-x', `${btnX}px`);
        btnRef.current.style.setProperty('--mouse-y', `${btnY}px`);
      }
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

      <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', paddingTop: '2rem' }}>
        <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <header style={{ position: 'absolute', top: '2rem', left: 0, right: 0, padding: '0 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 50, width: '100%' }}>
            {/* Logo Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <img src="logo.png" alt="(Logo)" style={{ height: '80px', objectFit: 'contain' }} />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontWeight: 900, fontSize: '2.2rem', fontFamily: 'SF Pro Display, sans-serif', letterSpacing: '-0.04em', lineHeight: 1, color: '#ffffff', textShadow: '0 0 12px rgba(255,255,255,0.4)' }}>MMH</span>
                <span style={{ fontWeight: 600, fontSize: '1rem', fontFamily: 'SF Pro Display, sans-serif', letterSpacing: '0.4em', textTransform: 'uppercase', lineHeight: 1, marginTop: '5px', color: '#4444f4' }}>GALAXY</span>
              </div>
            </div>
          </header>

          {/* Centered Navigation Tabs Fixed at Top */}
          <div style={{ position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, display: 'flex', justifyContent: 'center' }}>
            <nav
              ref={navRef}
              className="nav-box"
              style={{
                background: 'rgba(5, 5, 5, 0.7)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(68, 68, 244, 0.2)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                borderTop: '1px solid rgba(68, 68, 244, 0.2)'
              }}
            >
              <div className="nav-box-inner" style={{ alignItems: 'center' }}>
                <img src="profile.png" alt="Profile" style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', marginRight: '1.5rem', marginLeft: '-0.75rem', border: 'none' }} />
                <a href="#home" className="nav-link">Home</a>
                <a href="#work" className="nav-link">Work</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#testimonials" className="nav-link">Testimonial</a>
                <a href="#faq" className="nav-link">FAQs</a>
              </div>
            </nav>
          </div>

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
                style={{ padding: '0.5rem 2rem', background: '#000000', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)', display: 'inline-flex', width: 'fit-content', margin: '0 auto 0.5rem auto' }}
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
                    <TrendingUp size={20} color="#4444f4" />
                  </div>
                  <span style={{ fontWeight: 600, color: '#4444f4' }}>Revenue</span>
                </div>
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 10, mass: 1 } }
                }}
                style={{ fontSize: '5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#ffffff' }}
              >
                Turn your <span style={{ color: '#4444f4' }}>content</span> into real<br />wealth.
              </motion.h1>
              <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(68, 68, 244, 0.2)', color: '#4444f4', flexShrink: 0 }}>
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
              style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1rem' }}
            >
              <a
                href="#work"
                onMouseEnter={() => setIsBtnHovered(true)}
                onMouseLeave={() => setIsBtnHovered(false)}
                style={{
                  padding: '1.2rem 3rem',
                  fontSize: '1.2rem',
                  position: 'relative',
                  background: '#000000',
                  color: '#ffffff',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1,
                  boxShadow: isBtnHovered ? '0 0 25px rgba(68, 68, 244, 0.6)' : 'none',
                  transform: isBtnHovered ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ position: 'relative', zIndex: 1, textShadow: isBtnHovered ? '0 0 10px rgba(255,255,255,0.5)' : 'none', transition: 'text-shadow 0.3s' }}>View my work</span>
                {/* Protective base cap */}
                <div style={{ position: 'absolute', inset: '2px', background: '#000000', borderRadius: '100px', zIndex: 0 }}></div>
                {/* Infinitely rotating glowing rim */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: isBtnHovered ? 1.5 : 4, ease: "linear" }}
                  style={{
                    position: 'absolute',
                    width: '150%',
                    height: '500%',
                    background: isBtnHovered
                      ? 'conic-gradient(from 0deg, rgba(68, 68, 244, 0) 20%, #4444f4 50%, #9333ea 60%, rgba(68, 68, 244, 0) 80%)'
                      : 'conic-gradient(from 0deg, rgba(68, 68, 244, 0) 60%, #4444f4 90%, rgba(68, 68, 244, 0) 100%)',
                    zIndex: -1,
                    top: '-200%',
                    left: '-25%'
                  }}
                />
              </a>
              <div
                style={{ position: 'relative', display: 'inline-block' }}
                onMouseEnter={() => setIsWorkBtnHovered(true)}
                onMouseLeave={() => setIsWorkBtnHovered(false)}
              >
                {/* Minimalist purple-to-white neon glow outline */}
                {isWorkBtnHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      position: 'absolute',
                      inset: '-2px',
                      borderRadius: '100px',
                      background: 'linear-gradient(90deg, #c084fc, #ffffff, #c084fc)',
                      zIndex: 0,
                      filter: 'blur(10px)',
                      boxShadow: '0 0 20px rgba(68, 68, 244, 0.4), 0 0 40px rgba(255, 255, 255, 0.2)',
                    }}
                  >

                    <motion.div
                      animate={{
                        opacity: [0.7, 1, 0.7],
                        scale: [1, 1.02, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      style={{ width: '100%', height: '100%', borderRadius: 'inherit', background: 'inherit' }}
                    />
                  </motion.div>
                )}

                <a
                  href="#contact"
                  className="btn-secondary"
                  style={{
                    padding: '1.2rem 3.5rem',
                    fontSize: '1.25rem',
                    background: '#000000',
                    position: 'relative',
                    zIndex: 1,
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  Let's Work Together
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-item"><Play size={18} /> Long Form</span>
            <span className="marquee-item"><Eye size={18} /> Short Form</span>
            <span className="marquee-item"><Smartphone size={18} /> Reels</span>
            <span className="marquee-item"><AtSign size={18} /> X (Twitter)</span>
            <span className="marquee-item"><Briefcase size={18} /> LinkedIn</span>
            <span className="marquee-item"><Target size={18} /> Meta Ads</span>
            <span className="marquee-item"><ImageIcon size={18} /> Thumbnails</span>
            {/* Duplicate to make loop seamless */}
            <span className="marquee-item"><Play size={18} /> Long Form</span>
            <span className="marquee-item"><Eye size={18} /> Short Form</span>
            <span className="marquee-item"><Smartphone size={18} /> Reels</span>
            <span className="marquee-item"><AtSign size={18} /> X (Twitter)</span>
            <span className="marquee-item"><Briefcase size={18} /> LinkedIn</span>
            <span className="marquee-item"><Target size={18} /> Meta Ads</span>
            <span className="marquee-item"><ImageIcon size={18} /> Thumbnails</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
