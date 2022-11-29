import React from 'react';
import { images } from '@/constants';
import Image from 'next/image';
import Tag from '@/components/Tag';
import ScrollFadeIn from '@/components/ScrollFadeIn';

export default function Experience() {
  const technologies = [
    {
      name: `polkadot`,
      imgUrl: images.polkadot,
      url: `https://polkadot.network/`,
    },
    { name: `warp`, imgUrl: images.warp, url: `https://www.warp.finance/` },
    {
      name: `fractal`,
      imgUrl: images.fractal,
      url: `https://protocol.fractal.id/`,
    },
    {
      name: `nakamoto`,
      imgUrl: images.nakamoto,
      url: `https://www.stelalabs.com/`,
    },
    {
      name: `stelalabs`,
      imgUrl: images.stelalabs,
      url: `https://www.peaq.network/`,
    },
    { name: `peaq`, imgUrl: images.peaq, url: `https://www.nakamo.to/` },
  ];

  return (
    <>
      <section className={`relative !py-0 bg-black flex flex-col`}>
        <span
          className={`absolute top-0 left-0 h-1/3 w-full bg-neutral-400 -mt-px`}
        />
        <div
          className={`relative self-end lg:self-start w-[calc(100%_-_2rem)] lg:w-2/3 overflow-hidden`}
        >
          <span className={`block w-full aspect-video`} />
          <Image
            data-scroll
            data-scroll-speed="-3"
            className={`absolute top-0 left-0 w-full h-full`}
            src={images.future}
            alt={`Future`}
            layout={`fill`}
          />
        </div>
      </section>

      <section className={`bg-black text-yellow`}>
        <div className={`container-default grid lg:grid-cols-4 gap-16`}>
          <ScrollFadeIn
            as={<div className="lg:col-start-2 lg:col-span-2 space-y-16" />}
          >
            <div>
              <Tag color={`yellow`}>Expertise</Tag>
            </div>
            <h2 className={`text-title`}>
              Building the digital economy of tomorrow
            </h2>
            <p className={`text-description`}>
              We invest in the most innovative ideas that address unmet market
              needs in finance and technology. We are particularly interested in
              distributed ledger technologies which enable innovation across a
              wide range of industries.
            </p>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
