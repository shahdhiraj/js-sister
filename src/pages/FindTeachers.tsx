import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/motion';
export function FindTeachers() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Mathematics', 'Science', 'English', 'Primary'];
  return (
    <div className="pt-24 pb-20 bg-surface-muted min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-surface-strong mb-4">
            Find Exceptional Teachers
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Browse our curated network of verified educators ready to join your
            institution.
          </p>
        </FadeIn>

        {/* Search & Filter Bar */}
        <FadeIn
          delay={0.2}
          className="bg-surface-base p-4 rounded-2xl shadow-2 border border-border-default mb-10 flex flex-col md:flex-row gap-4">
          
          <div className="flex-1 relative">
            <Input
              icon={<Search className="h-5 w-5" />}
              placeholder="Search by subject, name, or keyword..."
              className="h-12 bg-surface-muted/50 border-transparent focus-visible:bg-surface-base" />
            
          </div>
          <div className="flex-1 relative">
            <Input
              icon={<MapPin className="h-5 w-5" />}
              placeholder="Location or District"
              className="h-12 bg-surface-muted/50 border-transparent focus-visible:bg-surface-base" />
            
          </div>
          <Button variant="accent" className="h-12 px-8">
            Search
          </Button>
          <Button variant="outline" className="h-12 px-4 md:hidden">
            <Filter className="h-5 w-5 mr-2" /> Filters
          </Button>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="bg-surface-base p-6 rounded-2xl shadow-1 border border-border-default sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-surface-strong">Filters</h3>
                <button className="text-sm text-surface-accent hover:underline">
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm text-text-secondary mb-3 uppercase tracking-wider">
                    Subject
                  </h4>
                  <div className="space-y-2">
                    {[
                    'Mathematics',
                    'Science',
                    'English',
                    'Computer',
                    'Social Studies'].
                    map((subj) =>
                    <label
                      key={subj}
                      className="flex items-center gap-3 cursor-pointer group">
                      
                        <div className="w-5 h-5 rounded border border-border-default flex items-center justify-center group-hover:border-surface-accent transition-colors">
                          {/* Checkbox mock */}
                        </div>
                        <span className="text-text-primary group-hover:text-surface-strong">
                          {subj}
                        </span>
                      </label>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm text-text-secondary mb-3 uppercase tracking-wider">
                    Experience
                  </h4>
                  <div className="space-y-2">
                    {['0-2 Years', '3-5 Years', '5-10 Years', '10+ Years'].map(
                      (exp) =>
                      <label
                        key={exp}
                        className="flex items-center gap-3 cursor-pointer group">
                        
                          <div className="w-5 h-5 rounded-full border border-border-default flex items-center justify-center group-hover:border-surface-accent transition-colors">
                            {/* Radio mock */}
                          </div>
                          <span className="text-text-primary group-hover:text-surface-strong">
                            {exp}
                          </span>
                        </label>

                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {filters.map((f) =>
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === f ? 'bg-surface-strong text-surface-base shadow-2' : 'bg-surface-base text-text-secondary border border-border-default hover:border-surface-strong hover:text-surface-strong'}`}>
                
                  {f}
                </button>
              )}
            </div>

            {/* Teacher Grid */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <StaggerItem key={i}>
                  <motion.div
                  whileHover={{
                    y: -5
                  }}
                  className="bg-surface-base rounded-2xl p-6 shadow-1 border border-border-default hover:shadow-3 transition-all duration-300 flex flex-col h-full group">
                  
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 rounded-full bg-surface-muted border-2 border-surface-base shadow-sm flex items-center justify-center overflow-hidden">
                        <img
                        src={`https://i.pravatar.cc/150?img=${i + 10}`}
                        alt="Teacher"
                        className="w-full h-full object-cover" />
                      
                      </div>
                      <div className="flex items-center gap-1 bg-surface-accent/10 text-surface-strong px-2 py-1 rounded-md text-xs font-bold">
                        <Star className="h-3 w-3 fill-surface-accent text-surface-accent" />{' '}
                        4.9
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-surface-strong mb-1 group-hover:text-surface-accent transition-colors">
                      Teacher Name {i}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4">
                      M.Sc. Mathematics • 5 Yrs Exp
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-2 py-1 bg-surface-muted rounded text-xs text-text-secondary border border-border-muted">
                        High School
                      </span>
                      <span className="px-2 py-1 bg-surface-muted rounded text-xs text-text-secondary border border-border-muted">
                        Kathmandu
                      </span>
                    </div>

                    <div className="mt-auto pt-4 border-t border-border-muted flex gap-3">
                      <Button variant="outline" className="flex-1">
                        View Profile
                      </Button>
                      <Button variant="primary" className="flex-1">
                        Message
                      </Button>
                    </div>
                  </motion.div>
                </StaggerItem>
              )}
            </StaggerContainer>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="rounded-full px-8">
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}