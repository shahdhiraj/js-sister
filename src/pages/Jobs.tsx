import React from 'react';
import {
  Search,
  MapPin,
  Briefcase,
  Bookmark,
  Building,
  Filter,
  ChevronDown } from
'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Magnetic } from
'../components/ui/motion';
const JOBS = [
{
  id: 1,
  title: 'Senior Mathematics Teacher',
  school: 'Kathmandu Valley School',
  location: 'Kathmandu',
  type: 'Full Time',
  salary: 'Rs. 45,000 - 60,000',
  isNew: true,
  posted: '2 hours ago'
},
{
  id: 2,
  title: 'Primary English Teacher',
  school: 'Everest Academy',
  location: 'Lalitpur',
  type: 'Full Time',
  salary: 'Rs. 35,000 - 45,000',
  isNew: false,
  posted: '1 day ago'
},
{
  id: 3,
  title: 'Science Coordinator',
  school: 'Global Public School',
  location: 'Pokhara',
  type: 'Contract',
  salary: 'Negotiable',
  isNew: true,
  posted: '5 hours ago'
},
{
  id: 4,
  title: 'Computer Science Instructor',
  school: 'Himalayan Boarding',
  location: 'Bhaktapur',
  type: 'Part Time',
  salary: 'Rs. 25,000 - 30,000',
  isNew: false,
  posted: '2 days ago'
},
{
  id: 5,
  title: 'Social Studies Teacher',
  school: 'Sunshine School',
  location: 'Kathmandu',
  type: 'Full Time',
  salary: 'Rs. 30,000 - 40,000',
  isNew: false,
  posted: '3 days ago'
},
{
  id: 6,
  title: 'ECA Coordinator',
  school: 'Pioneer Academy',
  location: 'Lalitpur',
  type: 'Full Time',
  salary: 'Rs. 40,000 - 50,000',
  isNew: false,
  posted: '1 week ago'
}];

export function Jobs() {
  return (
    <div className="min-h-screen bg-surface-muted pb-24">
      {/* Search Header */}
      <section className="bg-surface-strong pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h1 className="text-3xl md:text-4xl font-bold text-surface-base mb-6">
              Find Your Next Teaching Role
            </h1>
            <div className="bg-surface-base p-2 rounded-xl shadow-3 flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative group">
                <Input
                  icon={
                  <Search className="w-5 h-5 text-text-tertiary group-focus-within:text-surface-strong transition-colors" />
                  }
                  placeholder="Job title, subject, or keyword"
                  className="border-none shadow-none focus-visible:ring-0 h-12 text-lg bg-transparent" />
                
              </div>
              <div className="hidden md:block w-px bg-border-default my-2"></div>
              <div className="flex-1 relative group">
                <Input
                  icon={
                  <MapPin className="w-5 h-5 text-text-tertiary group-focus-within:text-surface-strong transition-colors" />
                  }
                  placeholder="Location or district"
                  className="border-none shadow-none focus-visible:ring-0 h-12 text-lg bg-transparent" />
                
              </div>
              <Button variant="accent" className="h-12 px-8 text-lg">
                Search Jobs
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 shrink-0">
            <FadeIn
              delay={0.2}
              className="bg-surface-base rounded-xl border border-border-default p-5 sticky top-24">
              
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-surface-strong flex items-center gap-2">
                  <Filter className="w-4 h-4" /> Filters
                </h2>
                <button className="text-sm text-surface-accent hover:underline">
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-sm text-surface-strong mb-3">
                    Job Type
                  </h3>
                  <div className="space-y-2">
                    {['Full Time', 'Part Time', 'Contract', 'Temporary'].map(
                      (type) =>
                      <label
                        key={type}
                        className="flex items-center gap-2 cursor-pointer group">
                        
                          <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-border-default text-surface-strong focus:ring-focus-ring" />
                        
                          <span className="text-sm text-text-secondary group-hover:text-surface-strong transition-colors">
                            {type}
                          </span>
                        </label>

                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-border-muted">
                  <h3 className="font-semibold text-sm text-surface-strong mb-3">
                    Subject Area
                  </h3>
                  <div className="space-y-2">
                    {[
                    'Mathematics',
                    'Science',
                    'English',
                    'Social Studies',
                    'Computer Science'].
                    map((subject) =>
                    <label
                      key={subject}
                      className="flex items-center gap-2 cursor-pointer group">
                      
                        <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-border-default text-surface-strong focus:ring-focus-ring" />
                      
                        <span className="text-sm text-text-secondary group-hover:text-surface-strong transition-colors">
                          {subject}
                        </span>
                      </label>
                    )}
                  </div>
                  <button className="text-sm text-surface-accent mt-2 flex items-center gap-1">
                    Show more <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Job Listings */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-text-secondary">
                <span className="font-bold text-surface-strong">245</span> jobs
                found
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-secondary">Sort by:</span>
                <select className="bg-surface-base border border-border-default rounded-md text-sm py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-focus-ring text-surface-strong cursor-pointer">
                  <option>Most Recent</option>
                  <option>Salary (High to Low)</option>
                  <option>Relevance</option>
                </select>
              </div>
            </div>

            <StaggerContainer className="space-y-4">
              {JOBS.map((job) =>
              <StaggerItem key={job.id}>
                  <div className="group bg-surface-base rounded-xl p-6 shadow-sm border border-border-default hover:shadow-md hover:border-surface-accent/30 transition-all duration-300 flex flex-col md:flex-row gap-6 relative overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-surface-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="w-16 h-16 rounded-xl bg-surface-muted border border-border-muted flex items-center justify-center shrink-0 group-hover:bg-surface-strong group-hover:text-surface-accent transition-colors duration-300 relative z-10">
                      <Building className="w-8 h-8 text-text-tertiary group-hover:text-surface-accent transition-colors" />
                    </div>

                    <div className="flex-1 relative z-10">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-surface-strong group-hover:text-surface-accent transition-colors cursor-pointer">
                              {job.title}
                            </h3>
                            {job.isNew &&
                          <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider border border-green-200">
                                New
                              </span>
                          }
                          </div>
                          <p className="text-text-secondary font-medium">
                            {job.school}
                          </p>
                        </div>
                        <button className="text-text-tertiary hover:text-surface-accent transition-colors self-start hidden md:block">
                          <Bookmark className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-text-secondary mt-4">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-text-tertiary" />{' '}
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-text-tertiary" />{' '}
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5 font-medium text-surface-strong">
                          {job.salary}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-row md:flex-col justify-between items-center md:items-end shrink-0 border-t md:border-t-0 md:border-l border-border-muted pt-4 md:pt-0 md:pl-6 relative z-10">
                      <span className="text-xs text-text-tertiary">
                        {job.posted}
                      </span>
                      <Magnetic>
                        <Button
                        variant="primary"
                        className="shadow-1 group-hover:bg-surface-accent group-hover:text-surface-strong transition-colors">
                        
                          Apply Now
                        </Button>
                      </Magnetic>
                    </div>
                  </div>
                </StaggerItem>
              )}
            </StaggerContainer>

            <div className="mt-10 flex justify-center">
              <Button variant="outline" className="w-full md:w-auto">
                Load More Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>);

}