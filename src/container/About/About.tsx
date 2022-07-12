import React from 'react';
import { images } from '../../constants';
import {
  IoInformationCircleOutline,
  IoTrendingUpOutline,
} from 'react-icons/io5';
import Card from '../../components/Card';
import SectionTitle from '../../components/SectionTitle';
import Link from 'next/link';
import { ButtonPrimary } from '../../components';

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
      <SectionTitle title={`Kick Start Your Product With Us`} />
      <div className="w-full max-w-5xl mx-auto space-y-8 px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <Card title={`Who we Are`} icon={<IoInformationCircleOutline />}>
            We are a young German-speaking team of excellent programmers,
            computer scientists and Web 3.0 enthusiasts. We are based in Germany
            - Berlin. Therefore, German quality standards are important to us.
          </Card>

          <Card title={`Our Mission`} icon={<IoTrendingUpOutline />}>
            We believe that the future of the internet and Web3 will be driven
            by transparent and open communities and it is our mission to speed
            up this shift for our clients.
          </Card>

          <div className="lg:col-span-2 flex justify-center">
            <Link href={`/#`} passHref>
              <ButtonPrimary>Get Started</ButtonPrimary>
            </Link>
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
    </section>
  );
};

export default About;
