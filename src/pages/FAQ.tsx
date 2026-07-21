import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ChevronDown,
  MessageCircle,
  HelpCircle,
  Book,
  ShieldAlert } from
'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/ui/motion';
const FAQS = [
{
  category: 'General',
  q: 'How does js-sister Teachers Bank work?',
  a: 'We are a specialized platform connecting qualified teachers with schools across Nepal. Teachers can create profiles and apply for jobs, while schools can post vacancies and search our database for the perfect candidates.'
},
{
  category: 'General',
  q: 'Is the platform free to use?',
  a: 'Creating a profile and browsing jobs is completely free for teachers. Schools have access to different subscription tiers based on their hiring needs.'
},
{
  category: 'For Teachers',
  q: 'How do I make my profile stand out?',
  a: 'Ensure your profile is 100% complete. Add a professional photo, detail your teaching experience, list your certifications, and request reviews from past employers or colleagues.'
},
{
  category: 'For Teachers',
  q: 'Can I apply to multiple jobs at once?',
  a: 'Yes, you can apply to as many vacancies as you like, provided you meet the minimum qualifications specified by the school.'
},
{
  category: 'For Schools',
  q: 'How do I post a job vacancy?',
  a: 'Once registered and verified as a school, navigate to your dashboard and click "Post a Job". Fill in the details, requirements, and salary range, then publish.'
},
{
  category: 'For Schools',
  q: 'How does the AI Matching work?',
  a: 'Our system analyzes the requirements of your job post against the skills, experience, and location of teachers in our database to recommend the most suitable candidates instantly.'
}];

const CATEGORIES = [
{
  id: 'All',
  icon: HelpCircle
},
{
  id: 'General',
  icon: Book
},
{
  id: 'For Teachers',
  icon: MessageCircle
},
{
  id: 'For Schools',
  icon: ShieldAlert
}];

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch =
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
    activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <div className="min-h-screen bg-surface-muted pb-24">
      {/* Hero Section */}
      <section className="bg-surface-muted text-surface-strong pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface-accent/5 via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How can we help you?
            </h1>
            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              Search our knowledge base or browse categories below to find
              answers to your questions.
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Input
                icon={<Search className="w-5 h-5 text-text-tertiary" />}
                placeholder="Search for answers..."
                className="h-14 text-lg pl-12 bg-surface-base text-text-primary border-none shadow-3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
              
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 -mt-8 relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Categories */}
          <FadeIn
            delay={0.2}
            className="bg-surface-base rounded-xl p-2 shadow-2 border border-border-default flex flex-wrap md:flex-nowrap gap-2 mb-12">
            
            {CATEGORIES.map((cat) =>
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(null);
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${activeCategory === cat.id ? 'bg-surface-strong text-surface-accent' : 'text-text-secondary hover:bg-surface-muted hover:text-surface-strong'}`}>
              
                <cat.icon className="w-4 h-4" />
                {cat.id}
              </button>
            )}
          </FadeIn>

          {/* Accordion */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.length > 0 ?
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={faq.q}
                    initial={{
                      opacity: 0,
                      y: 10
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    exit={{
                      opacity: 0,
                      y: -10
                    }}
                    transition={{
                      duration: 0.2
                    }}
                    className="bg-surface-base border border-border-default rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    
                      <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring">
                      
                        <span className="font-bold text-surface-strong text-lg pr-8">
                          {faq.q}
                        </span>
                        <motion.div
                        animate={{
                          rotate: isOpen ? 180 : 0
                        }}
                        transition={{
                          duration: 0.2
                        }}
                        className="shrink-0 text-text-tertiary">
                        
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isOpen &&
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
                          duration: 0.3,
                          ease: 'easeInOut'
                        }}>
                        
                            <div className="px-6 pb-6 pt-0 text-text-secondary leading-relaxed border-t border-border-muted mt-2 pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                      }
                      </AnimatePresence>
                    </motion.div>);

              }) :

              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                className="text-center py-12 bg-surface-base rounded-xl border border-border-default">
                
                  <HelpCircle className="w-12 h-12 text-text-tertiary mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-bold text-surface-strong mb-2">
                    No results found
                  </h3>
                  <p className="text-text-secondary">
                    We couldn't find any FAQs matching your search.
                  </p>
                  <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSearchQuery('')}>
                  
                    Clear Search
                  </Button>
                </motion.div>
              }
            </AnimatePresence>
          </div>

          {/* Still need help CTA */}
          <FadeIn
            delay={0.4}
            className="mt-16 bg-surface-accent/10 border border-surface-accent/20 rounded-2xl p-8 text-center">
            
            <h3 className="text-2xl font-bold text-surface-strong mb-3">
              Still have questions?
            </h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
            <Button variant="primary">Contact Support</Button>
          </FadeIn>
        </div>
      </div>
    </div>);

}
