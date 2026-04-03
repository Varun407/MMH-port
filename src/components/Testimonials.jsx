import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { name: "Creator A", role: "1M+ Subs YouTuber", text: "The retention on my videos skyrocketed after handing over the editing. Absolutely incredible pacing and visual hooks." },
    { name: "Brand B", role: "SaaS Company", text: "Turned our dry product walkthroughs into engaging, high-converting assets. Worth every penny." },
    { name: "Creator C", role: "Shortform Creator", text: "Gained 50k followers in 2 months. The motion graphics instantly hooked my audience." }
  ];

  return (
    <section className="section" id="testimonials" style={{ background: '#0a1020', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <h2 className="section-title">Social Proof</h2>
        <p className="section-subtitle">Real results from top creators and brands.</p>

        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              style={{
                background: '#040814', // Very dark shape
                border: '1px solid rgba(96, 165, 250, 0.2)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                position: 'relative',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
              }}
            >
              <MessageCircle size={32} color="#2563eb" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.3 }} />
              <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginBottom: '2rem', fontStyle: 'italic', lineHeight: 1.7 }}>
                "{test.text}"
              </p>
              <div>
                <h4 style={{ fontSize: '1.2rem', margin: 0, color: '#f8fafc' }}>{test.name}</h4>
                <p style={{ fontSize: '0.9rem', color: '#60a5fa', margin: 0, fontWeight: 500 }}>{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
