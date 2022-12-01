import React from 'react';

interface TagProps {
  color?: 'white' | 'yellow' | 'purple' | 'black';
  disableTheme?: boolean;
}

export default function Tag({
  children,
  color = `white`,
  disableTheme,
}: React.PropsWithChildren<TagProps>) {
  const hyphenBg = {
    white: `bg-neutral-50`,
    yellow: disableTheme ? `bg-yellow` : `bg-yellow-900 dark:bg-yellow`,
    purple: disableTheme ? `bg-purple` : `bg-neutral-900 dark:bg-purple`,
    black: `bg-black`,
  };

  const textColor = {
    white: `text-neutral-50`,
    yellow: disableTheme ? `text-yellow` : `text-yellow-900 dark:text-yellow`,
    purple: disableTheme ? `text-purple` : `text-neutral-900 dark:text-purple`,
    black: `text-black`,
  };

  return (
    <div className={`flex items-center`}>
      <span
        className={`block w-8 h-px mx-2 ${
          hyphenBg[color as keyof typeof hyphenBg]
        }`}
      />

      <span
        className={`block text-[0.6rem] tracking-widest uppercase mt-0.5 font-bold ${
          textColor[color as keyof typeof textColor]
        }`}
      >
        {children}
      </span>
    </div>
  );
}
