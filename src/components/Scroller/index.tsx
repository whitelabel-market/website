import React from 'react';
import ScrollTriggerProxy from '@/components/Scroller/ScrollTriggerProxy';
import LocomotiveScroll from '@/components/Scroller/LocomotiveScroll';

export default function Scroller({ children }: React.PropsWithChildren<any>) {
  return (
    <LocomotiveScroll>
      <ScrollTriggerProxy />
      {children}
    </LocomotiveScroll>
  );
}
