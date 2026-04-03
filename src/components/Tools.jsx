import React from 'react';
import { motion } from 'framer-motion';

const Tools = () => {
  const tools = ['DaVinci Resolve', 'Premiere Pro', 'After Effects', 'Photoshop', 'Canva', 'Gen AI Tools'];
  const extras = [
    { title: 'Thumbnail Design', desc: 'High CTR visuals that demand clicks.' },
    { title: 'Graphic Design', desc: 'Cohesive brand assets and vector art.' },
    { title: 'Website Design', desc: 'Conversion-driven landing pages.' }
  ];

  return (
    <section className="section" id="expertise">
      <div className="container">
        <h2 className="section-title">Tools & Expertise</h2>
        <p className="section-subtitle">Industry-standard mastery for premium output.</p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
          style={{ maxWidth: '800px', margin: '0 auto 6rem auto' }}
        >
          {tools.map((tool, i) => (
            <span key={i} style={{ padding: '0.75rem 1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0', fontWeight: 500 }}>
              {tool}
            </span>
          ))}
        </motion.div>

        <h3 className="text-center mb-8" style={{ fontSize: '2rem' }}>Beyond Editing</h3>
        <p className="text-center text-muted mb-8" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: '#94a3b8' }}>Supporting full-scale brand growth with integrated creative services.</p>
        
        <div className="grid grid-cols-3 gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {extras.map((ex, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card text-center"
            >
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{ex.title}</h4>
              <p className="text-muted" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{ex.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
