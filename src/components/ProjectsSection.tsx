import React from 'react';
import { motion } from 'framer-motion';

import project1 from '../assets/motor-2.png';
import project2 from '../assets/motor-3.png';
import project3 from '../assets/motor-4.png';

const portfolioDivisions = [
  {
    id: 'motors',
    title: 'MOTORS DIVISION',
    featured: {
      title: 'Vantage Bespoke R',
      desc: 'High-Performance Automotive • Global',
      year: '2026',
      img: project2
    },
    secondary: [
      {
        title: 'Apex V8 Engine',
        desc: 'Powertrain R&D • Stuttgart, DE',
        img: project1
      },
      {
        title: 'Aero Dynamics Lab',
        desc: 'Testing Facility • Silverstone, UK',
        img: project3
      }
    ]
  },
  {
    id: 'real-estate',
    title: 'REAL ESTATE',
    featured: {
      title: 'The Apex Tower',
      desc: 'Commercial Real Estate • London, UK',
      year: '2027',
      img: project1
    },
    secondary: [
      {
        title: 'Azure Coast Villas',
        desc: 'Luxury Residential • Monaco',
        img: project3
      },
      {
        title: 'Monolith Hub',
        desc: 'Mixed-Use Development • New York, USA',
        img: project2
      }
    ]
  },
  {
    id: 'constructions',
    title: 'CONSTRUCTIONS',
    featured: {
      title: 'Neo-Infrastructure Link',
      desc: 'Civil Engineering • Dubai, UAE',
      year: '2025',
      img: project3
    },
    secondary: [
      {
        title: 'Subterranean Network',
        desc: 'Transit System • Tokyo, JP',
        img: project2
      },
      {
        title: 'Desert Bloom Highway',
        desc: 'Infrastructure • Saudi Arabia',
        img: project1
      }
    ]
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative py-section-gap bg-surface-container-high border-t border-outline overflow-hidden">
      
      {/* Background Architectural Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-[0.03] select-none flex flex-col justify-center w-full z-0">
        <span className="font-display-xl text-[120px] lg:text-[250px] leading-[0.8] text-primary text-left pl-[2%]">SELECTED</span>
        <span className="font-display-xl text-[120px] lg:text-[250px] leading-[0.8] text-primary text-right pr-[2%]">PROJECTS</span>
      </div>

      <div className="relative z-10 w-full">
        
        {/* Header Container */}
        <div className="w-full z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-12 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
          >
            <div>
              <span className="font-label-caps text-label-caps text-on-surface-variant mb-4 block">04. PORTFOLIO</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface">SELECTED <span className="text-primary block md:inline">PROJECTS</span></h2>
            </div>
            <button className="group flex items-center gap-4 border-b border-on-surface pb-2 text-sm font-label-caps tracking-widest uppercase hover:text-primary hover:border-primary transition-colors mt-4 md:mt-0">
              VIEW ALL WORK
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
            </button>
          </motion.div>
        </div>

        {/* Swipeable Horizontal Gallery */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-margin-mobile md:px-margin-desktop pb-12 pt-4 hide-scrollbar">
          
          {/* Spacer to align first item with container max width */}
          <div className="w-[calc((100vw-min(100vw,1600px))/2)] flex-shrink-0 hidden xl:block"></div>

          {portfolioDivisions.map((division, index) => (
            <motion.div 
              key={division.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-[95vw] md:w-[90vw] lg:w-[85vw] xl:w-[1400px] snap-center bg-surface border border-outline rounded-[2.5rem] p-8 md:p-12 shadow-xl"
            >
              {/* Division Header */}
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-outline">
                <h3 className="font-headline-md text-2xl md:text-3xl uppercase tracking-tighter">{division.title}</h3>
                <span className="font-label-caps text-on-surface-variant text-sm">0{index + 1}</span>
              </div>

              {/* Asymmetrical Grid inside the Boundary Box */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                
                {/* Featured Project */}
                <div className="md:col-span-7 group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-2xl">
                    <img src={division.featured.img} alt={division.featured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold uppercase mb-2">{division.featured.title}</h4>
                        <p className="text-on-surface-variant text-sm">{division.featured.desc}</p>
                      </div>
                      <span className="font-label-caps text-xs opacity-60 bg-surface-variant px-3 py-1 rounded-full">{division.featured.year}</span>
                    </div>
                  </div>

                  {/* Secondary Projects */}
                  <div className="md:col-span-5 flex flex-col gap-8 justify-end">
                    {division.secondary.map((sec, idx) => (
                      <div key={idx} className="group cursor-pointer">
                        <div className="relative overflow-hidden aspect-[16/9] mb-4 rounded-xl">
                          <img src={sec.img} alt={sec.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        </div>
                        <h4 className="text-lg md:text-xl font-bold uppercase mb-1">{sec.title}</h4>
                        <p className="text-on-surface-variant text-xs">{sec.desc}</p>
                      </div>
                    ))}
                  </div>

                </div>
            </motion.div>
          ))}

          {/* Spacer to allow scrolling past last item cleanly */}
          <div className="w-[10vw] flex-shrink-0"></div>
        </div>

      </div>

      {/* Hide scrollbar styles injected here for convenience */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
