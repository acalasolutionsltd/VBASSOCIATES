import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop py-12 w-full max-w-container-max mx-auto">
        <div className="mb-8 md:mb-0">
          <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tighter">VB ASSOCIATES</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8 md:mb-0">
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-200 uppercase" href="#">MOTORS</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-200 uppercase" href="#">REAL ESTATE</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-200 uppercase" href="#">CONSTRUCTIONS</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors duration-200 uppercase" href="#">CORPORATE RESOURCES</a>
        </div>
        <div className="text-center md:text-right">
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
            © 2024 VB ASSOCIATES. ALL RIGHTS RESERVED. <br/>TACTICAL PRECISION IN EXECUTION.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
