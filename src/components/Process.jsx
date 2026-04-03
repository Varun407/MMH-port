import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { num: '01', title: 'Structuring the Idea', desc: 'Developing the core concept, hook, and narrative arc for maximum impact.' },
    { num: '02', title: 'Storyboarding', desc: 'Planning visual transitions, shot lists, and asset preparation before editing.' },
    { num: '03', title: 'Editing & Creation', desc: 'Applying advanced motion graphics, pacing, and sound design to build the video.' },
    { num: '04', title: 'Finalizing', desc: 'Color grading, audio mixing, and fine-tuning for a polished, premium feel.' },
    { num: '05', title: 'Revision & Delivery', desc: 'Client review buffer and providing the final high-resolution assets optimized per platform.' },
  ];

  return (
    <section className="section" id="process" style={{ background: 'rgba(10, 25, 48, 0.5)' }}>
      <div className="container">
        <h2 className="section-title">The Workflow</h2>
        <p className="section-subtitle">A transparent, professional process from concept to conversion.</p>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px', background: 'rgba(255,255,255,0.1)' }}></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ display: 'flex', gap: '2rem', marginBottom: index === steps.length - 1 ? '0' : '4rem', position: 'relative' }}
            >
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                background: '#0a1930', 
                border: '2px solid #2563eb', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontWeight: 700,
                color: '#60a5fa',
                zIndex: 2,
                flexShrink: 0
              }}>
                {step.num}
              </div>
              <div className="card" style={{ flex: 1, padding: '2rem' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p className="text-muted" style={{ color: '#94a3b8' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
