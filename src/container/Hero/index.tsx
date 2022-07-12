import React from 'react';
import { videos } from '@/constants';

function HeroTitleContainer({ children }: React.PropsWithChildren<any>) {
  return <div className="container max-w-xl mx-auto px-8">{children}</div>;
}

function HeroTitle() {
  return (
    <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 z-20">
      <HeroTitleContainer>
        <h1 className="text-5xl text-white lg:text-7xl font-serif">
          We help
          <span className="relative font-black">
            &nbsp;grow&nbsp;
            {/*  <div className="-z-10 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gradient-radial from-brand/80 via-transparent to-transparent" />
             */}
          </span>
          the future industry
        </h1>
      </HeroTitleContainer>
      <div className="relative w-full my-8 h-px bg-white/20 -z-10">
        <div className="absolute left-0 w-full bottom-1/2 transform translate-y-1/2">
          <HeroTitleContainer>
            <div className="bg-brand h-1 w-20" />
          </HeroTitleContainer>
        </div>
      </div>
      <HeroTitleContainer>
        <p className="!text-white">
          Be part of the digital revolution and get the most of the value of the
          internet
        </p>
      </HeroTitleContainer>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center bg-black text-white pt-32 overflow-hidden">
      <div className="absolute flex top-0 left-0 w-full h-full">
        <div className="absolute inset-0 h-full w-full bg-black/90" />

        <video className="w-full flex-1 object-cover" muted autoPlay loop>
          <source src={videos.headerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <HeroTitle />
    </div>
  );
}
