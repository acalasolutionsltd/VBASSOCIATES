import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

import motor1 from '../assets/motor-1.png';
import motor2 from '../assets/motor-2.png';
import motor3 from '../assets/motor-3.png';
import motor4 from '../assets/motor-4.png';

const motorImages = [motor1, motor2, motor3, motor4];

const DivisionsSection: React.FC = () => {
  const [currentMotorImage, setCurrentMotorImage] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMotorImage((prev) => (prev === motorImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentMotorImage((prev) => (prev === 0 ? motorImages.length - 1 : prev - 1));
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="relative py-section-gap px-margin-desktop bg-transparent w-full overflow-hidden">
      <div className="relative z-10 max-w-container-max mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-16"
        >
          <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface text-left">OUR <span className="text-primary">SPECIALIZATIONS</span></h2>
          <p className="font-label-caps text-label-caps text-on-surface-variant max-w-xs text-right">DYNAMIC SYNERGY ACROSS HIGH-STAKES INDUSTRIES</p>
        </motion.div>
        
        <div className="flex flex-col gap-16 w-full">
          
          {/* VB Motors - Image 40%, Solid Text Block 60% */}
          <div className="flex flex-row overflow-hidden rounded-[2rem] bg-[#988E8B] shadow-xl w-full">
            
            {/* Image Slider Container (40% Width) */}
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-[40%] relative min-h-[600px] group flex-shrink-0"
            >
              <AnimatePresence initial={false}>
                <motion.img 
                  key={currentMotorImage}
                  src={motorImages[currentMotorImage]}
                  alt="VB Motors"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                />
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={prevImage} className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md hover:bg-black transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button onClick={nextImage} className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-md hover:bg-black transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>

              {/* Slider Pagination Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                {motorImages.map((_, idx) => (
                  <div key={idx} className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentMotorImage ? 'w-8 bg-white' : 'w-2.5 bg-white/60'}`} />
                ))}
              </div>
            </motion.div>

            {/* Text Container (60% Width) */}
            <motion.div 
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-[60%] flex flex-col justify-center px-16 lg:px-24 py-16 text-[#1A1A1A] flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-label-caps text-label-caps opacity-60 text-[#1A1A1A]">01. PERFORMANCE</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 uppercase text-[#1A1A1A] drop-shadow-sm">VB MOTORS</h3>
              
              <p className="text-[28px] lg:text-[32px] leading-[1.4] font-medium mb-16 tracking-tight text-[#1A1A1A]">
                Engineering the future of automotive luxury and competitive performance sports. Nothing is built before precision is ensured.
              </p>
              
              <a 
                href="#motors"
                className="group flex justify-between items-center w-full max-w-xs border border-[#1A1A1A] text-[#1A1A1A] py-4 px-6 text-sm font-semibold tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-[#988E8B] transition-colors duration-300"
              >
                ENTER DIVISION
                <span className="text-xl leading-none transition-transform group-hover:rotate-90">+</span>
              </a>
            </motion.div>
          </div>

          {/* VB Real Estate - Placeholder (Alternating Layout) */}
          <div className="flex flex-row-reverse overflow-hidden rounded-[2rem] bg-[#D7D1C9] shadow-xl w-full">
            
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-[40%] relative min-h-[600px] bg-[#C1BAB2] flex items-center justify-center border-l border-outline flex-shrink-0"
            >
               <span className="material-symbols-outlined text-5xl text-[#1A1A1A]/40">domain</span>
            </motion.div>

            <motion.div 
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-[60%] flex flex-col justify-center px-16 lg:px-24 py-16 text-[#1A1A1A] flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-label-caps text-label-caps opacity-60 text-[#1A1A1A]">02. PORTFOLIO</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 uppercase text-[#1A1A1A] drop-shadow-sm">VB REAL ESTATE</h3>
              
              <p className="text-[28px] lg:text-[32px] leading-[1.4] font-medium mb-16 tracking-tight text-[#1A1A1A]">
                Curating a legacy of iconic properties globally. Every development begins by reading the skyline honestly, deciding what the new landmark should add.
              </p>
              
              <a 
                href="#real-estate"
                className="group flex justify-between items-center w-full max-w-xs border border-[#1A1A1A] text-[#1A1A1A] py-4 px-6 text-sm font-semibold tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-[#D7D1C9] transition-colors duration-300"
              >
                ENTER DIVISION
                <span className="text-xl leading-none transition-transform group-hover:rotate-90">+</span>
              </a>
            </motion.div>
          </div>

          {/* VB Constructions - Placeholder */}
          <div className="flex flex-row overflow-hidden rounded-[2rem] bg-[#A5A0A1] shadow-xl w-full">
            
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-[40%] relative min-h-[600px] bg-[#8F8A8B] flex items-center justify-center border-r border-outline flex-shrink-0"
            >
               <span className="material-symbols-outlined text-5xl text-[#1A1A1A]/40">engineering</span>
            </motion.div>

            <motion.div 
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-[60%] flex flex-col justify-center px-16 lg:px-24 py-16 text-[#1A1A1A] flex-shrink-0"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-label-caps text-label-caps opacity-60 text-[#1A1A1A]">03. INFRASTRUCTURE</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 uppercase text-[#1A1A1A] drop-shadow-sm">VB CONSTRUCTIONS</h3>
              
              <p className="text-[28px] lg:text-[32px] leading-[1.4] font-medium mb-16 tracking-tight text-[#1A1A1A]">
                Delivering complex infrastructure and high-specification developments. We execute large-scale engineering with an unwavering commitment to safety.
              </p>
              
              <a 
                href="#constructions"
                className="group flex justify-between items-center w-full max-w-xs border border-[#1A1A1A] text-[#1A1A1A] py-4 px-6 text-sm font-semibold tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-[#A5A0A1] transition-colors duration-300"
              >
                ENTER DIVISION
                <span className="text-xl leading-none transition-transform group-hover:rotate-90">+</span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
