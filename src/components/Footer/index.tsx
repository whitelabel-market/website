import React from 'react';
import { routes } from '@/constants';
import Link from 'next/link';
import Blob from '@/components/Blob';

function FooterCta() {
  return (
    <a
      href={routes.Contact.Contact}
      className="text-7xl sm:text-8xl lg:text-9xl link !leading-normal !after:h-0.5"
    >
      Let&apos;s Talk.
    </a>
  );
}
export default function Footer() {
  const footerRoutes = [routes.Home, routes.Contact];

  return (
    <footer className="relative h-screen text-yellow text-sm overflow-hidden">
      <Blob />

      <div
        className={`absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-end`}
      >
        <div className="container max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-10 p-8 gap-8 lg:gap-y-32">
          <div className={`col-span-2 lg:col-span-10`}>
            <FooterCta />
          </div>
          <div className={`flex flex-col space-y-1 col-span-2 lg:col-span-3`}>
            <span
              className={`block text-2xl font-bold tracking-tighter leading-tight`}
            >
              Decentum
            </span>
            <span className={`block text-xs opacity-40 font-bold`}>
              Berlin,
              <br />
              Germany
            </span>
          </div>

          {footerRoutes.map((routeObj: Record<string, string>, i) => (
            <ul className="flex flex-col lg:col-span-2" key={i}>
              {Object.keys(routeObj).map((name, j) => (
                <li key={`${i}-${j}`} className={`inline-flex`}>
                  <Link href={routeObj[name]} passHref>
                    <a className={`link-2`}>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <div
            className={`col-span-2 lg:col-span-3 space-y-12 flex flex-col justify-between`}
          >
            <div>
              <button className={`link-2`}>Light Theme</button>
            </div>
            <div className={`text-xs`}>
              <span className={`block`}>
                {new Date().getFullYear()} &copy; Copyright Decentum
              </span>

              <div className={`space-x-1`}>
                {Object.keys(routes.Legal).map((name, i) => (
                  <Link href={routes.Legal[name]} passHref key={i}>
                    <a className={`link-2`}>{name}.</a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
