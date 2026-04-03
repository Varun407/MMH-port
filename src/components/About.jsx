import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Volume2, Scissors, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Palette className="mb-4" size={28} color="#60a5fa" />, title: 'Color Grading', text: 'Film-level aesthetic treatment.' },
    { icon: <Volume2 className="mb-4" size={28} color="#60a5fa" />, title: 'Sound Design', text: 'Immersive audio landscapes.' },
    { icon: <Scissors className="mb-4" size={28} color="#60a5fa" />, title: 'Smooth Cuts', text: 'Seamless narrative flow.' },
    { icon: <Zap className="mb-4" size={28} color="#60a5fa" />, title: 'Complex Motion', text: 'High-end kinetic typography & 3D.' },
  ];

  return (
    <section className="section" id="about">
      <div className="container flex flex-col items-center">
        <h2 className="section-title">Motion that moves people.</h2>
        <p className="section-subtitle">Not just an editor. A strategic partner in your brand's visual identity.</p>

        <div className="card" style={{ maxWidth: '800px', width: '100%', marginBottom: '4rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px' }}>
             <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Me</h3>
             <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
               I specialize in transforming raw footage into high-retention, high-converting digital assets. Whether it's a 30-second TikTok ad or a 20-minute YouTube documentary, my goal is to maximize audience engagement and drive real revenue.
             </p>
             <a href="#contact" className="btn-secondary" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>Let's talk vision</a>
          </div>
          <div style={{ flex: '1 1 300px', background: 'rgba(0,0,0,0.3)', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
             <h4 style={{ marginBottom: '1.5rem', color: '#f8fafc', fontSize: '1.2rem' }}>Core Capabilities</h4>
             <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ background: 'rgba(96, 165, 250, 0.1)', padding: '0.8rem', borderRadius: '12px' }}>{skill.icon}</div>
                      <div>
                        <h5 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{skill.title}</h5>
                        <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{skill.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
