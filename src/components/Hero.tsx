import React from 'react';

import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-transparent">

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max w-full text-center pointer-events-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display-xl text-display-xl-mobile md:text-display-xl leading-none tracking-tighter mb-12 max-w-6xl mx-auto uppercase"
        >
          VB ASSOCIATES <span className="text-primary">THE ARCHITECTS OF DIVERSIFIED EXCELLENCE</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-center gap-8 mt-12"
        >
          <button className="group flex items-center justify-center gap-4 bg-primary text-on-primary px-6 md:px-12 py-5 font-label-caps text-label-caps uppercase hover:bg-primary-hover transition-colors tactical-mask w-full md:w-auto">
            EXPLORE PORTFOLIO
            <span className="material-symbols-outlined vertical-drive-arrow">arrow_forward</span>
          </button>
          <button className="group flex items-center justify-center gap-4 border border-on-surface/20 px-6 md:px-12 py-5 font-label-caps text-label-caps uppercase hover:border-primary hover:text-primary transition-colors w-full md:w-auto">
            VIEW INVESTOR RELATIONS
            <span className="material-symbols-outlined vertical-drive-arrow">arrow_forward</span>
          </button>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
