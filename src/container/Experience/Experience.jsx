import React from "react";
import { images } from "../../constants";

const Experience = () => {
  const technologies = [
    {
      name: "polkadot",
      imgUrl: images.polkadot,
      url: "https://polkadot.network/",
    },
    { name: "warp", imgUrl: images.warp, url: "https://www.warp.finance/" },
    {
      name: "fractal",
      imgUrl: images.fractal,
      url: "https://protocol.fractal.id/",
    },
    {
      name: "nakamoto",
      imgUrl: images.nakamoto,
      url: "https://www.stelalabs.com/",
    },
    {
      name: "stelalabs",
      imgUrl: images.stelalabs,
      url: "https://www.peaq.network/",
    },
    { name: "peaq", imgUrl: images.peaq, url: "https://www.nakamo.to/" },
  ];
  return (
    <div className="mt-20 h-full bg-[url('./assets/images/experience-bg.jpg')] bg-cover bg-center bg-no-repeat py-14 px-7 lg:mx-28 lg:px-28">
      <div className="mb-12">
        <h2 className="mb-6 text-4xl text-white lg:text-5xl">Experience</h2>
        <p className="text-sm font-light text-[#E8E8E8] lg:max-w-sm lg:text-base">
          We invest in the most innovative ideas that address unmet market needs
          in finance and technology.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-9">
        {technologies.map((technology, index) => (
          <a
            target="_blank"
            rel="noreferrer"
            key={technology.name + index}
            href={technology.url}
            className="flex w-[303px] items-center justify-center rounded-lg bg-[#111111] py-6 transition-all duration-500 hover:hover:bg-[#666666] lg:w-full"
          >
            <img className="w-1/3 lg:w-1/2" src={technology.imgUrl} alt="" />
          </a>
        ))}
      </div>
      <p className="mt-10 text-lg font-light text-white lg:mt-14 lg:max-w-5xl">
        We are particularly interested in decentralized technologies such as
        blockchain, as these products have immense potential for innovation
        across a wide range of industries.
      </p>
    </div>
  );
};

export default Experience;
