import MobileMenu from './MobileMenu';
import React, { useState } from 'react';
import { routes } from '@/constants';
import MobileMenuButton from './MobileMenuButton';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  function closeMenu() {
    setMenuActive(false);
  }

  function openMenu() {
    setMenuActive(true);
  }

  const items = routes.Home;

  return (
    <>
      <div
        className={`flex justify-center top-0 left-0 w-full z-50 bg-transparent text-neutral-50 mix-blend-difference h-32 fixed transform pointer-events-none`}
      >
        <nav className="flex flex-1 justify-end container px-8 lg:px-16">
          <div className="flex items-center justify-end space-x-2">
            <div>
              <span className={`block text-2xl font-black tracking-tighter`}>
                Decentum
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
