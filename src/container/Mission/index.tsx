import React, { useEffect, useRef } from 'react';
import { images } from '@/constants';
import Image from 'next/image';
import Tag from '@/components/Tag';
import gsap from 'gsap';

export default function Mission() {
  const imageRef = useRef(null);

  useEffect(() => {
    const trigger = gsap.fromTo(
      imageRef.current,
      { webkitClipPath: `inset(0% 10%)` },
      {
        webkitClipPath: `inset(0% 0%)`,
        scrollTrigger: {
          trigger: imageRef.current,
          scrub: true,
          end: `center bottom-=33%`,
        },
      },
    );

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      id="mission"
      className={`relative bg-black text-yellow flex items-center w-full lg:min-h-[110vh]`}
    >
      <div className="relative container-default !max-w-4xl space-y-12 z-20">
        <Tag color={`yellow`}>Future vision</Tag>

        <h2 className={`text-title`}>We are on a mission</h2>

        <div className={`w-full max-w-lg`}>
          <p className={`text-description`}>
            We believe that the future of the internet and Web3 will be driven
            by transparent and open communities and it is our mission to speed
            up this shift for our clients.
          </p>
        </div>
      </div>

      <div
        ref={imageRef}
        className={`absolute top-0 left-0 w-full h-full flex z-10`}
      >
        <Image
          src={images.mission}
          className="flex-1 object-cover"
          data-scroll
          data-scroll-speed="-2"
          layout={`fill`}
        />
      </div>
    </section>
  );
}
