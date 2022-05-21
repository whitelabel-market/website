import React from "react";
import { Navbar, Button } from "../../components";
import { videos } from "../../constants";

const Header = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center bg-black  bg-cover bg-no-repeat px-7 lg:px-28">
      <Navbar />
      <div className="absolute top-0 left-0 z-20">
        <div className="absolute z-20 h-full w-full bg-black opacity-75"></div>
        <video
          className="relative z-10 h-screen w-full object-cover lg:h-full"
          muted
          autoPlay
          loop
        >
          <source src={videos.headerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className="relative z-30 text-2xl text-[38px] font-bold text-white lg:text-[64px] lg:leading-none">
        We help grow the <br /> future industry
      </h1>
      <p className="relative z-30 pt-3 pb-5 text-sm font-normal text-white lg:max-w-sm lg:pt-7 lg:pb-10 lg:text-base">
        Be part of the “digital revolution” and get the most of the value of the
        internet.
      </p>
      <Button name="Our Work" href="#work" className="relative z-30" />
    </div>
  );
};

export default Header;
