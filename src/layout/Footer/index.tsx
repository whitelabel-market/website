import React from 'react';
import { routes } from '@/constants';
import Link from 'next/link';
import Blob from '@/components/Blob';
import ThemeToggler from '@/layout/Footer/ThemeToggler';
import DecentumIcon from '@/components/Icons/DecentumIcon';

export default function Footer() {
  const footerRoutes = [routes.Home, routes.Contact];

  return (
    <footer className="relative flex min-h-[100vh] text-sm text-yellow overflow-hidden">
      <Blob />

      <div className={`relative z-10 flex flex-col justify-end flex-1`}>
        <div className="container max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-10 p-8 gap-8 sm:pt-32 lg:gap-y-32">
          <div className={`col-span-2 lg:col-span-10`}>
            <a
              href={routes.Contact.Contact}
              className="text-7xl sm:text-9xl link !leading-0 !after:h-0.5"
            >
              Let&apos;s Talk.
            </a>
          </div>

          <div className={`flex flex-col space-y-1 col-span-2 lg:col-span-3`}>
            <div>
              <DecentumIcon />
            </div>

            <span className={`block text-xs opacity-50 font-bold`}>
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
              <ThemeToggler />
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
