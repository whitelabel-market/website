import React from 'react';
import { IoHeart, IoRocketOutline } from 'react-icons/io5';
import StatisticNumber from '@/components/StatisticNumber/StatisticNumber';
import ScrollFadeIn from '@/components/ScrollFadeIn';

function ClientCard({ title, number, index }: any) {
  return (
    <div className="flex flex-1 items-end justify-between border-b border-black py-2 space-x-8">
      <div className={`flex items-center space-x-4`}>
        <span className={`block text-black/30 text-xs`}>0{index + 1}.</span>
        <h3 className="text-2xl lg:text-3xl">{title}</h3>
      </div>
      <div className={`flex flex-shrink-0 items-center justify-end w-20`}>
        <StatisticNumber
          number={number}
          className="text-2xl lg:text-3xl lining-nums font-bold"
        />
      </div>
    </div>
  );
}

export default function Clients() {
  const statistics = [
    { number: 12, title: `Projects Completed`, icon: <IoRocketOutline /> },
    { number: 39, title: `Happy Clients`, icon: <IoHeart /> },
  ];

  return (
    <section id={`clients`} className={`bg-neutral-400 text-black`}>
      <div className={`container-default grid lg:grid-cols-4 gap-16`}>
        <ScrollFadeIn
          as={<div className={`lg:col-start-2 lg:col-span-2 space-y-16`} />}
        >
          <h2 className={`text-title`}>
            Our Beloved <br />
            Clients
          </h2>
          <p className={`text-description`}>
            We recognise our clients are the experts in their industry. We make
            sure to make the best use of their knowledge to mutually achieve our
            goals.
          </p>
        </ScrollFadeIn>
        <div className={`lg:col-start-2 lg:col-span-3`}>
          <ScrollFadeIn as={<div className={`space-y-4`} />}>
            {statistics.map((client, index) => (
              <div key={index}>
                <ClientCard {...client} index={index} />
              </div>
            ))}
          </ScrollFadeIn>
        </div>
      </div>
      {/*
      <div>
        <ul
          className={`grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-8 items-center`}
        >
          {[DummyLogoIcon1, DummyLogoIcon2, DummyLogoIcon3].map(
            (Icon, index) => (
              <li className="" key={index}>
                <Icon className="h-8" />
              </li>
            ),
          )}
          <li className="col-span-2 md:col-span-1 flex lg:justify-end">
            <ButtonOutline>See All</ButtonOutline>
          </li>
        </ul>
      </div>
*/}
    </section>
  );
}
