import { Popover, Transition } from '@headlessui/react';
import React from 'react';
import {
  IoEllipsisHorizontal,
  IoMoonOutline,
  IoPaperPlane,
  IoSunnyOutline,
} from 'react-icons/io5';
import { useTheme } from 'next-themes';
import Link from 'next/link';

interface SettingsPopoverItemProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  href?: string;
}

function SettingsPopoverItem({
  icon,
  title,
  onClick,
  href,
}: SettingsPopoverItemProps) {
  const ItemInnerComponent = href ? `a` : `button`;
  const itemInner = (
    <ItemInnerComponent
      className="flex w-full items-center justify-start p-2 space-x-4 hover:bg-gray-900 dark:hover:bg-gray-900 rounded"
      onClick={onClick}
    >
      {icon}
      <span className={`block`}> {title}</span>
    </ItemInnerComponent>
  );

  return (
    <li className={`block w-full`}>
      {href ? (
        <Link href={href} passHref>
          {itemInner}
        </Link>
      ) : (
        <>{itemInner}</>
      )}
    </li>
  );
}

export default function SettingsPopover({}: React.PropsWithChildren<any>) {
  const { theme, setTheme } = useTheme();

  return (
    <Popover className="relative">
      <Popover.Button
        className={`flex items-center justify-center rounded-full w-8 h-8 pointer-events-auto`}
      >
        <IoEllipsisHorizontal className="text-xl" />
      </Popover.Button>

      <Transition
        as="div"
        enter="ease-out-expo duration-100"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="ease-in-expo duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute pt-8 bottom-0 right-0 transform translate-y-full">
          <ul className="flex flex-col rounded-default w-48 p-2 border border-neutral-50 pointer-events-auto">
            <SettingsPopoverItem
              icon={theme === `light` ? <IoMoonOutline /> : <IoSunnyOutline />}
              title={theme === `light` ? `Dark Mode` : `Light Mode`}
              onClick={() => setTheme(theme === `light` ? `dark` : `light`)}
            />
            <SettingsPopoverItem icon={<IoPaperPlane />} title={`Contact`} />
          </ul>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
