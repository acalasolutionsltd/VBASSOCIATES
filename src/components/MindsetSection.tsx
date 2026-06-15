import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import mindsetImage from '../assets/mindset-image.png';

const MindsetSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-24 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-transparent border-t border-outline overflow-hidden">
      <div className="relative z-10 max-w-container-max mx-auto flex flex-col lg:flex-row border border-outline rounded-[24px] overflow-hidden shadow-2xl bg-surface/80 backdrop-blur-2xl">
        
        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-5/12 border-b lg:border-b-0 lg:border-r border-outline relative min-h-[400px] lg:min-h-[600px]"
        >
          <img 
            src={mindsetImage} 
            alt="The Mindset" 
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          />
        </motion.div>

        {/* Text Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-7/12 flex flex-col justify-center h-auto p-6 md:p-12 lg:p-16 relative z-20"
        >
          <motion.h2 variants={itemVariants} className="font-headline-lg text-4xl md:text-headline-lg-mobile lg:text-headline-lg mb-8 uppercase leading-tight text-on-surface">
            THE <span className="text-primary block sm:inline">MINDSET</span>
          </motion.h2>

          <div className="space-y-6">
            <motion.div variants={itemVariants} className="border-b border-outline pb-6">
              <h3 className="font-label-caps text-label-caps text-primary uppercase mb-2">PRECISION</h3>
              <p className="font-body-lg text-body-lg text-on-surface">Every decision is intentional.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="border-b border-outline pb-6">
              <h3 className="font-label-caps text-label-caps text-primary uppercase mb-2">INNOVATION</h3>
              <p className="font-body-lg text-body-lg text-on-surface">Progress through adaptation.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="border-b border-outline pb-6">
              <h3 className="font-label-caps text-label-caps text-primary uppercase mb-2">LONGEVITY</h3>
              <p className="font-body-lg text-body-lg text-on-surface">Building for generations.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="border-b border-outline pb-6">
              <h3 className="font-label-caps text-label-caps text-primary uppercase mb-2">INTEGRITY</h3>
              <p className="font-body-lg text-body-lg text-on-surface">Trust before growth.</p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-10">
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              — Founder & Managing Director
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default MindsetSection;
