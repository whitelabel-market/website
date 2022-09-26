import React from 'react';
import { IoBulbOutline, IoHeart, IoRocketOutline } from 'react-icons/io5';
import StatisticNumber from '@/components/StatisticNumber/StatisticNumber';

function ClientCard({ title, number, index }: any) {
  return (
    <div className="flex flex-1 items-end justify-between border-b border-black py-1 space-x-8">
      <div className={`flex items-center space-x-4`}>
        <span className={`block text-black/50 text-xs`}>0{index + 1}</span>
        <h3 className="text-3xl">{title}</h3>
      </div>
      <div className={`flex flex-shrink-0 items-center justify-end w-20`}>
        <StatisticNumber
          number={number}
          className="text-3xl lining-nums font-bold"
        />
      </div>
    </div>
  );
}

export default function Clients() {
  const statistics = [
    { number: 20, title: `Projects Completed`, icon: <IoRocketOutline /> },
    { number: 400, title: `Happy Clients`, icon: <IoHeart /> },
    { number: 789, title: `Contest`, icon: <IoBulbOutline /> },
  ];
  return (
    <section id={`clients`} className={`bg-neutral-400 text-black`}>
      <div
        className={`container px-4 lg:px-8 mx-auto grid lg:grid-cols-3 gap-8`}
      >
        <div className={`lg:col-start-2 space-y-8`}>
          <h2 className={`text-6xl leading-tight`}>
            Our Beloved <br />
            Clients
          </h2>
          <div className={`text-xl`}>
            <p>
              We recognise our clients are the experts in their industry. We
              make sure to make the best use of their knowledge to mutually
              achieve our goals.
            </p>
          </div>
        </div>
        <div className={`lg:col-start-2 lg:col-span-2`}>
          <div className="space-y-4">
            {statistics.map((client, index) => (
              <ClientCard key={index} {...client} index={index} />
            ))}
          </div>
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
