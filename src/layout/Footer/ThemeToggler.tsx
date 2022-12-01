import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useMount } from 'react-use';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useMount(() => setMounted(true));

  const iconClassName = `block w-3 h-3`;

  if (!mounted) {
    return <></>;
  }

  return (
    <button
      onClick={() => setTheme(theme === `dark` ? `light` : `dark`)}
      className="link-2 space-x-1 items-center"
    >
      <span className={`block`}>
        {theme === `dark` ? `Light Theme` : `Dark Theme`}
      </span>
      {theme === `dark` ? (
        <SunIcon className={iconClassName} />
      ) : (
        <MoonIcon className={iconClassName} />
      )}
    </button>
  );
}
