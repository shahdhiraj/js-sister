import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion } from
'framer-motion';
// --- Scroll Reveal ---
export const FadeIn = ({
  children,
  delay = 0,
  className = '',
  direction = 'up'
}: {children: React.ReactNode;delay?: number;className?: string;direction?: 'up' | 'down' | 'left' | 'right' | 'none';}) => {
  const directions = {
    up: {
      y: 40,
      x: 0
    },
    down: {
      y: -40,
      x: 0
    },
    left: {
      x: 40,
      y: 0
    },
    right: {
      x: -40,
      y: 0
    },
    none: {
      x: 0,
      y: 0
    }
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}>
      
      {children}
    </motion.div>);

};
// --- Staggered Reveal ---
export const StaggerContainer = ({
  children,
  className = '',
  delayChildren = 0.1,
  staggerChildren = 0.1
}: {children: React.ReactNode;className?: string;delayChildren?: number;staggerChildren?: number;}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren
          }
        }
      }}
      className={className}>
      
      {children}
    </motion.div>);

};
export const StaggerItem = ({
  children,
  className = ''



}: {children: React.ReactNode;className?: string;}) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className={className}>
      
      {children}
    </motion.div>);

};
// --- Word Reveal ---
export const WordReveal = ({
  text,
  className = '',
  delay = 0




}: {text: string;className?: string;delay?: number;}) => {
  const words = text.split(' ');
  const container = {
    hidden: {
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay * i
      }
    })
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20
    }
  };
  return (
    <motion.div
      style={{
        overflow: 'hidden',
        display: 'inline-flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}>
      
      {words.map((word, index) =>
      <motion.span
        variants={child}
        style={{
          marginRight: '0.25em'
        }}
        key={index}>
        
          {word}
        </motion.span>
      )}
    </motion.div>);

};
// --- Animated Number ---
export const AnimatedNumber = ({
  value,
  className = ''



}: {value: number;className?: string;}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5
  });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100
  });
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  useEffect(() => {
    return springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);
  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>);

};
// --- Magnetic Button Wrapper ---
export const Magnetic = ({
  children,
  className = ''



}: {children: React.ReactElement;className?: string;}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({
      x: middleX * 0.2,
      y: middleY * 0.2
    });
  };
  const reset = () => {
    setPosition({
      x: 0,
      y: 0
    });
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{
        x: position.x,
        y: position.y
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
      className={className}>
      
      {children}
    </motion.div>);

};
