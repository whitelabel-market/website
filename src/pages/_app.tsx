import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Header from '@/components/Header';

import '../styles/globals.css';
import Footer from '@/components/Footer';
import Body from '@/components/Body';
import { ScrollerMotion } from 'scroller-motion';
import { useDcmScrollContainer } from '@/hooks/scroll';

export default function App({ Component, pageProps }: AppProps) {
  const scrollContainerRef = useRef(null);
  const [, setDcmScrollContainer] = useDcmScrollContainer();

  setDcmScrollContainer(scrollContainerRef);

  return (
    <>
      <ThemeProvider attribute="class">
        <Header />
        <ScrollerMotion
          ref={scrollContainerRef}
          spring={{ mass: 0.8, stiffness: 300, damping: 70 }}
          disabled={false}
        >
          <Body>
            <Component {...pageProps} />
          </Body>
          <Footer />
        </ScrollerMotion>
      </ThemeProvider>
    </>
  );
}
