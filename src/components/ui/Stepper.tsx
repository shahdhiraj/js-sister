import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';
interface StepperProps {
  steps: string[];
  currentStep: number;
  className?: string;
}
export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between w-full relative',
        className
      )}>
      
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        const isLast = index === steps.length - 1;
        return (
          <div
            key={step}
            className="flex flex-col items-center relative flex-1">
            
            {/* Connecting Line */}
            {!isLast &&
            <div className="absolute top-4 left-[50%] w-full h-[2px] bg-border-muted">
                <motion.div
                className="h-full bg-surface-accent"
                initial={{
                  width: '0%'
                }}
                animate={{
                  width: isCompleted ? '100%' : '0%'
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut'
                }} />
              
              </div>
            }

            {/* Step Circle */}
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center relative z-10 font-bold text-sm transition-colors duration-300 shadow-1',
                isActive ?
                'bg-surface-strong text-surface-accent border-2 border-surface-strong' :
                isCompleted ?
                'bg-surface-accent text-surface-strong border-2 border-surface-accent' :
                'bg-surface-base border-2 border-border-default text-text-tertiary'
              )}>
              
              {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
            </div>

            {/* Step Label */}
            <span
              className={cn(
                'mt-3 text-xs font-medium text-center absolute top-10 w-24 hidden md:block',
                isActive ? 'text-surface-strong' : 'text-text-tertiary'
              )}>
              
              {step}
            </span>
          </div>);

      })}
    </div>);

}