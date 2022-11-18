import React, { useRef } from 'react';
import Tag from '@/components/Tag';
import { Tween } from 'react-gsap';

export default function About() {
  const aboutRef = useRef(null);

  return (
    <section
      id="about"
      className={`bg-black text-yellow flex flex-col justify-center min-h-screen overflow-hidden`}
    >
      <Tween
        from={{ autoAlpha: 0 }}
        to={{
          autoAlpha: 1,
          scrollTrigger: {
            start: `center-=100px center`,
            end: `bottom+=100px bottom`,
            trigger: `#about`,
            scrub: 0.5,
          },
        }}
      >
        <div
          className="container-default !max-w-4xl"
          data-scroll
          data-scroll-speed="-8.5"
          data-scroll-offset="-100%,-100%"
        >
          <div className={`space-y-16 `} ref={aboutRef}>
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
        </div>
      </Tween>
    </section>
  );
}
