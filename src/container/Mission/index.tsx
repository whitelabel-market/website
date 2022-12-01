import React, { useRef } from 'react';
import { images } from '@/constants';
import Image from 'next/image';
import Tag from '@/components/Tag';
import gsap from 'gsap';
import { useDevice } from '@/hooks/useDevice';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import Section from '@/components/Section';
import Parallax from '@/components/Parallax';

function MissionBgImage() {
  const { useEffectIfCursor } = useDevice();
  const imageRef = useRef(null);

  useEffectIfCursor(() => {
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
  });

  return (
    <div
      ref={imageRef}
      className={`absolute top-0 left-0 w-full h-full flex -z-10`}
    >
      <Parallax
        as={Image}
        speed={-2}
        className={`flex-1 object-cover `}
        src={images.mission}
        alt={`Future`}
        layout={`fill`}
      />
    </div>
  );
}
export default function Mission() {
  return (
    <Section
      id={`mission`}
      className={`lg:min-h-[110vh]`}
      disableTheme={true}
      color={`yellow`}
      tag={`Future vision`}
      title={`We are on a mission`}
      description={`We believe that the future of the internet and Web3 will be driven by transparent and open communities and it is our mission to speed up this shift for our clients.`}
    >
      <MissionBgImage />
    </Section>
  );
}
