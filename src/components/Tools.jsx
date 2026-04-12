import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Image as ImageIcon, Sparkles, Wand2 } from 'lucide-react';

const Tools = () => {
  const otherTools = [
    {
      name: 'Canva',
      icon: <img src="canva.svg" width="45" height="45" alt="Canva" />,
      desc: 'For rapid design iterations and layout concepts.',
      glowColor: 'rgba(249, 115, 22, 0.15)',
      gradientBorder: 'linear-gradient(90deg, #00C4CC, rgba(255,255,255,0.05), #00C4CC, rgba(255,255,255,0.05), #00C4CC)',
      iconBg: 'rgba(0, 196, 204, 0.1)'
    },
    {
      name: 'Photoshop',
      icon: <img src="photoshop.svg" width="45" height="45" alt="Photoshop" />,
      desc: 'For complex graphic manipulation and precise visual assets.',
      glowColor: 'rgba(6, 182, 212, 0.15)',
      gradientBorder: 'linear-gradient(90deg, #31A8FF, rgba(255,255,255,0.05), #31A8FF, rgba(255,255,255,0.05), #31A8FF)',
      iconBg: 'rgba(49, 168, 255, 0.1)'
    },
    {
      name: 'Gen AI Tools',
      icon: <img src="openai.svg" width="45" height="45" alt="OpenAI" />,
      desc: 'Leveraging cutting-edge AI for rapid ideation and asset generation.',
      glowColor: 'rgba(217, 70, 239, 0.15)',
      gradientBorder: 'linear-gradient(90deg, #d946ef, rgba(255,255,255,0.05), #f472b6, rgba(255,255,255,0.05), #d946ef)',
      iconBg: 'rgba(217, 70, 239, 0.1)'
    }
  ];

  return (
    <section className="section" id="expertise">
      <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title">Tools</h2>
        <p className="text-muted" style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6, textShadow: '0 0 15px rgba(14,165,233,0.2)' }}>
          Industry-standard tools for high-quality motion and video production
        </p>
      </div>

      <div className="container">
        {/* Featured Tool: DaVinci Resolve */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          style={{ maxWidth: '1000px', margin: '0 auto 5rem auto' }}
        >
          {/* Animated gradient border wrapper */}
          <div style={{
            position: 'relative',
            padding: '2px', // The border thickness
            borderRadius: '1.5rem',
            background: 'linear-gradient(90deg, #2563eb, rgba(255,255,255,0.05), #8b5cf6, rgba(255,255,255,0.05), #2563eb)',
            backgroundSize: '200% 100%',
            animation: 'panBorder 4s linear infinite',
          }}>
            <div style={{
              background: 'linear-gradient(145deg, #020617 0%, #0f172a 100%)',
              padding: '4rem 3rem',
              borderRadius: '1.4rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Subtle top glow inside the card */}
              <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '200px', background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.2) 0%, transparent 70%)', zIndex: 0 }}></div>

              <div style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '1.2rem', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                  <img src="davinci.png" width="80" height="80" alt="DaVinci Resolve" />
                </div>

                <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: '#f8fafc', fontWeight: 700, letterSpacing: '-0.02em' }}>DaVinci Resolve</h3>
                <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', color: '#94a3b8' }}>
                  I use DaVinci Resolve as my primary editing software handling everything from clean cuts to advanced color grading and motion within a single, streamlined workflow.
                  <br /><br />
                  Over the period, I've mastered the full tool, including the Fusion page, allowing me to create 2D & 3D motion graphics, clean Apple-style visuals, smooth edits, typography, and sound design all without relying on multiple software.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div style={{ textAlign: 'center', marginTop: '6rem', marginBottom: '3rem' }}>
          <h3 className="section-title">Other Tools</h3>
        </div>
        <div className="grid grid-cols-3 gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: '1000px', margin: '0 auto' }}>
          {otherTools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: `0 15px 35px -10px ${tool.glowColor.replace('0.15)', '0.6)')}` }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                position: 'relative',
                padding: '2px', // border thickness
                background: tool.gradientBorder,
                backgroundSize: '200% 100%',
                animation: 'panBorder 5s linear infinite',
                borderRadius: '1.2rem',
              }}
            >
              <div className="text-center flex-col items-center flex" style={{
                padding: '3rem 2rem',
                background: 'linear-gradient(145deg, #020617 0%, #0f172a 100%)',
                borderRadius: '1.15rem',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '150px', height: '100px', background: `radial-gradient(ellipse at center, ${tool.glowColor} 0%, transparent 70%)`, zIndex: 0 }}></div>
                <div style={{ marginBottom: '1.5rem', padding: '1rem', borderRadius: '50%', background: tool.iconBg, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '75px', height: '75px', zIndex: 1, boxShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>
                  {tool.icon}
                </div>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: '#f8fafc', fontWeight: 600, zIndex: 1 }}>{tool.name}</h4>
                <p className="text-muted" style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.6', margin: 0, zIndex: 1 }}>{tool.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
