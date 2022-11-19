import React from 'react';

interface TagProps {
  color?: 'white' | 'yellow' | 'purple';
}

export default function Tag({
  children,
  color = `white`,
}: React.PropsWithChildren<TagProps>) {
  const hyphenBg = {
    white: `bg-neutral-50`,
    yellow: `bg-yellow`,
    purple: `bg-purple`,
  };

  const textColor = {
    white: `text-neutral-50`,
    yellow: `text-yellow`,
    purple: `text-purple`,
  };

  return (
    <div className={`flex items-center`}>
      <span
        className={`block w-6 h-px mx-2 ${
          hyphenBg[color as keyof typeof hyphenBg]
        }`}
      />

      <span
        className={`block text-xs tracking-widest uppercase mt-1 font-light ${
          textColor[color as keyof typeof textColor]
        }`}
      >
        {children}
      </span>
    </div>
  );
}
