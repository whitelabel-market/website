import React from "react";
import { Button, TeamCard } from "../../components";
import { images } from "../../constants";
import { icons } from "../../constants";

const About = () => {
  const teams = [
    {
      name: "Clemens Kauschke",
      role: "Senior UX Designer",
      image: images.clemens,
    },
    { name: "Manuel Grund", role: "Senior IxD", image: images.manuel },
    {
      name: "Arthur Grabowski",
      role: "Creative Director",
      image: images.arthur,
    },
    { name: "Marco Weh", role: "Motion Designer", image: images.marco },
    { name: "Harvey Specter", role: "Lawyer", image: images.harvey },
    { name: "Paul Richter", role: "Senior UX Researcher", image: images.paul },
  ];
  return (
    <div
      id="about"
      className="px-7 pt-[54px] lg:-ml-7 lg:flex lg:flex-row-reverse lg:items-center lg:pr-28"
    >
      <div className="lg:w-1/3 lg:pl-12">
        <div className="">
          <h2 className="mb-[10px] text-[35px] text-5xl font-bold leading-none text-dark-secondary dark:text-white">
            Kick Start Your Product With Us
          </h2>
          <h3 className="text-[18px] font-bold leading-none text-dark-secondary dark:text-white lg:text-2xl">
            Who We Are
          </h3>
          <p className="pt-[7px] pb-[4px] text-sm font-light text-dark-terniary dark:text-white-secondary lg:text-base">
            We are a young German-speaking team of excellent programmers,
            computer scientists and Web3.0 enthusiasts. We work in the most
            beautiful city in Germany - Berlin. Therefore, German quality
            standards are also important to us.
          </p>
        </div>
        <div className="mt-[22px] mb-[20px]">
          <h3 className="text-[18px] font-bold leading-none text-dark-secondary dark:text-white lg:text-2xl">
            Our Mission
          </h3>
          <p className="pt-[7px] pb-[4px] text-sm font-light text-dark-terniary dark:text-white-secondary lg:text-base">
            We believe that the future of the internet and Web3 will be driven
            by transparent and open communities and it is our mission to speed
            up this shift for our clients.
          </p>
        </div>
        <Button name="Get Started" href="#" isSecondary={true} />
      </div>
      <div className="mx-auto mt-[58px] flex w-full snap-x snap-mandatory space-x-4 overflow-x-scroll lg:grid lg:w-2/3 lg:snap-none lg:grid-cols-3 lg:gap-x-0 lg:gap-y-7 lg:space-x-0 lg:overflow-x-visible ">
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
      <div className="mt-6 flex items-center justify-center space-x-2 lg:hidden">
        <span className="text-sm uppercase dark:text-white">Swipe</span>
        <img src={icons.swipeIcon} alt="" />
      </div>
    </div>
  );
};

export default About;
