import type { NextPage } from 'next'
import Head from 'next/head'
import {
     About,
     Features,
     Clients,
     Expertise,
     Experience,
     Footer,
     Header,
} from "../container";

import { DarkModeToggler } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Whitelabel Solutions</title>
        <meta name="description" content="Whitelabel Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white dark:bg-[#181818]">
          <Header />
          <About />
          <Features />
          <Clients />
          <Expertise />
          <Experience />
      </main>

        <DarkModeToggler />

        <Footer />
    </div>
  )
}

export default Home
