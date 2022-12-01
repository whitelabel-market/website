import React, { useRef } from 'react';
import gsap from 'gsap';
import { useDevice } from '@/hooks/useDevice';
import Section from '@/components/Section';

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
    <Section
      ref={aboutRef}
      id={`about`}
      color={`yellow`}
      bgColor={`black`}
      tag={`About`}
      title={`Kickstart your Product With Us`}
      description={`We are a young German-speaking team of excellent programmers, computer scientists and Web 3.0 enthusiasts based in Germany - Berlin.`}
      className={`lg:min-h-[110vh] overflow-hidden`}
      parent={(props) => (
        <div
          data-scroll
          data-scroll-speed="-8.5"
          data-scroll-offset="-100%,-100%"
          {...props}
        />
      )}
    />
  );
}
