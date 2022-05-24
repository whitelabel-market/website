import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
          <>
            <ThemeProvider attribute="class">
                <div className="bg-white dark:bg-neutral-900">
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
          </>
      )
}

export default MyApp
