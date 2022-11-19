import React, { useEffect, useRef } from 'react';
import Tag from '@/components/Tag';
import gsap from 'gsap';

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const trigger = gsap.fromTo(
      aboutRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: `top top+=12.5%`,
          end: `bottom center+=33%`,
          toggleActions: `play reverse restart reverse`,
        },
      },
    );

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`bg-black text-yellow flex flex-col justify-center lg:min-h-[110vh] overflow-hidden`}
    >
      <div
        className="container-default !max-w-4xl space-y-12"
        data-scroll
        data-scroll-speed="-8.5"
        data-scroll-offset="-100%,-100%"
      >
        <Tag color={`yellow`}>About</Tag>
        <h2 className={`text-title`}>Kickstart your Product With Us</h2>
        <div className={`w-full max-w-lg space-y-8`}>
          <p className={`text-description`}>
            We are a young German-speaking team of excellent programmers,
            computer scientists and Web 3.0 enthusiasts based in Germany -
            Berlin.
          </p>
        </div>
      </div>
    </section>
  );
}
