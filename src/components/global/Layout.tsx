import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  MotionConfig,
  useReducedMotion,
  AnimatePresence,
  motion,
  useScroll,
  useSpring } from
'framer-motion';
import Lenis from 'lenis';
import { Toaster } from 'sonner';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
// --- Scroll Progress Indicator ---
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-surface-accent origin-left z-[60]"
      style={{
        scaleX
      }} />);


}
// --- Back to Top Button ---
function BackToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 500);
    });
  }, [scrollY]);
  return (
    <AnimatePresence>
      {isVisible &&
      <motion.button
        initial={{
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        exit={{
          opacity: 0,
          scale: 0.5
        }}
        onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        }
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-surface-strong text-surface-base shadow-3 hover:bg-surface-strong/90 transition-colors"
        aria-label="Back to top">
        
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      }
    </AnimatePresence>);

}
// --- WhatsApp Float ---
function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/1234567890" // Placeholder
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.1
      }}
      whileTap={{
        scale: 0.9
      }}
      className="fixed bottom-20 right-6 z-50 p-3 rounded-full bg-green-500 text-white shadow-3 hover:bg-green-600 transition-colors flex items-center justify-center"
      aria-label="Chat on WhatsApp">
      
      <MessageCircle className="h-6 w-6" />
    </motion.a>);

}
// --- Cursor Spotlight (Desktop Only) ---
function CursorSpotlight() {
  const prefersReducedMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    if (prefersReducedMotion || window.innerWidth < 768) return;
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [prefersReducedMotion]);
  if (
  prefersReducedMotion ||
  typeof window === 'undefined' ||
  window.innerWidth < 768)

  return null;
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      animate={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
      }} />);


}
// --- Main Layout ---
export function Layout() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const lenisRef = React.useRef<Lenis | null>(null);
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (prefersReducedMotion) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2
    });
    lenisRef.current = lenis;
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);
  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-surface-base text-text-primary overflow-hidden relative">
        <ScrollProgress />
        <CursorSpotlight />
        <Navbar />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -20
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}>
              
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
        <BackToTop />
        <WhatsAppFloat />
        <Toaster position="bottom-left" />
      </div>
    </MotionConfig>);

}