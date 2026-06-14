import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-section-gap px-margin-desktop bg-surface-variant overflow-hidden border-t border-outline">
      
      {/* Background Architectural Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-[0.03] select-none">
        <span className="font-display-xl text-[400px] leading-none text-primary">LEGACY</span>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
        
        {/* Left Column: Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-5 md:pr-12 md:border-r border-outline flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-primary"></div>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">ESTABLISHED LEGACY</p>
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase leading-[1.1] text-on-surface tracking-tight">
              A MONOLITH OF <br/>
              <span className="text-primary italic">STRATEGIC</span><br/>
              PRECISION
            </h2>
          </div>
          
          <div className="hidden md:block mt-24">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20H40M20 0V40" stroke="#D7D1C9" strokeWidth="1"/>
              <circle cx="20" cy="20" r="4" fill="#4E425F"/>
            </svg>
          </div>
        </motion.div>
        
        {/* Right Column: Content & Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:col-span-6 md:col-start-7 flex flex-col justify-center mt-12 md:mt-0"
        >
          <div className="prose prose-lg">
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed mb-6 font-semibold">
              Founded on the principles of architectural integrity and decisive market leadership, VB Associates operates at the intersection of performance and permanence.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-12">
              Our group empowers specialized subsidiaries to redefine their respective industries through engineering excellence and visionary development. We do not just build companies; we engineer legacies designed to withstand the test of time and market volatility.
            </p>
          </div>

          {/* Stats Grid - Blueprint Style */}
          <div className="grid grid-cols-2 border border-outline relative">
            {/* Center crosshair */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-outline"></div>
            
            <motion.div 
              whileHover={{ backgroundColor: 'rgba(78, 66, 95, 0.03)' }}
              className="p-8 md:p-12 transition-colors duration-500"
            >
              <motion.p 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-display-xl-mobile md:text-[80px] leading-none text-primary mb-4"
              >
                35+
              </motion.p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">YEARS OF GROWTH</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ backgroundColor: 'rgba(78, 66, 95, 0.03)' }}
              className="p-8 md:p-12 transition-colors duration-500"
            >
              <motion.p 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-display-xl-mobile md:text-[80px] leading-none text-primary mb-4"
              >
                3.2B
              </motion.p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">ASSETS UNDER MGMT</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default AboutSection;
