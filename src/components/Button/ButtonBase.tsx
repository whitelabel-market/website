import React, { ReactNode } from 'react';

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  children?: ReactNode;
  disabled?: boolean;
  onlyIcon?: boolean;
  rounded?: 'none' | 'base' | 'full';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  justify?: 'between' | 'center' | 'around';
  color?: 'primary' | 'secondary' | 'outline';
}

export default function ButtonBase({
  children,
  className,
  iconStart,
  iconEnd,
  onlyIcon = false,
  rounded = `base`,
  size = `md`,
  justify = `center`,
  color = `primary`,
  ...props
}: React.PropsWithChildren<ButtonBaseProps>) {
  const baseClass = `inline-flex items-center text-center uppercase truncate font-serif border-2 transition-color ease-in-out duration-200`;

  const roundedClass = {
    none: ``,
    base: `rounded`,
    full: `rounded-full`,
  }[rounded];

  const sizeClass = {
    xs: `h-6 text-xs ${onlyIcon ? `w-6` : `space-x-0.5 w-auto py-0.25 px-1`}`,
    sm: `h-8 text-xs ${onlyIcon ? `w-8` : `space-x-1 w-auto py-0.5 px-2`}`,
    md: `h-14 text-sm ${onlyIcon ? `w-14` : `space-x-2 w-auto py-1 px-10`}`,
    lg: `h-16 text-base ${onlyIcon ? `w-16` : `space-x-2 w-auto py-2 px-14`}`,
    xl: `h-18 text-lg ${onlyIcon ? `w-18` : `space-x-3 w-auto py-3 px-18`}`,
  }[size];

  const justifyClass = {
    center: `justify-center`,
    between: `justify-between`,
    around: `justify-around`,
  }[justify];
  const colorClass = {
    primary: `text-neutral-50 bg-neutral-900 border-neutral-900 dark:bg-neutral-50 dark:border-neutral-50 dark:text-neutral-900 hover:!bg-brand hover:!text-white hover:!border-brand`,
    secondary: `bg-default text-default border-default hover:bg-brand hover:text-white hover:border-brand`,
    outline: `bg-transparent text-neutral-900 dark:text-neutral-50 border-neutral-900/20 dark:border-neutral-50/20 hover:border-neutral-900/30 dark:hover:border-neutral-50/30`,
  }[color];

  const buttonClass = [
    roundedClass,
    sizeClass,
    justifyClass,
    colorClass,
    baseClass,
    className,
  ].join(` `);

  return (
    <button className={buttonClass} {...props}>
      {iconStart && <span className={`block`}>{iconStart}</span>}
      <span className={`block`}>{children}</span>
      {iconEnd && <span className={`block`}>{iconEnd}</span>}
    </button>
  );
}
