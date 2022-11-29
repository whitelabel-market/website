import React from 'react';
import { routes } from '@/constants';
import Link from 'next/link';
import Blob from '@/components/Blob';

function FooterCta() {
  return (
    <a
      href={`mailto:hello@decentum.co`}
      className="relative inline-block text-8xl lg:text-9xl font-semibold opacity-90 hover:opacity-100 duration-300 group"
    >
      <span className={`block`}> Let&apos;s Talk.</span>
      <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-yellow group-hover:w-full duration-300" />
    </a>
  );
}
export default function Footer() {
  const footerRoutes = [routes.Home, routes.Contact];

  return (
    <footer className="relative h-screen text-yellow overflow-hidden">
      <Blob />

      <div
        className={`absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-end`}
      >
        <div className="container max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-10 p-8 gap-8 lg:gap-y-32">
          <div className={`col-span-2 lg:col-span-10`}>
            <FooterCta />
          </div>
          <div className={`col-span-2 lg:col-span-3`}>
            <span
              className={`text-4xl font-black tracking-tighter leading-tight`}
            >
              Decentum
            </span>
          </div>

          {footerRoutes.map((routeObj: Record<string, string>, i) => (
            <div className="flex flex-col lg:col-span-2" key={i} />
          ))}

          <div className={`col-span-2 lg:col-span-3`}>
            <span>&copy; Copyright Decentum</span>
            <ul>
              <li>
                <Link href={routes.Legal.Privacy}>Privacy policy.</Link>&nbsp;
                <Link href={routes.Legal[`Terms of usage`]}>
                  Terms of usage.
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
