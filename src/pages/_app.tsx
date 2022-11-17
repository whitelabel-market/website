import React from 'react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { ScrollerMotion } from 'scroller-motion';
import Header from '@/components/Header';

import '../styles/globals.css';
import Footer from '@/components/Footer';
import Body from '@/components/Body';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <ScrollerMotion>
          <Header />

          <Body>
            <Component {...pageProps} />
          </Body>

          <Footer />
        </ScrollerMotion>
      </ThemeProvider>
    </>
  );
}
