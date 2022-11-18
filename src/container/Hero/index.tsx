import React, { useRef } from 'react';
import Blob from '@/components/Blob';

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <div
      className={`relative top-0 left-0 w-full h-screen overflow-hidden`}
      ref={heroRef}
    >
      <Blob sticky={true} />

      <div
        className={`absolute container-default !max-w-4xl flex flex-col justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[6vh] lg:mt-[16vh] mix-blend-difference`}
      >
        <div className={`space-y-16`}>
          <h1 className={`text-title-2 text-neutral-400`}>
            We help grow the Future Industry
          </h1>
          <div className={`w-full max-w-sm`}>
            <h2 className={`text-description`}>
              Be part of the digital revolution and get the most of the value of
              the internet
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
