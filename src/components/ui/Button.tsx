import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';
export interface ButtonProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
  {
    className,
    variant = 'primary',
    size = 'md',
    isLoading,
    children,
    disabled,
    ...props
  },
  ref) =>
  {
    const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md';
    const variants = {
      primary:
      'bg-surface-accent text-white hover:bg-surface-accent/90 active:bg-surface-accent/95',
      secondary:
      'bg-surface-muted text-text-primary hover:bg-surface-muted/80 active:bg-surface-muted/90',
      outline:
      'border-2 border-surface-accent text-surface-accent hover:bg-surface-accent hover:text-white active:bg-surface-accent/90',
      ghost:
      'text-text-secondary hover:text-surface-accent hover:bg-surface-muted active:bg-surface-muted/80',
      accent:
      'bg-surface-accent text-white hover:bg-surface-accent/90 active:bg-surface-accent/95'
    };
    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-[44px] px-4 text-base',
      lg: 'h-12 px-6 text-lg'
    };
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}>
        
        {isLoading ?
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          
            <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4">
          </circle>
            <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
          </svg> :
        null}
        {children}
      </button>);

  }
);
Button.displayName = 'Button';