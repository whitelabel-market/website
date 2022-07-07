import React from 'react';
import { images, icons } from '../../constants';
import Link from 'next/link';
import { ExternalLinkIcon, LinkIcon } from '@heroicons/react/outline';

const Logo = icons.LogoIcon;

const Footer = () => {
  const Home = {
    Home: '/',
    About: '/#about',
    Service: '/#service',
    'Contact us': '/#contact',
  };

  const CaseStudies = {
    Home: '/',
    About: '/#about',
    Service: '/#service',
    'Contact us': '/#contact',
  };

  const Social = {
    Dribble: '/',
    Behance: '/',
    Instagram: '/',
    Twitter: '/',
  };

  const Legal: Record<string, string> = {
    Privacy: '/privacy',
    'Terms of usage': '/terms',
  };
  const routes: Record<string, Record<string, string>> = {
    Home,
    'Case Studies': CaseStudies,
    Social,
  };

  return (
    <footer className="bg-neutral-900 dark:bg-black text-white border-b-4 border-brand">
      <div className="grid lg:grid-cols-12 lg:p-4">
        <div className="flex flex-col p-4 lg:p-12 lg:col-span-3">
          <div className="flex flex-col space-y-12 text-white/90">
            <Logo className="h-auto w-20 fill-current" />
            <h5 className="font-bold text-3xl">Decentum</h5>
          </div>

          <div className="mt-auto">
            <p className="text-white/50 font-light text-xs">
              {' '}
              We help grow the future industry - Be part of the digital
              revolution and get the most of the value of the internet.
            </p>
          </div>
        </div>
        <div className={'lg:col-span-9 grid lg:grid-cols-3'}>
          {Object.keys(routes).map((title: string, i) => (
            <div className="flex flex-col p-4 lg:p-12 justify-start" key={i}>
              <div className="">
                <h6 className={'font-serif text-sm text-brand'}>{title}</h6>
              </div>

              <ul className="pt-32 pb-24 lg:pb-16 flex flex-col space-y-1 mt-auto">
                {Object.keys(routes[title]).map((name, j) => (
                  <li key={i + j}>
                    <Link href={routes[title][name]} passHref>
                      <a className="text-xs uppercase font-light inline-flex items-center space-x-2">
                        <span className={'block'}>{name}</span>
                        <ExternalLinkIcon className="w-3 h-3" />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="p-4 lg:p-12">
            <p className="text-white/50 font-light text-xs">
              &copy; Copyright Decentum
            </p>
          </div>
          <div className="p-4 lg:p-12 text-white/50 font-light text-xs">
            <Link href={Legal.Privacy}>Privacy Policy</Link> &{' '}
            <Link href={Legal['Terms of usage']}>Terms of usage</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
