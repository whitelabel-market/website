import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { LocomotiveScrollProvider, type Scroll } from 'react-locomotive-scroll';

export default function LocomotiveScroll({
  children,
}: React.PropsWithChildren<any>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { asPath } = useRouter(); // With next/router

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={
        [
          //...all the dependencies we want to watch to update the scroll EXCEPT the location one
        ]
      }
      location={asPath}
      containerRef={containerRef}
      onLocationChange={(lms: Scroll) =>
        lms.scrollTo(0, { duration: 0, disableLerp: true })
      }
    >
      <div data-scroll-container={true} ref={containerRef}>
        {children}
      </div>
    </LocomotiveScrollProvider>
  );
}
