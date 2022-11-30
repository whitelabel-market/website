import React, { useRef } from 'react';
import Tag from '@/components/Tag';
import gsap from 'gsap';
import { useDevice } from '@/hooks/useDevice';
import ScrollFadeIn from '@/components/ScrollFadeIn';

export default function About() {
  const { useEffectIfCursor } = useDevice();
  const aboutRef = useRef(null);

  useEffectIfCursor(() => {
    const tween = gsap.fromTo(
      aboutRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: `top top+=12.5%`,
          end: `bottom center+=25%`,
          toggleActions: `play reverse restart reverse`,
        },
      },
    );

    return () => {
      tween.kill();
    };
  });

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`bg-black text-yellow flex flex-col justify-center lg:min-h-[110vh] overflow-hidden`}
    >
      <div
        className="container-default !max-w-4xl"
        data-scroll
        data-scroll-speed="-8.5"
        data-scroll-offset="-100%,-100%"
      >
        <ScrollFadeIn as={<div className={`space-y-12`} />}>
          <div>
            <Tag color={`yellow`}>About</Tag>
          </div>
          <h2 className={`text-title`}>Kickstart your Product With Us</h2>
          <div className={`w-full max-w-lg space-y-8`}>
            <p className={`text-description`}>
              We are a young German-speaking team of excellent programmers,
              computer scientists and Web 3.0 enthusiasts based in Germany -
              Berlin.
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
