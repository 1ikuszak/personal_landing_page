import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';
import { PopupButton } from 'react-calendly';
import { buttonVariants } from './ui/button';

interface CalendlyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

function CalendlyButton(
  props: CalendlyButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const { className, children, href, ...rest } = props;
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const calendlyButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (calendlyButtonRef.current) {
      setRootElement(document.getElementById('root') ?? document.body);
    }
  }, []);

  const calendlyButtonClassNames = cn(
    buttonVariants({ variant: 'default', size: 'default', className })
  );

  return (
    <>
      <button ref={calendlyButtonRef} style={{ display: 'none' }} />
      {rootElement && (
        <PopupButton
          className={calendlyButtonClassNames}
          text={children as string}
          url="https://calendly.com/fireflydesign/30min"
          rootElement={rootElement}
          {...rest}
        />
      )}
    </>
  );
}

export default CalendlyButton;
