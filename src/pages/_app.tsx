import { AppProps } from "next/app";
import Head from "next/head";
import { Roboto, Open_Sans } from "next/font/google";
import { config } from "@site.config";
import { SiteHeader } from "@src/components/SiteHeader";
import { SiteFooter } from "@src/components/SiteFooter";

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
