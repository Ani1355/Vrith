import React from 'react';
import { Button, ButtonProps } from './design-system/Button';

interface AccessibleButtonProps extends ButtonProps {
  ariaLabel?: string;
  ariaDescribedBy?: string;
  keyboardShortcut?: string;
}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  ariaLabel,
  ariaDescribedBy,
  keyboardShortcut,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      title={keyboardShortcut ? `${ariaLabel || children} (${keyboardShortcut})` : ariaLabel}
    >
      {children}
      {keyboardShortcut && (
        <span className="sr-only">({keyboardShortcut})</span>
      )}
    </Button>
  );
};
