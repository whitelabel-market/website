import React from 'react';
import {
  ArrowRightIcon,
  ChartBarIcon,
  ClipboardCheckIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline';
import {
  DummyLogoIcon1,
  DummyLogoIcon2,
  DummyLogoIcon3,
} from '../../components/Icons/DummyLogoIcons';
import { Button, StatisticNumber } from '../../components';

function ClientCard({ title, number, icon }: any) {
  return (
    <div className="flex bg-neutral-100 dark:bg-black rounded w-full justify-start items-center">
      <div className="inline-flex items-center justify-center w-16 aspect-square bg-neutral-900 dark:bg-neutral-800 text-white rounded">
        <div className="h-6 w-6">{icon}</div>
      </div>
      <div className="px-8">
        <h3 className="font-serif text-xl">{title}</h3>
      </div>
      <div className="ml-auto px-8">
        <StatisticNumber
          number={number}
          className="text-xl lining-nums font-bold"
        />
      </div>
    </div>
  );
}

const Clients = () => {
  const statistics = [
    { number: 20, title: `Projects Completed`, icon: <ClipboardCheckIcon /> },
    { number: 400, title: `Happy Clients`, icon: <EmojiHappyIcon /> },
    { number: 789, title: `Contest`, icon: <ChartBarIcon /> },
  ];
  return (
    <section>
      <div className="container mx-auto px-8 lg:px-16 ">
        <div className="pl-[30%] space-y-8 lg:space-y-16">
          <div className="space-y-8 w-full max-w-lg mb-8 lg:mb-16">
            <h2 className="font-serif text-5xl md:text-6xl">
              Our Beloved Clients
            </h2>
            <span className="block w-12 h-0.5 bg-brand" />
            <p className="text-black/50 dark:text-white/50 w-full w-4/5">
              We recognise our clients are the experts in their industry. We
              make sure to make the best use of their knowledge to mutually
              achieve our goals.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            {statistics.map((client, index) => (
              <ClientCard {...client} key={index} />
            ))}
          </div>
          <div>
            <ul className={`flex items-center justify-start divide-x`}>
              {[DummyLogoIcon1, DummyLogoIcon2, DummyLogoIcon3].map(
                (Icon, index) => (
                  <li className="px-8" key={index}>
                    <Icon className="h-6" />
                  </li>
                ),
              )}
              <li className="px-8">
                <Button isSecondary={true} name={`See All`} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
