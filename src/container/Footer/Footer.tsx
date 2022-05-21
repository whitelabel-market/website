import React from "react";
import { images, icons } from "../../constants";

const Logo = icons.LogoIcon

const Footer = () => {
  const navigations = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Service", link: "#service" },
    { name: "Contact us", link: "#contact" },
  ];
  const socials = [
    { name: "Dribble", link: "#" },
    { name: "Behance", link: "#" },
    { name: "Instagram", link: "#" },
    { name: "Twitter", link: "#" },
  ];
  return (
    <footer className="px-7 py-7 lg:mt-14 lg:px-28 lg:py-10">
      <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between">
        <Logo className="h-auto w-[135px] fill-current text-dark-secondary dark:text-[#E8E8E8]" />
        <ul className="mb-4 flex space-x-6 lg:space-x-12">
          {navigations.map((nav, index) => (
            <li
              key={nav.name + index}
              className="text-sm font-medium text-dark-terniary dark:text-[#E8E8E8] lg:text-base"
            >
              <a href={nav.link}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 lg:mt-8 lg:flex lg:items-center lg:justify-between">
        <ul className="hidden lg:flex lg:space-x-8">
          {socials.map((social, index) => (
            <li
              key={social.name + index}
              className="text-base font-medium text-dark-terniary dark:text-[#E5E5E5]"
            >
              <a href={social.link}>{social.name}</a>
            </li>
          ))}
        </ul>
        <p className="text-center text-sm font-light text-dark-terniary dark:text-[#E5E5E5]">
          &copy; Copyright NXT YOU GmbH
        </p>
      </div>
    </footer>
  );
};

export default Footer;
