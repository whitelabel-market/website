import React, { useState, useRef, useEffect } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { icons } from '../../constants';
import { DarkModeToggler } from '../../components';
import Link from 'next/link';

const Navbar = () => {
  const navigations = [
    { name: `About Us`, link: `#about` },
    { name: `Features`, link: `#features` },
    { name: `Teams`, link: `#teams` },
    { name: `Portfolio`, link: `#portfolio` },
  ];

  return (
    <>
      <nav className="fixed flex justify-center top-0 left-0 w-full h-12 z-50 bg-brand text-white">
        <div className="flex flex-1 items-center justify-between container px-8 lg:px-16">
          <div className="flex-1 flex items-center justify-start space-x-1">
            <icons.LogoIcon className={`block w-5 h-5`} />
            <span className={`block text-xl font-black`}>Decentum</span>
          </div>

          <ul className="flex flex-1 font-serif items-center justify-center space-x-8 text-xs uppercase">
            {navigations.map((nav, index) => (
              <li key={nav.name + index}>
                <Link href={nav.link}>{nav.name}</Link>
              </li>
            ))}
          </ul>

          <ul>
            <li>
              <DarkModeToggler />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
