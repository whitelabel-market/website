import React from 'react';
import { routes } from '@/constants';
import Link from 'next/link';
import Blob from '@/components/Blob';

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
            <Link href={`/contact`} passHref>
              <a className="inline-block text-8xl lg:text-9xl font-semibold opacity-90">
                Let&apos;s Talk.
              </a>
            </Link>
          </div>
          <div className={`col-span-2 lg:col-span-3`}>
            <span
              className={`text-4xl font-black tracking-tighter leading-tight`}
            >
              Decentum
            </span>
            <span className={`block text-[9px] font-light leading-tight`}>
              Be part of the digital revolution and get the
              <br />
              most of the value of the internet
            </span>
          </div>

          {footerRoutes.map((routeObj: Record<string, string>, i) => (
            <ul className="flex flex-col lg:col-span-2" key={i}>
              {Object.keys(routeObj).map((name, j) => (
                <li key={i + j}>
                  <Link href={routeObj[name]} passHref>
                    <a className="inline-block leading-relaxed font-semibold">
                      {name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <div className={`col-span-2 lg:col-span-3`}>
            <ul className="flex items-center gap-4">
              {Object.keys(routes.Social).map((name, i) => (
                <li key={i}>
                  <Link href={routes.Social[name]} passHref>
                    <a className="inline-block leading-relaxed font-semibold opacity-90">
                      {name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <span>&copy; Copyright Decentum</span>
            <ul className="mt-8">
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
