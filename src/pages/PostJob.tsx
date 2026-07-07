import React from 'react';
import {
  Zap,
  Users,
  ShieldCheck,
  MapPin,
  Briefcase } from
'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Magnetic } from
'../components/ui/motion';
export function PostJob() {
  return (
    <div className="min-h-screen bg-surface-muted pb-24">
      {/* Hero Section */}
      <section className="bg-surface-strong text-surface-base pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-surface-accent/20 via-transparent to-transparent opacity-60"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hire the Best Teachers <br />{' '}
                <span className="text-surface-accent">Faster Than Ever</span>
              </h1>
              <p className="text-xl text-surface-muted/80 mb-10 max-w-2xl leading-relaxed">
                Reach thousands of qualified educators across Nepal. Post your
                vacancy today and let our AI matching system find your perfect
                candidate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Magnetic>
                  <Button
                    variant="accent"
                    size="lg"
                    className="h-14 px-8 text-lg shadow-2 w-full sm:w-auto">
                    
                    Start Hiring Now
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 text-lg border-surface-muted/30 text-surface-base hover:bg-surface-base hover:text-surface-strong w-full sm:w-auto">
                    
                    View Pricing
                  </Button>
                </Magnetic>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="container mx-auto px-4 md:px-6 -mt-16 relative z-20 mb-24">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
          {
            icon: Zap,
            title: 'Instant AI Matching',
            desc: 'Our algorithm instantly connects your job post with the most qualified teachers in our database.'
          },
          {
            icon: Users,
            title: 'Largest Talent Pool',
            desc: "Access Nepal's largest network of verified, experienced, and passionate educators."
          },
          {
            icon: ShieldCheck,
            title: 'Verified Profiles',
            desc: 'Every teacher profile is manually reviewed to ensure authenticity and quality.'
          }].
          map((benefit, i) =>
          <StaggerItem key={i}>
              <div className="bg-surface-base rounded-2xl p-8 shadow-2 border border-border-default h-full hover:shadow-4 transition-all duration-300 group cursor-pointer hover:-translate-y-1 hover:border-surface-accent/50">
                <div className="w-14 h-14 rounded-xl bg-surface-muted flex items-center justify-center mb-6 border border-border-muted group-hover:bg-surface-accent/10 group-hover:scale-110 group-hover:border-surface-accent/30 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-surface-strong group-hover:text-surface-accent transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-surface-strong mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </StaggerItem>
          )}
        </StaggerContainer>
      </section>

      {/* Form Preview & Timeline */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Form Preview */}
          <FadeIn
            direction="right"
            className="bg-surface-base rounded-2xl p-8 shadow-3 border border-border-default relative group cursor-pointer hover:border-surface-accent/30 transition-colors duration-500">
            
            <div className="absolute -top-4 -right-4 bg-surface-accent text-surface-strong text-xs font-bold px-3 py-1 rounded-full shadow-1 uppercase tracking-wide group-hover:scale-110 group-hover:shadow-3 transition-all duration-300">
              Preview
            </div>
            <h3 className="text-2xl font-bold text-surface-strong mb-6">
              Post a Vacancy
            </h3>
            <div className="space-y-5 opacity-80 pointer-events-none group-hover:opacity-100 transition-opacity duration-500">
              <div>
                <label className="block text-sm font-medium text-surface-strong mb-1.5">
                  Job Title
                </label>
                <Input placeholder="e.g. Senior Science Teacher" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-surface-strong mb-1.5">
                    Location
                  </label>
                  <Input
                    icon={<MapPin className="w-4 h-4" />}
                    placeholder="City or District" />
                  
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-strong mb-1.5">
                    Job Type
                  </label>
                  <Input
                    icon={<Briefcase className="w-4 h-4" />}
                    placeholder="Full Time" />
                  
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-surface-strong mb-1.5">
                  Description
                </label>
                <div className="w-full h-24 rounded-md border border-border-default bg-surface-base p-3 text-text-tertiary text-sm">
                  Describe the role, responsibilities, and requirements...
                </div>
              </div>
              <Button variant="primary" className="w-full h-12">
                Publish Job
              </Button>
            </div>
          </FadeIn>

          {/* Hiring Timeline */}
          <FadeIn direction="left">
            <h2 className="text-3xl md:text-4xl font-bold text-surface-strong mb-6">
              The Hiring Process
            </h2>
            <p className="text-lg text-text-secondary mb-10">
              From posting a job to making an offer, our platform streamlines
              every step of your recruitment journey.
            </p>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border-default">
              {[
              {
                step: '1',
                title: 'Create Your Post',
                desc: 'Fill out the details of your vacancy in our easy-to-use form.'
              },
              {
                step: '2',
                title: 'AI Recommendations',
                desc: 'Instantly receive a shortlist of candidates matching your criteria.'
              },
              {
                step: '3',
                title: 'Review & Interview',
                desc: 'Review applications, communicate directly, and schedule interviews.'
              },
              {
                step: '4',
                title: 'Hire the Best',
                desc: 'Make an offer and welcome your new teacher to the team.'
              }].
              map((item, i) =>
              <div
                key={i}
                className="relative flex items-center justify-between md:even:flex-row-reverse group cursor-pointer">
                
                  {/* Bubble - Absolute on desktop to ensure perfect centerline alignment */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-surface-base bg-surface-strong text-surface-accent font-bold shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 shadow-2 z-10 group-hover:bg-surface-accent group-hover:text-surface-strong group-hover:scale-125 transition-all duration-300">
                    {item.step}
                  </div>
                  
                  {/* Spacer for desktop flex layout */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)] shrink-0"></div>
                  
                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border-default bg-surface-base shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:border-surface-accent/50 group-hover:-translate-y-1">
                    <h3 className="font-bold text-surface-strong text-xl mb-2 group-hover:text-surface-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>);

}