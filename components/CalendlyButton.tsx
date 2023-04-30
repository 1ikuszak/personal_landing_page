import { cn } from '@/lib/utils';
import React from 'react';
import { PopupButton } from 'react-calendly';
import { buttonVariants } from './ui/Button';

interface CalendlyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

const CalendlyButton = React.forwardRef<HTMLButtonElement, CalendlyButtonProps>(
  (props, ref) => {
    const { className, children, href, ...rest } = props;

    const rootElement = document.getElementById('root') ?? document.body;

    const calendlyButtonClassNames = cn(
      buttonVariants({ variant: 'default', size: 'default', className })
    );

    return (
      <>
        <PopupButton
          className={calendlyButtonClassNames}
          text={children as string}
          url="https://calendly.com/fireflydesign/30min"
          rootElement={rootElement}
          {...rest}
        />
      </>
    );
  }
);

export default CalendlyButton;
