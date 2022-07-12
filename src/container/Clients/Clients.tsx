import React from 'react';
import {
  DummyLogoIcon1,
  DummyLogoIcon2,
  DummyLogoIcon3,
} from '../../components/Icons/DummyLogoIcons';
import {
  ButtonOutline,
  ButtonSecondary,
  StatisticNumber,
} from '../../components';
import SectionTitle from '../../components/SectionTitle';
import { IoBulbOutline, IoHeart, IoRocketOutline } from 'react-icons/io5';

function ClientCard({ title, number, icon }: any) {
  return (
    <div className="flex bg-neutral-100 dark:bg-black rounded w-full justify-start items-center">
      <div className="inline-flex flex-grow-0 flex-shrink-0 items-center justify-center w-16 aspect-square bg-neutral-900 dark:bg-neutral-800 text-white rounded">
        <div className="block text-xl text-white">{icon}</div>
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
    { number: 20, title: `Projects Completed`, icon: <IoRocketOutline /> },
    { number: 400, title: `Happy Clients`, icon: <IoHeart /> },
    { number: 789, title: `Contest`, icon: <IoBulbOutline /> },
  ];
  return (
    <section id={`clients`}>
      <SectionTitle
        title="Our Beloved Clients"
        description={`We recognise our clients are the experts in their industry. We make sure to make the best use of their knowledge to mutually achieve our goals.`}
      >
        <div className="flex flex-col space-y-4">
          {statistics.map((client, index) => (
            <ClientCard {...client} key={index} />
          ))}
        </div>
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
      </SectionTitle>
    </section>
  );
};

export default Clients;
