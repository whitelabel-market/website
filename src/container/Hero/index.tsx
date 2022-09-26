import React from 'react';
import Blob from '@/components/Blob';

export default function Hero() {
  return (
    <div className={`sticky top-0 left-0 -z-10`}>
      <Blob />

      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[6vh] lg:mt-[16vh] flex flex-col space-y-12 justify-center container w-full max-w-4xl p-4 lg:p-16 text-white mix-blend-difference`}
      >
        <h1 className={`text-7xl text-neutral-400 leading-tight`}>
          We help grow the Future Industry
        </h1>
        <div className={`w-full max-w-sm`}>
          <h2 className={`text-lg`}>
            Be part of the digital revolution and get the most of the value of
            the internet
          </h2>
        </div>
      </div>
    </div>
  );
}
