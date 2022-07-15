import Head from 'next/head';
import React from 'react';
import ContactForm from '@/container/ContactForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Decentum – Contact</title>
        <meta name="description" content="Decentum contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactForm />
    </>
  );
}
