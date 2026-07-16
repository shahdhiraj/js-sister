import React, { useState } from 'react';
import {
  MapPin,
  Briefcase,
  Building,
  Clock,
  Banknote,
  Share2,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  GraduationCap } from
'lucide-react';
import { Button } from '../components/ui/Button';
import {
  FadeIn,
  Magnetic } from
'../components/ui/motion';
import { Link } from 'react-router-dom';

export function JobDetails() {
  const [isApplied, setIsApplied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleApply = () => {
    setIsApplied(true);
    alert('Application submitted successfully!');
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-surface-muted pb-24">
      {/* Breadcrumbs */}
      <div className="bg-surface-base border-b border-border-default pt-20 pb-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm text-text-tertiary">
            <a href="#" className="hover:text-surface-strong transition-colors">
              Home
            </a>
            <ChevronRight className="w-4 h-4" />
            <a href="#" className="hover:text-surface-strong transition-colors">
              Jobs
            </a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-text-secondary">
              Senior Mathematics Teacher
            </span>
          </div>
        </div>
      </div>

      {/* Job Hero */}
      <section className="bg-surface-base border-b border-border-default py-10">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-xl bg-surface-muted border border-border-muted flex items-center justify-center shrink-0 shadow-1">
                <Building className="w-10 h-10 text-text-tertiary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-surface-strong mb-2">
                  Senior Mathematics Teacher
                </h1>
                <p className="text-xl text-surface-accent font-medium mb-4">
                  Kathmandu Valley School
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                  <span className="flex items-center gap-1.5 bg-surface-muted px-2.5 py-1 rounded-md border border-border-default">
                    <MapPin className="w-4 h-4 text-text-tertiary" /> Kathmandu,
                    Nepal
                  </span>
                  <span className="flex items-center gap-1.5 bg-surface-muted px-2.5 py-1 rounded-md border border-border-default">
                    <Briefcase className="w-4 h-4 text-text-tertiary" /> Full
                    Time
                  </span>
                  <span className="flex items-center gap-1.5 bg-surface-muted px-2.5 py-1 rounded-md border border-border-default">
                    <Banknote className="w-4 h-4 text-text-tertiary" /> Rs.
                    45,000 - 60,000 / month
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
              <Magnetic>
                <Button 
                  variant="outline" 
                  className={`w-12 px-0 shrink-0 ${isSaved ? 'border-surface-accent bg-surface-accent/5' : ''}`}
                  onClick={handleSave}
                >
                  <Bookmark className={`w-5 h-5 ${isSaved ? 'text-surface-accent fill-current' : 'text-text-secondary'}`} />
                </Button>
              </Magnetic>
              <Magnetic>
                <Button 
                  variant="outline" 
                  className="w-12 px-0 shrink-0 hover:border-surface-accent transition-colors"
                  onClick={handleShare}
                >
                  <Share2 className="w-5 h-5 text-text-secondary" />
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  variant={isApplied ? "outline" : "accent"}
                  className={`flex-1 md:flex-none px-8 shadow-2 ${isApplied ? 'text-green-600 border-green-600 hover:bg-green-50 pointer-events-none' : ''}`}
                  onClick={handleApply}
                >
                  {isApplied ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 mr-2 inline-block" />
                      Applied
                    </>
                  ) : (
                    'Apply Now'
                  )}
                </Button>
              </Magnetic>
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
                Job Overview
              </h2>
              <div className="prose prose-slate max-w-none text-text-secondary leading-relaxed">
                <p>
                  Kathmandu Valley School is seeking a passionate and
                  experienced Senior Mathematics Teacher to join our dedicated
                  faculty. The ideal candidate will have a strong background in
                  advanced mathematics and a proven ability to inspire and
                  engage secondary school students.
                </p>
                <p className="mt-4">
                  You will be responsible for delivering high-quality
                  instruction, developing innovative curriculum materials, and
                  preparing students for national and international
                  examinations. We offer a collaborative environment,
                  state-of-the-art facilities, and opportunities for
                  professional growth.
                </p>
              </div>
            </FadeIn>

            <FadeIn
              delay={0.2}
              className="bg-surface-base rounded-2xl p-6 md:p-8 shadow-1 border border-border-default">
              
              <h2 className="text-2xl font-bold text-surface-strong mb-6">
                Key Responsibilities
              </h2>
              <ul className="space-y-4">
                {[
                'Plan, prepare, and deliver engaging mathematics lessons for grades 10-12.',
                'Develop and implement comprehensive lesson plans aligned with the national curriculum.',
                'Assess and monitor student progress, providing constructive feedback and support.',
                'Organize and lead extracurricular math clubs and olympiad preparation sessions.',
                'Collaborate with the mathematics department to continuously improve teaching strategies.',
                'Maintain regular communication with parents regarding student performance.'].
                map((item, i) =>
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-secondary">
                  
                    <CheckCircle2 className="w-5 h-5 text-surface-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                )}
              </ul>
            </FadeIn>

            <FadeIn
              delay={0.3}
              className="bg-surface-base rounded-2xl p-6 md:p-8 shadow-1 border border-border-default">
              
              <h2 className="text-2xl font-bold text-surface-strong mb-6">
                Qualifications & Requirements
              </h2>
              <ul className="space-y-4">
                {[
                "Master's degree in Mathematics or Mathematics Education (M.Ed.).",
                'Minimum of 5 years of teaching experience at the secondary level.',
                'Strong understanding of modern pedagogical techniques and EdTech tools.',
                'Excellent communication and interpersonal skills.',
                'Valid teaching license/certification.'].
                map((item, i) =>
                <li
                  key={i}
                  className="flex items-start gap-3 text-text-secondary">
                  
                    <GraduationCap className="w-5 h-5 text-surface-strong shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                )}
              </ul>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <FadeIn
              delay={0.4}
              className="bg-surface-base rounded-2xl p-6 shadow-1 border border-border-default">
              
              <h3 className="font-bold text-surface-strong mb-6 text-lg border-b border-border-muted pb-4">
                Job Summary
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-text-tertiary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-text-secondary">Date Posted</p>
                    <p className="font-medium text-surface-strong">
                      October 24, 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-text-tertiary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-text-secondary">Location</p>
                    <p className="font-medium text-surface-strong">
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-text-tertiary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-text-secondary">Job Type</p>
                    <p className="font-medium text-surface-strong">Full Time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Banknote className="w-5 h-5 text-text-tertiary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-text-secondary">Salary</p>
                    <p className="font-medium text-surface-strong">
                      Rs. 45k - 60k / month
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn
              delay={0.5}
              className="bg-surface-strong rounded-2xl p-6 shadow-2 text-surface-base">
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-surface-base flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-surface-strong" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Kathmandu Valley School</h3>
                  <Link
                    to="/schools"
                    className="text-surface-accent text-sm hover:underline">
                    
                    View Profile
                  </Link>
                </div>
              </div>
              <p className="text-surface-muted/80 text-sm mb-6 leading-relaxed">
                A premier educational institution committed to providing
                holistic education and fostering academic excellence since 1995.
              </p>
              <Link to="/jobs" className="block w-full">
                <Button
                  variant="outline"
                  className="w-full border-surface-muted/30 text-surface-base hover:bg-surface-base hover:text-surface-strong">
                  
                  View All Jobs (4)
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>);

}
