import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

export default function DarkModeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Switch
      checked={theme === `light`}
      onChange={() => setTheme(theme === `light` ? `dark` : `light`)}
      className={`relative block h-5 w-10 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out bg-neutral-200`}
    >
      <span className="sr-only">Toggle Theme</span>
      <span
        aria-hidden="true"
        className={
          `shadow-2xl absolute text-base inline-flex items-center justify-center bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 top-1/2 left-0 pointer-events-none inline-block h-6 w-6 transform -translate-y-1/2 rounded-full transition duration-200 ease-in-out` +
          ` ` +
          (theme === `light` ? `translate-x-4` : `-translate-x-1`)
        }
      >
        {theme === `light` ? <IoMoonOutline /> : <IoSunnyOutline />}
      </span>
    </Switch>
  );
}
