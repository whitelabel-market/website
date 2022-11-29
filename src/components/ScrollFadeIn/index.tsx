import React from 'react';
import { Reveal, SplitWords, Tween } from 'react-gsap';

interface ScrollFadeInProps {
  as?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  delay?: number;
}

export default function ScrollFadeIn({
  children,
  as,
  delay,
}: React.PropsWithChildren<ScrollFadeInProps>) {
  return (
    <Reveal repeat trigger={as}>
      <Tween
        delay={delay}
        from={{ y: 12, autoAlpha: 0 }}
        to={{ y: 0, autoAlpha: 1 }}
        stagger={0.2}
        duration={1}
        ease="power1.out"
      >
        {children}
      </Tween>
    </Reveal>
  );
}
