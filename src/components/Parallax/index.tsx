import React from 'react';

interface ParallaxProps<T extends React.ElementType> {
  speed?: number;
  as?: T;
  children?: React.ReactNode;
}

export default function Parallax<T extends React.ElementType = 'div'>({
  children,
  speed,
  as,
  ...props
}: ParallaxProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ParallaxProps<T>>) {
  const Component = as || `div`;

  return (
    <Component data-scroll data-scroll-speed={speed || 2} {...props}>
      {children}
    </Component>
  );
}
