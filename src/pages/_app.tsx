import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { AppProps } from 'next/app';

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <div>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
