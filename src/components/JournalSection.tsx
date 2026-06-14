import React from 'react';
import { motion } from 'framer-motion';

const journalEntries = [
  {
    id: 1,
    date: 'JUN 14, 2026',
    category: 'PRESS RELEASE',
    title: 'VB Associates Announces £1.2B Infrastructure Expansion in the Middle East.',
  },
  {
    id: 2,
    date: 'MAY 28, 2026',
    category: 'MARKET INSIGHTS',
    title: 'The Future of High-Performance Engineering in the Era of Sustainability.',
  },
  {
    id: 3,
    date: 'MAY 02, 2026',
    category: 'REAL ESTATE',
    title: 'Topping Out Ceremony Held for The Apex Tower in Central London.',
  },
];

const JournalSection: React.FC = () => {
  return (
    <section id="journal" className="relative py-section-gap px-margin-desktop bg-transparent border-t border-outline overflow-hidden">
      <div className="relative z-10 max-w-container-max mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6"
        >
          <div>
            <span className="font-label-caps text-label-caps text-on-surface-variant mb-4 block">05. INSIGHTS</span>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">THE <span className="text-primary">JOURNAL</span></h2>
          </div>
          <button className="group flex items-center gap-4 border-b border-on-surface pb-2 text-sm font-label-caps tracking-widest uppercase hover:text-primary hover:border-primary transition-colors">
            READ ALL ARTICLES
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
          </button>
        </motion.div>

        {/* Editorial List Layout */}
        <div className="flex flex-col border-t border-on-surface/20">
          {journalEntries.map((entry, index) => (
            <motion.a 
              href="#"
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-16 border-b border-on-surface/20 hover:bg-surface-variant transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 w-full md:w-auto">
                <div className="w-32 flex flex-col gap-1">
                  <span className="font-label-caps text-xs opacity-60">{entry.date}</span>
                  <span className="font-label-caps text-[10px] text-primary">{entry.category}</span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight max-w-3xl group-hover:translate-x-4 transition-transform duration-500">
                  {entry.title}
                </h3>
              </div>
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-on-surface/20 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 mt-6 md:mt-0">
                <span className="material-symbols-outlined -rotate-45">arrow_forward</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
