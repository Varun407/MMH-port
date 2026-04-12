import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Healthyday Yoga",
      subs: "Youtuber (213k+ Subscribers)",
      img: "t1.jpg",
      text: "Mohammad has been editing our short form content for both marketing and social handles. He has been super awesome in both quality and timely delivery. Highly recommend him for any editing assignments!",
      rating: 5
    },
    {
      name: "Syed Suhail Karrar",
      subs: "Founder of Karrar Visuals",
      img: "t2.jpeg",
      text: "I had a great experience working with Mohammad. He did an excellent job editing my talking head videos very clean cuts, smooth pacing, and engaging visuals. He understands exactly how to keep the content interesting and professional. Communication was easy and delivery was on time. Highly recommended",
      rating: 5
    }
  ];

  const StarRating = ({ count }) => {
    return (
      <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
        {[...Array(count)].map((_, i) => (
          <Star key={i} size={23} fill="#007BFF" color="#007BFF" />
        ))}
      </div>
    );
  };

  return (
    <section className="section" id="testimonials" style={{ background: '#0a1020', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">Real results from high-performance content collaborations.</p>

        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', textAlign: 'left', marginTop: '4rem' }}>
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: '0 15px 35px -10px rgba(96, 165, 250, 0.3)' }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              style={{
                position: 'relative',
                padding: '1px',
                background: 'linear-gradient(180deg, rgba(96, 165, 250, 0.5) 0%, transparent 100%)',
                borderRadius: '1.5rem',
              }}
            >
              <div style={{
                padding: '2.5rem',
                background: 'linear-gradient(145deg, rgba(2, 6, 23, 0.9) 0%, #050505 100%)',
                borderRadius: '1.45rem',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                {/* Glowing neon edge accents */}
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '150px', height: '2px', background: 'radial-gradient(ellipse at center, rgba(96,165,250,0.8) 0%, transparent 70%)', zIndex: 0 }}></div>
                <div style={{ position: 'absolute', top: '-50px', left: 0, width: '100%', height: '100px', background: 'radial-gradient(ellipse at top center, rgba(37,99,235,0.15) 0%, transparent 70%)', zIndex: 0 }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
                    <div style={{ width: '72px', height: '72px', borderRadius: '12px', overflow: 'hidden', border: '2px solid rgba(36, 83, 132, 1)', flexShrink: 0, background: '#0a1020' }}>
                      <img
                        src={test.img}
                        alt={test.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(test.name) + '&background=0D8ABC&color=fff'; }}
                      />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', margin: 0, color: '#f8fafc', fontWeight: 700 }}>{test.name}</h4>
                      <p style={{ fontSize: '0.9rem', color: '#007BFF', margin: 0, fontWeight: 500 }}>{test.subs}</p>
                    </div>
                  </div>

                  <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginBottom: '1.5rem', fontStyle: 'italic', lineHeight: 1.7, opacity: 0.9 }}>
                    "{test.text}"
                  </p>
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <StarRating count={test.rating} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
