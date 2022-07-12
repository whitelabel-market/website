import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import DarkModeToggler from '../DarkModeToggler/DarkModeToggler';

interface MobileMenuProps {
  items: Record<string, string>;
  active: boolean;
}

export default function MobileMenu({ items, active }: MobileMenuProps) {
  return (
    <Transition show={active} as={React.Fragment}>
      <Dialog onClose={() => null}>
        <Transition.Child as={React.Fragment}>
          <Dialog.Panel>
            <div
              className={`fixed top-0 left-0 h-screen w-full bg-default text-default z-40 flex flex-col`}
            >
              <div className="h-32" />
              <div className="flex flex-col py-4 px-0 flex-1 overflow-auto">
                <ul className="flex flex-col justify-center flex-1">
                  {Object.keys(items).map((name, index) => (
                    <li key={name + index}>
                      <Link href={items[name]} passHref>
                        <a className={`block text-4xl font-serif py-4 px-8`}>
                          {name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>

                <ul className={`flex items-center w-full space-x-8 py-4 px-8`}>
                  <li>
                    <DarkModeToggler />
                  </li>
                </ul>
              </div>

              <div className="h-12 px-8 border-t" />
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
