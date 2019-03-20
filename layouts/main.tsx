import Head from "next/head";
import React, { PropsWithChildren, useEffect } from "react";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Main({ children }: PropsWithChildren<{}>) {
  useEffect(() => {
    ReactGA.initialize("");
    ReactPixel.init("");
  });

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>Landing_Base</title>

        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
          integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
          crossOrigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
          integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
          crossOrigin="anonymous"
        />
      </Head>

      <Header />

      <main className="main" role="main">
        {children}
      </main>

      <Footer />
    </>
  );
}
