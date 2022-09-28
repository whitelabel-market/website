import React from 'react';
import Blob from '@/components/Blob';
import { Parallax } from 'react-scroll-parallax';

export default function Hero() {
  return (
    <div className={`sticky top-0 left-0 -z-10`}>
      <Parallax speed={24} opacity={[2, 0]}>
        <Blob />
        <div
          className={`absolute container-default !max-w-4xl flex flex-col justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[6vh] lg:mt-[16vh] mix-blend-difference`}
        >
          <Parallax speed={-8} className={`space-y-16`}>
            <h1 className={`text-title-2 text-neutral-400`}>
              We help grow the Future Industry
            </h1>
            <div className={`w-full max-w-sm`}>
              <h2 className={`text-description`}>
                Be part of the digital revolution and get the most of the value
                of the internet
              </h2>
            </div>
          </Parallax>
        </div>
      </Parallax>
    </div>
  );
}
