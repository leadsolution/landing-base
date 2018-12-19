import Head from "next/head";
import React from "react";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import Form from "../components/form";
import "./index.scss";

export default class Index extends React.Component {
  componentDidMount() {
    ReactGA.initialize("");
    ReactGA.pageview(window.location.pathname);

    ReactPixel.init("");
    ReactPixel.pageView();
  }

  render() {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Landing_Base</title>
        </Head>
        <main role="main">
          <Form />
        </main>
      </>
    );
  }
}