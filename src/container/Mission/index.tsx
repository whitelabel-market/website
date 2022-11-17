import React from 'react';
import { images } from '@/constants';
import Image from 'next/image';
import Tag from '@/components/Tag';

export default function Mission() {
  return (
    <section
      id="mission"
      className={`relative bg-black text-yellow flex items-center w-full min-h-screen`}
    >
      <div className="relative container-default !max-w-4xl space-y-16 z-20">
        <Tag color={`yellow`}>Future vision</Tag>

        <h2 className={`text-title`}>We are on a mission</h2>

        <div className={`w-full max-w-lg space-y-8`}>
          <p className={`text-description`}>
            We believe that the future of the internet and Web3 will be driven
            by transparent and open communities and it is our mission to speed
            up this shift for our clients.
          </p>
        </div>
      </div>

      <Image
        src={images.mission}
        className="absolute top-0 left-0 w-full h-full z-10"
        layout={`fill`}
      />
    </section>
  );
}
