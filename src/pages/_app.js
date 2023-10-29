// million-ignore
import Layout from "@/components/layout"
import "@/styles/globals.css"
import localFont from "next/font/local"
import Head from "next/head"
import "react-notion-x/src/styles.css"
import { CartProvider } from "react-use-cart"
import "tailwindcss/tailwind.css"
import Script from "next/script"

const myFont = localFont({ src: "../fonts/iCielRams-Light.otf" })

import { config } from "@/lib/react-query-config"
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"

import { TailwindStyle } from "stailwc"

export default function App({ Component, pageProps }) {
  // This ensures that data is not shared
  // between different users and requests
  const [queryClient] = useState(() => new QueryClient(config))

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Script
        strategy="worker"
        src="https://www.googletagmanager.com/gtag/js?id=G-82CQ100WH6"
      ></Script>
      <Script id="google-analytics" strategy="worker">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-82CQ100WH6');`}
      </Script>
      <TailwindStyle />
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <CartProvider>
            <Layout>
              <main className={myFont.className}>
                <Component {...pageProps} />
              </main>
            </Layout>
          </CartProvider>
        </HydrationBoundary>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </QueryClientProvider>
    </>
  )
}
