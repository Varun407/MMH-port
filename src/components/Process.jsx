import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { num: '01', title: 'Structuring the Idea', desc: 'After receiving your raw footage, I start by understanding your brand identity, goals, and requirements. We align on your vision and refine the core idea shaping it into a clear, impactful concept ready for execution.' },
    { num: '02', title: 'Storyboarding', desc: 'Once all footage, references, and supporting materials are gathered, I map out the entire video flow. From Using simple handwritten notes to a visual notes (tools like Milanote), I structure the story, information,b rolls,pacing, and motion direction along with suitable background music and sound elements.' },
    { num: '03', title: 'Creation & Editing', desc: 'With a solid storyboard in place (which completes nearly 50% of the work), I begin the editing process: Rough cut and structure, Color grading, Hooks and b-roll integration, Motion graphics and visual elements, Sound design and background music. Every element is carefully placed to bring the video to life and enhance viewer engagement.' },
    { num: '04', title: 'Finalizing the Video', desc: 'Once the edit is complete, I refine every detail story flow, pacing, and smoothness until the video meets a high-performance standard. The result is a polished, impactful video ready for delivery.' },
    { num: '05', title: 'Revision & Delivery', desc: 'After delivery, i go through a collaborative revision process to fine-tune the final output. Your feedback is incorporated until you\'re fully satisfied ensuring the final version aligns perfectly with your vision and goals.' },
  ];

  return (
    <section className="section" id="process">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ fontSize: '3.2rem', fontWeight: '800', marginBottom: '0.5rem', background: 'linear-gradient(135deg, #f8fafc 0%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>How it Works</h2>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '2rem', textAlign: 'left', marginLeft: '50px' }}>Process flow:</p>
          {/* Animated Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ position: 'absolute', left: '24px', top: '0', width: '2px', background: 'linear-gradient(to bottom, #60a5fa, transparent)' }}
          ></motion.div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 60, delay: index * 0.1 }}
              style={{ display: 'flex', gap: '2rem', marginBottom: index === steps.length - 1 ? '0' : '4rem', position: 'relative' }}
            >
              <motion.div 
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(96, 165, 250, 0.1)' }}
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  background: '#050505', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontWeight: 700,
                  color: '#60a5fa',
                  zIndex: 2,
                  flexShrink: 0,
                  boxShadow: '0 0 20px rgba(0,0,0,0.5)'
                }}
              >
                {step.num}
              </motion.div>
              <motion.div 
                whileHover={{ y: -5, boxShadow: '0 15px 35px -10px rgba(96, 165, 250, 0.3)' }}
                style={{
                  flex: 1,
                  position: 'relative',
                  padding: '1px',
                  background: 'linear-gradient(180deg, rgba(96, 165, 250, 0.5) 0%, transparent 100%)',
                  borderRadius: '1.1rem',
                }}
              >
                <div style={{
                  padding: '2.5rem',
                  background: 'linear-gradient(145deg, rgba(2, 6, 23, 0.9) 0%, #050505 100%)',
                  borderRadius: '1.05rem',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Glowing neon edge accents */}
                  <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '150px', height: '2px', background: 'radial-gradient(ellipse at center, rgba(96,165,250,0.8) 0%, transparent 70%)', zIndex: 0 }}></div>
                  <div style={{ position: 'absolute', top: '-50px', left: 0, width: '100%', height: '100px', background: 'radial-gradient(ellipse at top center, rgba(37,99,235,0.15) 0%, transparent 70%)', zIndex: 0 }}></div>

                  <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#f8fafc', fontWeight: 600, position: 'relative', zIndex: 1 }}>{step.title}</h3>
                  <p className="text-muted" style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.05rem', margin: 0, position: 'relative', zIndex: 1 }}>{step.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
