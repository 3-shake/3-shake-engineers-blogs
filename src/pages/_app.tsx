import { config } from "@site.config";
import { SiteFooter } from "@src/components/SiteFooter";
import { SiteHeader } from "@src/components/SiteHeader";
import type { AppProps } from "next/app";
import { Open_Sans, Roboto } from "next/font/google";
import Head from "next/head";

import "@src/styles/globals.scss";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.variable} ${openSans.variable} app-wrapper`}>
      <Head>
        <link
          rel="icon shortcut"
          type="image/png"
          href={`${config.siteRoot}/logo.png`}
        />
      </Head>
      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
    </div>
  );
}
