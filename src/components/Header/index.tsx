import MobileMenu from './MobileMenu';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { routes } from '@/constants';
import Link from 'next/link';
import MobileMenuButton from './MobileMenuButton';
import LogoIcon from '@/components/Icons/LogoIcon';
import SettingsPopover from '@/components/Header/SettingsPopover';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const fixedNavRef = useRef<HTMLDivElement>(null);

  function closeMenu() {
    setMenuActive(false);
  }

  function openMenu() {
    setMenuActive(true);
  }

  const items = routes.Home;

  useEffect(() => {
    const translateNav = gsap
      .from(fixedNavRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    const tween = ScrollTrigger.create({
      start: `top top`,
      end: `max`,
      onUpdate: (self) => {
        !menuActive || self.progress > 0.0
          ? self.direction === -1
            ? translateNav.play()
            : translateNav.reverse()
          : translateNav.play();
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <>
      <MobileMenu items={items} active={menuActive} />
      <div
        className={`flex justify-center top-0 left-0 w-full z-50 bg-transparent text-neutral-50 mix-blend-difference h-32 fixed transform pointer-events-none`}
        ref={fixedNavRef}
      >
        <nav className="flex flex-1 justify-between container px-8 lg:px-16">
          <div className="flex items-center justify-start space-x-2">
            <LogoIcon className={`block w-6 h-6`} />
            <span className={`block text-2xl font-black`}>Decentum</span>
          </div>

          <ul className="flex justify-center items-center space-x-4 lg:space-x-8">
            {Object.keys(items).map((name, index) => (
              <li key={name + index} className={`hidden lg:block`}>
                <Link href={items[name]} passHref>
                  <a className={`pointer-events-auto`}>{name}</a>
                </Link>
              </li>
            ))}

            <li className="relative px-4 lg:px-6 after:absolute after:top-1/2 after:block after:bg-brand after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:w-px after:h-8 after:right-0 lg:after:left-px">
              <SettingsPopover />
            </li>
            <li>
              <MobileMenuButton
                openMenu={openMenu}
                closeMenu={closeMenu}
                menuActive={menuActive}
              />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
