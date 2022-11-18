import React, { RefObject, useRef } from 'react';

interface ParallaxProps {
  passRef?: RefObject<any>;
  className?: string;
}

export default function Parallax({
  passRef,
  children,
  className,
}: React.PropsWithChildren<ParallaxProps>) {
  const motionRef = useRef(null);

  return (
    <div className={className} ref={motionRef}>
      {children}
    </div>
  );
}
