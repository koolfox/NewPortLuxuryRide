import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import Script from "next/script";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
