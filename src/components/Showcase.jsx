import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Showcase = () => {
  const shortFormVideos = [
    'https://drive.google.com/file/d/1GI0IFpbeoudtB6FiGXgpmO9ilXc76vn7/preview',
    'https://drive.google.com/file/d/15Tv5_MnGrOIFMnCP3eKK444Csjlcrp0g/preview',
    'https://drive.google.com/file/d/1lw_Zr-Q_aqNAWdmFeH5LCI_CWV9A7kJD/preview'
  ];
  const longFormVideos = [
    'https://drive.google.com/file/d/1MUWIdnU4xfdK6rx46VbLVP0s1kQaYVEy/preview',
    'https://drive.google.com/file/d/1ln4ho7LfnEjS_O25GiXUh14i3ug0McA-/preview'
  ];

  const ThumbnailPlaceholder = ({ type, url }) => {
    const isShort = type === 'short';
    
    return (
      <div 
        className="card" 
        style={{ 
          width: '100%', 
          aspectRatio: isShort ? '9/16' : '16/9', 
          display: 'block', 
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          position: 'relative',
          overflow: 'hidden',
          padding: 0,
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
          borderRadius: '1rem'
        }}
      >
        {url ? (
          <iframe 
            src={url} 
            width="100%" 
            height="100%" 
            allow="autoplay; fullscreen" 
            style={{ border: 'none', position: 'absolute', top: 0, left: 0, transform: 'scale(1.03)' }}
            title="Video Preview"
          ></iframe>
        ) : (
          <>
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
          </>
        )}
      </div>
    );
  };

  return (
    <section className="section" id="work" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="container">
        {/* Short Form */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h3 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(135deg, #f8fafc 0%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Short Form Videos</h3>
          <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '800px', marginBottom: '2rem', textAlign: 'center', color: '#cbd5e1', textShadow: '0 0 20px rgba(96, 165, 250, 0.2)' }}>
            Strategically crafted videos that capture attention instantly and turn it into consistent engagement and reach.
          </p>
        </div>
        <div 
          className="grid gap-8 mb-12" 
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 300px))', justifyContent: 'center' }}
        >
          {shortFormVideos.map((item, index) => (
            <motion.div 
              key={`short-${item}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ThumbnailPlaceholder type="short" url={typeof item === 'string' ? item : undefined} />
            </motion.div>
          ))}
        </div>

        {/* Long Form */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem' }}>
          <h3 style={{ fontSize: '3.2rem', fontWeight: 800, marginBottom: '1rem', background: 'linear-gradient(135deg, #f8fafc 0%, #60a5fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Long Form Contents</h3>
          <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '800px', marginBottom: '2rem', textAlign: 'center', color: '#cbd5e1', textShadow: '0 0 20px rgba(96, 165, 250, 0.2)' }}>
            Deep, structured storytelling designed to increase watch time, trust, and long-term audience growth.
          </p>
        </div>
        <div 
          className="grid gap-6" 
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}
        >
          {longFormVideos.map((item, index) => (
            <motion.div 
              key={`long-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ThumbnailPlaceholder type="long" url={typeof item === 'string' ? item : undefined} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
