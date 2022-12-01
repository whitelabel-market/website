import React from 'react';
import Image from 'next/image';
import { images } from '@/constants';
import Parallax from '@/components/Parallax';

export default function Intersection() {
  return (
    <section
      className={`relative !py-0 bg-neutral-100 dark:bg-black flex flex-col`}
    >
      <span
        className={`absolute top-0 left-0 h-1/3 w-full bg-neutral-200 dark:bg-neutral-400 -mt-px`}
      />
      <div
        className={`relative self-end lg:self-start w-[calc(100%_-_2rem)] lg:w-2/3 overflow-hidden`}
      >
        <span className={`block w-full aspect-video`} />
        <Parallax
          as={Image}
          speed={-3}
          className={`absolute top-0 left-0 w-full h-full`}
          src={images.future}
          alt={`Future`}
          layout={`fill`}
        />
      </div>
    </section>
  );
}
