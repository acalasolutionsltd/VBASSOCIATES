import React from 'react';
import { motion } from 'framer-motion';
import dnaImage from '../assets/motor-1.png'; // Placeholder image

const disciplinesData = [
  {
    id: '01',
    title: 'ARCHITECTURAL INTEGRITY',
    description: 'We do not just build structures or businesses; we engineer ecosystems designed to outlast market cycles. Every foundation is laid with uncompromising quality.',
  },
  {
    id: '02',
    title: 'DECISIVE LEADERSHIP',
    description: 'Agility meets absolute precision. We operate with a clear chain of command and a strategic mandate, allowing our subsidiaries to move faster than the competition.',
  },
  {
    id: '03',
    title: 'SYNERGISTIC SCALE',
    description: 'Our divisions do not operate in silos. The knowledge gained in high-performance motors fuels the engineering in our real estate and construction ventures.',
  },
];

const DisciplinesSection: React.FC = () => {
  return (
    <section id="disciplines" className="relative py-24 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-variant border-t border-outline overflow-hidden">
      
      {/* Background Architectural Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-[0.03] select-none flex flex-col justify-center w-full z-0">
        <span className="font-display-xl text-[180px] lg:text-[350px] leading-[0.8] text-primary text-left pl-[5%]">HOW</span>
        <span className="font-display-xl text-[180px] lg:text-[350px] leading-[0.8] text-primary text-right pr-[5%]">WE</span>
        <span className="font-display-xl text-[180px] lg:text-[350px] leading-[0.8] text-primary text-left pl-[5%]">WORK</span>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-4 block">THE DNA</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface max-w-4xl">
            HOW WE <span className="text-primary">WORK</span>.
          </h2>
          <p className="text-lg md:text-xl lg:text-3xl leading-relaxed mt-6 max-w-3xl text-on-surface-variant font-medium">
            This is the operational blueprint that drives VB Associates. Our disciplines form the foundational DNA applied across every sector we touch.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: DNA Traits */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-12 lg:gap-16">
            {disciplinesData.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group border-t border-outline pt-8"
              >
                <div className="flex items-start gap-6 lg:gap-10">
                  <span className="font-headline-md text-3xl lg:text-5xl text-outline-variant font-bold transition-colors group-hover:text-primary">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold uppercase mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-lg text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Large Placeholder Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[700px] overflow-hidden rounded-[2rem] shadow-2xl"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
            <img 
              src={dnaImage} 
              alt="Company DNA" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
