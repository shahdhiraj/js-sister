import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import {
  Zap,
  Users,
  ShieldCheck,
  MapPin,
  Briefcase } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Magnetic } from '../components/ui/motion';
import { useAuth } from '../lib/AuthContext';

export function PostJob() {
  const { user, role } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // If logged in as a school, show the actual form
  if (user && role === 'school') {
    if (submitted) {
      return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-surface-muted text-center px-4 pt-20">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-surface-strong mb-4">Job Posted Successfully!</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-md">
            Your vacancy has been published and is now visible to thousands of qualified teachers.
          </p>
          <div className="flex gap-4">
            <Link to="/dashboard">
              <Button variant="outline">Go to Dashboard</Button>
            </Link>
            <Button variant="accent" onClick={() => setSubmitted(false)}>Post Another Job</Button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-surface-muted pt-24 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <h1 className="text-3xl font-bold text-surface-strong mb-2">Post a New Vacancy</h1>
            <p className="text-text-secondary mb-8">Fill out the details below to publish your job listing.</p>
            
            <form className="bg-surface-base rounded-2xl p-6 md:p-8 shadow-2 border border-border-default space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setTimeout(() => {
                  setIsSubmitting(false);
                  setSubmitted(true);
                }, 1500);
              }}
            >
              <div>
                <label className="block text-sm font-medium text-surface-strong mb-2">Job Title *</label>
                <Input placeholder="e.g. Senior Science Teacher" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-surface-strong mb-2">Location *</label>
                  <Input icon={<MapPin className="w-4 h-4" />} placeholder="City or District" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-strong mb-2">Job Type *</label>
                  <select className="w-full h-12 px-4 rounded-lg border border-border-default bg-transparent focus:ring-2 focus:ring-surface-accent/50 outline-none">
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-surface-strong mb-2">Salary Range (Monthly)</label>
                  <Input placeholder="e.g. Rs. 40,000 - 60,000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-strong mb-2">Experience Required *</label>
                  <select className="w-full h-12 px-4 rounded-lg border border-border-default bg-transparent focus:ring-2 focus:ring-surface-accent/50 outline-none">
                    <option value="entry">Freshers / Entry Level</option>
                    <option value="mid">1 - 3 Years</option>
                    <option value="senior">3 - 5+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-surface-strong mb-2">Job Description *</label>
                <textarea 
                  className="w-full h-40 rounded-lg border border-border-default bg-transparent p-4 focus:ring-2 focus:ring-surface-accent/50 outline-none resize-none"
                  placeholder="Describe the role, responsibilities, and requirements..."
                  required
                />
              </div>

              <div className="pt-4 border-t border-border-muted flex justify-end gap-4">
                <Link to="/dashboard">
                  <Button type="button" variant="outline">Cancel</Button>
                </Link>
                <Button type="submit" variant="accent" className="min-w-[150px]" disabled={isSubmitting}>
                  {isSubmitting ? 'Publishing...' : 'Publish Job'}
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    );
  }

  // Redirect non-logged-in users (or non-school users) to login
  return <Navigate to="/login" state={{ from: '/post-job' }} replace />;
}
