import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  return (
    <section className="relative py-section-gap px-margin-desktop bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl w-full"
        >
          <h2 className="font-headline-lg text-headline-lg mb-12 uppercase text-on-surface">CONNECT WITH <span className="text-primary">THE BOARD</span></h2>
          <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <label className="block font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">FULL NAME</label>
              <input className="w-full bg-transparent border-0 border-b border-outline py-4 px-0 focus:ring-0 focus:border-primary transition-all text-on-surface font-body-lg placeholder:text-outline focus:outline-none" type="text" />
            </div>
            <div className="relative">
              <label className="block font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">CORPORATE EMAIL</label>
              <input className="w-full bg-transparent border-0 border-b border-outline py-4 px-0 focus:ring-0 focus:border-primary transition-all text-on-surface font-body-lg placeholder:text-outline focus:outline-none" type="email" />
            </div>
            <div className="relative">
              <label className="block font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">NATURE OF INQUIRY</label>
              <textarea className="w-full bg-transparent border-0 border-b border-outline py-4 px-0 focus:ring-0 focus:border-primary transition-all text-on-surface font-body-lg placeholder:text-outline focus:outline-none" rows={3}></textarea>
            </div>
            <button className="group flex items-center gap-4 bg-primary text-on-primary px-16 py-6 font-label-caps text-label-caps uppercase hover:bg-primary-hover transition-colors tactical-mask" type="submit">
              SEND BRIEF
              <span className="material-symbols-outlined vertical-drive-arrow">send</span>
            </button>
          </form>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-24 md:mt-0 space-y-12"
        >
          <div>
            <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">GLOBAL HEADQUARTERS</p>
            <p className="font-body-lg text-body-lg text-on-surface max-w-[280px]">
              Level 88, Monolith Tower<br/>
              Financial District<br/>
              London, EC2V 5AH
            </p>
          </div>
          <div>
            <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">CONTACT</p>
            <p className="font-body-lg text-body-lg text-on-surface">
              T: +44 20 7946 0120<br/>
              E: office@vbassociates.com
            </p>
          </div>
          <div className="flex gap-6 pt-6">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">lan</span></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">security</span></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
