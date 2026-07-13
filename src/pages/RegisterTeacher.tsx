import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Stepper } from '../components/ui/Stepper';
import { FadeIn, Magnetic } from '../components/ui/motion';
import { useScreenInit } from '../useScreenInit.js';
const STEPS = [
'Personal Info',
'Education',
'Experience',
'Documents',
'Skills',
'Verification',
'Finish'];

export function RegisterTeacher() {
  const screenInit = useScreenInit();
  const [currentStep, setCurrentStep] = useState(
    typeof screenInit?.currentStep === 'number' ? screenInit.currentStep : 0
  );
  const nextStep = () =>
  setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-surface-strong mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div>
            <Input placeholder="Email Address" type="email" />
            <Input placeholder="Phone Number" type="tel" />
            <Input placeholder="Current Location (e.g., Kathmandu)" />
          </div>);

      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-surface-strong mb-4">
              Education
            </h3>
            <Input placeholder="Highest Degree (e.g., M.Ed, B.Ed)" />
            <Input placeholder="University / Institution" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Graduation Year" type="number" />
              <Input placeholder="Grade / GPA" />
            </div>
          </div>);

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-surface-strong mb-4">
              Teaching Experience
            </h3>
            <Input placeholder="Years of Experience" type="number" />
            <Input placeholder="Most Recent School" />
            <Input placeholder="Primary Subject Taught" />
            <textarea
              className="w-full rounded-md border border-border-default bg-surface-base px-3 py-2 text-base text-text-primary placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring min-h-[100px]"
              placeholder="Briefly describe your teaching methodology..." />
            
          </div>);

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-surface-strong mb-4">
              Upload Documents
            </h3>
            <div className="border-2 border-dashed border-border-default rounded-xl p-10 text-center hover:bg-surface-muted transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-surface-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-surface-strong group-hover:text-surface-accent transition-colors">
                <UploadCloud className="w-8 h-8 text-text-tertiary group-hover:text-surface-accent" />
              </div>
              <p className="text-surface-strong font-medium mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-sm text-text-tertiary">
                Resume, Citizenship, and Teaching License (PDF, max 5MB)
              </p>
            </div>
          </div>);

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-surface-strong mb-4">
              Skills & Expertise
            </h3>
            <p className="text-text-secondary mb-4">
              Select your primary teaching subjects and skills.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
              'Mathematics',
              'Science',
              'English',
              'Computer Science',
              'Social Studies',
              'ECA',
              'Classroom Management',
              'Lesson Planning'].
              map((skill) =>
              <button
                key={skill}
                className="px-4 py-2 rounded-full border border-border-default text-sm font-medium text-text-secondary hover:border-surface-strong hover:text-surface-strong transition-colors">
                
                  {skill}
                </button>
              )}
            </div>
          </div>);

      case 5:
        return (
          <div className="space-y-4 text-center py-8">
            <div className="w-20 h-20 bg-surface-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="w-10 h-10 border-4 border-surface-accent border-t-transparent rounded-full" />
              
            </div>
            <h3 className="text-2xl font-bold text-surface-strong mb-2">
              Verifying Details
            </h3>
            <p className="text-text-secondary">
              Please wait while we securely process your application
              information...
            </p>
          </div>);

      case 6:
        return (
          <div className="text-center py-12 relative">
            {/* Simple Confetti Burst */}
            <motion.div
              initial={{
                scale: 0,
                opacity: 0
              }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1.5,
                ease: 'easeOut'
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface-accent/40 via-transparent to-transparent pointer-events-none" />
            
            <motion.div
              initial={{
                scale: 0
              }}
              animate={{
                scale: 1
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20
              }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 shadow-2">
              
              <CheckCircle2 className="w-12 h-12" />
            </motion.div>
            <h3 className="text-3xl font-bold text-surface-strong mb-4">
              Registration Complete!
            </h3>
            <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
              Welcome to js-sister Teachers Bank. Your profile is now
              under review. We will notify you once it is approved.
            </p>
            <Magnetic>
              <Button variant="primary" size="lg">
                Go to Dashboard
              </Button>
            </Magnetic>
          </div>);

      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen bg-surface-muted pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-surface-strong mb-4">
              Join as a Teacher
            </h1>
            <p className="text-text-secondary text-lg">
              Create your professional profile and connect with top schools in
              Nepal.
            </p>
          </div>
        </FadeIn>

        <div className="bg-surface-base rounded-2xl shadow-3 border border-border-default p-6 md:p-10 mb-8">
          <Stepper
            steps={STEPS}
            currentStep={currentStep}
            className="mb-12 md:mb-16" />
          

          <div className="min-h-[300px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  x: -20
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut'
                }}>
                
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
          </div>

          {currentStep < STEPS.length - 1 &&
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-border-muted">
              <Button
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 0}
              className={currentStep === 0 ? 'invisible' : ''}>
              
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              <Button variant="accent" onClick={nextStep}>
                {currentStep === STEPS.length - 2 ?
              'Submit Application' :
              'Continue'}{' '}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          }
        </div>
      </div>
    </div>);

}
