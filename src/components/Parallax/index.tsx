import React, {
  DOMElement,
  forwardRef,
  PropsWithChildren,
  RefObject,
  useImperativeHandle,
  useRef,
} from 'react';
import { Tween, ScrollTrigger, Timeline } from 'react-gsap';

interface ParallaxProps {
  banner?: boolean;
  passRef?: RefObject<any>;
  className?: string;
  from?: any;
  to?: any;
}

export default function Parallax({
  passRef,
  children,
  className,
  banner,
  from,
  to,
}: React.PropsWithChildren<ParallaxProps>) {
  return (
    <ScrollTrigger scrub={true} markers={true}>
      <Tween
        from={
          from || {
            y: -100,
          }
        }
        to={
          to || {
            y: 0,
          }
        }
      >
        {children}
      </Tween>
    </ScrollTrigger>
  );
}
