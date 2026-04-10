import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const QAItem = ({ q, a, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      style={{ 
        padding: '1.5rem 2rem',
        background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.7) 0%, rgba(5, 5, 5, 0.9) 100%)',
        border: '1px solid rgba(255,255,255,0.05)',
        boxShadow: isOpen ? '0 15px 35px -10px rgba(96, 165, 250, 0.2)' : '0 10px 20px -10px rgba(0, 0, 0, 0.5)',
        borderRadius: '1.25rem',
        backdropFilter: 'blur(12px)',
        marginBottom: '1rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.05 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div 
        style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          color: isOpen ? '#60a5fa' : '#f8fafc', 
          fontSize: '1.15rem', 
          fontWeight: 600, 
          textAlign: 'left', 
          fontFamily: "'SF Pro Display', sans-serif",
          transition: 'color 0.3s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <HelpCircle size={20} color={isOpen ? '#60a5fa' : '#475569'} style={{ transition: 'color 0.3s ease', flexShrink: 0 }} />
          <span>{q}</span>
        </div>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ flexShrink: 0 }}>
          <ChevronDown size={20} color={isOpen ? "#60a5fa" : "#475569"} />
        </motion.span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-muted" style={{ padding: '1rem 0 0 2.25rem', color: '#94a3b8', lineHeight: 1.6, fontSize: '1rem', margin: 0 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    { q: 'What makes you editing different from others?', a: 'I focus on performance, not just visuals. Every video is edited with intent—optimized for attention, retention, and results, not just aesthetics.' },
    { q: 'Can you help improve my content strategy, not just edit?', a: 'Yes. I don’t just edit—I help structure content for better performance, including pacing, hooks, and overall flow to maximize engagement.' },
    { q: 'Will my content match my brand style?', a: 'Absolutely. I first understand your brand identity and tone, then ensure every video stays visually and stylistically consistent.' },
    { q: 'Can you work with my raw footage or unstructured content?', a: 'Yes. Even if your footage isn’t fully planned, I can structure it into a clear, engaging video with strong flow and storytelling.' },
    { q: 'Do you handle both short-form and long-form content?', a: 'Yes. From fast-paced short-form videos to structured long-form content, each format is optimized differently for maximum impact.' },
    { q: 'How do you ensure the video performs well?', a: 'By focusing on key elements like strong hooks, smooth pacing, visual clarity, and retention-focused editing—everything designed to keep viewers watching.' },
    { q: 'What is it like working with you?', a: 'The process is simple and collaborative. Clear communication, structured workflow, and consistent updates ensure a smooth experience from start to finish.' },
    { q: 'What are your pricing models?', a: 'We offer flexible pricing models including per-project rates, monthly retainers, and custom packages based on your specific needs. Contact us for a personalized quote tailored to your requirements and budget.' }
  ];

  return (
    <section className="section" id="faq" style={{ position: 'relative', overflow: 'hidden', padding: '8rem 0' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(96, 165, 250, 0.05) 0%, transparent 60%)', pointerEvents: 'none', zIndex: -1 }}></div>

      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(96,165,250,0.1)', padding: '0.5rem 1rem', borderRadius: '100px', border: '1px solid rgba(96,165,250,0.2)', marginBottom: '1.5rem', boxShadow: '0 0 15px rgba(96,165,250,0.15)' }}>
             <Sparkles size={16} color="#60a5fa" />
             <span style={{ color: '#60a5fa', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>FAQ</span>
          </div>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, margin: '0 0 1rem 0', letterSpacing: '-0.02em', lineHeight: 1.2, background: 'linear-gradient(135deg, #f8fafc 0%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-muted" style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Get answers to the most common questions about our content creation services
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          {faqs.map((faq, index) => <QAItem key={index} index={index} q={faq.q} a={faq.a} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
