import React from 'react';
import { images } from '@/constants';
import Image from 'next/image';
import Tag from '@/components/Tag';
import { ParallaxBanner } from 'react-scroll-parallax';

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
      <section className={`relative !p-0 bg-black`}>
        <span className={`absolute top-0 left-0 h-1/3 w-full bg-neutral-400`} />
        <div className={`relative w-full lg:w-2/3`}>
          <ParallaxBanner
            layers={[
              {
                speed: 12,
                children: (
                  <Image
                    className={`absolute inset-0 object-cover`}
                    src={images.future}
                    alt={`Future`}
                    layout={`fill`}
                  />
                ),
              },
            ]}
            className={`aspect-video`}
          />
        </div>
      </section>
      <section className={`bg-black text-yellow`}>
        <div className="container max-w-4xl w-full mx-auto px-8 lg:px-16 space-y-16">
          <div className={`w-full max-w-lg space-y-16`}>
            <Tag color={`yellow`}>Expertise</Tag>

            <h2 className={`text-5xl leading-tight`}>
              Building the digital economy of tomorrow
            </h2>

            <div className={`w-full`}>
              <p>
                We invest in the most innovative ideas that address unmet market
                needs in finance and technology. We are particularly interested
                in distributed ledger technologies which enable innovation
                across a wide range of industries.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:gap-16 grid-cols-2 lg:grid-cols-4">
            {technologies.map((technology, index) => (
              <a
                target="_blank"
                rel="noreferrer"
                key={technology.name + index}
                href={technology.url}
                className="relative flex items-center justify-center"
              >
                <Image src={technology.imgUrl} alt={technology.name} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
