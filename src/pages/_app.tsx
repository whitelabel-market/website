import React from 'react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Header from '@/components/Header';
import '../styles/globals.css';
import '../styles/locomotive-scroll.css';
import Footer from '@/components/Footer';
import Body from '@/components/Body';
import Scroller from '@/components/Scroller';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Header />

        <Scroller>
          <Body>
            <Component {...pageProps} />
          </Body>

          <Footer />
        </Scroller>
      </ThemeProvider>
    </>
  );
}
