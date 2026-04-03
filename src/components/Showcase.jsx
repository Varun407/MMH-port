import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Showcase = () => {
  const shortFormVideos = [1, 2, 3, 4];
  const longFormVideos = [1, 2];

  const ThumbnailPlaceholder = ({ type }) => {
    const isShort = type === 'short';
    
    return (
      <div 
        className="card" 
        style={{ 
          width: '100%', 
          aspectRatio: isShort ? '9/16' : '16/9', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          position: 'relative',
          overflow: 'hidden',
          padding: 0
        }}
      >
        {/* Play Button Overlay */}
        <div style={{ position: 'absolute', zIndex: 2, background: 'rgba(37, 99, 235, 0.8)', padding: '1rem', borderRadius: '50%', backdropFilter: 'blur(4px)' }}>
          <Play size={24} fill="white" color="white" />
        </div>
        
        {/* Fake Video UI */}
        <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', zIndex: 2 }}>
           <div style={{ width: '80px', height: '12px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginBottom: '8px' }}></div>
           <div style={{ width: '120px', height: '12px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}></div>
        </div>
        
        {/* Fake Video Gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
      </div>
    );
  };

  return (
    <section className="section" id="work" style={{ background: 'rgba(10, 25, 48, 0.3)' }}>
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <p className="section-subtitle">Real results pushing the boundaries of motion.</p>
        
        {/* Short Form */}
        <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Short Form</h3>
        <div 
          className="grid gap-6 mb-12" 
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
        >
          {shortFormVideos.map((item, index) => (
            <motion.div 
              key={`short-${item}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ThumbnailPlaceholder type="short" />
            </motion.div>
          ))}
        </div>

        {/* Long Form */}
        <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Long Form</h3>
        <div 
          className="grid gap-6" 
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}
        >
          {longFormVideos.map((item, index) => (
            <motion.div 
              key={`long-${item}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ThumbnailPlaceholder type="long" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
