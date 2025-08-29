import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  asChild?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, disabled, asChild = false, children, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-[#df1a31] text-white hover:bg-red-700 focus:ring-[#df1a31]',
      secondary: 'bg-[#333333] text-white hover:bg-gray-700 focus:ring-gray-500',
      outline: 'border-2 border-[#df1a31] text-[#df1a31] hover:bg-[#df1a31] hover:text-white focus:ring-[#df1a31]',
      ghost: 'text-[#df1a31] hover:bg-red-50 focus:ring-[#df1a31]'
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm rounded-md',
      md: 'px-4 py-2 text-base rounded-md',
      lg: 'px-6 py-3 text-lg rounded-lg'
    };

    const classes = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      loading && 'cursor-wait',
      className
    );

    if (asChild) {
      // When asChild is true, we expect children to be a single React element
      // and we'll clone it with our classes
      const child = children as React.ReactElement;
      const { variant, size, loading, asChild: _, ...restProps } = props as any;
      return React.cloneElement(child, {
        className: cn(classes, (child.props as any)?.className),
        ...restProps
      });
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;