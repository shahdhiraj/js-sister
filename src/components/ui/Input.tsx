import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
export interface InputProps extends
  React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon &&
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none">
            {icon}
          </div>
        }
        <input
          ref={ref}
          className={cn(
            'flex h-[44px] w-full rounded-md border border-border-default bg-surface-base px-3 py-2 text-base text-text-primary placeholder:text-text-tertiary transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:border-transparent',
            'disabled:cursor-not-allowed disabled:opacity-50',
            icon && 'pl-10',
            error && 'border-red-500 focus-visible:ring-red-500',
            className
          )}
          {...props} />
        
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>);

  }
);
Input.displayName = 'Input';