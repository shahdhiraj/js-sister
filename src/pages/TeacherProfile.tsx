import React from 'react';
import {
  MapPin,
  Star,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Mail,
  Calendar,
  Clock } from
'lucide-react';
import { Button } from '../components/ui/Button';
import {
  FadeIn,
  Magnetic } from
'../components/ui/motion';
export function TeacherProfile() {
  return (
    <div className="min-h-screen bg-surface-muted pb-24">
      {/* Profile Hero */}
      <section className="bg-surface-base border-b border-border-default pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-surface-muted border-4 border-surface-base shadow-3 flex items-center justify-center text-4xl font-bold text-surface-strong relative shrink-0">
              SA
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-surface-base flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-surface-strong mb-2">
                    Sarah Acharya
                  </h1>
                  <p className="text-xl text-text-secondary mb-4">
                    Senior Mathematics Educator
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-text-tertiary" />{' '}
                      Kathmandu, Nepal
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-text-tertiary" /> 8+
                      Years Exp.
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-surface-accent fill-surface-accent" />{' '}
                      4.9 (12 Reviews)
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <Magnetic>
                    <Button variant="outline" className="flex-1 md:flex-none">
                      <Mail className="w-4 h-4 mr-2" /> Message
                    </Button>
                  </Magnetic>
                  <Magnetic>
                    <Button variant="accent" className="flex-1 md:flex-none">
                      Invite to Apply
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <FadeIn
              delay={0.1}
              className="bg-surface-base rounded-2xl p-6 md:p-8 shadow-1 border border-border-default">
              
              <h2 className="text-2xl font-bold text-surface-strong mb-4">
                About Me
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Passionate and dedicated Mathematics teacher with over 8 years
                of experience in secondary education. Proven track record of
                improving student test scores by 25% through innovative teaching
                methods and personalized learning plans. Adept at integrating
                technology into the classroom to enhance engagement and
                comprehension.
              </p>
            </FadeIn>

            <FadeIn
              delay={0.2}
              className="bg-surface-base rounded-2xl p-6 md:p-8 shadow-1 border border-border-default">
              
              <h2 className="text-2xl font-bold text-surface-strong mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-surface-accent" /> Experience
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-default before:to-transparent">
                {[
                {
                  role: 'Head of Mathematics',
                  school: 'Kathmandu Valley School',
                  period: '2020 - Present',
                  desc: 'Lead a department of 5 teachers, developed new curriculum aligning with international standards.'
                },
                {
                  role: 'Mathematics Teacher',
                  school: 'Everest Academy',
                  period: '2016 - 2020',
                  desc: 'Taught grades 8-10, organized the annual district math olympiad.'
                }].
                map((exp, i) =>
                <div
                  key={i}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-surface-accent bg-surface-base shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-1 z-10"></div>
                    <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl border border-border-default bg-surface-muted shadow-sm group-hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-surface-strong text-lg">
                        {exp.role}
                      </h3>
                      <p className="text-surface-accent font-medium text-sm mb-1">
                        {exp.school}
                      </p>
                      <p className="text-text-tertiary text-xs mb-3 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </p>
                      <p className="text-text-secondary text-sm">{exp.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>

            <FadeIn
              delay={0.3}
              className="bg-surface-base rounded-2xl p-6 md:p-8 shadow-1 border border-border-default">
              
              <h2 className="text-2xl font-bold text-surface-strong mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-surface-accent" />{' '}
                Education
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center shrink-0 border border-border-default">
                    <Award className="w-6 h-6 text-text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-surface-strong text-lg">
                      Master of Education (M.Ed.)
                    </h3>
                    <p className="text-text-secondary">Tribhuvan University</p>
                    <p className="text-text-tertiary text-sm mt-1">
                      2014 - 2016
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-muted flex items-center justify-center shrink-0 border border-border-default">
                    <Award className="w-6 h-6 text-text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-surface-strong text-lg">
                      B.Sc. in Mathematics
                    </h3>
                    <p className="text-text-secondary">Kathmandu University</p>
                    <p className="text-text-tertiary text-sm mt-1">
                      2010 - 2014
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <FadeIn
              delay={0.4}
              className="bg-surface-base rounded-2xl p-6 shadow-1 border border-border-default">
              
              <h3 className="font-bold text-surface-strong mb-4">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                'Advanced Calculus',
                'Curriculum Design',
                'Student Mentoring',
                'EdTech Integration',
                'Classroom Management',
                'STEM Education'].
                map((skill) =>
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-surface-muted border border-border-default rounded-md text-sm text-text-secondary hover:border-surface-accent hover:text-surface-strong transition-colors cursor-default">
                  
                    {skill}
                  </span>
                )}
              </div>
            </FadeIn>

            <FadeIn
              delay={0.5}
              className="bg-surface-base rounded-2xl p-6 shadow-1 border border-border-default">
              
              <h3 className="font-bold text-surface-strong mb-4">
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Status
                  </span>
                  <span className="font-medium text-green-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>{' '}
                    Actively Looking
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary flex items-center gap-2">
                    <Briefcase className="w-4 h-4" /> Job Type
                  </span>
                  <span className="font-medium text-surface-strong">
                    Full Time
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn
              delay={0.6}
              className="bg-surface-base rounded-2xl p-6 shadow-1 border border-border-default">
              
              <h3 className="font-bold text-surface-strong mb-4">Languages</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-surface-strong font-medium">
                    English
                  </span>
                  <span className="text-text-secondary">Native/Bilingual</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-surface-strong font-medium">
                    Nepali
                  </span>
                  <span className="text-text-secondary">Native/Bilingual</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-surface-strong font-medium">Hindi</span>
                  <span className="text-text-secondary">Professional</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>);

}
