import React from 'react';
import { Users, BookOpen, Globe } from 'lucide-react';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AnimatedNumber,
  Magnetic } from
'../components/ui/motion';
import { Button } from '../components/ui/Button';
export function About() {
  return (
    <div className="min-h-screen bg-surface-base pt-24 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl text-center mb-24">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl font-bold text-surface-strong mb-6 leading-tight">
            Empowering Education in{' '}
            <span className="text-surface-accent">Nepal</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Brilliant Brain Teachers Bank was founded with a single mission: to
            bridge the gap between exceptional educators and leading
            institutions, elevating the standard of education nationwide.
          </p>
        </FadeIn>
      </section>

      {/* Impact Stats */}
      <section className="bg-surface-strong text-surface-base py-16 mb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface-accent/10 via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
            {
              label: 'Teachers Placed',
              value: 5000,
              suffix: '+'
            },
            {
              label: 'Partner Schools',
              value: 350,
              suffix: '+'
            },
            {
              label: 'Districts Covered',
              value: 45,
              suffix: ''
            },
            {
              label: 'Years of Trust',
              value: 10,
              suffix: '+'
            }].
            map((stat, i) =>
            <StaggerItem key={i}>
                <div className="text-4xl md:text-5xl font-bold text-surface-accent mb-2 flex items-center justify-center">
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-surface-muted/80 font-medium">
                  {stat.label}
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="container mx-auto px-4 md:px-6 max-w-4xl mb-24">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold text-surface-strong mb-4">
            Our Journey
          </h2>
          <p className="text-text-secondary text-lg">
            A decade of transforming educational recruitment.
          </p>
        </FadeIn>

        <div className="relative border-l-2 border-border-muted ml-4 md:ml-1/2 md:translate-x-[-1px] space-y-12">
          {[
          {
            year: '2014',
            title: 'The Beginning',
            desc: 'Started as a small consultancy in Kathmandu aiming to help local schools find qualified science teachers.'
          },
          {
            year: '2017',
            title: 'Going Digital',
            desc: 'Launched the first version of our online platform, connecting teachers across the valley.'
          },
          {
            year: '2020',
            title: 'National Expansion',
            desc: 'Expanded operations to cover major cities including Pokhara, Chitwan, and Biratnagar.'
          },
          {
            year: '2024',
            title: 'AI Integration',
            desc: 'Introduced smart matching algorithms to perfectly align teacher skills with school requirements.'
          }].
          map((item, i) =>
          <FadeIn key={i} delay={i * 0.1} className="relative pl-8 md:pl-0">
              <div className="md:flex items-center justify-between w-full">
                <div className="md:w-5/12 md:text-right md:pr-8 mb-2 md:mb-0">
                  <span className="text-2xl font-bold text-surface-accent">
                    {item.year}
                  </span>
                </div>
                <div className="absolute left-[-9px] md:left-1/2 md:translate-x-[-50%] w-4 h-4 rounded-full bg-surface-strong border-4 border-surface-base shadow-1"></div>
                <div className="md:w-5/12 md:pl-8">
                  <h3 className="text-xl font-bold text-surface-strong mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-surface-muted py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-surface-strong mb-4">
              Leadership Team
            </h2>
            <p className="text-text-secondary text-lg">
              Dedicated professionals passionate about education.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              name: 'Dr. Ramesh Sharma',
              role: 'Founder & CEO',
              icon: Globe
            },
            {
              name: 'Sita Adhikari',
              role: 'Head of Recruitment',
              icon: Users
            },
            {
              name: 'Prakash Thapa',
              role: 'Chief Technology Officer',
              icon: BookOpen
            }].
            map((member, i) =>
            <StaggerItem key={i}>
                <div className="bg-surface-base rounded-2xl p-8 text-center shadow-1 hover:shadow-3 transition-shadow border border-border-default">
                  <div className="w-24 h-24 bg-surface-muted rounded-full mx-auto mb-6 flex items-center justify-center text-surface-strong">
                    <member.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-surface-strong mb-1">
                    {member.name}
                  </h3>
                  <p className="text-surface-accent font-medium">
                    {member.role}
                  </p>
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 max-w-4xl text-center mt-24">
        <FadeIn>
          <h2 className="text-3xl font-bold text-surface-strong mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Whether you are a school looking for talent or a teacher seeking
            opportunities, we are here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Magnetic>
              <Button variant="accent" size="lg">
                Find Teachers
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="outline" size="lg">
                Browse Jobs
              </Button>
            </Magnetic>
          </div>
        </FadeIn>
      </section>
    </div>);

}