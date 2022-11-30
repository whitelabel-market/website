import Head from 'next/head';
import React from 'react';
import Hero from '@/container/Hero';
import About from '@/container/About/';
import Features from '@/container/Features';
import Clients from '@/container/Clients';
import Mission from '@/container/Mission';
import Expertise from '@/container/Expertise';
import Intersection from '@/container/Intersection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Decentum – We help grow the future Industry</title>
        <meta name="description" content="Decentum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Mission />
      <Features />
      <Clients />
      <Intersection />
      <Expertise />
    </>
  );
}
