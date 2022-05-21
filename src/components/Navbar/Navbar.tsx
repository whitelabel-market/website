import React, { useState, useRef, useEffect } from "react";
import { XIcon } from "@heroicons/react/outline";
import { images } from "../../constants";

const Navbar = () => {
  const topHamburgerLine = useRef(null);
  const bottomHamburgerLine = useRef(null);
  const mobileMenu = useRef(null);
  const [toggle, setToggle] = useState(false);
  const navigations = [
    { name: "About Us", link: "#about" },
    { name: "Features", link: "#features" },
    { name: "Teams", link: "#teams" },
    { name: "Portfolio", link: "#portfolio" },
  ];

  useEffect(() => {
    if (toggle) {
      topHamburgerLine.current.style.width = "100%";
      bottomHamburgerLine.current.style.width = "100%";
      mobileMenu.current.style.transform = "translateX(0px)";
    } else {
      topHamburgerLine.current.style.width = "50%";
      bottomHamburgerLine.current.style.width = "50%";
      mobileMenu.current.style.transform = "translateX(100%)";
    }
  }, [toggle]);

  return (
    <nav className="absolute top-4 z-50 w-[90%] lg:top-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start">
          <img
            className="h-[26px] w-[135px] 2xl:h-[40px] 2xl:w-[180px]"
            src={images.logo}
            alt="logo"
          />
        </div>
        <ul className="hidden items-center space-x-10 lg:flex">
          {navigations.map((nav, index) => (
            <li
              className="text-right text-base capitalize text-white"
              key={nav.name + index}
            >
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
          <li className="w-[82px] rounded-[7px] bg-white py-3 text-center text-sm font-medium capitalize text-black ">
            <a href="#works">Contact</a>
          </li>
        </ul>
        <button
          onClick={() => setToggle(!toggle)}
          className="flex w-[32px] flex-col space-y-[6px] p-[6px] lg:hidden"
        >
          <div
            ref={topHamburgerLine}
            className="ml-auto  h-[2px] w-1/2 rounded-full bg-white transition-all duration-300"
          ></div>
          <div className="h-[2px] w-full rounded-full bg-white"></div>
          <div
            ref={bottomHamburgerLine}
            className="mr-auto h-[2px] w-1/2 rounded-full bg-white transition-all duration-300"
          ></div>
        </button>
      </div>
      <div
        ref={mobileMenu}
        className="fixed right-0 top-0 z-[999] flex h-screen w-8/12 flex-col items-end bg-white p-7 transition-all duration-300 dark:bg-black lg:hidden"
      >
        <button onClick={() => setToggle(false)}>
          <XIcon className="h-[25px] w-[25px] text-black dark:text-white" />
        </button>
        <ul className="mt-20 flex flex-col space-y-4 ">
          {navigations.map((nav, index) => (
            <li
              className="text-right text-xl font-bold uppercase text-black dark:text-white"
              key={nav.name + index}
            >
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
          <li className="w-[153px] rounded-[7px] bg-black py-3 text-center text-sm font-medium capitalize text-white dark:bg-white dark:text-black">
            <a href="#works">Our Work</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
