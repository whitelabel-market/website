import React from 'react';
import ScrollTriggerProxy from '@/layout/Scroller/ScrollTriggerProxy';
import LocomotiveScroll from '@/layout/Scroller/LocomotiveScroll';

export default function Scroller({ children }: React.PropsWithChildren<any>) {
  return (
    <LocomotiveScroll>
      <ScrollTriggerProxy />
      {children}
    </LocomotiveScroll>
  );
}
