import type { NextPage } from 'next';
import Head from 'next/head';
import {
  About,
  Features,
  Clients,
  Expertise,
  Experience,
  Footer,
  Header,
} from '../container';

import { Navbar } from '../components';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Whitelabel Solutions</title>
        <meta name="description" content="Whitelabel Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Header />
        <About />
        <Features />
        <Clients />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
