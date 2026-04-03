import React from 'react';
import { motion } from 'framer-motion';
import { Film, Mic, Box, MonitorPlay, UserSquare, Video, PlaySquare } from 'lucide-react';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const specificServices = [
    { icon: <Box className="mb-4" size={32} color="#60a5fa" />, title: 'Viral 3D Motion Graphics', outcome: 'Immersive premium visuals' },
    { icon: <Film className="mb-4" size={32} color="#60a5fa" />, title: 'VSL', outcome: 'High conversion at scale' },
    { icon: <Mic className="mb-4" size={32} color="#60a5fa" />, title: 'Podcast', outcome: 'Clean, engaging long-form' },
    { icon: <MonitorPlay className="mb-4" size={32} color="#60a5fa" />, title: 'SAAS Animation', outcome: 'Product walkthroughs & UI motion' },
    { icon: <UserSquare className="mb-4" size={32} color="#60a5fa" />, title: 'Viral Real Estate Talking Head', outcome: 'Authority building for agents' },
    { icon: <Video className="mb-4" size={32} color="#60a5fa" />, title: 'Documentary', outcome: 'Deep storytelling & retention' },
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title">Content Framework</h2>
        <p className="section-subtitle">A balanced approach to digital dominance.</p>

        <div className="grid grid-cols-2 mb-12 gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={itemVariants}>
            <PlaySquare size={40} className="mb-4" color="#60a5fa"/>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Short-Form Content</h3>
            <p className="text-muted" style={{ color: '#94a3b8' }}>Fast, engaging, attention-grabbing videos tailored for TikTok, Reels, and Shorts. Engineered to stop the scroll and build massive awareness.</p>
          </motion.div>
          <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={itemVariants}>
            <Film size={40} className="mb-4" color="#2563eb" />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Long-Form Content</h3>
            <p className="text-muted" style={{ color: '#94a3b8' }}>Structured storytelling built for YouTube to convert awareness into affinity. Focuses on deep value, audience retention, and building lasting trust.</p>
          </motion.div>
        </div>

        <h3 className="text-center mb-8" style={{ fontSize: '2rem', marginTop: '5rem' }}>Specialized Delivery</h3>
        <motion.div 
          className="grid gap-6" 
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {specificServices.map((service, index) => (
            <motion.div key={index} className="card text-center flex-col items-center flex" variants={itemVariants} style={{ padding: '2rem 1.5rem' }}>
              {service.icon}
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{service.title}</h4>
              <p className="text-muted" style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{service.outcome}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
