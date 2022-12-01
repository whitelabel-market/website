import React from 'react';
import Link from 'next/link';
import { routes } from '@/constants';

export default function DecentumIcon() {
  return (
    <Link href={routes.Home.Home} passHref>
      <a className={`inline-block text-2xl font-bold tracking-tighter link-2`}>
        Decentum
      </a>
    </Link>
  );
}
