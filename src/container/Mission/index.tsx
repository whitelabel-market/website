import React, { useEffect, useRef } from 'react';
import { images } from '@/constants';
import Image from 'next/image';
import Tag from '@/components/Tag';
import { gsap } from 'gsap';
import { ParallaxBanner } from 'react-scroll-parallax';

export default function Mission() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.set(imageRef?.current, {
      webkitClipPath: `inset(0% 10%)`,
    });

    gsap.to(imageRef?.current, {
      webkitClipPath: `inset(0% 0%)`,
      scrollTrigger: {
        trigger: imageRef?.current,
        scrub: true,
      },
    });
  });

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

      <div ref={imageRef} className={`absolute inset-0 flex z-10`}>
        <ParallaxBanner
          layers={[
            {
              speed: 12,
              children: (
                <div className="absolute inset-0 flex">
                  <Image
                    src={images.mission}
                    className="flex-1 object-cover"
                    layout={`fill`}
                  />
                </div>
              ),
            },
          ]}
          className={`flex-1`}
        />
      </div>
    </section>
  );
}
