import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X, Search as SearchIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { Magnetic } from '../ui/motion';
import { useAuth } from '../../lib/AuthContext';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { user, role } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Find Teachers',
    path: '/teachers'
  },
  {
    name: 'Schools',
    path: '/schools'
  },
  {
    name: 'Pricing',
    path: '/pricing'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <>
      <motion.header
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 bg-surface-base/90 backdrop-blur-md border-b border-border-default/50 ${isScrolled ? 'shadow-1 py-1' : 'py-2'}`}>
        
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <img src="/logo.png" alt="Jobs Sniper" className="h-10 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) =>
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-sm font-medium transition-colors group py-2 ${location.pathname === item.path ? 'text-surface-strong' : 'text-text-secondary hover:text-surface-strong'}`}>
              
                {item.name}
                <span
                className={`absolute bottom-0 left-0 h-0.5 bg-surface-accent transition-all duration-300 rounded-full ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}>
              </span>
              </Link>
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-text-secondary hover:text-surface-strong transition-colors rounded-full hover:bg-surface-muted"
              aria-label="Search">
              
              <SearchIcon className="h-5 w-5" />
            </button>
            {user && role !== 'guest' ? (
              <Link to="/dashboard">
                <Button variant="ghost" className="hover:bg-surface-muted/80">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="ghost" className="hover:bg-surface-muted/80">
                  Login
                </Button>
              </Link>
            )}
            <Magnetic>
              <Link to="/post-job" tabIndex={-1}>
                <Button
                  variant="accent"
                  className="shadow-2 hover:shadow-3 transition-shadow">
                  
                  Post a Job
                </Button>
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-text-secondary hover:text-surface-strong transition-colors">
              
              <SearchIcon className="h-5 w-5" />
            </button>
            <button
              className="p-2 text-text-secondary hover:text-text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu">
              
              {isMobileMenuOpen ?
              <X className="h-6 w-6" /> :

              <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen &&
          <motion.div
            initial={{
              height: 0,
              opacity: 0
            }}
            animate={{
              height: 'auto',
              opacity: 1
            }}
            exit={{
              height: 0,
              opacity: 0
            }}
            className="md:hidden border-t border-border-default bg-surface-base overflow-hidden shadow-3">
            
              <div className="p-4 flex flex-col gap-4">
                {navLinks.map((item) =>
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium p-2 rounded-md transition-colors ${location.pathname === item.path ? 'bg-surface-muted text-surface-strong' : 'text-text-secondary hover:bg-surface-muted hover:text-surface-strong'}`}>
                
                    {item.name}
                  </Link>
              )}
                <div className="flex flex-col gap-2 pt-4 border-t border-border-muted">
                  {user && role !== 'guest' ? (
                    <Link to="/dashboard" className="w-full">
                      <Button variant="outline" className="w-full">
                        Dashboard
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/login" className="w-full">
                      <Button variant="outline" className="w-full">
                        Login
                      </Button>
                    </Link>
                  )}
                  <Link to="/post-job" className="w-full">
                    <Button variant="accent" className="w-full">
                      Post a Job
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </motion.header>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-[60] bg-surface-base/95 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          
            <div className="w-full max-w-3xl relative">
              <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute -top-12 right-0 p-2 text-text-secondary hover:text-surface-strong">
              
                <X className="h-8 w-8" />
              </button>
              <motion.div
              initial={{
                y: -20,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{
                delay: 0.1
              }}>
              
                <div className="relative">
                  <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-text-tertiary" />
                  <input
                  autoFocus
                  type="text"
                  placeholder="Search for teachers, schools, or jobs..."
                  className="w-full h-16 pl-14 pr-4 rounded-xl border-2 border-border-default bg-surface-base text-xl focus:outline-none focus:border-surface-accent shadow-2 transition-colors" />
                
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="text-sm text-text-secondary py-1">
                    Popular:
                  </span>
                  {[
                'Mathematics',
                'Kathmandu',
                'Primary Teacher',
                'Science'].
                map((term) =>
                <button
                  key={term}
                  className="px-3 py-1 rounded-full bg-surface-muted border border-border-default text-sm text-text-secondary hover:bg-surface-strong hover:text-surface-base transition-colors">
                  
                      {term}
                    </button>
                )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}
