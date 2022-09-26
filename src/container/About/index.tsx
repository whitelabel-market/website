import React, { useEffect, useRef } from 'react';
import Tag from '@/components/Tag';
import { gsap } from 'gsap';

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const vars = { opacity: 0, y: 8.5 };
    gsap.from(aboutRef?.current, {
      ...vars,
      scrollTrigger: {
        trigger: aboutRef?.current,
        start: `center bottom`,
        end: `center center`,
        scrub: true,
      },
    });

    gsap.to(aboutRef?.current, {
      ...vars,
      immediateRender: false,
      scrollTrigger: {
        trigger: aboutRef?.current,
        start: `bottom center`,
        end: `bottom top`,
        scrub: true,
      },
    });
  });

  return (
    <section
      id="about"
      className={`bg-black text-yellow flex flex-col justify-center min-h-screen`}
    >
      <div
        className="container w-full max-w-4xl mx-auto px-8 lg:px-16 space-y-16"
        ref={aboutRef}
      >
        <Tag color={`yellow`}>About</Tag>

        <h2 className={`text-6xl leading-tight`}>
          Kickstart your Product With Us
        </h2>

        <div className={`w-full max-w-lg space-y-8`}>
          <p className={`text-[#e0ccbb] text-lg`}>
            We are a young German-speaking team of excellent programmers,
            computer scientists and Web 3.0 enthusiasts based in Germany -
            Berlin.
          </p>

          {/*
          <p className={`text-[#e0ccbb]`}>
            We believe that the future of the internet and Web3 will be driven
            by transparent and open communities and it is our mission to speed
            up this shift for our clients.
          </p>
*/}
        </div>
      </div>

      {/*
                <div
                    className="mx-auto flex w-full snap-x snap-mandatory space-x-4 overflow-x-scroll lg:col-span-3 lg:order-first lg:grid lg:snap-none lg:grid-cols-3 lg:gap-8 lg:space-x-0 lg:overflow-x-visible ">
                    {teams.map((team, index) => (
                        <TeamCard
                            key={team.name + index}
                            name={team.name}
                            role={team.role}
                            imgUrl={team.image}
                            className=" w-full flex-shrink-0 snap-start snap-normal pb-6 lg:shrink lg:pb-0"
                        />
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center space-y-1 lg:hidden">
                    <Image src={icons.swipeIcon} alt={"swipe"}/>
                    <span className="text-xs uppercase">Swipe</span>
                </div>
*/}
    </section>
  );
}
