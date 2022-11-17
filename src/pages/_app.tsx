import React from 'react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';

import '../styles/globals.css';
import Footer from '@/components/Footer';
import Body from '@/components/Body';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <div>
          <Header />

          <Body>
            <Component {...pageProps} />
          </Body>

          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
