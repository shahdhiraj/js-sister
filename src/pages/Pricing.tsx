import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  Magnetic } from
'../components/ui/motion';
export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  return (
    <div className="pt-24 pb-20 bg-surface-muted min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-surface-strong mb-6">
            Simple, Transparent Pricing for Schools
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Choose the plan that fits your hiring needs. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 bg-surface-base rounded-full border border-border-default shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-surface-strong text-surface-base shadow-1' : 'text-text-secondary hover:text-surface-strong'}`}>
              
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${isAnnual ? 'bg-surface-strong text-surface-base shadow-1' : 'text-text-secondary hover:text-surface-strong'}`}>
              
              Annually{' '}
              <span className="text-[10px] bg-surface-accent text-surface-strong px-2 py-0.5 rounded-full font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <StaggerItem>
            <div className="bg-surface-base p-8 rounded-3xl shadow-1 border border-border-default h-full flex flex-col relative overflow-hidden">
              <h3 className="text-xl font-bold text-surface-strong mb-2">
                Basic
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                For small schools hiring occasionally.
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-surface-strong">
                  Rs. {isAnnual ? '4,999' : '5,999'}
                </span>
                <span className="text-text-secondary">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                '3 Active Job Posts',
                'Basic Applicant Filtering',
                'Standard Support',
                'Profile Views (up to 50)'].
                map((feature, i) =>
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-text-secondary">
                  
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />{' '}
                    {feature}
                  </li>
                )}
              </ul>
              <Button variant="outline" className="w-full h-12">
                Get Started
              </Button>
            </div>
          </StaggerItem>

          {/* Pro Plan */}
          <StaggerItem>
            <div className="bg-surface-strong p-8 rounded-3xl shadow-4 border border-surface-strong h-full flex flex-col relative overflow-hidden transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-surface-accent text-surface-strong text-xs font-bold px-4 py-1 rounded-bl-xl">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-surface-base mb-2">
                Professional
              </h3>
              <p className="text-surface-muted/80 text-sm mb-6">
                For growing institutions with regular needs.
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-surface-accent">
                  Rs. {isAnnual ? '9,999' : '11,999'}
                </span>
                <span className="text-surface-muted/80">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                '10 Active Job Posts',
                'Advanced AI Matching',
                'Priority Support',
                'Unlimited Profile Views',
                'Featured Employer Badge'].
                map((feature, i) =>
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-surface-muted">
                  
                    <CheckCircle2 className="h-5 w-5 text-surface-accent shrink-0" />{' '}
                    {feature}
                  </li>
                )}
              </ul>
              <Magnetic>
                <Button variant="accent" className="w-full h-12">
                  Choose Professional
                </Button>
              </Magnetic>
            </div>
          </StaggerItem>

          {/* Enterprise Plan */}
          <StaggerItem>
            <div className="bg-surface-base p-8 rounded-3xl shadow-1 border border-border-default h-full flex flex-col relative overflow-hidden">
              <h3 className="text-xl font-bold text-surface-strong mb-2">
                Enterprise
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                For large school networks and groups.
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-surface-strong">
                  Custom
                </span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                'Unlimited Job Posts',
                'Dedicated Account Manager',
                'Custom API Integration',
                'White-label Portal',
                'Bulk Hiring Tools'].
                map((feature, i) =>
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-text-secondary">
                  
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />{' '}
                    {feature}
                  </li>
                )}
              </ul>
              <Button variant="outline" className="w-full h-12">
                Contact Sales
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </div>);

}
