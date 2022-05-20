import React from "react";
import { images } from "../../constants";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { ReactComponent as DummyLogo01 } from "../../assets/icons/dummyLogo01.svg";
import { ReactComponent as DummyLogo02 } from "../../assets/icons/dummyLogo02.svg";
import { ReactComponent as DummyLogo03 } from "../../assets/icons/dummyLogo03.svg";
import { StatisticNumber } from "../../components";

const Clients = () => {
  const statistics = [
    { number: 489, title: "Projects Completed" },
    { number: 356, title: "Happy Clients" },
    { number: 789, title: "Contest" },
  ];
  return (
    <div className="mt-20 px-7 lg:flex lg:items-center lg:justify-between lg:px-28">
      <div className="lg:w-2/3">
        <h2 className="mb-5 text-4xl font-bold text-dark-secondary dark:text-white lg:text-5xl">
          Our Beloved Clients
        </h2>
        <p className="mb-8 text-sm font-light dark:text-[#E5E5E5] lg:max-w-md lg:text-base">
          We recognise our clients are the experts in their industry and we make
          sure to make the best use of their knowledge to mutually achieve our
          goals.
        </p>
        <div className="mb-8 flex items-start justify-between lg:mb-14 lg:justify-start lg:space-x-10">
          {statistics.map((statistic, index) => (
            <div key={index} className="flex flex-col items-center ">
              <StatisticNumber
                number={statistic.number}
                className="text-5xl lining-nums text-dark-secondary dark:text-white lg:text-7xl"
              />
              {/* <h3 className="text-5xl lining-nums text-dark-secondary dark:text-white lg:text-7xl">
                {statistic.number}
              </h3> */}
              <p className="text-xs font-light text-dark-terniary dark:text-[#E5E5E5] lg:text-base">
                {statistic.title}
              </p>
            </div>
          ))}
        </div>
        <div className="mb-5 flex space-x-6 lg:mb-14 lg:space-x-10">
          <DummyLogo01 className="h-auto w-1/3 fill-current text-dark-secondary dark:text-[#E5E5E5] lg:w-[153px]" />
          <DummyLogo02 className="h-auto w-1/3 fill-current text-dark-secondary dark:text-[#E5E5E5] lg:w-[153px] " />
          <DummyLogo03 className="h-auto w-1/3 fill-current text-dark-secondary dark:text-[#E5E5E5] lg:w-[153px] " />
        </div>
        <a
          href="#"
          className="flex items-center space-x-2 text-base font-bold text-dark-secondary dark:text-white lg:text-2xl"
        >
          <h5 className="">See All</h5>
          <ArrowRightIcon className="h-5 w-5" />
        </a>
      </div>
      <img className="hidden lg:block lg:w-1/3" src={images.mockup} alt="" />
    </div>
  );
};

export default Clients;
