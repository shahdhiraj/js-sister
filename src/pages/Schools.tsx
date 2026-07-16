import React from 'react';
import {
  Building,
  ShieldCheck,
  Zap,
  BarChart3 } from
'lucide-react';
import { Button } from '../components/ui/Button';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Magnetic } from
'../components/ui/motion';
import { Link } from 'react-router-dom';
export function Schools() {
  return (
    <div className="pt-24 pb-20 bg-surface-base min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-surface-muted/50 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center rounded-full bg-surface-accent/10 px-3 py-1 text-sm font-medium text-surface-strong mb-6 border border-surface-accent/20">
                <Building className="h-4 w-4 mr-2 text-surface-accent" />
                For Educational Institutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-surface-strong mb-6 leading-tight">
                Hire the Best Teachers,{' '}
                <span className="text-surface-accent">Faster.</span>
              </h1>
              <p className="text-xl text-text-secondary mb-10 leading-relaxed">
                Access Nepal's largest pool of verified educators. Our AI-driven
                platform streamlines your recruitment process from posting to
                hiring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Magnetic>
                  <Link to="/post-job" tabIndex={-1}>
                    <Button
                      variant="accent"
                      size="lg"
                      className="h-14 px-8 text-lg shadow-2">
                      
                      Post a Job Now
                    </Button>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link to="/pricing" tabIndex={-1}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-14 px-8 text-lg">
                      
                      View Pricing
                    </Button>
                  </Link>
                </Magnetic>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold text-surface-strong mb-4">
              Why Schools Trust Us
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              title: 'Verified Profiles',
              desc: 'Every teacher profile undergoes a rigorous background and credential check.',
              icon: ShieldCheck
            },
            {
              title: 'AI Matching',
              desc: 'Our algorithm ranks candidates based on your specific school requirements.',
              icon: Zap
            },
            {
              title: 'Hiring Analytics',
              desc: 'Track your recruitment pipeline with comprehensive dashboard insights.',
              icon: BarChart3
            }].
            map((feature, i) =>
            <StaggerItem key={i}>
                <div className="bg-surface-muted p-8 rounded-2xl border border-border-default hover:border-surface-accent transition-colors group">
                  <div className="w-14 h-14 rounded-xl bg-surface-base shadow-1 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-7 w-7 text-surface-strong group-hover:text-surface-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-surface-strong mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-surface-strong text-surface-base">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
            {
              value: '500+',
              label: 'Partner Schools'
            },
            {
              value: '10k+',
              label: 'Verified Teachers'
            },
            {
              value: '48h',
              label: 'Average Time to Hire'
            },
            {
              value: '98%',
              label: 'Satisfaction Rate'
            }].
            map((stat, i) =>
            <FadeIn key={i} delay={i * 0.1}>
                <h4 className="text-4xl md:text-5xl font-bold text-surface-accent mb-2">
                  {stat.value}
                </h4>
                <p className="text-surface-muted/80 font-medium">
                  {stat.label}
                </p>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* Partner Schools and Vacancies Showcase */}
      <section className="py-24 bg-surface-base">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold text-surface-strong mb-4">
              Featured Partner Schools
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Explore opportunities from top educational institutions connected with our platform.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Everest International School',
                location: 'Kathmandu, Bagmati',
                vacancies: [
                  { title: 'Senior Science Teacher', type: 'Full-time' },
                  { title: 'Mathematics Teacher', type: 'Part-time' }
                ],
                logo: 'EIS'
              },
              {
                name: 'Himalayan Public Academy',
                location: 'Pokhara, Gandaki',
                vacancies: [
                  { title: 'English Teacher', type: 'Full-time' },
                  { title: 'Computer Science Instructor', type: 'Full-time' }
                ],
                logo: 'HPA'
              },
              {
                name: 'Lumbini Global Academy',
                location: 'Lalitpur, Bagmati',
                vacancies: [
                  { title: 'Primary Teacher', type: 'Full-time' }
                ],
                logo: 'LGA'
              }
            ].map((school, i) => (
              <StaggerItem key={i}>
                <div className="bg-surface-muted rounded-2xl border border-border-default overflow-hidden hover:border-surface-accent transition-colors flex flex-col h-full group">
                  <div className="p-6 border-b border-border-default flex items-center space-x-4 bg-surface-base">
                    <div className="w-16 h-16 rounded-full bg-surface-accent/10 flex items-center justify-center font-bold text-surface-accent text-xl flex-shrink-0 group-hover:bg-surface-accent group-hover:text-white transition-colors">
                      {school.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-surface-strong line-clamp-1">
                        {school.name}
                      </h3>
                      <p className="text-sm text-text-secondary flex items-center mt-1">
                        <Building className="h-4 w-4 mr-1 opacity-70" />
                        {school.location}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h4 className="text-sm font-semibold text-surface-strong uppercase tracking-wider mb-4">
                      Active Vacancies ({school.vacancies.length})
                    </h4>
                    <div className="space-y-3 mb-6 flex-grow">
                      {school.vacancies.map((vacancy, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm p-3 bg-surface-base rounded-lg border border-border-default">
                          <span className="font-medium text-surface-strong">{vacancy.title}</span>
                          <span className="text-xs bg-surface-accent/10 text-surface-accent px-2 py-1 rounded-full font-medium whitespace-nowrap ml-2">
                            {vacancy.type}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Link to="/jobs" className="mt-auto block w-full text-center py-3 bg-surface-base border border-surface-accent text-surface-accent rounded-lg font-medium hover:bg-surface-accent hover:text-white transition-colors">
                      View All Vacancies
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
