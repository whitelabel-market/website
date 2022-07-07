import React from 'react';
import { Button } from '../../components';
import { images } from '../../constants';
import {
  QuestionMarkCircleIcon,
  TrendingUpIcon,
} from '@heroicons/react/outline';

function Card({ title, icon, children }: React.PropsWithChildren<any>) {
  return (
    <div className={`p-8 border-2 rounded flex flex-col`}>
      <h3 className="font-serif text-3xl mb-4">{title}</h3>
      <p>{children}</p>
      <span className="block text-black w-8 pt-16 mt-auto">{icon}</span>
      <span className="block absolute bottom-0 right-0 w-8 h-8" />
    </div>
  );
}

const About = () => {
  const teams = [
    {
      name: `Clemens Kauschke`,
      role: `Senior UX Designer`,
      image: images.clemens,
    },
    { name: `Manuel Grund`, role: `Senior IxD`, image: images.manuel },
    {
      name: `Arthur Grabowski`,
      role: `Creative Director`,
      image: images.arthur,
    },
    { name: `Marco Weh`, role: `Motion Designer`, image: images.marco },
    { name: `Harvey Specter`, role: `Lawyer`, image: images.harvey },
    { name: `Paul Richter`, role: `Senior UX Researcher`, image: images.paul },
  ];
  return (
    <section id="about">
      <div className="container mx-auto px-8 lg:px-16 relative">
        <div className="pl-[30%]">
          <div className="space-y-8 w-full max-w-lg mb-8 lg:mb-16">
            <h2 className="font-serif text-5xl md:text-6xl relative">
              Kick Start Your Product With Us
            </h2>
          </div>
        </div>

        <div className="w-full max-w-5xl mx-auto space-y-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <Card title={`Who we Are`} icon={<QuestionMarkCircleIcon />}>
              We are a young German-speaking team of excellent programmers,
              computer scientists and Web3.0 enthusiasts. We are based in
              Germany - Berlin. Therefore, German quality standards are
              important to us.
            </Card>

            <Card title={`Our Mission`} icon={<TrendingUpIcon />}>
              We believe that the future of the internet and Web3 will be driven
              by transparent and open communities and it is our mission to speed
              up this shift for our clients.
            </Card>

            <div className="lg:col-span-2 flex justify-center">
              <Button name="Get Started" href="#" />
            </div>
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
      </div>
    </section>
  );
};

export default About;
