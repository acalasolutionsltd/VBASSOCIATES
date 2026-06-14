import React from 'react';
import { motion } from 'framer-motion';
import mindsetImage from '../assets/mindset-image.png';

const MindsetSection: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-section-gap px-margin-desktop bg-transparent border-t border-outline overflow-hidden">
      <div className="relative z-10 max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
        
        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 mb-16 lg:mb-0 h-full"
        >
          <div className="relative h-full min-h-[600px] overflow-hidden bg-surface border border-outline rounded-[2rem]">
            <img 
              src={mindsetImage} 
              alt="The Mindset" 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 border border-on-surface/5 m-4 pointer-events-none rounded-xl"></div>
          </div>
        </motion.div>

        {/* Text Column - Frosted Glass Panel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center h-full p-10 md:p-12 lg:p-16 rounded-[2rem] bg-surface/80 backdrop-blur-2xl border border-outline shadow-2xl"
        >
          <motion.h2 variants={itemVariants} className="font-headline-lg text-headline-lg mb-10 uppercase leading-tight text-on-surface">
            THE <span className="text-primary">MINDSET</span>
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
