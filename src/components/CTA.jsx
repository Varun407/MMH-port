import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';


const CTA = () => {
  return (
    <section className="section" id="contact" style={{ background: 'linear-gradient(to top, #030816, #050b14)', paddingBottom: '4rem' }}>
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card"
          style={{ padding: '6rem 2rem', border: '1px solid rgba(96, 165, 250, 0.2)', background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 58, 138, 0.2))' }}
        >
          <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontFamily: 'Outfit', letterSpacing: '-0.02em', color: '#f8fafc', lineHeight: 1.1 }}>
            Ready to Dominate?
          </h2>
          <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem auto', color: '#94a3b8' }}>
            Stop leaving money and attention on the table. Let's scale your brand through world-class content today.
          </p>
          
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
             <a href="#" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem', boxShadow: '0 4px 20px rgba(37, 99, 235, 0.6)' }}>Book a Call</a>
          </div>

          <div className="flex justify-center gap-6 mt-12 text-muted" style={{ fontWeight: 500 }}>
            <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#60a5fa'} onMouseOut={e => e.currentTarget.style.color='#94a3b8'}>
              Instagram
            </a>
            <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#60a5fa'} onMouseOut={e => e.currentTarget.style.color='#94a3b8'}>
              LinkedIn
            </a>
            <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#60a5fa'} onMouseOut={e => e.currentTarget.style.color='#94a3b8'}>
              X (Twitter)
            </a>
            <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='#60a5fa'} onMouseOut={e => e.currentTarget.style.color='#94a3b8'}>
              Email
            </a>
          </div>
        </motion.div>
        
        <div className="mt-12 text-center" style={{ fontSize: '0.9rem', color: '#64748b' }}>
          &copy; {new Date().getFullYear()} MMHgalaxy. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default CTA;
