import React, { useRef } from 'react';
import { IoHeart, IoRocketOutline } from 'react-icons/io5';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import { Tween } from 'react-gsap';
import { useMount } from 'react-use';
import gsap from 'gsap';
import Section from '@/components/Section';

function ClientCard({ title, count, index }: any) {
  const triggerRef = useRef(null);
  const [counter, setCounter] = React.useState({ value: 0 });

  const counterProps = {
    ease: `none`,
    duration: 2,
  };

  useMount(() => {
    const target = {
      value: counter.value,
    };

    gsap.to(target, {
      value: `+=${count}`,
      roundProps: `value`,
      onUpdate() {
        setCounter({ value: target.value });
      },
      scrollTrigger: {
        trigger: triggerRef.current,
        toggleActions: `play reverse restart reverse`,
      },
      ...counterProps,
    });
  });

  return (
    <div
      className="relative flex flex-1 items-end justify-between py-2"
      ref={triggerRef}
    >
      <div className={`flex items-center lg:items-end space-x-4 `}>
        <span
          className={`block tracking-wider text-xs lg:text-sm lg:leading-7`}
        >
          0{index + 1}.
        </span>
        <h3 className="text-xl lg:text-3xl">{title}</h3>
      </div>
      <div className={`flex flex-shrink-0 items-center justify-end w-20`}>
        <div className="text-2xl lg:text-3xl lining-nums font-bold">
          {counter.value}
        </div>
      </div>
      <Tween
        to={{
          width: `100%`,
        }}
        progress={counter.value / count}
        {...counterProps}
      >
        <span className={`block absolute bottom-0 left-0 w-0 h-0.5 bg-black`} />
      </Tween>
    </div>
  );
}

export default function Clients() {
  const stats = [
    { count: 12, title: `Projects Completed`, icon: <IoRocketOutline /> },
    { count: 39, title: `Happy Clients`, icon: <IoHeart /> },
  ];

  return (
    <Section
      color={`black`}
      bgColor={`gray`}
      id={`clients`}
      title={`Our Beloved Clients`}
      description={`We recognise our clients are the experts in their industry. We make sure to make the best use of their knowledge to mutually achieve our goals.`}
    >
      <div className={`lg:col-start-2 lg:col-span-3`}>
        <ul className={`flex flex-col space-y-4`}>
          {stats.map((client, index) => (
            <li className={`block`} key={index}>
              <ClientCard {...client} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
