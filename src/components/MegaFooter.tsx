import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import megaFooterBg from '../assets/new_mega_footer_bg.png';

const MegaFooter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Parallax subtle scale for the background image
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <>
      <section ref={containerRef} className="relative w-full h-[100vh] bg-background overflow-hidden flex flex-col items-center justify-center z-0 border-t border-outline">
      
      {/* Layer 1 & 3: Background Asset */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* The central asset */}
        <motion.div 
          style={{ scale, y }}
          className="relative w-full h-[105%] -top-[5%]"
        >
          <img 
            src={megaFooterBg} 
            alt="Mega Footer Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>



      {/* Layer 4: Corner Metadata */}
      <div className="absolute top-12 left-12 z-20">
        <p className="font-label-caps text-label-caps text-[#F3C19D] tracking-widest uppercase flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F3C19D] animate-pulse"></span>
          VB Associates
        </p>
      </div>
      
      <div className="absolute top-12 right-12 z-20 hidden md:flex gap-8 bg-surface-container-low px-6 py-3 rounded-full border border-outline">
        <a href="#" className="font-label-ui text-label-ui text-primary hover:opacity-70 transition-opacity">Email</a>
        <a href="#" className="font-label-ui text-label-ui text-primary hover:opacity-70 transition-opacity">LinkedIn</a>
        <a href="#" className="font-label-ui text-label-ui text-primary hover:opacity-70 transition-opacity">X</a>
      </div>

      <div className="absolute bottom-12 left-12 z-20">
        <p className="font-body-lg text-[#F3C19D] font-bold">
          Global Strategic Advisory
        </p>
        <p className="font-body-md text-[#F3C19D] max-w-[300px] mt-2">
          Architects of diversified excellence since 2019. 
          Building the future of infrastructure and real estate.
        </p>
      </div>
      
      <div className="absolute bottom-12 right-12 z-20 text-right">
        <p className="font-label-caps text-label-caps text-[#F3C19D] mb-4">Website made using:</p>
        <div className="flex flex-col gap-2 justify-end">
          <span className="font-label-ui text-label-ui text-[#F3C19D]">React & Vite</span>
          <span className="font-label-ui text-label-ui text-[#F3C19D]">Tailwind CSS</span>
          <span className="font-label-ui text-label-ui text-[#F3C19D]">Framer Motion</span>
          <span className="font-label-ui text-label-ui text-[#F3C19D]">WebGL / Three.js</span>
        </div>
        </div>
      </section>

      {/* Final Copyright Footer */}
      <footer className="w-full bg-[#0a0a0a] py-6 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center z-10">
        <p className="font-label-caps text-[11px] leading-[16px] tracking-[0.15em] font-medium text-[#888888] uppercase text-center md:text-left mb-4 md:mb-0">
          © 2026 VB ASSOCIATES. All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="font-label-caps text-[11px] leading-[16px] tracking-[0.15em] font-medium text-[#888888] uppercase text-center md:text-right">
            Designed & developed by <span className="text-[#F3C19D]">Acala Solutions</span>.
          </p>
          <div className="flex gap-4 items-center opacity-70">
            {/* WhatsApp */}
            <a href="#" className="text-[#888888] hover:text-[#F3C19D] transition-colors" aria-label="WhatsApp">
              <svg viewBox="0 0 448 512" fill="currentColor" width="16" height="16">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>
            {/* Gmail */}
            <a href="#" className="text-[#888888] hover:text-[#F3C19D] transition-colors" aria-label="Gmail">
              <svg viewBox="0 0 512 512" fill="currentColor" width="16" height="16">
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-[#888888] hover:text-[#F3C19D] transition-colors" aria-label="LinkedIn">
              <svg viewBox="0 0 448 512" fill="currentColor" width="16" height="16">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MegaFooter;
