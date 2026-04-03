import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', paddingTop: '2rem' }}>
      <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header className="flex justify-between items-center mb-12">
          <div style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'Outfit' }}>
             MMH<span className="text-gradient">galaxy</span>
          </div>
          <nav>
             <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Work With Me</a>
          </nav>
        </header>

        <div className="flex-col justify-center items-center text-center" style={{ flex: 1, display: 'flex', marginTop: '4rem' }}>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 150, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 10, mass: 1 } }
              }}
              style={{ fontSize: '5rem', marginBottom: '1.5rem', letterSpacing: '-0.02em', background: 'linear-gradient(to bottom right, #ffffff, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Turn your content<br />into real wealth.
            </motion.h1>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-muted mb-8" style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 3rem auto', color: '#94a3b8' }}
            >
              Helping creators and brands scale content into growth, revenue, and digital assets.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-12"
            style={{ padding: '1rem 2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <span style={{ fontWeight: 600, color: '#f8fafc' }}>Attention</span>
            <span className="text-muted text-gradient-primary">→</span>
            <span style={{ fontWeight: 600, color: '#f8fafc' }}>Views</span>
            <span className="text-muted text-gradient-primary">→</span>
            <span style={{ fontWeight: 600, color: '#60a5fa' }}>Revenue</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#contact" className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>Get Started Today</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
