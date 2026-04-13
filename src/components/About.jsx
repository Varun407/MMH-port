import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Volume2, Scissors, Zap, Award, Clock, RefreshCw, Send } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Clock size={20} />, title: 'Fast Turnaround', text: 'Quick delivery without compromising quality.' },
    { icon: <RefreshCw size={20} />, title: 'Unlimited Revisions', text: 'Within project scope, satisfaction guaranteed.' },
    { icon: <Award size={20} />, title: 'DaVinci Master', text: 'Mastered workflow within a single powerful tool.' },
  ];

  return (
    <section className="section" id="about" style={{ overflow: 'hidden' }}>
      <div className="container">


        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '40px', height: '2px', background: '#4444f4' }}></div>
                <span style={{ color: '#4444f4', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>About Me</span>
              </div>

              <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#f8fafc', fontWeight: 800, lineHeight: 1.1 }}>
                I’m Mohammad. <br />
                <span className="italic" style={{ color: '#94a3b8', fontSize: '1.8rem' }}>I bring ideas to life.</span>
              </h3>

              <div style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '1.5rem', fontWeight: 500, color: '#f8fafc', fontSize: '1.2rem' }}>
                  I’m a professional video editor helping creators and brands turn raw ideas into high-performance visual assets.
                </p>

                <p style={{ marginBottom: '2rem' }}>
                  I turn your raw footage into clean, engaging, and scroll-stopping videos for any platform, whether it is YouTube, Instagram, Facebook, or TikTok, either long form or shortform. My work isn't just about editing; it's about the <strong>psychology</strong> behind what hooks attention and keeps viewers watching until the very last second.
                </p>

                <div style={{
                  background: 'rgba(68, 68, 244, 0.08)',
                  padding: '2rem',
                  borderRadius: '1.5rem',
                  border: '1px solid rgba(68, 68, 244, 0.2)',
                  marginBottom: '2rem',
                  position: 'relative'
                }}>
                  <div style={{ position: 'absolute', top: '-10px', left: '20px', background: '#0a1020', padding: '0 10px' }}>
                    <Award size={20} color="#4444f4" />
                  </div>
                  <p style={{ margin: 0 }}>
                    Maybe you are surprised that I only edit in DaVinci Resolve. Can I bring you the result you want? <strong>Yes, I can.</strong> I have mastered DaVinci Resolve from cuts to high-level motion graphics, color grading, and sound design and mixing. I am flexible and effective in that software without switching between multiple tools.
                  </p>
                </div>

                <p style={{ marginBottom: '2.5rem' }}>
                  Now, just send me your raw footage with your expectations, and I’ll handle the rest. You will get your video delivered with <strong>fast turnaround</strong>, and I provide <strong>unlimited revisions</strong> (within scope) because your satisfaction matters the most.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1rem' }}>
                <a href="#contact" className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span>Let's Work Together</span>
                  <Send size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Image Frame with premium effects */}
              <div style={{
                position: 'relative',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                aspectRatio: '1 / 1',
                maxWidth: '420px',
                margin: '0 auto',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)',
                marginTop: '-40px'
              }}>
                <img
                  src="aboutme.png"
                  alt="Mohammad"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => { e.target.src = 'profile.png'; }}
                />

                {/* Overlay Gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 16, 32, 0.8) 0%, transparent 40%)'
                }}></div>
              </div>

              {/* Floating Value Cards */}
              <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', right: '-30px', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', zIndex: 2 }}>
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    style={{
                      background: 'rgba(5, 5, 5, 0.8)',
                      backdropFilter: 'blur(12px)',
                      padding: '1rem',
                      borderRadius: '1rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      width: '120px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                    }}
                  >
                    <div style={{ color: '#4444f4', marginBottom: '0.5rem' }}>{h.icon}</div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc' }}>{h.title}</span>
                  </motion.div>
                ))}
              </div>

              {/* Background Glow behind image */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle, rgba(68, 68, 244, 0.1) 0%, transparent 70%)',
                zIndex: -1
              }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
