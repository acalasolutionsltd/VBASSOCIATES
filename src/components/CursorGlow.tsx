import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[50]"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
      animate={{
        background: `radial-gradient(15px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(78, 66, 95, 1), transparent 80%)`,
      }}
      transition={{ type: 'tween', duration: 0 }}
    />
  );
};

export default CursorGlow;
