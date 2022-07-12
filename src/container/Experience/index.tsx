import React from 'react';
import { images } from '@/constants';
import Image from 'next/image';

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
    <section>
      <div className={`container mx-auto px-8 lg:px-16`}>
        <div className="relative w-full mx-auto p-8 lg:p-16 text-white">
          <Image
            placeholder={`blur`}
            src={images.experienceBg}
            layout="fill"
            alt={`Experience Background`}
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl`}
          />
          <div className="relative grid gap-4 lg:gap-8 lg:grid-cols-3">
            <div className={`lg:col-span-3 lg:w-3/5`}>
              <h2 className="title mb-8">Experience</h2>

              <p>
                We invest in the most innovative ideas that address unmet market
                needs in finance and technology. We are particularly interested
                in decentralized technologies such as blockchain, as these
                products have immense potential for innovation across a wide
                range of industries.
              </p>
            </div>

            {technologies.map((technology, index) => (
              <a
                target="_blank"
                rel="noreferrer"
                key={technology.name + index}
                href={technology.url}
                className="relative flex items-center justify-center rounded-xl bg-neutral-900 py-4 px-16 transition-all duration-300 hover:bg-neutral-800"
              >
                <Image src={technology.imgUrl} alt={technology.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
