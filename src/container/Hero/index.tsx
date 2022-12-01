import React, { useRef } from 'react';
import Blob from '@/components/Blob';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import Parallax from '@/components/Parallax';
import ScrollIndicator from '@/container/Hero/ScrollIndicator';

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <div
      className={`relative flex flex-col justify-end w-full min-h-[100vh] pb-32 pt-64 xl:pb-0 overflow-hidden`}
      ref={heroRef}
    >
      <Parallax
        speed={-7}
        className={`absolute top-0 left-0 w-full h-full overflow-hidden`}
      >
        <Blob />
      </Parallax>

      <div
        className={`relative container-default sm:max-w-xl lg:max-w-4xl flex flex-col justify-center mix-blend-difference`}
      >
        <Parallax speed={-9}>
          <ScrollFadeIn
            as={<div className={`space-y-12 xl:pt-[32vh] pr-4 sm:pr-0`} />}
          >
            <div className={`w-full `}>
              <h1 className={`text-title-2 text-neutral-400`}>
                We help grow the Future Industry
              </h1>
            </div>
            <div className={`w-full max-w-sm`}>
              <h2 className={`text-description`}>
                Be part of the digital revolution and get the most of the value
                of the internet
              </h2>
            </div>

            <div
              className={`absolute -bottom-20 right-8 sm:-bottom-12 xl:-right-[12vw] z-20`}
            >
              <ScrollIndicator />
            </div>
          </ScrollFadeIn>
        </Parallax>
      </div>
    </div>
  );
}
