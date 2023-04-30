import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { Link } from 'react-scroll';
import { Icons } from '../Icons';

const buttonVariants = cva(
  'inline-flex items-center justify-center cursor-pointer	gap-1 rounded-xl text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none  data-[state=open]:bg-slate-100',
  {
    variants: {
      variant: {
        default: 'bg-blue-500 text-light hover:bg-blue-600',
        destructive: 'bg-red-500 text-light hover:bg-red-600',
        outline: 'bg-transparent border border-slate-200 hover:bg-slate-100',
        subtle: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
        ghost:
          'bg-transparent hover:bg-slate-100 data-[state=open]:bg-transparent',
        link: 'bg-transparent underline-offset-4 hover:underline text-slate-900 hover:bg-transparent',
      },
      size: {
        default: 'h-10 py-2 px-4',
        no_padding: 'h-11 py-0 px-0',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, variant, children, href, size, ...rest } = props;

    if (href && variant === 'subtle') {
      return (
        <Link
          to={href}
          spy={true}
          smooth={true}
          offset={-64}
          duration={400}
          className={cn(buttonVariants({ variant: 'subtle', size, className }))}
        >
          {children}
          <Icons.downarrow size={14} />
        </Link>
      );
    }

    const buttonClassNames = cn(buttonVariants({ variant, size, className }));

    if (href) {
      return (
        <Link to={href} className={buttonClassNames}>
          {children}
        </Link>
      );
    }

    return (
      <button className={buttonClassNames} ref={ref} {...rest}>
        {children}
      </button>
    );
  }
);

export { Button, buttonVariants };
