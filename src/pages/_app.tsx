import React from 'react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/locomotive-scroll.css';
import Layout from '@/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
