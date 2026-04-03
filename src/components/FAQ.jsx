import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const QAItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem 0' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', color: '#f8fafc', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', textAlign: 'left', fontFamily: 'Outfit' }}
      >
        {q}
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={20} color="#60a5fa" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-muted" style={{ paddingTop: '1rem', color: '#94a3b8', lineHeight: 1.6 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { q: 'What is your typical turnaround time?', a: 'Standard short-form videos take 24-48 hours. Long-form content and VSLs typically require 3-5 business days depending on complexity and revisions.' },
    { q: 'Do you offer custom pricing packages?', a: 'Yes. Every brand is different. After our discovery call, we build a custom retainer or project-based package structured specifically for your goals and volume.' },
    { q: 'What if I need revisions?', a: 'All packages include a standard buffer for revisions. We ensure you are 100% satisfied with the outcome before finalizing the delivery.' },
    { q: 'How do we communicate during the project?', a: 'We use Slack or Email for instant communication and a dedicated Notion workspace for project tracking and asset management.' }
  ];

  return (
    <section className="section" id="faq" style={{ background: 'rgba(10, 25, 48, 0.3)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="card" style={{ padding: '1rem 2.5rem' }}>
          {faqs.map((faq, index) => <QAItem key={index} q={faq.q} a={faq.a} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
