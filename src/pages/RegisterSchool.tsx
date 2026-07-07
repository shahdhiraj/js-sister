import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building,
  CheckCircle2,
  ArrowRight,
  ArrowLeft } from
'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Stepper } from '../components/ui/Stepper';
import { FadeIn, Magnetic } from '../components/ui/motion';
import { useScreenInit } from '../useScreenInit.js';
const STEPS = [
'School Details',
'Contact',
'Verification',
'Subscription',
'Finish'];

export function RegisterSchool() {
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
              School Details
            </h3>
            <Input placeholder="Official School Name" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Registration Number / PAN" />
              <Input placeholder="Established Year" type="number" />
            </div>
            <Input placeholder="Full Address (e.g., Sanepa, Lalitpur)" />
            <textarea
              className="w-full rounded-md border border-border-default bg-surface-base px-3 py-2 text-base text-text-primary placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring min-h-[100px]"
              placeholder="Brief description of your institution..." />
            
          </div>);

      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-surface-strong mb-4">
              Contact Person
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div>
            <Input placeholder="Designation (e.g., Principal, HR Manager)" />
            <Input placeholder="Official Email Address" type="email" />
            <Input placeholder="Contact Number" type="tel" />
          </div>);

      case 2:
        return (
          <div className="space-y-4 text-center py-8">
            <div className="w-20 h-20 bg-surface-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-10 h-10 text-surface-strong" />
            </div>
            <h3 className="text-2xl font-bold text-surface-strong mb-2">
              Document Verification
            </h3>
            <p className="text-text-secondary mb-6">
              Please upload your school registration certificate to verify
              authenticity.
            </p>
            <div className="border-2 border-dashed border-border-default rounded-xl p-8 hover:bg-surface-muted transition-colors cursor-pointer">
              <p className="text-surface-strong font-medium">
                Click to upload document (PDF/JPG)
              </p>
            </div>
          </div>);

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-surface-strong mb-2">
              Select Subscription
            </h3>
            <p className="text-text-secondary mb-6">
              Choose a plan that fits your hiring needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-border-default rounded-xl p-6 hover:border-surface-accent cursor-pointer transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-surface-muted text-text-secondary text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Basic
                </div>
                <h4 className="text-xl font-bold text-surface-strong mb-2">
                  Pay Per Post
                </h4>
                <p className="text-3xl font-bold text-surface-strong mb-4">
                  Rs. 2,500{' '}
                  <span className="text-sm font-normal text-text-secondary">
                    /job
                  </span>
                </p>
                <ul className="text-sm text-text-secondary space-y-2 mb-6">
                  <li>• 30 days listing</li>
                  <li>• Standard visibility</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-surface-strong group-hover:text-white transition-colors">
                  
                  Select Plan
                </Button>
              </div>

              <div className="border-2 border-surface-accent rounded-xl p-6 cursor-pointer relative overflow-hidden shadow-2">
                <div className="absolute top-0 right-0 bg-surface-accent text-surface-strong text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Recommended
                </div>
                <h4 className="text-xl font-bold text-surface-strong mb-2">
                  Annual Premium
                </h4>
                <p className="text-3xl font-bold text-surface-strong mb-4">
                  Rs. 25,000{' '}
                  <span className="text-sm font-normal text-text-secondary">
                    /yr
                  </span>
                </p>
                <ul className="text-sm text-text-secondary space-y-2 mb-6">
                  <li>• Unlimited job posts</li>
                  <li>• Featured visibility</li>
                  <li>• Access to teacher database</li>
                </ul>
                <Button variant="accent" className="w-full">
                  Select Plan
                </Button>
              </div>
            </div>
          </div>);

      case 4:
        return (
          <div className="text-center py-12 relative">
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
              Welcome Aboard!
            </h3>
            <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
              Your school account has been created successfully. You can now
              start posting vacancies and finding brilliant teachers.
            </p>
            <Magnetic>
              <Button variant="primary" size="lg">
                Go to Employer Dashboard
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
              Register Your School
            </h1>
            <p className="text-text-secondary text-lg">
              Join Nepal's largest network of qualified educators.
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
              'Complete Registration' :
              'Continue'}{' '}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          }
        </div>
      </div>
    </div>);

}