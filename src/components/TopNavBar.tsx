import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'ABOUT' },
  { href: '#services', label: 'SERVICES' },
  { href: '#disciplines', label: 'DISCIPLINES' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#journal', label: 'JOURNAL' },
];

const TopNavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for navbar
      
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.href);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-outline-variant">
      <div className="flex justify-between items-center px-margin-desktop py-3 w-full max-w-container-max mx-auto">
        <a className="font-headline-md text-headline-md text-on-surface tracking-tighter" href="#">VB ASSOCIATES</a>
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a 
                key={link.href}
                className={`font-label-caps text-label-caps uppercase tracking-widest transition-all duration-300 ease-in-out ${isActive ? 'text-on-surface font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-on-surface'}`} 
                href={link.href}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <button className="hidden md:block font-label-caps text-label-caps uppercase tracking-widest bg-on-surface text-background px-8 py-2 hover:bg-primary hover:text-on-primary transition-colors duration-300">
          CONTACT GROUP
        </button>
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default TopNavBar;
