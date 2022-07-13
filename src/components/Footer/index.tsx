import React from 'react';
import { routes } from '@/constants';
import Link from 'next/link';
import Logo from '@/components/Icons/LogoIcon';

export default function Footer() {
  const footerRoutes = {
    Home: routes.Home,
    Contact: routes.Contact,
    Social: routes.Social,
  } as Record<string, Record<string, string>>;

  return (
    <footer className="bg-neutral-900 text-neutral-50 border-b-4 border-brand">
      <div className="grid md:grid-cols-12 p-8 md:p-16 gap-8 md:gap-16">
        <div className="flex flex-col md:col-span-3">
          <div className="flex flex-col space-y-8 text-white/90">
            <Logo className="h-auto w-20 fill-current" />
            <h5 className="font-bold text-3xl">Decentum</h5>
          </div>

          <div className="mt-auto">
            <p className="text-white/50 font-light text-xs pt-2">
              We help grow the future industry - Be part of the digital
              revolution and get the most of the value of the internet.
            </p>
          </div>
        </div>
        <div
          className={`grid grid-cols-7 md:col-span-9 md:grid-cols-3 gap-8 md:gap-16`}
        >
          {Object.keys(footerRoutes).map((title: string, i) => (
            <div
              className="grid grid-cols-7 col-span-7 md:col-span-1 md:grid-cols-1 gap-8 md:gap-16"
              key={i}
            >
              <div className="col-span-3">
                <h6 className={`subtitle-2`}>{title}</h6>
              </div>

              <ul className="col-span-4 md:py-16 flex flex-col space-y-1 mt-auto">
                {Object.keys(footerRoutes[title]).map((name, j) => (
                  <li key={i + j}>
                    <Link href={footerRoutes[title][name]} passHref>
                      <a className="link">{name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-3 md:col-span-1">
            <p className="text-white/50 font-light text-xs ">
              &copy; Copyright Decentum
            </p>
          </div>
          <div className="text-white/50 font-light text-xs col-span-4 md:col-span-1">
            <Link href={routes.Legal.Privacy}>Privacy Policy</Link> &{` `}
            <Link href={routes.Legal[`Terms of usage`]}>Terms of usage</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
