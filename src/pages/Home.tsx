import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useReducedMotion } from
'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Briefcase,
  Users,
  Building,
  ArrowRight,
  CheckCircle2,
  Star,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BookOpen,
  Globe } from
'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  WordReveal,
  AnimatedNumber,
  Magnetic } from
'../components/ui/motion';
const LIVE_FEED = [
'Kathmandu International School posted 4 jobs',
'ABC School hired a Mathematics Teacher',
'15 new teachers joined today',
'Everest Academy is reviewing applications'];

export function Home() {
  const [feedIndex, setFeedIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const ambient = prefersReducedMotion ? {} : undefined;
  useEffect(() => {
    const interval = setInterval(() => {
      setFeedIndex((prev) => (prev + 1) % LIVE_FEED.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center']
  });
  const pathLength = useTransform(timelineProgress, [0, 1], [0, 1]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  return (
    <>
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-surface-muted overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <motion.div
            animate={
            ambient ?? {
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }
            }
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-surface-accent/20 blur-[100px]" />
          
          <motion.div
            animate={
            ambient ?? {
              scale: [1, 1.5, 1],
              x: [0, -40, 0],
              y: [0, -50, 0]
            }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-surface-strong/10 blur-[120px]" />
          
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, layout: { type: "spring", stiffness: 300, damping: 30 } }}
              className="inline-flex items-center rounded-full border border-border-default bg-surface-base/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-text-secondary mb-8 shadow-1 overflow-hidden max-w-[90vw]">
              
              <motion.span layout className="flex h-2 w-2 rounded-full bg-surface-accent mr-3 animate-pulse shrink-0"></motion.span>
              <div className="relative h-5 overflow-hidden flex items-center justify-start">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={feedIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="truncate">
                    
                    {LIVE_FEED[feedIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-surface-strong mb-6 leading-[1.1] flex flex-col items-center">
              <WordReveal text="Find Your Perfect" delay={0.1} />
              
              <div className="flex flex-col md:flex-row items-center gap-x-3 md:gap-x-4 mt-2 md:mt-4">
                <motion.span
                  whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(var(--color-surface-accent), 0.5)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="text-surface-accent inline-block relative cursor-pointer group"
                >
                  <WordReveal text="Teaching Career" delay={0.4} />
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: 'circOut' }}
                    className="absolute -bottom-2 left-0 w-full h-2 bg-surface-accent/20 group-hover:bg-surface-accent/50 rounded-full origin-left transition-colors duration-300" />
                  
                </motion.span>
                <span className="inline-block">
                  <WordReveal text="in Nepal" delay={0.7} />
                </span>
              </div>
            </h1>

            <FadeIn delay={1.2}>
              <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
                Connecting Brilliant Teachers with Great Schools across Nepal.
                Find opportunities, apply with ease, and start your teaching
                journey.
              </p>
            </FadeIn>

            <FadeIn delay={1.4} className="w-full max-w-3xl">
              <motion.div
                whileHover={{
                  y: -2,
                  boxShadow: 'var(--shadow-4)'
                }}
                className="bg-surface-base/90 backdrop-blur-md p-2 md:p-3 rounded-xl shadow-3 border border-border-default/50 flex flex-col md:flex-row gap-2 md:gap-3 transition-all duration-300">
                
                <div className="flex-1 relative group">
                  <Input
                    icon={
                    <Search className="h-5 w-5 text-text-tertiary group-focus-within:text-surface-strong transition-colors" />
                    }
                    placeholder="Position or keyword..."
                    className="border-none shadow-none focus-visible:ring-0 bg-transparent h-12 text-lg" />
                  
                </div>
                <div className="hidden md:block w-px bg-border-default my-2"></div>
                <div className="flex-1 relative group">
                  <Input
                    icon={
                    <MapPin className="h-5 w-5 text-text-tertiary group-focus-within:text-surface-strong transition-colors" />
                    }
                    placeholder="Location"
                    className="border-none shadow-none focus-visible:ring-0 bg-transparent h-12 text-lg" />
                  
                </div>
                <Magnetic>
                  <Link to="/teachers" tabIndex={-1}>
                    <Button
                      variant="accent"
                      className="w-full md:w-auto md:px-8 h-12 text-lg shadow-2">
                      
                      Search Jobs
                    </Button>
                  </Link>
                </Magnetic>
              </motion.div>
            </FadeIn>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05, zIndex: 20 }}
          animate={
          ambient ?? {
            y: [-15, 15, -15]
          }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="hidden lg:flex absolute top-[25%] left-[5%] bg-surface-base p-4 rounded-xl shadow-3 border border-border-default/50 items-center gap-4 cursor-pointer">
          
          <div className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center text-surface-strong">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-bold text-surface-strong">
              Mathematics Teacher
            </p>
            <p className="text-xs text-text-secondary">Hired 2 hours ago</p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, zIndex: 20 }}
          animate={
          ambient ?? {
            y: [15, -15, 15]
          }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className="hidden lg:flex absolute bottom-[25%] right-[5%] bg-surface-base p-4 rounded-xl shadow-3 border border-border-default/50 items-center gap-4 cursor-pointer">
          
          <div className="w-12 h-12 rounded-full bg-surface-accent/20 flex items-center justify-center text-surface-accent">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-bold text-surface-strong">
              Profile Verified
            </p>
            <p className="text-xs text-text-secondary">Ready to apply</p>
          </div>
        </motion.div>
      </section>

      {/* Trusted By Logo Cloud */}
      <section className="py-12 bg-surface-base border-b border-border-muted">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-medium text-text-tertiary mb-8 uppercase tracking-wider">
            Trusted by 500+ leading institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Logos */}
            {[1, 2, 3, 4, 5].map((i) =>
            <div
              key={i}
              className="flex items-center gap-2 text-surface-strong font-bold text-xl">
              
                <Building className="h-8 w-8" /> School {i}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface-base relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
            {[
            {
              label: 'Active Vacancies',
              value: 472,
              suffix: '+',
              icon: Briefcase
            },
            {
              label: 'Partner Schools',
              value: 189,
              suffix: '+',
              icon: Building
            },
            {
              label: 'Registered Teachers',
              value: 945,
              suffix: '+',
              icon: Users
            }].
            map((stat, i) =>
            <StaggerItem key={i}>
                <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.02
                }}
                className="bg-surface-base rounded-2xl p-8 text-center shadow-1 hover:shadow-3 border border-border-default transition-all duration-300 flex flex-col items-center group">
                
                  <div className="p-4 bg-surface-muted rounded-full mb-6 text-surface-strong group-hover:bg-surface-strong group-hover:text-surface-accent transition-colors duration-300">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-4xl font-bold text-surface-strong mb-2 flex items-center justify-center">
                    <AnimatedNumber value={stat.value} />
                    {stat.suffix}
                  </h3>
                  <p className="text-text-secondary font-medium text-lg">
                    {stat.label}
                  </p>
                </motion.div>
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-surface-muted">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold text-surface-strong mb-4">
              Explore Categories
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Find the perfect role that matches your expertise.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
            {
              name: 'Mathematics',
              count: 120,
              icon: BookOpen
            },
            {
              name: 'Science',
              count: 85,
              icon: Globe
            },
            {
              name: 'English',
              count: 150,
              icon: BookOpen
            },
            {
              name: 'Computer Science',
              count: 60,
              icon: Globe
            },
            {
              name: 'Social Studies',
              count: 90,
              icon: BookOpen
            },
            {
              name: 'Primary Level',
              count: 200,
              icon: Users
            },
            {
              name: 'ECA Instructors',
              count: 45,
              icon: Star
            },
            {
              name: 'Administration',
              count: 30,
              icon: Building
            }].
            map((cat, i) =>
            <StaggerItem key={i}>
                <Link to="/teachers" className="block">
                  <motion.div
                  whileHover={{
                    y: -4
                  }}
                  className="bg-surface-base p-6 rounded-xl border border-border-default shadow-1 hover:shadow-2 hover:border-surface-accent/50 transition-all group flex flex-col items-center text-center">
                  
                    <cat.icon className="h-8 w-8 text-text-tertiary group-hover:text-surface-accent mb-4 transition-colors" />
                    <h3 className="font-bold text-surface-strong mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {cat.count} Jobs
                    </p>
                  </motion.div>
                </Link>
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* AI Matching Feature */}
      <section className="py-24 bg-surface-base overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <FadeIn direction="right" className="flex-1">
              <div className="inline-flex items-center rounded-full bg-surface-muted px-3 py-1 text-sm font-medium text-surface-strong mb-6 border border-border-default">
                <Sparkles className="h-4 w-4 mr-2 text-surface-accent" />
                Smart Recruitment
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-surface-strong mb-6 leading-tight">
                AI-Powered Matching for Perfect Fits
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Our intelligent algorithm analyzes teacher profiles, experience,
                and school requirements to suggest the most compatible matches,
                saving hours of manual screening.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                '98% Match Accuracy',
                'Instant Recommendations',
                'Skill-based Filtering'].
                map((item, i) =>
                <li
                  key={i}
                  className="flex items-center text-surface-strong font-medium">
                  
                    <CheckCircle2 className="h-5 w-5 mr-3 text-surface-accent" />
                    {item}
                  </li>
                )}
              </ul>
              <Magnetic>
                <Link to="/about" tabIndex={-1}>
                  <Button variant="outline" size="lg" className="shadow-1">
                    Learn More
                  </Button>
                </Link>
              </Magnetic>
            </FadeIn>
            <FadeIn direction="left" className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-surface-accent/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 bg-surface-base rounded-2xl shadow-4 border border-border-default p-8 flex flex-col gap-6">
                  {/* Mock UI for AI Match */}
                  <div className="flex items-center justify-between border-b border-border-muted pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-surface-muted flex items-center justify-center">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">Sarah Jenkins</p>
                        <p className="text-xs text-text-secondary">
                          Math Teacher
                        </p>
                      </div>
                    </div>
                    <span className="text-surface-accent font-bold">
                      98% Match
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-surface-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{
                          width: 0
                        }}
                        whileInView={{
                          width: '98%'
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.5
                        }}
                        className="h-full bg-surface-accent" />
                      
                    </div>
                    <p className="text-xs text-text-secondary text-right">
                      Skills Alignment
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-surface-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{
                          width: 0
                        }}
                        whileInView={{
                          width: '90%'
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.7
                        }}
                        className="h-full bg-surface-accent" />
                      
                    </div>
                    <p className="text-xs text-text-secondary text-right">
                      Experience Match
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Cinematic "How It Works" Timeline */}
      <section
        className="py-32 bg-surface-muted relative overflow-hidden"
        ref={timelineRef}>
        
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl font-bold text-surface-strong mb-4">
              The Teacher Journey
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Your path to the perfect teaching position, visualized.
            </p>
          </FadeIn>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 -translate-y-1/2 z-0">
              <svg
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                className="overflow-visible">
                
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="var(--color-border-muted)"
                  strokeWidth="4"
                  strokeLinecap="round" />
                
                <motion.line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="var(--color-surface-accent)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{
                    pathLength,
                    transformOrigin: 'left'
                  }} />
                
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
              {
                step: '1',
                title: 'Create Profile',
                desc: 'Build your professional portfolio with your qualifications and experience.',
                icon: Users
              },
              {
                step: '2',
                title: 'AI Matching',
                desc: 'Our system highlights the best vacancies matching your exact skill set.',
                icon: Search
              },
              {
                step: '3',
                title: 'Get Hired',
                desc: 'Interview directly with schools and secure your dream position.',
                icon: CheckCircle2
              }].
              map((item, i) =>
              <div
                key={i}
                className="relative flex flex-col items-center text-center group cursor-pointer">
                
                  <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  viewport={{ once: true, margin: '-20%' }}
                  transition={{ delay: i * 0.2, type: 'spring', stiffness: 300, damping: 15 }}
                  className="w-24 h-24 rounded-full bg-surface-base border-8 border-surface-muted flex items-center justify-center text-surface-strong mb-8 shadow-2 group-hover:border-surface-accent group-hover:text-surface-accent transition-colors duration-300 relative z-10">
                  
                    <div className="absolute inset-0 rounded-full bg-surface-accent/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                    <item.icon className="h-8 w-8 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-surface-strong text-surface-accent flex items-center justify-center text-sm font-bold shadow-2 group-hover:bg-surface-accent group-hover:text-surface-strong transition-colors duration-300">
                      {item.step}
                    </div>
                  </motion.div>
                  <FadeIn delay={0.3 + i * 0.2}>
                    <h3 className="text-2xl font-bold text-surface-strong mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </FadeIn>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teachers (Preview) */}
      <section className="py-24 bg-surface-base">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-surface-strong mb-4">
                Top Talent
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl">
                Schools are actively hiring these verified professionals.
              </p>
            </div>
            <Magnetic>
              <Link to="/teachers" tabIndex={-1}>
                <Button
                  variant="outline"
                  className="shrink-0 bg-surface-base hover:bg-surface-base hover:border-surface-strong hover:text-surface-strong shadow-1">
                  
                  View All Teachers <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Magnetic>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) =>
            <StaggerItem key={i}>
                <motion.div
                whileHover={{
                  y: -8
                }}
                className="bg-surface-base rounded-2xl p-6 shadow-1 border border-border-default hover:shadow-4 transition-all duration-300 text-center">
                
                  <div className="w-24 h-24 mx-auto rounded-full bg-surface-muted mb-4 flex items-center justify-center border-4 border-surface-base shadow-2">
                    <Users className="h-10 w-10 text-text-tertiary" />
                  </div>
                  <h3 className="text-xl font-bold text-surface-strong mb-1">
                    Teacher Name {i}
                  </h3>
                  <p className="text-surface-accent font-medium text-sm mb-4">
                    Senior Science Teacher
                  </p>
                  <div className="flex justify-center gap-2 mb-6">
                    <span className="px-2 py-1 bg-surface-muted rounded text-xs text-text-secondary">
                      M.Sc. Physics
                    </span>
                    <span className="px-2 py-1 bg-surface-muted rounded text-xs text-text-secondary">
                      5 Yrs Exp
                    </span>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </motion.div>
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-strong text-surface-base overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface-accent/10 via-transparent to-transparent opacity-60 blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-surface-muted/80 text-lg max-w-2xl mx-auto">
              Hear from those who found their perfect match.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn direction="right">
              <div className="bg-surface-base/10 backdrop-blur-md p-8 rounded-2xl border border-surface-base/20">
                <div className="flex text-surface-accent mb-4">
                  {[1, 2, 3, 4, 5].map((star) =>
                  <Star key={star} className="h-5 w-5 fill-current" />
                  )}
                </div>
                <p className="text-lg leading-relaxed mb-6 italic">
                  "Brilliant Brain made finding a qualified math teacher
                  effortless. The AI matching saved us weeks of reviewing
                  resumes."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-base/20"></div>
                  <div>
                    <p className="font-bold">Principal Sharma</p>
                    <p className="text-sm text-surface-base/70">
                      Everest Academy
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-surface-base/10 backdrop-blur-md p-8 rounded-2xl border border-surface-base/20">
                <div className="flex text-surface-accent mb-4">
                  {[1, 2, 3, 4, 5].map((star) =>
                  <Star key={star} className="h-5 w-5 fill-current" />
                  )}
                </div>
                <p className="text-lg leading-relaxed mb-6 italic">
                  "I created my profile and within a week, I had three interview
                  requests from top schools. I'm now in my dream role!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-base/20"></div>
                  <div>
                    <p className="font-bold">Anita Thapa</p>
                    <p className="text-sm text-surface-base/70">
                      Science Teacher
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-surface-base">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl font-bold text-surface-strong mb-4">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {[
            {
              q: 'Is it free for teachers to register?',
              a: 'Yes, creating a profile and applying for jobs is completely free for teachers.'
            },
            {
              q: 'How do schools verify teacher profiles?',
              a: "We have a rigorous verification process where we check academic credentials and past experience before granting a 'Verified' badge."
            },
            {
              q: 'Can I hide my profile from my current employer?',
              a: 'Yes, you can choose to make your profile visible only to schools you apply to, or block specific institutions.'
            }].
            map((faq, i) =>
            <motion.div
              key={i}
              initial={false}
              className="border border-border-default rounded-xl overflow-hidden">
              
                <button
                className="w-full px-6 py-4 flex items-center justify-between bg-surface-base hover:bg-surface-muted transition-colors text-left"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                
                  <span className="font-bold text-surface-strong">{faq.q}</span>
                  {activeFaq === i ?
                <ChevronUp className="h-5 w-5 text-text-tertiary" /> :

                <ChevronDown className="h-5 w-5 text-text-tertiary" />
                }
                </button>
                <AnimatePresence>
                  {activeFaq === i &&
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
                  transition={{
                    duration: 0.3
                  }}>
                  
                      <div className="px-6 pb-4 text-text-secondary border-t border-border-muted pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                }
                </AnimatePresence>
              </motion.div>
            )}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="text-surface-accent font-medium hover:underline">
              
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-strong"></div>
        <motion.div
          animate={
          ambient ?? {
            rotate: [0, 90, 0],
            scale: [1, 1.5, 1]
          }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface-accent/20 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
        

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-surface-base tracking-tight">
              Ready to Advance Your <br className="hidden md:block" />
              <span className="text-surface-accent">Teaching Career?</span>
            </h2>
            <p className="text-white text-xl mb-12 max-w-2xl mx-auto font-medium">
              Join thousands of teachers who have found their ideal schools
              through Brilliant Brain Teachers Bank.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Magnetic>
                <Link to="/register-teacher" tabIndex={-1}>
                  <Button
                    variant="accent"
                    size="lg"
                    className="h-14 px-8 text-lg shadow-[0_0_40px_-10px_var(--color-surface-accent)] hover:shadow-[0_0_60px_-15px_var(--color-surface-accent)] transition-shadow w-full sm:w-auto">
                    
                    Register as Teacher
                  </Button>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link to="/register-school" tabIndex={-1}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 text-lg border-surface-muted/30 text-surface-base hover:bg-surface-base hover:text-surface-strong w-full sm:w-auto backdrop-blur-sm">
                    
                    Register as School
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </FadeIn>
        </div>
      </section>
    </>);

}