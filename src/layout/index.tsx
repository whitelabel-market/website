import React, { PropsWithChildren } from 'react';
import Header from '@/layout/Header';
import PageTransition from '@/layout/PageTransition';
import Scroller from '@/layout/Scroller';
import Body from '@/layout/Body';
import Footer from '@/layout/Footer';

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Header />
      <PageTransition>
        <Scroller>
          <Body>{children}</Body>
          <Footer />
        </Scroller>
      </PageTransition>
    </>
  );
}
