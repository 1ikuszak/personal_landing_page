import React from 'react';
import { PopupButton } from 'react-calendly';
import { Button } from './ui/Button';

interface CalendlyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

const CalendlyButton = React.forwardRef<HTMLButtonElement, CalendlyButtonProps>(
  (props, ref) => {
    const { className, children, href, ...rest } = props;

    const rootElement = document.getElementById('root') ?? document.body;

    return (
      <>
        <Button>
          <PopupButton
            text={children as string}
            url="https://calendly.com/fireflydesign/30min"
            rootElement={rootElement}
            {...rest}
          />
        </Button>
      </>
    );
  }
);

export default CalendlyButton;
