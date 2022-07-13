import React from 'react';
import { ThemeProvider } from 'next-themes';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';

import '../styles/globals.css';
import Footer from '@/components/Footer';
import SettingsPopover from '@/components/Header/SettingsPopover';

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <div>
          <Header />

          <main>
            <Component {...pageProps} />
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
