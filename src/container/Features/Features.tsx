import React from "react";
import { Button } from "../../components";
import { images } from "../../constants";
import { videos } from "../../constants";

const Features = () => {
  return (
    <div className="mt-14 flex flex-col space-y-24 lg:mt-24 lg:space-y-0 lg:px-20">
      <div className="flex flex-col justify-between lg:flex-row-reverse lg:items-center ">
        <div className="lg:-mr-20 lg:h-[600px] lg:w-[2450px]">
          <video className=" h-full w-full object-cover" muted autoPlay loop>
            <source src={videos.featureVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="px-7 pt-10">
          <h3 className="text-6xl font-bold text-[#2B2B2B] opacity-20 dark:text-white lg:text-7xl">
            01
          </h3>
          <h4 className="my-2 text-xs font-medium text-[#565656] dark:text-[#E5E5E5] lg:text-lg">
            Strategic support for blockchain ecosystems.
          </h4>
          <h2 className="text-2xl font-medium text-dark-secondary dark:text-white lg:text-3xl">
            Bringing the Web 3.0 era to its maximum potential
          </h2>
          <p className="my-6 text-sm font-light text-dark-terniary dark:text-[#E8E8E8] lg:text-base">
            Our ultimate vision is to bring Web 3.0 to its maximum potential.
            Through decentralization, we empower users while increasing
            efficiency, data security and transparency. We realize this vision
            as an active venture builder, investor and partner for promising
            blockchain projects.
          </p>
          <Button name="Learn More" isSecondary={true} />
        </div>
      </div>
      <div className="flex flex-col justify-between lg:flex-row lg:items-center lg:space-x-16">
        <div className="lg:-ml-20 lg:h-[600px] lg:w-[2940px]">
          <video className=" h-full w-full object-cover" muted autoPlay loop>
            <source src={videos.featureVideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="px-7 pt-10">
          <h3 className="text-6xl font-bold text-[#2B2B2B] opacity-20 dark:text-white lg:text-7xl">
            02
          </h3>
          <h4 className="my-2 text-xs font-medium text-[#565656] dark:text-[#E5E5E5] lg:text-lg">
            Incubation of our projects
          </h4>
          <h2 className="text-2xl font-medium text-dark-secondary dark:text-white lg:text-3xl">
            Realizing the most innovative ideas in blockchain
          </h2>
          <p className="my-6 text-sm font-light text-dark-terniary dark:text-[#E8E8E8] lg:text-base">
            Our team incubates projects with distributed technology and provides
            the resources to build a successful product. Our goal is to deliver
            maximum value to users while solidifying the business model. In this
            way, we produce companies that are both profitable and impactful,
            driving blockchain towards mainstream use.
          </p>
          <Button name="Learn More" isSecondary={true} />
        </div>
      </div>
    </div>
  );
};

export default Features;
