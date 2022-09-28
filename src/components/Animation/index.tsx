import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const from = { autoAlpha: 0, skewY: 1, y: 24 };
const duration = 1;

export default function Animation({
  children,
  as = `div`,
  ...props
}: React.PropsWithChildren<any>) {
  const Component = as;
  const compRef = useRef(null);

  useEffect(() => {
    gsap.from(compRef?.current, {
      ...from,
      stagger: {
        amount: duration,
      },
      scrollTrigger: {
        trigger: compRef?.current,
        start: `center bottom`,
      },
      duration,
      ease: `Power4.inOut`,
    });
  }, [compRef]);

  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
}
